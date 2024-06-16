import { FilterQuery, Query } from 'mongoose';

class QueryBuilder<T> {
  public QueryModel: Query<T[], T>;
  public query: Record<string, unknown>;

  constructor(QueryModel: Query<T[], T>, query: Record<string, unknown>) {
    this.QueryModel = QueryModel;
    this.query = query;
  }
  search(searchableFields: string[]) {
    const searchTerm = this?.query?.searchTerm;
    if (searchTerm) {
      this.QueryModel = this.QueryModel.find({
        $or: searchableFields.map(
          (field) =>
            ({
              [field]: {
                $regex: searchTerm,
                $options: 'i',
              },
            }) as FilterQuery<T>,
        ),
      });
    }
    return this;
  }

  filter() {
    // making copy of the main query object to get the filter data only
    const filterQueryObject = { ...this.query };
    // deleting excluded fields whose values are not in the filter query
    const excludeFields = ['searchTerm', 'sort', 'limit', 'page', 'fields'];
    excludeFields.forEach((field) => delete filterQueryObject[field]);

    this.QueryModel = this.QueryModel.find(filterQueryObject as FilterQuery<T>);

    return this;
  }

  sort() {
    const sort =
      (this.query.sort as string)?.split(',')?.join(' ') || '-createdAt';
    this.QueryModel = this.QueryModel.sort(sort as string);

    return this;
  }

  paginate() {
    const page = Number(this.query.page) || 1;
    const limit = Number(this.query.limit) || 10;
    const skip = (page - 1) * limit;

    this.QueryModel = this.QueryModel.skip(skip).limit(limit);

    return this;
  }

  fields() {
    const fields =
      (this.query.fields as string)?.split(',')?.join(' ') || '-__v';
    this.QueryModel = this.QueryModel.select(fields);

    return this;
  }
}

export default QueryBuilder;
