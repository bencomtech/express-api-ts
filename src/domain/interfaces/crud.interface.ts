export interface CRUD {
  list: (limit: number, offset: number) => Promise<any>;
  getById: (resourceId: any) => Promise<any>;
  create: (resource: any) => Promise<any>;
  updateById: (resourceId: any, resource: any) => Promise<any>;
  deleteById: (resourceId: any) => Promise<any>;
}
