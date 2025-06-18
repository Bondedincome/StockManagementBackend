
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Role
 * 
 */
export type Role = $Result.DefaultSelection<Prisma.$RolePayload>
/**
 * Model Product
 * 
 */
export type Product = $Result.DefaultSelection<Prisma.$ProductPayload>
/**
 * Model Sale
 * 
 */
export type Sale = $Result.DefaultSelection<Prisma.$SalePayload>
/**
 * Model Purchase
 * 
 */
export type Purchase = $Result.DefaultSelection<Prisma.$PurchasePayload>
/**
 * Model ProductPurchase
 * 
 */
export type ProductPurchase = $Result.DefaultSelection<Prisma.$ProductPurchasePayload>
/**
 * Model ProductSale
 * 
 */
export type ProductSale = $Result.DefaultSelection<Prisma.$ProductSalePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.role`: Exposes CRUD operations for the **Role** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Roles
    * const roles = await prisma.role.findMany()
    * ```
    */
  get role(): Prisma.RoleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.product`: Exposes CRUD operations for the **Product** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.product.findMany()
    * ```
    */
  get product(): Prisma.ProductDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sale`: Exposes CRUD operations for the **Sale** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sales
    * const sales = await prisma.sale.findMany()
    * ```
    */
  get sale(): Prisma.SaleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.purchase`: Exposes CRUD operations for the **Purchase** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Purchases
    * const purchases = await prisma.purchase.findMany()
    * ```
    */
  get purchase(): Prisma.PurchaseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.productPurchase`: Exposes CRUD operations for the **ProductPurchase** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProductPurchases
    * const productPurchases = await prisma.productPurchase.findMany()
    * ```
    */
  get productPurchase(): Prisma.ProductPurchaseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.productSale`: Exposes CRUD operations for the **ProductSale** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProductSales
    * const productSales = await prisma.productSale.findMany()
    * ```
    */
  get productSale(): Prisma.ProductSaleDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.9.0
   * Query Engine version: 81e4af48011447c3cc503a190e86995b66d2a28e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Role: 'Role',
    Product: 'Product',
    Sale: 'Sale',
    Purchase: 'Purchase',
    ProductPurchase: 'ProductPurchase',
    ProductSale: 'ProductSale'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "role" | "product" | "sale" | "purchase" | "productPurchase" | "productSale"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Role: {
        payload: Prisma.$RolePayload<ExtArgs>
        fields: Prisma.RoleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          findFirst: {
            args: Prisma.RoleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          findMany: {
            args: Prisma.RoleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          create: {
            args: Prisma.RoleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          createMany: {
            args: Prisma.RoleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RoleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          delete: {
            args: Prisma.RoleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          update: {
            args: Prisma.RoleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          deleteMany: {
            args: Prisma.RoleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RoleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          upsert: {
            args: Prisma.RoleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          aggregate: {
            args: Prisma.RoleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRole>
          }
          groupBy: {
            args: Prisma.RoleGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoleGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoleCountArgs<ExtArgs>
            result: $Utils.Optional<RoleCountAggregateOutputType> | number
          }
        }
      }
      Product: {
        payload: Prisma.$ProductPayload<ExtArgs>
        fields: Prisma.ProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findFirst: {
            args: Prisma.ProductFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findMany: {
            args: Prisma.ProductFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          create: {
            args: Prisma.ProductCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          createMany: {
            args: Prisma.ProductCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          delete: {
            args: Prisma.ProductDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          update: {
            args: Prisma.ProductUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          deleteMany: {
            args: Prisma.ProductDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProductUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          upsert: {
            args: Prisma.ProductUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          aggregate: {
            args: Prisma.ProductAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduct>
          }
          groupBy: {
            args: Prisma.ProductGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductCountArgs<ExtArgs>
            result: $Utils.Optional<ProductCountAggregateOutputType> | number
          }
        }
      }
      Sale: {
        payload: Prisma.$SalePayload<ExtArgs>
        fields: Prisma.SaleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SaleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SaleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePayload>
          }
          findFirst: {
            args: Prisma.SaleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SaleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePayload>
          }
          findMany: {
            args: Prisma.SaleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePayload>[]
          }
          create: {
            args: Prisma.SaleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePayload>
          }
          createMany: {
            args: Prisma.SaleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SaleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePayload>[]
          }
          delete: {
            args: Prisma.SaleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePayload>
          }
          update: {
            args: Prisma.SaleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePayload>
          }
          deleteMany: {
            args: Prisma.SaleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SaleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SaleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePayload>[]
          }
          upsert: {
            args: Prisma.SaleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePayload>
          }
          aggregate: {
            args: Prisma.SaleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSale>
          }
          groupBy: {
            args: Prisma.SaleGroupByArgs<ExtArgs>
            result: $Utils.Optional<SaleGroupByOutputType>[]
          }
          count: {
            args: Prisma.SaleCountArgs<ExtArgs>
            result: $Utils.Optional<SaleCountAggregateOutputType> | number
          }
        }
      }
      Purchase: {
        payload: Prisma.$PurchasePayload<ExtArgs>
        fields: Prisma.PurchaseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PurchaseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PurchaseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasePayload>
          }
          findFirst: {
            args: Prisma.PurchaseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PurchaseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasePayload>
          }
          findMany: {
            args: Prisma.PurchaseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasePayload>[]
          }
          create: {
            args: Prisma.PurchaseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasePayload>
          }
          createMany: {
            args: Prisma.PurchaseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PurchaseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasePayload>[]
          }
          delete: {
            args: Prisma.PurchaseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasePayload>
          }
          update: {
            args: Prisma.PurchaseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasePayload>
          }
          deleteMany: {
            args: Prisma.PurchaseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PurchaseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PurchaseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasePayload>[]
          }
          upsert: {
            args: Prisma.PurchaseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasePayload>
          }
          aggregate: {
            args: Prisma.PurchaseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePurchase>
          }
          groupBy: {
            args: Prisma.PurchaseGroupByArgs<ExtArgs>
            result: $Utils.Optional<PurchaseGroupByOutputType>[]
          }
          count: {
            args: Prisma.PurchaseCountArgs<ExtArgs>
            result: $Utils.Optional<PurchaseCountAggregateOutputType> | number
          }
        }
      }
      ProductPurchase: {
        payload: Prisma.$ProductPurchasePayload<ExtArgs>
        fields: Prisma.ProductPurchaseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductPurchaseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPurchasePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductPurchaseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPurchasePayload>
          }
          findFirst: {
            args: Prisma.ProductPurchaseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPurchasePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductPurchaseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPurchasePayload>
          }
          findMany: {
            args: Prisma.ProductPurchaseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPurchasePayload>[]
          }
          create: {
            args: Prisma.ProductPurchaseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPurchasePayload>
          }
          createMany: {
            args: Prisma.ProductPurchaseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductPurchaseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPurchasePayload>[]
          }
          delete: {
            args: Prisma.ProductPurchaseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPurchasePayload>
          }
          update: {
            args: Prisma.ProductPurchaseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPurchasePayload>
          }
          deleteMany: {
            args: Prisma.ProductPurchaseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductPurchaseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProductPurchaseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPurchasePayload>[]
          }
          upsert: {
            args: Prisma.ProductPurchaseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPurchasePayload>
          }
          aggregate: {
            args: Prisma.ProductPurchaseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProductPurchase>
          }
          groupBy: {
            args: Prisma.ProductPurchaseGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductPurchaseGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductPurchaseCountArgs<ExtArgs>
            result: $Utils.Optional<ProductPurchaseCountAggregateOutputType> | number
          }
        }
      }
      ProductSale: {
        payload: Prisma.$ProductSalePayload<ExtArgs>
        fields: Prisma.ProductSaleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductSaleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductSalePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductSaleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductSalePayload>
          }
          findFirst: {
            args: Prisma.ProductSaleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductSalePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductSaleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductSalePayload>
          }
          findMany: {
            args: Prisma.ProductSaleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductSalePayload>[]
          }
          create: {
            args: Prisma.ProductSaleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductSalePayload>
          }
          createMany: {
            args: Prisma.ProductSaleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductSaleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductSalePayload>[]
          }
          delete: {
            args: Prisma.ProductSaleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductSalePayload>
          }
          update: {
            args: Prisma.ProductSaleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductSalePayload>
          }
          deleteMany: {
            args: Prisma.ProductSaleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductSaleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProductSaleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductSalePayload>[]
          }
          upsert: {
            args: Prisma.ProductSaleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductSalePayload>
          }
          aggregate: {
            args: Prisma.ProductSaleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProductSale>
          }
          groupBy: {
            args: Prisma.ProductSaleGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductSaleGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductSaleCountArgs<ExtArgs>
            result: $Utils.Optional<ProductSaleCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    role?: RoleOmit
    product?: ProductOmit
    sale?: SaleOmit
    purchase?: PurchaseOmit
    productPurchase?: ProductPurchaseOmit
    productSale?: ProductSaleOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    createdRoles: number
    deletedRoles: number
    updatedRoles: number
    createdProducts: number
    deletedProducts: number
    updatedProducts: number
    createdSales: number
    deletedSales: number
    updatedSales: number
    createdPurchases: number
    deletedPurchases: number
    updatedPurchases: number
    createdProductPurchases: number
    deletedProductPurchases: number
    updatedProductPurchases: number
    createdProductSales: number
    deletedProductSales: number
    updatedProductSales: number
    ownedProducts: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdRoles?: boolean | UserCountOutputTypeCountCreatedRolesArgs
    deletedRoles?: boolean | UserCountOutputTypeCountDeletedRolesArgs
    updatedRoles?: boolean | UserCountOutputTypeCountUpdatedRolesArgs
    createdProducts?: boolean | UserCountOutputTypeCountCreatedProductsArgs
    deletedProducts?: boolean | UserCountOutputTypeCountDeletedProductsArgs
    updatedProducts?: boolean | UserCountOutputTypeCountUpdatedProductsArgs
    createdSales?: boolean | UserCountOutputTypeCountCreatedSalesArgs
    deletedSales?: boolean | UserCountOutputTypeCountDeletedSalesArgs
    updatedSales?: boolean | UserCountOutputTypeCountUpdatedSalesArgs
    createdPurchases?: boolean | UserCountOutputTypeCountCreatedPurchasesArgs
    deletedPurchases?: boolean | UserCountOutputTypeCountDeletedPurchasesArgs
    updatedPurchases?: boolean | UserCountOutputTypeCountUpdatedPurchasesArgs
    createdProductPurchases?: boolean | UserCountOutputTypeCountCreatedProductPurchasesArgs
    deletedProductPurchases?: boolean | UserCountOutputTypeCountDeletedProductPurchasesArgs
    updatedProductPurchases?: boolean | UserCountOutputTypeCountUpdatedProductPurchasesArgs
    createdProductSales?: boolean | UserCountOutputTypeCountCreatedProductSalesArgs
    deletedProductSales?: boolean | UserCountOutputTypeCountDeletedProductSalesArgs
    updatedProductSales?: boolean | UserCountOutputTypeCountUpdatedProductSalesArgs
    ownedProducts?: boolean | UserCountOutputTypeCountOwnedProductsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCreatedRolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoleWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountDeletedRolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoleWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUpdatedRolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoleWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCreatedProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountDeletedProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUpdatedProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCreatedSalesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SaleWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountDeletedSalesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SaleWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUpdatedSalesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SaleWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCreatedPurchasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PurchaseWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountDeletedPurchasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PurchaseWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUpdatedPurchasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PurchaseWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCreatedProductPurchasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductPurchaseWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountDeletedProductPurchasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductPurchaseWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUpdatedProductPurchasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductPurchaseWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCreatedProductSalesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductSaleWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountDeletedProductSalesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductSaleWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUpdatedProductSalesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductSaleWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountOwnedProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
  }


  /**
   * Count Type RoleCountOutputType
   */

  export type RoleCountOutputType = {
    users: number
  }

  export type RoleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | RoleCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleCountOutputType
     */
    select?: RoleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * Count Type ProductCountOutputType
   */

  export type ProductCountOutputType = {
    productPurchase: number
    productSale: number
  }

  export type ProductCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    productPurchase?: boolean | ProductCountOutputTypeCountProductPurchaseArgs
    productSale?: boolean | ProductCountOutputTypeCountProductSaleArgs
  }

  // Custom InputTypes
  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCountOutputType
     */
    select?: ProductCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountProductPurchaseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductPurchaseWhereInput
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountProductSaleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductSaleWhereInput
  }


  /**
   * Count Type SaleCountOutputType
   */

  export type SaleCountOutputType = {
    productSale: number
  }

  export type SaleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    productSale?: boolean | SaleCountOutputTypeCountProductSaleArgs
  }

  // Custom InputTypes
  /**
   * SaleCountOutputType without action
   */
  export type SaleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaleCountOutputType
     */
    select?: SaleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SaleCountOutputType without action
   */
  export type SaleCountOutputTypeCountProductSaleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductSaleWhereInput
  }


  /**
   * Count Type PurchaseCountOutputType
   */

  export type PurchaseCountOutputType = {
    productPurchase: number
  }

  export type PurchaseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    productPurchase?: boolean | PurchaseCountOutputTypeCountProductPurchaseArgs
  }

  // Custom InputTypes
  /**
   * PurchaseCountOutputType without action
   */
  export type PurchaseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseCountOutputType
     */
    select?: PurchaseCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PurchaseCountOutputType without action
   */
  export type PurchaseCountOutputTypeCountProductPurchaseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductPurchaseWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    userId: number | null
    createdBy: number | null
    deletedBy: number | null
    roleId: number | null
  }

  export type UserSumAggregateOutputType = {
    userId: number | null
    createdBy: number | null
    deletedBy: number | null
    roleId: number | null
  }

  export type UserMinAggregateOutputType = {
    userId: number | null
    name: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
    deletedAt: Date | null
    createdBy: number | null
    deletedBy: number | null
    isDeleted: boolean | null
    roleId: number | null
  }

  export type UserMaxAggregateOutputType = {
    userId: number | null
    name: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
    deletedAt: Date | null
    createdBy: number | null
    deletedBy: number | null
    isDeleted: boolean | null
    roleId: number | null
  }

  export type UserCountAggregateOutputType = {
    userId: number
    name: number
    email: number
    password: number
    createdAt: number
    deletedAt: number
    createdBy: number
    deletedBy: number
    isDeleted: number
    roleId: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    userId?: true
    createdBy?: true
    deletedBy?: true
    roleId?: true
  }

  export type UserSumAggregateInputType = {
    userId?: true
    createdBy?: true
    deletedBy?: true
    roleId?: true
  }

  export type UserMinAggregateInputType = {
    userId?: true
    name?: true
    email?: true
    password?: true
    createdAt?: true
    deletedAt?: true
    createdBy?: true
    deletedBy?: true
    isDeleted?: true
    roleId?: true
  }

  export type UserMaxAggregateInputType = {
    userId?: true
    name?: true
    email?: true
    password?: true
    createdAt?: true
    deletedAt?: true
    createdBy?: true
    deletedBy?: true
    isDeleted?: true
    roleId?: true
  }

  export type UserCountAggregateInputType = {
    userId?: true
    name?: true
    email?: true
    password?: true
    createdAt?: true
    deletedAt?: true
    createdBy?: true
    deletedBy?: true
    isDeleted?: true
    roleId?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    userId: number
    name: string
    email: string
    password: string
    createdAt: Date
    deletedAt: Date | null
    createdBy: number | null
    deletedBy: number | null
    isDeleted: boolean
    roleId: number
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    deletedAt?: boolean
    createdBy?: boolean
    deletedBy?: boolean
    isDeleted?: boolean
    roleId?: boolean
    createdRoles?: boolean | User$createdRolesArgs<ExtArgs>
    deletedRoles?: boolean | User$deletedRolesArgs<ExtArgs>
    updatedRoles?: boolean | User$updatedRolesArgs<ExtArgs>
    createdProducts?: boolean | User$createdProductsArgs<ExtArgs>
    deletedProducts?: boolean | User$deletedProductsArgs<ExtArgs>
    updatedProducts?: boolean | User$updatedProductsArgs<ExtArgs>
    createdSales?: boolean | User$createdSalesArgs<ExtArgs>
    deletedSales?: boolean | User$deletedSalesArgs<ExtArgs>
    updatedSales?: boolean | User$updatedSalesArgs<ExtArgs>
    createdPurchases?: boolean | User$createdPurchasesArgs<ExtArgs>
    deletedPurchases?: boolean | User$deletedPurchasesArgs<ExtArgs>
    updatedPurchases?: boolean | User$updatedPurchasesArgs<ExtArgs>
    createdProductPurchases?: boolean | User$createdProductPurchasesArgs<ExtArgs>
    deletedProductPurchases?: boolean | User$deletedProductPurchasesArgs<ExtArgs>
    updatedProductPurchases?: boolean | User$updatedProductPurchasesArgs<ExtArgs>
    createdProductSales?: boolean | User$createdProductSalesArgs<ExtArgs>
    deletedProductSales?: boolean | User$deletedProductSalesArgs<ExtArgs>
    updatedProductSales?: boolean | User$updatedProductSalesArgs<ExtArgs>
    role?: boolean | RoleDefaultArgs<ExtArgs>
    ownedProducts?: boolean | User$ownedProductsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    deletedAt?: boolean
    createdBy?: boolean
    deletedBy?: boolean
    isDeleted?: boolean
    roleId?: boolean
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    deletedAt?: boolean
    createdBy?: boolean
    deletedBy?: boolean
    isDeleted?: boolean
    roleId?: boolean
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    userId?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    deletedAt?: boolean
    createdBy?: boolean
    deletedBy?: boolean
    isDeleted?: boolean
    roleId?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userId" | "name" | "email" | "password" | "createdAt" | "deletedAt" | "createdBy" | "deletedBy" | "isDeleted" | "roleId", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdRoles?: boolean | User$createdRolesArgs<ExtArgs>
    deletedRoles?: boolean | User$deletedRolesArgs<ExtArgs>
    updatedRoles?: boolean | User$updatedRolesArgs<ExtArgs>
    createdProducts?: boolean | User$createdProductsArgs<ExtArgs>
    deletedProducts?: boolean | User$deletedProductsArgs<ExtArgs>
    updatedProducts?: boolean | User$updatedProductsArgs<ExtArgs>
    createdSales?: boolean | User$createdSalesArgs<ExtArgs>
    deletedSales?: boolean | User$deletedSalesArgs<ExtArgs>
    updatedSales?: boolean | User$updatedSalesArgs<ExtArgs>
    createdPurchases?: boolean | User$createdPurchasesArgs<ExtArgs>
    deletedPurchases?: boolean | User$deletedPurchasesArgs<ExtArgs>
    updatedPurchases?: boolean | User$updatedPurchasesArgs<ExtArgs>
    createdProductPurchases?: boolean | User$createdProductPurchasesArgs<ExtArgs>
    deletedProductPurchases?: boolean | User$deletedProductPurchasesArgs<ExtArgs>
    updatedProductPurchases?: boolean | User$updatedProductPurchasesArgs<ExtArgs>
    createdProductSales?: boolean | User$createdProductSalesArgs<ExtArgs>
    deletedProductSales?: boolean | User$deletedProductSalesArgs<ExtArgs>
    updatedProductSales?: boolean | User$updatedProductSalesArgs<ExtArgs>
    role?: boolean | RoleDefaultArgs<ExtArgs>
    ownedProducts?: boolean | User$ownedProductsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      createdRoles: Prisma.$RolePayload<ExtArgs>[]
      deletedRoles: Prisma.$RolePayload<ExtArgs>[]
      updatedRoles: Prisma.$RolePayload<ExtArgs>[]
      createdProducts: Prisma.$ProductPayload<ExtArgs>[]
      deletedProducts: Prisma.$ProductPayload<ExtArgs>[]
      updatedProducts: Prisma.$ProductPayload<ExtArgs>[]
      createdSales: Prisma.$SalePayload<ExtArgs>[]
      deletedSales: Prisma.$SalePayload<ExtArgs>[]
      updatedSales: Prisma.$SalePayload<ExtArgs>[]
      createdPurchases: Prisma.$PurchasePayload<ExtArgs>[]
      deletedPurchases: Prisma.$PurchasePayload<ExtArgs>[]
      updatedPurchases: Prisma.$PurchasePayload<ExtArgs>[]
      createdProductPurchases: Prisma.$ProductPurchasePayload<ExtArgs>[]
      deletedProductPurchases: Prisma.$ProductPurchasePayload<ExtArgs>[]
      updatedProductPurchases: Prisma.$ProductPurchasePayload<ExtArgs>[]
      createdProductSales: Prisma.$ProductSalePayload<ExtArgs>[]
      deletedProductSales: Prisma.$ProductSalePayload<ExtArgs>[]
      updatedProductSales: Prisma.$ProductSalePayload<ExtArgs>[]
      role: Prisma.$RolePayload<ExtArgs>
      ownedProducts: Prisma.$ProductPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: number
      name: string
      email: string
      password: string
      createdAt: Date
      deletedAt: Date | null
      createdBy: number | null
      deletedBy: number | null
      isDeleted: boolean
      roleId: number
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const userWithUserIdOnly = await prisma.user.findMany({ select: { userId: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `userId`
     * const userWithUserIdOnly = await prisma.user.createManyAndReturn({
     *   select: { userId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `userId`
     * const userWithUserIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { userId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    createdRoles<T extends User$createdRolesArgs<ExtArgs> = {}>(args?: Subset<T, User$createdRolesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    deletedRoles<T extends User$deletedRolesArgs<ExtArgs> = {}>(args?: Subset<T, User$deletedRolesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    updatedRoles<T extends User$updatedRolesArgs<ExtArgs> = {}>(args?: Subset<T, User$updatedRolesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    createdProducts<T extends User$createdProductsArgs<ExtArgs> = {}>(args?: Subset<T, User$createdProductsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    deletedProducts<T extends User$deletedProductsArgs<ExtArgs> = {}>(args?: Subset<T, User$deletedProductsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    updatedProducts<T extends User$updatedProductsArgs<ExtArgs> = {}>(args?: Subset<T, User$updatedProductsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    createdSales<T extends User$createdSalesArgs<ExtArgs> = {}>(args?: Subset<T, User$createdSalesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    deletedSales<T extends User$deletedSalesArgs<ExtArgs> = {}>(args?: Subset<T, User$deletedSalesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    updatedSales<T extends User$updatedSalesArgs<ExtArgs> = {}>(args?: Subset<T, User$updatedSalesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    createdPurchases<T extends User$createdPurchasesArgs<ExtArgs> = {}>(args?: Subset<T, User$createdPurchasesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    deletedPurchases<T extends User$deletedPurchasesArgs<ExtArgs> = {}>(args?: Subset<T, User$deletedPurchasesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    updatedPurchases<T extends User$updatedPurchasesArgs<ExtArgs> = {}>(args?: Subset<T, User$updatedPurchasesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    createdProductPurchases<T extends User$createdProductPurchasesArgs<ExtArgs> = {}>(args?: Subset<T, User$createdProductPurchasesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPurchasePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    deletedProductPurchases<T extends User$deletedProductPurchasesArgs<ExtArgs> = {}>(args?: Subset<T, User$deletedProductPurchasesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPurchasePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    updatedProductPurchases<T extends User$updatedProductPurchasesArgs<ExtArgs> = {}>(args?: Subset<T, User$updatedProductPurchasesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPurchasePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    createdProductSales<T extends User$createdProductSalesArgs<ExtArgs> = {}>(args?: Subset<T, User$createdProductSalesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductSalePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    deletedProductSales<T extends User$deletedProductSalesArgs<ExtArgs> = {}>(args?: Subset<T, User$deletedProductSalesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductSalePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    updatedProductSales<T extends User$updatedProductSalesArgs<ExtArgs> = {}>(args?: Subset<T, User$updatedProductSalesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductSalePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    role<T extends RoleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoleDefaultArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    ownedProducts<T extends User$ownedProductsArgs<ExtArgs> = {}>(args?: Subset<T, User$ownedProductsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly userId: FieldRef<"User", 'Int'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly deletedAt: FieldRef<"User", 'DateTime'>
    readonly createdBy: FieldRef<"User", 'Int'>
    readonly deletedBy: FieldRef<"User", 'Int'>
    readonly isDeleted: FieldRef<"User", 'Boolean'>
    readonly roleId: FieldRef<"User", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.createdRoles
   */
  export type User$createdRolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    where?: RoleWhereInput
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    cursor?: RoleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * User.deletedRoles
   */
  export type User$deletedRolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    where?: RoleWhereInput
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    cursor?: RoleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * User.updatedRoles
   */
  export type User$updatedRolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    where?: RoleWhereInput
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    cursor?: RoleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * User.createdProducts
   */
  export type User$createdProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    cursor?: ProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * User.deletedProducts
   */
  export type User$deletedProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    cursor?: ProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * User.updatedProducts
   */
  export type User$updatedProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    cursor?: ProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * User.createdSales
   */
  export type User$createdSalesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sale
     */
    omit?: SaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleInclude<ExtArgs> | null
    where?: SaleWhereInput
    orderBy?: SaleOrderByWithRelationInput | SaleOrderByWithRelationInput[]
    cursor?: SaleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SaleScalarFieldEnum | SaleScalarFieldEnum[]
  }

  /**
   * User.deletedSales
   */
  export type User$deletedSalesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sale
     */
    omit?: SaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleInclude<ExtArgs> | null
    where?: SaleWhereInput
    orderBy?: SaleOrderByWithRelationInput | SaleOrderByWithRelationInput[]
    cursor?: SaleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SaleScalarFieldEnum | SaleScalarFieldEnum[]
  }

  /**
   * User.updatedSales
   */
  export type User$updatedSalesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sale
     */
    omit?: SaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleInclude<ExtArgs> | null
    where?: SaleWhereInput
    orderBy?: SaleOrderByWithRelationInput | SaleOrderByWithRelationInput[]
    cursor?: SaleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SaleScalarFieldEnum | SaleScalarFieldEnum[]
  }

  /**
   * User.createdPurchases
   */
  export type User$createdPurchasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purchase
     */
    omit?: PurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseInclude<ExtArgs> | null
    where?: PurchaseWhereInput
    orderBy?: PurchaseOrderByWithRelationInput | PurchaseOrderByWithRelationInput[]
    cursor?: PurchaseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PurchaseScalarFieldEnum | PurchaseScalarFieldEnum[]
  }

  /**
   * User.deletedPurchases
   */
  export type User$deletedPurchasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purchase
     */
    omit?: PurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseInclude<ExtArgs> | null
    where?: PurchaseWhereInput
    orderBy?: PurchaseOrderByWithRelationInput | PurchaseOrderByWithRelationInput[]
    cursor?: PurchaseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PurchaseScalarFieldEnum | PurchaseScalarFieldEnum[]
  }

  /**
   * User.updatedPurchases
   */
  export type User$updatedPurchasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purchase
     */
    omit?: PurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseInclude<ExtArgs> | null
    where?: PurchaseWhereInput
    orderBy?: PurchaseOrderByWithRelationInput | PurchaseOrderByWithRelationInput[]
    cursor?: PurchaseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PurchaseScalarFieldEnum | PurchaseScalarFieldEnum[]
  }

  /**
   * User.createdProductPurchases
   */
  export type User$createdProductPurchasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductPurchase
     */
    select?: ProductPurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductPurchase
     */
    omit?: ProductPurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductPurchaseInclude<ExtArgs> | null
    where?: ProductPurchaseWhereInput
    orderBy?: ProductPurchaseOrderByWithRelationInput | ProductPurchaseOrderByWithRelationInput[]
    cursor?: ProductPurchaseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductPurchaseScalarFieldEnum | ProductPurchaseScalarFieldEnum[]
  }

  /**
   * User.deletedProductPurchases
   */
  export type User$deletedProductPurchasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductPurchase
     */
    select?: ProductPurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductPurchase
     */
    omit?: ProductPurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductPurchaseInclude<ExtArgs> | null
    where?: ProductPurchaseWhereInput
    orderBy?: ProductPurchaseOrderByWithRelationInput | ProductPurchaseOrderByWithRelationInput[]
    cursor?: ProductPurchaseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductPurchaseScalarFieldEnum | ProductPurchaseScalarFieldEnum[]
  }

  /**
   * User.updatedProductPurchases
   */
  export type User$updatedProductPurchasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductPurchase
     */
    select?: ProductPurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductPurchase
     */
    omit?: ProductPurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductPurchaseInclude<ExtArgs> | null
    where?: ProductPurchaseWhereInput
    orderBy?: ProductPurchaseOrderByWithRelationInput | ProductPurchaseOrderByWithRelationInput[]
    cursor?: ProductPurchaseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductPurchaseScalarFieldEnum | ProductPurchaseScalarFieldEnum[]
  }

  /**
   * User.createdProductSales
   */
  export type User$createdProductSalesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductSale
     */
    select?: ProductSaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductSale
     */
    omit?: ProductSaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductSaleInclude<ExtArgs> | null
    where?: ProductSaleWhereInput
    orderBy?: ProductSaleOrderByWithRelationInput | ProductSaleOrderByWithRelationInput[]
    cursor?: ProductSaleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductSaleScalarFieldEnum | ProductSaleScalarFieldEnum[]
  }

  /**
   * User.deletedProductSales
   */
  export type User$deletedProductSalesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductSale
     */
    select?: ProductSaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductSale
     */
    omit?: ProductSaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductSaleInclude<ExtArgs> | null
    where?: ProductSaleWhereInput
    orderBy?: ProductSaleOrderByWithRelationInput | ProductSaleOrderByWithRelationInput[]
    cursor?: ProductSaleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductSaleScalarFieldEnum | ProductSaleScalarFieldEnum[]
  }

  /**
   * User.updatedProductSales
   */
  export type User$updatedProductSalesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductSale
     */
    select?: ProductSaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductSale
     */
    omit?: ProductSaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductSaleInclude<ExtArgs> | null
    where?: ProductSaleWhereInput
    orderBy?: ProductSaleOrderByWithRelationInput | ProductSaleOrderByWithRelationInput[]
    cursor?: ProductSaleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductSaleScalarFieldEnum | ProductSaleScalarFieldEnum[]
  }

  /**
   * User.ownedProducts
   */
  export type User$ownedProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    cursor?: ProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Role
   */

  export type AggregateRole = {
    _count: RoleCountAggregateOutputType | null
    _avg: RoleAvgAggregateOutputType | null
    _sum: RoleSumAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  export type RoleAvgAggregateOutputType = {
    roleId: number | null
    createdBy: number | null
    deletedBy: number | null
    updatedBy: number | null
  }

  export type RoleSumAggregateOutputType = {
    roleId: number | null
    createdBy: number | null
    deletedBy: number | null
    updatedBy: number | null
  }

  export type RoleMinAggregateOutputType = {
    roleId: number | null
    roleType: string | null
    createdAt: Date | null
    deletedAt: Date | null
    createdBy: number | null
    deletedBy: number | null
    updatedBy: number | null
    updatedAt: Date | null
    isDeleted: boolean | null
  }

  export type RoleMaxAggregateOutputType = {
    roleId: number | null
    roleType: string | null
    createdAt: Date | null
    deletedAt: Date | null
    createdBy: number | null
    deletedBy: number | null
    updatedBy: number | null
    updatedAt: Date | null
    isDeleted: boolean | null
  }

  export type RoleCountAggregateOutputType = {
    roleId: number
    roleType: number
    createdAt: number
    deletedAt: number
    createdBy: number
    deletedBy: number
    updatedBy: number
    updatedAt: number
    isDeleted: number
    _all: number
  }


  export type RoleAvgAggregateInputType = {
    roleId?: true
    createdBy?: true
    deletedBy?: true
    updatedBy?: true
  }

  export type RoleSumAggregateInputType = {
    roleId?: true
    createdBy?: true
    deletedBy?: true
    updatedBy?: true
  }

  export type RoleMinAggregateInputType = {
    roleId?: true
    roleType?: true
    createdAt?: true
    deletedAt?: true
    createdBy?: true
    deletedBy?: true
    updatedBy?: true
    updatedAt?: true
    isDeleted?: true
  }

  export type RoleMaxAggregateInputType = {
    roleId?: true
    roleType?: true
    createdAt?: true
    deletedAt?: true
    createdBy?: true
    deletedBy?: true
    updatedBy?: true
    updatedAt?: true
    isDeleted?: true
  }

  export type RoleCountAggregateInputType = {
    roleId?: true
    roleType?: true
    createdAt?: true
    deletedAt?: true
    createdBy?: true
    deletedBy?: true
    updatedBy?: true
    updatedAt?: true
    isDeleted?: true
    _all?: true
  }

  export type RoleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Role to aggregate.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Roles
    **/
    _count?: true | RoleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RoleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RoleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoleMaxAggregateInputType
  }

  export type GetRoleAggregateType<T extends RoleAggregateArgs> = {
        [P in keyof T & keyof AggregateRole]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRole[P]>
      : GetScalarType<T[P], AggregateRole[P]>
  }




  export type RoleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoleWhereInput
    orderBy?: RoleOrderByWithAggregationInput | RoleOrderByWithAggregationInput[]
    by: RoleScalarFieldEnum[] | RoleScalarFieldEnum
    having?: RoleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoleCountAggregateInputType | true
    _avg?: RoleAvgAggregateInputType
    _sum?: RoleSumAggregateInputType
    _min?: RoleMinAggregateInputType
    _max?: RoleMaxAggregateInputType
  }

  export type RoleGroupByOutputType = {
    roleId: number
    roleType: string
    createdAt: Date
    deletedAt: Date | null
    createdBy: number | null
    deletedBy: number | null
    updatedBy: number | null
    updatedAt: Date | null
    isDeleted: boolean
    _count: RoleCountAggregateOutputType | null
    _avg: RoleAvgAggregateOutputType | null
    _sum: RoleSumAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  type GetRoleGroupByPayload<T extends RoleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoleGroupByOutputType[P]>
            : GetScalarType<T[P], RoleGroupByOutputType[P]>
        }
      >
    >


  export type RoleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    roleId?: boolean
    roleType?: boolean
    createdAt?: boolean
    deletedAt?: boolean
    createdBy?: boolean
    deletedBy?: boolean
    updatedBy?: boolean
    updatedAt?: boolean
    isDeleted?: boolean
    createdByUser?: boolean | Role$createdByUserArgs<ExtArgs>
    deletedByUser?: boolean | Role$deletedByUserArgs<ExtArgs>
    updatedByUser?: boolean | Role$updatedByUserArgs<ExtArgs>
    users?: boolean | Role$usersArgs<ExtArgs>
    _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["role"]>

  export type RoleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    roleId?: boolean
    roleType?: boolean
    createdAt?: boolean
    deletedAt?: boolean
    createdBy?: boolean
    deletedBy?: boolean
    updatedBy?: boolean
    updatedAt?: boolean
    isDeleted?: boolean
    createdByUser?: boolean | Role$createdByUserArgs<ExtArgs>
    deletedByUser?: boolean | Role$deletedByUserArgs<ExtArgs>
    updatedByUser?: boolean | Role$updatedByUserArgs<ExtArgs>
  }, ExtArgs["result"]["role"]>

  export type RoleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    roleId?: boolean
    roleType?: boolean
    createdAt?: boolean
    deletedAt?: boolean
    createdBy?: boolean
    deletedBy?: boolean
    updatedBy?: boolean
    updatedAt?: boolean
    isDeleted?: boolean
    createdByUser?: boolean | Role$createdByUserArgs<ExtArgs>
    deletedByUser?: boolean | Role$deletedByUserArgs<ExtArgs>
    updatedByUser?: boolean | Role$updatedByUserArgs<ExtArgs>
  }, ExtArgs["result"]["role"]>

  export type RoleSelectScalar = {
    roleId?: boolean
    roleType?: boolean
    createdAt?: boolean
    deletedAt?: boolean
    createdBy?: boolean
    deletedBy?: boolean
    updatedBy?: boolean
    updatedAt?: boolean
    isDeleted?: boolean
  }

  export type RoleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"roleId" | "roleType" | "createdAt" | "deletedAt" | "createdBy" | "deletedBy" | "updatedBy" | "updatedAt" | "isDeleted", ExtArgs["result"]["role"]>
  export type RoleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdByUser?: boolean | Role$createdByUserArgs<ExtArgs>
    deletedByUser?: boolean | Role$deletedByUserArgs<ExtArgs>
    updatedByUser?: boolean | Role$updatedByUserArgs<ExtArgs>
    users?: boolean | Role$usersArgs<ExtArgs>
    _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RoleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdByUser?: boolean | Role$createdByUserArgs<ExtArgs>
    deletedByUser?: boolean | Role$deletedByUserArgs<ExtArgs>
    updatedByUser?: boolean | Role$updatedByUserArgs<ExtArgs>
  }
  export type RoleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdByUser?: boolean | Role$createdByUserArgs<ExtArgs>
    deletedByUser?: boolean | Role$deletedByUserArgs<ExtArgs>
    updatedByUser?: boolean | Role$updatedByUserArgs<ExtArgs>
  }

  export type $RolePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Role"
    objects: {
      createdByUser: Prisma.$UserPayload<ExtArgs> | null
      deletedByUser: Prisma.$UserPayload<ExtArgs> | null
      updatedByUser: Prisma.$UserPayload<ExtArgs> | null
      users: Prisma.$UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      roleId: number
      roleType: string
      createdAt: Date
      deletedAt: Date | null
      createdBy: number | null
      deletedBy: number | null
      updatedBy: number | null
      updatedAt: Date | null
      isDeleted: boolean
    }, ExtArgs["result"]["role"]>
    composites: {}
  }

  type RoleGetPayload<S extends boolean | null | undefined | RoleDefaultArgs> = $Result.GetResult<Prisma.$RolePayload, S>

  type RoleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RoleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RoleCountAggregateInputType | true
    }

  export interface RoleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Role'], meta: { name: 'Role' } }
    /**
     * Find zero or one Role that matches the filter.
     * @param {RoleFindUniqueArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoleFindUniqueArgs>(args: SelectSubset<T, RoleFindUniqueArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Role that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RoleFindUniqueOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoleFindUniqueOrThrowArgs>(args: SelectSubset<T, RoleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Role that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindFirstArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoleFindFirstArgs>(args?: SelectSubset<T, RoleFindFirstArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Role that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindFirstOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoleFindFirstOrThrowArgs>(args?: SelectSubset<T, RoleFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Roles
     * const roles = await prisma.role.findMany()
     * 
     * // Get first 10 Roles
     * const roles = await prisma.role.findMany({ take: 10 })
     * 
     * // Only select the `roleId`
     * const roleWithRoleIdOnly = await prisma.role.findMany({ select: { roleId: true } })
     * 
     */
    findMany<T extends RoleFindManyArgs>(args?: SelectSubset<T, RoleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Role.
     * @param {RoleCreateArgs} args - Arguments to create a Role.
     * @example
     * // Create one Role
     * const Role = await prisma.role.create({
     *   data: {
     *     // ... data to create a Role
     *   }
     * })
     * 
     */
    create<T extends RoleCreateArgs>(args: SelectSubset<T, RoleCreateArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Roles.
     * @param {RoleCreateManyArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const role = await prisma.role.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoleCreateManyArgs>(args?: SelectSubset<T, RoleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Roles and returns the data saved in the database.
     * @param {RoleCreateManyAndReturnArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const role = await prisma.role.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Roles and only return the `roleId`
     * const roleWithRoleIdOnly = await prisma.role.createManyAndReturn({
     *   select: { roleId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RoleCreateManyAndReturnArgs>(args?: SelectSubset<T, RoleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Role.
     * @param {RoleDeleteArgs} args - Arguments to delete one Role.
     * @example
     * // Delete one Role
     * const Role = await prisma.role.delete({
     *   where: {
     *     // ... filter to delete one Role
     *   }
     * })
     * 
     */
    delete<T extends RoleDeleteArgs>(args: SelectSubset<T, RoleDeleteArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Role.
     * @param {RoleUpdateArgs} args - Arguments to update one Role.
     * @example
     * // Update one Role
     * const role = await prisma.role.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RoleUpdateArgs>(args: SelectSubset<T, RoleUpdateArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Roles.
     * @param {RoleDeleteManyArgs} args - Arguments to filter Roles to delete.
     * @example
     * // Delete a few Roles
     * const { count } = await prisma.role.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoleDeleteManyArgs>(args?: SelectSubset<T, RoleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Roles
     * const role = await prisma.role.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RoleUpdateManyArgs>(args: SelectSubset<T, RoleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles and returns the data updated in the database.
     * @param {RoleUpdateManyAndReturnArgs} args - Arguments to update many Roles.
     * @example
     * // Update many Roles
     * const role = await prisma.role.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Roles and only return the `roleId`
     * const roleWithRoleIdOnly = await prisma.role.updateManyAndReturn({
     *   select: { roleId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RoleUpdateManyAndReturnArgs>(args: SelectSubset<T, RoleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Role.
     * @param {RoleUpsertArgs} args - Arguments to update or create a Role.
     * @example
     * // Update or create a Role
     * const role = await prisma.role.upsert({
     *   create: {
     *     // ... data to create a Role
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Role we want to update
     *   }
     * })
     */
    upsert<T extends RoleUpsertArgs>(args: SelectSubset<T, RoleUpsertArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleCountArgs} args - Arguments to filter Roles to count.
     * @example
     * // Count the number of Roles
     * const count = await prisma.role.count({
     *   where: {
     *     // ... the filter for the Roles we want to count
     *   }
     * })
    **/
    count<T extends RoleCountArgs>(
      args?: Subset<T, RoleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RoleAggregateArgs>(args: Subset<T, RoleAggregateArgs>): Prisma.PrismaPromise<GetRoleAggregateType<T>>

    /**
     * Group by Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RoleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoleGroupByArgs['orderBy'] }
        : { orderBy?: RoleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RoleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Role model
   */
  readonly fields: RoleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Role.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    createdByUser<T extends Role$createdByUserArgs<ExtArgs> = {}>(args?: Subset<T, Role$createdByUserArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    deletedByUser<T extends Role$deletedByUserArgs<ExtArgs> = {}>(args?: Subset<T, Role$deletedByUserArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    updatedByUser<T extends Role$updatedByUserArgs<ExtArgs> = {}>(args?: Subset<T, Role$updatedByUserArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    users<T extends Role$usersArgs<ExtArgs> = {}>(args?: Subset<T, Role$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Role model
   */
  interface RoleFieldRefs {
    readonly roleId: FieldRef<"Role", 'Int'>
    readonly roleType: FieldRef<"Role", 'String'>
    readonly createdAt: FieldRef<"Role", 'DateTime'>
    readonly deletedAt: FieldRef<"Role", 'DateTime'>
    readonly createdBy: FieldRef<"Role", 'Int'>
    readonly deletedBy: FieldRef<"Role", 'Int'>
    readonly updatedBy: FieldRef<"Role", 'Int'>
    readonly updatedAt: FieldRef<"Role", 'DateTime'>
    readonly isDeleted: FieldRef<"Role", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Role findUnique
   */
  export type RoleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role findUniqueOrThrow
   */
  export type RoleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role findFirst
   */
  export type RoleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role findFirstOrThrow
   */
  export type RoleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role findMany
   */
  export type RoleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Roles to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role create
   */
  export type RoleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The data needed to create a Role.
     */
    data: XOR<RoleCreateInput, RoleUncheckedCreateInput>
  }

  /**
   * Role createMany
   */
  export type RoleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Roles.
     */
    data: RoleCreateManyInput | RoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Role createManyAndReturn
   */
  export type RoleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * The data used to create many Roles.
     */
    data: RoleCreateManyInput | RoleCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Role update
   */
  export type RoleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The data needed to update a Role.
     */
    data: XOR<RoleUpdateInput, RoleUncheckedUpdateInput>
    /**
     * Choose, which Role to update.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role updateMany
   */
  export type RoleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Roles.
     */
    data: XOR<RoleUpdateManyMutationInput, RoleUncheckedUpdateManyInput>
    /**
     * Filter which Roles to update
     */
    where?: RoleWhereInput
    /**
     * Limit how many Roles to update.
     */
    limit?: number
  }

  /**
   * Role updateManyAndReturn
   */
  export type RoleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * The data used to update Roles.
     */
    data: XOR<RoleUpdateManyMutationInput, RoleUncheckedUpdateManyInput>
    /**
     * Filter which Roles to update
     */
    where?: RoleWhereInput
    /**
     * Limit how many Roles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Role upsert
   */
  export type RoleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The filter to search for the Role to update in case it exists.
     */
    where: RoleWhereUniqueInput
    /**
     * In case the Role found by the `where` argument doesn't exist, create a new Role with this data.
     */
    create: XOR<RoleCreateInput, RoleUncheckedCreateInput>
    /**
     * In case the Role was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoleUpdateInput, RoleUncheckedUpdateInput>
  }

  /**
   * Role delete
   */
  export type RoleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter which Role to delete.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role deleteMany
   */
  export type RoleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Roles to delete
     */
    where?: RoleWhereInput
    /**
     * Limit how many Roles to delete.
     */
    limit?: number
  }

  /**
   * Role.createdByUser
   */
  export type Role$createdByUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Role.deletedByUser
   */
  export type Role$deletedByUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Role.updatedByUser
   */
  export type Role$updatedByUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Role.users
   */
  export type Role$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Role without action
   */
  export type RoleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
  }


  /**
   * Model Product
   */

  export type AggregateProduct = {
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  export type ProductAvgAggregateOutputType = {
    productId: number | null
    quantity: number | null
    price: number | null
    costPrice: number | null
    createdBy: number | null
    deletedBy: number | null
    updatedBy: number | null
    userId: number | null
  }

  export type ProductSumAggregateOutputType = {
    productId: number | null
    quantity: number | null
    price: number | null
    costPrice: number | null
    createdBy: number | null
    deletedBy: number | null
    updatedBy: number | null
    userId: number | null
  }

  export type ProductMinAggregateOutputType = {
    productId: number | null
    imageUrl: string | null
    description: string | null
    category: string | null
    expiryDate: Date | null
    productionDate: Date | null
    quantity: number | null
    price: number | null
    costPrice: number | null
    createdAt: Date | null
    deletedAt: Date | null
    createdBy: number | null
    deletedBy: number | null
    updatedBy: number | null
    updatedAt: Date | null
    isDeleted: boolean | null
    userId: number | null
  }

  export type ProductMaxAggregateOutputType = {
    productId: number | null
    imageUrl: string | null
    description: string | null
    category: string | null
    expiryDate: Date | null
    productionDate: Date | null
    quantity: number | null
    price: number | null
    costPrice: number | null
    createdAt: Date | null
    deletedAt: Date | null
    createdBy: number | null
    deletedBy: number | null
    updatedBy: number | null
    updatedAt: Date | null
    isDeleted: boolean | null
    userId: number | null
  }

  export type ProductCountAggregateOutputType = {
    productId: number
    imageUrl: number
    description: number
    category: number
    expiryDate: number
    productionDate: number
    quantity: number
    price: number
    costPrice: number
    createdAt: number
    deletedAt: number
    createdBy: number
    deletedBy: number
    updatedBy: number
    updatedAt: number
    isDeleted: number
    userId: number
    _all: number
  }


  export type ProductAvgAggregateInputType = {
    productId?: true
    quantity?: true
    price?: true
    costPrice?: true
    createdBy?: true
    deletedBy?: true
    updatedBy?: true
    userId?: true
  }

  export type ProductSumAggregateInputType = {
    productId?: true
    quantity?: true
    price?: true
    costPrice?: true
    createdBy?: true
    deletedBy?: true
    updatedBy?: true
    userId?: true
  }

  export type ProductMinAggregateInputType = {
    productId?: true
    imageUrl?: true
    description?: true
    category?: true
    expiryDate?: true
    productionDate?: true
    quantity?: true
    price?: true
    costPrice?: true
    createdAt?: true
    deletedAt?: true
    createdBy?: true
    deletedBy?: true
    updatedBy?: true
    updatedAt?: true
    isDeleted?: true
    userId?: true
  }

  export type ProductMaxAggregateInputType = {
    productId?: true
    imageUrl?: true
    description?: true
    category?: true
    expiryDate?: true
    productionDate?: true
    quantity?: true
    price?: true
    costPrice?: true
    createdAt?: true
    deletedAt?: true
    createdBy?: true
    deletedBy?: true
    updatedBy?: true
    updatedAt?: true
    isDeleted?: true
    userId?: true
  }

  export type ProductCountAggregateInputType = {
    productId?: true
    imageUrl?: true
    description?: true
    category?: true
    expiryDate?: true
    productionDate?: true
    quantity?: true
    price?: true
    costPrice?: true
    createdAt?: true
    deletedAt?: true
    createdBy?: true
    deletedBy?: true
    updatedBy?: true
    updatedAt?: true
    isDeleted?: true
    userId?: true
    _all?: true
  }

  export type ProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Product to aggregate.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Products
    **/
    _count?: true | ProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductMaxAggregateInputType
  }

  export type GetProductAggregateType<T extends ProductAggregateArgs> = {
        [P in keyof T & keyof AggregateProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct[P]>
      : GetScalarType<T[P], AggregateProduct[P]>
  }




  export type ProductGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithAggregationInput | ProductOrderByWithAggregationInput[]
    by: ProductScalarFieldEnum[] | ProductScalarFieldEnum
    having?: ProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductCountAggregateInputType | true
    _avg?: ProductAvgAggregateInputType
    _sum?: ProductSumAggregateInputType
    _min?: ProductMinAggregateInputType
    _max?: ProductMaxAggregateInputType
  }

  export type ProductGroupByOutputType = {
    productId: number
    imageUrl: string
    description: string
    category: string
    expiryDate: Date | null
    productionDate: Date | null
    quantity: number
    price: number
    costPrice: number
    createdAt: Date
    deletedAt: Date | null
    createdBy: number | null
    deletedBy: number | null
    updatedBy: number | null
    updatedAt: Date | null
    isDeleted: boolean
    userId: number
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  type GetProductGroupByPayload<T extends ProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductGroupByOutputType[P]>
            : GetScalarType<T[P], ProductGroupByOutputType[P]>
        }
      >
    >


  export type ProductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    productId?: boolean
    imageUrl?: boolean
    description?: boolean
    category?: boolean
    expiryDate?: boolean
    productionDate?: boolean
    quantity?: boolean
    price?: boolean
    costPrice?: boolean
    createdAt?: boolean
    deletedAt?: boolean
    createdBy?: boolean
    deletedBy?: boolean
    updatedBy?: boolean
    updatedAt?: boolean
    isDeleted?: boolean
    userId?: boolean
    createdByUser?: boolean | Product$createdByUserArgs<ExtArgs>
    deletedByUser?: boolean | Product$deletedByUserArgs<ExtArgs>
    updatedByUser?: boolean | Product$updatedByUserArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    productPurchase?: boolean | Product$productPurchaseArgs<ExtArgs>
    productSale?: boolean | Product$productSaleArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    productId?: boolean
    imageUrl?: boolean
    description?: boolean
    category?: boolean
    expiryDate?: boolean
    productionDate?: boolean
    quantity?: boolean
    price?: boolean
    costPrice?: boolean
    createdAt?: boolean
    deletedAt?: boolean
    createdBy?: boolean
    deletedBy?: boolean
    updatedBy?: boolean
    updatedAt?: boolean
    isDeleted?: boolean
    userId?: boolean
    createdByUser?: boolean | Product$createdByUserArgs<ExtArgs>
    deletedByUser?: boolean | Product$deletedByUserArgs<ExtArgs>
    updatedByUser?: boolean | Product$updatedByUserArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    productId?: boolean
    imageUrl?: boolean
    description?: boolean
    category?: boolean
    expiryDate?: boolean
    productionDate?: boolean
    quantity?: boolean
    price?: boolean
    costPrice?: boolean
    createdAt?: boolean
    deletedAt?: boolean
    createdBy?: boolean
    deletedBy?: boolean
    updatedBy?: boolean
    updatedAt?: boolean
    isDeleted?: boolean
    userId?: boolean
    createdByUser?: boolean | Product$createdByUserArgs<ExtArgs>
    deletedByUser?: boolean | Product$deletedByUserArgs<ExtArgs>
    updatedByUser?: boolean | Product$updatedByUserArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectScalar = {
    productId?: boolean
    imageUrl?: boolean
    description?: boolean
    category?: boolean
    expiryDate?: boolean
    productionDate?: boolean
    quantity?: boolean
    price?: boolean
    costPrice?: boolean
    createdAt?: boolean
    deletedAt?: boolean
    createdBy?: boolean
    deletedBy?: boolean
    updatedBy?: boolean
    updatedAt?: boolean
    isDeleted?: boolean
    userId?: boolean
  }

  export type ProductOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"productId" | "imageUrl" | "description" | "category" | "expiryDate" | "productionDate" | "quantity" | "price" | "costPrice" | "createdAt" | "deletedAt" | "createdBy" | "deletedBy" | "updatedBy" | "updatedAt" | "isDeleted" | "userId", ExtArgs["result"]["product"]>
  export type ProductInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdByUser?: boolean | Product$createdByUserArgs<ExtArgs>
    deletedByUser?: boolean | Product$deletedByUserArgs<ExtArgs>
    updatedByUser?: boolean | Product$updatedByUserArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    productPurchase?: boolean | Product$productPurchaseArgs<ExtArgs>
    productSale?: boolean | Product$productSaleArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProductIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdByUser?: boolean | Product$createdByUserArgs<ExtArgs>
    deletedByUser?: boolean | Product$deletedByUserArgs<ExtArgs>
    updatedByUser?: boolean | Product$updatedByUserArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ProductIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdByUser?: boolean | Product$createdByUserArgs<ExtArgs>
    deletedByUser?: boolean | Product$deletedByUserArgs<ExtArgs>
    updatedByUser?: boolean | Product$updatedByUserArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Product"
    objects: {
      createdByUser: Prisma.$UserPayload<ExtArgs> | null
      deletedByUser: Prisma.$UserPayload<ExtArgs> | null
      updatedByUser: Prisma.$UserPayload<ExtArgs> | null
      user: Prisma.$UserPayload<ExtArgs>
      productPurchase: Prisma.$ProductPurchasePayload<ExtArgs>[]
      productSale: Prisma.$ProductSalePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      productId: number
      imageUrl: string
      description: string
      category: string
      expiryDate: Date | null
      productionDate: Date | null
      quantity: number
      price: number
      costPrice: number
      createdAt: Date
      deletedAt: Date | null
      createdBy: number | null
      deletedBy: number | null
      updatedBy: number | null
      updatedAt: Date | null
      isDeleted: boolean
      userId: number
    }, ExtArgs["result"]["product"]>
    composites: {}
  }

  type ProductGetPayload<S extends boolean | null | undefined | ProductDefaultArgs> = $Result.GetResult<Prisma.$ProductPayload, S>

  type ProductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductCountAggregateInputType | true
    }

  export interface ProductDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Product'], meta: { name: 'Product' } }
    /**
     * Find zero or one Product that matches the filter.
     * @param {ProductFindUniqueArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductFindUniqueArgs>(args: SelectSubset<T, ProductFindUniqueArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Product that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductFindUniqueOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductFindFirstArgs>(args?: SelectSubset<T, ProductFindFirstArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.product.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.product.findMany({ take: 10 })
     * 
     * // Only select the `productId`
     * const productWithProductIdOnly = await prisma.product.findMany({ select: { productId: true } })
     * 
     */
    findMany<T extends ProductFindManyArgs>(args?: SelectSubset<T, ProductFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Product.
     * @param {ProductCreateArgs} args - Arguments to create a Product.
     * @example
     * // Create one Product
     * const Product = await prisma.product.create({
     *   data: {
     *     // ... data to create a Product
     *   }
     * })
     * 
     */
    create<T extends ProductCreateArgs>(args: SelectSubset<T, ProductCreateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Products.
     * @param {ProductCreateManyArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductCreateManyArgs>(args?: SelectSubset<T, ProductCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Products and returns the data saved in the database.
     * @param {ProductCreateManyAndReturnArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Products and only return the `productId`
     * const productWithProductIdOnly = await prisma.product.createManyAndReturn({
     *   select: { productId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Product.
     * @param {ProductDeleteArgs} args - Arguments to delete one Product.
     * @example
     * // Delete one Product
     * const Product = await prisma.product.delete({
     *   where: {
     *     // ... filter to delete one Product
     *   }
     * })
     * 
     */
    delete<T extends ProductDeleteArgs>(args: SelectSubset<T, ProductDeleteArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Product.
     * @param {ProductUpdateArgs} args - Arguments to update one Product.
     * @example
     * // Update one Product
     * const product = await prisma.product.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductUpdateArgs>(args: SelectSubset<T, ProductUpdateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Products.
     * @param {ProductDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.product.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductDeleteManyArgs>(args?: SelectSubset<T, ProductDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductUpdateManyArgs>(args: SelectSubset<T, ProductUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products and returns the data updated in the database.
     * @param {ProductUpdateManyAndReturnArgs} args - Arguments to update many Products.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Products and only return the `productId`
     * const productWithProductIdOnly = await prisma.product.updateManyAndReturn({
     *   select: { productId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProductUpdateManyAndReturnArgs>(args: SelectSubset<T, ProductUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Product.
     * @param {ProductUpsertArgs} args - Arguments to update or create a Product.
     * @example
     * // Update or create a Product
     * const product = await prisma.product.upsert({
     *   create: {
     *     // ... data to create a Product
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product we want to update
     *   }
     * })
     */
    upsert<T extends ProductUpsertArgs>(args: SelectSubset<T, ProductUpsertArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.product.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends ProductCountArgs>(
      args?: Subset<T, ProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductAggregateArgs>(args: Subset<T, ProductAggregateArgs>): Prisma.PrismaPromise<GetProductAggregateType<T>>

    /**
     * Group by Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductGroupByArgs['orderBy'] }
        : { orderBy?: ProductGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Product model
   */
  readonly fields: ProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Product.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    createdByUser<T extends Product$createdByUserArgs<ExtArgs> = {}>(args?: Subset<T, Product$createdByUserArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    deletedByUser<T extends Product$deletedByUserArgs<ExtArgs> = {}>(args?: Subset<T, Product$deletedByUserArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    updatedByUser<T extends Product$updatedByUserArgs<ExtArgs> = {}>(args?: Subset<T, Product$updatedByUserArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    productPurchase<T extends Product$productPurchaseArgs<ExtArgs> = {}>(args?: Subset<T, Product$productPurchaseArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPurchasePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    productSale<T extends Product$productSaleArgs<ExtArgs> = {}>(args?: Subset<T, Product$productSaleArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductSalePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Product model
   */
  interface ProductFieldRefs {
    readonly productId: FieldRef<"Product", 'Int'>
    readonly imageUrl: FieldRef<"Product", 'String'>
    readonly description: FieldRef<"Product", 'String'>
    readonly category: FieldRef<"Product", 'String'>
    readonly expiryDate: FieldRef<"Product", 'DateTime'>
    readonly productionDate: FieldRef<"Product", 'DateTime'>
    readonly quantity: FieldRef<"Product", 'Int'>
    readonly price: FieldRef<"Product", 'Float'>
    readonly costPrice: FieldRef<"Product", 'Float'>
    readonly createdAt: FieldRef<"Product", 'DateTime'>
    readonly deletedAt: FieldRef<"Product", 'DateTime'>
    readonly createdBy: FieldRef<"Product", 'Int'>
    readonly deletedBy: FieldRef<"Product", 'Int'>
    readonly updatedBy: FieldRef<"Product", 'Int'>
    readonly updatedAt: FieldRef<"Product", 'DateTime'>
    readonly isDeleted: FieldRef<"Product", 'Boolean'>
    readonly userId: FieldRef<"Product", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Product findUnique
   */
  export type ProductFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findUniqueOrThrow
   */
  export type ProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findFirst
   */
  export type ProductFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findFirstOrThrow
   */
  export type ProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findMany
   */
  export type ProductFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product create
   */
  export type ProductCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to create a Product.
     */
    data: XOR<ProductCreateInput, ProductUncheckedCreateInput>
  }

  /**
   * Product createMany
   */
  export type ProductCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Product createManyAndReturn
   */
  export type ProductCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Product update
   */
  export type ProductUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to update a Product.
     */
    data: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
    /**
     * Choose, which Product to update.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product updateMany
   */
  export type ProductUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
  }

  /**
   * Product updateManyAndReturn
   */
  export type ProductUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Product upsert
   */
  export type ProductUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The filter to search for the Product to update in case it exists.
     */
    where: ProductWhereUniqueInput
    /**
     * In case the Product found by the `where` argument doesn't exist, create a new Product with this data.
     */
    create: XOR<ProductCreateInput, ProductUncheckedCreateInput>
    /**
     * In case the Product was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
  }

  /**
   * Product delete
   */
  export type ProductDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter which Product to delete.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product deleteMany
   */
  export type ProductDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Products to delete
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to delete.
     */
    limit?: number
  }

  /**
   * Product.createdByUser
   */
  export type Product$createdByUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Product.deletedByUser
   */
  export type Product$deletedByUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Product.updatedByUser
   */
  export type Product$updatedByUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Product.productPurchase
   */
  export type Product$productPurchaseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductPurchase
     */
    select?: ProductPurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductPurchase
     */
    omit?: ProductPurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductPurchaseInclude<ExtArgs> | null
    where?: ProductPurchaseWhereInput
    orderBy?: ProductPurchaseOrderByWithRelationInput | ProductPurchaseOrderByWithRelationInput[]
    cursor?: ProductPurchaseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductPurchaseScalarFieldEnum | ProductPurchaseScalarFieldEnum[]
  }

  /**
   * Product.productSale
   */
  export type Product$productSaleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductSale
     */
    select?: ProductSaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductSale
     */
    omit?: ProductSaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductSaleInclude<ExtArgs> | null
    where?: ProductSaleWhereInput
    orderBy?: ProductSaleOrderByWithRelationInput | ProductSaleOrderByWithRelationInput[]
    cursor?: ProductSaleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductSaleScalarFieldEnum | ProductSaleScalarFieldEnum[]
  }

  /**
   * Product without action
   */
  export type ProductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
  }


  /**
   * Model Sale
   */

  export type AggregateSale = {
    _count: SaleCountAggregateOutputType | null
    _avg: SaleAvgAggregateOutputType | null
    _sum: SaleSumAggregateOutputType | null
    _min: SaleMinAggregateOutputType | null
    _max: SaleMaxAggregateOutputType | null
  }

  export type SaleAvgAggregateOutputType = {
    saleId: number | null
    createdBy: number | null
    deletedBy: number | null
    updatedBy: number | null
  }

  export type SaleSumAggregateOutputType = {
    saleId: number | null
    createdBy: number | null
    deletedBy: number | null
    updatedBy: number | null
  }

  export type SaleMinAggregateOutputType = {
    saleId: number | null
    createdAt: Date | null
    deletedAt: Date | null
    createdBy: number | null
    deletedBy: number | null
    updatedBy: number | null
    updatedAt: Date | null
    isDeleted: boolean | null
  }

  export type SaleMaxAggregateOutputType = {
    saleId: number | null
    createdAt: Date | null
    deletedAt: Date | null
    createdBy: number | null
    deletedBy: number | null
    updatedBy: number | null
    updatedAt: Date | null
    isDeleted: boolean | null
  }

  export type SaleCountAggregateOutputType = {
    saleId: number
    createdAt: number
    deletedAt: number
    createdBy: number
    deletedBy: number
    updatedBy: number
    updatedAt: number
    isDeleted: number
    _all: number
  }


  export type SaleAvgAggregateInputType = {
    saleId?: true
    createdBy?: true
    deletedBy?: true
    updatedBy?: true
  }

  export type SaleSumAggregateInputType = {
    saleId?: true
    createdBy?: true
    deletedBy?: true
    updatedBy?: true
  }

  export type SaleMinAggregateInputType = {
    saleId?: true
    createdAt?: true
    deletedAt?: true
    createdBy?: true
    deletedBy?: true
    updatedBy?: true
    updatedAt?: true
    isDeleted?: true
  }

  export type SaleMaxAggregateInputType = {
    saleId?: true
    createdAt?: true
    deletedAt?: true
    createdBy?: true
    deletedBy?: true
    updatedBy?: true
    updatedAt?: true
    isDeleted?: true
  }

  export type SaleCountAggregateInputType = {
    saleId?: true
    createdAt?: true
    deletedAt?: true
    createdBy?: true
    deletedBy?: true
    updatedBy?: true
    updatedAt?: true
    isDeleted?: true
    _all?: true
  }

  export type SaleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sale to aggregate.
     */
    where?: SaleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sales to fetch.
     */
    orderBy?: SaleOrderByWithRelationInput | SaleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SaleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sales.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sales
    **/
    _count?: true | SaleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SaleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SaleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SaleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SaleMaxAggregateInputType
  }

  export type GetSaleAggregateType<T extends SaleAggregateArgs> = {
        [P in keyof T & keyof AggregateSale]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSale[P]>
      : GetScalarType<T[P], AggregateSale[P]>
  }




  export type SaleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SaleWhereInput
    orderBy?: SaleOrderByWithAggregationInput | SaleOrderByWithAggregationInput[]
    by: SaleScalarFieldEnum[] | SaleScalarFieldEnum
    having?: SaleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SaleCountAggregateInputType | true
    _avg?: SaleAvgAggregateInputType
    _sum?: SaleSumAggregateInputType
    _min?: SaleMinAggregateInputType
    _max?: SaleMaxAggregateInputType
  }

  export type SaleGroupByOutputType = {
    saleId: number
    createdAt: Date
    deletedAt: Date | null
    createdBy: number | null
    deletedBy: number | null
    updatedBy: number | null
    updatedAt: Date | null
    isDeleted: boolean
    _count: SaleCountAggregateOutputType | null
    _avg: SaleAvgAggregateOutputType | null
    _sum: SaleSumAggregateOutputType | null
    _min: SaleMinAggregateOutputType | null
    _max: SaleMaxAggregateOutputType | null
  }

  type GetSaleGroupByPayload<T extends SaleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SaleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SaleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SaleGroupByOutputType[P]>
            : GetScalarType<T[P], SaleGroupByOutputType[P]>
        }
      >
    >


  export type SaleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    saleId?: boolean
    createdAt?: boolean
    deletedAt?: boolean
    createdBy?: boolean
    deletedBy?: boolean
    updatedBy?: boolean
    updatedAt?: boolean
    isDeleted?: boolean
    createdByUser?: boolean | Sale$createdByUserArgs<ExtArgs>
    deletedByUser?: boolean | Sale$deletedByUserArgs<ExtArgs>
    updatedByUser?: boolean | Sale$updatedByUserArgs<ExtArgs>
    productSale?: boolean | Sale$productSaleArgs<ExtArgs>
    _count?: boolean | SaleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sale"]>

  export type SaleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    saleId?: boolean
    createdAt?: boolean
    deletedAt?: boolean
    createdBy?: boolean
    deletedBy?: boolean
    updatedBy?: boolean
    updatedAt?: boolean
    isDeleted?: boolean
    createdByUser?: boolean | Sale$createdByUserArgs<ExtArgs>
    deletedByUser?: boolean | Sale$deletedByUserArgs<ExtArgs>
    updatedByUser?: boolean | Sale$updatedByUserArgs<ExtArgs>
  }, ExtArgs["result"]["sale"]>

  export type SaleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    saleId?: boolean
    createdAt?: boolean
    deletedAt?: boolean
    createdBy?: boolean
    deletedBy?: boolean
    updatedBy?: boolean
    updatedAt?: boolean
    isDeleted?: boolean
    createdByUser?: boolean | Sale$createdByUserArgs<ExtArgs>
    deletedByUser?: boolean | Sale$deletedByUserArgs<ExtArgs>
    updatedByUser?: boolean | Sale$updatedByUserArgs<ExtArgs>
  }, ExtArgs["result"]["sale"]>

  export type SaleSelectScalar = {
    saleId?: boolean
    createdAt?: boolean
    deletedAt?: boolean
    createdBy?: boolean
    deletedBy?: boolean
    updatedBy?: boolean
    updatedAt?: boolean
    isDeleted?: boolean
  }

  export type SaleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"saleId" | "createdAt" | "deletedAt" | "createdBy" | "deletedBy" | "updatedBy" | "updatedAt" | "isDeleted", ExtArgs["result"]["sale"]>
  export type SaleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdByUser?: boolean | Sale$createdByUserArgs<ExtArgs>
    deletedByUser?: boolean | Sale$deletedByUserArgs<ExtArgs>
    updatedByUser?: boolean | Sale$updatedByUserArgs<ExtArgs>
    productSale?: boolean | Sale$productSaleArgs<ExtArgs>
    _count?: boolean | SaleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SaleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdByUser?: boolean | Sale$createdByUserArgs<ExtArgs>
    deletedByUser?: boolean | Sale$deletedByUserArgs<ExtArgs>
    updatedByUser?: boolean | Sale$updatedByUserArgs<ExtArgs>
  }
  export type SaleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdByUser?: boolean | Sale$createdByUserArgs<ExtArgs>
    deletedByUser?: boolean | Sale$deletedByUserArgs<ExtArgs>
    updatedByUser?: boolean | Sale$updatedByUserArgs<ExtArgs>
  }

  export type $SalePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Sale"
    objects: {
      createdByUser: Prisma.$UserPayload<ExtArgs> | null
      deletedByUser: Prisma.$UserPayload<ExtArgs> | null
      updatedByUser: Prisma.$UserPayload<ExtArgs> | null
      productSale: Prisma.$ProductSalePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      saleId: number
      createdAt: Date
      deletedAt: Date | null
      createdBy: number | null
      deletedBy: number | null
      updatedBy: number | null
      updatedAt: Date | null
      isDeleted: boolean
    }, ExtArgs["result"]["sale"]>
    composites: {}
  }

  type SaleGetPayload<S extends boolean | null | undefined | SaleDefaultArgs> = $Result.GetResult<Prisma.$SalePayload, S>

  type SaleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SaleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SaleCountAggregateInputType | true
    }

  export interface SaleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Sale'], meta: { name: 'Sale' } }
    /**
     * Find zero or one Sale that matches the filter.
     * @param {SaleFindUniqueArgs} args - Arguments to find a Sale
     * @example
     * // Get one Sale
     * const sale = await prisma.sale.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SaleFindUniqueArgs>(args: SelectSubset<T, SaleFindUniqueArgs<ExtArgs>>): Prisma__SaleClient<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Sale that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SaleFindUniqueOrThrowArgs} args - Arguments to find a Sale
     * @example
     * // Get one Sale
     * const sale = await prisma.sale.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SaleFindUniqueOrThrowArgs>(args: SelectSubset<T, SaleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SaleClient<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sale that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleFindFirstArgs} args - Arguments to find a Sale
     * @example
     * // Get one Sale
     * const sale = await prisma.sale.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SaleFindFirstArgs>(args?: SelectSubset<T, SaleFindFirstArgs<ExtArgs>>): Prisma__SaleClient<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sale that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleFindFirstOrThrowArgs} args - Arguments to find a Sale
     * @example
     * // Get one Sale
     * const sale = await prisma.sale.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SaleFindFirstOrThrowArgs>(args?: SelectSubset<T, SaleFindFirstOrThrowArgs<ExtArgs>>): Prisma__SaleClient<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sales that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sales
     * const sales = await prisma.sale.findMany()
     * 
     * // Get first 10 Sales
     * const sales = await prisma.sale.findMany({ take: 10 })
     * 
     * // Only select the `saleId`
     * const saleWithSaleIdOnly = await prisma.sale.findMany({ select: { saleId: true } })
     * 
     */
    findMany<T extends SaleFindManyArgs>(args?: SelectSubset<T, SaleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Sale.
     * @param {SaleCreateArgs} args - Arguments to create a Sale.
     * @example
     * // Create one Sale
     * const Sale = await prisma.sale.create({
     *   data: {
     *     // ... data to create a Sale
     *   }
     * })
     * 
     */
    create<T extends SaleCreateArgs>(args: SelectSubset<T, SaleCreateArgs<ExtArgs>>): Prisma__SaleClient<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sales.
     * @param {SaleCreateManyArgs} args - Arguments to create many Sales.
     * @example
     * // Create many Sales
     * const sale = await prisma.sale.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SaleCreateManyArgs>(args?: SelectSubset<T, SaleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sales and returns the data saved in the database.
     * @param {SaleCreateManyAndReturnArgs} args - Arguments to create many Sales.
     * @example
     * // Create many Sales
     * const sale = await prisma.sale.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sales and only return the `saleId`
     * const saleWithSaleIdOnly = await prisma.sale.createManyAndReturn({
     *   select: { saleId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SaleCreateManyAndReturnArgs>(args?: SelectSubset<T, SaleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Sale.
     * @param {SaleDeleteArgs} args - Arguments to delete one Sale.
     * @example
     * // Delete one Sale
     * const Sale = await prisma.sale.delete({
     *   where: {
     *     // ... filter to delete one Sale
     *   }
     * })
     * 
     */
    delete<T extends SaleDeleteArgs>(args: SelectSubset<T, SaleDeleteArgs<ExtArgs>>): Prisma__SaleClient<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Sale.
     * @param {SaleUpdateArgs} args - Arguments to update one Sale.
     * @example
     * // Update one Sale
     * const sale = await prisma.sale.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SaleUpdateArgs>(args: SelectSubset<T, SaleUpdateArgs<ExtArgs>>): Prisma__SaleClient<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sales.
     * @param {SaleDeleteManyArgs} args - Arguments to filter Sales to delete.
     * @example
     * // Delete a few Sales
     * const { count } = await prisma.sale.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SaleDeleteManyArgs>(args?: SelectSubset<T, SaleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sales.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sales
     * const sale = await prisma.sale.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SaleUpdateManyArgs>(args: SelectSubset<T, SaleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sales and returns the data updated in the database.
     * @param {SaleUpdateManyAndReturnArgs} args - Arguments to update many Sales.
     * @example
     * // Update many Sales
     * const sale = await prisma.sale.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sales and only return the `saleId`
     * const saleWithSaleIdOnly = await prisma.sale.updateManyAndReturn({
     *   select: { saleId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SaleUpdateManyAndReturnArgs>(args: SelectSubset<T, SaleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Sale.
     * @param {SaleUpsertArgs} args - Arguments to update or create a Sale.
     * @example
     * // Update or create a Sale
     * const sale = await prisma.sale.upsert({
     *   create: {
     *     // ... data to create a Sale
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sale we want to update
     *   }
     * })
     */
    upsert<T extends SaleUpsertArgs>(args: SelectSubset<T, SaleUpsertArgs<ExtArgs>>): Prisma__SaleClient<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sales.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleCountArgs} args - Arguments to filter Sales to count.
     * @example
     * // Count the number of Sales
     * const count = await prisma.sale.count({
     *   where: {
     *     // ... the filter for the Sales we want to count
     *   }
     * })
    **/
    count<T extends SaleCountArgs>(
      args?: Subset<T, SaleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SaleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sale.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SaleAggregateArgs>(args: Subset<T, SaleAggregateArgs>): Prisma.PrismaPromise<GetSaleAggregateType<T>>

    /**
     * Group by Sale.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SaleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SaleGroupByArgs['orderBy'] }
        : { orderBy?: SaleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SaleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSaleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Sale model
   */
  readonly fields: SaleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Sale.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SaleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    createdByUser<T extends Sale$createdByUserArgs<ExtArgs> = {}>(args?: Subset<T, Sale$createdByUserArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    deletedByUser<T extends Sale$deletedByUserArgs<ExtArgs> = {}>(args?: Subset<T, Sale$deletedByUserArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    updatedByUser<T extends Sale$updatedByUserArgs<ExtArgs> = {}>(args?: Subset<T, Sale$updatedByUserArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    productSale<T extends Sale$productSaleArgs<ExtArgs> = {}>(args?: Subset<T, Sale$productSaleArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductSalePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Sale model
   */
  interface SaleFieldRefs {
    readonly saleId: FieldRef<"Sale", 'Int'>
    readonly createdAt: FieldRef<"Sale", 'DateTime'>
    readonly deletedAt: FieldRef<"Sale", 'DateTime'>
    readonly createdBy: FieldRef<"Sale", 'Int'>
    readonly deletedBy: FieldRef<"Sale", 'Int'>
    readonly updatedBy: FieldRef<"Sale", 'Int'>
    readonly updatedAt: FieldRef<"Sale", 'DateTime'>
    readonly isDeleted: FieldRef<"Sale", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Sale findUnique
   */
  export type SaleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sale
     */
    omit?: SaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleInclude<ExtArgs> | null
    /**
     * Filter, which Sale to fetch.
     */
    where: SaleWhereUniqueInput
  }

  /**
   * Sale findUniqueOrThrow
   */
  export type SaleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sale
     */
    omit?: SaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleInclude<ExtArgs> | null
    /**
     * Filter, which Sale to fetch.
     */
    where: SaleWhereUniqueInput
  }

  /**
   * Sale findFirst
   */
  export type SaleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sale
     */
    omit?: SaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleInclude<ExtArgs> | null
    /**
     * Filter, which Sale to fetch.
     */
    where?: SaleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sales to fetch.
     */
    orderBy?: SaleOrderByWithRelationInput | SaleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sales.
     */
    cursor?: SaleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sales.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sales.
     */
    distinct?: SaleScalarFieldEnum | SaleScalarFieldEnum[]
  }

  /**
   * Sale findFirstOrThrow
   */
  export type SaleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sale
     */
    omit?: SaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleInclude<ExtArgs> | null
    /**
     * Filter, which Sale to fetch.
     */
    where?: SaleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sales to fetch.
     */
    orderBy?: SaleOrderByWithRelationInput | SaleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sales.
     */
    cursor?: SaleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sales.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sales.
     */
    distinct?: SaleScalarFieldEnum | SaleScalarFieldEnum[]
  }

  /**
   * Sale findMany
   */
  export type SaleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sale
     */
    omit?: SaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleInclude<ExtArgs> | null
    /**
     * Filter, which Sales to fetch.
     */
    where?: SaleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sales to fetch.
     */
    orderBy?: SaleOrderByWithRelationInput | SaleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sales.
     */
    cursor?: SaleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sales.
     */
    skip?: number
    distinct?: SaleScalarFieldEnum | SaleScalarFieldEnum[]
  }

  /**
   * Sale create
   */
  export type SaleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sale
     */
    omit?: SaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleInclude<ExtArgs> | null
    /**
     * The data needed to create a Sale.
     */
    data?: XOR<SaleCreateInput, SaleUncheckedCreateInput>
  }

  /**
   * Sale createMany
   */
  export type SaleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sales.
     */
    data: SaleCreateManyInput | SaleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Sale createManyAndReturn
   */
  export type SaleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Sale
     */
    omit?: SaleOmit<ExtArgs> | null
    /**
     * The data used to create many Sales.
     */
    data: SaleCreateManyInput | SaleCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Sale update
   */
  export type SaleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sale
     */
    omit?: SaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleInclude<ExtArgs> | null
    /**
     * The data needed to update a Sale.
     */
    data: XOR<SaleUpdateInput, SaleUncheckedUpdateInput>
    /**
     * Choose, which Sale to update.
     */
    where: SaleWhereUniqueInput
  }

  /**
   * Sale updateMany
   */
  export type SaleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sales.
     */
    data: XOR<SaleUpdateManyMutationInput, SaleUncheckedUpdateManyInput>
    /**
     * Filter which Sales to update
     */
    where?: SaleWhereInput
    /**
     * Limit how many Sales to update.
     */
    limit?: number
  }

  /**
   * Sale updateManyAndReturn
   */
  export type SaleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Sale
     */
    omit?: SaleOmit<ExtArgs> | null
    /**
     * The data used to update Sales.
     */
    data: XOR<SaleUpdateManyMutationInput, SaleUncheckedUpdateManyInput>
    /**
     * Filter which Sales to update
     */
    where?: SaleWhereInput
    /**
     * Limit how many Sales to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Sale upsert
   */
  export type SaleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sale
     */
    omit?: SaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleInclude<ExtArgs> | null
    /**
     * The filter to search for the Sale to update in case it exists.
     */
    where: SaleWhereUniqueInput
    /**
     * In case the Sale found by the `where` argument doesn't exist, create a new Sale with this data.
     */
    create: XOR<SaleCreateInput, SaleUncheckedCreateInput>
    /**
     * In case the Sale was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SaleUpdateInput, SaleUncheckedUpdateInput>
  }

  /**
   * Sale delete
   */
  export type SaleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sale
     */
    omit?: SaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleInclude<ExtArgs> | null
    /**
     * Filter which Sale to delete.
     */
    where: SaleWhereUniqueInput
  }

  /**
   * Sale deleteMany
   */
  export type SaleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sales to delete
     */
    where?: SaleWhereInput
    /**
     * Limit how many Sales to delete.
     */
    limit?: number
  }

  /**
   * Sale.createdByUser
   */
  export type Sale$createdByUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Sale.deletedByUser
   */
  export type Sale$deletedByUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Sale.updatedByUser
   */
  export type Sale$updatedByUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Sale.productSale
   */
  export type Sale$productSaleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductSale
     */
    select?: ProductSaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductSale
     */
    omit?: ProductSaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductSaleInclude<ExtArgs> | null
    where?: ProductSaleWhereInput
    orderBy?: ProductSaleOrderByWithRelationInput | ProductSaleOrderByWithRelationInput[]
    cursor?: ProductSaleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductSaleScalarFieldEnum | ProductSaleScalarFieldEnum[]
  }

  /**
   * Sale without action
   */
  export type SaleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sale
     */
    omit?: SaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleInclude<ExtArgs> | null
  }


  /**
   * Model Purchase
   */

  export type AggregatePurchase = {
    _count: PurchaseCountAggregateOutputType | null
    _avg: PurchaseAvgAggregateOutputType | null
    _sum: PurchaseSumAggregateOutputType | null
    _min: PurchaseMinAggregateOutputType | null
    _max: PurchaseMaxAggregateOutputType | null
  }

  export type PurchaseAvgAggregateOutputType = {
    purchaseId: number | null
    createdBy: number | null
    deletedBy: number | null
    updatedBy: number | null
    productId: number | null
  }

  export type PurchaseSumAggregateOutputType = {
    purchaseId: number | null
    createdBy: number | null
    deletedBy: number | null
    updatedBy: number | null
    productId: number | null
  }

  export type PurchaseMinAggregateOutputType = {
    purchaseId: number | null
    createdAt: Date | null
    deletedAt: Date | null
    createdBy: number | null
    deletedBy: number | null
    updatedBy: number | null
    updatedAt: Date | null
    isDeleted: boolean | null
    productId: number | null
  }

  export type PurchaseMaxAggregateOutputType = {
    purchaseId: number | null
    createdAt: Date | null
    deletedAt: Date | null
    createdBy: number | null
    deletedBy: number | null
    updatedBy: number | null
    updatedAt: Date | null
    isDeleted: boolean | null
    productId: number | null
  }

  export type PurchaseCountAggregateOutputType = {
    purchaseId: number
    createdAt: number
    deletedAt: number
    createdBy: number
    deletedBy: number
    updatedBy: number
    updatedAt: number
    isDeleted: number
    productId: number
    _all: number
  }


  export type PurchaseAvgAggregateInputType = {
    purchaseId?: true
    createdBy?: true
    deletedBy?: true
    updatedBy?: true
    productId?: true
  }

  export type PurchaseSumAggregateInputType = {
    purchaseId?: true
    createdBy?: true
    deletedBy?: true
    updatedBy?: true
    productId?: true
  }

  export type PurchaseMinAggregateInputType = {
    purchaseId?: true
    createdAt?: true
    deletedAt?: true
    createdBy?: true
    deletedBy?: true
    updatedBy?: true
    updatedAt?: true
    isDeleted?: true
    productId?: true
  }

  export type PurchaseMaxAggregateInputType = {
    purchaseId?: true
    createdAt?: true
    deletedAt?: true
    createdBy?: true
    deletedBy?: true
    updatedBy?: true
    updatedAt?: true
    isDeleted?: true
    productId?: true
  }

  export type PurchaseCountAggregateInputType = {
    purchaseId?: true
    createdAt?: true
    deletedAt?: true
    createdBy?: true
    deletedBy?: true
    updatedBy?: true
    updatedAt?: true
    isDeleted?: true
    productId?: true
    _all?: true
  }

  export type PurchaseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Purchase to aggregate.
     */
    where?: PurchaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Purchases to fetch.
     */
    orderBy?: PurchaseOrderByWithRelationInput | PurchaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PurchaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Purchases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Purchases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Purchases
    **/
    _count?: true | PurchaseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PurchaseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PurchaseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PurchaseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PurchaseMaxAggregateInputType
  }

  export type GetPurchaseAggregateType<T extends PurchaseAggregateArgs> = {
        [P in keyof T & keyof AggregatePurchase]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePurchase[P]>
      : GetScalarType<T[P], AggregatePurchase[P]>
  }




  export type PurchaseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PurchaseWhereInput
    orderBy?: PurchaseOrderByWithAggregationInput | PurchaseOrderByWithAggregationInput[]
    by: PurchaseScalarFieldEnum[] | PurchaseScalarFieldEnum
    having?: PurchaseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PurchaseCountAggregateInputType | true
    _avg?: PurchaseAvgAggregateInputType
    _sum?: PurchaseSumAggregateInputType
    _min?: PurchaseMinAggregateInputType
    _max?: PurchaseMaxAggregateInputType
  }

  export type PurchaseGroupByOutputType = {
    purchaseId: number
    createdAt: Date
    deletedAt: Date | null
    createdBy: number | null
    deletedBy: number | null
    updatedBy: number | null
    updatedAt: Date | null
    isDeleted: boolean
    productId: number
    _count: PurchaseCountAggregateOutputType | null
    _avg: PurchaseAvgAggregateOutputType | null
    _sum: PurchaseSumAggregateOutputType | null
    _min: PurchaseMinAggregateOutputType | null
    _max: PurchaseMaxAggregateOutputType | null
  }

  type GetPurchaseGroupByPayload<T extends PurchaseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PurchaseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PurchaseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PurchaseGroupByOutputType[P]>
            : GetScalarType<T[P], PurchaseGroupByOutputType[P]>
        }
      >
    >


  export type PurchaseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    purchaseId?: boolean
    createdAt?: boolean
    deletedAt?: boolean
    createdBy?: boolean
    deletedBy?: boolean
    updatedBy?: boolean
    updatedAt?: boolean
    isDeleted?: boolean
    productId?: boolean
    createdByUser?: boolean | Purchase$createdByUserArgs<ExtArgs>
    deletedByUser?: boolean | Purchase$deletedByUserArgs<ExtArgs>
    updatedByUser?: boolean | Purchase$updatedByUserArgs<ExtArgs>
    productPurchase?: boolean | Purchase$productPurchaseArgs<ExtArgs>
    _count?: boolean | PurchaseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["purchase"]>

  export type PurchaseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    purchaseId?: boolean
    createdAt?: boolean
    deletedAt?: boolean
    createdBy?: boolean
    deletedBy?: boolean
    updatedBy?: boolean
    updatedAt?: boolean
    isDeleted?: boolean
    productId?: boolean
    createdByUser?: boolean | Purchase$createdByUserArgs<ExtArgs>
    deletedByUser?: boolean | Purchase$deletedByUserArgs<ExtArgs>
    updatedByUser?: boolean | Purchase$updatedByUserArgs<ExtArgs>
  }, ExtArgs["result"]["purchase"]>

  export type PurchaseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    purchaseId?: boolean
    createdAt?: boolean
    deletedAt?: boolean
    createdBy?: boolean
    deletedBy?: boolean
    updatedBy?: boolean
    updatedAt?: boolean
    isDeleted?: boolean
    productId?: boolean
    createdByUser?: boolean | Purchase$createdByUserArgs<ExtArgs>
    deletedByUser?: boolean | Purchase$deletedByUserArgs<ExtArgs>
    updatedByUser?: boolean | Purchase$updatedByUserArgs<ExtArgs>
  }, ExtArgs["result"]["purchase"]>

  export type PurchaseSelectScalar = {
    purchaseId?: boolean
    createdAt?: boolean
    deletedAt?: boolean
    createdBy?: boolean
    deletedBy?: boolean
    updatedBy?: boolean
    updatedAt?: boolean
    isDeleted?: boolean
    productId?: boolean
  }

  export type PurchaseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"purchaseId" | "createdAt" | "deletedAt" | "createdBy" | "deletedBy" | "updatedBy" | "updatedAt" | "isDeleted" | "productId", ExtArgs["result"]["purchase"]>
  export type PurchaseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdByUser?: boolean | Purchase$createdByUserArgs<ExtArgs>
    deletedByUser?: boolean | Purchase$deletedByUserArgs<ExtArgs>
    updatedByUser?: boolean | Purchase$updatedByUserArgs<ExtArgs>
    productPurchase?: boolean | Purchase$productPurchaseArgs<ExtArgs>
    _count?: boolean | PurchaseCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PurchaseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdByUser?: boolean | Purchase$createdByUserArgs<ExtArgs>
    deletedByUser?: boolean | Purchase$deletedByUserArgs<ExtArgs>
    updatedByUser?: boolean | Purchase$updatedByUserArgs<ExtArgs>
  }
  export type PurchaseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdByUser?: boolean | Purchase$createdByUserArgs<ExtArgs>
    deletedByUser?: boolean | Purchase$deletedByUserArgs<ExtArgs>
    updatedByUser?: boolean | Purchase$updatedByUserArgs<ExtArgs>
  }

  export type $PurchasePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Purchase"
    objects: {
      createdByUser: Prisma.$UserPayload<ExtArgs> | null
      deletedByUser: Prisma.$UserPayload<ExtArgs> | null
      updatedByUser: Prisma.$UserPayload<ExtArgs> | null
      productPurchase: Prisma.$ProductPurchasePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      purchaseId: number
      createdAt: Date
      deletedAt: Date | null
      createdBy: number | null
      deletedBy: number | null
      updatedBy: number | null
      updatedAt: Date | null
      isDeleted: boolean
      productId: number
    }, ExtArgs["result"]["purchase"]>
    composites: {}
  }

  type PurchaseGetPayload<S extends boolean | null | undefined | PurchaseDefaultArgs> = $Result.GetResult<Prisma.$PurchasePayload, S>

  type PurchaseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PurchaseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PurchaseCountAggregateInputType | true
    }

  export interface PurchaseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Purchase'], meta: { name: 'Purchase' } }
    /**
     * Find zero or one Purchase that matches the filter.
     * @param {PurchaseFindUniqueArgs} args - Arguments to find a Purchase
     * @example
     * // Get one Purchase
     * const purchase = await prisma.purchase.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PurchaseFindUniqueArgs>(args: SelectSubset<T, PurchaseFindUniqueArgs<ExtArgs>>): Prisma__PurchaseClient<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Purchase that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PurchaseFindUniqueOrThrowArgs} args - Arguments to find a Purchase
     * @example
     * // Get one Purchase
     * const purchase = await prisma.purchase.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PurchaseFindUniqueOrThrowArgs>(args: SelectSubset<T, PurchaseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PurchaseClient<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Purchase that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseFindFirstArgs} args - Arguments to find a Purchase
     * @example
     * // Get one Purchase
     * const purchase = await prisma.purchase.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PurchaseFindFirstArgs>(args?: SelectSubset<T, PurchaseFindFirstArgs<ExtArgs>>): Prisma__PurchaseClient<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Purchase that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseFindFirstOrThrowArgs} args - Arguments to find a Purchase
     * @example
     * // Get one Purchase
     * const purchase = await prisma.purchase.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PurchaseFindFirstOrThrowArgs>(args?: SelectSubset<T, PurchaseFindFirstOrThrowArgs<ExtArgs>>): Prisma__PurchaseClient<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Purchases that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Purchases
     * const purchases = await prisma.purchase.findMany()
     * 
     * // Get first 10 Purchases
     * const purchases = await prisma.purchase.findMany({ take: 10 })
     * 
     * // Only select the `purchaseId`
     * const purchaseWithPurchaseIdOnly = await prisma.purchase.findMany({ select: { purchaseId: true } })
     * 
     */
    findMany<T extends PurchaseFindManyArgs>(args?: SelectSubset<T, PurchaseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Purchase.
     * @param {PurchaseCreateArgs} args - Arguments to create a Purchase.
     * @example
     * // Create one Purchase
     * const Purchase = await prisma.purchase.create({
     *   data: {
     *     // ... data to create a Purchase
     *   }
     * })
     * 
     */
    create<T extends PurchaseCreateArgs>(args: SelectSubset<T, PurchaseCreateArgs<ExtArgs>>): Prisma__PurchaseClient<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Purchases.
     * @param {PurchaseCreateManyArgs} args - Arguments to create many Purchases.
     * @example
     * // Create many Purchases
     * const purchase = await prisma.purchase.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PurchaseCreateManyArgs>(args?: SelectSubset<T, PurchaseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Purchases and returns the data saved in the database.
     * @param {PurchaseCreateManyAndReturnArgs} args - Arguments to create many Purchases.
     * @example
     * // Create many Purchases
     * const purchase = await prisma.purchase.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Purchases and only return the `purchaseId`
     * const purchaseWithPurchaseIdOnly = await prisma.purchase.createManyAndReturn({
     *   select: { purchaseId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PurchaseCreateManyAndReturnArgs>(args?: SelectSubset<T, PurchaseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Purchase.
     * @param {PurchaseDeleteArgs} args - Arguments to delete one Purchase.
     * @example
     * // Delete one Purchase
     * const Purchase = await prisma.purchase.delete({
     *   where: {
     *     // ... filter to delete one Purchase
     *   }
     * })
     * 
     */
    delete<T extends PurchaseDeleteArgs>(args: SelectSubset<T, PurchaseDeleteArgs<ExtArgs>>): Prisma__PurchaseClient<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Purchase.
     * @param {PurchaseUpdateArgs} args - Arguments to update one Purchase.
     * @example
     * // Update one Purchase
     * const purchase = await prisma.purchase.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PurchaseUpdateArgs>(args: SelectSubset<T, PurchaseUpdateArgs<ExtArgs>>): Prisma__PurchaseClient<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Purchases.
     * @param {PurchaseDeleteManyArgs} args - Arguments to filter Purchases to delete.
     * @example
     * // Delete a few Purchases
     * const { count } = await prisma.purchase.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PurchaseDeleteManyArgs>(args?: SelectSubset<T, PurchaseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Purchases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Purchases
     * const purchase = await prisma.purchase.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PurchaseUpdateManyArgs>(args: SelectSubset<T, PurchaseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Purchases and returns the data updated in the database.
     * @param {PurchaseUpdateManyAndReturnArgs} args - Arguments to update many Purchases.
     * @example
     * // Update many Purchases
     * const purchase = await prisma.purchase.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Purchases and only return the `purchaseId`
     * const purchaseWithPurchaseIdOnly = await prisma.purchase.updateManyAndReturn({
     *   select: { purchaseId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PurchaseUpdateManyAndReturnArgs>(args: SelectSubset<T, PurchaseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Purchase.
     * @param {PurchaseUpsertArgs} args - Arguments to update or create a Purchase.
     * @example
     * // Update or create a Purchase
     * const purchase = await prisma.purchase.upsert({
     *   create: {
     *     // ... data to create a Purchase
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Purchase we want to update
     *   }
     * })
     */
    upsert<T extends PurchaseUpsertArgs>(args: SelectSubset<T, PurchaseUpsertArgs<ExtArgs>>): Prisma__PurchaseClient<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Purchases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseCountArgs} args - Arguments to filter Purchases to count.
     * @example
     * // Count the number of Purchases
     * const count = await prisma.purchase.count({
     *   where: {
     *     // ... the filter for the Purchases we want to count
     *   }
     * })
    **/
    count<T extends PurchaseCountArgs>(
      args?: Subset<T, PurchaseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PurchaseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Purchase.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PurchaseAggregateArgs>(args: Subset<T, PurchaseAggregateArgs>): Prisma.PrismaPromise<GetPurchaseAggregateType<T>>

    /**
     * Group by Purchase.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PurchaseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PurchaseGroupByArgs['orderBy'] }
        : { orderBy?: PurchaseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PurchaseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPurchaseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Purchase model
   */
  readonly fields: PurchaseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Purchase.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PurchaseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    createdByUser<T extends Purchase$createdByUserArgs<ExtArgs> = {}>(args?: Subset<T, Purchase$createdByUserArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    deletedByUser<T extends Purchase$deletedByUserArgs<ExtArgs> = {}>(args?: Subset<T, Purchase$deletedByUserArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    updatedByUser<T extends Purchase$updatedByUserArgs<ExtArgs> = {}>(args?: Subset<T, Purchase$updatedByUserArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    productPurchase<T extends Purchase$productPurchaseArgs<ExtArgs> = {}>(args?: Subset<T, Purchase$productPurchaseArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPurchasePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Purchase model
   */
  interface PurchaseFieldRefs {
    readonly purchaseId: FieldRef<"Purchase", 'Int'>
    readonly createdAt: FieldRef<"Purchase", 'DateTime'>
    readonly deletedAt: FieldRef<"Purchase", 'DateTime'>
    readonly createdBy: FieldRef<"Purchase", 'Int'>
    readonly deletedBy: FieldRef<"Purchase", 'Int'>
    readonly updatedBy: FieldRef<"Purchase", 'Int'>
    readonly updatedAt: FieldRef<"Purchase", 'DateTime'>
    readonly isDeleted: FieldRef<"Purchase", 'Boolean'>
    readonly productId: FieldRef<"Purchase", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Purchase findUnique
   */
  export type PurchaseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purchase
     */
    omit?: PurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseInclude<ExtArgs> | null
    /**
     * Filter, which Purchase to fetch.
     */
    where: PurchaseWhereUniqueInput
  }

  /**
   * Purchase findUniqueOrThrow
   */
  export type PurchaseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purchase
     */
    omit?: PurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseInclude<ExtArgs> | null
    /**
     * Filter, which Purchase to fetch.
     */
    where: PurchaseWhereUniqueInput
  }

  /**
   * Purchase findFirst
   */
  export type PurchaseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purchase
     */
    omit?: PurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseInclude<ExtArgs> | null
    /**
     * Filter, which Purchase to fetch.
     */
    where?: PurchaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Purchases to fetch.
     */
    orderBy?: PurchaseOrderByWithRelationInput | PurchaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Purchases.
     */
    cursor?: PurchaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Purchases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Purchases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Purchases.
     */
    distinct?: PurchaseScalarFieldEnum | PurchaseScalarFieldEnum[]
  }

  /**
   * Purchase findFirstOrThrow
   */
  export type PurchaseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purchase
     */
    omit?: PurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseInclude<ExtArgs> | null
    /**
     * Filter, which Purchase to fetch.
     */
    where?: PurchaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Purchases to fetch.
     */
    orderBy?: PurchaseOrderByWithRelationInput | PurchaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Purchases.
     */
    cursor?: PurchaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Purchases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Purchases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Purchases.
     */
    distinct?: PurchaseScalarFieldEnum | PurchaseScalarFieldEnum[]
  }

  /**
   * Purchase findMany
   */
  export type PurchaseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purchase
     */
    omit?: PurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseInclude<ExtArgs> | null
    /**
     * Filter, which Purchases to fetch.
     */
    where?: PurchaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Purchases to fetch.
     */
    orderBy?: PurchaseOrderByWithRelationInput | PurchaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Purchases.
     */
    cursor?: PurchaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Purchases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Purchases.
     */
    skip?: number
    distinct?: PurchaseScalarFieldEnum | PurchaseScalarFieldEnum[]
  }

  /**
   * Purchase create
   */
  export type PurchaseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purchase
     */
    omit?: PurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseInclude<ExtArgs> | null
    /**
     * The data needed to create a Purchase.
     */
    data: XOR<PurchaseCreateInput, PurchaseUncheckedCreateInput>
  }

  /**
   * Purchase createMany
   */
  export type PurchaseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Purchases.
     */
    data: PurchaseCreateManyInput | PurchaseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Purchase createManyAndReturn
   */
  export type PurchaseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Purchase
     */
    omit?: PurchaseOmit<ExtArgs> | null
    /**
     * The data used to create many Purchases.
     */
    data: PurchaseCreateManyInput | PurchaseCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Purchase update
   */
  export type PurchaseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purchase
     */
    omit?: PurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseInclude<ExtArgs> | null
    /**
     * The data needed to update a Purchase.
     */
    data: XOR<PurchaseUpdateInput, PurchaseUncheckedUpdateInput>
    /**
     * Choose, which Purchase to update.
     */
    where: PurchaseWhereUniqueInput
  }

  /**
   * Purchase updateMany
   */
  export type PurchaseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Purchases.
     */
    data: XOR<PurchaseUpdateManyMutationInput, PurchaseUncheckedUpdateManyInput>
    /**
     * Filter which Purchases to update
     */
    where?: PurchaseWhereInput
    /**
     * Limit how many Purchases to update.
     */
    limit?: number
  }

  /**
   * Purchase updateManyAndReturn
   */
  export type PurchaseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Purchase
     */
    omit?: PurchaseOmit<ExtArgs> | null
    /**
     * The data used to update Purchases.
     */
    data: XOR<PurchaseUpdateManyMutationInput, PurchaseUncheckedUpdateManyInput>
    /**
     * Filter which Purchases to update
     */
    where?: PurchaseWhereInput
    /**
     * Limit how many Purchases to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Purchase upsert
   */
  export type PurchaseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purchase
     */
    omit?: PurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseInclude<ExtArgs> | null
    /**
     * The filter to search for the Purchase to update in case it exists.
     */
    where: PurchaseWhereUniqueInput
    /**
     * In case the Purchase found by the `where` argument doesn't exist, create a new Purchase with this data.
     */
    create: XOR<PurchaseCreateInput, PurchaseUncheckedCreateInput>
    /**
     * In case the Purchase was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PurchaseUpdateInput, PurchaseUncheckedUpdateInput>
  }

  /**
   * Purchase delete
   */
  export type PurchaseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purchase
     */
    omit?: PurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseInclude<ExtArgs> | null
    /**
     * Filter which Purchase to delete.
     */
    where: PurchaseWhereUniqueInput
  }

  /**
   * Purchase deleteMany
   */
  export type PurchaseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Purchases to delete
     */
    where?: PurchaseWhereInput
    /**
     * Limit how many Purchases to delete.
     */
    limit?: number
  }

  /**
   * Purchase.createdByUser
   */
  export type Purchase$createdByUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Purchase.deletedByUser
   */
  export type Purchase$deletedByUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Purchase.updatedByUser
   */
  export type Purchase$updatedByUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Purchase.productPurchase
   */
  export type Purchase$productPurchaseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductPurchase
     */
    select?: ProductPurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductPurchase
     */
    omit?: ProductPurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductPurchaseInclude<ExtArgs> | null
    where?: ProductPurchaseWhereInput
    orderBy?: ProductPurchaseOrderByWithRelationInput | ProductPurchaseOrderByWithRelationInput[]
    cursor?: ProductPurchaseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductPurchaseScalarFieldEnum | ProductPurchaseScalarFieldEnum[]
  }

  /**
   * Purchase without action
   */
  export type PurchaseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purchase
     */
    omit?: PurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseInclude<ExtArgs> | null
  }


  /**
   * Model ProductPurchase
   */

  export type AggregateProductPurchase = {
    _count: ProductPurchaseCountAggregateOutputType | null
    _avg: ProductPurchaseAvgAggregateOutputType | null
    _sum: ProductPurchaseSumAggregateOutputType | null
    _min: ProductPurchaseMinAggregateOutputType | null
    _max: ProductPurchaseMaxAggregateOutputType | null
  }

  export type ProductPurchaseAvgAggregateOutputType = {
    productPurchaseId: number | null
    purchasePrice: number | null
    purchaseQuantity: number | null
    createdBy: number | null
    deletedBy: number | null
    updatedBy: number | null
    productId: number | null
    purchaseId: number | null
  }

  export type ProductPurchaseSumAggregateOutputType = {
    productPurchaseId: number | null
    purchasePrice: number | null
    purchaseQuantity: number | null
    createdBy: number | null
    deletedBy: number | null
    updatedBy: number | null
    productId: number | null
    purchaseId: number | null
  }

  export type ProductPurchaseMinAggregateOutputType = {
    productPurchaseId: number | null
    purchasePrice: number | null
    purchaseQuantity: number | null
    createdAt: Date | null
    deletedAt: Date | null
    createdBy: number | null
    deletedBy: number | null
    updatedBy: number | null
    updatedAt: Date | null
    isDeleted: boolean | null
    productId: number | null
    purchaseId: number | null
  }

  export type ProductPurchaseMaxAggregateOutputType = {
    productPurchaseId: number | null
    purchasePrice: number | null
    purchaseQuantity: number | null
    createdAt: Date | null
    deletedAt: Date | null
    createdBy: number | null
    deletedBy: number | null
    updatedBy: number | null
    updatedAt: Date | null
    isDeleted: boolean | null
    productId: number | null
    purchaseId: number | null
  }

  export type ProductPurchaseCountAggregateOutputType = {
    productPurchaseId: number
    purchasePrice: number
    purchaseQuantity: number
    createdAt: number
    deletedAt: number
    createdBy: number
    deletedBy: number
    updatedBy: number
    updatedAt: number
    isDeleted: number
    productId: number
    purchaseId: number
    _all: number
  }


  export type ProductPurchaseAvgAggregateInputType = {
    productPurchaseId?: true
    purchasePrice?: true
    purchaseQuantity?: true
    createdBy?: true
    deletedBy?: true
    updatedBy?: true
    productId?: true
    purchaseId?: true
  }

  export type ProductPurchaseSumAggregateInputType = {
    productPurchaseId?: true
    purchasePrice?: true
    purchaseQuantity?: true
    createdBy?: true
    deletedBy?: true
    updatedBy?: true
    productId?: true
    purchaseId?: true
  }

  export type ProductPurchaseMinAggregateInputType = {
    productPurchaseId?: true
    purchasePrice?: true
    purchaseQuantity?: true
    createdAt?: true
    deletedAt?: true
    createdBy?: true
    deletedBy?: true
    updatedBy?: true
    updatedAt?: true
    isDeleted?: true
    productId?: true
    purchaseId?: true
  }

  export type ProductPurchaseMaxAggregateInputType = {
    productPurchaseId?: true
    purchasePrice?: true
    purchaseQuantity?: true
    createdAt?: true
    deletedAt?: true
    createdBy?: true
    deletedBy?: true
    updatedBy?: true
    updatedAt?: true
    isDeleted?: true
    productId?: true
    purchaseId?: true
  }

  export type ProductPurchaseCountAggregateInputType = {
    productPurchaseId?: true
    purchasePrice?: true
    purchaseQuantity?: true
    createdAt?: true
    deletedAt?: true
    createdBy?: true
    deletedBy?: true
    updatedBy?: true
    updatedAt?: true
    isDeleted?: true
    productId?: true
    purchaseId?: true
    _all?: true
  }

  export type ProductPurchaseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductPurchase to aggregate.
     */
    where?: ProductPurchaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductPurchases to fetch.
     */
    orderBy?: ProductPurchaseOrderByWithRelationInput | ProductPurchaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductPurchaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductPurchases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductPurchases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProductPurchases
    **/
    _count?: true | ProductPurchaseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductPurchaseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductPurchaseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductPurchaseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductPurchaseMaxAggregateInputType
  }

  export type GetProductPurchaseAggregateType<T extends ProductPurchaseAggregateArgs> = {
        [P in keyof T & keyof AggregateProductPurchase]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductPurchase[P]>
      : GetScalarType<T[P], AggregateProductPurchase[P]>
  }




  export type ProductPurchaseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductPurchaseWhereInput
    orderBy?: ProductPurchaseOrderByWithAggregationInput | ProductPurchaseOrderByWithAggregationInput[]
    by: ProductPurchaseScalarFieldEnum[] | ProductPurchaseScalarFieldEnum
    having?: ProductPurchaseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductPurchaseCountAggregateInputType | true
    _avg?: ProductPurchaseAvgAggregateInputType
    _sum?: ProductPurchaseSumAggregateInputType
    _min?: ProductPurchaseMinAggregateInputType
    _max?: ProductPurchaseMaxAggregateInputType
  }

  export type ProductPurchaseGroupByOutputType = {
    productPurchaseId: number
    purchasePrice: number
    purchaseQuantity: number
    createdAt: Date
    deletedAt: Date | null
    createdBy: number | null
    deletedBy: number | null
    updatedBy: number | null
    updatedAt: Date | null
    isDeleted: boolean
    productId: number
    purchaseId: number
    _count: ProductPurchaseCountAggregateOutputType | null
    _avg: ProductPurchaseAvgAggregateOutputType | null
    _sum: ProductPurchaseSumAggregateOutputType | null
    _min: ProductPurchaseMinAggregateOutputType | null
    _max: ProductPurchaseMaxAggregateOutputType | null
  }

  type GetProductPurchaseGroupByPayload<T extends ProductPurchaseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductPurchaseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductPurchaseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductPurchaseGroupByOutputType[P]>
            : GetScalarType<T[P], ProductPurchaseGroupByOutputType[P]>
        }
      >
    >


  export type ProductPurchaseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    productPurchaseId?: boolean
    purchasePrice?: boolean
    purchaseQuantity?: boolean
    createdAt?: boolean
    deletedAt?: boolean
    createdBy?: boolean
    deletedBy?: boolean
    updatedBy?: boolean
    updatedAt?: boolean
    isDeleted?: boolean
    productId?: boolean
    purchaseId?: boolean
    createdByUser?: boolean | ProductPurchase$createdByUserArgs<ExtArgs>
    deletedByUser?: boolean | ProductPurchase$deletedByUserArgs<ExtArgs>
    updatedByUser?: boolean | ProductPurchase$updatedByUserArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
    purchase?: boolean | PurchaseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productPurchase"]>

  export type ProductPurchaseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    productPurchaseId?: boolean
    purchasePrice?: boolean
    purchaseQuantity?: boolean
    createdAt?: boolean
    deletedAt?: boolean
    createdBy?: boolean
    deletedBy?: boolean
    updatedBy?: boolean
    updatedAt?: boolean
    isDeleted?: boolean
    productId?: boolean
    purchaseId?: boolean
    createdByUser?: boolean | ProductPurchase$createdByUserArgs<ExtArgs>
    deletedByUser?: boolean | ProductPurchase$deletedByUserArgs<ExtArgs>
    updatedByUser?: boolean | ProductPurchase$updatedByUserArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
    purchase?: boolean | PurchaseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productPurchase"]>

  export type ProductPurchaseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    productPurchaseId?: boolean
    purchasePrice?: boolean
    purchaseQuantity?: boolean
    createdAt?: boolean
    deletedAt?: boolean
    createdBy?: boolean
    deletedBy?: boolean
    updatedBy?: boolean
    updatedAt?: boolean
    isDeleted?: boolean
    productId?: boolean
    purchaseId?: boolean
    createdByUser?: boolean | ProductPurchase$createdByUserArgs<ExtArgs>
    deletedByUser?: boolean | ProductPurchase$deletedByUserArgs<ExtArgs>
    updatedByUser?: boolean | ProductPurchase$updatedByUserArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
    purchase?: boolean | PurchaseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productPurchase"]>

  export type ProductPurchaseSelectScalar = {
    productPurchaseId?: boolean
    purchasePrice?: boolean
    purchaseQuantity?: boolean
    createdAt?: boolean
    deletedAt?: boolean
    createdBy?: boolean
    deletedBy?: boolean
    updatedBy?: boolean
    updatedAt?: boolean
    isDeleted?: boolean
    productId?: boolean
    purchaseId?: boolean
  }

  export type ProductPurchaseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"productPurchaseId" | "purchasePrice" | "purchaseQuantity" | "createdAt" | "deletedAt" | "createdBy" | "deletedBy" | "updatedBy" | "updatedAt" | "isDeleted" | "productId" | "purchaseId", ExtArgs["result"]["productPurchase"]>
  export type ProductPurchaseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdByUser?: boolean | ProductPurchase$createdByUserArgs<ExtArgs>
    deletedByUser?: boolean | ProductPurchase$deletedByUserArgs<ExtArgs>
    updatedByUser?: boolean | ProductPurchase$updatedByUserArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
    purchase?: boolean | PurchaseDefaultArgs<ExtArgs>
  }
  export type ProductPurchaseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdByUser?: boolean | ProductPurchase$createdByUserArgs<ExtArgs>
    deletedByUser?: boolean | ProductPurchase$deletedByUserArgs<ExtArgs>
    updatedByUser?: boolean | ProductPurchase$updatedByUserArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
    purchase?: boolean | PurchaseDefaultArgs<ExtArgs>
  }
  export type ProductPurchaseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdByUser?: boolean | ProductPurchase$createdByUserArgs<ExtArgs>
    deletedByUser?: boolean | ProductPurchase$deletedByUserArgs<ExtArgs>
    updatedByUser?: boolean | ProductPurchase$updatedByUserArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
    purchase?: boolean | PurchaseDefaultArgs<ExtArgs>
  }

  export type $ProductPurchasePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProductPurchase"
    objects: {
      createdByUser: Prisma.$UserPayload<ExtArgs> | null
      deletedByUser: Prisma.$UserPayload<ExtArgs> | null
      updatedByUser: Prisma.$UserPayload<ExtArgs> | null
      product: Prisma.$ProductPayload<ExtArgs>
      purchase: Prisma.$PurchasePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      productPurchaseId: number
      purchasePrice: number
      purchaseQuantity: number
      createdAt: Date
      deletedAt: Date | null
      createdBy: number | null
      deletedBy: number | null
      updatedBy: number | null
      updatedAt: Date | null
      isDeleted: boolean
      productId: number
      purchaseId: number
    }, ExtArgs["result"]["productPurchase"]>
    composites: {}
  }

  type ProductPurchaseGetPayload<S extends boolean | null | undefined | ProductPurchaseDefaultArgs> = $Result.GetResult<Prisma.$ProductPurchasePayload, S>

  type ProductPurchaseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductPurchaseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductPurchaseCountAggregateInputType | true
    }

  export interface ProductPurchaseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProductPurchase'], meta: { name: 'ProductPurchase' } }
    /**
     * Find zero or one ProductPurchase that matches the filter.
     * @param {ProductPurchaseFindUniqueArgs} args - Arguments to find a ProductPurchase
     * @example
     * // Get one ProductPurchase
     * const productPurchase = await prisma.productPurchase.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductPurchaseFindUniqueArgs>(args: SelectSubset<T, ProductPurchaseFindUniqueArgs<ExtArgs>>): Prisma__ProductPurchaseClient<$Result.GetResult<Prisma.$ProductPurchasePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProductPurchase that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductPurchaseFindUniqueOrThrowArgs} args - Arguments to find a ProductPurchase
     * @example
     * // Get one ProductPurchase
     * const productPurchase = await prisma.productPurchase.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductPurchaseFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductPurchaseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductPurchaseClient<$Result.GetResult<Prisma.$ProductPurchasePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductPurchase that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductPurchaseFindFirstArgs} args - Arguments to find a ProductPurchase
     * @example
     * // Get one ProductPurchase
     * const productPurchase = await prisma.productPurchase.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductPurchaseFindFirstArgs>(args?: SelectSubset<T, ProductPurchaseFindFirstArgs<ExtArgs>>): Prisma__ProductPurchaseClient<$Result.GetResult<Prisma.$ProductPurchasePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductPurchase that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductPurchaseFindFirstOrThrowArgs} args - Arguments to find a ProductPurchase
     * @example
     * // Get one ProductPurchase
     * const productPurchase = await prisma.productPurchase.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductPurchaseFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductPurchaseFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductPurchaseClient<$Result.GetResult<Prisma.$ProductPurchasePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProductPurchases that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductPurchaseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProductPurchases
     * const productPurchases = await prisma.productPurchase.findMany()
     * 
     * // Get first 10 ProductPurchases
     * const productPurchases = await prisma.productPurchase.findMany({ take: 10 })
     * 
     * // Only select the `productPurchaseId`
     * const productPurchaseWithProductPurchaseIdOnly = await prisma.productPurchase.findMany({ select: { productPurchaseId: true } })
     * 
     */
    findMany<T extends ProductPurchaseFindManyArgs>(args?: SelectSubset<T, ProductPurchaseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPurchasePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProductPurchase.
     * @param {ProductPurchaseCreateArgs} args - Arguments to create a ProductPurchase.
     * @example
     * // Create one ProductPurchase
     * const ProductPurchase = await prisma.productPurchase.create({
     *   data: {
     *     // ... data to create a ProductPurchase
     *   }
     * })
     * 
     */
    create<T extends ProductPurchaseCreateArgs>(args: SelectSubset<T, ProductPurchaseCreateArgs<ExtArgs>>): Prisma__ProductPurchaseClient<$Result.GetResult<Prisma.$ProductPurchasePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProductPurchases.
     * @param {ProductPurchaseCreateManyArgs} args - Arguments to create many ProductPurchases.
     * @example
     * // Create many ProductPurchases
     * const productPurchase = await prisma.productPurchase.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductPurchaseCreateManyArgs>(args?: SelectSubset<T, ProductPurchaseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProductPurchases and returns the data saved in the database.
     * @param {ProductPurchaseCreateManyAndReturnArgs} args - Arguments to create many ProductPurchases.
     * @example
     * // Create many ProductPurchases
     * const productPurchase = await prisma.productPurchase.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProductPurchases and only return the `productPurchaseId`
     * const productPurchaseWithProductPurchaseIdOnly = await prisma.productPurchase.createManyAndReturn({
     *   select: { productPurchaseId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductPurchaseCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductPurchaseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPurchasePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProductPurchase.
     * @param {ProductPurchaseDeleteArgs} args - Arguments to delete one ProductPurchase.
     * @example
     * // Delete one ProductPurchase
     * const ProductPurchase = await prisma.productPurchase.delete({
     *   where: {
     *     // ... filter to delete one ProductPurchase
     *   }
     * })
     * 
     */
    delete<T extends ProductPurchaseDeleteArgs>(args: SelectSubset<T, ProductPurchaseDeleteArgs<ExtArgs>>): Prisma__ProductPurchaseClient<$Result.GetResult<Prisma.$ProductPurchasePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProductPurchase.
     * @param {ProductPurchaseUpdateArgs} args - Arguments to update one ProductPurchase.
     * @example
     * // Update one ProductPurchase
     * const productPurchase = await prisma.productPurchase.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductPurchaseUpdateArgs>(args: SelectSubset<T, ProductPurchaseUpdateArgs<ExtArgs>>): Prisma__ProductPurchaseClient<$Result.GetResult<Prisma.$ProductPurchasePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProductPurchases.
     * @param {ProductPurchaseDeleteManyArgs} args - Arguments to filter ProductPurchases to delete.
     * @example
     * // Delete a few ProductPurchases
     * const { count } = await prisma.productPurchase.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductPurchaseDeleteManyArgs>(args?: SelectSubset<T, ProductPurchaseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductPurchases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductPurchaseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProductPurchases
     * const productPurchase = await prisma.productPurchase.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductPurchaseUpdateManyArgs>(args: SelectSubset<T, ProductPurchaseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductPurchases and returns the data updated in the database.
     * @param {ProductPurchaseUpdateManyAndReturnArgs} args - Arguments to update many ProductPurchases.
     * @example
     * // Update many ProductPurchases
     * const productPurchase = await prisma.productPurchase.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProductPurchases and only return the `productPurchaseId`
     * const productPurchaseWithProductPurchaseIdOnly = await prisma.productPurchase.updateManyAndReturn({
     *   select: { productPurchaseId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProductPurchaseUpdateManyAndReturnArgs>(args: SelectSubset<T, ProductPurchaseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPurchasePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProductPurchase.
     * @param {ProductPurchaseUpsertArgs} args - Arguments to update or create a ProductPurchase.
     * @example
     * // Update or create a ProductPurchase
     * const productPurchase = await prisma.productPurchase.upsert({
     *   create: {
     *     // ... data to create a ProductPurchase
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProductPurchase we want to update
     *   }
     * })
     */
    upsert<T extends ProductPurchaseUpsertArgs>(args: SelectSubset<T, ProductPurchaseUpsertArgs<ExtArgs>>): Prisma__ProductPurchaseClient<$Result.GetResult<Prisma.$ProductPurchasePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProductPurchases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductPurchaseCountArgs} args - Arguments to filter ProductPurchases to count.
     * @example
     * // Count the number of ProductPurchases
     * const count = await prisma.productPurchase.count({
     *   where: {
     *     // ... the filter for the ProductPurchases we want to count
     *   }
     * })
    **/
    count<T extends ProductPurchaseCountArgs>(
      args?: Subset<T, ProductPurchaseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductPurchaseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProductPurchase.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductPurchaseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductPurchaseAggregateArgs>(args: Subset<T, ProductPurchaseAggregateArgs>): Prisma.PrismaPromise<GetProductPurchaseAggregateType<T>>

    /**
     * Group by ProductPurchase.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductPurchaseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductPurchaseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductPurchaseGroupByArgs['orderBy'] }
        : { orderBy?: ProductPurchaseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductPurchaseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductPurchaseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProductPurchase model
   */
  readonly fields: ProductPurchaseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProductPurchase.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductPurchaseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    createdByUser<T extends ProductPurchase$createdByUserArgs<ExtArgs> = {}>(args?: Subset<T, ProductPurchase$createdByUserArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    deletedByUser<T extends ProductPurchase$deletedByUserArgs<ExtArgs> = {}>(args?: Subset<T, ProductPurchase$deletedByUserArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    updatedByUser<T extends ProductPurchase$updatedByUserArgs<ExtArgs> = {}>(args?: Subset<T, ProductPurchase$updatedByUserArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    purchase<T extends PurchaseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PurchaseDefaultArgs<ExtArgs>>): Prisma__PurchaseClient<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ProductPurchase model
   */
  interface ProductPurchaseFieldRefs {
    readonly productPurchaseId: FieldRef<"ProductPurchase", 'Int'>
    readonly purchasePrice: FieldRef<"ProductPurchase", 'Float'>
    readonly purchaseQuantity: FieldRef<"ProductPurchase", 'Int'>
    readonly createdAt: FieldRef<"ProductPurchase", 'DateTime'>
    readonly deletedAt: FieldRef<"ProductPurchase", 'DateTime'>
    readonly createdBy: FieldRef<"ProductPurchase", 'Int'>
    readonly deletedBy: FieldRef<"ProductPurchase", 'Int'>
    readonly updatedBy: FieldRef<"ProductPurchase", 'Int'>
    readonly updatedAt: FieldRef<"ProductPurchase", 'DateTime'>
    readonly isDeleted: FieldRef<"ProductPurchase", 'Boolean'>
    readonly productId: FieldRef<"ProductPurchase", 'Int'>
    readonly purchaseId: FieldRef<"ProductPurchase", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ProductPurchase findUnique
   */
  export type ProductPurchaseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductPurchase
     */
    select?: ProductPurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductPurchase
     */
    omit?: ProductPurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductPurchaseInclude<ExtArgs> | null
    /**
     * Filter, which ProductPurchase to fetch.
     */
    where: ProductPurchaseWhereUniqueInput
  }

  /**
   * ProductPurchase findUniqueOrThrow
   */
  export type ProductPurchaseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductPurchase
     */
    select?: ProductPurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductPurchase
     */
    omit?: ProductPurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductPurchaseInclude<ExtArgs> | null
    /**
     * Filter, which ProductPurchase to fetch.
     */
    where: ProductPurchaseWhereUniqueInput
  }

  /**
   * ProductPurchase findFirst
   */
  export type ProductPurchaseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductPurchase
     */
    select?: ProductPurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductPurchase
     */
    omit?: ProductPurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductPurchaseInclude<ExtArgs> | null
    /**
     * Filter, which ProductPurchase to fetch.
     */
    where?: ProductPurchaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductPurchases to fetch.
     */
    orderBy?: ProductPurchaseOrderByWithRelationInput | ProductPurchaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductPurchases.
     */
    cursor?: ProductPurchaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductPurchases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductPurchases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductPurchases.
     */
    distinct?: ProductPurchaseScalarFieldEnum | ProductPurchaseScalarFieldEnum[]
  }

  /**
   * ProductPurchase findFirstOrThrow
   */
  export type ProductPurchaseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductPurchase
     */
    select?: ProductPurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductPurchase
     */
    omit?: ProductPurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductPurchaseInclude<ExtArgs> | null
    /**
     * Filter, which ProductPurchase to fetch.
     */
    where?: ProductPurchaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductPurchases to fetch.
     */
    orderBy?: ProductPurchaseOrderByWithRelationInput | ProductPurchaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductPurchases.
     */
    cursor?: ProductPurchaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductPurchases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductPurchases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductPurchases.
     */
    distinct?: ProductPurchaseScalarFieldEnum | ProductPurchaseScalarFieldEnum[]
  }

  /**
   * ProductPurchase findMany
   */
  export type ProductPurchaseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductPurchase
     */
    select?: ProductPurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductPurchase
     */
    omit?: ProductPurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductPurchaseInclude<ExtArgs> | null
    /**
     * Filter, which ProductPurchases to fetch.
     */
    where?: ProductPurchaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductPurchases to fetch.
     */
    orderBy?: ProductPurchaseOrderByWithRelationInput | ProductPurchaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProductPurchases.
     */
    cursor?: ProductPurchaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductPurchases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductPurchases.
     */
    skip?: number
    distinct?: ProductPurchaseScalarFieldEnum | ProductPurchaseScalarFieldEnum[]
  }

  /**
   * ProductPurchase create
   */
  export type ProductPurchaseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductPurchase
     */
    select?: ProductPurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductPurchase
     */
    omit?: ProductPurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductPurchaseInclude<ExtArgs> | null
    /**
     * The data needed to create a ProductPurchase.
     */
    data: XOR<ProductPurchaseCreateInput, ProductPurchaseUncheckedCreateInput>
  }

  /**
   * ProductPurchase createMany
   */
  export type ProductPurchaseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProductPurchases.
     */
    data: ProductPurchaseCreateManyInput | ProductPurchaseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProductPurchase createManyAndReturn
   */
  export type ProductPurchaseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductPurchase
     */
    select?: ProductPurchaseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProductPurchase
     */
    omit?: ProductPurchaseOmit<ExtArgs> | null
    /**
     * The data used to create many ProductPurchases.
     */
    data: ProductPurchaseCreateManyInput | ProductPurchaseCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductPurchaseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProductPurchase update
   */
  export type ProductPurchaseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductPurchase
     */
    select?: ProductPurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductPurchase
     */
    omit?: ProductPurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductPurchaseInclude<ExtArgs> | null
    /**
     * The data needed to update a ProductPurchase.
     */
    data: XOR<ProductPurchaseUpdateInput, ProductPurchaseUncheckedUpdateInput>
    /**
     * Choose, which ProductPurchase to update.
     */
    where: ProductPurchaseWhereUniqueInput
  }

  /**
   * ProductPurchase updateMany
   */
  export type ProductPurchaseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProductPurchases.
     */
    data: XOR<ProductPurchaseUpdateManyMutationInput, ProductPurchaseUncheckedUpdateManyInput>
    /**
     * Filter which ProductPurchases to update
     */
    where?: ProductPurchaseWhereInput
    /**
     * Limit how many ProductPurchases to update.
     */
    limit?: number
  }

  /**
   * ProductPurchase updateManyAndReturn
   */
  export type ProductPurchaseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductPurchase
     */
    select?: ProductPurchaseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProductPurchase
     */
    omit?: ProductPurchaseOmit<ExtArgs> | null
    /**
     * The data used to update ProductPurchases.
     */
    data: XOR<ProductPurchaseUpdateManyMutationInput, ProductPurchaseUncheckedUpdateManyInput>
    /**
     * Filter which ProductPurchases to update
     */
    where?: ProductPurchaseWhereInput
    /**
     * Limit how many ProductPurchases to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductPurchaseIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProductPurchase upsert
   */
  export type ProductPurchaseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductPurchase
     */
    select?: ProductPurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductPurchase
     */
    omit?: ProductPurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductPurchaseInclude<ExtArgs> | null
    /**
     * The filter to search for the ProductPurchase to update in case it exists.
     */
    where: ProductPurchaseWhereUniqueInput
    /**
     * In case the ProductPurchase found by the `where` argument doesn't exist, create a new ProductPurchase with this data.
     */
    create: XOR<ProductPurchaseCreateInput, ProductPurchaseUncheckedCreateInput>
    /**
     * In case the ProductPurchase was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductPurchaseUpdateInput, ProductPurchaseUncheckedUpdateInput>
  }

  /**
   * ProductPurchase delete
   */
  export type ProductPurchaseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductPurchase
     */
    select?: ProductPurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductPurchase
     */
    omit?: ProductPurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductPurchaseInclude<ExtArgs> | null
    /**
     * Filter which ProductPurchase to delete.
     */
    where: ProductPurchaseWhereUniqueInput
  }

  /**
   * ProductPurchase deleteMany
   */
  export type ProductPurchaseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductPurchases to delete
     */
    where?: ProductPurchaseWhereInput
    /**
     * Limit how many ProductPurchases to delete.
     */
    limit?: number
  }

  /**
   * ProductPurchase.createdByUser
   */
  export type ProductPurchase$createdByUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * ProductPurchase.deletedByUser
   */
  export type ProductPurchase$deletedByUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * ProductPurchase.updatedByUser
   */
  export type ProductPurchase$updatedByUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * ProductPurchase without action
   */
  export type ProductPurchaseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductPurchase
     */
    select?: ProductPurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductPurchase
     */
    omit?: ProductPurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductPurchaseInclude<ExtArgs> | null
  }


  /**
   * Model ProductSale
   */

  export type AggregateProductSale = {
    _count: ProductSaleCountAggregateOutputType | null
    _avg: ProductSaleAvgAggregateOutputType | null
    _sum: ProductSaleSumAggregateOutputType | null
    _min: ProductSaleMinAggregateOutputType | null
    _max: ProductSaleMaxAggregateOutputType | null
  }

  export type ProductSaleAvgAggregateOutputType = {
    productSaleId: number | null
    salePrice: number | null
    saleQuantity: number | null
    createdBy: number | null
    deletedBy: number | null
    updatedBy: number | null
    productId: number | null
    saleId: number | null
  }

  export type ProductSaleSumAggregateOutputType = {
    productSaleId: number | null
    salePrice: number | null
    saleQuantity: number | null
    createdBy: number | null
    deletedBy: number | null
    updatedBy: number | null
    productId: number | null
    saleId: number | null
  }

  export type ProductSaleMinAggregateOutputType = {
    productSaleId: number | null
    salePrice: number | null
    saleQuantity: number | null
    createdAt: Date | null
    deletedAt: Date | null
    createdBy: number | null
    deletedBy: number | null
    updatedBy: number | null
    updatedAt: Date | null
    isDeleted: boolean | null
    productId: number | null
    saleId: number | null
  }

  export type ProductSaleMaxAggregateOutputType = {
    productSaleId: number | null
    salePrice: number | null
    saleQuantity: number | null
    createdAt: Date | null
    deletedAt: Date | null
    createdBy: number | null
    deletedBy: number | null
    updatedBy: number | null
    updatedAt: Date | null
    isDeleted: boolean | null
    productId: number | null
    saleId: number | null
  }

  export type ProductSaleCountAggregateOutputType = {
    productSaleId: number
    salePrice: number
    saleQuantity: number
    createdAt: number
    deletedAt: number
    createdBy: number
    deletedBy: number
    updatedBy: number
    updatedAt: number
    isDeleted: number
    productId: number
    saleId: number
    _all: number
  }


  export type ProductSaleAvgAggregateInputType = {
    productSaleId?: true
    salePrice?: true
    saleQuantity?: true
    createdBy?: true
    deletedBy?: true
    updatedBy?: true
    productId?: true
    saleId?: true
  }

  export type ProductSaleSumAggregateInputType = {
    productSaleId?: true
    salePrice?: true
    saleQuantity?: true
    createdBy?: true
    deletedBy?: true
    updatedBy?: true
    productId?: true
    saleId?: true
  }

  export type ProductSaleMinAggregateInputType = {
    productSaleId?: true
    salePrice?: true
    saleQuantity?: true
    createdAt?: true
    deletedAt?: true
    createdBy?: true
    deletedBy?: true
    updatedBy?: true
    updatedAt?: true
    isDeleted?: true
    productId?: true
    saleId?: true
  }

  export type ProductSaleMaxAggregateInputType = {
    productSaleId?: true
    salePrice?: true
    saleQuantity?: true
    createdAt?: true
    deletedAt?: true
    createdBy?: true
    deletedBy?: true
    updatedBy?: true
    updatedAt?: true
    isDeleted?: true
    productId?: true
    saleId?: true
  }

  export type ProductSaleCountAggregateInputType = {
    productSaleId?: true
    salePrice?: true
    saleQuantity?: true
    createdAt?: true
    deletedAt?: true
    createdBy?: true
    deletedBy?: true
    updatedBy?: true
    updatedAt?: true
    isDeleted?: true
    productId?: true
    saleId?: true
    _all?: true
  }

  export type ProductSaleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductSale to aggregate.
     */
    where?: ProductSaleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductSales to fetch.
     */
    orderBy?: ProductSaleOrderByWithRelationInput | ProductSaleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductSaleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductSales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductSales.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProductSales
    **/
    _count?: true | ProductSaleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductSaleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductSaleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductSaleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductSaleMaxAggregateInputType
  }

  export type GetProductSaleAggregateType<T extends ProductSaleAggregateArgs> = {
        [P in keyof T & keyof AggregateProductSale]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductSale[P]>
      : GetScalarType<T[P], AggregateProductSale[P]>
  }




  export type ProductSaleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductSaleWhereInput
    orderBy?: ProductSaleOrderByWithAggregationInput | ProductSaleOrderByWithAggregationInput[]
    by: ProductSaleScalarFieldEnum[] | ProductSaleScalarFieldEnum
    having?: ProductSaleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductSaleCountAggregateInputType | true
    _avg?: ProductSaleAvgAggregateInputType
    _sum?: ProductSaleSumAggregateInputType
    _min?: ProductSaleMinAggregateInputType
    _max?: ProductSaleMaxAggregateInputType
  }

  export type ProductSaleGroupByOutputType = {
    productSaleId: number
    salePrice: number
    saleQuantity: number
    createdAt: Date
    deletedAt: Date | null
    createdBy: number | null
    deletedBy: number | null
    updatedBy: number | null
    updatedAt: Date | null
    isDeleted: boolean
    productId: number
    saleId: number
    _count: ProductSaleCountAggregateOutputType | null
    _avg: ProductSaleAvgAggregateOutputType | null
    _sum: ProductSaleSumAggregateOutputType | null
    _min: ProductSaleMinAggregateOutputType | null
    _max: ProductSaleMaxAggregateOutputType | null
  }

  type GetProductSaleGroupByPayload<T extends ProductSaleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductSaleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductSaleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductSaleGroupByOutputType[P]>
            : GetScalarType<T[P], ProductSaleGroupByOutputType[P]>
        }
      >
    >


  export type ProductSaleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    productSaleId?: boolean
    salePrice?: boolean
    saleQuantity?: boolean
    createdAt?: boolean
    deletedAt?: boolean
    createdBy?: boolean
    deletedBy?: boolean
    updatedBy?: boolean
    updatedAt?: boolean
    isDeleted?: boolean
    productId?: boolean
    saleId?: boolean
    createdByUser?: boolean | ProductSale$createdByUserArgs<ExtArgs>
    deletedByUser?: boolean | ProductSale$deletedByUserArgs<ExtArgs>
    updatedByUser?: boolean | ProductSale$updatedByUserArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
    sale?: boolean | SaleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productSale"]>

  export type ProductSaleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    productSaleId?: boolean
    salePrice?: boolean
    saleQuantity?: boolean
    createdAt?: boolean
    deletedAt?: boolean
    createdBy?: boolean
    deletedBy?: boolean
    updatedBy?: boolean
    updatedAt?: boolean
    isDeleted?: boolean
    productId?: boolean
    saleId?: boolean
    createdByUser?: boolean | ProductSale$createdByUserArgs<ExtArgs>
    deletedByUser?: boolean | ProductSale$deletedByUserArgs<ExtArgs>
    updatedByUser?: boolean | ProductSale$updatedByUserArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
    sale?: boolean | SaleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productSale"]>

  export type ProductSaleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    productSaleId?: boolean
    salePrice?: boolean
    saleQuantity?: boolean
    createdAt?: boolean
    deletedAt?: boolean
    createdBy?: boolean
    deletedBy?: boolean
    updatedBy?: boolean
    updatedAt?: boolean
    isDeleted?: boolean
    productId?: boolean
    saleId?: boolean
    createdByUser?: boolean | ProductSale$createdByUserArgs<ExtArgs>
    deletedByUser?: boolean | ProductSale$deletedByUserArgs<ExtArgs>
    updatedByUser?: boolean | ProductSale$updatedByUserArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
    sale?: boolean | SaleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productSale"]>

  export type ProductSaleSelectScalar = {
    productSaleId?: boolean
    salePrice?: boolean
    saleQuantity?: boolean
    createdAt?: boolean
    deletedAt?: boolean
    createdBy?: boolean
    deletedBy?: boolean
    updatedBy?: boolean
    updatedAt?: boolean
    isDeleted?: boolean
    productId?: boolean
    saleId?: boolean
  }

  export type ProductSaleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"productSaleId" | "salePrice" | "saleQuantity" | "createdAt" | "deletedAt" | "createdBy" | "deletedBy" | "updatedBy" | "updatedAt" | "isDeleted" | "productId" | "saleId", ExtArgs["result"]["productSale"]>
  export type ProductSaleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdByUser?: boolean | ProductSale$createdByUserArgs<ExtArgs>
    deletedByUser?: boolean | ProductSale$deletedByUserArgs<ExtArgs>
    updatedByUser?: boolean | ProductSale$updatedByUserArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
    sale?: boolean | SaleDefaultArgs<ExtArgs>
  }
  export type ProductSaleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdByUser?: boolean | ProductSale$createdByUserArgs<ExtArgs>
    deletedByUser?: boolean | ProductSale$deletedByUserArgs<ExtArgs>
    updatedByUser?: boolean | ProductSale$updatedByUserArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
    sale?: boolean | SaleDefaultArgs<ExtArgs>
  }
  export type ProductSaleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdByUser?: boolean | ProductSale$createdByUserArgs<ExtArgs>
    deletedByUser?: boolean | ProductSale$deletedByUserArgs<ExtArgs>
    updatedByUser?: boolean | ProductSale$updatedByUserArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
    sale?: boolean | SaleDefaultArgs<ExtArgs>
  }

  export type $ProductSalePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProductSale"
    objects: {
      createdByUser: Prisma.$UserPayload<ExtArgs> | null
      deletedByUser: Prisma.$UserPayload<ExtArgs> | null
      updatedByUser: Prisma.$UserPayload<ExtArgs> | null
      product: Prisma.$ProductPayload<ExtArgs>
      sale: Prisma.$SalePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      productSaleId: number
      salePrice: number
      saleQuantity: number
      createdAt: Date
      deletedAt: Date | null
      createdBy: number | null
      deletedBy: number | null
      updatedBy: number | null
      updatedAt: Date | null
      isDeleted: boolean
      productId: number
      saleId: number
    }, ExtArgs["result"]["productSale"]>
    composites: {}
  }

  type ProductSaleGetPayload<S extends boolean | null | undefined | ProductSaleDefaultArgs> = $Result.GetResult<Prisma.$ProductSalePayload, S>

  type ProductSaleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductSaleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductSaleCountAggregateInputType | true
    }

  export interface ProductSaleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProductSale'], meta: { name: 'ProductSale' } }
    /**
     * Find zero or one ProductSale that matches the filter.
     * @param {ProductSaleFindUniqueArgs} args - Arguments to find a ProductSale
     * @example
     * // Get one ProductSale
     * const productSale = await prisma.productSale.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductSaleFindUniqueArgs>(args: SelectSubset<T, ProductSaleFindUniqueArgs<ExtArgs>>): Prisma__ProductSaleClient<$Result.GetResult<Prisma.$ProductSalePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProductSale that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductSaleFindUniqueOrThrowArgs} args - Arguments to find a ProductSale
     * @example
     * // Get one ProductSale
     * const productSale = await prisma.productSale.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductSaleFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductSaleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductSaleClient<$Result.GetResult<Prisma.$ProductSalePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductSale that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductSaleFindFirstArgs} args - Arguments to find a ProductSale
     * @example
     * // Get one ProductSale
     * const productSale = await prisma.productSale.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductSaleFindFirstArgs>(args?: SelectSubset<T, ProductSaleFindFirstArgs<ExtArgs>>): Prisma__ProductSaleClient<$Result.GetResult<Prisma.$ProductSalePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductSale that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductSaleFindFirstOrThrowArgs} args - Arguments to find a ProductSale
     * @example
     * // Get one ProductSale
     * const productSale = await prisma.productSale.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductSaleFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductSaleFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductSaleClient<$Result.GetResult<Prisma.$ProductSalePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProductSales that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductSaleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProductSales
     * const productSales = await prisma.productSale.findMany()
     * 
     * // Get first 10 ProductSales
     * const productSales = await prisma.productSale.findMany({ take: 10 })
     * 
     * // Only select the `productSaleId`
     * const productSaleWithProductSaleIdOnly = await prisma.productSale.findMany({ select: { productSaleId: true } })
     * 
     */
    findMany<T extends ProductSaleFindManyArgs>(args?: SelectSubset<T, ProductSaleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductSalePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProductSale.
     * @param {ProductSaleCreateArgs} args - Arguments to create a ProductSale.
     * @example
     * // Create one ProductSale
     * const ProductSale = await prisma.productSale.create({
     *   data: {
     *     // ... data to create a ProductSale
     *   }
     * })
     * 
     */
    create<T extends ProductSaleCreateArgs>(args: SelectSubset<T, ProductSaleCreateArgs<ExtArgs>>): Prisma__ProductSaleClient<$Result.GetResult<Prisma.$ProductSalePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProductSales.
     * @param {ProductSaleCreateManyArgs} args - Arguments to create many ProductSales.
     * @example
     * // Create many ProductSales
     * const productSale = await prisma.productSale.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductSaleCreateManyArgs>(args?: SelectSubset<T, ProductSaleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProductSales and returns the data saved in the database.
     * @param {ProductSaleCreateManyAndReturnArgs} args - Arguments to create many ProductSales.
     * @example
     * // Create many ProductSales
     * const productSale = await prisma.productSale.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProductSales and only return the `productSaleId`
     * const productSaleWithProductSaleIdOnly = await prisma.productSale.createManyAndReturn({
     *   select: { productSaleId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductSaleCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductSaleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductSalePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProductSale.
     * @param {ProductSaleDeleteArgs} args - Arguments to delete one ProductSale.
     * @example
     * // Delete one ProductSale
     * const ProductSale = await prisma.productSale.delete({
     *   where: {
     *     // ... filter to delete one ProductSale
     *   }
     * })
     * 
     */
    delete<T extends ProductSaleDeleteArgs>(args: SelectSubset<T, ProductSaleDeleteArgs<ExtArgs>>): Prisma__ProductSaleClient<$Result.GetResult<Prisma.$ProductSalePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProductSale.
     * @param {ProductSaleUpdateArgs} args - Arguments to update one ProductSale.
     * @example
     * // Update one ProductSale
     * const productSale = await prisma.productSale.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductSaleUpdateArgs>(args: SelectSubset<T, ProductSaleUpdateArgs<ExtArgs>>): Prisma__ProductSaleClient<$Result.GetResult<Prisma.$ProductSalePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProductSales.
     * @param {ProductSaleDeleteManyArgs} args - Arguments to filter ProductSales to delete.
     * @example
     * // Delete a few ProductSales
     * const { count } = await prisma.productSale.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductSaleDeleteManyArgs>(args?: SelectSubset<T, ProductSaleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductSales.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductSaleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProductSales
     * const productSale = await prisma.productSale.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductSaleUpdateManyArgs>(args: SelectSubset<T, ProductSaleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductSales and returns the data updated in the database.
     * @param {ProductSaleUpdateManyAndReturnArgs} args - Arguments to update many ProductSales.
     * @example
     * // Update many ProductSales
     * const productSale = await prisma.productSale.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProductSales and only return the `productSaleId`
     * const productSaleWithProductSaleIdOnly = await prisma.productSale.updateManyAndReturn({
     *   select: { productSaleId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProductSaleUpdateManyAndReturnArgs>(args: SelectSubset<T, ProductSaleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductSalePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProductSale.
     * @param {ProductSaleUpsertArgs} args - Arguments to update or create a ProductSale.
     * @example
     * // Update or create a ProductSale
     * const productSale = await prisma.productSale.upsert({
     *   create: {
     *     // ... data to create a ProductSale
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProductSale we want to update
     *   }
     * })
     */
    upsert<T extends ProductSaleUpsertArgs>(args: SelectSubset<T, ProductSaleUpsertArgs<ExtArgs>>): Prisma__ProductSaleClient<$Result.GetResult<Prisma.$ProductSalePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProductSales.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductSaleCountArgs} args - Arguments to filter ProductSales to count.
     * @example
     * // Count the number of ProductSales
     * const count = await prisma.productSale.count({
     *   where: {
     *     // ... the filter for the ProductSales we want to count
     *   }
     * })
    **/
    count<T extends ProductSaleCountArgs>(
      args?: Subset<T, ProductSaleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductSaleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProductSale.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductSaleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductSaleAggregateArgs>(args: Subset<T, ProductSaleAggregateArgs>): Prisma.PrismaPromise<GetProductSaleAggregateType<T>>

    /**
     * Group by ProductSale.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductSaleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductSaleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductSaleGroupByArgs['orderBy'] }
        : { orderBy?: ProductSaleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductSaleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductSaleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProductSale model
   */
  readonly fields: ProductSaleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProductSale.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductSaleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    createdByUser<T extends ProductSale$createdByUserArgs<ExtArgs> = {}>(args?: Subset<T, ProductSale$createdByUserArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    deletedByUser<T extends ProductSale$deletedByUserArgs<ExtArgs> = {}>(args?: Subset<T, ProductSale$deletedByUserArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    updatedByUser<T extends ProductSale$updatedByUserArgs<ExtArgs> = {}>(args?: Subset<T, ProductSale$updatedByUserArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    sale<T extends SaleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SaleDefaultArgs<ExtArgs>>): Prisma__SaleClient<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ProductSale model
   */
  interface ProductSaleFieldRefs {
    readonly productSaleId: FieldRef<"ProductSale", 'Int'>
    readonly salePrice: FieldRef<"ProductSale", 'Float'>
    readonly saleQuantity: FieldRef<"ProductSale", 'Int'>
    readonly createdAt: FieldRef<"ProductSale", 'DateTime'>
    readonly deletedAt: FieldRef<"ProductSale", 'DateTime'>
    readonly createdBy: FieldRef<"ProductSale", 'Int'>
    readonly deletedBy: FieldRef<"ProductSale", 'Int'>
    readonly updatedBy: FieldRef<"ProductSale", 'Int'>
    readonly updatedAt: FieldRef<"ProductSale", 'DateTime'>
    readonly isDeleted: FieldRef<"ProductSale", 'Boolean'>
    readonly productId: FieldRef<"ProductSale", 'Int'>
    readonly saleId: FieldRef<"ProductSale", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ProductSale findUnique
   */
  export type ProductSaleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductSale
     */
    select?: ProductSaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductSale
     */
    omit?: ProductSaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductSaleInclude<ExtArgs> | null
    /**
     * Filter, which ProductSale to fetch.
     */
    where: ProductSaleWhereUniqueInput
  }

  /**
   * ProductSale findUniqueOrThrow
   */
  export type ProductSaleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductSale
     */
    select?: ProductSaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductSale
     */
    omit?: ProductSaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductSaleInclude<ExtArgs> | null
    /**
     * Filter, which ProductSale to fetch.
     */
    where: ProductSaleWhereUniqueInput
  }

  /**
   * ProductSale findFirst
   */
  export type ProductSaleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductSale
     */
    select?: ProductSaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductSale
     */
    omit?: ProductSaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductSaleInclude<ExtArgs> | null
    /**
     * Filter, which ProductSale to fetch.
     */
    where?: ProductSaleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductSales to fetch.
     */
    orderBy?: ProductSaleOrderByWithRelationInput | ProductSaleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductSales.
     */
    cursor?: ProductSaleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductSales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductSales.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductSales.
     */
    distinct?: ProductSaleScalarFieldEnum | ProductSaleScalarFieldEnum[]
  }

  /**
   * ProductSale findFirstOrThrow
   */
  export type ProductSaleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductSale
     */
    select?: ProductSaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductSale
     */
    omit?: ProductSaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductSaleInclude<ExtArgs> | null
    /**
     * Filter, which ProductSale to fetch.
     */
    where?: ProductSaleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductSales to fetch.
     */
    orderBy?: ProductSaleOrderByWithRelationInput | ProductSaleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductSales.
     */
    cursor?: ProductSaleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductSales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductSales.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductSales.
     */
    distinct?: ProductSaleScalarFieldEnum | ProductSaleScalarFieldEnum[]
  }

  /**
   * ProductSale findMany
   */
  export type ProductSaleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductSale
     */
    select?: ProductSaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductSale
     */
    omit?: ProductSaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductSaleInclude<ExtArgs> | null
    /**
     * Filter, which ProductSales to fetch.
     */
    where?: ProductSaleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductSales to fetch.
     */
    orderBy?: ProductSaleOrderByWithRelationInput | ProductSaleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProductSales.
     */
    cursor?: ProductSaleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductSales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductSales.
     */
    skip?: number
    distinct?: ProductSaleScalarFieldEnum | ProductSaleScalarFieldEnum[]
  }

  /**
   * ProductSale create
   */
  export type ProductSaleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductSale
     */
    select?: ProductSaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductSale
     */
    omit?: ProductSaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductSaleInclude<ExtArgs> | null
    /**
     * The data needed to create a ProductSale.
     */
    data: XOR<ProductSaleCreateInput, ProductSaleUncheckedCreateInput>
  }

  /**
   * ProductSale createMany
   */
  export type ProductSaleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProductSales.
     */
    data: ProductSaleCreateManyInput | ProductSaleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProductSale createManyAndReturn
   */
  export type ProductSaleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductSale
     */
    select?: ProductSaleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProductSale
     */
    omit?: ProductSaleOmit<ExtArgs> | null
    /**
     * The data used to create many ProductSales.
     */
    data: ProductSaleCreateManyInput | ProductSaleCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductSaleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProductSale update
   */
  export type ProductSaleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductSale
     */
    select?: ProductSaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductSale
     */
    omit?: ProductSaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductSaleInclude<ExtArgs> | null
    /**
     * The data needed to update a ProductSale.
     */
    data: XOR<ProductSaleUpdateInput, ProductSaleUncheckedUpdateInput>
    /**
     * Choose, which ProductSale to update.
     */
    where: ProductSaleWhereUniqueInput
  }

  /**
   * ProductSale updateMany
   */
  export type ProductSaleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProductSales.
     */
    data: XOR<ProductSaleUpdateManyMutationInput, ProductSaleUncheckedUpdateManyInput>
    /**
     * Filter which ProductSales to update
     */
    where?: ProductSaleWhereInput
    /**
     * Limit how many ProductSales to update.
     */
    limit?: number
  }

  /**
   * ProductSale updateManyAndReturn
   */
  export type ProductSaleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductSale
     */
    select?: ProductSaleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProductSale
     */
    omit?: ProductSaleOmit<ExtArgs> | null
    /**
     * The data used to update ProductSales.
     */
    data: XOR<ProductSaleUpdateManyMutationInput, ProductSaleUncheckedUpdateManyInput>
    /**
     * Filter which ProductSales to update
     */
    where?: ProductSaleWhereInput
    /**
     * Limit how many ProductSales to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductSaleIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProductSale upsert
   */
  export type ProductSaleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductSale
     */
    select?: ProductSaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductSale
     */
    omit?: ProductSaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductSaleInclude<ExtArgs> | null
    /**
     * The filter to search for the ProductSale to update in case it exists.
     */
    where: ProductSaleWhereUniqueInput
    /**
     * In case the ProductSale found by the `where` argument doesn't exist, create a new ProductSale with this data.
     */
    create: XOR<ProductSaleCreateInput, ProductSaleUncheckedCreateInput>
    /**
     * In case the ProductSale was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductSaleUpdateInput, ProductSaleUncheckedUpdateInput>
  }

  /**
   * ProductSale delete
   */
  export type ProductSaleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductSale
     */
    select?: ProductSaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductSale
     */
    omit?: ProductSaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductSaleInclude<ExtArgs> | null
    /**
     * Filter which ProductSale to delete.
     */
    where: ProductSaleWhereUniqueInput
  }

  /**
   * ProductSale deleteMany
   */
  export type ProductSaleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductSales to delete
     */
    where?: ProductSaleWhereInput
    /**
     * Limit how many ProductSales to delete.
     */
    limit?: number
  }

  /**
   * ProductSale.createdByUser
   */
  export type ProductSale$createdByUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * ProductSale.deletedByUser
   */
  export type ProductSale$deletedByUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * ProductSale.updatedByUser
   */
  export type ProductSale$updatedByUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * ProductSale without action
   */
  export type ProductSaleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductSale
     */
    select?: ProductSaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductSale
     */
    omit?: ProductSaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductSaleInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    userId: 'userId',
    name: 'name',
    email: 'email',
    password: 'password',
    createdAt: 'createdAt',
    deletedAt: 'deletedAt',
    createdBy: 'createdBy',
    deletedBy: 'deletedBy',
    isDeleted: 'isDeleted',
    roleId: 'roleId'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const RoleScalarFieldEnum: {
    roleId: 'roleId',
    roleType: 'roleType',
    createdAt: 'createdAt',
    deletedAt: 'deletedAt',
    createdBy: 'createdBy',
    deletedBy: 'deletedBy',
    updatedBy: 'updatedBy',
    updatedAt: 'updatedAt',
    isDeleted: 'isDeleted'
  };

  export type RoleScalarFieldEnum = (typeof RoleScalarFieldEnum)[keyof typeof RoleScalarFieldEnum]


  export const ProductScalarFieldEnum: {
    productId: 'productId',
    imageUrl: 'imageUrl',
    description: 'description',
    category: 'category',
    expiryDate: 'expiryDate',
    productionDate: 'productionDate',
    quantity: 'quantity',
    price: 'price',
    costPrice: 'costPrice',
    createdAt: 'createdAt',
    deletedAt: 'deletedAt',
    createdBy: 'createdBy',
    deletedBy: 'deletedBy',
    updatedBy: 'updatedBy',
    updatedAt: 'updatedAt',
    isDeleted: 'isDeleted',
    userId: 'userId'
  };

  export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum]


  export const SaleScalarFieldEnum: {
    saleId: 'saleId',
    createdAt: 'createdAt',
    deletedAt: 'deletedAt',
    createdBy: 'createdBy',
    deletedBy: 'deletedBy',
    updatedBy: 'updatedBy',
    updatedAt: 'updatedAt',
    isDeleted: 'isDeleted'
  };

  export type SaleScalarFieldEnum = (typeof SaleScalarFieldEnum)[keyof typeof SaleScalarFieldEnum]


  export const PurchaseScalarFieldEnum: {
    purchaseId: 'purchaseId',
    createdAt: 'createdAt',
    deletedAt: 'deletedAt',
    createdBy: 'createdBy',
    deletedBy: 'deletedBy',
    updatedBy: 'updatedBy',
    updatedAt: 'updatedAt',
    isDeleted: 'isDeleted',
    productId: 'productId'
  };

  export type PurchaseScalarFieldEnum = (typeof PurchaseScalarFieldEnum)[keyof typeof PurchaseScalarFieldEnum]


  export const ProductPurchaseScalarFieldEnum: {
    productPurchaseId: 'productPurchaseId',
    purchasePrice: 'purchasePrice',
    purchaseQuantity: 'purchaseQuantity',
    createdAt: 'createdAt',
    deletedAt: 'deletedAt',
    createdBy: 'createdBy',
    deletedBy: 'deletedBy',
    updatedBy: 'updatedBy',
    updatedAt: 'updatedAt',
    isDeleted: 'isDeleted',
    productId: 'productId',
    purchaseId: 'purchaseId'
  };

  export type ProductPurchaseScalarFieldEnum = (typeof ProductPurchaseScalarFieldEnum)[keyof typeof ProductPurchaseScalarFieldEnum]


  export const ProductSaleScalarFieldEnum: {
    productSaleId: 'productSaleId',
    salePrice: 'salePrice',
    saleQuantity: 'saleQuantity',
    createdAt: 'createdAt',
    deletedAt: 'deletedAt',
    createdBy: 'createdBy',
    deletedBy: 'deletedBy',
    updatedBy: 'updatedBy',
    updatedAt: 'updatedAt',
    isDeleted: 'isDeleted',
    productId: 'productId',
    saleId: 'saleId'
  };

  export type ProductSaleScalarFieldEnum = (typeof ProductSaleScalarFieldEnum)[keyof typeof ProductSaleScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    userId?: IntFilter<"User"> | number
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    deletedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    createdBy?: IntNullableFilter<"User"> | number | null
    deletedBy?: IntNullableFilter<"User"> | number | null
    isDeleted?: BoolFilter<"User"> | boolean
    roleId?: IntFilter<"User"> | number
    createdRoles?: RoleListRelationFilter
    deletedRoles?: RoleListRelationFilter
    updatedRoles?: RoleListRelationFilter
    createdProducts?: ProductListRelationFilter
    deletedProducts?: ProductListRelationFilter
    updatedProducts?: ProductListRelationFilter
    createdSales?: SaleListRelationFilter
    deletedSales?: SaleListRelationFilter
    updatedSales?: SaleListRelationFilter
    createdPurchases?: PurchaseListRelationFilter
    deletedPurchases?: PurchaseListRelationFilter
    updatedPurchases?: PurchaseListRelationFilter
    createdProductPurchases?: ProductPurchaseListRelationFilter
    deletedProductPurchases?: ProductPurchaseListRelationFilter
    updatedProductPurchases?: ProductPurchaseListRelationFilter
    createdProductSales?: ProductSaleListRelationFilter
    deletedProductSales?: ProductSaleListRelationFilter
    updatedProductSales?: ProductSaleListRelationFilter
    role?: XOR<RoleScalarRelationFilter, RoleWhereInput>
    ownedProducts?: ProductListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    userId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    createdBy?: SortOrderInput | SortOrder
    deletedBy?: SortOrderInput | SortOrder
    isDeleted?: SortOrder
    roleId?: SortOrder
    createdRoles?: RoleOrderByRelationAggregateInput
    deletedRoles?: RoleOrderByRelationAggregateInput
    updatedRoles?: RoleOrderByRelationAggregateInput
    createdProducts?: ProductOrderByRelationAggregateInput
    deletedProducts?: ProductOrderByRelationAggregateInput
    updatedProducts?: ProductOrderByRelationAggregateInput
    createdSales?: SaleOrderByRelationAggregateInput
    deletedSales?: SaleOrderByRelationAggregateInput
    updatedSales?: SaleOrderByRelationAggregateInput
    createdPurchases?: PurchaseOrderByRelationAggregateInput
    deletedPurchases?: PurchaseOrderByRelationAggregateInput
    updatedPurchases?: PurchaseOrderByRelationAggregateInput
    createdProductPurchases?: ProductPurchaseOrderByRelationAggregateInput
    deletedProductPurchases?: ProductPurchaseOrderByRelationAggregateInput
    updatedProductPurchases?: ProductPurchaseOrderByRelationAggregateInput
    createdProductSales?: ProductSaleOrderByRelationAggregateInput
    deletedProductSales?: ProductSaleOrderByRelationAggregateInput
    updatedProductSales?: ProductSaleOrderByRelationAggregateInput
    role?: RoleOrderByWithRelationInput
    ownedProducts?: ProductOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    userId?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    deletedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    createdBy?: IntNullableFilter<"User"> | number | null
    deletedBy?: IntNullableFilter<"User"> | number | null
    isDeleted?: BoolFilter<"User"> | boolean
    roleId?: IntFilter<"User"> | number
    createdRoles?: RoleListRelationFilter
    deletedRoles?: RoleListRelationFilter
    updatedRoles?: RoleListRelationFilter
    createdProducts?: ProductListRelationFilter
    deletedProducts?: ProductListRelationFilter
    updatedProducts?: ProductListRelationFilter
    createdSales?: SaleListRelationFilter
    deletedSales?: SaleListRelationFilter
    updatedSales?: SaleListRelationFilter
    createdPurchases?: PurchaseListRelationFilter
    deletedPurchases?: PurchaseListRelationFilter
    updatedPurchases?: PurchaseListRelationFilter
    createdProductPurchases?: ProductPurchaseListRelationFilter
    deletedProductPurchases?: ProductPurchaseListRelationFilter
    updatedProductPurchases?: ProductPurchaseListRelationFilter
    createdProductSales?: ProductSaleListRelationFilter
    deletedProductSales?: ProductSaleListRelationFilter
    updatedProductSales?: ProductSaleListRelationFilter
    role?: XOR<RoleScalarRelationFilter, RoleWhereInput>
    ownedProducts?: ProductListRelationFilter
  }, "userId" | "email">

  export type UserOrderByWithAggregationInput = {
    userId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    createdBy?: SortOrderInput | SortOrder
    deletedBy?: SortOrderInput | SortOrder
    isDeleted?: SortOrder
    roleId?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    userId?: IntWithAggregatesFilter<"User"> | number
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    createdBy?: IntNullableWithAggregatesFilter<"User"> | number | null
    deletedBy?: IntNullableWithAggregatesFilter<"User"> | number | null
    isDeleted?: BoolWithAggregatesFilter<"User"> | boolean
    roleId?: IntWithAggregatesFilter<"User"> | number
  }

  export type RoleWhereInput = {
    AND?: RoleWhereInput | RoleWhereInput[]
    OR?: RoleWhereInput[]
    NOT?: RoleWhereInput | RoleWhereInput[]
    roleId?: IntFilter<"Role"> | number
    roleType?: StringFilter<"Role"> | string
    createdAt?: DateTimeFilter<"Role"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Role"> | Date | string | null
    createdBy?: IntNullableFilter<"Role"> | number | null
    deletedBy?: IntNullableFilter<"Role"> | number | null
    updatedBy?: IntNullableFilter<"Role"> | number | null
    updatedAt?: DateTimeNullableFilter<"Role"> | Date | string | null
    isDeleted?: BoolFilter<"Role"> | boolean
    createdByUser?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    deletedByUser?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    updatedByUser?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    users?: UserListRelationFilter
  }

  export type RoleOrderByWithRelationInput = {
    roleId?: SortOrder
    roleType?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    createdBy?: SortOrderInput | SortOrder
    deletedBy?: SortOrderInput | SortOrder
    updatedBy?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    isDeleted?: SortOrder
    createdByUser?: UserOrderByWithRelationInput
    deletedByUser?: UserOrderByWithRelationInput
    updatedByUser?: UserOrderByWithRelationInput
    users?: UserOrderByRelationAggregateInput
  }

  export type RoleWhereUniqueInput = Prisma.AtLeast<{
    roleId?: number
    roleType?: string
    AND?: RoleWhereInput | RoleWhereInput[]
    OR?: RoleWhereInput[]
    NOT?: RoleWhereInput | RoleWhereInput[]
    createdAt?: DateTimeFilter<"Role"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Role"> | Date | string | null
    createdBy?: IntNullableFilter<"Role"> | number | null
    deletedBy?: IntNullableFilter<"Role"> | number | null
    updatedBy?: IntNullableFilter<"Role"> | number | null
    updatedAt?: DateTimeNullableFilter<"Role"> | Date | string | null
    isDeleted?: BoolFilter<"Role"> | boolean
    createdByUser?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    deletedByUser?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    updatedByUser?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    users?: UserListRelationFilter
  }, "roleId" | "roleType">

  export type RoleOrderByWithAggregationInput = {
    roleId?: SortOrder
    roleType?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    createdBy?: SortOrderInput | SortOrder
    deletedBy?: SortOrderInput | SortOrder
    updatedBy?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    isDeleted?: SortOrder
    _count?: RoleCountOrderByAggregateInput
    _avg?: RoleAvgOrderByAggregateInput
    _max?: RoleMaxOrderByAggregateInput
    _min?: RoleMinOrderByAggregateInput
    _sum?: RoleSumOrderByAggregateInput
  }

  export type RoleScalarWhereWithAggregatesInput = {
    AND?: RoleScalarWhereWithAggregatesInput | RoleScalarWhereWithAggregatesInput[]
    OR?: RoleScalarWhereWithAggregatesInput[]
    NOT?: RoleScalarWhereWithAggregatesInput | RoleScalarWhereWithAggregatesInput[]
    roleId?: IntWithAggregatesFilter<"Role"> | number
    roleType?: StringWithAggregatesFilter<"Role"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Role"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Role"> | Date | string | null
    createdBy?: IntNullableWithAggregatesFilter<"Role"> | number | null
    deletedBy?: IntNullableWithAggregatesFilter<"Role"> | number | null
    updatedBy?: IntNullableWithAggregatesFilter<"Role"> | number | null
    updatedAt?: DateTimeNullableWithAggregatesFilter<"Role"> | Date | string | null
    isDeleted?: BoolWithAggregatesFilter<"Role"> | boolean
  }

  export type ProductWhereInput = {
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    productId?: IntFilter<"Product"> | number
    imageUrl?: StringFilter<"Product"> | string
    description?: StringFilter<"Product"> | string
    category?: StringFilter<"Product"> | string
    expiryDate?: DateTimeNullableFilter<"Product"> | Date | string | null
    productionDate?: DateTimeNullableFilter<"Product"> | Date | string | null
    quantity?: IntFilter<"Product"> | number
    price?: FloatFilter<"Product"> | number
    costPrice?: FloatFilter<"Product"> | number
    createdAt?: DateTimeFilter<"Product"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Product"> | Date | string | null
    createdBy?: IntNullableFilter<"Product"> | number | null
    deletedBy?: IntNullableFilter<"Product"> | number | null
    updatedBy?: IntNullableFilter<"Product"> | number | null
    updatedAt?: DateTimeNullableFilter<"Product"> | Date | string | null
    isDeleted?: BoolFilter<"Product"> | boolean
    userId?: IntFilter<"Product"> | number
    createdByUser?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    deletedByUser?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    updatedByUser?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    productPurchase?: ProductPurchaseListRelationFilter
    productSale?: ProductSaleListRelationFilter
  }

  export type ProductOrderByWithRelationInput = {
    productId?: SortOrder
    imageUrl?: SortOrder
    description?: SortOrder
    category?: SortOrder
    expiryDate?: SortOrderInput | SortOrder
    productionDate?: SortOrderInput | SortOrder
    quantity?: SortOrder
    price?: SortOrder
    costPrice?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    createdBy?: SortOrderInput | SortOrder
    deletedBy?: SortOrderInput | SortOrder
    updatedBy?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    isDeleted?: SortOrder
    userId?: SortOrder
    createdByUser?: UserOrderByWithRelationInput
    deletedByUser?: UserOrderByWithRelationInput
    updatedByUser?: UserOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    productPurchase?: ProductPurchaseOrderByRelationAggregateInput
    productSale?: ProductSaleOrderByRelationAggregateInput
  }

  export type ProductWhereUniqueInput = Prisma.AtLeast<{
    productId?: number
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    imageUrl?: StringFilter<"Product"> | string
    description?: StringFilter<"Product"> | string
    category?: StringFilter<"Product"> | string
    expiryDate?: DateTimeNullableFilter<"Product"> | Date | string | null
    productionDate?: DateTimeNullableFilter<"Product"> | Date | string | null
    quantity?: IntFilter<"Product"> | number
    price?: FloatFilter<"Product"> | number
    costPrice?: FloatFilter<"Product"> | number
    createdAt?: DateTimeFilter<"Product"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Product"> | Date | string | null
    createdBy?: IntNullableFilter<"Product"> | number | null
    deletedBy?: IntNullableFilter<"Product"> | number | null
    updatedBy?: IntNullableFilter<"Product"> | number | null
    updatedAt?: DateTimeNullableFilter<"Product"> | Date | string | null
    isDeleted?: BoolFilter<"Product"> | boolean
    userId?: IntFilter<"Product"> | number
    createdByUser?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    deletedByUser?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    updatedByUser?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    productPurchase?: ProductPurchaseListRelationFilter
    productSale?: ProductSaleListRelationFilter
  }, "productId">

  export type ProductOrderByWithAggregationInput = {
    productId?: SortOrder
    imageUrl?: SortOrder
    description?: SortOrder
    category?: SortOrder
    expiryDate?: SortOrderInput | SortOrder
    productionDate?: SortOrderInput | SortOrder
    quantity?: SortOrder
    price?: SortOrder
    costPrice?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    createdBy?: SortOrderInput | SortOrder
    deletedBy?: SortOrderInput | SortOrder
    updatedBy?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    isDeleted?: SortOrder
    userId?: SortOrder
    _count?: ProductCountOrderByAggregateInput
    _avg?: ProductAvgOrderByAggregateInput
    _max?: ProductMaxOrderByAggregateInput
    _min?: ProductMinOrderByAggregateInput
    _sum?: ProductSumOrderByAggregateInput
  }

  export type ProductScalarWhereWithAggregatesInput = {
    AND?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    OR?: ProductScalarWhereWithAggregatesInput[]
    NOT?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    productId?: IntWithAggregatesFilter<"Product"> | number
    imageUrl?: StringWithAggregatesFilter<"Product"> | string
    description?: StringWithAggregatesFilter<"Product"> | string
    category?: StringWithAggregatesFilter<"Product"> | string
    expiryDate?: DateTimeNullableWithAggregatesFilter<"Product"> | Date | string | null
    productionDate?: DateTimeNullableWithAggregatesFilter<"Product"> | Date | string | null
    quantity?: IntWithAggregatesFilter<"Product"> | number
    price?: FloatWithAggregatesFilter<"Product"> | number
    costPrice?: FloatWithAggregatesFilter<"Product"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Product"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Product"> | Date | string | null
    createdBy?: IntNullableWithAggregatesFilter<"Product"> | number | null
    deletedBy?: IntNullableWithAggregatesFilter<"Product"> | number | null
    updatedBy?: IntNullableWithAggregatesFilter<"Product"> | number | null
    updatedAt?: DateTimeNullableWithAggregatesFilter<"Product"> | Date | string | null
    isDeleted?: BoolWithAggregatesFilter<"Product"> | boolean
    userId?: IntWithAggregatesFilter<"Product"> | number
  }

  export type SaleWhereInput = {
    AND?: SaleWhereInput | SaleWhereInput[]
    OR?: SaleWhereInput[]
    NOT?: SaleWhereInput | SaleWhereInput[]
    saleId?: IntFilter<"Sale"> | number
    createdAt?: DateTimeFilter<"Sale"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Sale"> | Date | string | null
    createdBy?: IntNullableFilter<"Sale"> | number | null
    deletedBy?: IntNullableFilter<"Sale"> | number | null
    updatedBy?: IntNullableFilter<"Sale"> | number | null
    updatedAt?: DateTimeNullableFilter<"Sale"> | Date | string | null
    isDeleted?: BoolFilter<"Sale"> | boolean
    createdByUser?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    deletedByUser?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    updatedByUser?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    productSale?: ProductSaleListRelationFilter
  }

  export type SaleOrderByWithRelationInput = {
    saleId?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    createdBy?: SortOrderInput | SortOrder
    deletedBy?: SortOrderInput | SortOrder
    updatedBy?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    isDeleted?: SortOrder
    createdByUser?: UserOrderByWithRelationInput
    deletedByUser?: UserOrderByWithRelationInput
    updatedByUser?: UserOrderByWithRelationInput
    productSale?: ProductSaleOrderByRelationAggregateInput
  }

  export type SaleWhereUniqueInput = Prisma.AtLeast<{
    saleId?: number
    AND?: SaleWhereInput | SaleWhereInput[]
    OR?: SaleWhereInput[]
    NOT?: SaleWhereInput | SaleWhereInput[]
    createdAt?: DateTimeFilter<"Sale"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Sale"> | Date | string | null
    createdBy?: IntNullableFilter<"Sale"> | number | null
    deletedBy?: IntNullableFilter<"Sale"> | number | null
    updatedBy?: IntNullableFilter<"Sale"> | number | null
    updatedAt?: DateTimeNullableFilter<"Sale"> | Date | string | null
    isDeleted?: BoolFilter<"Sale"> | boolean
    createdByUser?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    deletedByUser?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    updatedByUser?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    productSale?: ProductSaleListRelationFilter
  }, "saleId">

  export type SaleOrderByWithAggregationInput = {
    saleId?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    createdBy?: SortOrderInput | SortOrder
    deletedBy?: SortOrderInput | SortOrder
    updatedBy?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    isDeleted?: SortOrder
    _count?: SaleCountOrderByAggregateInput
    _avg?: SaleAvgOrderByAggregateInput
    _max?: SaleMaxOrderByAggregateInput
    _min?: SaleMinOrderByAggregateInput
    _sum?: SaleSumOrderByAggregateInput
  }

  export type SaleScalarWhereWithAggregatesInput = {
    AND?: SaleScalarWhereWithAggregatesInput | SaleScalarWhereWithAggregatesInput[]
    OR?: SaleScalarWhereWithAggregatesInput[]
    NOT?: SaleScalarWhereWithAggregatesInput | SaleScalarWhereWithAggregatesInput[]
    saleId?: IntWithAggregatesFilter<"Sale"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Sale"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Sale"> | Date | string | null
    createdBy?: IntNullableWithAggregatesFilter<"Sale"> | number | null
    deletedBy?: IntNullableWithAggregatesFilter<"Sale"> | number | null
    updatedBy?: IntNullableWithAggregatesFilter<"Sale"> | number | null
    updatedAt?: DateTimeNullableWithAggregatesFilter<"Sale"> | Date | string | null
    isDeleted?: BoolWithAggregatesFilter<"Sale"> | boolean
  }

  export type PurchaseWhereInput = {
    AND?: PurchaseWhereInput | PurchaseWhereInput[]
    OR?: PurchaseWhereInput[]
    NOT?: PurchaseWhereInput | PurchaseWhereInput[]
    purchaseId?: IntFilter<"Purchase"> | number
    createdAt?: DateTimeFilter<"Purchase"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Purchase"> | Date | string | null
    createdBy?: IntNullableFilter<"Purchase"> | number | null
    deletedBy?: IntNullableFilter<"Purchase"> | number | null
    updatedBy?: IntNullableFilter<"Purchase"> | number | null
    updatedAt?: DateTimeNullableFilter<"Purchase"> | Date | string | null
    isDeleted?: BoolFilter<"Purchase"> | boolean
    productId?: IntFilter<"Purchase"> | number
    createdByUser?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    deletedByUser?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    updatedByUser?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    productPurchase?: ProductPurchaseListRelationFilter
  }

  export type PurchaseOrderByWithRelationInput = {
    purchaseId?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    createdBy?: SortOrderInput | SortOrder
    deletedBy?: SortOrderInput | SortOrder
    updatedBy?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    isDeleted?: SortOrder
    productId?: SortOrder
    createdByUser?: UserOrderByWithRelationInput
    deletedByUser?: UserOrderByWithRelationInput
    updatedByUser?: UserOrderByWithRelationInput
    productPurchase?: ProductPurchaseOrderByRelationAggregateInput
  }

  export type PurchaseWhereUniqueInput = Prisma.AtLeast<{
    purchaseId?: number
    AND?: PurchaseWhereInput | PurchaseWhereInput[]
    OR?: PurchaseWhereInput[]
    NOT?: PurchaseWhereInput | PurchaseWhereInput[]
    createdAt?: DateTimeFilter<"Purchase"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Purchase"> | Date | string | null
    createdBy?: IntNullableFilter<"Purchase"> | number | null
    deletedBy?: IntNullableFilter<"Purchase"> | number | null
    updatedBy?: IntNullableFilter<"Purchase"> | number | null
    updatedAt?: DateTimeNullableFilter<"Purchase"> | Date | string | null
    isDeleted?: BoolFilter<"Purchase"> | boolean
    productId?: IntFilter<"Purchase"> | number
    createdByUser?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    deletedByUser?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    updatedByUser?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    productPurchase?: ProductPurchaseListRelationFilter
  }, "purchaseId">

  export type PurchaseOrderByWithAggregationInput = {
    purchaseId?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    createdBy?: SortOrderInput | SortOrder
    deletedBy?: SortOrderInput | SortOrder
    updatedBy?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    isDeleted?: SortOrder
    productId?: SortOrder
    _count?: PurchaseCountOrderByAggregateInput
    _avg?: PurchaseAvgOrderByAggregateInput
    _max?: PurchaseMaxOrderByAggregateInput
    _min?: PurchaseMinOrderByAggregateInput
    _sum?: PurchaseSumOrderByAggregateInput
  }

  export type PurchaseScalarWhereWithAggregatesInput = {
    AND?: PurchaseScalarWhereWithAggregatesInput | PurchaseScalarWhereWithAggregatesInput[]
    OR?: PurchaseScalarWhereWithAggregatesInput[]
    NOT?: PurchaseScalarWhereWithAggregatesInput | PurchaseScalarWhereWithAggregatesInput[]
    purchaseId?: IntWithAggregatesFilter<"Purchase"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Purchase"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Purchase"> | Date | string | null
    createdBy?: IntNullableWithAggregatesFilter<"Purchase"> | number | null
    deletedBy?: IntNullableWithAggregatesFilter<"Purchase"> | number | null
    updatedBy?: IntNullableWithAggregatesFilter<"Purchase"> | number | null
    updatedAt?: DateTimeNullableWithAggregatesFilter<"Purchase"> | Date | string | null
    isDeleted?: BoolWithAggregatesFilter<"Purchase"> | boolean
    productId?: IntWithAggregatesFilter<"Purchase"> | number
  }

  export type ProductPurchaseWhereInput = {
    AND?: ProductPurchaseWhereInput | ProductPurchaseWhereInput[]
    OR?: ProductPurchaseWhereInput[]
    NOT?: ProductPurchaseWhereInput | ProductPurchaseWhereInput[]
    productPurchaseId?: IntFilter<"ProductPurchase"> | number
    purchasePrice?: FloatFilter<"ProductPurchase"> | number
    purchaseQuantity?: IntFilter<"ProductPurchase"> | number
    createdAt?: DateTimeFilter<"ProductPurchase"> | Date | string
    deletedAt?: DateTimeNullableFilter<"ProductPurchase"> | Date | string | null
    createdBy?: IntNullableFilter<"ProductPurchase"> | number | null
    deletedBy?: IntNullableFilter<"ProductPurchase"> | number | null
    updatedBy?: IntNullableFilter<"ProductPurchase"> | number | null
    updatedAt?: DateTimeNullableFilter<"ProductPurchase"> | Date | string | null
    isDeleted?: BoolFilter<"ProductPurchase"> | boolean
    productId?: IntFilter<"ProductPurchase"> | number
    purchaseId?: IntFilter<"ProductPurchase"> | number
    createdByUser?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    deletedByUser?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    updatedByUser?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
    purchase?: XOR<PurchaseScalarRelationFilter, PurchaseWhereInput>
  }

  export type ProductPurchaseOrderByWithRelationInput = {
    productPurchaseId?: SortOrder
    purchasePrice?: SortOrder
    purchaseQuantity?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    createdBy?: SortOrderInput | SortOrder
    deletedBy?: SortOrderInput | SortOrder
    updatedBy?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    isDeleted?: SortOrder
    productId?: SortOrder
    purchaseId?: SortOrder
    createdByUser?: UserOrderByWithRelationInput
    deletedByUser?: UserOrderByWithRelationInput
    updatedByUser?: UserOrderByWithRelationInput
    product?: ProductOrderByWithRelationInput
    purchase?: PurchaseOrderByWithRelationInput
  }

  export type ProductPurchaseWhereUniqueInput = Prisma.AtLeast<{
    productPurchaseId?: number
    AND?: ProductPurchaseWhereInput | ProductPurchaseWhereInput[]
    OR?: ProductPurchaseWhereInput[]
    NOT?: ProductPurchaseWhereInput | ProductPurchaseWhereInput[]
    purchasePrice?: FloatFilter<"ProductPurchase"> | number
    purchaseQuantity?: IntFilter<"ProductPurchase"> | number
    createdAt?: DateTimeFilter<"ProductPurchase"> | Date | string
    deletedAt?: DateTimeNullableFilter<"ProductPurchase"> | Date | string | null
    createdBy?: IntNullableFilter<"ProductPurchase"> | number | null
    deletedBy?: IntNullableFilter<"ProductPurchase"> | number | null
    updatedBy?: IntNullableFilter<"ProductPurchase"> | number | null
    updatedAt?: DateTimeNullableFilter<"ProductPurchase"> | Date | string | null
    isDeleted?: BoolFilter<"ProductPurchase"> | boolean
    productId?: IntFilter<"ProductPurchase"> | number
    purchaseId?: IntFilter<"ProductPurchase"> | number
    createdByUser?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    deletedByUser?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    updatedByUser?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
    purchase?: XOR<PurchaseScalarRelationFilter, PurchaseWhereInput>
  }, "productPurchaseId">

  export type ProductPurchaseOrderByWithAggregationInput = {
    productPurchaseId?: SortOrder
    purchasePrice?: SortOrder
    purchaseQuantity?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    createdBy?: SortOrderInput | SortOrder
    deletedBy?: SortOrderInput | SortOrder
    updatedBy?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    isDeleted?: SortOrder
    productId?: SortOrder
    purchaseId?: SortOrder
    _count?: ProductPurchaseCountOrderByAggregateInput
    _avg?: ProductPurchaseAvgOrderByAggregateInput
    _max?: ProductPurchaseMaxOrderByAggregateInput
    _min?: ProductPurchaseMinOrderByAggregateInput
    _sum?: ProductPurchaseSumOrderByAggregateInput
  }

  export type ProductPurchaseScalarWhereWithAggregatesInput = {
    AND?: ProductPurchaseScalarWhereWithAggregatesInput | ProductPurchaseScalarWhereWithAggregatesInput[]
    OR?: ProductPurchaseScalarWhereWithAggregatesInput[]
    NOT?: ProductPurchaseScalarWhereWithAggregatesInput | ProductPurchaseScalarWhereWithAggregatesInput[]
    productPurchaseId?: IntWithAggregatesFilter<"ProductPurchase"> | number
    purchasePrice?: FloatWithAggregatesFilter<"ProductPurchase"> | number
    purchaseQuantity?: IntWithAggregatesFilter<"ProductPurchase"> | number
    createdAt?: DateTimeWithAggregatesFilter<"ProductPurchase"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"ProductPurchase"> | Date | string | null
    createdBy?: IntNullableWithAggregatesFilter<"ProductPurchase"> | number | null
    deletedBy?: IntNullableWithAggregatesFilter<"ProductPurchase"> | number | null
    updatedBy?: IntNullableWithAggregatesFilter<"ProductPurchase"> | number | null
    updatedAt?: DateTimeNullableWithAggregatesFilter<"ProductPurchase"> | Date | string | null
    isDeleted?: BoolWithAggregatesFilter<"ProductPurchase"> | boolean
    productId?: IntWithAggregatesFilter<"ProductPurchase"> | number
    purchaseId?: IntWithAggregatesFilter<"ProductPurchase"> | number
  }

  export type ProductSaleWhereInput = {
    AND?: ProductSaleWhereInput | ProductSaleWhereInput[]
    OR?: ProductSaleWhereInput[]
    NOT?: ProductSaleWhereInput | ProductSaleWhereInput[]
    productSaleId?: IntFilter<"ProductSale"> | number
    salePrice?: FloatFilter<"ProductSale"> | number
    saleQuantity?: IntFilter<"ProductSale"> | number
    createdAt?: DateTimeFilter<"ProductSale"> | Date | string
    deletedAt?: DateTimeNullableFilter<"ProductSale"> | Date | string | null
    createdBy?: IntNullableFilter<"ProductSale"> | number | null
    deletedBy?: IntNullableFilter<"ProductSale"> | number | null
    updatedBy?: IntNullableFilter<"ProductSale"> | number | null
    updatedAt?: DateTimeNullableFilter<"ProductSale"> | Date | string | null
    isDeleted?: BoolFilter<"ProductSale"> | boolean
    productId?: IntFilter<"ProductSale"> | number
    saleId?: IntFilter<"ProductSale"> | number
    createdByUser?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    deletedByUser?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    updatedByUser?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
    sale?: XOR<SaleScalarRelationFilter, SaleWhereInput>
  }

  export type ProductSaleOrderByWithRelationInput = {
    productSaleId?: SortOrder
    salePrice?: SortOrder
    saleQuantity?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    createdBy?: SortOrderInput | SortOrder
    deletedBy?: SortOrderInput | SortOrder
    updatedBy?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    isDeleted?: SortOrder
    productId?: SortOrder
    saleId?: SortOrder
    createdByUser?: UserOrderByWithRelationInput
    deletedByUser?: UserOrderByWithRelationInput
    updatedByUser?: UserOrderByWithRelationInput
    product?: ProductOrderByWithRelationInput
    sale?: SaleOrderByWithRelationInput
  }

  export type ProductSaleWhereUniqueInput = Prisma.AtLeast<{
    productSaleId?: number
    AND?: ProductSaleWhereInput | ProductSaleWhereInput[]
    OR?: ProductSaleWhereInput[]
    NOT?: ProductSaleWhereInput | ProductSaleWhereInput[]
    salePrice?: FloatFilter<"ProductSale"> | number
    saleQuantity?: IntFilter<"ProductSale"> | number
    createdAt?: DateTimeFilter<"ProductSale"> | Date | string
    deletedAt?: DateTimeNullableFilter<"ProductSale"> | Date | string | null
    createdBy?: IntNullableFilter<"ProductSale"> | number | null
    deletedBy?: IntNullableFilter<"ProductSale"> | number | null
    updatedBy?: IntNullableFilter<"ProductSale"> | number | null
    updatedAt?: DateTimeNullableFilter<"ProductSale"> | Date | string | null
    isDeleted?: BoolFilter<"ProductSale"> | boolean
    productId?: IntFilter<"ProductSale"> | number
    saleId?: IntFilter<"ProductSale"> | number
    createdByUser?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    deletedByUser?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    updatedByUser?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
    sale?: XOR<SaleScalarRelationFilter, SaleWhereInput>
  }, "productSaleId">

  export type ProductSaleOrderByWithAggregationInput = {
    productSaleId?: SortOrder
    salePrice?: SortOrder
    saleQuantity?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    createdBy?: SortOrderInput | SortOrder
    deletedBy?: SortOrderInput | SortOrder
    updatedBy?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    isDeleted?: SortOrder
    productId?: SortOrder
    saleId?: SortOrder
    _count?: ProductSaleCountOrderByAggregateInput
    _avg?: ProductSaleAvgOrderByAggregateInput
    _max?: ProductSaleMaxOrderByAggregateInput
    _min?: ProductSaleMinOrderByAggregateInput
    _sum?: ProductSaleSumOrderByAggregateInput
  }

  export type ProductSaleScalarWhereWithAggregatesInput = {
    AND?: ProductSaleScalarWhereWithAggregatesInput | ProductSaleScalarWhereWithAggregatesInput[]
    OR?: ProductSaleScalarWhereWithAggregatesInput[]
    NOT?: ProductSaleScalarWhereWithAggregatesInput | ProductSaleScalarWhereWithAggregatesInput[]
    productSaleId?: IntWithAggregatesFilter<"ProductSale"> | number
    salePrice?: FloatWithAggregatesFilter<"ProductSale"> | number
    saleQuantity?: IntWithAggregatesFilter<"ProductSale"> | number
    createdAt?: DateTimeWithAggregatesFilter<"ProductSale"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"ProductSale"> | Date | string | null
    createdBy?: IntNullableWithAggregatesFilter<"ProductSale"> | number | null
    deletedBy?: IntNullableWithAggregatesFilter<"ProductSale"> | number | null
    updatedBy?: IntNullableWithAggregatesFilter<"ProductSale"> | number | null
    updatedAt?: DateTimeNullableWithAggregatesFilter<"ProductSale"> | Date | string | null
    isDeleted?: BoolWithAggregatesFilter<"ProductSale"> | boolean
    productId?: IntWithAggregatesFilter<"ProductSale"> | number
    saleId?: IntWithAggregatesFilter<"ProductSale"> | number
  }

  export type UserCreateInput = {
    name: string
    email: string
    password: string
    createdAt?: Date | string
    deletedAt?: Date | string | null
    createdBy?: number | null
    deletedBy?: number | null
    isDeleted?: boolean
    createdRoles?: RoleCreateNestedManyWithoutCreatedByUserInput
    deletedRoles?: RoleCreateNestedManyWithoutDeletedByUserInput
    updatedRoles?: RoleCreateNestedManyWithoutUpdatedByUserInput
    createdProducts?: ProductCreateNestedManyWithoutCreatedByUserInput
    deletedProducts?: ProductCreateNestedManyWithoutDeletedByUserInput
    updatedProducts?: ProductCreateNestedManyWithoutUpdatedByUserInput
    createdSales?: SaleCreateNestedManyWithoutCreatedByUserInput
    deletedSales?: SaleCreateNestedManyWithoutDeletedByUserInput
    updatedSales?: SaleCreateNestedManyWithoutUpdatedByUserInput
    createdPurchases?: PurchaseCreateNestedManyWithoutCreatedByUserInput
    deletedPurchases?: PurchaseCreateNestedManyWithoutDeletedByUserInput
    updatedPurchases?: PurchaseCreateNestedManyWithoutUpdatedByUserInput
    createdProductPurchases?: ProductPurchaseCreateNestedManyWithoutCreatedByUserInput
    deletedProductPurchases?: ProductPurchaseCreateNestedManyWithoutDeletedByUserInput
    updatedProductPurchases?: ProductPurchaseCreateNestedManyWithoutUpdatedByUserInput
    createdProductSales?: ProductSaleCreateNestedManyWithoutCreatedByUserInput
    deletedProductSales?: ProductSaleCreateNestedManyWithoutDeletedByUserInput
    updatedProductSales?: ProductSaleCreateNestedManyWithoutUpdatedByUserInput
    role: RoleCreateNestedOneWithoutUsersInput
    ownedProducts?: ProductCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    userId?: number
    name: string
    email: string
    password: string
    createdAt?: Date | string
    deletedAt?: Date | string | null
    createdBy?: number | null
    deletedBy?: number | null
    isDeleted?: boolean
    roleId: number
    createdRoles?: RoleUncheckedCreateNestedManyWithoutCreatedByUserInput
    deletedRoles?: RoleUncheckedCreateNestedManyWithoutDeletedByUserInput
    updatedRoles?: RoleUncheckedCreateNestedManyWithoutUpdatedByUserInput
    createdProducts?: ProductUncheckedCreateNestedManyWithoutCreatedByUserInput
    deletedProducts?: ProductUncheckedCreateNestedManyWithoutDeletedByUserInput
    updatedProducts?: ProductUncheckedCreateNestedManyWithoutUpdatedByUserInput
    createdSales?: SaleUncheckedCreateNestedManyWithoutCreatedByUserInput
    deletedSales?: SaleUncheckedCreateNestedManyWithoutDeletedByUserInput
    updatedSales?: SaleUncheckedCreateNestedManyWithoutUpdatedByUserInput
    createdPurchases?: PurchaseUncheckedCreateNestedManyWithoutCreatedByUserInput
    deletedPurchases?: PurchaseUncheckedCreateNestedManyWithoutDeletedByUserInput
    updatedPurchases?: PurchaseUncheckedCreateNestedManyWithoutUpdatedByUserInput
    createdProductPurchases?: ProductPurchaseUncheckedCreateNestedManyWithoutCreatedByUserInput
    deletedProductPurchases?: ProductPurchaseUncheckedCreateNestedManyWithoutDeletedByUserInput
    updatedProductPurchases?: ProductPurchaseUncheckedCreateNestedManyWithoutUpdatedByUserInput
    createdProductSales?: ProductSaleUncheckedCreateNestedManyWithoutCreatedByUserInput
    deletedProductSales?: ProductSaleUncheckedCreateNestedManyWithoutDeletedByUserInput
    updatedProductSales?: ProductSaleUncheckedCreateNestedManyWithoutUpdatedByUserInput
    ownedProducts?: ProductUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdRoles?: RoleUpdateManyWithoutCreatedByUserNestedInput
    deletedRoles?: RoleUpdateManyWithoutDeletedByUserNestedInput
    updatedRoles?: RoleUpdateManyWithoutUpdatedByUserNestedInput
    createdProducts?: ProductUpdateManyWithoutCreatedByUserNestedInput
    deletedProducts?: ProductUpdateManyWithoutDeletedByUserNestedInput
    updatedProducts?: ProductUpdateManyWithoutUpdatedByUserNestedInput
    createdSales?: SaleUpdateManyWithoutCreatedByUserNestedInput
    deletedSales?: SaleUpdateManyWithoutDeletedByUserNestedInput
    updatedSales?: SaleUpdateManyWithoutUpdatedByUserNestedInput
    createdPurchases?: PurchaseUpdateManyWithoutCreatedByUserNestedInput
    deletedPurchases?: PurchaseUpdateManyWithoutDeletedByUserNestedInput
    updatedPurchases?: PurchaseUpdateManyWithoutUpdatedByUserNestedInput
    createdProductPurchases?: ProductPurchaseUpdateManyWithoutCreatedByUserNestedInput
    deletedProductPurchases?: ProductPurchaseUpdateManyWithoutDeletedByUserNestedInput
    updatedProductPurchases?: ProductPurchaseUpdateManyWithoutUpdatedByUserNestedInput
    createdProductSales?: ProductSaleUpdateManyWithoutCreatedByUserNestedInput
    deletedProductSales?: ProductSaleUpdateManyWithoutDeletedByUserNestedInput
    updatedProductSales?: ProductSaleUpdateManyWithoutUpdatedByUserNestedInput
    role?: RoleUpdateOneRequiredWithoutUsersNestedInput
    ownedProducts?: ProductUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    userId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    roleId?: IntFieldUpdateOperationsInput | number
    createdRoles?: RoleUncheckedUpdateManyWithoutCreatedByUserNestedInput
    deletedRoles?: RoleUncheckedUpdateManyWithoutDeletedByUserNestedInput
    updatedRoles?: RoleUncheckedUpdateManyWithoutUpdatedByUserNestedInput
    createdProducts?: ProductUncheckedUpdateManyWithoutCreatedByUserNestedInput
    deletedProducts?: ProductUncheckedUpdateManyWithoutDeletedByUserNestedInput
    updatedProducts?: ProductUncheckedUpdateManyWithoutUpdatedByUserNestedInput
    createdSales?: SaleUncheckedUpdateManyWithoutCreatedByUserNestedInput
    deletedSales?: SaleUncheckedUpdateManyWithoutDeletedByUserNestedInput
    updatedSales?: SaleUncheckedUpdateManyWithoutUpdatedByUserNestedInput
    createdPurchases?: PurchaseUncheckedUpdateManyWithoutCreatedByUserNestedInput
    deletedPurchases?: PurchaseUncheckedUpdateManyWithoutDeletedByUserNestedInput
    updatedPurchases?: PurchaseUncheckedUpdateManyWithoutUpdatedByUserNestedInput
    createdProductPurchases?: ProductPurchaseUncheckedUpdateManyWithoutCreatedByUserNestedInput
    deletedProductPurchases?: ProductPurchaseUncheckedUpdateManyWithoutDeletedByUserNestedInput
    updatedProductPurchases?: ProductPurchaseUncheckedUpdateManyWithoutUpdatedByUserNestedInput
    createdProductSales?: ProductSaleUncheckedUpdateManyWithoutCreatedByUserNestedInput
    deletedProductSales?: ProductSaleUncheckedUpdateManyWithoutDeletedByUserNestedInput
    updatedProductSales?: ProductSaleUncheckedUpdateManyWithoutUpdatedByUserNestedInput
    ownedProducts?: ProductUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    userId?: number
    name: string
    email: string
    password: string
    createdAt?: Date | string
    deletedAt?: Date | string | null
    createdBy?: number | null
    deletedBy?: number | null
    isDeleted?: boolean
    roleId: number
  }

  export type UserUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserUncheckedUpdateManyInput = {
    userId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    roleId?: IntFieldUpdateOperationsInput | number
  }

  export type RoleCreateInput = {
    roleType: string
    createdAt?: Date | string
    deletedAt?: Date | string | null
    updatedAt?: Date | string | null
    isDeleted?: boolean
    createdByUser?: UserCreateNestedOneWithoutCreatedRolesInput
    deletedByUser?: UserCreateNestedOneWithoutDeletedRolesInput
    updatedByUser?: UserCreateNestedOneWithoutUpdatedRolesInput
    users?: UserCreateNestedManyWithoutRoleInput
  }

  export type RoleUncheckedCreateInput = {
    roleId?: number
    roleType: string
    createdAt?: Date | string
    deletedAt?: Date | string | null
    createdBy?: number | null
    deletedBy?: number | null
    updatedBy?: number | null
    updatedAt?: Date | string | null
    isDeleted?: boolean
    users?: UserUncheckedCreateNestedManyWithoutRoleInput
  }

  export type RoleUpdateInput = {
    roleType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdByUser?: UserUpdateOneWithoutCreatedRolesNestedInput
    deletedByUser?: UserUpdateOneWithoutDeletedRolesNestedInput
    updatedByUser?: UserUpdateOneWithoutUpdatedRolesNestedInput
    users?: UserUpdateManyWithoutRoleNestedInput
  }

  export type RoleUncheckedUpdateInput = {
    roleId?: IntFieldUpdateOperationsInput | number
    roleType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    users?: UserUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type RoleCreateManyInput = {
    roleId?: number
    roleType: string
    createdAt?: Date | string
    deletedAt?: Date | string | null
    createdBy?: number | null
    deletedBy?: number | null
    updatedBy?: number | null
    updatedAt?: Date | string | null
    isDeleted?: boolean
  }

  export type RoleUpdateManyMutationInput = {
    roleType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type RoleUncheckedUpdateManyInput = {
    roleId?: IntFieldUpdateOperationsInput | number
    roleType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ProductCreateInput = {
    imageUrl: string
    description: string
    category: string
    expiryDate?: Date | string | null
    productionDate?: Date | string | null
    quantity: number
    price: number
    costPrice: number
    createdAt?: Date | string
    deletedAt?: Date | string | null
    updatedAt?: Date | string | null
    isDeleted?: boolean
    createdByUser?: UserCreateNestedOneWithoutCreatedProductsInput
    deletedByUser?: UserCreateNestedOneWithoutDeletedProductsInput
    updatedByUser?: UserCreateNestedOneWithoutUpdatedProductsInput
    user: UserCreateNestedOneWithoutOwnedProductsInput
    productPurchase?: ProductPurchaseCreateNestedManyWithoutProductInput
    productSale?: ProductSaleCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateInput = {
    productId?: number
    imageUrl: string
    description: string
    category: string
    expiryDate?: Date | string | null
    productionDate?: Date | string | null
    quantity: number
    price: number
    costPrice: number
    createdAt?: Date | string
    deletedAt?: Date | string | null
    createdBy?: number | null
    deletedBy?: number | null
    updatedBy?: number | null
    updatedAt?: Date | string | null
    isDeleted?: boolean
    userId: number
    productPurchase?: ProductPurchaseUncheckedCreateNestedManyWithoutProductInput
    productSale?: ProductSaleUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductUpdateInput = {
    imageUrl?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    expiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    productionDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    costPrice?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdByUser?: UserUpdateOneWithoutCreatedProductsNestedInput
    deletedByUser?: UserUpdateOneWithoutDeletedProductsNestedInput
    updatedByUser?: UserUpdateOneWithoutUpdatedProductsNestedInput
    user?: UserUpdateOneRequiredWithoutOwnedProductsNestedInput
    productPurchase?: ProductPurchaseUpdateManyWithoutProductNestedInput
    productSale?: ProductSaleUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateInput = {
    productId?: IntFieldUpdateOperationsInput | number
    imageUrl?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    expiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    productionDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    costPrice?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    userId?: IntFieldUpdateOperationsInput | number
    productPurchase?: ProductPurchaseUncheckedUpdateManyWithoutProductNestedInput
    productSale?: ProductSaleUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductCreateManyInput = {
    productId?: number
    imageUrl: string
    description: string
    category: string
    expiryDate?: Date | string | null
    productionDate?: Date | string | null
    quantity: number
    price: number
    costPrice: number
    createdAt?: Date | string
    deletedAt?: Date | string | null
    createdBy?: number | null
    deletedBy?: number | null
    updatedBy?: number | null
    updatedAt?: Date | string | null
    isDeleted?: boolean
    userId: number
  }

  export type ProductUpdateManyMutationInput = {
    imageUrl?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    expiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    productionDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    costPrice?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ProductUncheckedUpdateManyInput = {
    productId?: IntFieldUpdateOperationsInput | number
    imageUrl?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    expiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    productionDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    costPrice?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type SaleCreateInput = {
    createdAt?: Date | string
    deletedAt?: Date | string | null
    updatedAt?: Date | string | null
    isDeleted?: boolean
    createdByUser?: UserCreateNestedOneWithoutCreatedSalesInput
    deletedByUser?: UserCreateNestedOneWithoutDeletedSalesInput
    updatedByUser?: UserCreateNestedOneWithoutUpdatedSalesInput
    productSale?: ProductSaleCreateNestedManyWithoutSaleInput
  }

  export type SaleUncheckedCreateInput = {
    saleId?: number
    createdAt?: Date | string
    deletedAt?: Date | string | null
    createdBy?: number | null
    deletedBy?: number | null
    updatedBy?: number | null
    updatedAt?: Date | string | null
    isDeleted?: boolean
    productSale?: ProductSaleUncheckedCreateNestedManyWithoutSaleInput
  }

  export type SaleUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdByUser?: UserUpdateOneWithoutCreatedSalesNestedInput
    deletedByUser?: UserUpdateOneWithoutDeletedSalesNestedInput
    updatedByUser?: UserUpdateOneWithoutUpdatedSalesNestedInput
    productSale?: ProductSaleUpdateManyWithoutSaleNestedInput
  }

  export type SaleUncheckedUpdateInput = {
    saleId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    productSale?: ProductSaleUncheckedUpdateManyWithoutSaleNestedInput
  }

  export type SaleCreateManyInput = {
    saleId?: number
    createdAt?: Date | string
    deletedAt?: Date | string | null
    createdBy?: number | null
    deletedBy?: number | null
    updatedBy?: number | null
    updatedAt?: Date | string | null
    isDeleted?: boolean
  }

  export type SaleUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type SaleUncheckedUpdateManyInput = {
    saleId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PurchaseCreateInput = {
    createdAt?: Date | string
    deletedAt?: Date | string | null
    updatedAt?: Date | string | null
    isDeleted?: boolean
    productId: number
    createdByUser?: UserCreateNestedOneWithoutCreatedPurchasesInput
    deletedByUser?: UserCreateNestedOneWithoutDeletedPurchasesInput
    updatedByUser?: UserCreateNestedOneWithoutUpdatedPurchasesInput
    productPurchase?: ProductPurchaseCreateNestedManyWithoutPurchaseInput
  }

  export type PurchaseUncheckedCreateInput = {
    purchaseId?: number
    createdAt?: Date | string
    deletedAt?: Date | string | null
    createdBy?: number | null
    deletedBy?: number | null
    updatedBy?: number | null
    updatedAt?: Date | string | null
    isDeleted?: boolean
    productId: number
    productPurchase?: ProductPurchaseUncheckedCreateNestedManyWithoutPurchaseInput
  }

  export type PurchaseUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    productId?: IntFieldUpdateOperationsInput | number
    createdByUser?: UserUpdateOneWithoutCreatedPurchasesNestedInput
    deletedByUser?: UserUpdateOneWithoutDeletedPurchasesNestedInput
    updatedByUser?: UserUpdateOneWithoutUpdatedPurchasesNestedInput
    productPurchase?: ProductPurchaseUpdateManyWithoutPurchaseNestedInput
  }

  export type PurchaseUncheckedUpdateInput = {
    purchaseId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    productId?: IntFieldUpdateOperationsInput | number
    productPurchase?: ProductPurchaseUncheckedUpdateManyWithoutPurchaseNestedInput
  }

  export type PurchaseCreateManyInput = {
    purchaseId?: number
    createdAt?: Date | string
    deletedAt?: Date | string | null
    createdBy?: number | null
    deletedBy?: number | null
    updatedBy?: number | null
    updatedAt?: Date | string | null
    isDeleted?: boolean
    productId: number
  }

  export type PurchaseUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    productId?: IntFieldUpdateOperationsInput | number
  }

  export type PurchaseUncheckedUpdateManyInput = {
    purchaseId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    productId?: IntFieldUpdateOperationsInput | number
  }

  export type ProductPurchaseCreateInput = {
    purchasePrice: number
    purchaseQuantity: number
    createdAt?: Date | string
    deletedAt?: Date | string | null
    updatedAt?: Date | string | null
    isDeleted?: boolean
    createdByUser?: UserCreateNestedOneWithoutCreatedProductPurchasesInput
    deletedByUser?: UserCreateNestedOneWithoutDeletedProductPurchasesInput
    updatedByUser?: UserCreateNestedOneWithoutUpdatedProductPurchasesInput
    product: ProductCreateNestedOneWithoutProductPurchaseInput
    purchase: PurchaseCreateNestedOneWithoutProductPurchaseInput
  }

  export type ProductPurchaseUncheckedCreateInput = {
    productPurchaseId?: number
    purchasePrice: number
    purchaseQuantity: number
    createdAt?: Date | string
    deletedAt?: Date | string | null
    createdBy?: number | null
    deletedBy?: number | null
    updatedBy?: number | null
    updatedAt?: Date | string | null
    isDeleted?: boolean
    productId: number
    purchaseId: number
  }

  export type ProductPurchaseUpdateInput = {
    purchasePrice?: FloatFieldUpdateOperationsInput | number
    purchaseQuantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdByUser?: UserUpdateOneWithoutCreatedProductPurchasesNestedInput
    deletedByUser?: UserUpdateOneWithoutDeletedProductPurchasesNestedInput
    updatedByUser?: UserUpdateOneWithoutUpdatedProductPurchasesNestedInput
    product?: ProductUpdateOneRequiredWithoutProductPurchaseNestedInput
    purchase?: PurchaseUpdateOneRequiredWithoutProductPurchaseNestedInput
  }

  export type ProductPurchaseUncheckedUpdateInput = {
    productPurchaseId?: IntFieldUpdateOperationsInput | number
    purchasePrice?: FloatFieldUpdateOperationsInput | number
    purchaseQuantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    productId?: IntFieldUpdateOperationsInput | number
    purchaseId?: IntFieldUpdateOperationsInput | number
  }

  export type ProductPurchaseCreateManyInput = {
    productPurchaseId?: number
    purchasePrice: number
    purchaseQuantity: number
    createdAt?: Date | string
    deletedAt?: Date | string | null
    createdBy?: number | null
    deletedBy?: number | null
    updatedBy?: number | null
    updatedAt?: Date | string | null
    isDeleted?: boolean
    productId: number
    purchaseId: number
  }

  export type ProductPurchaseUpdateManyMutationInput = {
    purchasePrice?: FloatFieldUpdateOperationsInput | number
    purchaseQuantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ProductPurchaseUncheckedUpdateManyInput = {
    productPurchaseId?: IntFieldUpdateOperationsInput | number
    purchasePrice?: FloatFieldUpdateOperationsInput | number
    purchaseQuantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    productId?: IntFieldUpdateOperationsInput | number
    purchaseId?: IntFieldUpdateOperationsInput | number
  }

  export type ProductSaleCreateInput = {
    salePrice: number
    saleQuantity: number
    createdAt?: Date | string
    deletedAt?: Date | string | null
    updatedAt?: Date | string | null
    isDeleted?: boolean
    createdByUser?: UserCreateNestedOneWithoutCreatedProductSalesInput
    deletedByUser?: UserCreateNestedOneWithoutDeletedProductSalesInput
    updatedByUser?: UserCreateNestedOneWithoutUpdatedProductSalesInput
    product: ProductCreateNestedOneWithoutProductSaleInput
    sale: SaleCreateNestedOneWithoutProductSaleInput
  }

  export type ProductSaleUncheckedCreateInput = {
    productSaleId?: number
    salePrice: number
    saleQuantity: number
    createdAt?: Date | string
    deletedAt?: Date | string | null
    createdBy?: number | null
    deletedBy?: number | null
    updatedBy?: number | null
    updatedAt?: Date | string | null
    isDeleted?: boolean
    productId: number
    saleId: number
  }

  export type ProductSaleUpdateInput = {
    salePrice?: FloatFieldUpdateOperationsInput | number
    saleQuantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdByUser?: UserUpdateOneWithoutCreatedProductSalesNestedInput
    deletedByUser?: UserUpdateOneWithoutDeletedProductSalesNestedInput
    updatedByUser?: UserUpdateOneWithoutUpdatedProductSalesNestedInput
    product?: ProductUpdateOneRequiredWithoutProductSaleNestedInput
    sale?: SaleUpdateOneRequiredWithoutProductSaleNestedInput
  }

  export type ProductSaleUncheckedUpdateInput = {
    productSaleId?: IntFieldUpdateOperationsInput | number
    salePrice?: FloatFieldUpdateOperationsInput | number
    saleQuantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    productId?: IntFieldUpdateOperationsInput | number
    saleId?: IntFieldUpdateOperationsInput | number
  }

  export type ProductSaleCreateManyInput = {
    productSaleId?: number
    salePrice: number
    saleQuantity: number
    createdAt?: Date | string
    deletedAt?: Date | string | null
    createdBy?: number | null
    deletedBy?: number | null
    updatedBy?: number | null
    updatedAt?: Date | string | null
    isDeleted?: boolean
    productId: number
    saleId: number
  }

  export type ProductSaleUpdateManyMutationInput = {
    salePrice?: FloatFieldUpdateOperationsInput | number
    saleQuantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ProductSaleUncheckedUpdateManyInput = {
    productSaleId?: IntFieldUpdateOperationsInput | number
    salePrice?: FloatFieldUpdateOperationsInput | number
    saleQuantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    productId?: IntFieldUpdateOperationsInput | number
    saleId?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type RoleListRelationFilter = {
    every?: RoleWhereInput
    some?: RoleWhereInput
    none?: RoleWhereInput
  }

  export type ProductListRelationFilter = {
    every?: ProductWhereInput
    some?: ProductWhereInput
    none?: ProductWhereInput
  }

  export type SaleListRelationFilter = {
    every?: SaleWhereInput
    some?: SaleWhereInput
    none?: SaleWhereInput
  }

  export type PurchaseListRelationFilter = {
    every?: PurchaseWhereInput
    some?: PurchaseWhereInput
    none?: PurchaseWhereInput
  }

  export type ProductPurchaseListRelationFilter = {
    every?: ProductPurchaseWhereInput
    some?: ProductPurchaseWhereInput
    none?: ProductPurchaseWhereInput
  }

  export type ProductSaleListRelationFilter = {
    every?: ProductSaleWhereInput
    some?: ProductSaleWhereInput
    none?: ProductSaleWhereInput
  }

  export type RoleScalarRelationFilter = {
    is?: RoleWhereInput
    isNot?: RoleWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type RoleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SaleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PurchaseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductPurchaseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductSaleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    userId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrder
    createdBy?: SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    roleId?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    userId?: SortOrder
    createdBy?: SortOrder
    deletedBy?: SortOrder
    roleId?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    userId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrder
    createdBy?: SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    roleId?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    userId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrder
    createdBy?: SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    roleId?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    userId?: SortOrder
    createdBy?: SortOrder
    deletedBy?: SortOrder
    roleId?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RoleCountOrderByAggregateInput = {
    roleId?: SortOrder
    roleType?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrder
    createdBy?: SortOrder
    deletedBy?: SortOrder
    updatedBy?: SortOrder
    updatedAt?: SortOrder
    isDeleted?: SortOrder
  }

  export type RoleAvgOrderByAggregateInput = {
    roleId?: SortOrder
    createdBy?: SortOrder
    deletedBy?: SortOrder
    updatedBy?: SortOrder
  }

  export type RoleMaxOrderByAggregateInput = {
    roleId?: SortOrder
    roleType?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrder
    createdBy?: SortOrder
    deletedBy?: SortOrder
    updatedBy?: SortOrder
    updatedAt?: SortOrder
    isDeleted?: SortOrder
  }

  export type RoleMinOrderByAggregateInput = {
    roleId?: SortOrder
    roleType?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrder
    createdBy?: SortOrder
    deletedBy?: SortOrder
    updatedBy?: SortOrder
    updatedAt?: SortOrder
    isDeleted?: SortOrder
  }

  export type RoleSumOrderByAggregateInput = {
    roleId?: SortOrder
    createdBy?: SortOrder
    deletedBy?: SortOrder
    updatedBy?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ProductCountOrderByAggregateInput = {
    productId?: SortOrder
    imageUrl?: SortOrder
    description?: SortOrder
    category?: SortOrder
    expiryDate?: SortOrder
    productionDate?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    costPrice?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrder
    createdBy?: SortOrder
    deletedBy?: SortOrder
    updatedBy?: SortOrder
    updatedAt?: SortOrder
    isDeleted?: SortOrder
    userId?: SortOrder
  }

  export type ProductAvgOrderByAggregateInput = {
    productId?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    costPrice?: SortOrder
    createdBy?: SortOrder
    deletedBy?: SortOrder
    updatedBy?: SortOrder
    userId?: SortOrder
  }

  export type ProductMaxOrderByAggregateInput = {
    productId?: SortOrder
    imageUrl?: SortOrder
    description?: SortOrder
    category?: SortOrder
    expiryDate?: SortOrder
    productionDate?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    costPrice?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrder
    createdBy?: SortOrder
    deletedBy?: SortOrder
    updatedBy?: SortOrder
    updatedAt?: SortOrder
    isDeleted?: SortOrder
    userId?: SortOrder
  }

  export type ProductMinOrderByAggregateInput = {
    productId?: SortOrder
    imageUrl?: SortOrder
    description?: SortOrder
    category?: SortOrder
    expiryDate?: SortOrder
    productionDate?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    costPrice?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrder
    createdBy?: SortOrder
    deletedBy?: SortOrder
    updatedBy?: SortOrder
    updatedAt?: SortOrder
    isDeleted?: SortOrder
    userId?: SortOrder
  }

  export type ProductSumOrderByAggregateInput = {
    productId?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    costPrice?: SortOrder
    createdBy?: SortOrder
    deletedBy?: SortOrder
    updatedBy?: SortOrder
    userId?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type SaleCountOrderByAggregateInput = {
    saleId?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrder
    createdBy?: SortOrder
    deletedBy?: SortOrder
    updatedBy?: SortOrder
    updatedAt?: SortOrder
    isDeleted?: SortOrder
  }

  export type SaleAvgOrderByAggregateInput = {
    saleId?: SortOrder
    createdBy?: SortOrder
    deletedBy?: SortOrder
    updatedBy?: SortOrder
  }

  export type SaleMaxOrderByAggregateInput = {
    saleId?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrder
    createdBy?: SortOrder
    deletedBy?: SortOrder
    updatedBy?: SortOrder
    updatedAt?: SortOrder
    isDeleted?: SortOrder
  }

  export type SaleMinOrderByAggregateInput = {
    saleId?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrder
    createdBy?: SortOrder
    deletedBy?: SortOrder
    updatedBy?: SortOrder
    updatedAt?: SortOrder
    isDeleted?: SortOrder
  }

  export type SaleSumOrderByAggregateInput = {
    saleId?: SortOrder
    createdBy?: SortOrder
    deletedBy?: SortOrder
    updatedBy?: SortOrder
  }

  export type PurchaseCountOrderByAggregateInput = {
    purchaseId?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrder
    createdBy?: SortOrder
    deletedBy?: SortOrder
    updatedBy?: SortOrder
    updatedAt?: SortOrder
    isDeleted?: SortOrder
    productId?: SortOrder
  }

  export type PurchaseAvgOrderByAggregateInput = {
    purchaseId?: SortOrder
    createdBy?: SortOrder
    deletedBy?: SortOrder
    updatedBy?: SortOrder
    productId?: SortOrder
  }

  export type PurchaseMaxOrderByAggregateInput = {
    purchaseId?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrder
    createdBy?: SortOrder
    deletedBy?: SortOrder
    updatedBy?: SortOrder
    updatedAt?: SortOrder
    isDeleted?: SortOrder
    productId?: SortOrder
  }

  export type PurchaseMinOrderByAggregateInput = {
    purchaseId?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrder
    createdBy?: SortOrder
    deletedBy?: SortOrder
    updatedBy?: SortOrder
    updatedAt?: SortOrder
    isDeleted?: SortOrder
    productId?: SortOrder
  }

  export type PurchaseSumOrderByAggregateInput = {
    purchaseId?: SortOrder
    createdBy?: SortOrder
    deletedBy?: SortOrder
    updatedBy?: SortOrder
    productId?: SortOrder
  }

  export type ProductScalarRelationFilter = {
    is?: ProductWhereInput
    isNot?: ProductWhereInput
  }

  export type PurchaseScalarRelationFilter = {
    is?: PurchaseWhereInput
    isNot?: PurchaseWhereInput
  }

  export type ProductPurchaseCountOrderByAggregateInput = {
    productPurchaseId?: SortOrder
    purchasePrice?: SortOrder
    purchaseQuantity?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrder
    createdBy?: SortOrder
    deletedBy?: SortOrder
    updatedBy?: SortOrder
    updatedAt?: SortOrder
    isDeleted?: SortOrder
    productId?: SortOrder
    purchaseId?: SortOrder
  }

  export type ProductPurchaseAvgOrderByAggregateInput = {
    productPurchaseId?: SortOrder
    purchasePrice?: SortOrder
    purchaseQuantity?: SortOrder
    createdBy?: SortOrder
    deletedBy?: SortOrder
    updatedBy?: SortOrder
    productId?: SortOrder
    purchaseId?: SortOrder
  }

  export type ProductPurchaseMaxOrderByAggregateInput = {
    productPurchaseId?: SortOrder
    purchasePrice?: SortOrder
    purchaseQuantity?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrder
    createdBy?: SortOrder
    deletedBy?: SortOrder
    updatedBy?: SortOrder
    updatedAt?: SortOrder
    isDeleted?: SortOrder
    productId?: SortOrder
    purchaseId?: SortOrder
  }

  export type ProductPurchaseMinOrderByAggregateInput = {
    productPurchaseId?: SortOrder
    purchasePrice?: SortOrder
    purchaseQuantity?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrder
    createdBy?: SortOrder
    deletedBy?: SortOrder
    updatedBy?: SortOrder
    updatedAt?: SortOrder
    isDeleted?: SortOrder
    productId?: SortOrder
    purchaseId?: SortOrder
  }

  export type ProductPurchaseSumOrderByAggregateInput = {
    productPurchaseId?: SortOrder
    purchasePrice?: SortOrder
    purchaseQuantity?: SortOrder
    createdBy?: SortOrder
    deletedBy?: SortOrder
    updatedBy?: SortOrder
    productId?: SortOrder
    purchaseId?: SortOrder
  }

  export type SaleScalarRelationFilter = {
    is?: SaleWhereInput
    isNot?: SaleWhereInput
  }

  export type ProductSaleCountOrderByAggregateInput = {
    productSaleId?: SortOrder
    salePrice?: SortOrder
    saleQuantity?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrder
    createdBy?: SortOrder
    deletedBy?: SortOrder
    updatedBy?: SortOrder
    updatedAt?: SortOrder
    isDeleted?: SortOrder
    productId?: SortOrder
    saleId?: SortOrder
  }

  export type ProductSaleAvgOrderByAggregateInput = {
    productSaleId?: SortOrder
    salePrice?: SortOrder
    saleQuantity?: SortOrder
    createdBy?: SortOrder
    deletedBy?: SortOrder
    updatedBy?: SortOrder
    productId?: SortOrder
    saleId?: SortOrder
  }

  export type ProductSaleMaxOrderByAggregateInput = {
    productSaleId?: SortOrder
    salePrice?: SortOrder
    saleQuantity?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrder
    createdBy?: SortOrder
    deletedBy?: SortOrder
    updatedBy?: SortOrder
    updatedAt?: SortOrder
    isDeleted?: SortOrder
    productId?: SortOrder
    saleId?: SortOrder
  }

  export type ProductSaleMinOrderByAggregateInput = {
    productSaleId?: SortOrder
    salePrice?: SortOrder
    saleQuantity?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrder
    createdBy?: SortOrder
    deletedBy?: SortOrder
    updatedBy?: SortOrder
    updatedAt?: SortOrder
    isDeleted?: SortOrder
    productId?: SortOrder
    saleId?: SortOrder
  }

  export type ProductSaleSumOrderByAggregateInput = {
    productSaleId?: SortOrder
    salePrice?: SortOrder
    saleQuantity?: SortOrder
    createdBy?: SortOrder
    deletedBy?: SortOrder
    updatedBy?: SortOrder
    productId?: SortOrder
    saleId?: SortOrder
  }

  export type RoleCreateNestedManyWithoutCreatedByUserInput = {
    create?: XOR<RoleCreateWithoutCreatedByUserInput, RoleUncheckedCreateWithoutCreatedByUserInput> | RoleCreateWithoutCreatedByUserInput[] | RoleUncheckedCreateWithoutCreatedByUserInput[]
    connectOrCreate?: RoleCreateOrConnectWithoutCreatedByUserInput | RoleCreateOrConnectWithoutCreatedByUserInput[]
    createMany?: RoleCreateManyCreatedByUserInputEnvelope
    connect?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
  }

  export type RoleCreateNestedManyWithoutDeletedByUserInput = {
    create?: XOR<RoleCreateWithoutDeletedByUserInput, RoleUncheckedCreateWithoutDeletedByUserInput> | RoleCreateWithoutDeletedByUserInput[] | RoleUncheckedCreateWithoutDeletedByUserInput[]
    connectOrCreate?: RoleCreateOrConnectWithoutDeletedByUserInput | RoleCreateOrConnectWithoutDeletedByUserInput[]
    createMany?: RoleCreateManyDeletedByUserInputEnvelope
    connect?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
  }

  export type RoleCreateNestedManyWithoutUpdatedByUserInput = {
    create?: XOR<RoleCreateWithoutUpdatedByUserInput, RoleUncheckedCreateWithoutUpdatedByUserInput> | RoleCreateWithoutUpdatedByUserInput[] | RoleUncheckedCreateWithoutUpdatedByUserInput[]
    connectOrCreate?: RoleCreateOrConnectWithoutUpdatedByUserInput | RoleCreateOrConnectWithoutUpdatedByUserInput[]
    createMany?: RoleCreateManyUpdatedByUserInputEnvelope
    connect?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
  }

  export type ProductCreateNestedManyWithoutCreatedByUserInput = {
    create?: XOR<ProductCreateWithoutCreatedByUserInput, ProductUncheckedCreateWithoutCreatedByUserInput> | ProductCreateWithoutCreatedByUserInput[] | ProductUncheckedCreateWithoutCreatedByUserInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCreatedByUserInput | ProductCreateOrConnectWithoutCreatedByUserInput[]
    createMany?: ProductCreateManyCreatedByUserInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type ProductCreateNestedManyWithoutDeletedByUserInput = {
    create?: XOR<ProductCreateWithoutDeletedByUserInput, ProductUncheckedCreateWithoutDeletedByUserInput> | ProductCreateWithoutDeletedByUserInput[] | ProductUncheckedCreateWithoutDeletedByUserInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutDeletedByUserInput | ProductCreateOrConnectWithoutDeletedByUserInput[]
    createMany?: ProductCreateManyDeletedByUserInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type ProductCreateNestedManyWithoutUpdatedByUserInput = {
    create?: XOR<ProductCreateWithoutUpdatedByUserInput, ProductUncheckedCreateWithoutUpdatedByUserInput> | ProductCreateWithoutUpdatedByUserInput[] | ProductUncheckedCreateWithoutUpdatedByUserInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutUpdatedByUserInput | ProductCreateOrConnectWithoutUpdatedByUserInput[]
    createMany?: ProductCreateManyUpdatedByUserInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type SaleCreateNestedManyWithoutCreatedByUserInput = {
    create?: XOR<SaleCreateWithoutCreatedByUserInput, SaleUncheckedCreateWithoutCreatedByUserInput> | SaleCreateWithoutCreatedByUserInput[] | SaleUncheckedCreateWithoutCreatedByUserInput[]
    connectOrCreate?: SaleCreateOrConnectWithoutCreatedByUserInput | SaleCreateOrConnectWithoutCreatedByUserInput[]
    createMany?: SaleCreateManyCreatedByUserInputEnvelope
    connect?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
  }

  export type SaleCreateNestedManyWithoutDeletedByUserInput = {
    create?: XOR<SaleCreateWithoutDeletedByUserInput, SaleUncheckedCreateWithoutDeletedByUserInput> | SaleCreateWithoutDeletedByUserInput[] | SaleUncheckedCreateWithoutDeletedByUserInput[]
    connectOrCreate?: SaleCreateOrConnectWithoutDeletedByUserInput | SaleCreateOrConnectWithoutDeletedByUserInput[]
    createMany?: SaleCreateManyDeletedByUserInputEnvelope
    connect?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
  }

  export type SaleCreateNestedManyWithoutUpdatedByUserInput = {
    create?: XOR<SaleCreateWithoutUpdatedByUserInput, SaleUncheckedCreateWithoutUpdatedByUserInput> | SaleCreateWithoutUpdatedByUserInput[] | SaleUncheckedCreateWithoutUpdatedByUserInput[]
    connectOrCreate?: SaleCreateOrConnectWithoutUpdatedByUserInput | SaleCreateOrConnectWithoutUpdatedByUserInput[]
    createMany?: SaleCreateManyUpdatedByUserInputEnvelope
    connect?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
  }

  export type PurchaseCreateNestedManyWithoutCreatedByUserInput = {
    create?: XOR<PurchaseCreateWithoutCreatedByUserInput, PurchaseUncheckedCreateWithoutCreatedByUserInput> | PurchaseCreateWithoutCreatedByUserInput[] | PurchaseUncheckedCreateWithoutCreatedByUserInput[]
    connectOrCreate?: PurchaseCreateOrConnectWithoutCreatedByUserInput | PurchaseCreateOrConnectWithoutCreatedByUserInput[]
    createMany?: PurchaseCreateManyCreatedByUserInputEnvelope
    connect?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
  }

  export type PurchaseCreateNestedManyWithoutDeletedByUserInput = {
    create?: XOR<PurchaseCreateWithoutDeletedByUserInput, PurchaseUncheckedCreateWithoutDeletedByUserInput> | PurchaseCreateWithoutDeletedByUserInput[] | PurchaseUncheckedCreateWithoutDeletedByUserInput[]
    connectOrCreate?: PurchaseCreateOrConnectWithoutDeletedByUserInput | PurchaseCreateOrConnectWithoutDeletedByUserInput[]
    createMany?: PurchaseCreateManyDeletedByUserInputEnvelope
    connect?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
  }

  export type PurchaseCreateNestedManyWithoutUpdatedByUserInput = {
    create?: XOR<PurchaseCreateWithoutUpdatedByUserInput, PurchaseUncheckedCreateWithoutUpdatedByUserInput> | PurchaseCreateWithoutUpdatedByUserInput[] | PurchaseUncheckedCreateWithoutUpdatedByUserInput[]
    connectOrCreate?: PurchaseCreateOrConnectWithoutUpdatedByUserInput | PurchaseCreateOrConnectWithoutUpdatedByUserInput[]
    createMany?: PurchaseCreateManyUpdatedByUserInputEnvelope
    connect?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
  }

  export type ProductPurchaseCreateNestedManyWithoutCreatedByUserInput = {
    create?: XOR<ProductPurchaseCreateWithoutCreatedByUserInput, ProductPurchaseUncheckedCreateWithoutCreatedByUserInput> | ProductPurchaseCreateWithoutCreatedByUserInput[] | ProductPurchaseUncheckedCreateWithoutCreatedByUserInput[]
    connectOrCreate?: ProductPurchaseCreateOrConnectWithoutCreatedByUserInput | ProductPurchaseCreateOrConnectWithoutCreatedByUserInput[]
    createMany?: ProductPurchaseCreateManyCreatedByUserInputEnvelope
    connect?: ProductPurchaseWhereUniqueInput | ProductPurchaseWhereUniqueInput[]
  }

  export type ProductPurchaseCreateNestedManyWithoutDeletedByUserInput = {
    create?: XOR<ProductPurchaseCreateWithoutDeletedByUserInput, ProductPurchaseUncheckedCreateWithoutDeletedByUserInput> | ProductPurchaseCreateWithoutDeletedByUserInput[] | ProductPurchaseUncheckedCreateWithoutDeletedByUserInput[]
    connectOrCreate?: ProductPurchaseCreateOrConnectWithoutDeletedByUserInput | ProductPurchaseCreateOrConnectWithoutDeletedByUserInput[]
    createMany?: ProductPurchaseCreateManyDeletedByUserInputEnvelope
    connect?: ProductPurchaseWhereUniqueInput | ProductPurchaseWhereUniqueInput[]
  }

  export type ProductPurchaseCreateNestedManyWithoutUpdatedByUserInput = {
    create?: XOR<ProductPurchaseCreateWithoutUpdatedByUserInput, ProductPurchaseUncheckedCreateWithoutUpdatedByUserInput> | ProductPurchaseCreateWithoutUpdatedByUserInput[] | ProductPurchaseUncheckedCreateWithoutUpdatedByUserInput[]
    connectOrCreate?: ProductPurchaseCreateOrConnectWithoutUpdatedByUserInput | ProductPurchaseCreateOrConnectWithoutUpdatedByUserInput[]
    createMany?: ProductPurchaseCreateManyUpdatedByUserInputEnvelope
    connect?: ProductPurchaseWhereUniqueInput | ProductPurchaseWhereUniqueInput[]
  }

  export type ProductSaleCreateNestedManyWithoutCreatedByUserInput = {
    create?: XOR<ProductSaleCreateWithoutCreatedByUserInput, ProductSaleUncheckedCreateWithoutCreatedByUserInput> | ProductSaleCreateWithoutCreatedByUserInput[] | ProductSaleUncheckedCreateWithoutCreatedByUserInput[]
    connectOrCreate?: ProductSaleCreateOrConnectWithoutCreatedByUserInput | ProductSaleCreateOrConnectWithoutCreatedByUserInput[]
    createMany?: ProductSaleCreateManyCreatedByUserInputEnvelope
    connect?: ProductSaleWhereUniqueInput | ProductSaleWhereUniqueInput[]
  }

  export type ProductSaleCreateNestedManyWithoutDeletedByUserInput = {
    create?: XOR<ProductSaleCreateWithoutDeletedByUserInput, ProductSaleUncheckedCreateWithoutDeletedByUserInput> | ProductSaleCreateWithoutDeletedByUserInput[] | ProductSaleUncheckedCreateWithoutDeletedByUserInput[]
    connectOrCreate?: ProductSaleCreateOrConnectWithoutDeletedByUserInput | ProductSaleCreateOrConnectWithoutDeletedByUserInput[]
    createMany?: ProductSaleCreateManyDeletedByUserInputEnvelope
    connect?: ProductSaleWhereUniqueInput | ProductSaleWhereUniqueInput[]
  }

  export type ProductSaleCreateNestedManyWithoutUpdatedByUserInput = {
    create?: XOR<ProductSaleCreateWithoutUpdatedByUserInput, ProductSaleUncheckedCreateWithoutUpdatedByUserInput> | ProductSaleCreateWithoutUpdatedByUserInput[] | ProductSaleUncheckedCreateWithoutUpdatedByUserInput[]
    connectOrCreate?: ProductSaleCreateOrConnectWithoutUpdatedByUserInput | ProductSaleCreateOrConnectWithoutUpdatedByUserInput[]
    createMany?: ProductSaleCreateManyUpdatedByUserInputEnvelope
    connect?: ProductSaleWhereUniqueInput | ProductSaleWhereUniqueInput[]
  }

  export type RoleCreateNestedOneWithoutUsersInput = {
    create?: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
    connectOrCreate?: RoleCreateOrConnectWithoutUsersInput
    connect?: RoleWhereUniqueInput
  }

  export type ProductCreateNestedManyWithoutUserInput = {
    create?: XOR<ProductCreateWithoutUserInput, ProductUncheckedCreateWithoutUserInput> | ProductCreateWithoutUserInput[] | ProductUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutUserInput | ProductCreateOrConnectWithoutUserInput[]
    createMany?: ProductCreateManyUserInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type RoleUncheckedCreateNestedManyWithoutCreatedByUserInput = {
    create?: XOR<RoleCreateWithoutCreatedByUserInput, RoleUncheckedCreateWithoutCreatedByUserInput> | RoleCreateWithoutCreatedByUserInput[] | RoleUncheckedCreateWithoutCreatedByUserInput[]
    connectOrCreate?: RoleCreateOrConnectWithoutCreatedByUserInput | RoleCreateOrConnectWithoutCreatedByUserInput[]
    createMany?: RoleCreateManyCreatedByUserInputEnvelope
    connect?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
  }

  export type RoleUncheckedCreateNestedManyWithoutDeletedByUserInput = {
    create?: XOR<RoleCreateWithoutDeletedByUserInput, RoleUncheckedCreateWithoutDeletedByUserInput> | RoleCreateWithoutDeletedByUserInput[] | RoleUncheckedCreateWithoutDeletedByUserInput[]
    connectOrCreate?: RoleCreateOrConnectWithoutDeletedByUserInput | RoleCreateOrConnectWithoutDeletedByUserInput[]
    createMany?: RoleCreateManyDeletedByUserInputEnvelope
    connect?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
  }

  export type RoleUncheckedCreateNestedManyWithoutUpdatedByUserInput = {
    create?: XOR<RoleCreateWithoutUpdatedByUserInput, RoleUncheckedCreateWithoutUpdatedByUserInput> | RoleCreateWithoutUpdatedByUserInput[] | RoleUncheckedCreateWithoutUpdatedByUserInput[]
    connectOrCreate?: RoleCreateOrConnectWithoutUpdatedByUserInput | RoleCreateOrConnectWithoutUpdatedByUserInput[]
    createMany?: RoleCreateManyUpdatedByUserInputEnvelope
    connect?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
  }

  export type ProductUncheckedCreateNestedManyWithoutCreatedByUserInput = {
    create?: XOR<ProductCreateWithoutCreatedByUserInput, ProductUncheckedCreateWithoutCreatedByUserInput> | ProductCreateWithoutCreatedByUserInput[] | ProductUncheckedCreateWithoutCreatedByUserInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCreatedByUserInput | ProductCreateOrConnectWithoutCreatedByUserInput[]
    createMany?: ProductCreateManyCreatedByUserInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type ProductUncheckedCreateNestedManyWithoutDeletedByUserInput = {
    create?: XOR<ProductCreateWithoutDeletedByUserInput, ProductUncheckedCreateWithoutDeletedByUserInput> | ProductCreateWithoutDeletedByUserInput[] | ProductUncheckedCreateWithoutDeletedByUserInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutDeletedByUserInput | ProductCreateOrConnectWithoutDeletedByUserInput[]
    createMany?: ProductCreateManyDeletedByUserInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type ProductUncheckedCreateNestedManyWithoutUpdatedByUserInput = {
    create?: XOR<ProductCreateWithoutUpdatedByUserInput, ProductUncheckedCreateWithoutUpdatedByUserInput> | ProductCreateWithoutUpdatedByUserInput[] | ProductUncheckedCreateWithoutUpdatedByUserInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutUpdatedByUserInput | ProductCreateOrConnectWithoutUpdatedByUserInput[]
    createMany?: ProductCreateManyUpdatedByUserInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type SaleUncheckedCreateNestedManyWithoutCreatedByUserInput = {
    create?: XOR<SaleCreateWithoutCreatedByUserInput, SaleUncheckedCreateWithoutCreatedByUserInput> | SaleCreateWithoutCreatedByUserInput[] | SaleUncheckedCreateWithoutCreatedByUserInput[]
    connectOrCreate?: SaleCreateOrConnectWithoutCreatedByUserInput | SaleCreateOrConnectWithoutCreatedByUserInput[]
    createMany?: SaleCreateManyCreatedByUserInputEnvelope
    connect?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
  }

  export type SaleUncheckedCreateNestedManyWithoutDeletedByUserInput = {
    create?: XOR<SaleCreateWithoutDeletedByUserInput, SaleUncheckedCreateWithoutDeletedByUserInput> | SaleCreateWithoutDeletedByUserInput[] | SaleUncheckedCreateWithoutDeletedByUserInput[]
    connectOrCreate?: SaleCreateOrConnectWithoutDeletedByUserInput | SaleCreateOrConnectWithoutDeletedByUserInput[]
    createMany?: SaleCreateManyDeletedByUserInputEnvelope
    connect?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
  }

  export type SaleUncheckedCreateNestedManyWithoutUpdatedByUserInput = {
    create?: XOR<SaleCreateWithoutUpdatedByUserInput, SaleUncheckedCreateWithoutUpdatedByUserInput> | SaleCreateWithoutUpdatedByUserInput[] | SaleUncheckedCreateWithoutUpdatedByUserInput[]
    connectOrCreate?: SaleCreateOrConnectWithoutUpdatedByUserInput | SaleCreateOrConnectWithoutUpdatedByUserInput[]
    createMany?: SaleCreateManyUpdatedByUserInputEnvelope
    connect?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
  }

  export type PurchaseUncheckedCreateNestedManyWithoutCreatedByUserInput = {
    create?: XOR<PurchaseCreateWithoutCreatedByUserInput, PurchaseUncheckedCreateWithoutCreatedByUserInput> | PurchaseCreateWithoutCreatedByUserInput[] | PurchaseUncheckedCreateWithoutCreatedByUserInput[]
    connectOrCreate?: PurchaseCreateOrConnectWithoutCreatedByUserInput | PurchaseCreateOrConnectWithoutCreatedByUserInput[]
    createMany?: PurchaseCreateManyCreatedByUserInputEnvelope
    connect?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
  }

  export type PurchaseUncheckedCreateNestedManyWithoutDeletedByUserInput = {
    create?: XOR<PurchaseCreateWithoutDeletedByUserInput, PurchaseUncheckedCreateWithoutDeletedByUserInput> | PurchaseCreateWithoutDeletedByUserInput[] | PurchaseUncheckedCreateWithoutDeletedByUserInput[]
    connectOrCreate?: PurchaseCreateOrConnectWithoutDeletedByUserInput | PurchaseCreateOrConnectWithoutDeletedByUserInput[]
    createMany?: PurchaseCreateManyDeletedByUserInputEnvelope
    connect?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
  }

  export type PurchaseUncheckedCreateNestedManyWithoutUpdatedByUserInput = {
    create?: XOR<PurchaseCreateWithoutUpdatedByUserInput, PurchaseUncheckedCreateWithoutUpdatedByUserInput> | PurchaseCreateWithoutUpdatedByUserInput[] | PurchaseUncheckedCreateWithoutUpdatedByUserInput[]
    connectOrCreate?: PurchaseCreateOrConnectWithoutUpdatedByUserInput | PurchaseCreateOrConnectWithoutUpdatedByUserInput[]
    createMany?: PurchaseCreateManyUpdatedByUserInputEnvelope
    connect?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
  }

  export type ProductPurchaseUncheckedCreateNestedManyWithoutCreatedByUserInput = {
    create?: XOR<ProductPurchaseCreateWithoutCreatedByUserInput, ProductPurchaseUncheckedCreateWithoutCreatedByUserInput> | ProductPurchaseCreateWithoutCreatedByUserInput[] | ProductPurchaseUncheckedCreateWithoutCreatedByUserInput[]
    connectOrCreate?: ProductPurchaseCreateOrConnectWithoutCreatedByUserInput | ProductPurchaseCreateOrConnectWithoutCreatedByUserInput[]
    createMany?: ProductPurchaseCreateManyCreatedByUserInputEnvelope
    connect?: ProductPurchaseWhereUniqueInput | ProductPurchaseWhereUniqueInput[]
  }

  export type ProductPurchaseUncheckedCreateNestedManyWithoutDeletedByUserInput = {
    create?: XOR<ProductPurchaseCreateWithoutDeletedByUserInput, ProductPurchaseUncheckedCreateWithoutDeletedByUserInput> | ProductPurchaseCreateWithoutDeletedByUserInput[] | ProductPurchaseUncheckedCreateWithoutDeletedByUserInput[]
    connectOrCreate?: ProductPurchaseCreateOrConnectWithoutDeletedByUserInput | ProductPurchaseCreateOrConnectWithoutDeletedByUserInput[]
    createMany?: ProductPurchaseCreateManyDeletedByUserInputEnvelope
    connect?: ProductPurchaseWhereUniqueInput | ProductPurchaseWhereUniqueInput[]
  }

  export type ProductPurchaseUncheckedCreateNestedManyWithoutUpdatedByUserInput = {
    create?: XOR<ProductPurchaseCreateWithoutUpdatedByUserInput, ProductPurchaseUncheckedCreateWithoutUpdatedByUserInput> | ProductPurchaseCreateWithoutUpdatedByUserInput[] | ProductPurchaseUncheckedCreateWithoutUpdatedByUserInput[]
    connectOrCreate?: ProductPurchaseCreateOrConnectWithoutUpdatedByUserInput | ProductPurchaseCreateOrConnectWithoutUpdatedByUserInput[]
    createMany?: ProductPurchaseCreateManyUpdatedByUserInputEnvelope
    connect?: ProductPurchaseWhereUniqueInput | ProductPurchaseWhereUniqueInput[]
  }

  export type ProductSaleUncheckedCreateNestedManyWithoutCreatedByUserInput = {
    create?: XOR<ProductSaleCreateWithoutCreatedByUserInput, ProductSaleUncheckedCreateWithoutCreatedByUserInput> | ProductSaleCreateWithoutCreatedByUserInput[] | ProductSaleUncheckedCreateWithoutCreatedByUserInput[]
    connectOrCreate?: ProductSaleCreateOrConnectWithoutCreatedByUserInput | ProductSaleCreateOrConnectWithoutCreatedByUserInput[]
    createMany?: ProductSaleCreateManyCreatedByUserInputEnvelope
    connect?: ProductSaleWhereUniqueInput | ProductSaleWhereUniqueInput[]
  }

  export type ProductSaleUncheckedCreateNestedManyWithoutDeletedByUserInput = {
    create?: XOR<ProductSaleCreateWithoutDeletedByUserInput, ProductSaleUncheckedCreateWithoutDeletedByUserInput> | ProductSaleCreateWithoutDeletedByUserInput[] | ProductSaleUncheckedCreateWithoutDeletedByUserInput[]
    connectOrCreate?: ProductSaleCreateOrConnectWithoutDeletedByUserInput | ProductSaleCreateOrConnectWithoutDeletedByUserInput[]
    createMany?: ProductSaleCreateManyDeletedByUserInputEnvelope
    connect?: ProductSaleWhereUniqueInput | ProductSaleWhereUniqueInput[]
  }

  export type ProductSaleUncheckedCreateNestedManyWithoutUpdatedByUserInput = {
    create?: XOR<ProductSaleCreateWithoutUpdatedByUserInput, ProductSaleUncheckedCreateWithoutUpdatedByUserInput> | ProductSaleCreateWithoutUpdatedByUserInput[] | ProductSaleUncheckedCreateWithoutUpdatedByUserInput[]
    connectOrCreate?: ProductSaleCreateOrConnectWithoutUpdatedByUserInput | ProductSaleCreateOrConnectWithoutUpdatedByUserInput[]
    createMany?: ProductSaleCreateManyUpdatedByUserInputEnvelope
    connect?: ProductSaleWhereUniqueInput | ProductSaleWhereUniqueInput[]
  }

  export type ProductUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ProductCreateWithoutUserInput, ProductUncheckedCreateWithoutUserInput> | ProductCreateWithoutUserInput[] | ProductUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutUserInput | ProductCreateOrConnectWithoutUserInput[]
    createMany?: ProductCreateManyUserInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type RoleUpdateManyWithoutCreatedByUserNestedInput = {
    create?: XOR<RoleCreateWithoutCreatedByUserInput, RoleUncheckedCreateWithoutCreatedByUserInput> | RoleCreateWithoutCreatedByUserInput[] | RoleUncheckedCreateWithoutCreatedByUserInput[]
    connectOrCreate?: RoleCreateOrConnectWithoutCreatedByUserInput | RoleCreateOrConnectWithoutCreatedByUserInput[]
    upsert?: RoleUpsertWithWhereUniqueWithoutCreatedByUserInput | RoleUpsertWithWhereUniqueWithoutCreatedByUserInput[]
    createMany?: RoleCreateManyCreatedByUserInputEnvelope
    set?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    disconnect?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    delete?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    connect?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    update?: RoleUpdateWithWhereUniqueWithoutCreatedByUserInput | RoleUpdateWithWhereUniqueWithoutCreatedByUserInput[]
    updateMany?: RoleUpdateManyWithWhereWithoutCreatedByUserInput | RoleUpdateManyWithWhereWithoutCreatedByUserInput[]
    deleteMany?: RoleScalarWhereInput | RoleScalarWhereInput[]
  }

  export type RoleUpdateManyWithoutDeletedByUserNestedInput = {
    create?: XOR<RoleCreateWithoutDeletedByUserInput, RoleUncheckedCreateWithoutDeletedByUserInput> | RoleCreateWithoutDeletedByUserInput[] | RoleUncheckedCreateWithoutDeletedByUserInput[]
    connectOrCreate?: RoleCreateOrConnectWithoutDeletedByUserInput | RoleCreateOrConnectWithoutDeletedByUserInput[]
    upsert?: RoleUpsertWithWhereUniqueWithoutDeletedByUserInput | RoleUpsertWithWhereUniqueWithoutDeletedByUserInput[]
    createMany?: RoleCreateManyDeletedByUserInputEnvelope
    set?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    disconnect?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    delete?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    connect?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    update?: RoleUpdateWithWhereUniqueWithoutDeletedByUserInput | RoleUpdateWithWhereUniqueWithoutDeletedByUserInput[]
    updateMany?: RoleUpdateManyWithWhereWithoutDeletedByUserInput | RoleUpdateManyWithWhereWithoutDeletedByUserInput[]
    deleteMany?: RoleScalarWhereInput | RoleScalarWhereInput[]
  }

  export type RoleUpdateManyWithoutUpdatedByUserNestedInput = {
    create?: XOR<RoleCreateWithoutUpdatedByUserInput, RoleUncheckedCreateWithoutUpdatedByUserInput> | RoleCreateWithoutUpdatedByUserInput[] | RoleUncheckedCreateWithoutUpdatedByUserInput[]
    connectOrCreate?: RoleCreateOrConnectWithoutUpdatedByUserInput | RoleCreateOrConnectWithoutUpdatedByUserInput[]
    upsert?: RoleUpsertWithWhereUniqueWithoutUpdatedByUserInput | RoleUpsertWithWhereUniqueWithoutUpdatedByUserInput[]
    createMany?: RoleCreateManyUpdatedByUserInputEnvelope
    set?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    disconnect?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    delete?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    connect?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    update?: RoleUpdateWithWhereUniqueWithoutUpdatedByUserInput | RoleUpdateWithWhereUniqueWithoutUpdatedByUserInput[]
    updateMany?: RoleUpdateManyWithWhereWithoutUpdatedByUserInput | RoleUpdateManyWithWhereWithoutUpdatedByUserInput[]
    deleteMany?: RoleScalarWhereInput | RoleScalarWhereInput[]
  }

  export type ProductUpdateManyWithoutCreatedByUserNestedInput = {
    create?: XOR<ProductCreateWithoutCreatedByUserInput, ProductUncheckedCreateWithoutCreatedByUserInput> | ProductCreateWithoutCreatedByUserInput[] | ProductUncheckedCreateWithoutCreatedByUserInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCreatedByUserInput | ProductCreateOrConnectWithoutCreatedByUserInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutCreatedByUserInput | ProductUpsertWithWhereUniqueWithoutCreatedByUserInput[]
    createMany?: ProductCreateManyCreatedByUserInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutCreatedByUserInput | ProductUpdateWithWhereUniqueWithoutCreatedByUserInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutCreatedByUserInput | ProductUpdateManyWithWhereWithoutCreatedByUserInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type ProductUpdateManyWithoutDeletedByUserNestedInput = {
    create?: XOR<ProductCreateWithoutDeletedByUserInput, ProductUncheckedCreateWithoutDeletedByUserInput> | ProductCreateWithoutDeletedByUserInput[] | ProductUncheckedCreateWithoutDeletedByUserInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutDeletedByUserInput | ProductCreateOrConnectWithoutDeletedByUserInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutDeletedByUserInput | ProductUpsertWithWhereUniqueWithoutDeletedByUserInput[]
    createMany?: ProductCreateManyDeletedByUserInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutDeletedByUserInput | ProductUpdateWithWhereUniqueWithoutDeletedByUserInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutDeletedByUserInput | ProductUpdateManyWithWhereWithoutDeletedByUserInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type ProductUpdateManyWithoutUpdatedByUserNestedInput = {
    create?: XOR<ProductCreateWithoutUpdatedByUserInput, ProductUncheckedCreateWithoutUpdatedByUserInput> | ProductCreateWithoutUpdatedByUserInput[] | ProductUncheckedCreateWithoutUpdatedByUserInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutUpdatedByUserInput | ProductCreateOrConnectWithoutUpdatedByUserInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutUpdatedByUserInput | ProductUpsertWithWhereUniqueWithoutUpdatedByUserInput[]
    createMany?: ProductCreateManyUpdatedByUserInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutUpdatedByUserInput | ProductUpdateWithWhereUniqueWithoutUpdatedByUserInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutUpdatedByUserInput | ProductUpdateManyWithWhereWithoutUpdatedByUserInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type SaleUpdateManyWithoutCreatedByUserNestedInput = {
    create?: XOR<SaleCreateWithoutCreatedByUserInput, SaleUncheckedCreateWithoutCreatedByUserInput> | SaleCreateWithoutCreatedByUserInput[] | SaleUncheckedCreateWithoutCreatedByUserInput[]
    connectOrCreate?: SaleCreateOrConnectWithoutCreatedByUserInput | SaleCreateOrConnectWithoutCreatedByUserInput[]
    upsert?: SaleUpsertWithWhereUniqueWithoutCreatedByUserInput | SaleUpsertWithWhereUniqueWithoutCreatedByUserInput[]
    createMany?: SaleCreateManyCreatedByUserInputEnvelope
    set?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    disconnect?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    delete?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    connect?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    update?: SaleUpdateWithWhereUniqueWithoutCreatedByUserInput | SaleUpdateWithWhereUniqueWithoutCreatedByUserInput[]
    updateMany?: SaleUpdateManyWithWhereWithoutCreatedByUserInput | SaleUpdateManyWithWhereWithoutCreatedByUserInput[]
    deleteMany?: SaleScalarWhereInput | SaleScalarWhereInput[]
  }

  export type SaleUpdateManyWithoutDeletedByUserNestedInput = {
    create?: XOR<SaleCreateWithoutDeletedByUserInput, SaleUncheckedCreateWithoutDeletedByUserInput> | SaleCreateWithoutDeletedByUserInput[] | SaleUncheckedCreateWithoutDeletedByUserInput[]
    connectOrCreate?: SaleCreateOrConnectWithoutDeletedByUserInput | SaleCreateOrConnectWithoutDeletedByUserInput[]
    upsert?: SaleUpsertWithWhereUniqueWithoutDeletedByUserInput | SaleUpsertWithWhereUniqueWithoutDeletedByUserInput[]
    createMany?: SaleCreateManyDeletedByUserInputEnvelope
    set?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    disconnect?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    delete?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    connect?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    update?: SaleUpdateWithWhereUniqueWithoutDeletedByUserInput | SaleUpdateWithWhereUniqueWithoutDeletedByUserInput[]
    updateMany?: SaleUpdateManyWithWhereWithoutDeletedByUserInput | SaleUpdateManyWithWhereWithoutDeletedByUserInput[]
    deleteMany?: SaleScalarWhereInput | SaleScalarWhereInput[]
  }

  export type SaleUpdateManyWithoutUpdatedByUserNestedInput = {
    create?: XOR<SaleCreateWithoutUpdatedByUserInput, SaleUncheckedCreateWithoutUpdatedByUserInput> | SaleCreateWithoutUpdatedByUserInput[] | SaleUncheckedCreateWithoutUpdatedByUserInput[]
    connectOrCreate?: SaleCreateOrConnectWithoutUpdatedByUserInput | SaleCreateOrConnectWithoutUpdatedByUserInput[]
    upsert?: SaleUpsertWithWhereUniqueWithoutUpdatedByUserInput | SaleUpsertWithWhereUniqueWithoutUpdatedByUserInput[]
    createMany?: SaleCreateManyUpdatedByUserInputEnvelope
    set?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    disconnect?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    delete?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    connect?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    update?: SaleUpdateWithWhereUniqueWithoutUpdatedByUserInput | SaleUpdateWithWhereUniqueWithoutUpdatedByUserInput[]
    updateMany?: SaleUpdateManyWithWhereWithoutUpdatedByUserInput | SaleUpdateManyWithWhereWithoutUpdatedByUserInput[]
    deleteMany?: SaleScalarWhereInput | SaleScalarWhereInput[]
  }

  export type PurchaseUpdateManyWithoutCreatedByUserNestedInput = {
    create?: XOR<PurchaseCreateWithoutCreatedByUserInput, PurchaseUncheckedCreateWithoutCreatedByUserInput> | PurchaseCreateWithoutCreatedByUserInput[] | PurchaseUncheckedCreateWithoutCreatedByUserInput[]
    connectOrCreate?: PurchaseCreateOrConnectWithoutCreatedByUserInput | PurchaseCreateOrConnectWithoutCreatedByUserInput[]
    upsert?: PurchaseUpsertWithWhereUniqueWithoutCreatedByUserInput | PurchaseUpsertWithWhereUniqueWithoutCreatedByUserInput[]
    createMany?: PurchaseCreateManyCreatedByUserInputEnvelope
    set?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    disconnect?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    delete?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    connect?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    update?: PurchaseUpdateWithWhereUniqueWithoutCreatedByUserInput | PurchaseUpdateWithWhereUniqueWithoutCreatedByUserInput[]
    updateMany?: PurchaseUpdateManyWithWhereWithoutCreatedByUserInput | PurchaseUpdateManyWithWhereWithoutCreatedByUserInput[]
    deleteMany?: PurchaseScalarWhereInput | PurchaseScalarWhereInput[]
  }

  export type PurchaseUpdateManyWithoutDeletedByUserNestedInput = {
    create?: XOR<PurchaseCreateWithoutDeletedByUserInput, PurchaseUncheckedCreateWithoutDeletedByUserInput> | PurchaseCreateWithoutDeletedByUserInput[] | PurchaseUncheckedCreateWithoutDeletedByUserInput[]
    connectOrCreate?: PurchaseCreateOrConnectWithoutDeletedByUserInput | PurchaseCreateOrConnectWithoutDeletedByUserInput[]
    upsert?: PurchaseUpsertWithWhereUniqueWithoutDeletedByUserInput | PurchaseUpsertWithWhereUniqueWithoutDeletedByUserInput[]
    createMany?: PurchaseCreateManyDeletedByUserInputEnvelope
    set?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    disconnect?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    delete?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    connect?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    update?: PurchaseUpdateWithWhereUniqueWithoutDeletedByUserInput | PurchaseUpdateWithWhereUniqueWithoutDeletedByUserInput[]
    updateMany?: PurchaseUpdateManyWithWhereWithoutDeletedByUserInput | PurchaseUpdateManyWithWhereWithoutDeletedByUserInput[]
    deleteMany?: PurchaseScalarWhereInput | PurchaseScalarWhereInput[]
  }

  export type PurchaseUpdateManyWithoutUpdatedByUserNestedInput = {
    create?: XOR<PurchaseCreateWithoutUpdatedByUserInput, PurchaseUncheckedCreateWithoutUpdatedByUserInput> | PurchaseCreateWithoutUpdatedByUserInput[] | PurchaseUncheckedCreateWithoutUpdatedByUserInput[]
    connectOrCreate?: PurchaseCreateOrConnectWithoutUpdatedByUserInput | PurchaseCreateOrConnectWithoutUpdatedByUserInput[]
    upsert?: PurchaseUpsertWithWhereUniqueWithoutUpdatedByUserInput | PurchaseUpsertWithWhereUniqueWithoutUpdatedByUserInput[]
    createMany?: PurchaseCreateManyUpdatedByUserInputEnvelope
    set?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    disconnect?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    delete?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    connect?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    update?: PurchaseUpdateWithWhereUniqueWithoutUpdatedByUserInput | PurchaseUpdateWithWhereUniqueWithoutUpdatedByUserInput[]
    updateMany?: PurchaseUpdateManyWithWhereWithoutUpdatedByUserInput | PurchaseUpdateManyWithWhereWithoutUpdatedByUserInput[]
    deleteMany?: PurchaseScalarWhereInput | PurchaseScalarWhereInput[]
  }

  export type ProductPurchaseUpdateManyWithoutCreatedByUserNestedInput = {
    create?: XOR<ProductPurchaseCreateWithoutCreatedByUserInput, ProductPurchaseUncheckedCreateWithoutCreatedByUserInput> | ProductPurchaseCreateWithoutCreatedByUserInput[] | ProductPurchaseUncheckedCreateWithoutCreatedByUserInput[]
    connectOrCreate?: ProductPurchaseCreateOrConnectWithoutCreatedByUserInput | ProductPurchaseCreateOrConnectWithoutCreatedByUserInput[]
    upsert?: ProductPurchaseUpsertWithWhereUniqueWithoutCreatedByUserInput | ProductPurchaseUpsertWithWhereUniqueWithoutCreatedByUserInput[]
    createMany?: ProductPurchaseCreateManyCreatedByUserInputEnvelope
    set?: ProductPurchaseWhereUniqueInput | ProductPurchaseWhereUniqueInput[]
    disconnect?: ProductPurchaseWhereUniqueInput | ProductPurchaseWhereUniqueInput[]
    delete?: ProductPurchaseWhereUniqueInput | ProductPurchaseWhereUniqueInput[]
    connect?: ProductPurchaseWhereUniqueInput | ProductPurchaseWhereUniqueInput[]
    update?: ProductPurchaseUpdateWithWhereUniqueWithoutCreatedByUserInput | ProductPurchaseUpdateWithWhereUniqueWithoutCreatedByUserInput[]
    updateMany?: ProductPurchaseUpdateManyWithWhereWithoutCreatedByUserInput | ProductPurchaseUpdateManyWithWhereWithoutCreatedByUserInput[]
    deleteMany?: ProductPurchaseScalarWhereInput | ProductPurchaseScalarWhereInput[]
  }

  export type ProductPurchaseUpdateManyWithoutDeletedByUserNestedInput = {
    create?: XOR<ProductPurchaseCreateWithoutDeletedByUserInput, ProductPurchaseUncheckedCreateWithoutDeletedByUserInput> | ProductPurchaseCreateWithoutDeletedByUserInput[] | ProductPurchaseUncheckedCreateWithoutDeletedByUserInput[]
    connectOrCreate?: ProductPurchaseCreateOrConnectWithoutDeletedByUserInput | ProductPurchaseCreateOrConnectWithoutDeletedByUserInput[]
    upsert?: ProductPurchaseUpsertWithWhereUniqueWithoutDeletedByUserInput | ProductPurchaseUpsertWithWhereUniqueWithoutDeletedByUserInput[]
    createMany?: ProductPurchaseCreateManyDeletedByUserInputEnvelope
    set?: ProductPurchaseWhereUniqueInput | ProductPurchaseWhereUniqueInput[]
    disconnect?: ProductPurchaseWhereUniqueInput | ProductPurchaseWhereUniqueInput[]
    delete?: ProductPurchaseWhereUniqueInput | ProductPurchaseWhereUniqueInput[]
    connect?: ProductPurchaseWhereUniqueInput | ProductPurchaseWhereUniqueInput[]
    update?: ProductPurchaseUpdateWithWhereUniqueWithoutDeletedByUserInput | ProductPurchaseUpdateWithWhereUniqueWithoutDeletedByUserInput[]
    updateMany?: ProductPurchaseUpdateManyWithWhereWithoutDeletedByUserInput | ProductPurchaseUpdateManyWithWhereWithoutDeletedByUserInput[]
    deleteMany?: ProductPurchaseScalarWhereInput | ProductPurchaseScalarWhereInput[]
  }

  export type ProductPurchaseUpdateManyWithoutUpdatedByUserNestedInput = {
    create?: XOR<ProductPurchaseCreateWithoutUpdatedByUserInput, ProductPurchaseUncheckedCreateWithoutUpdatedByUserInput> | ProductPurchaseCreateWithoutUpdatedByUserInput[] | ProductPurchaseUncheckedCreateWithoutUpdatedByUserInput[]
    connectOrCreate?: ProductPurchaseCreateOrConnectWithoutUpdatedByUserInput | ProductPurchaseCreateOrConnectWithoutUpdatedByUserInput[]
    upsert?: ProductPurchaseUpsertWithWhereUniqueWithoutUpdatedByUserInput | ProductPurchaseUpsertWithWhereUniqueWithoutUpdatedByUserInput[]
    createMany?: ProductPurchaseCreateManyUpdatedByUserInputEnvelope
    set?: ProductPurchaseWhereUniqueInput | ProductPurchaseWhereUniqueInput[]
    disconnect?: ProductPurchaseWhereUniqueInput | ProductPurchaseWhereUniqueInput[]
    delete?: ProductPurchaseWhereUniqueInput | ProductPurchaseWhereUniqueInput[]
    connect?: ProductPurchaseWhereUniqueInput | ProductPurchaseWhereUniqueInput[]
    update?: ProductPurchaseUpdateWithWhereUniqueWithoutUpdatedByUserInput | ProductPurchaseUpdateWithWhereUniqueWithoutUpdatedByUserInput[]
    updateMany?: ProductPurchaseUpdateManyWithWhereWithoutUpdatedByUserInput | ProductPurchaseUpdateManyWithWhereWithoutUpdatedByUserInput[]
    deleteMany?: ProductPurchaseScalarWhereInput | ProductPurchaseScalarWhereInput[]
  }

  export type ProductSaleUpdateManyWithoutCreatedByUserNestedInput = {
    create?: XOR<ProductSaleCreateWithoutCreatedByUserInput, ProductSaleUncheckedCreateWithoutCreatedByUserInput> | ProductSaleCreateWithoutCreatedByUserInput[] | ProductSaleUncheckedCreateWithoutCreatedByUserInput[]
    connectOrCreate?: ProductSaleCreateOrConnectWithoutCreatedByUserInput | ProductSaleCreateOrConnectWithoutCreatedByUserInput[]
    upsert?: ProductSaleUpsertWithWhereUniqueWithoutCreatedByUserInput | ProductSaleUpsertWithWhereUniqueWithoutCreatedByUserInput[]
    createMany?: ProductSaleCreateManyCreatedByUserInputEnvelope
    set?: ProductSaleWhereUniqueInput | ProductSaleWhereUniqueInput[]
    disconnect?: ProductSaleWhereUniqueInput | ProductSaleWhereUniqueInput[]
    delete?: ProductSaleWhereUniqueInput | ProductSaleWhereUniqueInput[]
    connect?: ProductSaleWhereUniqueInput | ProductSaleWhereUniqueInput[]
    update?: ProductSaleUpdateWithWhereUniqueWithoutCreatedByUserInput | ProductSaleUpdateWithWhereUniqueWithoutCreatedByUserInput[]
    updateMany?: ProductSaleUpdateManyWithWhereWithoutCreatedByUserInput | ProductSaleUpdateManyWithWhereWithoutCreatedByUserInput[]
    deleteMany?: ProductSaleScalarWhereInput | ProductSaleScalarWhereInput[]
  }

  export type ProductSaleUpdateManyWithoutDeletedByUserNestedInput = {
    create?: XOR<ProductSaleCreateWithoutDeletedByUserInput, ProductSaleUncheckedCreateWithoutDeletedByUserInput> | ProductSaleCreateWithoutDeletedByUserInput[] | ProductSaleUncheckedCreateWithoutDeletedByUserInput[]
    connectOrCreate?: ProductSaleCreateOrConnectWithoutDeletedByUserInput | ProductSaleCreateOrConnectWithoutDeletedByUserInput[]
    upsert?: ProductSaleUpsertWithWhereUniqueWithoutDeletedByUserInput | ProductSaleUpsertWithWhereUniqueWithoutDeletedByUserInput[]
    createMany?: ProductSaleCreateManyDeletedByUserInputEnvelope
    set?: ProductSaleWhereUniqueInput | ProductSaleWhereUniqueInput[]
    disconnect?: ProductSaleWhereUniqueInput | ProductSaleWhereUniqueInput[]
    delete?: ProductSaleWhereUniqueInput | ProductSaleWhereUniqueInput[]
    connect?: ProductSaleWhereUniqueInput | ProductSaleWhereUniqueInput[]
    update?: ProductSaleUpdateWithWhereUniqueWithoutDeletedByUserInput | ProductSaleUpdateWithWhereUniqueWithoutDeletedByUserInput[]
    updateMany?: ProductSaleUpdateManyWithWhereWithoutDeletedByUserInput | ProductSaleUpdateManyWithWhereWithoutDeletedByUserInput[]
    deleteMany?: ProductSaleScalarWhereInput | ProductSaleScalarWhereInput[]
  }

  export type ProductSaleUpdateManyWithoutUpdatedByUserNestedInput = {
    create?: XOR<ProductSaleCreateWithoutUpdatedByUserInput, ProductSaleUncheckedCreateWithoutUpdatedByUserInput> | ProductSaleCreateWithoutUpdatedByUserInput[] | ProductSaleUncheckedCreateWithoutUpdatedByUserInput[]
    connectOrCreate?: ProductSaleCreateOrConnectWithoutUpdatedByUserInput | ProductSaleCreateOrConnectWithoutUpdatedByUserInput[]
    upsert?: ProductSaleUpsertWithWhereUniqueWithoutUpdatedByUserInput | ProductSaleUpsertWithWhereUniqueWithoutUpdatedByUserInput[]
    createMany?: ProductSaleCreateManyUpdatedByUserInputEnvelope
    set?: ProductSaleWhereUniqueInput | ProductSaleWhereUniqueInput[]
    disconnect?: ProductSaleWhereUniqueInput | ProductSaleWhereUniqueInput[]
    delete?: ProductSaleWhereUniqueInput | ProductSaleWhereUniqueInput[]
    connect?: ProductSaleWhereUniqueInput | ProductSaleWhereUniqueInput[]
    update?: ProductSaleUpdateWithWhereUniqueWithoutUpdatedByUserInput | ProductSaleUpdateWithWhereUniqueWithoutUpdatedByUserInput[]
    updateMany?: ProductSaleUpdateManyWithWhereWithoutUpdatedByUserInput | ProductSaleUpdateManyWithWhereWithoutUpdatedByUserInput[]
    deleteMany?: ProductSaleScalarWhereInput | ProductSaleScalarWhereInput[]
  }

  export type RoleUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
    connectOrCreate?: RoleCreateOrConnectWithoutUsersInput
    upsert?: RoleUpsertWithoutUsersInput
    connect?: RoleWhereUniqueInput
    update?: XOR<XOR<RoleUpdateToOneWithWhereWithoutUsersInput, RoleUpdateWithoutUsersInput>, RoleUncheckedUpdateWithoutUsersInput>
  }

  export type ProductUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProductCreateWithoutUserInput, ProductUncheckedCreateWithoutUserInput> | ProductCreateWithoutUserInput[] | ProductUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutUserInput | ProductCreateOrConnectWithoutUserInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutUserInput | ProductUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProductCreateManyUserInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutUserInput | ProductUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutUserInput | ProductUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type RoleUncheckedUpdateManyWithoutCreatedByUserNestedInput = {
    create?: XOR<RoleCreateWithoutCreatedByUserInput, RoleUncheckedCreateWithoutCreatedByUserInput> | RoleCreateWithoutCreatedByUserInput[] | RoleUncheckedCreateWithoutCreatedByUserInput[]
    connectOrCreate?: RoleCreateOrConnectWithoutCreatedByUserInput | RoleCreateOrConnectWithoutCreatedByUserInput[]
    upsert?: RoleUpsertWithWhereUniqueWithoutCreatedByUserInput | RoleUpsertWithWhereUniqueWithoutCreatedByUserInput[]
    createMany?: RoleCreateManyCreatedByUserInputEnvelope
    set?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    disconnect?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    delete?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    connect?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    update?: RoleUpdateWithWhereUniqueWithoutCreatedByUserInput | RoleUpdateWithWhereUniqueWithoutCreatedByUserInput[]
    updateMany?: RoleUpdateManyWithWhereWithoutCreatedByUserInput | RoleUpdateManyWithWhereWithoutCreatedByUserInput[]
    deleteMany?: RoleScalarWhereInput | RoleScalarWhereInput[]
  }

  export type RoleUncheckedUpdateManyWithoutDeletedByUserNestedInput = {
    create?: XOR<RoleCreateWithoutDeletedByUserInput, RoleUncheckedCreateWithoutDeletedByUserInput> | RoleCreateWithoutDeletedByUserInput[] | RoleUncheckedCreateWithoutDeletedByUserInput[]
    connectOrCreate?: RoleCreateOrConnectWithoutDeletedByUserInput | RoleCreateOrConnectWithoutDeletedByUserInput[]
    upsert?: RoleUpsertWithWhereUniqueWithoutDeletedByUserInput | RoleUpsertWithWhereUniqueWithoutDeletedByUserInput[]
    createMany?: RoleCreateManyDeletedByUserInputEnvelope
    set?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    disconnect?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    delete?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    connect?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    update?: RoleUpdateWithWhereUniqueWithoutDeletedByUserInput | RoleUpdateWithWhereUniqueWithoutDeletedByUserInput[]
    updateMany?: RoleUpdateManyWithWhereWithoutDeletedByUserInput | RoleUpdateManyWithWhereWithoutDeletedByUserInput[]
    deleteMany?: RoleScalarWhereInput | RoleScalarWhereInput[]
  }

  export type RoleUncheckedUpdateManyWithoutUpdatedByUserNestedInput = {
    create?: XOR<RoleCreateWithoutUpdatedByUserInput, RoleUncheckedCreateWithoutUpdatedByUserInput> | RoleCreateWithoutUpdatedByUserInput[] | RoleUncheckedCreateWithoutUpdatedByUserInput[]
    connectOrCreate?: RoleCreateOrConnectWithoutUpdatedByUserInput | RoleCreateOrConnectWithoutUpdatedByUserInput[]
    upsert?: RoleUpsertWithWhereUniqueWithoutUpdatedByUserInput | RoleUpsertWithWhereUniqueWithoutUpdatedByUserInput[]
    createMany?: RoleCreateManyUpdatedByUserInputEnvelope
    set?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    disconnect?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    delete?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    connect?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    update?: RoleUpdateWithWhereUniqueWithoutUpdatedByUserInput | RoleUpdateWithWhereUniqueWithoutUpdatedByUserInput[]
    updateMany?: RoleUpdateManyWithWhereWithoutUpdatedByUserInput | RoleUpdateManyWithWhereWithoutUpdatedByUserInput[]
    deleteMany?: RoleScalarWhereInput | RoleScalarWhereInput[]
  }

  export type ProductUncheckedUpdateManyWithoutCreatedByUserNestedInput = {
    create?: XOR<ProductCreateWithoutCreatedByUserInput, ProductUncheckedCreateWithoutCreatedByUserInput> | ProductCreateWithoutCreatedByUserInput[] | ProductUncheckedCreateWithoutCreatedByUserInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCreatedByUserInput | ProductCreateOrConnectWithoutCreatedByUserInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutCreatedByUserInput | ProductUpsertWithWhereUniqueWithoutCreatedByUserInput[]
    createMany?: ProductCreateManyCreatedByUserInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutCreatedByUserInput | ProductUpdateWithWhereUniqueWithoutCreatedByUserInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutCreatedByUserInput | ProductUpdateManyWithWhereWithoutCreatedByUserInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type ProductUncheckedUpdateManyWithoutDeletedByUserNestedInput = {
    create?: XOR<ProductCreateWithoutDeletedByUserInput, ProductUncheckedCreateWithoutDeletedByUserInput> | ProductCreateWithoutDeletedByUserInput[] | ProductUncheckedCreateWithoutDeletedByUserInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutDeletedByUserInput | ProductCreateOrConnectWithoutDeletedByUserInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutDeletedByUserInput | ProductUpsertWithWhereUniqueWithoutDeletedByUserInput[]
    createMany?: ProductCreateManyDeletedByUserInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutDeletedByUserInput | ProductUpdateWithWhereUniqueWithoutDeletedByUserInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutDeletedByUserInput | ProductUpdateManyWithWhereWithoutDeletedByUserInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type ProductUncheckedUpdateManyWithoutUpdatedByUserNestedInput = {
    create?: XOR<ProductCreateWithoutUpdatedByUserInput, ProductUncheckedCreateWithoutUpdatedByUserInput> | ProductCreateWithoutUpdatedByUserInput[] | ProductUncheckedCreateWithoutUpdatedByUserInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutUpdatedByUserInput | ProductCreateOrConnectWithoutUpdatedByUserInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutUpdatedByUserInput | ProductUpsertWithWhereUniqueWithoutUpdatedByUserInput[]
    createMany?: ProductCreateManyUpdatedByUserInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutUpdatedByUserInput | ProductUpdateWithWhereUniqueWithoutUpdatedByUserInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutUpdatedByUserInput | ProductUpdateManyWithWhereWithoutUpdatedByUserInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type SaleUncheckedUpdateManyWithoutCreatedByUserNestedInput = {
    create?: XOR<SaleCreateWithoutCreatedByUserInput, SaleUncheckedCreateWithoutCreatedByUserInput> | SaleCreateWithoutCreatedByUserInput[] | SaleUncheckedCreateWithoutCreatedByUserInput[]
    connectOrCreate?: SaleCreateOrConnectWithoutCreatedByUserInput | SaleCreateOrConnectWithoutCreatedByUserInput[]
    upsert?: SaleUpsertWithWhereUniqueWithoutCreatedByUserInput | SaleUpsertWithWhereUniqueWithoutCreatedByUserInput[]
    createMany?: SaleCreateManyCreatedByUserInputEnvelope
    set?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    disconnect?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    delete?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    connect?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    update?: SaleUpdateWithWhereUniqueWithoutCreatedByUserInput | SaleUpdateWithWhereUniqueWithoutCreatedByUserInput[]
    updateMany?: SaleUpdateManyWithWhereWithoutCreatedByUserInput | SaleUpdateManyWithWhereWithoutCreatedByUserInput[]
    deleteMany?: SaleScalarWhereInput | SaleScalarWhereInput[]
  }

  export type SaleUncheckedUpdateManyWithoutDeletedByUserNestedInput = {
    create?: XOR<SaleCreateWithoutDeletedByUserInput, SaleUncheckedCreateWithoutDeletedByUserInput> | SaleCreateWithoutDeletedByUserInput[] | SaleUncheckedCreateWithoutDeletedByUserInput[]
    connectOrCreate?: SaleCreateOrConnectWithoutDeletedByUserInput | SaleCreateOrConnectWithoutDeletedByUserInput[]
    upsert?: SaleUpsertWithWhereUniqueWithoutDeletedByUserInput | SaleUpsertWithWhereUniqueWithoutDeletedByUserInput[]
    createMany?: SaleCreateManyDeletedByUserInputEnvelope
    set?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    disconnect?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    delete?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    connect?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    update?: SaleUpdateWithWhereUniqueWithoutDeletedByUserInput | SaleUpdateWithWhereUniqueWithoutDeletedByUserInput[]
    updateMany?: SaleUpdateManyWithWhereWithoutDeletedByUserInput | SaleUpdateManyWithWhereWithoutDeletedByUserInput[]
    deleteMany?: SaleScalarWhereInput | SaleScalarWhereInput[]
  }

  export type SaleUncheckedUpdateManyWithoutUpdatedByUserNestedInput = {
    create?: XOR<SaleCreateWithoutUpdatedByUserInput, SaleUncheckedCreateWithoutUpdatedByUserInput> | SaleCreateWithoutUpdatedByUserInput[] | SaleUncheckedCreateWithoutUpdatedByUserInput[]
    connectOrCreate?: SaleCreateOrConnectWithoutUpdatedByUserInput | SaleCreateOrConnectWithoutUpdatedByUserInput[]
    upsert?: SaleUpsertWithWhereUniqueWithoutUpdatedByUserInput | SaleUpsertWithWhereUniqueWithoutUpdatedByUserInput[]
    createMany?: SaleCreateManyUpdatedByUserInputEnvelope
    set?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    disconnect?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    delete?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    connect?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    update?: SaleUpdateWithWhereUniqueWithoutUpdatedByUserInput | SaleUpdateWithWhereUniqueWithoutUpdatedByUserInput[]
    updateMany?: SaleUpdateManyWithWhereWithoutUpdatedByUserInput | SaleUpdateManyWithWhereWithoutUpdatedByUserInput[]
    deleteMany?: SaleScalarWhereInput | SaleScalarWhereInput[]
  }

  export type PurchaseUncheckedUpdateManyWithoutCreatedByUserNestedInput = {
    create?: XOR<PurchaseCreateWithoutCreatedByUserInput, PurchaseUncheckedCreateWithoutCreatedByUserInput> | PurchaseCreateWithoutCreatedByUserInput[] | PurchaseUncheckedCreateWithoutCreatedByUserInput[]
    connectOrCreate?: PurchaseCreateOrConnectWithoutCreatedByUserInput | PurchaseCreateOrConnectWithoutCreatedByUserInput[]
    upsert?: PurchaseUpsertWithWhereUniqueWithoutCreatedByUserInput | PurchaseUpsertWithWhereUniqueWithoutCreatedByUserInput[]
    createMany?: PurchaseCreateManyCreatedByUserInputEnvelope
    set?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    disconnect?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    delete?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    connect?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    update?: PurchaseUpdateWithWhereUniqueWithoutCreatedByUserInput | PurchaseUpdateWithWhereUniqueWithoutCreatedByUserInput[]
    updateMany?: PurchaseUpdateManyWithWhereWithoutCreatedByUserInput | PurchaseUpdateManyWithWhereWithoutCreatedByUserInput[]
    deleteMany?: PurchaseScalarWhereInput | PurchaseScalarWhereInput[]
  }

  export type PurchaseUncheckedUpdateManyWithoutDeletedByUserNestedInput = {
    create?: XOR<PurchaseCreateWithoutDeletedByUserInput, PurchaseUncheckedCreateWithoutDeletedByUserInput> | PurchaseCreateWithoutDeletedByUserInput[] | PurchaseUncheckedCreateWithoutDeletedByUserInput[]
    connectOrCreate?: PurchaseCreateOrConnectWithoutDeletedByUserInput | PurchaseCreateOrConnectWithoutDeletedByUserInput[]
    upsert?: PurchaseUpsertWithWhereUniqueWithoutDeletedByUserInput | PurchaseUpsertWithWhereUniqueWithoutDeletedByUserInput[]
    createMany?: PurchaseCreateManyDeletedByUserInputEnvelope
    set?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    disconnect?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    delete?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    connect?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    update?: PurchaseUpdateWithWhereUniqueWithoutDeletedByUserInput | PurchaseUpdateWithWhereUniqueWithoutDeletedByUserInput[]
    updateMany?: PurchaseUpdateManyWithWhereWithoutDeletedByUserInput | PurchaseUpdateManyWithWhereWithoutDeletedByUserInput[]
    deleteMany?: PurchaseScalarWhereInput | PurchaseScalarWhereInput[]
  }

  export type PurchaseUncheckedUpdateManyWithoutUpdatedByUserNestedInput = {
    create?: XOR<PurchaseCreateWithoutUpdatedByUserInput, PurchaseUncheckedCreateWithoutUpdatedByUserInput> | PurchaseCreateWithoutUpdatedByUserInput[] | PurchaseUncheckedCreateWithoutUpdatedByUserInput[]
    connectOrCreate?: PurchaseCreateOrConnectWithoutUpdatedByUserInput | PurchaseCreateOrConnectWithoutUpdatedByUserInput[]
    upsert?: PurchaseUpsertWithWhereUniqueWithoutUpdatedByUserInput | PurchaseUpsertWithWhereUniqueWithoutUpdatedByUserInput[]
    createMany?: PurchaseCreateManyUpdatedByUserInputEnvelope
    set?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    disconnect?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    delete?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    connect?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    update?: PurchaseUpdateWithWhereUniqueWithoutUpdatedByUserInput | PurchaseUpdateWithWhereUniqueWithoutUpdatedByUserInput[]
    updateMany?: PurchaseUpdateManyWithWhereWithoutUpdatedByUserInput | PurchaseUpdateManyWithWhereWithoutUpdatedByUserInput[]
    deleteMany?: PurchaseScalarWhereInput | PurchaseScalarWhereInput[]
  }

  export type ProductPurchaseUncheckedUpdateManyWithoutCreatedByUserNestedInput = {
    create?: XOR<ProductPurchaseCreateWithoutCreatedByUserInput, ProductPurchaseUncheckedCreateWithoutCreatedByUserInput> | ProductPurchaseCreateWithoutCreatedByUserInput[] | ProductPurchaseUncheckedCreateWithoutCreatedByUserInput[]
    connectOrCreate?: ProductPurchaseCreateOrConnectWithoutCreatedByUserInput | ProductPurchaseCreateOrConnectWithoutCreatedByUserInput[]
    upsert?: ProductPurchaseUpsertWithWhereUniqueWithoutCreatedByUserInput | ProductPurchaseUpsertWithWhereUniqueWithoutCreatedByUserInput[]
    createMany?: ProductPurchaseCreateManyCreatedByUserInputEnvelope
    set?: ProductPurchaseWhereUniqueInput | ProductPurchaseWhereUniqueInput[]
    disconnect?: ProductPurchaseWhereUniqueInput | ProductPurchaseWhereUniqueInput[]
    delete?: ProductPurchaseWhereUniqueInput | ProductPurchaseWhereUniqueInput[]
    connect?: ProductPurchaseWhereUniqueInput | ProductPurchaseWhereUniqueInput[]
    update?: ProductPurchaseUpdateWithWhereUniqueWithoutCreatedByUserInput | ProductPurchaseUpdateWithWhereUniqueWithoutCreatedByUserInput[]
    updateMany?: ProductPurchaseUpdateManyWithWhereWithoutCreatedByUserInput | ProductPurchaseUpdateManyWithWhereWithoutCreatedByUserInput[]
    deleteMany?: ProductPurchaseScalarWhereInput | ProductPurchaseScalarWhereInput[]
  }

  export type ProductPurchaseUncheckedUpdateManyWithoutDeletedByUserNestedInput = {
    create?: XOR<ProductPurchaseCreateWithoutDeletedByUserInput, ProductPurchaseUncheckedCreateWithoutDeletedByUserInput> | ProductPurchaseCreateWithoutDeletedByUserInput[] | ProductPurchaseUncheckedCreateWithoutDeletedByUserInput[]
    connectOrCreate?: ProductPurchaseCreateOrConnectWithoutDeletedByUserInput | ProductPurchaseCreateOrConnectWithoutDeletedByUserInput[]
    upsert?: ProductPurchaseUpsertWithWhereUniqueWithoutDeletedByUserInput | ProductPurchaseUpsertWithWhereUniqueWithoutDeletedByUserInput[]
    createMany?: ProductPurchaseCreateManyDeletedByUserInputEnvelope
    set?: ProductPurchaseWhereUniqueInput | ProductPurchaseWhereUniqueInput[]
    disconnect?: ProductPurchaseWhereUniqueInput | ProductPurchaseWhereUniqueInput[]
    delete?: ProductPurchaseWhereUniqueInput | ProductPurchaseWhereUniqueInput[]
    connect?: ProductPurchaseWhereUniqueInput | ProductPurchaseWhereUniqueInput[]
    update?: ProductPurchaseUpdateWithWhereUniqueWithoutDeletedByUserInput | ProductPurchaseUpdateWithWhereUniqueWithoutDeletedByUserInput[]
    updateMany?: ProductPurchaseUpdateManyWithWhereWithoutDeletedByUserInput | ProductPurchaseUpdateManyWithWhereWithoutDeletedByUserInput[]
    deleteMany?: ProductPurchaseScalarWhereInput | ProductPurchaseScalarWhereInput[]
  }

  export type ProductPurchaseUncheckedUpdateManyWithoutUpdatedByUserNestedInput = {
    create?: XOR<ProductPurchaseCreateWithoutUpdatedByUserInput, ProductPurchaseUncheckedCreateWithoutUpdatedByUserInput> | ProductPurchaseCreateWithoutUpdatedByUserInput[] | ProductPurchaseUncheckedCreateWithoutUpdatedByUserInput[]
    connectOrCreate?: ProductPurchaseCreateOrConnectWithoutUpdatedByUserInput | ProductPurchaseCreateOrConnectWithoutUpdatedByUserInput[]
    upsert?: ProductPurchaseUpsertWithWhereUniqueWithoutUpdatedByUserInput | ProductPurchaseUpsertWithWhereUniqueWithoutUpdatedByUserInput[]
    createMany?: ProductPurchaseCreateManyUpdatedByUserInputEnvelope
    set?: ProductPurchaseWhereUniqueInput | ProductPurchaseWhereUniqueInput[]
    disconnect?: ProductPurchaseWhereUniqueInput | ProductPurchaseWhereUniqueInput[]
    delete?: ProductPurchaseWhereUniqueInput | ProductPurchaseWhereUniqueInput[]
    connect?: ProductPurchaseWhereUniqueInput | ProductPurchaseWhereUniqueInput[]
    update?: ProductPurchaseUpdateWithWhereUniqueWithoutUpdatedByUserInput | ProductPurchaseUpdateWithWhereUniqueWithoutUpdatedByUserInput[]
    updateMany?: ProductPurchaseUpdateManyWithWhereWithoutUpdatedByUserInput | ProductPurchaseUpdateManyWithWhereWithoutUpdatedByUserInput[]
    deleteMany?: ProductPurchaseScalarWhereInput | ProductPurchaseScalarWhereInput[]
  }

  export type ProductSaleUncheckedUpdateManyWithoutCreatedByUserNestedInput = {
    create?: XOR<ProductSaleCreateWithoutCreatedByUserInput, ProductSaleUncheckedCreateWithoutCreatedByUserInput> | ProductSaleCreateWithoutCreatedByUserInput[] | ProductSaleUncheckedCreateWithoutCreatedByUserInput[]
    connectOrCreate?: ProductSaleCreateOrConnectWithoutCreatedByUserInput | ProductSaleCreateOrConnectWithoutCreatedByUserInput[]
    upsert?: ProductSaleUpsertWithWhereUniqueWithoutCreatedByUserInput | ProductSaleUpsertWithWhereUniqueWithoutCreatedByUserInput[]
    createMany?: ProductSaleCreateManyCreatedByUserInputEnvelope
    set?: ProductSaleWhereUniqueInput | ProductSaleWhereUniqueInput[]
    disconnect?: ProductSaleWhereUniqueInput | ProductSaleWhereUniqueInput[]
    delete?: ProductSaleWhereUniqueInput | ProductSaleWhereUniqueInput[]
    connect?: ProductSaleWhereUniqueInput | ProductSaleWhereUniqueInput[]
    update?: ProductSaleUpdateWithWhereUniqueWithoutCreatedByUserInput | ProductSaleUpdateWithWhereUniqueWithoutCreatedByUserInput[]
    updateMany?: ProductSaleUpdateManyWithWhereWithoutCreatedByUserInput | ProductSaleUpdateManyWithWhereWithoutCreatedByUserInput[]
    deleteMany?: ProductSaleScalarWhereInput | ProductSaleScalarWhereInput[]
  }

  export type ProductSaleUncheckedUpdateManyWithoutDeletedByUserNestedInput = {
    create?: XOR<ProductSaleCreateWithoutDeletedByUserInput, ProductSaleUncheckedCreateWithoutDeletedByUserInput> | ProductSaleCreateWithoutDeletedByUserInput[] | ProductSaleUncheckedCreateWithoutDeletedByUserInput[]
    connectOrCreate?: ProductSaleCreateOrConnectWithoutDeletedByUserInput | ProductSaleCreateOrConnectWithoutDeletedByUserInput[]
    upsert?: ProductSaleUpsertWithWhereUniqueWithoutDeletedByUserInput | ProductSaleUpsertWithWhereUniqueWithoutDeletedByUserInput[]
    createMany?: ProductSaleCreateManyDeletedByUserInputEnvelope
    set?: ProductSaleWhereUniqueInput | ProductSaleWhereUniqueInput[]
    disconnect?: ProductSaleWhereUniqueInput | ProductSaleWhereUniqueInput[]
    delete?: ProductSaleWhereUniqueInput | ProductSaleWhereUniqueInput[]
    connect?: ProductSaleWhereUniqueInput | ProductSaleWhereUniqueInput[]
    update?: ProductSaleUpdateWithWhereUniqueWithoutDeletedByUserInput | ProductSaleUpdateWithWhereUniqueWithoutDeletedByUserInput[]
    updateMany?: ProductSaleUpdateManyWithWhereWithoutDeletedByUserInput | ProductSaleUpdateManyWithWhereWithoutDeletedByUserInput[]
    deleteMany?: ProductSaleScalarWhereInput | ProductSaleScalarWhereInput[]
  }

  export type ProductSaleUncheckedUpdateManyWithoutUpdatedByUserNestedInput = {
    create?: XOR<ProductSaleCreateWithoutUpdatedByUserInput, ProductSaleUncheckedCreateWithoutUpdatedByUserInput> | ProductSaleCreateWithoutUpdatedByUserInput[] | ProductSaleUncheckedCreateWithoutUpdatedByUserInput[]
    connectOrCreate?: ProductSaleCreateOrConnectWithoutUpdatedByUserInput | ProductSaleCreateOrConnectWithoutUpdatedByUserInput[]
    upsert?: ProductSaleUpsertWithWhereUniqueWithoutUpdatedByUserInput | ProductSaleUpsertWithWhereUniqueWithoutUpdatedByUserInput[]
    createMany?: ProductSaleCreateManyUpdatedByUserInputEnvelope
    set?: ProductSaleWhereUniqueInput | ProductSaleWhereUniqueInput[]
    disconnect?: ProductSaleWhereUniqueInput | ProductSaleWhereUniqueInput[]
    delete?: ProductSaleWhereUniqueInput | ProductSaleWhereUniqueInput[]
    connect?: ProductSaleWhereUniqueInput | ProductSaleWhereUniqueInput[]
    update?: ProductSaleUpdateWithWhereUniqueWithoutUpdatedByUserInput | ProductSaleUpdateWithWhereUniqueWithoutUpdatedByUserInput[]
    updateMany?: ProductSaleUpdateManyWithWhereWithoutUpdatedByUserInput | ProductSaleUpdateManyWithWhereWithoutUpdatedByUserInput[]
    deleteMany?: ProductSaleScalarWhereInput | ProductSaleScalarWhereInput[]
  }

  export type ProductUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProductCreateWithoutUserInput, ProductUncheckedCreateWithoutUserInput> | ProductCreateWithoutUserInput[] | ProductUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutUserInput | ProductCreateOrConnectWithoutUserInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutUserInput | ProductUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProductCreateManyUserInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutUserInput | ProductUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutUserInput | ProductUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutCreatedRolesInput = {
    create?: XOR<UserCreateWithoutCreatedRolesInput, UserUncheckedCreateWithoutCreatedRolesInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedRolesInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutDeletedRolesInput = {
    create?: XOR<UserCreateWithoutDeletedRolesInput, UserUncheckedCreateWithoutDeletedRolesInput>
    connectOrCreate?: UserCreateOrConnectWithoutDeletedRolesInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutUpdatedRolesInput = {
    create?: XOR<UserCreateWithoutUpdatedRolesInput, UserUncheckedCreateWithoutUpdatedRolesInput>
    connectOrCreate?: UserCreateOrConnectWithoutUpdatedRolesInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedManyWithoutRoleInput = {
    create?: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput> | UserCreateWithoutRoleInput[] | UserUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoleInput | UserCreateOrConnectWithoutRoleInput[]
    createMany?: UserCreateManyRoleInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutRoleInput = {
    create?: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput> | UserCreateWithoutRoleInput[] | UserUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoleInput | UserCreateOrConnectWithoutRoleInput[]
    createMany?: UserCreateManyRoleInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUpdateOneWithoutCreatedRolesNestedInput = {
    create?: XOR<UserCreateWithoutCreatedRolesInput, UserUncheckedCreateWithoutCreatedRolesInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedRolesInput
    upsert?: UserUpsertWithoutCreatedRolesInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCreatedRolesInput, UserUpdateWithoutCreatedRolesInput>, UserUncheckedUpdateWithoutCreatedRolesInput>
  }

  export type UserUpdateOneWithoutDeletedRolesNestedInput = {
    create?: XOR<UserCreateWithoutDeletedRolesInput, UserUncheckedCreateWithoutDeletedRolesInput>
    connectOrCreate?: UserCreateOrConnectWithoutDeletedRolesInput
    upsert?: UserUpsertWithoutDeletedRolesInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDeletedRolesInput, UserUpdateWithoutDeletedRolesInput>, UserUncheckedUpdateWithoutDeletedRolesInput>
  }

  export type UserUpdateOneWithoutUpdatedRolesNestedInput = {
    create?: XOR<UserCreateWithoutUpdatedRolesInput, UserUncheckedCreateWithoutUpdatedRolesInput>
    connectOrCreate?: UserCreateOrConnectWithoutUpdatedRolesInput
    upsert?: UserUpsertWithoutUpdatedRolesInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUpdatedRolesInput, UserUpdateWithoutUpdatedRolesInput>, UserUncheckedUpdateWithoutUpdatedRolesInput>
  }

  export type UserUpdateManyWithoutRoleNestedInput = {
    create?: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput> | UserCreateWithoutRoleInput[] | UserUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoleInput | UserCreateOrConnectWithoutRoleInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutRoleInput | UserUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: UserCreateManyRoleInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutRoleInput | UserUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: UserUpdateManyWithWhereWithoutRoleInput | UserUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutRoleNestedInput = {
    create?: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput> | UserCreateWithoutRoleInput[] | UserUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoleInput | UserCreateOrConnectWithoutRoleInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutRoleInput | UserUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: UserCreateManyRoleInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutRoleInput | UserUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: UserUpdateManyWithWhereWithoutRoleInput | UserUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutCreatedProductsInput = {
    create?: XOR<UserCreateWithoutCreatedProductsInput, UserUncheckedCreateWithoutCreatedProductsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedProductsInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutDeletedProductsInput = {
    create?: XOR<UserCreateWithoutDeletedProductsInput, UserUncheckedCreateWithoutDeletedProductsInput>
    connectOrCreate?: UserCreateOrConnectWithoutDeletedProductsInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutUpdatedProductsInput = {
    create?: XOR<UserCreateWithoutUpdatedProductsInput, UserUncheckedCreateWithoutUpdatedProductsInput>
    connectOrCreate?: UserCreateOrConnectWithoutUpdatedProductsInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutOwnedProductsInput = {
    create?: XOR<UserCreateWithoutOwnedProductsInput, UserUncheckedCreateWithoutOwnedProductsInput>
    connectOrCreate?: UserCreateOrConnectWithoutOwnedProductsInput
    connect?: UserWhereUniqueInput
  }

  export type ProductPurchaseCreateNestedManyWithoutProductInput = {
    create?: XOR<ProductPurchaseCreateWithoutProductInput, ProductPurchaseUncheckedCreateWithoutProductInput> | ProductPurchaseCreateWithoutProductInput[] | ProductPurchaseUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductPurchaseCreateOrConnectWithoutProductInput | ProductPurchaseCreateOrConnectWithoutProductInput[]
    createMany?: ProductPurchaseCreateManyProductInputEnvelope
    connect?: ProductPurchaseWhereUniqueInput | ProductPurchaseWhereUniqueInput[]
  }

  export type ProductSaleCreateNestedManyWithoutProductInput = {
    create?: XOR<ProductSaleCreateWithoutProductInput, ProductSaleUncheckedCreateWithoutProductInput> | ProductSaleCreateWithoutProductInput[] | ProductSaleUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductSaleCreateOrConnectWithoutProductInput | ProductSaleCreateOrConnectWithoutProductInput[]
    createMany?: ProductSaleCreateManyProductInputEnvelope
    connect?: ProductSaleWhereUniqueInput | ProductSaleWhereUniqueInput[]
  }

  export type ProductPurchaseUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<ProductPurchaseCreateWithoutProductInput, ProductPurchaseUncheckedCreateWithoutProductInput> | ProductPurchaseCreateWithoutProductInput[] | ProductPurchaseUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductPurchaseCreateOrConnectWithoutProductInput | ProductPurchaseCreateOrConnectWithoutProductInput[]
    createMany?: ProductPurchaseCreateManyProductInputEnvelope
    connect?: ProductPurchaseWhereUniqueInput | ProductPurchaseWhereUniqueInput[]
  }

  export type ProductSaleUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<ProductSaleCreateWithoutProductInput, ProductSaleUncheckedCreateWithoutProductInput> | ProductSaleCreateWithoutProductInput[] | ProductSaleUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductSaleCreateOrConnectWithoutProductInput | ProductSaleCreateOrConnectWithoutProductInput[]
    createMany?: ProductSaleCreateManyProductInputEnvelope
    connect?: ProductSaleWhereUniqueInput | ProductSaleWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneWithoutCreatedProductsNestedInput = {
    create?: XOR<UserCreateWithoutCreatedProductsInput, UserUncheckedCreateWithoutCreatedProductsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedProductsInput
    upsert?: UserUpsertWithoutCreatedProductsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCreatedProductsInput, UserUpdateWithoutCreatedProductsInput>, UserUncheckedUpdateWithoutCreatedProductsInput>
  }

  export type UserUpdateOneWithoutDeletedProductsNestedInput = {
    create?: XOR<UserCreateWithoutDeletedProductsInput, UserUncheckedCreateWithoutDeletedProductsInput>
    connectOrCreate?: UserCreateOrConnectWithoutDeletedProductsInput
    upsert?: UserUpsertWithoutDeletedProductsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDeletedProductsInput, UserUpdateWithoutDeletedProductsInput>, UserUncheckedUpdateWithoutDeletedProductsInput>
  }

  export type UserUpdateOneWithoutUpdatedProductsNestedInput = {
    create?: XOR<UserCreateWithoutUpdatedProductsInput, UserUncheckedCreateWithoutUpdatedProductsInput>
    connectOrCreate?: UserCreateOrConnectWithoutUpdatedProductsInput
    upsert?: UserUpsertWithoutUpdatedProductsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUpdatedProductsInput, UserUpdateWithoutUpdatedProductsInput>, UserUncheckedUpdateWithoutUpdatedProductsInput>
  }

  export type UserUpdateOneRequiredWithoutOwnedProductsNestedInput = {
    create?: XOR<UserCreateWithoutOwnedProductsInput, UserUncheckedCreateWithoutOwnedProductsInput>
    connectOrCreate?: UserCreateOrConnectWithoutOwnedProductsInput
    upsert?: UserUpsertWithoutOwnedProductsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutOwnedProductsInput, UserUpdateWithoutOwnedProductsInput>, UserUncheckedUpdateWithoutOwnedProductsInput>
  }

  export type ProductPurchaseUpdateManyWithoutProductNestedInput = {
    create?: XOR<ProductPurchaseCreateWithoutProductInput, ProductPurchaseUncheckedCreateWithoutProductInput> | ProductPurchaseCreateWithoutProductInput[] | ProductPurchaseUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductPurchaseCreateOrConnectWithoutProductInput | ProductPurchaseCreateOrConnectWithoutProductInput[]
    upsert?: ProductPurchaseUpsertWithWhereUniqueWithoutProductInput | ProductPurchaseUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ProductPurchaseCreateManyProductInputEnvelope
    set?: ProductPurchaseWhereUniqueInput | ProductPurchaseWhereUniqueInput[]
    disconnect?: ProductPurchaseWhereUniqueInput | ProductPurchaseWhereUniqueInput[]
    delete?: ProductPurchaseWhereUniqueInput | ProductPurchaseWhereUniqueInput[]
    connect?: ProductPurchaseWhereUniqueInput | ProductPurchaseWhereUniqueInput[]
    update?: ProductPurchaseUpdateWithWhereUniqueWithoutProductInput | ProductPurchaseUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ProductPurchaseUpdateManyWithWhereWithoutProductInput | ProductPurchaseUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ProductPurchaseScalarWhereInput | ProductPurchaseScalarWhereInput[]
  }

  export type ProductSaleUpdateManyWithoutProductNestedInput = {
    create?: XOR<ProductSaleCreateWithoutProductInput, ProductSaleUncheckedCreateWithoutProductInput> | ProductSaleCreateWithoutProductInput[] | ProductSaleUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductSaleCreateOrConnectWithoutProductInput | ProductSaleCreateOrConnectWithoutProductInput[]
    upsert?: ProductSaleUpsertWithWhereUniqueWithoutProductInput | ProductSaleUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ProductSaleCreateManyProductInputEnvelope
    set?: ProductSaleWhereUniqueInput | ProductSaleWhereUniqueInput[]
    disconnect?: ProductSaleWhereUniqueInput | ProductSaleWhereUniqueInput[]
    delete?: ProductSaleWhereUniqueInput | ProductSaleWhereUniqueInput[]
    connect?: ProductSaleWhereUniqueInput | ProductSaleWhereUniqueInput[]
    update?: ProductSaleUpdateWithWhereUniqueWithoutProductInput | ProductSaleUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ProductSaleUpdateManyWithWhereWithoutProductInput | ProductSaleUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ProductSaleScalarWhereInput | ProductSaleScalarWhereInput[]
  }

  export type ProductPurchaseUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<ProductPurchaseCreateWithoutProductInput, ProductPurchaseUncheckedCreateWithoutProductInput> | ProductPurchaseCreateWithoutProductInput[] | ProductPurchaseUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductPurchaseCreateOrConnectWithoutProductInput | ProductPurchaseCreateOrConnectWithoutProductInput[]
    upsert?: ProductPurchaseUpsertWithWhereUniqueWithoutProductInput | ProductPurchaseUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ProductPurchaseCreateManyProductInputEnvelope
    set?: ProductPurchaseWhereUniqueInput | ProductPurchaseWhereUniqueInput[]
    disconnect?: ProductPurchaseWhereUniqueInput | ProductPurchaseWhereUniqueInput[]
    delete?: ProductPurchaseWhereUniqueInput | ProductPurchaseWhereUniqueInput[]
    connect?: ProductPurchaseWhereUniqueInput | ProductPurchaseWhereUniqueInput[]
    update?: ProductPurchaseUpdateWithWhereUniqueWithoutProductInput | ProductPurchaseUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ProductPurchaseUpdateManyWithWhereWithoutProductInput | ProductPurchaseUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ProductPurchaseScalarWhereInput | ProductPurchaseScalarWhereInput[]
  }

  export type ProductSaleUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<ProductSaleCreateWithoutProductInput, ProductSaleUncheckedCreateWithoutProductInput> | ProductSaleCreateWithoutProductInput[] | ProductSaleUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductSaleCreateOrConnectWithoutProductInput | ProductSaleCreateOrConnectWithoutProductInput[]
    upsert?: ProductSaleUpsertWithWhereUniqueWithoutProductInput | ProductSaleUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ProductSaleCreateManyProductInputEnvelope
    set?: ProductSaleWhereUniqueInput | ProductSaleWhereUniqueInput[]
    disconnect?: ProductSaleWhereUniqueInput | ProductSaleWhereUniqueInput[]
    delete?: ProductSaleWhereUniqueInput | ProductSaleWhereUniqueInput[]
    connect?: ProductSaleWhereUniqueInput | ProductSaleWhereUniqueInput[]
    update?: ProductSaleUpdateWithWhereUniqueWithoutProductInput | ProductSaleUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ProductSaleUpdateManyWithWhereWithoutProductInput | ProductSaleUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ProductSaleScalarWhereInput | ProductSaleScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutCreatedSalesInput = {
    create?: XOR<UserCreateWithoutCreatedSalesInput, UserUncheckedCreateWithoutCreatedSalesInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedSalesInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutDeletedSalesInput = {
    create?: XOR<UserCreateWithoutDeletedSalesInput, UserUncheckedCreateWithoutDeletedSalesInput>
    connectOrCreate?: UserCreateOrConnectWithoutDeletedSalesInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutUpdatedSalesInput = {
    create?: XOR<UserCreateWithoutUpdatedSalesInput, UserUncheckedCreateWithoutUpdatedSalesInput>
    connectOrCreate?: UserCreateOrConnectWithoutUpdatedSalesInput
    connect?: UserWhereUniqueInput
  }

  export type ProductSaleCreateNestedManyWithoutSaleInput = {
    create?: XOR<ProductSaleCreateWithoutSaleInput, ProductSaleUncheckedCreateWithoutSaleInput> | ProductSaleCreateWithoutSaleInput[] | ProductSaleUncheckedCreateWithoutSaleInput[]
    connectOrCreate?: ProductSaleCreateOrConnectWithoutSaleInput | ProductSaleCreateOrConnectWithoutSaleInput[]
    createMany?: ProductSaleCreateManySaleInputEnvelope
    connect?: ProductSaleWhereUniqueInput | ProductSaleWhereUniqueInput[]
  }

  export type ProductSaleUncheckedCreateNestedManyWithoutSaleInput = {
    create?: XOR<ProductSaleCreateWithoutSaleInput, ProductSaleUncheckedCreateWithoutSaleInput> | ProductSaleCreateWithoutSaleInput[] | ProductSaleUncheckedCreateWithoutSaleInput[]
    connectOrCreate?: ProductSaleCreateOrConnectWithoutSaleInput | ProductSaleCreateOrConnectWithoutSaleInput[]
    createMany?: ProductSaleCreateManySaleInputEnvelope
    connect?: ProductSaleWhereUniqueInput | ProductSaleWhereUniqueInput[]
  }

  export type UserUpdateOneWithoutCreatedSalesNestedInput = {
    create?: XOR<UserCreateWithoutCreatedSalesInput, UserUncheckedCreateWithoutCreatedSalesInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedSalesInput
    upsert?: UserUpsertWithoutCreatedSalesInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCreatedSalesInput, UserUpdateWithoutCreatedSalesInput>, UserUncheckedUpdateWithoutCreatedSalesInput>
  }

  export type UserUpdateOneWithoutDeletedSalesNestedInput = {
    create?: XOR<UserCreateWithoutDeletedSalesInput, UserUncheckedCreateWithoutDeletedSalesInput>
    connectOrCreate?: UserCreateOrConnectWithoutDeletedSalesInput
    upsert?: UserUpsertWithoutDeletedSalesInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDeletedSalesInput, UserUpdateWithoutDeletedSalesInput>, UserUncheckedUpdateWithoutDeletedSalesInput>
  }

  export type UserUpdateOneWithoutUpdatedSalesNestedInput = {
    create?: XOR<UserCreateWithoutUpdatedSalesInput, UserUncheckedCreateWithoutUpdatedSalesInput>
    connectOrCreate?: UserCreateOrConnectWithoutUpdatedSalesInput
    upsert?: UserUpsertWithoutUpdatedSalesInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUpdatedSalesInput, UserUpdateWithoutUpdatedSalesInput>, UserUncheckedUpdateWithoutUpdatedSalesInput>
  }

  export type ProductSaleUpdateManyWithoutSaleNestedInput = {
    create?: XOR<ProductSaleCreateWithoutSaleInput, ProductSaleUncheckedCreateWithoutSaleInput> | ProductSaleCreateWithoutSaleInput[] | ProductSaleUncheckedCreateWithoutSaleInput[]
    connectOrCreate?: ProductSaleCreateOrConnectWithoutSaleInput | ProductSaleCreateOrConnectWithoutSaleInput[]
    upsert?: ProductSaleUpsertWithWhereUniqueWithoutSaleInput | ProductSaleUpsertWithWhereUniqueWithoutSaleInput[]
    createMany?: ProductSaleCreateManySaleInputEnvelope
    set?: ProductSaleWhereUniqueInput | ProductSaleWhereUniqueInput[]
    disconnect?: ProductSaleWhereUniqueInput | ProductSaleWhereUniqueInput[]
    delete?: ProductSaleWhereUniqueInput | ProductSaleWhereUniqueInput[]
    connect?: ProductSaleWhereUniqueInput | ProductSaleWhereUniqueInput[]
    update?: ProductSaleUpdateWithWhereUniqueWithoutSaleInput | ProductSaleUpdateWithWhereUniqueWithoutSaleInput[]
    updateMany?: ProductSaleUpdateManyWithWhereWithoutSaleInput | ProductSaleUpdateManyWithWhereWithoutSaleInput[]
    deleteMany?: ProductSaleScalarWhereInput | ProductSaleScalarWhereInput[]
  }

  export type ProductSaleUncheckedUpdateManyWithoutSaleNestedInput = {
    create?: XOR<ProductSaleCreateWithoutSaleInput, ProductSaleUncheckedCreateWithoutSaleInput> | ProductSaleCreateWithoutSaleInput[] | ProductSaleUncheckedCreateWithoutSaleInput[]
    connectOrCreate?: ProductSaleCreateOrConnectWithoutSaleInput | ProductSaleCreateOrConnectWithoutSaleInput[]
    upsert?: ProductSaleUpsertWithWhereUniqueWithoutSaleInput | ProductSaleUpsertWithWhereUniqueWithoutSaleInput[]
    createMany?: ProductSaleCreateManySaleInputEnvelope
    set?: ProductSaleWhereUniqueInput | ProductSaleWhereUniqueInput[]
    disconnect?: ProductSaleWhereUniqueInput | ProductSaleWhereUniqueInput[]
    delete?: ProductSaleWhereUniqueInput | ProductSaleWhereUniqueInput[]
    connect?: ProductSaleWhereUniqueInput | ProductSaleWhereUniqueInput[]
    update?: ProductSaleUpdateWithWhereUniqueWithoutSaleInput | ProductSaleUpdateWithWhereUniqueWithoutSaleInput[]
    updateMany?: ProductSaleUpdateManyWithWhereWithoutSaleInput | ProductSaleUpdateManyWithWhereWithoutSaleInput[]
    deleteMany?: ProductSaleScalarWhereInput | ProductSaleScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutCreatedPurchasesInput = {
    create?: XOR<UserCreateWithoutCreatedPurchasesInput, UserUncheckedCreateWithoutCreatedPurchasesInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedPurchasesInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutDeletedPurchasesInput = {
    create?: XOR<UserCreateWithoutDeletedPurchasesInput, UserUncheckedCreateWithoutDeletedPurchasesInput>
    connectOrCreate?: UserCreateOrConnectWithoutDeletedPurchasesInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutUpdatedPurchasesInput = {
    create?: XOR<UserCreateWithoutUpdatedPurchasesInput, UserUncheckedCreateWithoutUpdatedPurchasesInput>
    connectOrCreate?: UserCreateOrConnectWithoutUpdatedPurchasesInput
    connect?: UserWhereUniqueInput
  }

  export type ProductPurchaseCreateNestedManyWithoutPurchaseInput = {
    create?: XOR<ProductPurchaseCreateWithoutPurchaseInput, ProductPurchaseUncheckedCreateWithoutPurchaseInput> | ProductPurchaseCreateWithoutPurchaseInput[] | ProductPurchaseUncheckedCreateWithoutPurchaseInput[]
    connectOrCreate?: ProductPurchaseCreateOrConnectWithoutPurchaseInput | ProductPurchaseCreateOrConnectWithoutPurchaseInput[]
    createMany?: ProductPurchaseCreateManyPurchaseInputEnvelope
    connect?: ProductPurchaseWhereUniqueInput | ProductPurchaseWhereUniqueInput[]
  }

  export type ProductPurchaseUncheckedCreateNestedManyWithoutPurchaseInput = {
    create?: XOR<ProductPurchaseCreateWithoutPurchaseInput, ProductPurchaseUncheckedCreateWithoutPurchaseInput> | ProductPurchaseCreateWithoutPurchaseInput[] | ProductPurchaseUncheckedCreateWithoutPurchaseInput[]
    connectOrCreate?: ProductPurchaseCreateOrConnectWithoutPurchaseInput | ProductPurchaseCreateOrConnectWithoutPurchaseInput[]
    createMany?: ProductPurchaseCreateManyPurchaseInputEnvelope
    connect?: ProductPurchaseWhereUniqueInput | ProductPurchaseWhereUniqueInput[]
  }

  export type UserUpdateOneWithoutCreatedPurchasesNestedInput = {
    create?: XOR<UserCreateWithoutCreatedPurchasesInput, UserUncheckedCreateWithoutCreatedPurchasesInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedPurchasesInput
    upsert?: UserUpsertWithoutCreatedPurchasesInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCreatedPurchasesInput, UserUpdateWithoutCreatedPurchasesInput>, UserUncheckedUpdateWithoutCreatedPurchasesInput>
  }

  export type UserUpdateOneWithoutDeletedPurchasesNestedInput = {
    create?: XOR<UserCreateWithoutDeletedPurchasesInput, UserUncheckedCreateWithoutDeletedPurchasesInput>
    connectOrCreate?: UserCreateOrConnectWithoutDeletedPurchasesInput
    upsert?: UserUpsertWithoutDeletedPurchasesInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDeletedPurchasesInput, UserUpdateWithoutDeletedPurchasesInput>, UserUncheckedUpdateWithoutDeletedPurchasesInput>
  }

  export type UserUpdateOneWithoutUpdatedPurchasesNestedInput = {
    create?: XOR<UserCreateWithoutUpdatedPurchasesInput, UserUncheckedCreateWithoutUpdatedPurchasesInput>
    connectOrCreate?: UserCreateOrConnectWithoutUpdatedPurchasesInput
    upsert?: UserUpsertWithoutUpdatedPurchasesInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUpdatedPurchasesInput, UserUpdateWithoutUpdatedPurchasesInput>, UserUncheckedUpdateWithoutUpdatedPurchasesInput>
  }

  export type ProductPurchaseUpdateManyWithoutPurchaseNestedInput = {
    create?: XOR<ProductPurchaseCreateWithoutPurchaseInput, ProductPurchaseUncheckedCreateWithoutPurchaseInput> | ProductPurchaseCreateWithoutPurchaseInput[] | ProductPurchaseUncheckedCreateWithoutPurchaseInput[]
    connectOrCreate?: ProductPurchaseCreateOrConnectWithoutPurchaseInput | ProductPurchaseCreateOrConnectWithoutPurchaseInput[]
    upsert?: ProductPurchaseUpsertWithWhereUniqueWithoutPurchaseInput | ProductPurchaseUpsertWithWhereUniqueWithoutPurchaseInput[]
    createMany?: ProductPurchaseCreateManyPurchaseInputEnvelope
    set?: ProductPurchaseWhereUniqueInput | ProductPurchaseWhereUniqueInput[]
    disconnect?: ProductPurchaseWhereUniqueInput | ProductPurchaseWhereUniqueInput[]
    delete?: ProductPurchaseWhereUniqueInput | ProductPurchaseWhereUniqueInput[]
    connect?: ProductPurchaseWhereUniqueInput | ProductPurchaseWhereUniqueInput[]
    update?: ProductPurchaseUpdateWithWhereUniqueWithoutPurchaseInput | ProductPurchaseUpdateWithWhereUniqueWithoutPurchaseInput[]
    updateMany?: ProductPurchaseUpdateManyWithWhereWithoutPurchaseInput | ProductPurchaseUpdateManyWithWhereWithoutPurchaseInput[]
    deleteMany?: ProductPurchaseScalarWhereInput | ProductPurchaseScalarWhereInput[]
  }

  export type ProductPurchaseUncheckedUpdateManyWithoutPurchaseNestedInput = {
    create?: XOR<ProductPurchaseCreateWithoutPurchaseInput, ProductPurchaseUncheckedCreateWithoutPurchaseInput> | ProductPurchaseCreateWithoutPurchaseInput[] | ProductPurchaseUncheckedCreateWithoutPurchaseInput[]
    connectOrCreate?: ProductPurchaseCreateOrConnectWithoutPurchaseInput | ProductPurchaseCreateOrConnectWithoutPurchaseInput[]
    upsert?: ProductPurchaseUpsertWithWhereUniqueWithoutPurchaseInput | ProductPurchaseUpsertWithWhereUniqueWithoutPurchaseInput[]
    createMany?: ProductPurchaseCreateManyPurchaseInputEnvelope
    set?: ProductPurchaseWhereUniqueInput | ProductPurchaseWhereUniqueInput[]
    disconnect?: ProductPurchaseWhereUniqueInput | ProductPurchaseWhereUniqueInput[]
    delete?: ProductPurchaseWhereUniqueInput | ProductPurchaseWhereUniqueInput[]
    connect?: ProductPurchaseWhereUniqueInput | ProductPurchaseWhereUniqueInput[]
    update?: ProductPurchaseUpdateWithWhereUniqueWithoutPurchaseInput | ProductPurchaseUpdateWithWhereUniqueWithoutPurchaseInput[]
    updateMany?: ProductPurchaseUpdateManyWithWhereWithoutPurchaseInput | ProductPurchaseUpdateManyWithWhereWithoutPurchaseInput[]
    deleteMany?: ProductPurchaseScalarWhereInput | ProductPurchaseScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutCreatedProductPurchasesInput = {
    create?: XOR<UserCreateWithoutCreatedProductPurchasesInput, UserUncheckedCreateWithoutCreatedProductPurchasesInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedProductPurchasesInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutDeletedProductPurchasesInput = {
    create?: XOR<UserCreateWithoutDeletedProductPurchasesInput, UserUncheckedCreateWithoutDeletedProductPurchasesInput>
    connectOrCreate?: UserCreateOrConnectWithoutDeletedProductPurchasesInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutUpdatedProductPurchasesInput = {
    create?: XOR<UserCreateWithoutUpdatedProductPurchasesInput, UserUncheckedCreateWithoutUpdatedProductPurchasesInput>
    connectOrCreate?: UserCreateOrConnectWithoutUpdatedProductPurchasesInput
    connect?: UserWhereUniqueInput
  }

  export type ProductCreateNestedOneWithoutProductPurchaseInput = {
    create?: XOR<ProductCreateWithoutProductPurchaseInput, ProductUncheckedCreateWithoutProductPurchaseInput>
    connectOrCreate?: ProductCreateOrConnectWithoutProductPurchaseInput
    connect?: ProductWhereUniqueInput
  }

  export type PurchaseCreateNestedOneWithoutProductPurchaseInput = {
    create?: XOR<PurchaseCreateWithoutProductPurchaseInput, PurchaseUncheckedCreateWithoutProductPurchaseInput>
    connectOrCreate?: PurchaseCreateOrConnectWithoutProductPurchaseInput
    connect?: PurchaseWhereUniqueInput
  }

  export type UserUpdateOneWithoutCreatedProductPurchasesNestedInput = {
    create?: XOR<UserCreateWithoutCreatedProductPurchasesInput, UserUncheckedCreateWithoutCreatedProductPurchasesInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedProductPurchasesInput
    upsert?: UserUpsertWithoutCreatedProductPurchasesInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCreatedProductPurchasesInput, UserUpdateWithoutCreatedProductPurchasesInput>, UserUncheckedUpdateWithoutCreatedProductPurchasesInput>
  }

  export type UserUpdateOneWithoutDeletedProductPurchasesNestedInput = {
    create?: XOR<UserCreateWithoutDeletedProductPurchasesInput, UserUncheckedCreateWithoutDeletedProductPurchasesInput>
    connectOrCreate?: UserCreateOrConnectWithoutDeletedProductPurchasesInput
    upsert?: UserUpsertWithoutDeletedProductPurchasesInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDeletedProductPurchasesInput, UserUpdateWithoutDeletedProductPurchasesInput>, UserUncheckedUpdateWithoutDeletedProductPurchasesInput>
  }

  export type UserUpdateOneWithoutUpdatedProductPurchasesNestedInput = {
    create?: XOR<UserCreateWithoutUpdatedProductPurchasesInput, UserUncheckedCreateWithoutUpdatedProductPurchasesInput>
    connectOrCreate?: UserCreateOrConnectWithoutUpdatedProductPurchasesInput
    upsert?: UserUpsertWithoutUpdatedProductPurchasesInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUpdatedProductPurchasesInput, UserUpdateWithoutUpdatedProductPurchasesInput>, UserUncheckedUpdateWithoutUpdatedProductPurchasesInput>
  }

  export type ProductUpdateOneRequiredWithoutProductPurchaseNestedInput = {
    create?: XOR<ProductCreateWithoutProductPurchaseInput, ProductUncheckedCreateWithoutProductPurchaseInput>
    connectOrCreate?: ProductCreateOrConnectWithoutProductPurchaseInput
    upsert?: ProductUpsertWithoutProductPurchaseInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutProductPurchaseInput, ProductUpdateWithoutProductPurchaseInput>, ProductUncheckedUpdateWithoutProductPurchaseInput>
  }

  export type PurchaseUpdateOneRequiredWithoutProductPurchaseNestedInput = {
    create?: XOR<PurchaseCreateWithoutProductPurchaseInput, PurchaseUncheckedCreateWithoutProductPurchaseInput>
    connectOrCreate?: PurchaseCreateOrConnectWithoutProductPurchaseInput
    upsert?: PurchaseUpsertWithoutProductPurchaseInput
    connect?: PurchaseWhereUniqueInput
    update?: XOR<XOR<PurchaseUpdateToOneWithWhereWithoutProductPurchaseInput, PurchaseUpdateWithoutProductPurchaseInput>, PurchaseUncheckedUpdateWithoutProductPurchaseInput>
  }

  export type UserCreateNestedOneWithoutCreatedProductSalesInput = {
    create?: XOR<UserCreateWithoutCreatedProductSalesInput, UserUncheckedCreateWithoutCreatedProductSalesInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedProductSalesInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutDeletedProductSalesInput = {
    create?: XOR<UserCreateWithoutDeletedProductSalesInput, UserUncheckedCreateWithoutDeletedProductSalesInput>
    connectOrCreate?: UserCreateOrConnectWithoutDeletedProductSalesInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutUpdatedProductSalesInput = {
    create?: XOR<UserCreateWithoutUpdatedProductSalesInput, UserUncheckedCreateWithoutUpdatedProductSalesInput>
    connectOrCreate?: UserCreateOrConnectWithoutUpdatedProductSalesInput
    connect?: UserWhereUniqueInput
  }

  export type ProductCreateNestedOneWithoutProductSaleInput = {
    create?: XOR<ProductCreateWithoutProductSaleInput, ProductUncheckedCreateWithoutProductSaleInput>
    connectOrCreate?: ProductCreateOrConnectWithoutProductSaleInput
    connect?: ProductWhereUniqueInput
  }

  export type SaleCreateNestedOneWithoutProductSaleInput = {
    create?: XOR<SaleCreateWithoutProductSaleInput, SaleUncheckedCreateWithoutProductSaleInput>
    connectOrCreate?: SaleCreateOrConnectWithoutProductSaleInput
    connect?: SaleWhereUniqueInput
  }

  export type UserUpdateOneWithoutCreatedProductSalesNestedInput = {
    create?: XOR<UserCreateWithoutCreatedProductSalesInput, UserUncheckedCreateWithoutCreatedProductSalesInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedProductSalesInput
    upsert?: UserUpsertWithoutCreatedProductSalesInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCreatedProductSalesInput, UserUpdateWithoutCreatedProductSalesInput>, UserUncheckedUpdateWithoutCreatedProductSalesInput>
  }

  export type UserUpdateOneWithoutDeletedProductSalesNestedInput = {
    create?: XOR<UserCreateWithoutDeletedProductSalesInput, UserUncheckedCreateWithoutDeletedProductSalesInput>
    connectOrCreate?: UserCreateOrConnectWithoutDeletedProductSalesInput
    upsert?: UserUpsertWithoutDeletedProductSalesInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDeletedProductSalesInput, UserUpdateWithoutDeletedProductSalesInput>, UserUncheckedUpdateWithoutDeletedProductSalesInput>
  }

  export type UserUpdateOneWithoutUpdatedProductSalesNestedInput = {
    create?: XOR<UserCreateWithoutUpdatedProductSalesInput, UserUncheckedCreateWithoutUpdatedProductSalesInput>
    connectOrCreate?: UserCreateOrConnectWithoutUpdatedProductSalesInput
    upsert?: UserUpsertWithoutUpdatedProductSalesInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUpdatedProductSalesInput, UserUpdateWithoutUpdatedProductSalesInput>, UserUncheckedUpdateWithoutUpdatedProductSalesInput>
  }

  export type ProductUpdateOneRequiredWithoutProductSaleNestedInput = {
    create?: XOR<ProductCreateWithoutProductSaleInput, ProductUncheckedCreateWithoutProductSaleInput>
    connectOrCreate?: ProductCreateOrConnectWithoutProductSaleInput
    upsert?: ProductUpsertWithoutProductSaleInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutProductSaleInput, ProductUpdateWithoutProductSaleInput>, ProductUncheckedUpdateWithoutProductSaleInput>
  }

  export type SaleUpdateOneRequiredWithoutProductSaleNestedInput = {
    create?: XOR<SaleCreateWithoutProductSaleInput, SaleUncheckedCreateWithoutProductSaleInput>
    connectOrCreate?: SaleCreateOrConnectWithoutProductSaleInput
    upsert?: SaleUpsertWithoutProductSaleInput
    connect?: SaleWhereUniqueInput
    update?: XOR<XOR<SaleUpdateToOneWithWhereWithoutProductSaleInput, SaleUpdateWithoutProductSaleInput>, SaleUncheckedUpdateWithoutProductSaleInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type RoleCreateWithoutCreatedByUserInput = {
    roleType: string
    createdAt?: Date | string
    deletedAt?: Date | string | null
    updatedAt?: Date | string | null
    isDeleted?: boolean
    deletedByUser?: UserCreateNestedOneWithoutDeletedRolesInput
    updatedByUser?: UserCreateNestedOneWithoutUpdatedRolesInput
    users?: UserCreateNestedManyWithoutRoleInput
  }

  export type RoleUncheckedCreateWithoutCreatedByUserInput = {
    roleId?: number
    roleType: string
    createdAt?: Date | string
    deletedAt?: Date | string | null
    deletedBy?: number | null
    updatedBy?: number | null
    updatedAt?: Date | string | null
    isDeleted?: boolean
    users?: UserUncheckedCreateNestedManyWithoutRoleInput
  }

  export type RoleCreateOrConnectWithoutCreatedByUserInput = {
    where: RoleWhereUniqueInput
    create: XOR<RoleCreateWithoutCreatedByUserInput, RoleUncheckedCreateWithoutCreatedByUserInput>
  }

  export type RoleCreateManyCreatedByUserInputEnvelope = {
    data: RoleCreateManyCreatedByUserInput | RoleCreateManyCreatedByUserInput[]
    skipDuplicates?: boolean
  }

  export type RoleCreateWithoutDeletedByUserInput = {
    roleType: string
    createdAt?: Date | string
    deletedAt?: Date | string | null
    updatedAt?: Date | string | null
    isDeleted?: boolean
    createdByUser?: UserCreateNestedOneWithoutCreatedRolesInput
    updatedByUser?: UserCreateNestedOneWithoutUpdatedRolesInput
    users?: UserCreateNestedManyWithoutRoleInput
  }

  export type RoleUncheckedCreateWithoutDeletedByUserInput = {
    roleId?: number
    roleType: string
    createdAt?: Date | string
    deletedAt?: Date | string | null
    createdBy?: number | null
    updatedBy?: number | null
    updatedAt?: Date | string | null
    isDeleted?: boolean
    users?: UserUncheckedCreateNestedManyWithoutRoleInput
  }

  export type RoleCreateOrConnectWithoutDeletedByUserInput = {
    where: RoleWhereUniqueInput
    create: XOR<RoleCreateWithoutDeletedByUserInput, RoleUncheckedCreateWithoutDeletedByUserInput>
  }

  export type RoleCreateManyDeletedByUserInputEnvelope = {
    data: RoleCreateManyDeletedByUserInput | RoleCreateManyDeletedByUserInput[]
    skipDuplicates?: boolean
  }

  export type RoleCreateWithoutUpdatedByUserInput = {
    roleType: string
    createdAt?: Date | string
    deletedAt?: Date | string | null
    updatedAt?: Date | string | null
    isDeleted?: boolean
    createdByUser?: UserCreateNestedOneWithoutCreatedRolesInput
    deletedByUser?: UserCreateNestedOneWithoutDeletedRolesInput
    users?: UserCreateNestedManyWithoutRoleInput
  }

  export type RoleUncheckedCreateWithoutUpdatedByUserInput = {
    roleId?: number
    roleType: string
    createdAt?: Date | string
    deletedAt?: Date | string | null
    createdBy?: number | null
    deletedBy?: number | null
    updatedAt?: Date | string | null
    isDeleted?: boolean
    users?: UserUncheckedCreateNestedManyWithoutRoleInput
  }

  export type RoleCreateOrConnectWithoutUpdatedByUserInput = {
    where: RoleWhereUniqueInput
    create: XOR<RoleCreateWithoutUpdatedByUserInput, RoleUncheckedCreateWithoutUpdatedByUserInput>
  }

  export type RoleCreateManyUpdatedByUserInputEnvelope = {
    data: RoleCreateManyUpdatedByUserInput | RoleCreateManyUpdatedByUserInput[]
    skipDuplicates?: boolean
  }

  export type ProductCreateWithoutCreatedByUserInput = {
    imageUrl: string
    description: string
    category: string
    expiryDate?: Date | string | null
    productionDate?: Date | string | null
    quantity: number
    price: number
    costPrice: number
    createdAt?: Date | string
    deletedAt?: Date | string | null
    updatedAt?: Date | string | null
    isDeleted?: boolean
    deletedByUser?: UserCreateNestedOneWithoutDeletedProductsInput
    updatedByUser?: UserCreateNestedOneWithoutUpdatedProductsInput
    user: UserCreateNestedOneWithoutOwnedProductsInput
    productPurchase?: ProductPurchaseCreateNestedManyWithoutProductInput
    productSale?: ProductSaleCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutCreatedByUserInput = {
    productId?: number
    imageUrl: string
    description: string
    category: string
    expiryDate?: Date | string | null
    productionDate?: Date | string | null
    quantity: number
    price: number
    costPrice: number
    createdAt?: Date | string
    deletedAt?: Date | string | null
    deletedBy?: number | null
    updatedBy?: number | null
    updatedAt?: Date | string | null
    isDeleted?: boolean
    userId: number
    productPurchase?: ProductPurchaseUncheckedCreateNestedManyWithoutProductInput
    productSale?: ProductSaleUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutCreatedByUserInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutCreatedByUserInput, ProductUncheckedCreateWithoutCreatedByUserInput>
  }

  export type ProductCreateManyCreatedByUserInputEnvelope = {
    data: ProductCreateManyCreatedByUserInput | ProductCreateManyCreatedByUserInput[]
    skipDuplicates?: boolean
  }

  export type ProductCreateWithoutDeletedByUserInput = {
    imageUrl: string
    description: string
    category: string
    expiryDate?: Date | string | null
    productionDate?: Date | string | null
    quantity: number
    price: number
    costPrice: number
    createdAt?: Date | string
    deletedAt?: Date | string | null
    updatedAt?: Date | string | null
    isDeleted?: boolean
    createdByUser?: UserCreateNestedOneWithoutCreatedProductsInput
    updatedByUser?: UserCreateNestedOneWithoutUpdatedProductsInput
    user: UserCreateNestedOneWithoutOwnedProductsInput
    productPurchase?: ProductPurchaseCreateNestedManyWithoutProductInput
    productSale?: ProductSaleCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutDeletedByUserInput = {
    productId?: number
    imageUrl: string
    description: string
    category: string
    expiryDate?: Date | string | null
    productionDate?: Date | string | null
    quantity: number
    price: number
    costPrice: number
    createdAt?: Date | string
    deletedAt?: Date | string | null
    createdBy?: number | null
    updatedBy?: number | null
    updatedAt?: Date | string | null
    isDeleted?: boolean
    userId: number
    productPurchase?: ProductPurchaseUncheckedCreateNestedManyWithoutProductInput
    productSale?: ProductSaleUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutDeletedByUserInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutDeletedByUserInput, ProductUncheckedCreateWithoutDeletedByUserInput>
  }

  export type ProductCreateManyDeletedByUserInputEnvelope = {
    data: ProductCreateManyDeletedByUserInput | ProductCreateManyDeletedByUserInput[]
    skipDuplicates?: boolean
  }

  export type ProductCreateWithoutUpdatedByUserInput = {
    imageUrl: string
    description: string
    category: string
    expiryDate?: Date | string | null
    productionDate?: Date | string | null
    quantity: number
    price: number
    costPrice: number
    createdAt?: Date | string
    deletedAt?: Date | string | null
    updatedAt?: Date | string | null
    isDeleted?: boolean
    createdByUser?: UserCreateNestedOneWithoutCreatedProductsInput
    deletedByUser?: UserCreateNestedOneWithoutDeletedProductsInput
    user: UserCreateNestedOneWithoutOwnedProductsInput
    productPurchase?: ProductPurchaseCreateNestedManyWithoutProductInput
    productSale?: ProductSaleCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutUpdatedByUserInput = {
    productId?: number
    imageUrl: string
    description: string
    category: string
    expiryDate?: Date | string | null
    productionDate?: Date | string | null
    quantity: number
    price: number
    costPrice: number
    createdAt?: Date | string
    deletedAt?: Date | string | null
    createdBy?: number | null
    deletedBy?: number | null
    updatedAt?: Date | string | null
    isDeleted?: boolean
    userId: number
    productPurchase?: ProductPurchaseUncheckedCreateNestedManyWithoutProductInput
    productSale?: ProductSaleUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutUpdatedByUserInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutUpdatedByUserInput, ProductUncheckedCreateWithoutUpdatedByUserInput>
  }

  export type ProductCreateManyUpdatedByUserInputEnvelope = {
    data: ProductCreateManyUpdatedByUserInput | ProductCreateManyUpdatedByUserInput[]
    skipDuplicates?: boolean
  }

  export type SaleCreateWithoutCreatedByUserInput = {
    createdAt?: Date | string
    deletedAt?: Date | string | null
    updatedAt?: Date | string | null
    isDeleted?: boolean
    deletedByUser?: UserCreateNestedOneWithoutDeletedSalesInput
    updatedByUser?: UserCreateNestedOneWithoutUpdatedSalesInput
    productSale?: ProductSaleCreateNestedManyWithoutSaleInput
  }

  export type SaleUncheckedCreateWithoutCreatedByUserInput = {
    saleId?: number
    createdAt?: Date | string
    deletedAt?: Date | string | null
    deletedBy?: number | null
    updatedBy?: number | null
    updatedAt?: Date | string | null
    isDeleted?: boolean
    productSale?: ProductSaleUncheckedCreateNestedManyWithoutSaleInput
  }

  export type SaleCreateOrConnectWithoutCreatedByUserInput = {
    where: SaleWhereUniqueInput
    create: XOR<SaleCreateWithoutCreatedByUserInput, SaleUncheckedCreateWithoutCreatedByUserInput>
  }

  export type SaleCreateManyCreatedByUserInputEnvelope = {
    data: SaleCreateManyCreatedByUserInput | SaleCreateManyCreatedByUserInput[]
    skipDuplicates?: boolean
  }

  export type SaleCreateWithoutDeletedByUserInput = {
    createdAt?: Date | string
    deletedAt?: Date | string | null
    updatedAt?: Date | string | null
    isDeleted?: boolean
    createdByUser?: UserCreateNestedOneWithoutCreatedSalesInput
    updatedByUser?: UserCreateNestedOneWithoutUpdatedSalesInput
    productSale?: ProductSaleCreateNestedManyWithoutSaleInput
  }

  export type SaleUncheckedCreateWithoutDeletedByUserInput = {
    saleId?: number
    createdAt?: Date | string
    deletedAt?: Date | string | null
    createdBy?: number | null
    updatedBy?: number | null
    updatedAt?: Date | string | null
    isDeleted?: boolean
    productSale?: ProductSaleUncheckedCreateNestedManyWithoutSaleInput
  }

  export type SaleCreateOrConnectWithoutDeletedByUserInput = {
    where: SaleWhereUniqueInput
    create: XOR<SaleCreateWithoutDeletedByUserInput, SaleUncheckedCreateWithoutDeletedByUserInput>
  }

  export type SaleCreateManyDeletedByUserInputEnvelope = {
    data: SaleCreateManyDeletedByUserInput | SaleCreateManyDeletedByUserInput[]
    skipDuplicates?: boolean
  }

  export type SaleCreateWithoutUpdatedByUserInput = {
    createdAt?: Date | string
    deletedAt?: Date | string | null
    updatedAt?: Date | string | null
    isDeleted?: boolean
    createdByUser?: UserCreateNestedOneWithoutCreatedSalesInput
    deletedByUser?: UserCreateNestedOneWithoutDeletedSalesInput
    productSale?: ProductSaleCreateNestedManyWithoutSaleInput
  }

  export type SaleUncheckedCreateWithoutUpdatedByUserInput = {
    saleId?: number
    createdAt?: Date | string
    deletedAt?: Date | string | null
    createdBy?: number | null
    deletedBy?: number | null
    updatedAt?: Date | string | null
    isDeleted?: boolean
    productSale?: ProductSaleUncheckedCreateNestedManyWithoutSaleInput
  }

  export type SaleCreateOrConnectWithoutUpdatedByUserInput = {
    where: SaleWhereUniqueInput
    create: XOR<SaleCreateWithoutUpdatedByUserInput, SaleUncheckedCreateWithoutUpdatedByUserInput>
  }

  export type SaleCreateManyUpdatedByUserInputEnvelope = {
    data: SaleCreateManyUpdatedByUserInput | SaleCreateManyUpdatedByUserInput[]
    skipDuplicates?: boolean
  }

  export type PurchaseCreateWithoutCreatedByUserInput = {
    createdAt?: Date | string
    deletedAt?: Date | string | null
    updatedAt?: Date | string | null
    isDeleted?: boolean
    productId: number
    deletedByUser?: UserCreateNestedOneWithoutDeletedPurchasesInput
    updatedByUser?: UserCreateNestedOneWithoutUpdatedPurchasesInput
    productPurchase?: ProductPurchaseCreateNestedManyWithoutPurchaseInput
  }

  export type PurchaseUncheckedCreateWithoutCreatedByUserInput = {
    purchaseId?: number
    createdAt?: Date | string
    deletedAt?: Date | string | null
    deletedBy?: number | null
    updatedBy?: number | null
    updatedAt?: Date | string | null
    isDeleted?: boolean
    productId: number
    productPurchase?: ProductPurchaseUncheckedCreateNestedManyWithoutPurchaseInput
  }

  export type PurchaseCreateOrConnectWithoutCreatedByUserInput = {
    where: PurchaseWhereUniqueInput
    create: XOR<PurchaseCreateWithoutCreatedByUserInput, PurchaseUncheckedCreateWithoutCreatedByUserInput>
  }

  export type PurchaseCreateManyCreatedByUserInputEnvelope = {
    data: PurchaseCreateManyCreatedByUserInput | PurchaseCreateManyCreatedByUserInput[]
    skipDuplicates?: boolean
  }

  export type PurchaseCreateWithoutDeletedByUserInput = {
    createdAt?: Date | string
    deletedAt?: Date | string | null
    updatedAt?: Date | string | null
    isDeleted?: boolean
    productId: number
    createdByUser?: UserCreateNestedOneWithoutCreatedPurchasesInput
    updatedByUser?: UserCreateNestedOneWithoutUpdatedPurchasesInput
    productPurchase?: ProductPurchaseCreateNestedManyWithoutPurchaseInput
  }

  export type PurchaseUncheckedCreateWithoutDeletedByUserInput = {
    purchaseId?: number
    createdAt?: Date | string
    deletedAt?: Date | string | null
    createdBy?: number | null
    updatedBy?: number | null
    updatedAt?: Date | string | null
    isDeleted?: boolean
    productId: number
    productPurchase?: ProductPurchaseUncheckedCreateNestedManyWithoutPurchaseInput
  }

  export type PurchaseCreateOrConnectWithoutDeletedByUserInput = {
    where: PurchaseWhereUniqueInput
    create: XOR<PurchaseCreateWithoutDeletedByUserInput, PurchaseUncheckedCreateWithoutDeletedByUserInput>
  }

  export type PurchaseCreateManyDeletedByUserInputEnvelope = {
    data: PurchaseCreateManyDeletedByUserInput | PurchaseCreateManyDeletedByUserInput[]
    skipDuplicates?: boolean
  }

  export type PurchaseCreateWithoutUpdatedByUserInput = {
    createdAt?: Date | string
    deletedAt?: Date | string | null
    updatedAt?: Date | string | null
    isDeleted?: boolean
    productId: number
    createdByUser?: UserCreateNestedOneWithoutCreatedPurchasesInput
    deletedByUser?: UserCreateNestedOneWithoutDeletedPurchasesInput
    productPurchase?: ProductPurchaseCreateNestedManyWithoutPurchaseInput
  }

  export type PurchaseUncheckedCreateWithoutUpdatedByUserInput = {
    purchaseId?: number
    createdAt?: Date | string
    deletedAt?: Date | string | null
    createdBy?: number | null
    deletedBy?: number | null
    updatedAt?: Date | string | null
    isDeleted?: boolean
    productId: number
    productPurchase?: ProductPurchaseUncheckedCreateNestedManyWithoutPurchaseInput
  }

  export type PurchaseCreateOrConnectWithoutUpdatedByUserInput = {
    where: PurchaseWhereUniqueInput
    create: XOR<PurchaseCreateWithoutUpdatedByUserInput, PurchaseUncheckedCreateWithoutUpdatedByUserInput>
  }

  export type PurchaseCreateManyUpdatedByUserInputEnvelope = {
    data: PurchaseCreateManyUpdatedByUserInput | PurchaseCreateManyUpdatedByUserInput[]
    skipDuplicates?: boolean
  }

  export type ProductPurchaseCreateWithoutCreatedByUserInput = {
    purchasePrice: number
    purchaseQuantity: number
    createdAt?: Date | string
    deletedAt?: Date | string | null
    updatedAt?: Date | string | null
    isDeleted?: boolean
    deletedByUser?: UserCreateNestedOneWithoutDeletedProductPurchasesInput
    updatedByUser?: UserCreateNestedOneWithoutUpdatedProductPurchasesInput
    product: ProductCreateNestedOneWithoutProductPurchaseInput
    purchase: PurchaseCreateNestedOneWithoutProductPurchaseInput
  }

  export type ProductPurchaseUncheckedCreateWithoutCreatedByUserInput = {
    productPurchaseId?: number
    purchasePrice: number
    purchaseQuantity: number
    createdAt?: Date | string
    deletedAt?: Date | string | null
    deletedBy?: number | null
    updatedBy?: number | null
    updatedAt?: Date | string | null
    isDeleted?: boolean
    productId: number
    purchaseId: number
  }

  export type ProductPurchaseCreateOrConnectWithoutCreatedByUserInput = {
    where: ProductPurchaseWhereUniqueInput
    create: XOR<ProductPurchaseCreateWithoutCreatedByUserInput, ProductPurchaseUncheckedCreateWithoutCreatedByUserInput>
  }

  export type ProductPurchaseCreateManyCreatedByUserInputEnvelope = {
    data: ProductPurchaseCreateManyCreatedByUserInput | ProductPurchaseCreateManyCreatedByUserInput[]
    skipDuplicates?: boolean
  }

  export type ProductPurchaseCreateWithoutDeletedByUserInput = {
    purchasePrice: number
    purchaseQuantity: number
    createdAt?: Date | string
    deletedAt?: Date | string | null
    updatedAt?: Date | string | null
    isDeleted?: boolean
    createdByUser?: UserCreateNestedOneWithoutCreatedProductPurchasesInput
    updatedByUser?: UserCreateNestedOneWithoutUpdatedProductPurchasesInput
    product: ProductCreateNestedOneWithoutProductPurchaseInput
    purchase: PurchaseCreateNestedOneWithoutProductPurchaseInput
  }

  export type ProductPurchaseUncheckedCreateWithoutDeletedByUserInput = {
    productPurchaseId?: number
    purchasePrice: number
    purchaseQuantity: number
    createdAt?: Date | string
    deletedAt?: Date | string | null
    createdBy?: number | null
    updatedBy?: number | null
    updatedAt?: Date | string | null
    isDeleted?: boolean
    productId: number
    purchaseId: number
  }

  export type ProductPurchaseCreateOrConnectWithoutDeletedByUserInput = {
    where: ProductPurchaseWhereUniqueInput
    create: XOR<ProductPurchaseCreateWithoutDeletedByUserInput, ProductPurchaseUncheckedCreateWithoutDeletedByUserInput>
  }

  export type ProductPurchaseCreateManyDeletedByUserInputEnvelope = {
    data: ProductPurchaseCreateManyDeletedByUserInput | ProductPurchaseCreateManyDeletedByUserInput[]
    skipDuplicates?: boolean
  }

  export type ProductPurchaseCreateWithoutUpdatedByUserInput = {
    purchasePrice: number
    purchaseQuantity: number
    createdAt?: Date | string
    deletedAt?: Date | string | null
    updatedAt?: Date | string | null
    isDeleted?: boolean
    createdByUser?: UserCreateNestedOneWithoutCreatedProductPurchasesInput
    deletedByUser?: UserCreateNestedOneWithoutDeletedProductPurchasesInput
    product: ProductCreateNestedOneWithoutProductPurchaseInput
    purchase: PurchaseCreateNestedOneWithoutProductPurchaseInput
  }

  export type ProductPurchaseUncheckedCreateWithoutUpdatedByUserInput = {
    productPurchaseId?: number
    purchasePrice: number
    purchaseQuantity: number
    createdAt?: Date | string
    deletedAt?: Date | string | null
    createdBy?: number | null
    deletedBy?: number | null
    updatedAt?: Date | string | null
    isDeleted?: boolean
    productId: number
    purchaseId: number
  }

  export type ProductPurchaseCreateOrConnectWithoutUpdatedByUserInput = {
    where: ProductPurchaseWhereUniqueInput
    create: XOR<ProductPurchaseCreateWithoutUpdatedByUserInput, ProductPurchaseUncheckedCreateWithoutUpdatedByUserInput>
  }

  export type ProductPurchaseCreateManyUpdatedByUserInputEnvelope = {
    data: ProductPurchaseCreateManyUpdatedByUserInput | ProductPurchaseCreateManyUpdatedByUserInput[]
    skipDuplicates?: boolean
  }

  export type ProductSaleCreateWithoutCreatedByUserInput = {
    salePrice: number
    saleQuantity: number
    createdAt?: Date | string
    deletedAt?: Date | string | null
    updatedAt?: Date | string | null
    isDeleted?: boolean
    deletedByUser?: UserCreateNestedOneWithoutDeletedProductSalesInput
    updatedByUser?: UserCreateNestedOneWithoutUpdatedProductSalesInput
    product: ProductCreateNestedOneWithoutProductSaleInput
    sale: SaleCreateNestedOneWithoutProductSaleInput
  }

  export type ProductSaleUncheckedCreateWithoutCreatedByUserInput = {
    productSaleId?: number
    salePrice: number
    saleQuantity: number
    createdAt?: Date | string
    deletedAt?: Date | string | null
    deletedBy?: number | null
    updatedBy?: number | null
    updatedAt?: Date | string | null
    isDeleted?: boolean
    productId: number
    saleId: number
  }

  export type ProductSaleCreateOrConnectWithoutCreatedByUserInput = {
    where: ProductSaleWhereUniqueInput
    create: XOR<ProductSaleCreateWithoutCreatedByUserInput, ProductSaleUncheckedCreateWithoutCreatedByUserInput>
  }

  export type ProductSaleCreateManyCreatedByUserInputEnvelope = {
    data: ProductSaleCreateManyCreatedByUserInput | ProductSaleCreateManyCreatedByUserInput[]
    skipDuplicates?: boolean
  }

  export type ProductSaleCreateWithoutDeletedByUserInput = {
    salePrice: number
    saleQuantity: number
    createdAt?: Date | string
    deletedAt?: Date | string | null
    updatedAt?: Date | string | null
    isDeleted?: boolean
    createdByUser?: UserCreateNestedOneWithoutCreatedProductSalesInput
    updatedByUser?: UserCreateNestedOneWithoutUpdatedProductSalesInput
    product: ProductCreateNestedOneWithoutProductSaleInput
    sale: SaleCreateNestedOneWithoutProductSaleInput
  }

  export type ProductSaleUncheckedCreateWithoutDeletedByUserInput = {
    productSaleId?: number
    salePrice: number
    saleQuantity: number
    createdAt?: Date | string
    deletedAt?: Date | string | null
    createdBy?: number | null
    updatedBy?: number | null
    updatedAt?: Date | string | null
    isDeleted?: boolean
    productId: number
    saleId: number
  }

  export type ProductSaleCreateOrConnectWithoutDeletedByUserInput = {
    where: ProductSaleWhereUniqueInput
    create: XOR<ProductSaleCreateWithoutDeletedByUserInput, ProductSaleUncheckedCreateWithoutDeletedByUserInput>
  }

  export type ProductSaleCreateManyDeletedByUserInputEnvelope = {
    data: ProductSaleCreateManyDeletedByUserInput | ProductSaleCreateManyDeletedByUserInput[]
    skipDuplicates?: boolean
  }

  export type ProductSaleCreateWithoutUpdatedByUserInput = {
    salePrice: number
    saleQuantity: number
    createdAt?: Date | string
    deletedAt?: Date | string | null
    updatedAt?: Date | string | null
    isDeleted?: boolean
    createdByUser?: UserCreateNestedOneWithoutCreatedProductSalesInput
    deletedByUser?: UserCreateNestedOneWithoutDeletedProductSalesInput
    product: ProductCreateNestedOneWithoutProductSaleInput
    sale: SaleCreateNestedOneWithoutProductSaleInput
  }

  export type ProductSaleUncheckedCreateWithoutUpdatedByUserInput = {
    productSaleId?: number
    salePrice: number
    saleQuantity: number
    createdAt?: Date | string
    deletedAt?: Date | string | null
    createdBy?: number | null
    deletedBy?: number | null
    updatedAt?: Date | string | null
    isDeleted?: boolean
    productId: number
    saleId: number
  }

  export type ProductSaleCreateOrConnectWithoutUpdatedByUserInput = {
    where: ProductSaleWhereUniqueInput
    create: XOR<ProductSaleCreateWithoutUpdatedByUserInput, ProductSaleUncheckedCreateWithoutUpdatedByUserInput>
  }

  export type ProductSaleCreateManyUpdatedByUserInputEnvelope = {
    data: ProductSaleCreateManyUpdatedByUserInput | ProductSaleCreateManyUpdatedByUserInput[]
    skipDuplicates?: boolean
  }

  export type RoleCreateWithoutUsersInput = {
    roleType: string
    createdAt?: Date | string
    deletedAt?: Date | string | null
    updatedAt?: Date | string | null
    isDeleted?: boolean
    createdByUser?: UserCreateNestedOneWithoutCreatedRolesInput
    deletedByUser?: UserCreateNestedOneWithoutDeletedRolesInput
    updatedByUser?: UserCreateNestedOneWithoutUpdatedRolesInput
  }

  export type RoleUncheckedCreateWithoutUsersInput = {
    roleId?: number
    roleType: string
    createdAt?: Date | string
    deletedAt?: Date | string | null
    createdBy?: number | null
    deletedBy?: number | null
    updatedBy?: number | null
    updatedAt?: Date | string | null
    isDeleted?: boolean
  }

  export type RoleCreateOrConnectWithoutUsersInput = {
    where: RoleWhereUniqueInput
    create: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
  }

  export type ProductCreateWithoutUserInput = {
    imageUrl: string
    description: string
    category: string
    expiryDate?: Date | string | null
    productionDate?: Date | string | null
    quantity: number
    price: number
    costPrice: number
    createdAt?: Date | string
    deletedAt?: Date | string | null
    updatedAt?: Date | string | null
    isDeleted?: boolean
    createdByUser?: UserCreateNestedOneWithoutCreatedProductsInput
    deletedByUser?: UserCreateNestedOneWithoutDeletedProductsInput
    updatedByUser?: UserCreateNestedOneWithoutUpdatedProductsInput
    productPurchase?: ProductPurchaseCreateNestedManyWithoutProductInput
    productSale?: ProductSaleCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutUserInput = {
    productId?: number
    imageUrl: string
    description: string
    category: string
    expiryDate?: Date | string | null
    productionDate?: Date | string | null
    quantity: number
    price: number
    costPrice: number
    createdAt?: Date | string
    deletedAt?: Date | string | null
    createdBy?: number | null
    deletedBy?: number | null
    updatedBy?: number | null
    updatedAt?: Date | string | null
    isDeleted?: boolean
    productPurchase?: ProductPurchaseUncheckedCreateNestedManyWithoutProductInput
    productSale?: ProductSaleUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutUserInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutUserInput, ProductUncheckedCreateWithoutUserInput>
  }

  export type ProductCreateManyUserInputEnvelope = {
    data: ProductCreateManyUserInput | ProductCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type RoleUpsertWithWhereUniqueWithoutCreatedByUserInput = {
    where: RoleWhereUniqueInput
    update: XOR<RoleUpdateWithoutCreatedByUserInput, RoleUncheckedUpdateWithoutCreatedByUserInput>
    create: XOR<RoleCreateWithoutCreatedByUserInput, RoleUncheckedCreateWithoutCreatedByUserInput>
  }

  export type RoleUpdateWithWhereUniqueWithoutCreatedByUserInput = {
    where: RoleWhereUniqueInput
    data: XOR<RoleUpdateWithoutCreatedByUserInput, RoleUncheckedUpdateWithoutCreatedByUserInput>
  }

  export type RoleUpdateManyWithWhereWithoutCreatedByUserInput = {
    where: RoleScalarWhereInput
    data: XOR<RoleUpdateManyMutationInput, RoleUncheckedUpdateManyWithoutCreatedByUserInput>
  }

  export type RoleScalarWhereInput = {
    AND?: RoleScalarWhereInput | RoleScalarWhereInput[]
    OR?: RoleScalarWhereInput[]
    NOT?: RoleScalarWhereInput | RoleScalarWhereInput[]
    roleId?: IntFilter<"Role"> | number
    roleType?: StringFilter<"Role"> | string
    createdAt?: DateTimeFilter<"Role"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Role"> | Date | string | null
    createdBy?: IntNullableFilter<"Role"> | number | null
    deletedBy?: IntNullableFilter<"Role"> | number | null
    updatedBy?: IntNullableFilter<"Role"> | number | null
    updatedAt?: DateTimeNullableFilter<"Role"> | Date | string | null
    isDeleted?: BoolFilter<"Role"> | boolean
  }

  export type RoleUpsertWithWhereUniqueWithoutDeletedByUserInput = {
    where: RoleWhereUniqueInput
    update: XOR<RoleUpdateWithoutDeletedByUserInput, RoleUncheckedUpdateWithoutDeletedByUserInput>
    create: XOR<RoleCreateWithoutDeletedByUserInput, RoleUncheckedCreateWithoutDeletedByUserInput>
  }

  export type RoleUpdateWithWhereUniqueWithoutDeletedByUserInput = {
    where: RoleWhereUniqueInput
    data: XOR<RoleUpdateWithoutDeletedByUserInput, RoleUncheckedUpdateWithoutDeletedByUserInput>
  }

  export type RoleUpdateManyWithWhereWithoutDeletedByUserInput = {
    where: RoleScalarWhereInput
    data: XOR<RoleUpdateManyMutationInput, RoleUncheckedUpdateManyWithoutDeletedByUserInput>
  }

  export type RoleUpsertWithWhereUniqueWithoutUpdatedByUserInput = {
    where: RoleWhereUniqueInput
    update: XOR<RoleUpdateWithoutUpdatedByUserInput, RoleUncheckedUpdateWithoutUpdatedByUserInput>
    create: XOR<RoleCreateWithoutUpdatedByUserInput, RoleUncheckedCreateWithoutUpdatedByUserInput>
  }

  export type RoleUpdateWithWhereUniqueWithoutUpdatedByUserInput = {
    where: RoleWhereUniqueInput
    data: XOR<RoleUpdateWithoutUpdatedByUserInput, RoleUncheckedUpdateWithoutUpdatedByUserInput>
  }

  export type RoleUpdateManyWithWhereWithoutUpdatedByUserInput = {
    where: RoleScalarWhereInput
    data: XOR<RoleUpdateManyMutationInput, RoleUncheckedUpdateManyWithoutUpdatedByUserInput>
  }

  export type ProductUpsertWithWhereUniqueWithoutCreatedByUserInput = {
    where: ProductWhereUniqueInput
    update: XOR<ProductUpdateWithoutCreatedByUserInput, ProductUncheckedUpdateWithoutCreatedByUserInput>
    create: XOR<ProductCreateWithoutCreatedByUserInput, ProductUncheckedCreateWithoutCreatedByUserInput>
  }

  export type ProductUpdateWithWhereUniqueWithoutCreatedByUserInput = {
    where: ProductWhereUniqueInput
    data: XOR<ProductUpdateWithoutCreatedByUserInput, ProductUncheckedUpdateWithoutCreatedByUserInput>
  }

  export type ProductUpdateManyWithWhereWithoutCreatedByUserInput = {
    where: ProductScalarWhereInput
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyWithoutCreatedByUserInput>
  }

  export type ProductScalarWhereInput = {
    AND?: ProductScalarWhereInput | ProductScalarWhereInput[]
    OR?: ProductScalarWhereInput[]
    NOT?: ProductScalarWhereInput | ProductScalarWhereInput[]
    productId?: IntFilter<"Product"> | number
    imageUrl?: StringFilter<"Product"> | string
    description?: StringFilter<"Product"> | string
    category?: StringFilter<"Product"> | string
    expiryDate?: DateTimeNullableFilter<"Product"> | Date | string | null
    productionDate?: DateTimeNullableFilter<"Product"> | Date | string | null
    quantity?: IntFilter<"Product"> | number
    price?: FloatFilter<"Product"> | number
    costPrice?: FloatFilter<"Product"> | number
    createdAt?: DateTimeFilter<"Product"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Product"> | Date | string | null
    createdBy?: IntNullableFilter<"Product"> | number | null
    deletedBy?: IntNullableFilter<"Product"> | number | null
    updatedBy?: IntNullableFilter<"Product"> | number | null
    updatedAt?: DateTimeNullableFilter<"Product"> | Date | string | null
    isDeleted?: BoolFilter<"Product"> | boolean
    userId?: IntFilter<"Product"> | number
  }

  export type ProductUpsertWithWhereUniqueWithoutDeletedByUserInput = {
    where: ProductWhereUniqueInput
    update: XOR<ProductUpdateWithoutDeletedByUserInput, ProductUncheckedUpdateWithoutDeletedByUserInput>
    create: XOR<ProductCreateWithoutDeletedByUserInput, ProductUncheckedCreateWithoutDeletedByUserInput>
  }

  export type ProductUpdateWithWhereUniqueWithoutDeletedByUserInput = {
    where: ProductWhereUniqueInput
    data: XOR<ProductUpdateWithoutDeletedByUserInput, ProductUncheckedUpdateWithoutDeletedByUserInput>
  }

  export type ProductUpdateManyWithWhereWithoutDeletedByUserInput = {
    where: ProductScalarWhereInput
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyWithoutDeletedByUserInput>
  }

  export type ProductUpsertWithWhereUniqueWithoutUpdatedByUserInput = {
    where: ProductWhereUniqueInput
    update: XOR<ProductUpdateWithoutUpdatedByUserInput, ProductUncheckedUpdateWithoutUpdatedByUserInput>
    create: XOR<ProductCreateWithoutUpdatedByUserInput, ProductUncheckedCreateWithoutUpdatedByUserInput>
  }

  export type ProductUpdateWithWhereUniqueWithoutUpdatedByUserInput = {
    where: ProductWhereUniqueInput
    data: XOR<ProductUpdateWithoutUpdatedByUserInput, ProductUncheckedUpdateWithoutUpdatedByUserInput>
  }

  export type ProductUpdateManyWithWhereWithoutUpdatedByUserInput = {
    where: ProductScalarWhereInput
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyWithoutUpdatedByUserInput>
  }

  export type SaleUpsertWithWhereUniqueWithoutCreatedByUserInput = {
    where: SaleWhereUniqueInput
    update: XOR<SaleUpdateWithoutCreatedByUserInput, SaleUncheckedUpdateWithoutCreatedByUserInput>
    create: XOR<SaleCreateWithoutCreatedByUserInput, SaleUncheckedCreateWithoutCreatedByUserInput>
  }

  export type SaleUpdateWithWhereUniqueWithoutCreatedByUserInput = {
    where: SaleWhereUniqueInput
    data: XOR<SaleUpdateWithoutCreatedByUserInput, SaleUncheckedUpdateWithoutCreatedByUserInput>
  }

  export type SaleUpdateManyWithWhereWithoutCreatedByUserInput = {
    where: SaleScalarWhereInput
    data: XOR<SaleUpdateManyMutationInput, SaleUncheckedUpdateManyWithoutCreatedByUserInput>
  }

  export type SaleScalarWhereInput = {
    AND?: SaleScalarWhereInput | SaleScalarWhereInput[]
    OR?: SaleScalarWhereInput[]
    NOT?: SaleScalarWhereInput | SaleScalarWhereInput[]
    saleId?: IntFilter<"Sale"> | number
    createdAt?: DateTimeFilter<"Sale"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Sale"> | Date | string | null
    createdBy?: IntNullableFilter<"Sale"> | number | null
    deletedBy?: IntNullableFilter<"Sale"> | number | null
    updatedBy?: IntNullableFilter<"Sale"> | number | null
    updatedAt?: DateTimeNullableFilter<"Sale"> | Date | string | null
    isDeleted?: BoolFilter<"Sale"> | boolean
  }

  export type SaleUpsertWithWhereUniqueWithoutDeletedByUserInput = {
    where: SaleWhereUniqueInput
    update: XOR<SaleUpdateWithoutDeletedByUserInput, SaleUncheckedUpdateWithoutDeletedByUserInput>
    create: XOR<SaleCreateWithoutDeletedByUserInput, SaleUncheckedCreateWithoutDeletedByUserInput>
  }

  export type SaleUpdateWithWhereUniqueWithoutDeletedByUserInput = {
    where: SaleWhereUniqueInput
    data: XOR<SaleUpdateWithoutDeletedByUserInput, SaleUncheckedUpdateWithoutDeletedByUserInput>
  }

  export type SaleUpdateManyWithWhereWithoutDeletedByUserInput = {
    where: SaleScalarWhereInput
    data: XOR<SaleUpdateManyMutationInput, SaleUncheckedUpdateManyWithoutDeletedByUserInput>
  }

  export type SaleUpsertWithWhereUniqueWithoutUpdatedByUserInput = {
    where: SaleWhereUniqueInput
    update: XOR<SaleUpdateWithoutUpdatedByUserInput, SaleUncheckedUpdateWithoutUpdatedByUserInput>
    create: XOR<SaleCreateWithoutUpdatedByUserInput, SaleUncheckedCreateWithoutUpdatedByUserInput>
  }

  export type SaleUpdateWithWhereUniqueWithoutUpdatedByUserInput = {
    where: SaleWhereUniqueInput
    data: XOR<SaleUpdateWithoutUpdatedByUserInput, SaleUncheckedUpdateWithoutUpdatedByUserInput>
  }

  export type SaleUpdateManyWithWhereWithoutUpdatedByUserInput = {
    where: SaleScalarWhereInput
    data: XOR<SaleUpdateManyMutationInput, SaleUncheckedUpdateManyWithoutUpdatedByUserInput>
  }

  export type PurchaseUpsertWithWhereUniqueWithoutCreatedByUserInput = {
    where: PurchaseWhereUniqueInput
    update: XOR<PurchaseUpdateWithoutCreatedByUserInput, PurchaseUncheckedUpdateWithoutCreatedByUserInput>
    create: XOR<PurchaseCreateWithoutCreatedByUserInput, PurchaseUncheckedCreateWithoutCreatedByUserInput>
  }

  export type PurchaseUpdateWithWhereUniqueWithoutCreatedByUserInput = {
    where: PurchaseWhereUniqueInput
    data: XOR<PurchaseUpdateWithoutCreatedByUserInput, PurchaseUncheckedUpdateWithoutCreatedByUserInput>
  }

  export type PurchaseUpdateManyWithWhereWithoutCreatedByUserInput = {
    where: PurchaseScalarWhereInput
    data: XOR<PurchaseUpdateManyMutationInput, PurchaseUncheckedUpdateManyWithoutCreatedByUserInput>
  }

  export type PurchaseScalarWhereInput = {
    AND?: PurchaseScalarWhereInput | PurchaseScalarWhereInput[]
    OR?: PurchaseScalarWhereInput[]
    NOT?: PurchaseScalarWhereInput | PurchaseScalarWhereInput[]
    purchaseId?: IntFilter<"Purchase"> | number
    createdAt?: DateTimeFilter<"Purchase"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Purchase"> | Date | string | null
    createdBy?: IntNullableFilter<"Purchase"> | number | null
    deletedBy?: IntNullableFilter<"Purchase"> | number | null
    updatedBy?: IntNullableFilter<"Purchase"> | number | null
    updatedAt?: DateTimeNullableFilter<"Purchase"> | Date | string | null
    isDeleted?: BoolFilter<"Purchase"> | boolean
    productId?: IntFilter<"Purchase"> | number
  }

  export type PurchaseUpsertWithWhereUniqueWithoutDeletedByUserInput = {
    where: PurchaseWhereUniqueInput
    update: XOR<PurchaseUpdateWithoutDeletedByUserInput, PurchaseUncheckedUpdateWithoutDeletedByUserInput>
    create: XOR<PurchaseCreateWithoutDeletedByUserInput, PurchaseUncheckedCreateWithoutDeletedByUserInput>
  }

  export type PurchaseUpdateWithWhereUniqueWithoutDeletedByUserInput = {
    where: PurchaseWhereUniqueInput
    data: XOR<PurchaseUpdateWithoutDeletedByUserInput, PurchaseUncheckedUpdateWithoutDeletedByUserInput>
  }

  export type PurchaseUpdateManyWithWhereWithoutDeletedByUserInput = {
    where: PurchaseScalarWhereInput
    data: XOR<PurchaseUpdateManyMutationInput, PurchaseUncheckedUpdateManyWithoutDeletedByUserInput>
  }

  export type PurchaseUpsertWithWhereUniqueWithoutUpdatedByUserInput = {
    where: PurchaseWhereUniqueInput
    update: XOR<PurchaseUpdateWithoutUpdatedByUserInput, PurchaseUncheckedUpdateWithoutUpdatedByUserInput>
    create: XOR<PurchaseCreateWithoutUpdatedByUserInput, PurchaseUncheckedCreateWithoutUpdatedByUserInput>
  }

  export type PurchaseUpdateWithWhereUniqueWithoutUpdatedByUserInput = {
    where: PurchaseWhereUniqueInput
    data: XOR<PurchaseUpdateWithoutUpdatedByUserInput, PurchaseUncheckedUpdateWithoutUpdatedByUserInput>
  }

  export type PurchaseUpdateManyWithWhereWithoutUpdatedByUserInput = {
    where: PurchaseScalarWhereInput
    data: XOR<PurchaseUpdateManyMutationInput, PurchaseUncheckedUpdateManyWithoutUpdatedByUserInput>
  }

  export type ProductPurchaseUpsertWithWhereUniqueWithoutCreatedByUserInput = {
    where: ProductPurchaseWhereUniqueInput
    update: XOR<ProductPurchaseUpdateWithoutCreatedByUserInput, ProductPurchaseUncheckedUpdateWithoutCreatedByUserInput>
    create: XOR<ProductPurchaseCreateWithoutCreatedByUserInput, ProductPurchaseUncheckedCreateWithoutCreatedByUserInput>
  }

  export type ProductPurchaseUpdateWithWhereUniqueWithoutCreatedByUserInput = {
    where: ProductPurchaseWhereUniqueInput
    data: XOR<ProductPurchaseUpdateWithoutCreatedByUserInput, ProductPurchaseUncheckedUpdateWithoutCreatedByUserInput>
  }

  export type ProductPurchaseUpdateManyWithWhereWithoutCreatedByUserInput = {
    where: ProductPurchaseScalarWhereInput
    data: XOR<ProductPurchaseUpdateManyMutationInput, ProductPurchaseUncheckedUpdateManyWithoutCreatedByUserInput>
  }

  export type ProductPurchaseScalarWhereInput = {
    AND?: ProductPurchaseScalarWhereInput | ProductPurchaseScalarWhereInput[]
    OR?: ProductPurchaseScalarWhereInput[]
    NOT?: ProductPurchaseScalarWhereInput | ProductPurchaseScalarWhereInput[]
    productPurchaseId?: IntFilter<"ProductPurchase"> | number
    purchasePrice?: FloatFilter<"ProductPurchase"> | number
    purchaseQuantity?: IntFilter<"ProductPurchase"> | number
    createdAt?: DateTimeFilter<"ProductPurchase"> | Date | string
    deletedAt?: DateTimeNullableFilter<"ProductPurchase"> | Date | string | null
    createdBy?: IntNullableFilter<"ProductPurchase"> | number | null
    deletedBy?: IntNullableFilter<"ProductPurchase"> | number | null
    updatedBy?: IntNullableFilter<"ProductPurchase"> | number | null
    updatedAt?: DateTimeNullableFilter<"ProductPurchase"> | Date | string | null
    isDeleted?: BoolFilter<"ProductPurchase"> | boolean
    productId?: IntFilter<"ProductPurchase"> | number
    purchaseId?: IntFilter<"ProductPurchase"> | number
  }

  export type ProductPurchaseUpsertWithWhereUniqueWithoutDeletedByUserInput = {
    where: ProductPurchaseWhereUniqueInput
    update: XOR<ProductPurchaseUpdateWithoutDeletedByUserInput, ProductPurchaseUncheckedUpdateWithoutDeletedByUserInput>
    create: XOR<ProductPurchaseCreateWithoutDeletedByUserInput, ProductPurchaseUncheckedCreateWithoutDeletedByUserInput>
  }

  export type ProductPurchaseUpdateWithWhereUniqueWithoutDeletedByUserInput = {
    where: ProductPurchaseWhereUniqueInput
    data: XOR<ProductPurchaseUpdateWithoutDeletedByUserInput, ProductPurchaseUncheckedUpdateWithoutDeletedByUserInput>
  }

  export type ProductPurchaseUpdateManyWithWhereWithoutDeletedByUserInput = {
    where: ProductPurchaseScalarWhereInput
    data: XOR<ProductPurchaseUpdateManyMutationInput, ProductPurchaseUncheckedUpdateManyWithoutDeletedByUserInput>
  }

  export type ProductPurchaseUpsertWithWhereUniqueWithoutUpdatedByUserInput = {
    where: ProductPurchaseWhereUniqueInput
    update: XOR<ProductPurchaseUpdateWithoutUpdatedByUserInput, ProductPurchaseUncheckedUpdateWithoutUpdatedByUserInput>
    create: XOR<ProductPurchaseCreateWithoutUpdatedByUserInput, ProductPurchaseUncheckedCreateWithoutUpdatedByUserInput>
  }

  export type ProductPurchaseUpdateWithWhereUniqueWithoutUpdatedByUserInput = {
    where: ProductPurchaseWhereUniqueInput
    data: XOR<ProductPurchaseUpdateWithoutUpdatedByUserInput, ProductPurchaseUncheckedUpdateWithoutUpdatedByUserInput>
  }

  export type ProductPurchaseUpdateManyWithWhereWithoutUpdatedByUserInput = {
    where: ProductPurchaseScalarWhereInput
    data: XOR<ProductPurchaseUpdateManyMutationInput, ProductPurchaseUncheckedUpdateManyWithoutUpdatedByUserInput>
  }

  export type ProductSaleUpsertWithWhereUniqueWithoutCreatedByUserInput = {
    where: ProductSaleWhereUniqueInput
    update: XOR<ProductSaleUpdateWithoutCreatedByUserInput, ProductSaleUncheckedUpdateWithoutCreatedByUserInput>
    create: XOR<ProductSaleCreateWithoutCreatedByUserInput, ProductSaleUncheckedCreateWithoutCreatedByUserInput>
  }

  export type ProductSaleUpdateWithWhereUniqueWithoutCreatedByUserInput = {
    where: ProductSaleWhereUniqueInput
    data: XOR<ProductSaleUpdateWithoutCreatedByUserInput, ProductSaleUncheckedUpdateWithoutCreatedByUserInput>
  }

  export type ProductSaleUpdateManyWithWhereWithoutCreatedByUserInput = {
    where: ProductSaleScalarWhereInput
    data: XOR<ProductSaleUpdateManyMutationInput, ProductSaleUncheckedUpdateManyWithoutCreatedByUserInput>
  }

  export type ProductSaleScalarWhereInput = {
    AND?: ProductSaleScalarWhereInput | ProductSaleScalarWhereInput[]
    OR?: ProductSaleScalarWhereInput[]
    NOT?: ProductSaleScalarWhereInput | ProductSaleScalarWhereInput[]
    productSaleId?: IntFilter<"ProductSale"> | number
    salePrice?: FloatFilter<"ProductSale"> | number
    saleQuantity?: IntFilter<"ProductSale"> | number
    createdAt?: DateTimeFilter<"ProductSale"> | Date | string
    deletedAt?: DateTimeNullableFilter<"ProductSale"> | Date | string | null
    createdBy?: IntNullableFilter<"ProductSale"> | number | null
    deletedBy?: IntNullableFilter<"ProductSale"> | number | null
    updatedBy?: IntNullableFilter<"ProductSale"> | number | null
    updatedAt?: DateTimeNullableFilter<"ProductSale"> | Date | string | null
    isDeleted?: BoolFilter<"ProductSale"> | boolean
    productId?: IntFilter<"ProductSale"> | number
    saleId?: IntFilter<"ProductSale"> | number
  }

  export type ProductSaleUpsertWithWhereUniqueWithoutDeletedByUserInput = {
    where: ProductSaleWhereUniqueInput
    update: XOR<ProductSaleUpdateWithoutDeletedByUserInput, ProductSaleUncheckedUpdateWithoutDeletedByUserInput>
    create: XOR<ProductSaleCreateWithoutDeletedByUserInput, ProductSaleUncheckedCreateWithoutDeletedByUserInput>
  }

  export type ProductSaleUpdateWithWhereUniqueWithoutDeletedByUserInput = {
    where: ProductSaleWhereUniqueInput
    data: XOR<ProductSaleUpdateWithoutDeletedByUserInput, ProductSaleUncheckedUpdateWithoutDeletedByUserInput>
  }

  export type ProductSaleUpdateManyWithWhereWithoutDeletedByUserInput = {
    where: ProductSaleScalarWhereInput
    data: XOR<ProductSaleUpdateManyMutationInput, ProductSaleUncheckedUpdateManyWithoutDeletedByUserInput>
  }

  export type ProductSaleUpsertWithWhereUniqueWithoutUpdatedByUserInput = {
    where: ProductSaleWhereUniqueInput
    update: XOR<ProductSaleUpdateWithoutUpdatedByUserInput, ProductSaleUncheckedUpdateWithoutUpdatedByUserInput>
    create: XOR<ProductSaleCreateWithoutUpdatedByUserInput, ProductSaleUncheckedCreateWithoutUpdatedByUserInput>
  }

  export type ProductSaleUpdateWithWhereUniqueWithoutUpdatedByUserInput = {
    where: ProductSaleWhereUniqueInput
    data: XOR<ProductSaleUpdateWithoutUpdatedByUserInput, ProductSaleUncheckedUpdateWithoutUpdatedByUserInput>
  }

  export type ProductSaleUpdateManyWithWhereWithoutUpdatedByUserInput = {
    where: ProductSaleScalarWhereInput
    data: XOR<ProductSaleUpdateManyMutationInput, ProductSaleUncheckedUpdateManyWithoutUpdatedByUserInput>
  }

  export type RoleUpsertWithoutUsersInput = {
    update: XOR<RoleUpdateWithoutUsersInput, RoleUncheckedUpdateWithoutUsersInput>
    create: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
    where?: RoleWhereInput
  }

  export type RoleUpdateToOneWithWhereWithoutUsersInput = {
    where?: RoleWhereInput
    data: XOR<RoleUpdateWithoutUsersInput, RoleUncheckedUpdateWithoutUsersInput>
  }

  export type RoleUpdateWithoutUsersInput = {
    roleType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdByUser?: UserUpdateOneWithoutCreatedRolesNestedInput
    deletedByUser?: UserUpdateOneWithoutDeletedRolesNestedInput
    updatedByUser?: UserUpdateOneWithoutUpdatedRolesNestedInput
  }

  export type RoleUncheckedUpdateWithoutUsersInput = {
    roleId?: IntFieldUpdateOperationsInput | number
    roleType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ProductUpsertWithWhereUniqueWithoutUserInput = {
    where: ProductWhereUniqueInput
    update: XOR<ProductUpdateWithoutUserInput, ProductUncheckedUpdateWithoutUserInput>
    create: XOR<ProductCreateWithoutUserInput, ProductUncheckedCreateWithoutUserInput>
  }

  export type ProductUpdateWithWhereUniqueWithoutUserInput = {
    where: ProductWhereUniqueInput
    data: XOR<ProductUpdateWithoutUserInput, ProductUncheckedUpdateWithoutUserInput>
  }

  export type ProductUpdateManyWithWhereWithoutUserInput = {
    where: ProductScalarWhereInput
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyWithoutUserInput>
  }

  export type UserCreateWithoutCreatedRolesInput = {
    name: string
    email: string
    password: string
    createdAt?: Date | string
    deletedAt?: Date | string | null
    createdBy?: number | null
    deletedBy?: number | null
    isDeleted?: boolean
    deletedRoles?: RoleCreateNestedManyWithoutDeletedByUserInput
    updatedRoles?: RoleCreateNestedManyWithoutUpdatedByUserInput
    createdProducts?: ProductCreateNestedManyWithoutCreatedByUserInput
    deletedProducts?: ProductCreateNestedManyWithoutDeletedByUserInput
    updatedProducts?: ProductCreateNestedManyWithoutUpdatedByUserInput
    createdSales?: SaleCreateNestedManyWithoutCreatedByUserInput
    deletedSales?: SaleCreateNestedManyWithoutDeletedByUserInput
    updatedSales?: SaleCreateNestedManyWithoutUpdatedByUserInput
    createdPurchases?: PurchaseCreateNestedManyWithoutCreatedByUserInput
    deletedPurchases?: PurchaseCreateNestedManyWithoutDeletedByUserInput
    updatedPurchases?: PurchaseCreateNestedManyWithoutUpdatedByUserInput
    createdProductPurchases?: ProductPurchaseCreateNestedManyWithoutCreatedByUserInput
    deletedProductPurchases?: ProductPurchaseCreateNestedManyWithoutDeletedByUserInput
    updatedProductPurchases?: ProductPurchaseCreateNestedManyWithoutUpdatedByUserInput
    createdProductSales?: ProductSaleCreateNestedManyWithoutCreatedByUserInput
    deletedProductSales?: ProductSaleCreateNestedManyWithoutDeletedByUserInput
    updatedProductSales?: ProductSaleCreateNestedManyWithoutUpdatedByUserInput
    role: RoleCreateNestedOneWithoutUsersInput
    ownedProducts?: ProductCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCreatedRolesInput = {
    userId?: number
    name: string
    email: string
    password: string
    createdAt?: Date | string
    deletedAt?: Date | string | null
    createdBy?: number | null
    deletedBy?: number | null
    isDeleted?: boolean
    roleId: number
    deletedRoles?: RoleUncheckedCreateNestedManyWithoutDeletedByUserInput
    updatedRoles?: RoleUncheckedCreateNestedManyWithoutUpdatedByUserInput
    createdProducts?: ProductUncheckedCreateNestedManyWithoutCreatedByUserInput
    deletedProducts?: ProductUncheckedCreateNestedManyWithoutDeletedByUserInput
    updatedProducts?: ProductUncheckedCreateNestedManyWithoutUpdatedByUserInput
    createdSales?: SaleUncheckedCreateNestedManyWithoutCreatedByUserInput
    deletedSales?: SaleUncheckedCreateNestedManyWithoutDeletedByUserInput
    updatedSales?: SaleUncheckedCreateNestedManyWithoutUpdatedByUserInput
    createdPurchases?: PurchaseUncheckedCreateNestedManyWithoutCreatedByUserInput
    deletedPurchases?: PurchaseUncheckedCreateNestedManyWithoutDeletedByUserInput
    updatedPurchases?: PurchaseUncheckedCreateNestedManyWithoutUpdatedByUserInput
    createdProductPurchases?: ProductPurchaseUncheckedCreateNestedManyWithoutCreatedByUserInput
    deletedProductPurchases?: ProductPurchaseUncheckedCreateNestedManyWithoutDeletedByUserInput
    updatedProductPurchases?: ProductPurchaseUncheckedCreateNestedManyWithoutUpdatedByUserInput
    createdProductSales?: ProductSaleUncheckedCreateNestedManyWithoutCreatedByUserInput
    deletedProductSales?: ProductSaleUncheckedCreateNestedManyWithoutDeletedByUserInput
    updatedProductSales?: ProductSaleUncheckedCreateNestedManyWithoutUpdatedByUserInput
    ownedProducts?: ProductUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCreatedRolesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCreatedRolesInput, UserUncheckedCreateWithoutCreatedRolesInput>
  }

  export type UserCreateWithoutDeletedRolesInput = {
    name: string
    email: string
    password: string
    createdAt?: Date | string
    deletedAt?: Date | string | null
    createdBy?: number | null
    deletedBy?: number | null
    isDeleted?: boolean
    createdRoles?: RoleCreateNestedManyWithoutCreatedByUserInput
    updatedRoles?: RoleCreateNestedManyWithoutUpdatedByUserInput
    createdProducts?: ProductCreateNestedManyWithoutCreatedByUserInput
    deletedProducts?: ProductCreateNestedManyWithoutDeletedByUserInput
    updatedProducts?: ProductCreateNestedManyWithoutUpdatedByUserInput
    createdSales?: SaleCreateNestedManyWithoutCreatedByUserInput
    deletedSales?: SaleCreateNestedManyWithoutDeletedByUserInput
    updatedSales?: SaleCreateNestedManyWithoutUpdatedByUserInput
    createdPurchases?: PurchaseCreateNestedManyWithoutCreatedByUserInput
    deletedPurchases?: PurchaseCreateNestedManyWithoutDeletedByUserInput
    updatedPurchases?: PurchaseCreateNestedManyWithoutUpdatedByUserInput
    createdProductPurchases?: ProductPurchaseCreateNestedManyWithoutCreatedByUserInput
    deletedProductPurchases?: ProductPurchaseCreateNestedManyWithoutDeletedByUserInput
    updatedProductPurchases?: ProductPurchaseCreateNestedManyWithoutUpdatedByUserInput
    createdProductSales?: ProductSaleCreateNestedManyWithoutCreatedByUserInput
    deletedProductSales?: ProductSaleCreateNestedManyWithoutDeletedByUserInput
    updatedProductSales?: ProductSaleCreateNestedManyWithoutUpdatedByUserInput
    role: RoleCreateNestedOneWithoutUsersInput
    ownedProducts?: ProductCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutDeletedRolesInput = {
    userId?: number
    name: string
    email: string
    password: string
    createdAt?: Date | string
    deletedAt?: Date | string | null
    createdBy?: number | null
    deletedBy?: number | null
    isDeleted?: boolean
    roleId: number
    createdRoles?: RoleUncheckedCreateNestedManyWithoutCreatedByUserInput
    updatedRoles?: RoleUncheckedCreateNestedManyWithoutUpdatedByUserInput
    createdProducts?: ProductUncheckedCreateNestedManyWithoutCreatedByUserInput
    deletedProducts?: ProductUncheckedCreateNestedManyWithoutDeletedByUserInput
    updatedProducts?: ProductUncheckedCreateNestedManyWithoutUpdatedByUserInput
    createdSales?: SaleUncheckedCreateNestedManyWithoutCreatedByUserInput
    deletedSales?: SaleUncheckedCreateNestedManyWithoutDeletedByUserInput
    updatedSales?: SaleUncheckedCreateNestedManyWithoutUpdatedByUserInput
    createdPurchases?: PurchaseUncheckedCreateNestedManyWithoutCreatedByUserInput
    deletedPurchases?: PurchaseUncheckedCreateNestedManyWithoutDeletedByUserInput
    updatedPurchases?: PurchaseUncheckedCreateNestedManyWithoutUpdatedByUserInput
    createdProductPurchases?: ProductPurchaseUncheckedCreateNestedManyWithoutCreatedByUserInput
    deletedProductPurchases?: ProductPurchaseUncheckedCreateNestedManyWithoutDeletedByUserInput
    updatedProductPurchases?: ProductPurchaseUncheckedCreateNestedManyWithoutUpdatedByUserInput
    createdProductSales?: ProductSaleUncheckedCreateNestedManyWithoutCreatedByUserInput
    deletedProductSales?: ProductSaleUncheckedCreateNestedManyWithoutDeletedByUserInput
    updatedProductSales?: ProductSaleUncheckedCreateNestedManyWithoutUpdatedByUserInput
    ownedProducts?: ProductUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutDeletedRolesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDeletedRolesInput, UserUncheckedCreateWithoutDeletedRolesInput>
  }

  export type UserCreateWithoutUpdatedRolesInput = {
    name: string
    email: string
    password: string
    createdAt?: Date | string
    deletedAt?: Date | string | null
    createdBy?: number | null
    deletedBy?: number | null
    isDeleted?: boolean
    createdRoles?: RoleCreateNestedManyWithoutCreatedByUserInput
    deletedRoles?: RoleCreateNestedManyWithoutDeletedByUserInput
    createdProducts?: ProductCreateNestedManyWithoutCreatedByUserInput
    deletedProducts?: ProductCreateNestedManyWithoutDeletedByUserInput
    updatedProducts?: ProductCreateNestedManyWithoutUpdatedByUserInput
    createdSales?: SaleCreateNestedManyWithoutCreatedByUserInput
    deletedSales?: SaleCreateNestedManyWithoutDeletedByUserInput
    updatedSales?: SaleCreateNestedManyWithoutUpdatedByUserInput
    createdPurchases?: PurchaseCreateNestedManyWithoutCreatedByUserInput
    deletedPurchases?: PurchaseCreateNestedManyWithoutDeletedByUserInput
    updatedPurchases?: PurchaseCreateNestedManyWithoutUpdatedByUserInput
    createdProductPurchases?: ProductPurchaseCreateNestedManyWithoutCreatedByUserInput
    deletedProductPurchases?: ProductPurchaseCreateNestedManyWithoutDeletedByUserInput
    updatedProductPurchases?: ProductPurchaseCreateNestedManyWithoutUpdatedByUserInput
    createdProductSales?: ProductSaleCreateNestedManyWithoutCreatedByUserInput
    deletedProductSales?: ProductSaleCreateNestedManyWithoutDeletedByUserInput
    updatedProductSales?: ProductSaleCreateNestedManyWithoutUpdatedByUserInput
    role: RoleCreateNestedOneWithoutUsersInput
    ownedProducts?: ProductCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUpdatedRolesInput = {
    userId?: number
    name: string
    email: string
    password: string
    createdAt?: Date | string
    deletedAt?: Date | string | null
    createdBy?: number | null
    deletedBy?: number | null
    isDeleted?: boolean
    roleId: number
    createdRoles?: RoleUncheckedCreateNestedManyWithoutCreatedByUserInput
    deletedRoles?: RoleUncheckedCreateNestedManyWithoutDeletedByUserInput
    createdProducts?: ProductUncheckedCreateNestedManyWithoutCreatedByUserInput
    deletedProducts?: ProductUncheckedCreateNestedManyWithoutDeletedByUserInput
    updatedProducts?: ProductUncheckedCreateNestedManyWithoutUpdatedByUserInput
    createdSales?: SaleUncheckedCreateNestedManyWithoutCreatedByUserInput
    deletedSales?: SaleUncheckedCreateNestedManyWithoutDeletedByUserInput
    updatedSales?: SaleUncheckedCreateNestedManyWithoutUpdatedByUserInput
    createdPurchases?: PurchaseUncheckedCreateNestedManyWithoutCreatedByUserInput
    deletedPurchases?: PurchaseUncheckedCreateNestedManyWithoutDeletedByUserInput
    updatedPurchases?: PurchaseUncheckedCreateNestedManyWithoutUpdatedByUserInput
    createdProductPurchases?: ProductPurchaseUncheckedCreateNestedManyWithoutCreatedByUserInput
    deletedProductPurchases?: ProductPurchaseUncheckedCreateNestedManyWithoutDeletedByUserInput
    updatedProductPurchases?: ProductPurchaseUncheckedCreateNestedManyWithoutUpdatedByUserInput
    createdProductSales?: ProductSaleUncheckedCreateNestedManyWithoutCreatedByUserInput
    deletedProductSales?: ProductSaleUncheckedCreateNestedManyWithoutDeletedByUserInput
    updatedProductSales?: ProductSaleUncheckedCreateNestedManyWithoutUpdatedByUserInput
    ownedProducts?: ProductUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUpdatedRolesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUpdatedRolesInput, UserUncheckedCreateWithoutUpdatedRolesInput>
  }

  export type UserCreateWithoutRoleInput = {
    name: string
    email: string
    password: string
    createdAt?: Date | string
    deletedAt?: Date | string | null
    createdBy?: number | null
    deletedBy?: number | null
    isDeleted?: boolean
    createdRoles?: RoleCreateNestedManyWithoutCreatedByUserInput
    deletedRoles?: RoleCreateNestedManyWithoutDeletedByUserInput
    updatedRoles?: RoleCreateNestedManyWithoutUpdatedByUserInput
    createdProducts?: ProductCreateNestedManyWithoutCreatedByUserInput
    deletedProducts?: ProductCreateNestedManyWithoutDeletedByUserInput
    updatedProducts?: ProductCreateNestedManyWithoutUpdatedByUserInput
    createdSales?: SaleCreateNestedManyWithoutCreatedByUserInput
    deletedSales?: SaleCreateNestedManyWithoutDeletedByUserInput
    updatedSales?: SaleCreateNestedManyWithoutUpdatedByUserInput
    createdPurchases?: PurchaseCreateNestedManyWithoutCreatedByUserInput
    deletedPurchases?: PurchaseCreateNestedManyWithoutDeletedByUserInput
    updatedPurchases?: PurchaseCreateNestedManyWithoutUpdatedByUserInput
    createdProductPurchases?: ProductPurchaseCreateNestedManyWithoutCreatedByUserInput
    deletedProductPurchases?: ProductPurchaseCreateNestedManyWithoutDeletedByUserInput
    updatedProductPurchases?: ProductPurchaseCreateNestedManyWithoutUpdatedByUserInput
    createdProductSales?: ProductSaleCreateNestedManyWithoutCreatedByUserInput
    deletedProductSales?: ProductSaleCreateNestedManyWithoutDeletedByUserInput
    updatedProductSales?: ProductSaleCreateNestedManyWithoutUpdatedByUserInput
    ownedProducts?: ProductCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRoleInput = {
    userId?: number
    name: string
    email: string
    password: string
    createdAt?: Date | string
    deletedAt?: Date | string | null
    createdBy?: number | null
    deletedBy?: number | null
    isDeleted?: boolean
    createdRoles?: RoleUncheckedCreateNestedManyWithoutCreatedByUserInput
    deletedRoles?: RoleUncheckedCreateNestedManyWithoutDeletedByUserInput
    updatedRoles?: RoleUncheckedCreateNestedManyWithoutUpdatedByUserInput
    createdProducts?: ProductUncheckedCreateNestedManyWithoutCreatedByUserInput
    deletedProducts?: ProductUncheckedCreateNestedManyWithoutDeletedByUserInput
    updatedProducts?: ProductUncheckedCreateNestedManyWithoutUpdatedByUserInput
    createdSales?: SaleUncheckedCreateNestedManyWithoutCreatedByUserInput
    deletedSales?: SaleUncheckedCreateNestedManyWithoutDeletedByUserInput
    updatedSales?: SaleUncheckedCreateNestedManyWithoutUpdatedByUserInput
    createdPurchases?: PurchaseUncheckedCreateNestedManyWithoutCreatedByUserInput
    deletedPurchases?: PurchaseUncheckedCreateNestedManyWithoutDeletedByUserInput
    updatedPurchases?: PurchaseUncheckedCreateNestedManyWithoutUpdatedByUserInput
    createdProductPurchases?: ProductPurchaseUncheckedCreateNestedManyWithoutCreatedByUserInput
    deletedProductPurchases?: ProductPurchaseUncheckedCreateNestedManyWithoutDeletedByUserInput
    updatedProductPurchases?: ProductPurchaseUncheckedCreateNestedManyWithoutUpdatedByUserInput
    createdProductSales?: ProductSaleUncheckedCreateNestedManyWithoutCreatedByUserInput
    deletedProductSales?: ProductSaleUncheckedCreateNestedManyWithoutDeletedByUserInput
    updatedProductSales?: ProductSaleUncheckedCreateNestedManyWithoutUpdatedByUserInput
    ownedProducts?: ProductUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRoleInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput>
  }

  export type UserCreateManyRoleInputEnvelope = {
    data: UserCreateManyRoleInput | UserCreateManyRoleInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutCreatedRolesInput = {
    update: XOR<UserUpdateWithoutCreatedRolesInput, UserUncheckedUpdateWithoutCreatedRolesInput>
    create: XOR<UserCreateWithoutCreatedRolesInput, UserUncheckedCreateWithoutCreatedRolesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCreatedRolesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCreatedRolesInput, UserUncheckedUpdateWithoutCreatedRolesInput>
  }

  export type UserUpdateWithoutCreatedRolesInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedRoles?: RoleUpdateManyWithoutDeletedByUserNestedInput
    updatedRoles?: RoleUpdateManyWithoutUpdatedByUserNestedInput
    createdProducts?: ProductUpdateManyWithoutCreatedByUserNestedInput
    deletedProducts?: ProductUpdateManyWithoutDeletedByUserNestedInput
    updatedProducts?: ProductUpdateManyWithoutUpdatedByUserNestedInput
    createdSales?: SaleUpdateManyWithoutCreatedByUserNestedInput
    deletedSales?: SaleUpdateManyWithoutDeletedByUserNestedInput
    updatedSales?: SaleUpdateManyWithoutUpdatedByUserNestedInput
    createdPurchases?: PurchaseUpdateManyWithoutCreatedByUserNestedInput
    deletedPurchases?: PurchaseUpdateManyWithoutDeletedByUserNestedInput
    updatedPurchases?: PurchaseUpdateManyWithoutUpdatedByUserNestedInput
    createdProductPurchases?: ProductPurchaseUpdateManyWithoutCreatedByUserNestedInput
    deletedProductPurchases?: ProductPurchaseUpdateManyWithoutDeletedByUserNestedInput
    updatedProductPurchases?: ProductPurchaseUpdateManyWithoutUpdatedByUserNestedInput
    createdProductSales?: ProductSaleUpdateManyWithoutCreatedByUserNestedInput
    deletedProductSales?: ProductSaleUpdateManyWithoutDeletedByUserNestedInput
    updatedProductSales?: ProductSaleUpdateManyWithoutUpdatedByUserNestedInput
    role?: RoleUpdateOneRequiredWithoutUsersNestedInput
    ownedProducts?: ProductUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCreatedRolesInput = {
    userId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    roleId?: IntFieldUpdateOperationsInput | number
    deletedRoles?: RoleUncheckedUpdateManyWithoutDeletedByUserNestedInput
    updatedRoles?: RoleUncheckedUpdateManyWithoutUpdatedByUserNestedInput
    createdProducts?: ProductUncheckedUpdateManyWithoutCreatedByUserNestedInput
    deletedProducts?: ProductUncheckedUpdateManyWithoutDeletedByUserNestedInput
    updatedProducts?: ProductUncheckedUpdateManyWithoutUpdatedByUserNestedInput
    createdSales?: SaleUncheckedUpdateManyWithoutCreatedByUserNestedInput
    deletedSales?: SaleUncheckedUpdateManyWithoutDeletedByUserNestedInput
    updatedSales?: SaleUncheckedUpdateManyWithoutUpdatedByUserNestedInput
    createdPurchases?: PurchaseUncheckedUpdateManyWithoutCreatedByUserNestedInput
    deletedPurchases?: PurchaseUncheckedUpdateManyWithoutDeletedByUserNestedInput
    updatedPurchases?: PurchaseUncheckedUpdateManyWithoutUpdatedByUserNestedInput
    createdProductPurchases?: ProductPurchaseUncheckedUpdateManyWithoutCreatedByUserNestedInput
    deletedProductPurchases?: ProductPurchaseUncheckedUpdateManyWithoutDeletedByUserNestedInput
    updatedProductPurchases?: ProductPurchaseUncheckedUpdateManyWithoutUpdatedByUserNestedInput
    createdProductSales?: ProductSaleUncheckedUpdateManyWithoutCreatedByUserNestedInput
    deletedProductSales?: ProductSaleUncheckedUpdateManyWithoutDeletedByUserNestedInput
    updatedProductSales?: ProductSaleUncheckedUpdateManyWithoutUpdatedByUserNestedInput
    ownedProducts?: ProductUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUpsertWithoutDeletedRolesInput = {
    update: XOR<UserUpdateWithoutDeletedRolesInput, UserUncheckedUpdateWithoutDeletedRolesInput>
    create: XOR<UserCreateWithoutDeletedRolesInput, UserUncheckedCreateWithoutDeletedRolesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDeletedRolesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDeletedRolesInput, UserUncheckedUpdateWithoutDeletedRolesInput>
  }

  export type UserUpdateWithoutDeletedRolesInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdRoles?: RoleUpdateManyWithoutCreatedByUserNestedInput
    updatedRoles?: RoleUpdateManyWithoutUpdatedByUserNestedInput
    createdProducts?: ProductUpdateManyWithoutCreatedByUserNestedInput
    deletedProducts?: ProductUpdateManyWithoutDeletedByUserNestedInput
    updatedProducts?: ProductUpdateManyWithoutUpdatedByUserNestedInput
    createdSales?: SaleUpdateManyWithoutCreatedByUserNestedInput
    deletedSales?: SaleUpdateManyWithoutDeletedByUserNestedInput
    updatedSales?: SaleUpdateManyWithoutUpdatedByUserNestedInput
    createdPurchases?: PurchaseUpdateManyWithoutCreatedByUserNestedInput
    deletedPurchases?: PurchaseUpdateManyWithoutDeletedByUserNestedInput
    updatedPurchases?: PurchaseUpdateManyWithoutUpdatedByUserNestedInput
    createdProductPurchases?: ProductPurchaseUpdateManyWithoutCreatedByUserNestedInput
    deletedProductPurchases?: ProductPurchaseUpdateManyWithoutDeletedByUserNestedInput
    updatedProductPurchases?: ProductPurchaseUpdateManyWithoutUpdatedByUserNestedInput
    createdProductSales?: ProductSaleUpdateManyWithoutCreatedByUserNestedInput
    deletedProductSales?: ProductSaleUpdateManyWithoutDeletedByUserNestedInput
    updatedProductSales?: ProductSaleUpdateManyWithoutUpdatedByUserNestedInput
    role?: RoleUpdateOneRequiredWithoutUsersNestedInput
    ownedProducts?: ProductUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutDeletedRolesInput = {
    userId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    roleId?: IntFieldUpdateOperationsInput | number
    createdRoles?: RoleUncheckedUpdateManyWithoutCreatedByUserNestedInput
    updatedRoles?: RoleUncheckedUpdateManyWithoutUpdatedByUserNestedInput
    createdProducts?: ProductUncheckedUpdateManyWithoutCreatedByUserNestedInput
    deletedProducts?: ProductUncheckedUpdateManyWithoutDeletedByUserNestedInput
    updatedProducts?: ProductUncheckedUpdateManyWithoutUpdatedByUserNestedInput
    createdSales?: SaleUncheckedUpdateManyWithoutCreatedByUserNestedInput
    deletedSales?: SaleUncheckedUpdateManyWithoutDeletedByUserNestedInput
    updatedSales?: SaleUncheckedUpdateManyWithoutUpdatedByUserNestedInput
    createdPurchases?: PurchaseUncheckedUpdateManyWithoutCreatedByUserNestedInput
    deletedPurchases?: PurchaseUncheckedUpdateManyWithoutDeletedByUserNestedInput
    updatedPurchases?: PurchaseUncheckedUpdateManyWithoutUpdatedByUserNestedInput
    createdProductPurchases?: ProductPurchaseUncheckedUpdateManyWithoutCreatedByUserNestedInput
    deletedProductPurchases?: ProductPurchaseUncheckedUpdateManyWithoutDeletedByUserNestedInput
    updatedProductPurchases?: ProductPurchaseUncheckedUpdateManyWithoutUpdatedByUserNestedInput
    createdProductSales?: ProductSaleUncheckedUpdateManyWithoutCreatedByUserNestedInput
    deletedProductSales?: ProductSaleUncheckedUpdateManyWithoutDeletedByUserNestedInput
    updatedProductSales?: ProductSaleUncheckedUpdateManyWithoutUpdatedByUserNestedInput
    ownedProducts?: ProductUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUpsertWithoutUpdatedRolesInput = {
    update: XOR<UserUpdateWithoutUpdatedRolesInput, UserUncheckedUpdateWithoutUpdatedRolesInput>
    create: XOR<UserCreateWithoutUpdatedRolesInput, UserUncheckedCreateWithoutUpdatedRolesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUpdatedRolesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUpdatedRolesInput, UserUncheckedUpdateWithoutUpdatedRolesInput>
  }

  export type UserUpdateWithoutUpdatedRolesInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdRoles?: RoleUpdateManyWithoutCreatedByUserNestedInput
    deletedRoles?: RoleUpdateManyWithoutDeletedByUserNestedInput
    createdProducts?: ProductUpdateManyWithoutCreatedByUserNestedInput
    deletedProducts?: ProductUpdateManyWithoutDeletedByUserNestedInput
    updatedProducts?: ProductUpdateManyWithoutUpdatedByUserNestedInput
    createdSales?: SaleUpdateManyWithoutCreatedByUserNestedInput
    deletedSales?: SaleUpdateManyWithoutDeletedByUserNestedInput
    updatedSales?: SaleUpdateManyWithoutUpdatedByUserNestedInput
    createdPurchases?: PurchaseUpdateManyWithoutCreatedByUserNestedInput
    deletedPurchases?: PurchaseUpdateManyWithoutDeletedByUserNestedInput
    updatedPurchases?: PurchaseUpdateManyWithoutUpdatedByUserNestedInput
    createdProductPurchases?: ProductPurchaseUpdateManyWithoutCreatedByUserNestedInput
    deletedProductPurchases?: ProductPurchaseUpdateManyWithoutDeletedByUserNestedInput
    updatedProductPurchases?: ProductPurchaseUpdateManyWithoutUpdatedByUserNestedInput
    createdProductSales?: ProductSaleUpdateManyWithoutCreatedByUserNestedInput
    deletedProductSales?: ProductSaleUpdateManyWithoutDeletedByUserNestedInput
    updatedProductSales?: ProductSaleUpdateManyWithoutUpdatedByUserNestedInput
    role?: RoleUpdateOneRequiredWithoutUsersNestedInput
    ownedProducts?: ProductUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUpdatedRolesInput = {
    userId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    roleId?: IntFieldUpdateOperationsInput | number
    createdRoles?: RoleUncheckedUpdateManyWithoutCreatedByUserNestedInput
    deletedRoles?: RoleUncheckedUpdateManyWithoutDeletedByUserNestedInput
    createdProducts?: ProductUncheckedUpdateManyWithoutCreatedByUserNestedInput
    deletedProducts?: ProductUncheckedUpdateManyWithoutDeletedByUserNestedInput
    updatedProducts?: ProductUncheckedUpdateManyWithoutUpdatedByUserNestedInput
    createdSales?: SaleUncheckedUpdateManyWithoutCreatedByUserNestedInput
    deletedSales?: SaleUncheckedUpdateManyWithoutDeletedByUserNestedInput
    updatedSales?: SaleUncheckedUpdateManyWithoutUpdatedByUserNestedInput
    createdPurchases?: PurchaseUncheckedUpdateManyWithoutCreatedByUserNestedInput
    deletedPurchases?: PurchaseUncheckedUpdateManyWithoutDeletedByUserNestedInput
    updatedPurchases?: PurchaseUncheckedUpdateManyWithoutUpdatedByUserNestedInput
    createdProductPurchases?: ProductPurchaseUncheckedUpdateManyWithoutCreatedByUserNestedInput
    deletedProductPurchases?: ProductPurchaseUncheckedUpdateManyWithoutDeletedByUserNestedInput
    updatedProductPurchases?: ProductPurchaseUncheckedUpdateManyWithoutUpdatedByUserNestedInput
    createdProductSales?: ProductSaleUncheckedUpdateManyWithoutCreatedByUserNestedInput
    deletedProductSales?: ProductSaleUncheckedUpdateManyWithoutDeletedByUserNestedInput
    updatedProductSales?: ProductSaleUncheckedUpdateManyWithoutUpdatedByUserNestedInput
    ownedProducts?: ProductUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUpsertWithWhereUniqueWithoutRoleInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutRoleInput, UserUncheckedUpdateWithoutRoleInput>
    create: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput>
  }

  export type UserUpdateWithWhereUniqueWithoutRoleInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutRoleInput, UserUncheckedUpdateWithoutRoleInput>
  }

  export type UserUpdateManyWithWhereWithoutRoleInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutRoleInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    userId?: IntFilter<"User"> | number
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    deletedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    createdBy?: IntNullableFilter<"User"> | number | null
    deletedBy?: IntNullableFilter<"User"> | number | null
    isDeleted?: BoolFilter<"User"> | boolean
    roleId?: IntFilter<"User"> | number
  }

  export type UserCreateWithoutCreatedProductsInput = {
    name: string
    email: string
    password: string
    createdAt?: Date | string
    deletedAt?: Date | string | null
    createdBy?: number | null
    deletedBy?: number | null
    isDeleted?: boolean
    createdRoles?: RoleCreateNestedManyWithoutCreatedByUserInput
    deletedRoles?: RoleCreateNestedManyWithoutDeletedByUserInput
    updatedRoles?: RoleCreateNestedManyWithoutUpdatedByUserInput
    deletedProducts?: ProductCreateNestedManyWithoutDeletedByUserInput
    updatedProducts?: ProductCreateNestedManyWithoutUpdatedByUserInput
    createdSales?: SaleCreateNestedManyWithoutCreatedByUserInput
    deletedSales?: SaleCreateNestedManyWithoutDeletedByUserInput
    updatedSales?: SaleCreateNestedManyWithoutUpdatedByUserInput
    createdPurchases?: PurchaseCreateNestedManyWithoutCreatedByUserInput
    deletedPurchases?: PurchaseCreateNestedManyWithoutDeletedByUserInput
    updatedPurchases?: PurchaseCreateNestedManyWithoutUpdatedByUserInput
    createdProductPurchases?: ProductPurchaseCreateNestedManyWithoutCreatedByUserInput
    deletedProductPurchases?: ProductPurchaseCreateNestedManyWithoutDeletedByUserInput
    updatedProductPurchases?: ProductPurchaseCreateNestedManyWithoutUpdatedByUserInput
    createdProductSales?: ProductSaleCreateNestedManyWithoutCreatedByUserInput
    deletedProductSales?: ProductSaleCreateNestedManyWithoutDeletedByUserInput
    updatedProductSales?: ProductSaleCreateNestedManyWithoutUpdatedByUserInput
    role: RoleCreateNestedOneWithoutUsersInput
    ownedProducts?: ProductCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCreatedProductsInput = {
    userId?: number
    name: string
    email: string
    password: string
    createdAt?: Date | string
    deletedAt?: Date | string | null
    createdBy?: number | null
    deletedBy?: number | null
    isDeleted?: boolean
    roleId: number
    createdRoles?: RoleUncheckedCreateNestedManyWithoutCreatedByUserInput
    deletedRoles?: RoleUncheckedCreateNestedManyWithoutDeletedByUserInput
    updatedRoles?: RoleUncheckedCreateNestedManyWithoutUpdatedByUserInput
    deletedProducts?: ProductUncheckedCreateNestedManyWithoutDeletedByUserInput
    updatedProducts?: ProductUncheckedCreateNestedManyWithoutUpdatedByUserInput
    createdSales?: SaleUncheckedCreateNestedManyWithoutCreatedByUserInput
    deletedSales?: SaleUncheckedCreateNestedManyWithoutDeletedByUserInput
    updatedSales?: SaleUncheckedCreateNestedManyWithoutUpdatedByUserInput
    createdPurchases?: PurchaseUncheckedCreateNestedManyWithoutCreatedByUserInput
    deletedPurchases?: PurchaseUncheckedCreateNestedManyWithoutDeletedByUserInput
    updatedPurchases?: PurchaseUncheckedCreateNestedManyWithoutUpdatedByUserInput
    createdProductPurchases?: ProductPurchaseUncheckedCreateNestedManyWithoutCreatedByUserInput
    deletedProductPurchases?: ProductPurchaseUncheckedCreateNestedManyWithoutDeletedByUserInput
    updatedProductPurchases?: ProductPurchaseUncheckedCreateNestedManyWithoutUpdatedByUserInput
    createdProductSales?: ProductSaleUncheckedCreateNestedManyWithoutCreatedByUserInput
    deletedProductSales?: ProductSaleUncheckedCreateNestedManyWithoutDeletedByUserInput
    updatedProductSales?: ProductSaleUncheckedCreateNestedManyWithoutUpdatedByUserInput
    ownedProducts?: ProductUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCreatedProductsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCreatedProductsInput, UserUncheckedCreateWithoutCreatedProductsInput>
  }

  export type UserCreateWithoutDeletedProductsInput = {
    name: string
    email: string
    password: string
    createdAt?: Date | string
    deletedAt?: Date | string | null
    createdBy?: number | null
    deletedBy?: number | null
    isDeleted?: boolean
    createdRoles?: RoleCreateNestedManyWithoutCreatedByUserInput
    deletedRoles?: RoleCreateNestedManyWithoutDeletedByUserInput
    updatedRoles?: RoleCreateNestedManyWithoutUpdatedByUserInput
    createdProducts?: ProductCreateNestedManyWithoutCreatedByUserInput
    updatedProducts?: ProductCreateNestedManyWithoutUpdatedByUserInput
    createdSales?: SaleCreateNestedManyWithoutCreatedByUserInput
    deletedSales?: SaleCreateNestedManyWithoutDeletedByUserInput
    updatedSales?: SaleCreateNestedManyWithoutUpdatedByUserInput
    createdPurchases?: PurchaseCreateNestedManyWithoutCreatedByUserInput
    deletedPurchases?: PurchaseCreateNestedManyWithoutDeletedByUserInput
    updatedPurchases?: PurchaseCreateNestedManyWithoutUpdatedByUserInput
    createdProductPurchases?: ProductPurchaseCreateNestedManyWithoutCreatedByUserInput
    deletedProductPurchases?: ProductPurchaseCreateNestedManyWithoutDeletedByUserInput
    updatedProductPurchases?: ProductPurchaseCreateNestedManyWithoutUpdatedByUserInput
    createdProductSales?: ProductSaleCreateNestedManyWithoutCreatedByUserInput
    deletedProductSales?: ProductSaleCreateNestedManyWithoutDeletedByUserInput
    updatedProductSales?: ProductSaleCreateNestedManyWithoutUpdatedByUserInput
    role: RoleCreateNestedOneWithoutUsersInput
    ownedProducts?: ProductCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutDeletedProductsInput = {
    userId?: number
    name: string
    email: string
    password: string
    createdAt?: Date | string
    deletedAt?: Date | string | null
    createdBy?: number | null
    deletedBy?: number | null
    isDeleted?: boolean
    roleId: number
    createdRoles?: RoleUncheckedCreateNestedManyWithoutCreatedByUserInput
    deletedRoles?: RoleUncheckedCreateNestedManyWithoutDeletedByUserInput
    updatedRoles?: RoleUncheckedCreateNestedManyWithoutUpdatedByUserInput
    createdProducts?: ProductUncheckedCreateNestedManyWithoutCreatedByUserInput
    updatedProducts?: ProductUncheckedCreateNestedManyWithoutUpdatedByUserInput
    createdSales?: SaleUncheckedCreateNestedManyWithoutCreatedByUserInput
    deletedSales?: SaleUncheckedCreateNestedManyWithoutDeletedByUserInput
    updatedSales?: SaleUncheckedCreateNestedManyWithoutUpdatedByUserInput
    createdPurchases?: PurchaseUncheckedCreateNestedManyWithoutCreatedByUserInput
    deletedPurchases?: PurchaseUncheckedCreateNestedManyWithoutDeletedByUserInput
    updatedPurchases?: PurchaseUncheckedCreateNestedManyWithoutUpdatedByUserInput
    createdProductPurchases?: ProductPurchaseUncheckedCreateNestedManyWithoutCreatedByUserInput
    deletedProductPurchases?: ProductPurchaseUncheckedCreateNestedManyWithoutDeletedByUserInput
    updatedProductPurchases?: ProductPurchaseUncheckedCreateNestedManyWithoutUpdatedByUserInput
    createdProductSales?: ProductSaleUncheckedCreateNestedManyWithoutCreatedByUserInput
    deletedProductSales?: ProductSaleUncheckedCreateNestedManyWithoutDeletedByUserInput
    updatedProductSales?: ProductSaleUncheckedCreateNestedManyWithoutUpdatedByUserInput
    ownedProducts?: ProductUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutDeletedProductsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDeletedProductsInput, UserUncheckedCreateWithoutDeletedProductsInput>
  }

  export type UserCreateWithoutUpdatedProductsInput = {
    name: string
    email: string
    password: string
    createdAt?: Date | string
    deletedAt?: Date | string | null
    createdBy?: number | null
    deletedBy?: number | null
    isDeleted?: boolean
    createdRoles?: RoleCreateNestedManyWithoutCreatedByUserInput
    deletedRoles?: RoleCreateNestedManyWithoutDeletedByUserInput
    updatedRoles?: RoleCreateNestedManyWithoutUpdatedByUserInput
    createdProducts?: ProductCreateNestedManyWithoutCreatedByUserInput
    deletedProducts?: ProductCreateNestedManyWithoutDeletedByUserInput
    createdSales?: SaleCreateNestedManyWithoutCreatedByUserInput
    deletedSales?: SaleCreateNestedManyWithoutDeletedByUserInput
    updatedSales?: SaleCreateNestedManyWithoutUpdatedByUserInput
    createdPurchases?: PurchaseCreateNestedManyWithoutCreatedByUserInput
    deletedPurchases?: PurchaseCreateNestedManyWithoutDeletedByUserInput
    updatedPurchases?: PurchaseCreateNestedManyWithoutUpdatedByUserInput
    createdProductPurchases?: ProductPurchaseCreateNestedManyWithoutCreatedByUserInput
    deletedProductPurchases?: ProductPurchaseCreateNestedManyWithoutDeletedByUserInput
    updatedProductPurchases?: ProductPurchaseCreateNestedManyWithoutUpdatedByUserInput
    createdProductSales?: ProductSaleCreateNestedManyWithoutCreatedByUserInput
    deletedProductSales?: ProductSaleCreateNestedManyWithoutDeletedByUserInput
    updatedProductSales?: ProductSaleCreateNestedManyWithoutUpdatedByUserInput
    role: RoleCreateNestedOneWithoutUsersInput
    ownedProducts?: ProductCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUpdatedProductsInput = {
    userId?: number
    name: string
    email: string
    password: string
    createdAt?: Date | string
    deletedAt?: Date | string | null
    createdBy?: number | null
    deletedBy?: number | null
    isDeleted?: boolean
    roleId: number
    createdRoles?: RoleUncheckedCreateNestedManyWithoutCreatedByUserInput
    deletedRoles?: RoleUncheckedCreateNestedManyWithoutDeletedByUserInput
    updatedRoles?: RoleUncheckedCreateNestedManyWithoutUpdatedByUserInput
    createdProducts?: ProductUncheckedCreateNestedManyWithoutCreatedByUserInput
    deletedProducts?: ProductUncheckedCreateNestedManyWithoutDeletedByUserInput
    createdSales?: SaleUncheckedCreateNestedManyWithoutCreatedByUserInput
    deletedSales?: SaleUncheckedCreateNestedManyWithoutDeletedByUserInput
    updatedSales?: SaleUncheckedCreateNestedManyWithoutUpdatedByUserInput
    createdPurchases?: PurchaseUncheckedCreateNestedManyWithoutCreatedByUserInput
    deletedPurchases?: PurchaseUncheckedCreateNestedManyWithoutDeletedByUserInput
    updatedPurchases?: PurchaseUncheckedCreateNestedManyWithoutUpdatedByUserInput
    createdProductPurchases?: ProductPurchaseUncheckedCreateNestedManyWithoutCreatedByUserInput
    deletedProductPurchases?: ProductPurchaseUncheckedCreateNestedManyWithoutDeletedByUserInput
    updatedProductPurchases?: ProductPurchaseUncheckedCreateNestedManyWithoutUpdatedByUserInput
    createdProductSales?: ProductSaleUncheckedCreateNestedManyWithoutCreatedByUserInput
    deletedProductSales?: ProductSaleUncheckedCreateNestedManyWithoutDeletedByUserInput
    updatedProductSales?: ProductSaleUncheckedCreateNestedManyWithoutUpdatedByUserInput
    ownedProducts?: ProductUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUpdatedProductsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUpdatedProductsInput, UserUncheckedCreateWithoutUpdatedProductsInput>
  }

  export type UserCreateWithoutOwnedProductsInput = {
    name: string
    email: string
    password: string
    createdAt?: Date | string
    deletedAt?: Date | string | null
    createdBy?: number | null
    deletedBy?: number | null
    isDeleted?: boolean
    createdRoles?: RoleCreateNestedManyWithoutCreatedByUserInput
    deletedRoles?: RoleCreateNestedManyWithoutDeletedByUserInput
    updatedRoles?: RoleCreateNestedManyWithoutUpdatedByUserInput
    createdProducts?: ProductCreateNestedManyWithoutCreatedByUserInput
    deletedProducts?: ProductCreateNestedManyWithoutDeletedByUserInput
    updatedProducts?: ProductCreateNestedManyWithoutUpdatedByUserInput
    createdSales?: SaleCreateNestedManyWithoutCreatedByUserInput
    deletedSales?: SaleCreateNestedManyWithoutDeletedByUserInput
    updatedSales?: SaleCreateNestedManyWithoutUpdatedByUserInput
    createdPurchases?: PurchaseCreateNestedManyWithoutCreatedByUserInput
    deletedPurchases?: PurchaseCreateNestedManyWithoutDeletedByUserInput
    updatedPurchases?: PurchaseCreateNestedManyWithoutUpdatedByUserInput
    createdProductPurchases?: ProductPurchaseCreateNestedManyWithoutCreatedByUserInput
    deletedProductPurchases?: ProductPurchaseCreateNestedManyWithoutDeletedByUserInput
    updatedProductPurchases?: ProductPurchaseCreateNestedManyWithoutUpdatedByUserInput
    createdProductSales?: ProductSaleCreateNestedManyWithoutCreatedByUserInput
    deletedProductSales?: ProductSaleCreateNestedManyWithoutDeletedByUserInput
    updatedProductSales?: ProductSaleCreateNestedManyWithoutUpdatedByUserInput
    role: RoleCreateNestedOneWithoutUsersInput
  }

  export type UserUncheckedCreateWithoutOwnedProductsInput = {
    userId?: number
    name: string
    email: string
    password: string
    createdAt?: Date | string
    deletedAt?: Date | string | null
    createdBy?: number | null
    deletedBy?: number | null
    isDeleted?: boolean
    roleId: number
    createdRoles?: RoleUncheckedCreateNestedManyWithoutCreatedByUserInput
    deletedRoles?: RoleUncheckedCreateNestedManyWithoutDeletedByUserInput
    updatedRoles?: RoleUncheckedCreateNestedManyWithoutUpdatedByUserInput
    createdProducts?: ProductUncheckedCreateNestedManyWithoutCreatedByUserInput
    deletedProducts?: ProductUncheckedCreateNestedManyWithoutDeletedByUserInput
    updatedProducts?: ProductUncheckedCreateNestedManyWithoutUpdatedByUserInput
    createdSales?: SaleUncheckedCreateNestedManyWithoutCreatedByUserInput
    deletedSales?: SaleUncheckedCreateNestedManyWithoutDeletedByUserInput
    updatedSales?: SaleUncheckedCreateNestedManyWithoutUpdatedByUserInput
    createdPurchases?: PurchaseUncheckedCreateNestedManyWithoutCreatedByUserInput
    deletedPurchases?: PurchaseUncheckedCreateNestedManyWithoutDeletedByUserInput
    updatedPurchases?: PurchaseUncheckedCreateNestedManyWithoutUpdatedByUserInput
    createdProductPurchases?: ProductPurchaseUncheckedCreateNestedManyWithoutCreatedByUserInput
    deletedProductPurchases?: ProductPurchaseUncheckedCreateNestedManyWithoutDeletedByUserInput
    updatedProductPurchases?: ProductPurchaseUncheckedCreateNestedManyWithoutUpdatedByUserInput
    createdProductSales?: ProductSaleUncheckedCreateNestedManyWithoutCreatedByUserInput
    deletedProductSales?: ProductSaleUncheckedCreateNestedManyWithoutDeletedByUserInput
    updatedProductSales?: ProductSaleUncheckedCreateNestedManyWithoutUpdatedByUserInput
  }

  export type UserCreateOrConnectWithoutOwnedProductsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOwnedProductsInput, UserUncheckedCreateWithoutOwnedProductsInput>
  }

  export type ProductPurchaseCreateWithoutProductInput = {
    purchasePrice: number
    purchaseQuantity: number
    createdAt?: Date | string
    deletedAt?: Date | string | null
    updatedAt?: Date | string | null
    isDeleted?: boolean
    createdByUser?: UserCreateNestedOneWithoutCreatedProductPurchasesInput
    deletedByUser?: UserCreateNestedOneWithoutDeletedProductPurchasesInput
    updatedByUser?: UserCreateNestedOneWithoutUpdatedProductPurchasesInput
    purchase: PurchaseCreateNestedOneWithoutProductPurchaseInput
  }

  export type ProductPurchaseUncheckedCreateWithoutProductInput = {
    productPurchaseId?: number
    purchasePrice: number
    purchaseQuantity: number
    createdAt?: Date | string
    deletedAt?: Date | string | null
    createdBy?: number | null
    deletedBy?: number | null
    updatedBy?: number | null
    updatedAt?: Date | string | null
    isDeleted?: boolean
    purchaseId: number
  }

  export type ProductPurchaseCreateOrConnectWithoutProductInput = {
    where: ProductPurchaseWhereUniqueInput
    create: XOR<ProductPurchaseCreateWithoutProductInput, ProductPurchaseUncheckedCreateWithoutProductInput>
  }

  export type ProductPurchaseCreateManyProductInputEnvelope = {
    data: ProductPurchaseCreateManyProductInput | ProductPurchaseCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type ProductSaleCreateWithoutProductInput = {
    salePrice: number
    saleQuantity: number
    createdAt?: Date | string
    deletedAt?: Date | string | null
    updatedAt?: Date | string | null
    isDeleted?: boolean
    createdByUser?: UserCreateNestedOneWithoutCreatedProductSalesInput
    deletedByUser?: UserCreateNestedOneWithoutDeletedProductSalesInput
    updatedByUser?: UserCreateNestedOneWithoutUpdatedProductSalesInput
    sale: SaleCreateNestedOneWithoutProductSaleInput
  }

  export type ProductSaleUncheckedCreateWithoutProductInput = {
    productSaleId?: number
    salePrice: number
    saleQuantity: number
    createdAt?: Date | string
    deletedAt?: Date | string | null
    createdBy?: number | null
    deletedBy?: number | null
    updatedBy?: number | null
    updatedAt?: Date | string | null
    isDeleted?: boolean
    saleId: number
  }

  export type ProductSaleCreateOrConnectWithoutProductInput = {
    where: ProductSaleWhereUniqueInput
    create: XOR<ProductSaleCreateWithoutProductInput, ProductSaleUncheckedCreateWithoutProductInput>
  }

  export type ProductSaleCreateManyProductInputEnvelope = {
    data: ProductSaleCreateManyProductInput | ProductSaleCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutCreatedProductsInput = {
    update: XOR<UserUpdateWithoutCreatedProductsInput, UserUncheckedUpdateWithoutCreatedProductsInput>
    create: XOR<UserCreateWithoutCreatedProductsInput, UserUncheckedCreateWithoutCreatedProductsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCreatedProductsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCreatedProductsInput, UserUncheckedUpdateWithoutCreatedProductsInput>
  }

  export type UserUpdateWithoutCreatedProductsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdRoles?: RoleUpdateManyWithoutCreatedByUserNestedInput
    deletedRoles?: RoleUpdateManyWithoutDeletedByUserNestedInput
    updatedRoles?: RoleUpdateManyWithoutUpdatedByUserNestedInput
    deletedProducts?: ProductUpdateManyWithoutDeletedByUserNestedInput
    updatedProducts?: ProductUpdateManyWithoutUpdatedByUserNestedInput
    createdSales?: SaleUpdateManyWithoutCreatedByUserNestedInput
    deletedSales?: SaleUpdateManyWithoutDeletedByUserNestedInput
    updatedSales?: SaleUpdateManyWithoutUpdatedByUserNestedInput
    createdPurchases?: PurchaseUpdateManyWithoutCreatedByUserNestedInput
    deletedPurchases?: PurchaseUpdateManyWithoutDeletedByUserNestedInput
    updatedPurchases?: PurchaseUpdateManyWithoutUpdatedByUserNestedInput
    createdProductPurchases?: ProductPurchaseUpdateManyWithoutCreatedByUserNestedInput
    deletedProductPurchases?: ProductPurchaseUpdateManyWithoutDeletedByUserNestedInput
    updatedProductPurchases?: ProductPurchaseUpdateManyWithoutUpdatedByUserNestedInput
    createdProductSales?: ProductSaleUpdateManyWithoutCreatedByUserNestedInput
    deletedProductSales?: ProductSaleUpdateManyWithoutDeletedByUserNestedInput
    updatedProductSales?: ProductSaleUpdateManyWithoutUpdatedByUserNestedInput
    role?: RoleUpdateOneRequiredWithoutUsersNestedInput
    ownedProducts?: ProductUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCreatedProductsInput = {
    userId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    roleId?: IntFieldUpdateOperationsInput | number
    createdRoles?: RoleUncheckedUpdateManyWithoutCreatedByUserNestedInput
    deletedRoles?: RoleUncheckedUpdateManyWithoutDeletedByUserNestedInput
    updatedRoles?: RoleUncheckedUpdateManyWithoutUpdatedByUserNestedInput
    deletedProducts?: ProductUncheckedUpdateManyWithoutDeletedByUserNestedInput
    updatedProducts?: ProductUncheckedUpdateManyWithoutUpdatedByUserNestedInput
    createdSales?: SaleUncheckedUpdateManyWithoutCreatedByUserNestedInput
    deletedSales?: SaleUncheckedUpdateManyWithoutDeletedByUserNestedInput
    updatedSales?: SaleUncheckedUpdateManyWithoutUpdatedByUserNestedInput
    createdPurchases?: PurchaseUncheckedUpdateManyWithoutCreatedByUserNestedInput
    deletedPurchases?: PurchaseUncheckedUpdateManyWithoutDeletedByUserNestedInput
    updatedPurchases?: PurchaseUncheckedUpdateManyWithoutUpdatedByUserNestedInput
    createdProductPurchases?: ProductPurchaseUncheckedUpdateManyWithoutCreatedByUserNestedInput
    deletedProductPurchases?: ProductPurchaseUncheckedUpdateManyWithoutDeletedByUserNestedInput
    updatedProductPurchases?: ProductPurchaseUncheckedUpdateManyWithoutUpdatedByUserNestedInput
    createdProductSales?: ProductSaleUncheckedUpdateManyWithoutCreatedByUserNestedInput
    deletedProductSales?: ProductSaleUncheckedUpdateManyWithoutDeletedByUserNestedInput
    updatedProductSales?: ProductSaleUncheckedUpdateManyWithoutUpdatedByUserNestedInput
    ownedProducts?: ProductUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUpsertWithoutDeletedProductsInput = {
    update: XOR<UserUpdateWithoutDeletedProductsInput, UserUncheckedUpdateWithoutDeletedProductsInput>
    create: XOR<UserCreateWithoutDeletedProductsInput, UserUncheckedCreateWithoutDeletedProductsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDeletedProductsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDeletedProductsInput, UserUncheckedUpdateWithoutDeletedProductsInput>
  }

  export type UserUpdateWithoutDeletedProductsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdRoles?: RoleUpdateManyWithoutCreatedByUserNestedInput
    deletedRoles?: RoleUpdateManyWithoutDeletedByUserNestedInput
    updatedRoles?: RoleUpdateManyWithoutUpdatedByUserNestedInput
    createdProducts?: ProductUpdateManyWithoutCreatedByUserNestedInput
    updatedProducts?: ProductUpdateManyWithoutUpdatedByUserNestedInput
    createdSales?: SaleUpdateManyWithoutCreatedByUserNestedInput
    deletedSales?: SaleUpdateManyWithoutDeletedByUserNestedInput
    updatedSales?: SaleUpdateManyWithoutUpdatedByUserNestedInput
    createdPurchases?: PurchaseUpdateManyWithoutCreatedByUserNestedInput
    deletedPurchases?: PurchaseUpdateManyWithoutDeletedByUserNestedInput
    updatedPurchases?: PurchaseUpdateManyWithoutUpdatedByUserNestedInput
    createdProductPurchases?: ProductPurchaseUpdateManyWithoutCreatedByUserNestedInput
    deletedProductPurchases?: ProductPurchaseUpdateManyWithoutDeletedByUserNestedInput
    updatedProductPurchases?: ProductPurchaseUpdateManyWithoutUpdatedByUserNestedInput
    createdProductSales?: ProductSaleUpdateManyWithoutCreatedByUserNestedInput
    deletedProductSales?: ProductSaleUpdateManyWithoutDeletedByUserNestedInput
    updatedProductSales?: ProductSaleUpdateManyWithoutUpdatedByUserNestedInput
    role?: RoleUpdateOneRequiredWithoutUsersNestedInput
    ownedProducts?: ProductUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutDeletedProductsInput = {
    userId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    roleId?: IntFieldUpdateOperationsInput | number
    createdRoles?: RoleUncheckedUpdateManyWithoutCreatedByUserNestedInput
    deletedRoles?: RoleUncheckedUpdateManyWithoutDeletedByUserNestedInput
    updatedRoles?: RoleUncheckedUpdateManyWithoutUpdatedByUserNestedInput
    createdProducts?: ProductUncheckedUpdateManyWithoutCreatedByUserNestedInput
    updatedProducts?: ProductUncheckedUpdateManyWithoutUpdatedByUserNestedInput
    createdSales?: SaleUncheckedUpdateManyWithoutCreatedByUserNestedInput
    deletedSales?: SaleUncheckedUpdateManyWithoutDeletedByUserNestedInput
    updatedSales?: SaleUncheckedUpdateManyWithoutUpdatedByUserNestedInput
    createdPurchases?: PurchaseUncheckedUpdateManyWithoutCreatedByUserNestedInput
    deletedPurchases?: PurchaseUncheckedUpdateManyWithoutDeletedByUserNestedInput
    updatedPurchases?: PurchaseUncheckedUpdateManyWithoutUpdatedByUserNestedInput
    createdProductPurchases?: ProductPurchaseUncheckedUpdateManyWithoutCreatedByUserNestedInput
    deletedProductPurchases?: ProductPurchaseUncheckedUpdateManyWithoutDeletedByUserNestedInput
    updatedProductPurchases?: ProductPurchaseUncheckedUpdateManyWithoutUpdatedByUserNestedInput
    createdProductSales?: ProductSaleUncheckedUpdateManyWithoutCreatedByUserNestedInput
    deletedProductSales?: ProductSaleUncheckedUpdateManyWithoutDeletedByUserNestedInput
    updatedProductSales?: ProductSaleUncheckedUpdateManyWithoutUpdatedByUserNestedInput
    ownedProducts?: ProductUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUpsertWithoutUpdatedProductsInput = {
    update: XOR<UserUpdateWithoutUpdatedProductsInput, UserUncheckedUpdateWithoutUpdatedProductsInput>
    create: XOR<UserCreateWithoutUpdatedProductsInput, UserUncheckedCreateWithoutUpdatedProductsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUpdatedProductsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUpdatedProductsInput, UserUncheckedUpdateWithoutUpdatedProductsInput>
  }

  export type UserUpdateWithoutUpdatedProductsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdRoles?: RoleUpdateManyWithoutCreatedByUserNestedInput
    deletedRoles?: RoleUpdateManyWithoutDeletedByUserNestedInput
    updatedRoles?: RoleUpdateManyWithoutUpdatedByUserNestedInput
    createdProducts?: ProductUpdateManyWithoutCreatedByUserNestedInput
    deletedProducts?: ProductUpdateManyWithoutDeletedByUserNestedInput
    createdSales?: SaleUpdateManyWithoutCreatedByUserNestedInput
    deletedSales?: SaleUpdateManyWithoutDeletedByUserNestedInput
    updatedSales?: SaleUpdateManyWithoutUpdatedByUserNestedInput
    createdPurchases?: PurchaseUpdateManyWithoutCreatedByUserNestedInput
    deletedPurchases?: PurchaseUpdateManyWithoutDeletedByUserNestedInput
    updatedPurchases?: PurchaseUpdateManyWithoutUpdatedByUserNestedInput
    createdProductPurchases?: ProductPurchaseUpdateManyWithoutCreatedByUserNestedInput
    deletedProductPurchases?: ProductPurchaseUpdateManyWithoutDeletedByUserNestedInput
    updatedProductPurchases?: ProductPurchaseUpdateManyWithoutUpdatedByUserNestedInput
    createdProductSales?: ProductSaleUpdateManyWithoutCreatedByUserNestedInput
    deletedProductSales?: ProductSaleUpdateManyWithoutDeletedByUserNestedInput
    updatedProductSales?: ProductSaleUpdateManyWithoutUpdatedByUserNestedInput
    role?: RoleUpdateOneRequiredWithoutUsersNestedInput
    ownedProducts?: ProductUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUpdatedProductsInput = {
    userId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    roleId?: IntFieldUpdateOperationsInput | number
    createdRoles?: RoleUncheckedUpdateManyWithoutCreatedByUserNestedInput
    deletedRoles?: RoleUncheckedUpdateManyWithoutDeletedByUserNestedInput
    updatedRoles?: RoleUncheckedUpdateManyWithoutUpdatedByUserNestedInput
    createdProducts?: ProductUncheckedUpdateManyWithoutCreatedByUserNestedInput
    deletedProducts?: ProductUncheckedUpdateManyWithoutDeletedByUserNestedInput
    createdSales?: SaleUncheckedUpdateManyWithoutCreatedByUserNestedInput
    deletedSales?: SaleUncheckedUpdateManyWithoutDeletedByUserNestedInput
    updatedSales?: SaleUncheckedUpdateManyWithoutUpdatedByUserNestedInput
    createdPurchases?: PurchaseUncheckedUpdateManyWithoutCreatedByUserNestedInput
    deletedPurchases?: PurchaseUncheckedUpdateManyWithoutDeletedByUserNestedInput
    updatedPurchases?: PurchaseUncheckedUpdateManyWithoutUpdatedByUserNestedInput
    createdProductPurchases?: ProductPurchaseUncheckedUpdateManyWithoutCreatedByUserNestedInput
    deletedProductPurchases?: ProductPurchaseUncheckedUpdateManyWithoutDeletedByUserNestedInput
    updatedProductPurchases?: ProductPurchaseUncheckedUpdateManyWithoutUpdatedByUserNestedInput
    createdProductSales?: ProductSaleUncheckedUpdateManyWithoutCreatedByUserNestedInput
    deletedProductSales?: ProductSaleUncheckedUpdateManyWithoutDeletedByUserNestedInput
    updatedProductSales?: ProductSaleUncheckedUpdateManyWithoutUpdatedByUserNestedInput
    ownedProducts?: ProductUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUpsertWithoutOwnedProductsInput = {
    update: XOR<UserUpdateWithoutOwnedProductsInput, UserUncheckedUpdateWithoutOwnedProductsInput>
    create: XOR<UserCreateWithoutOwnedProductsInput, UserUncheckedCreateWithoutOwnedProductsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutOwnedProductsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutOwnedProductsInput, UserUncheckedUpdateWithoutOwnedProductsInput>
  }

  export type UserUpdateWithoutOwnedProductsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdRoles?: RoleUpdateManyWithoutCreatedByUserNestedInput
    deletedRoles?: RoleUpdateManyWithoutDeletedByUserNestedInput
    updatedRoles?: RoleUpdateManyWithoutUpdatedByUserNestedInput
    createdProducts?: ProductUpdateManyWithoutCreatedByUserNestedInput
    deletedProducts?: ProductUpdateManyWithoutDeletedByUserNestedInput
    updatedProducts?: ProductUpdateManyWithoutUpdatedByUserNestedInput
    createdSales?: SaleUpdateManyWithoutCreatedByUserNestedInput
    deletedSales?: SaleUpdateManyWithoutDeletedByUserNestedInput
    updatedSales?: SaleUpdateManyWithoutUpdatedByUserNestedInput
    createdPurchases?: PurchaseUpdateManyWithoutCreatedByUserNestedInput
    deletedPurchases?: PurchaseUpdateManyWithoutDeletedByUserNestedInput
    updatedPurchases?: PurchaseUpdateManyWithoutUpdatedByUserNestedInput
    createdProductPurchases?: ProductPurchaseUpdateManyWithoutCreatedByUserNestedInput
    deletedProductPurchases?: ProductPurchaseUpdateManyWithoutDeletedByUserNestedInput
    updatedProductPurchases?: ProductPurchaseUpdateManyWithoutUpdatedByUserNestedInput
    createdProductSales?: ProductSaleUpdateManyWithoutCreatedByUserNestedInput
    deletedProductSales?: ProductSaleUpdateManyWithoutDeletedByUserNestedInput
    updatedProductSales?: ProductSaleUpdateManyWithoutUpdatedByUserNestedInput
    role?: RoleUpdateOneRequiredWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateWithoutOwnedProductsInput = {
    userId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    roleId?: IntFieldUpdateOperationsInput | number
    createdRoles?: RoleUncheckedUpdateManyWithoutCreatedByUserNestedInput
    deletedRoles?: RoleUncheckedUpdateManyWithoutDeletedByUserNestedInput
    updatedRoles?: RoleUncheckedUpdateManyWithoutUpdatedByUserNestedInput
    createdProducts?: ProductUncheckedUpdateManyWithoutCreatedByUserNestedInput
    deletedProducts?: ProductUncheckedUpdateManyWithoutDeletedByUserNestedInput
    updatedProducts?: ProductUncheckedUpdateManyWithoutUpdatedByUserNestedInput
    createdSales?: SaleUncheckedUpdateManyWithoutCreatedByUserNestedInput
    deletedSales?: SaleUncheckedUpdateManyWithoutDeletedByUserNestedInput
    updatedSales?: SaleUncheckedUpdateManyWithoutUpdatedByUserNestedInput
    createdPurchases?: PurchaseUncheckedUpdateManyWithoutCreatedByUserNestedInput
    deletedPurchases?: PurchaseUncheckedUpdateManyWithoutDeletedByUserNestedInput
    updatedPurchases?: PurchaseUncheckedUpdateManyWithoutUpdatedByUserNestedInput
    createdProductPurchases?: ProductPurchaseUncheckedUpdateManyWithoutCreatedByUserNestedInput
    deletedProductPurchases?: ProductPurchaseUncheckedUpdateManyWithoutDeletedByUserNestedInput
    updatedProductPurchases?: ProductPurchaseUncheckedUpdateManyWithoutUpdatedByUserNestedInput
    createdProductSales?: ProductSaleUncheckedUpdateManyWithoutCreatedByUserNestedInput
    deletedProductSales?: ProductSaleUncheckedUpdateManyWithoutDeletedByUserNestedInput
    updatedProductSales?: ProductSaleUncheckedUpdateManyWithoutUpdatedByUserNestedInput
  }

  export type ProductPurchaseUpsertWithWhereUniqueWithoutProductInput = {
    where: ProductPurchaseWhereUniqueInput
    update: XOR<ProductPurchaseUpdateWithoutProductInput, ProductPurchaseUncheckedUpdateWithoutProductInput>
    create: XOR<ProductPurchaseCreateWithoutProductInput, ProductPurchaseUncheckedCreateWithoutProductInput>
  }

  export type ProductPurchaseUpdateWithWhereUniqueWithoutProductInput = {
    where: ProductPurchaseWhereUniqueInput
    data: XOR<ProductPurchaseUpdateWithoutProductInput, ProductPurchaseUncheckedUpdateWithoutProductInput>
  }

  export type ProductPurchaseUpdateManyWithWhereWithoutProductInput = {
    where: ProductPurchaseScalarWhereInput
    data: XOR<ProductPurchaseUpdateManyMutationInput, ProductPurchaseUncheckedUpdateManyWithoutProductInput>
  }

  export type ProductSaleUpsertWithWhereUniqueWithoutProductInput = {
    where: ProductSaleWhereUniqueInput
    update: XOR<ProductSaleUpdateWithoutProductInput, ProductSaleUncheckedUpdateWithoutProductInput>
    create: XOR<ProductSaleCreateWithoutProductInput, ProductSaleUncheckedCreateWithoutProductInput>
  }

  export type ProductSaleUpdateWithWhereUniqueWithoutProductInput = {
    where: ProductSaleWhereUniqueInput
    data: XOR<ProductSaleUpdateWithoutProductInput, ProductSaleUncheckedUpdateWithoutProductInput>
  }

  export type ProductSaleUpdateManyWithWhereWithoutProductInput = {
    where: ProductSaleScalarWhereInput
    data: XOR<ProductSaleUpdateManyMutationInput, ProductSaleUncheckedUpdateManyWithoutProductInput>
  }

  export type UserCreateWithoutCreatedSalesInput = {
    name: string
    email: string
    password: string
    createdAt?: Date | string
    deletedAt?: Date | string | null
    createdBy?: number | null
    deletedBy?: number | null
    isDeleted?: boolean
    createdRoles?: RoleCreateNestedManyWithoutCreatedByUserInput
    deletedRoles?: RoleCreateNestedManyWithoutDeletedByUserInput
    updatedRoles?: RoleCreateNestedManyWithoutUpdatedByUserInput
    createdProducts?: ProductCreateNestedManyWithoutCreatedByUserInput
    deletedProducts?: ProductCreateNestedManyWithoutDeletedByUserInput
    updatedProducts?: ProductCreateNestedManyWithoutUpdatedByUserInput
    deletedSales?: SaleCreateNestedManyWithoutDeletedByUserInput
    updatedSales?: SaleCreateNestedManyWithoutUpdatedByUserInput
    createdPurchases?: PurchaseCreateNestedManyWithoutCreatedByUserInput
    deletedPurchases?: PurchaseCreateNestedManyWithoutDeletedByUserInput
    updatedPurchases?: PurchaseCreateNestedManyWithoutUpdatedByUserInput
    createdProductPurchases?: ProductPurchaseCreateNestedManyWithoutCreatedByUserInput
    deletedProductPurchases?: ProductPurchaseCreateNestedManyWithoutDeletedByUserInput
    updatedProductPurchases?: ProductPurchaseCreateNestedManyWithoutUpdatedByUserInput
    createdProductSales?: ProductSaleCreateNestedManyWithoutCreatedByUserInput
    deletedProductSales?: ProductSaleCreateNestedManyWithoutDeletedByUserInput
    updatedProductSales?: ProductSaleCreateNestedManyWithoutUpdatedByUserInput
    role: RoleCreateNestedOneWithoutUsersInput
    ownedProducts?: ProductCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCreatedSalesInput = {
    userId?: number
    name: string
    email: string
    password: string
    createdAt?: Date | string
    deletedAt?: Date | string | null
    createdBy?: number | null
    deletedBy?: number | null
    isDeleted?: boolean
    roleId: number
    createdRoles?: RoleUncheckedCreateNestedManyWithoutCreatedByUserInput
    deletedRoles?: RoleUncheckedCreateNestedManyWithoutDeletedByUserInput
    updatedRoles?: RoleUncheckedCreateNestedManyWithoutUpdatedByUserInput
    createdProducts?: ProductUncheckedCreateNestedManyWithoutCreatedByUserInput
    deletedProducts?: ProductUncheckedCreateNestedManyWithoutDeletedByUserInput
    updatedProducts?: ProductUncheckedCreateNestedManyWithoutUpdatedByUserInput
    deletedSales?: SaleUncheckedCreateNestedManyWithoutDeletedByUserInput
    updatedSales?: SaleUncheckedCreateNestedManyWithoutUpdatedByUserInput
    createdPurchases?: PurchaseUncheckedCreateNestedManyWithoutCreatedByUserInput
    deletedPurchases?: PurchaseUncheckedCreateNestedManyWithoutDeletedByUserInput
    updatedPurchases?: PurchaseUncheckedCreateNestedManyWithoutUpdatedByUserInput
    createdProductPurchases?: ProductPurchaseUncheckedCreateNestedManyWithoutCreatedByUserInput
    deletedProductPurchases?: ProductPurchaseUncheckedCreateNestedManyWithoutDeletedByUserInput
    updatedProductPurchases?: ProductPurchaseUncheckedCreateNestedManyWithoutUpdatedByUserInput
    createdProductSales?: ProductSaleUncheckedCreateNestedManyWithoutCreatedByUserInput
    deletedProductSales?: ProductSaleUncheckedCreateNestedManyWithoutDeletedByUserInput
    updatedProductSales?: ProductSaleUncheckedCreateNestedManyWithoutUpdatedByUserInput
    ownedProducts?: ProductUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCreatedSalesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCreatedSalesInput, UserUncheckedCreateWithoutCreatedSalesInput>
  }

  export type UserCreateWithoutDeletedSalesInput = {
    name: string
    email: string
    password: string
    createdAt?: Date | string
    deletedAt?: Date | string | null
    createdBy?: number | null
    deletedBy?: number | null
    isDeleted?: boolean
    createdRoles?: RoleCreateNestedManyWithoutCreatedByUserInput
    deletedRoles?: RoleCreateNestedManyWithoutDeletedByUserInput
    updatedRoles?: RoleCreateNestedManyWithoutUpdatedByUserInput
    createdProducts?: ProductCreateNestedManyWithoutCreatedByUserInput
    deletedProducts?: ProductCreateNestedManyWithoutDeletedByUserInput
    updatedProducts?: ProductCreateNestedManyWithoutUpdatedByUserInput
    createdSales?: SaleCreateNestedManyWithoutCreatedByUserInput
    updatedSales?: SaleCreateNestedManyWithoutUpdatedByUserInput
    createdPurchases?: PurchaseCreateNestedManyWithoutCreatedByUserInput
    deletedPurchases?: PurchaseCreateNestedManyWithoutDeletedByUserInput
    updatedPurchases?: PurchaseCreateNestedManyWithoutUpdatedByUserInput
    createdProductPurchases?: ProductPurchaseCreateNestedManyWithoutCreatedByUserInput
    deletedProductPurchases?: ProductPurchaseCreateNestedManyWithoutDeletedByUserInput
    updatedProductPurchases?: ProductPurchaseCreateNestedManyWithoutUpdatedByUserInput
    createdProductSales?: ProductSaleCreateNestedManyWithoutCreatedByUserInput
    deletedProductSales?: ProductSaleCreateNestedManyWithoutDeletedByUserInput
    updatedProductSales?: ProductSaleCreateNestedManyWithoutUpdatedByUserInput
    role: RoleCreateNestedOneWithoutUsersInput
    ownedProducts?: ProductCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutDeletedSalesInput = {
    userId?: number
    name: string
    email: string
    password: string
    createdAt?: Date | string
    deletedAt?: Date | string | null
    createdBy?: number | null
    deletedBy?: number | null
    isDeleted?: boolean
    roleId: number
    createdRoles?: RoleUncheckedCreateNestedManyWithoutCreatedByUserInput
    deletedRoles?: RoleUncheckedCreateNestedManyWithoutDeletedByUserInput
    updatedRoles?: RoleUncheckedCreateNestedManyWithoutUpdatedByUserInput
    createdProducts?: ProductUncheckedCreateNestedManyWithoutCreatedByUserInput
    deletedProducts?: ProductUncheckedCreateNestedManyWithoutDeletedByUserInput
    updatedProducts?: ProductUncheckedCreateNestedManyWithoutUpdatedByUserInput
    createdSales?: SaleUncheckedCreateNestedManyWithoutCreatedByUserInput
    updatedSales?: SaleUncheckedCreateNestedManyWithoutUpdatedByUserInput
    createdPurchases?: PurchaseUncheckedCreateNestedManyWithoutCreatedByUserInput
    deletedPurchases?: PurchaseUncheckedCreateNestedManyWithoutDeletedByUserInput
    updatedPurchases?: PurchaseUncheckedCreateNestedManyWithoutUpdatedByUserInput
    createdProductPurchases?: ProductPurchaseUncheckedCreateNestedManyWithoutCreatedByUserInput
    deletedProductPurchases?: ProductPurchaseUncheckedCreateNestedManyWithoutDeletedByUserInput
    updatedProductPurchases?: ProductPurchaseUncheckedCreateNestedManyWithoutUpdatedByUserInput
    createdProductSales?: ProductSaleUncheckedCreateNestedManyWithoutCreatedByUserInput
    deletedProductSales?: ProductSaleUncheckedCreateNestedManyWithoutDeletedByUserInput
    updatedProductSales?: ProductSaleUncheckedCreateNestedManyWithoutUpdatedByUserInput
    ownedProducts?: ProductUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutDeletedSalesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDeletedSalesInput, UserUncheckedCreateWithoutDeletedSalesInput>
  }

  export type UserCreateWithoutUpdatedSalesInput = {
    name: string
    email: string
    password: string
    createdAt?: Date | string
    deletedAt?: Date | string | null
    createdBy?: number | null
    deletedBy?: number | null
    isDeleted?: boolean
    createdRoles?: RoleCreateNestedManyWithoutCreatedByUserInput
    deletedRoles?: RoleCreateNestedManyWithoutDeletedByUserInput
    updatedRoles?: RoleCreateNestedManyWithoutUpdatedByUserInput
    createdProducts?: ProductCreateNestedManyWithoutCreatedByUserInput
    deletedProducts?: ProductCreateNestedManyWithoutDeletedByUserInput
    updatedProducts?: ProductCreateNestedManyWithoutUpdatedByUserInput
    createdSales?: SaleCreateNestedManyWithoutCreatedByUserInput
    deletedSales?: SaleCreateNestedManyWithoutDeletedByUserInput
    createdPurchases?: PurchaseCreateNestedManyWithoutCreatedByUserInput
    deletedPurchases?: PurchaseCreateNestedManyWithoutDeletedByUserInput
    updatedPurchases?: PurchaseCreateNestedManyWithoutUpdatedByUserInput
    createdProductPurchases?: ProductPurchaseCreateNestedManyWithoutCreatedByUserInput
    deletedProductPurchases?: ProductPurchaseCreateNestedManyWithoutDeletedByUserInput
    updatedProductPurchases?: ProductPurchaseCreateNestedManyWithoutUpdatedByUserInput
    createdProductSales?: ProductSaleCreateNestedManyWithoutCreatedByUserInput
    deletedProductSales?: ProductSaleCreateNestedManyWithoutDeletedByUserInput
    updatedProductSales?: ProductSaleCreateNestedManyWithoutUpdatedByUserInput
    role: RoleCreateNestedOneWithoutUsersInput
    ownedProducts?: ProductCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUpdatedSalesInput = {
    userId?: number
    name: string
    email: string
    password: string
    createdAt?: Date | string
    deletedAt?: Date | string | null
    createdBy?: number | null
    deletedBy?: number | null
    isDeleted?: boolean
    roleId: number
    createdRoles?: RoleUncheckedCreateNestedManyWithoutCreatedByUserInput
    deletedRoles?: RoleUncheckedCreateNestedManyWithoutDeletedByUserInput
    updatedRoles?: RoleUncheckedCreateNestedManyWithoutUpdatedByUserInput
    createdProducts?: ProductUncheckedCreateNestedManyWithoutCreatedByUserInput
    deletedProducts?: ProductUncheckedCreateNestedManyWithoutDeletedByUserInput
    updatedProducts?: ProductUncheckedCreateNestedManyWithoutUpdatedByUserInput
    createdSales?: SaleUncheckedCreateNestedManyWithoutCreatedByUserInput
    deletedSales?: SaleUncheckedCreateNestedManyWithoutDeletedByUserInput
    createdPurchases?: PurchaseUncheckedCreateNestedManyWithoutCreatedByUserInput
    deletedPurchases?: PurchaseUncheckedCreateNestedManyWithoutDeletedByUserInput
    updatedPurchases?: PurchaseUncheckedCreateNestedManyWithoutUpdatedByUserInput
    createdProductPurchases?: ProductPurchaseUncheckedCreateNestedManyWithoutCreatedByUserInput
    deletedProductPurchases?: ProductPurchaseUncheckedCreateNestedManyWithoutDeletedByUserInput
    updatedProductPurchases?: ProductPurchaseUncheckedCreateNestedManyWithoutUpdatedByUserInput
    createdProductSales?: ProductSaleUncheckedCreateNestedManyWithoutCreatedByUserInput
    deletedProductSales?: ProductSaleUncheckedCreateNestedManyWithoutDeletedByUserInput
    updatedProductSales?: ProductSaleUncheckedCreateNestedManyWithoutUpdatedByUserInput
    ownedProducts?: ProductUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUpdatedSalesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUpdatedSalesInput, UserUncheckedCreateWithoutUpdatedSalesInput>
  }

  export type ProductSaleCreateWithoutSaleInput = {
    salePrice: number
    saleQuantity: number
    createdAt?: Date | string
    deletedAt?: Date | string | null
    updatedAt?: Date | string | null
    isDeleted?: boolean
    createdByUser?: UserCreateNestedOneWithoutCreatedProductSalesInput
    deletedByUser?: UserCreateNestedOneWithoutDeletedProductSalesInput
    updatedByUser?: UserCreateNestedOneWithoutUpdatedProductSalesInput
    product: ProductCreateNestedOneWithoutProductSaleInput
  }

  export type ProductSaleUncheckedCreateWithoutSaleInput = {
    productSaleId?: number
    salePrice: number
    saleQuantity: number
    createdAt?: Date | string
    deletedAt?: Date | string | null
    createdBy?: number | null
    deletedBy?: number | null
    updatedBy?: number | null
    updatedAt?: Date | string | null
    isDeleted?: boolean
    productId: number
  }

  export type ProductSaleCreateOrConnectWithoutSaleInput = {
    where: ProductSaleWhereUniqueInput
    create: XOR<ProductSaleCreateWithoutSaleInput, ProductSaleUncheckedCreateWithoutSaleInput>
  }

  export type ProductSaleCreateManySaleInputEnvelope = {
    data: ProductSaleCreateManySaleInput | ProductSaleCreateManySaleInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutCreatedSalesInput = {
    update: XOR<UserUpdateWithoutCreatedSalesInput, UserUncheckedUpdateWithoutCreatedSalesInput>
    create: XOR<UserCreateWithoutCreatedSalesInput, UserUncheckedCreateWithoutCreatedSalesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCreatedSalesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCreatedSalesInput, UserUncheckedUpdateWithoutCreatedSalesInput>
  }

  export type UserUpdateWithoutCreatedSalesInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdRoles?: RoleUpdateManyWithoutCreatedByUserNestedInput
    deletedRoles?: RoleUpdateManyWithoutDeletedByUserNestedInput
    updatedRoles?: RoleUpdateManyWithoutUpdatedByUserNestedInput
    createdProducts?: ProductUpdateManyWithoutCreatedByUserNestedInput
    deletedProducts?: ProductUpdateManyWithoutDeletedByUserNestedInput
    updatedProducts?: ProductUpdateManyWithoutUpdatedByUserNestedInput
    deletedSales?: SaleUpdateManyWithoutDeletedByUserNestedInput
    updatedSales?: SaleUpdateManyWithoutUpdatedByUserNestedInput
    createdPurchases?: PurchaseUpdateManyWithoutCreatedByUserNestedInput
    deletedPurchases?: PurchaseUpdateManyWithoutDeletedByUserNestedInput
    updatedPurchases?: PurchaseUpdateManyWithoutUpdatedByUserNestedInput
    createdProductPurchases?: ProductPurchaseUpdateManyWithoutCreatedByUserNestedInput
    deletedProductPurchases?: ProductPurchaseUpdateManyWithoutDeletedByUserNestedInput
    updatedProductPurchases?: ProductPurchaseUpdateManyWithoutUpdatedByUserNestedInput
    createdProductSales?: ProductSaleUpdateManyWithoutCreatedByUserNestedInput
    deletedProductSales?: ProductSaleUpdateManyWithoutDeletedByUserNestedInput
    updatedProductSales?: ProductSaleUpdateManyWithoutUpdatedByUserNestedInput
    role?: RoleUpdateOneRequiredWithoutUsersNestedInput
    ownedProducts?: ProductUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCreatedSalesInput = {
    userId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    roleId?: IntFieldUpdateOperationsInput | number
    createdRoles?: RoleUncheckedUpdateManyWithoutCreatedByUserNestedInput
    deletedRoles?: RoleUncheckedUpdateManyWithoutDeletedByUserNestedInput
    updatedRoles?: RoleUncheckedUpdateManyWithoutUpdatedByUserNestedInput
    createdProducts?: ProductUncheckedUpdateManyWithoutCreatedByUserNestedInput
    deletedProducts?: ProductUncheckedUpdateManyWithoutDeletedByUserNestedInput
    updatedProducts?: ProductUncheckedUpdateManyWithoutUpdatedByUserNestedInput
    deletedSales?: SaleUncheckedUpdateManyWithoutDeletedByUserNestedInput
    updatedSales?: SaleUncheckedUpdateManyWithoutUpdatedByUserNestedInput
    createdPurchases?: PurchaseUncheckedUpdateManyWithoutCreatedByUserNestedInput
    deletedPurchases?: PurchaseUncheckedUpdateManyWithoutDeletedByUserNestedInput
    updatedPurchases?: PurchaseUncheckedUpdateManyWithoutUpdatedByUserNestedInput
    createdProductPurchases?: ProductPurchaseUncheckedUpdateManyWithoutCreatedByUserNestedInput
    deletedProductPurchases?: ProductPurchaseUncheckedUpdateManyWithoutDeletedByUserNestedInput
    updatedProductPurchases?: ProductPurchaseUncheckedUpdateManyWithoutUpdatedByUserNestedInput
    createdProductSales?: ProductSaleUncheckedUpdateManyWithoutCreatedByUserNestedInput
    deletedProductSales?: ProductSaleUncheckedUpdateManyWithoutDeletedByUserNestedInput
    updatedProductSales?: ProductSaleUncheckedUpdateManyWithoutUpdatedByUserNestedInput
    ownedProducts?: ProductUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUpsertWithoutDeletedSalesInput = {
    update: XOR<UserUpdateWithoutDeletedSalesInput, UserUncheckedUpdateWithoutDeletedSalesInput>
    create: XOR<UserCreateWithoutDeletedSalesInput, UserUncheckedCreateWithoutDeletedSalesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDeletedSalesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDeletedSalesInput, UserUncheckedUpdateWithoutDeletedSalesInput>
  }

  export type UserUpdateWithoutDeletedSalesInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdRoles?: RoleUpdateManyWithoutCreatedByUserNestedInput
    deletedRoles?: RoleUpdateManyWithoutDeletedByUserNestedInput
    updatedRoles?: RoleUpdateManyWithoutUpdatedByUserNestedInput
    createdProducts?: ProductUpdateManyWithoutCreatedByUserNestedInput
    deletedProducts?: ProductUpdateManyWithoutDeletedByUserNestedInput
    updatedProducts?: ProductUpdateManyWithoutUpdatedByUserNestedInput
    createdSales?: SaleUpdateManyWithoutCreatedByUserNestedInput
    updatedSales?: SaleUpdateManyWithoutUpdatedByUserNestedInput
    createdPurchases?: PurchaseUpdateManyWithoutCreatedByUserNestedInput
    deletedPurchases?: PurchaseUpdateManyWithoutDeletedByUserNestedInput
    updatedPurchases?: PurchaseUpdateManyWithoutUpdatedByUserNestedInput
    createdProductPurchases?: ProductPurchaseUpdateManyWithoutCreatedByUserNestedInput
    deletedProductPurchases?: ProductPurchaseUpdateManyWithoutDeletedByUserNestedInput
    updatedProductPurchases?: ProductPurchaseUpdateManyWithoutUpdatedByUserNestedInput
    createdProductSales?: ProductSaleUpdateManyWithoutCreatedByUserNestedInput
    deletedProductSales?: ProductSaleUpdateManyWithoutDeletedByUserNestedInput
    updatedProductSales?: ProductSaleUpdateManyWithoutUpdatedByUserNestedInput
    role?: RoleUpdateOneRequiredWithoutUsersNestedInput
    ownedProducts?: ProductUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutDeletedSalesInput = {
    userId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    roleId?: IntFieldUpdateOperationsInput | number
    createdRoles?: RoleUncheckedUpdateManyWithoutCreatedByUserNestedInput
    deletedRoles?: RoleUncheckedUpdateManyWithoutDeletedByUserNestedInput
    updatedRoles?: RoleUncheckedUpdateManyWithoutUpdatedByUserNestedInput
    createdProducts?: ProductUncheckedUpdateManyWithoutCreatedByUserNestedInput
    deletedProducts?: ProductUncheckedUpdateManyWithoutDeletedByUserNestedInput
    updatedProducts?: ProductUncheckedUpdateManyWithoutUpdatedByUserNestedInput
    createdSales?: SaleUncheckedUpdateManyWithoutCreatedByUserNestedInput
    updatedSales?: SaleUncheckedUpdateManyWithoutUpdatedByUserNestedInput
    createdPurchases?: PurchaseUncheckedUpdateManyWithoutCreatedByUserNestedInput
    deletedPurchases?: PurchaseUncheckedUpdateManyWithoutDeletedByUserNestedInput
    updatedPurchases?: PurchaseUncheckedUpdateManyWithoutUpdatedByUserNestedInput
    createdProductPurchases?: ProductPurchaseUncheckedUpdateManyWithoutCreatedByUserNestedInput
    deletedProductPurchases?: ProductPurchaseUncheckedUpdateManyWithoutDeletedByUserNestedInput
    updatedProductPurchases?: ProductPurchaseUncheckedUpdateManyWithoutUpdatedByUserNestedInput
    createdProductSales?: ProductSaleUncheckedUpdateManyWithoutCreatedByUserNestedInput
    deletedProductSales?: ProductSaleUncheckedUpdateManyWithoutDeletedByUserNestedInput
    updatedProductSales?: ProductSaleUncheckedUpdateManyWithoutUpdatedByUserNestedInput
    ownedProducts?: ProductUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUpsertWithoutUpdatedSalesInput = {
    update: XOR<UserUpdateWithoutUpdatedSalesInput, UserUncheckedUpdateWithoutUpdatedSalesInput>
    create: XOR<UserCreateWithoutUpdatedSalesInput, UserUncheckedCreateWithoutUpdatedSalesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUpdatedSalesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUpdatedSalesInput, UserUncheckedUpdateWithoutUpdatedSalesInput>
  }

  export type UserUpdateWithoutUpdatedSalesInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdRoles?: RoleUpdateManyWithoutCreatedByUserNestedInput
    deletedRoles?: RoleUpdateManyWithoutDeletedByUserNestedInput
    updatedRoles?: RoleUpdateManyWithoutUpdatedByUserNestedInput
    createdProducts?: ProductUpdateManyWithoutCreatedByUserNestedInput
    deletedProducts?: ProductUpdateManyWithoutDeletedByUserNestedInput
    updatedProducts?: ProductUpdateManyWithoutUpdatedByUserNestedInput
    createdSales?: SaleUpdateManyWithoutCreatedByUserNestedInput
    deletedSales?: SaleUpdateManyWithoutDeletedByUserNestedInput
    createdPurchases?: PurchaseUpdateManyWithoutCreatedByUserNestedInput
    deletedPurchases?: PurchaseUpdateManyWithoutDeletedByUserNestedInput
    updatedPurchases?: PurchaseUpdateManyWithoutUpdatedByUserNestedInput
    createdProductPurchases?: ProductPurchaseUpdateManyWithoutCreatedByUserNestedInput
    deletedProductPurchases?: ProductPurchaseUpdateManyWithoutDeletedByUserNestedInput
    updatedProductPurchases?: ProductPurchaseUpdateManyWithoutUpdatedByUserNestedInput
    createdProductSales?: ProductSaleUpdateManyWithoutCreatedByUserNestedInput
    deletedProductSales?: ProductSaleUpdateManyWithoutDeletedByUserNestedInput
    updatedProductSales?: ProductSaleUpdateManyWithoutUpdatedByUserNestedInput
    role?: RoleUpdateOneRequiredWithoutUsersNestedInput
    ownedProducts?: ProductUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUpdatedSalesInput = {
    userId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    roleId?: IntFieldUpdateOperationsInput | number
    createdRoles?: RoleUncheckedUpdateManyWithoutCreatedByUserNestedInput
    deletedRoles?: RoleUncheckedUpdateManyWithoutDeletedByUserNestedInput
    updatedRoles?: RoleUncheckedUpdateManyWithoutUpdatedByUserNestedInput
    createdProducts?: ProductUncheckedUpdateManyWithoutCreatedByUserNestedInput
    deletedProducts?: ProductUncheckedUpdateManyWithoutDeletedByUserNestedInput
    updatedProducts?: ProductUncheckedUpdateManyWithoutUpdatedByUserNestedInput
    createdSales?: SaleUncheckedUpdateManyWithoutCreatedByUserNestedInput
    deletedSales?: SaleUncheckedUpdateManyWithoutDeletedByUserNestedInput
    createdPurchases?: PurchaseUncheckedUpdateManyWithoutCreatedByUserNestedInput
    deletedPurchases?: PurchaseUncheckedUpdateManyWithoutDeletedByUserNestedInput
    updatedPurchases?: PurchaseUncheckedUpdateManyWithoutUpdatedByUserNestedInput
    createdProductPurchases?: ProductPurchaseUncheckedUpdateManyWithoutCreatedByUserNestedInput
    deletedProductPurchases?: ProductPurchaseUncheckedUpdateManyWithoutDeletedByUserNestedInput
    updatedProductPurchases?: ProductPurchaseUncheckedUpdateManyWithoutUpdatedByUserNestedInput
    createdProductSales?: ProductSaleUncheckedUpdateManyWithoutCreatedByUserNestedInput
    deletedProductSales?: ProductSaleUncheckedUpdateManyWithoutDeletedByUserNestedInput
    updatedProductSales?: ProductSaleUncheckedUpdateManyWithoutUpdatedByUserNestedInput
    ownedProducts?: ProductUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ProductSaleUpsertWithWhereUniqueWithoutSaleInput = {
    where: ProductSaleWhereUniqueInput
    update: XOR<ProductSaleUpdateWithoutSaleInput, ProductSaleUncheckedUpdateWithoutSaleInput>
    create: XOR<ProductSaleCreateWithoutSaleInput, ProductSaleUncheckedCreateWithoutSaleInput>
  }

  export type ProductSaleUpdateWithWhereUniqueWithoutSaleInput = {
    where: ProductSaleWhereUniqueInput
    data: XOR<ProductSaleUpdateWithoutSaleInput, ProductSaleUncheckedUpdateWithoutSaleInput>
  }

  export type ProductSaleUpdateManyWithWhereWithoutSaleInput = {
    where: ProductSaleScalarWhereInput
    data: XOR<ProductSaleUpdateManyMutationInput, ProductSaleUncheckedUpdateManyWithoutSaleInput>
  }

  export type UserCreateWithoutCreatedPurchasesInput = {
    name: string
    email: string
    password: string
    createdAt?: Date | string
    deletedAt?: Date | string | null
    createdBy?: number | null
    deletedBy?: number | null
    isDeleted?: boolean
    createdRoles?: RoleCreateNestedManyWithoutCreatedByUserInput
    deletedRoles?: RoleCreateNestedManyWithoutDeletedByUserInput
    updatedRoles?: RoleCreateNestedManyWithoutUpdatedByUserInput
    createdProducts?: ProductCreateNestedManyWithoutCreatedByUserInput
    deletedProducts?: ProductCreateNestedManyWithoutDeletedByUserInput
    updatedProducts?: ProductCreateNestedManyWithoutUpdatedByUserInput
    createdSales?: SaleCreateNestedManyWithoutCreatedByUserInput
    deletedSales?: SaleCreateNestedManyWithoutDeletedByUserInput
    updatedSales?: SaleCreateNestedManyWithoutUpdatedByUserInput
    deletedPurchases?: PurchaseCreateNestedManyWithoutDeletedByUserInput
    updatedPurchases?: PurchaseCreateNestedManyWithoutUpdatedByUserInput
    createdProductPurchases?: ProductPurchaseCreateNestedManyWithoutCreatedByUserInput
    deletedProductPurchases?: ProductPurchaseCreateNestedManyWithoutDeletedByUserInput
    updatedProductPurchases?: ProductPurchaseCreateNestedManyWithoutUpdatedByUserInput
    createdProductSales?: ProductSaleCreateNestedManyWithoutCreatedByUserInput
    deletedProductSales?: ProductSaleCreateNestedManyWithoutDeletedByUserInput
    updatedProductSales?: ProductSaleCreateNestedManyWithoutUpdatedByUserInput
    role: RoleCreateNestedOneWithoutUsersInput
    ownedProducts?: ProductCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCreatedPurchasesInput = {
    userId?: number
    name: string
    email: string
    password: string
    createdAt?: Date | string
    deletedAt?: Date | string | null
    createdBy?: number | null
    deletedBy?: number | null
    isDeleted?: boolean
    roleId: number
    createdRoles?: RoleUncheckedCreateNestedManyWithoutCreatedByUserInput
    deletedRoles?: RoleUncheckedCreateNestedManyWithoutDeletedByUserInput
    updatedRoles?: RoleUncheckedCreateNestedManyWithoutUpdatedByUserInput
    createdProducts?: ProductUncheckedCreateNestedManyWithoutCreatedByUserInput
    deletedProducts?: ProductUncheckedCreateNestedManyWithoutDeletedByUserInput
    updatedProducts?: ProductUncheckedCreateNestedManyWithoutUpdatedByUserInput
    createdSales?: SaleUncheckedCreateNestedManyWithoutCreatedByUserInput
    deletedSales?: SaleUncheckedCreateNestedManyWithoutDeletedByUserInput
    updatedSales?: SaleUncheckedCreateNestedManyWithoutUpdatedByUserInput
    deletedPurchases?: PurchaseUncheckedCreateNestedManyWithoutDeletedByUserInput
    updatedPurchases?: PurchaseUncheckedCreateNestedManyWithoutUpdatedByUserInput
    createdProductPurchases?: ProductPurchaseUncheckedCreateNestedManyWithoutCreatedByUserInput
    deletedProductPurchases?: ProductPurchaseUncheckedCreateNestedManyWithoutDeletedByUserInput
    updatedProductPurchases?: ProductPurchaseUncheckedCreateNestedManyWithoutUpdatedByUserInput
    createdProductSales?: ProductSaleUncheckedCreateNestedManyWithoutCreatedByUserInput
    deletedProductSales?: ProductSaleUncheckedCreateNestedManyWithoutDeletedByUserInput
    updatedProductSales?: ProductSaleUncheckedCreateNestedManyWithoutUpdatedByUserInput
    ownedProducts?: ProductUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCreatedPurchasesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCreatedPurchasesInput, UserUncheckedCreateWithoutCreatedPurchasesInput>
  }

  export type UserCreateWithoutDeletedPurchasesInput = {
    name: string
    email: string
    password: string
    createdAt?: Date | string
    deletedAt?: Date | string | null
    createdBy?: number | null
    deletedBy?: number | null
    isDeleted?: boolean
    createdRoles?: RoleCreateNestedManyWithoutCreatedByUserInput
    deletedRoles?: RoleCreateNestedManyWithoutDeletedByUserInput
    updatedRoles?: RoleCreateNestedManyWithoutUpdatedByUserInput
    createdProducts?: ProductCreateNestedManyWithoutCreatedByUserInput
    deletedProducts?: ProductCreateNestedManyWithoutDeletedByUserInput
    updatedProducts?: ProductCreateNestedManyWithoutUpdatedByUserInput
    createdSales?: SaleCreateNestedManyWithoutCreatedByUserInput
    deletedSales?: SaleCreateNestedManyWithoutDeletedByUserInput
    updatedSales?: SaleCreateNestedManyWithoutUpdatedByUserInput
    createdPurchases?: PurchaseCreateNestedManyWithoutCreatedByUserInput
    updatedPurchases?: PurchaseCreateNestedManyWithoutUpdatedByUserInput
    createdProductPurchases?: ProductPurchaseCreateNestedManyWithoutCreatedByUserInput
    deletedProductPurchases?: ProductPurchaseCreateNestedManyWithoutDeletedByUserInput
    updatedProductPurchases?: ProductPurchaseCreateNestedManyWithoutUpdatedByUserInput
    createdProductSales?: ProductSaleCreateNestedManyWithoutCreatedByUserInput
    deletedProductSales?: ProductSaleCreateNestedManyWithoutDeletedByUserInput
    updatedProductSales?: ProductSaleCreateNestedManyWithoutUpdatedByUserInput
    role: RoleCreateNestedOneWithoutUsersInput
    ownedProducts?: ProductCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutDeletedPurchasesInput = {
    userId?: number
    name: string
    email: string
    password: string
    createdAt?: Date | string
    deletedAt?: Date | string | null
    createdBy?: number | null
    deletedBy?: number | null
    isDeleted?: boolean
    roleId: number
    createdRoles?: RoleUncheckedCreateNestedManyWithoutCreatedByUserInput
    deletedRoles?: RoleUncheckedCreateNestedManyWithoutDeletedByUserInput
    updatedRoles?: RoleUncheckedCreateNestedManyWithoutUpdatedByUserInput
    createdProducts?: ProductUncheckedCreateNestedManyWithoutCreatedByUserInput
    deletedProducts?: ProductUncheckedCreateNestedManyWithoutDeletedByUserInput
    updatedProducts?: ProductUncheckedCreateNestedManyWithoutUpdatedByUserInput
    createdSales?: SaleUncheckedCreateNestedManyWithoutCreatedByUserInput
    deletedSales?: SaleUncheckedCreateNestedManyWithoutDeletedByUserInput
    updatedSales?: SaleUncheckedCreateNestedManyWithoutUpdatedByUserInput
    createdPurchases?: PurchaseUncheckedCreateNestedManyWithoutCreatedByUserInput
    updatedPurchases?: PurchaseUncheckedCreateNestedManyWithoutUpdatedByUserInput
    createdProductPurchases?: ProductPurchaseUncheckedCreateNestedManyWithoutCreatedByUserInput
    deletedProductPurchases?: ProductPurchaseUncheckedCreateNestedManyWithoutDeletedByUserInput
    updatedProductPurchases?: ProductPurchaseUncheckedCreateNestedManyWithoutUpdatedByUserInput
    createdProductSales?: ProductSaleUncheckedCreateNestedManyWithoutCreatedByUserInput
    deletedProductSales?: ProductSaleUncheckedCreateNestedManyWithoutDeletedByUserInput
    updatedProductSales?: ProductSaleUncheckedCreateNestedManyWithoutUpdatedByUserInput
    ownedProducts?: ProductUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutDeletedPurchasesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDeletedPurchasesInput, UserUncheckedCreateWithoutDeletedPurchasesInput>
  }

  export type UserCreateWithoutUpdatedPurchasesInput = {
    name: string
    email: string
    password: string
    createdAt?: Date | string
    deletedAt?: Date | string | null
    createdBy?: number | null
    deletedBy?: number | null
    isDeleted?: boolean
    createdRoles?: RoleCreateNestedManyWithoutCreatedByUserInput
    deletedRoles?: RoleCreateNestedManyWithoutDeletedByUserInput
    updatedRoles?: RoleCreateNestedManyWithoutUpdatedByUserInput
    createdProducts?: ProductCreateNestedManyWithoutCreatedByUserInput
    deletedProducts?: ProductCreateNestedManyWithoutDeletedByUserInput
    updatedProducts?: ProductCreateNestedManyWithoutUpdatedByUserInput
    createdSales?: SaleCreateNestedManyWithoutCreatedByUserInput
    deletedSales?: SaleCreateNestedManyWithoutDeletedByUserInput
    updatedSales?: SaleCreateNestedManyWithoutUpdatedByUserInput
    createdPurchases?: PurchaseCreateNestedManyWithoutCreatedByUserInput
    deletedPurchases?: PurchaseCreateNestedManyWithoutDeletedByUserInput
    createdProductPurchases?: ProductPurchaseCreateNestedManyWithoutCreatedByUserInput
    deletedProductPurchases?: ProductPurchaseCreateNestedManyWithoutDeletedByUserInput
    updatedProductPurchases?: ProductPurchaseCreateNestedManyWithoutUpdatedByUserInput
    createdProductSales?: ProductSaleCreateNestedManyWithoutCreatedByUserInput
    deletedProductSales?: ProductSaleCreateNestedManyWithoutDeletedByUserInput
    updatedProductSales?: ProductSaleCreateNestedManyWithoutUpdatedByUserInput
    role: RoleCreateNestedOneWithoutUsersInput
    ownedProducts?: ProductCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUpdatedPurchasesInput = {
    userId?: number
    name: string
    email: string
    password: string
    createdAt?: Date | string
    deletedAt?: Date | string | null
    createdBy?: number | null
    deletedBy?: number | null
    isDeleted?: boolean
    roleId: number
    createdRoles?: RoleUncheckedCreateNestedManyWithoutCreatedByUserInput
    deletedRoles?: RoleUncheckedCreateNestedManyWithoutDeletedByUserInput
    updatedRoles?: RoleUncheckedCreateNestedManyWithoutUpdatedByUserInput
    createdProducts?: ProductUncheckedCreateNestedManyWithoutCreatedByUserInput
    deletedProducts?: ProductUncheckedCreateNestedManyWithoutDeletedByUserInput
    updatedProducts?: ProductUncheckedCreateNestedManyWithoutUpdatedByUserInput
    createdSales?: SaleUncheckedCreateNestedManyWithoutCreatedByUserInput
    deletedSales?: SaleUncheckedCreateNestedManyWithoutDeletedByUserInput
    updatedSales?: SaleUncheckedCreateNestedManyWithoutUpdatedByUserInput
    createdPurchases?: PurchaseUncheckedCreateNestedManyWithoutCreatedByUserInput
    deletedPurchases?: PurchaseUncheckedCreateNestedManyWithoutDeletedByUserInput
    createdProductPurchases?: ProductPurchaseUncheckedCreateNestedManyWithoutCreatedByUserInput
    deletedProductPurchases?: ProductPurchaseUncheckedCreateNestedManyWithoutDeletedByUserInput
    updatedProductPurchases?: ProductPurchaseUncheckedCreateNestedManyWithoutUpdatedByUserInput
    createdProductSales?: ProductSaleUncheckedCreateNestedManyWithoutCreatedByUserInput
    deletedProductSales?: ProductSaleUncheckedCreateNestedManyWithoutDeletedByUserInput
    updatedProductSales?: ProductSaleUncheckedCreateNestedManyWithoutUpdatedByUserInput
    ownedProducts?: ProductUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUpdatedPurchasesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUpdatedPurchasesInput, UserUncheckedCreateWithoutUpdatedPurchasesInput>
  }

  export type ProductPurchaseCreateWithoutPurchaseInput = {
    purchasePrice: number
    purchaseQuantity: number
    createdAt?: Date | string
    deletedAt?: Date | string | null
    updatedAt?: Date | string | null
    isDeleted?: boolean
    createdByUser?: UserCreateNestedOneWithoutCreatedProductPurchasesInput
    deletedByUser?: UserCreateNestedOneWithoutDeletedProductPurchasesInput
    updatedByUser?: UserCreateNestedOneWithoutUpdatedProductPurchasesInput
    product: ProductCreateNestedOneWithoutProductPurchaseInput
  }

  export type ProductPurchaseUncheckedCreateWithoutPurchaseInput = {
    productPurchaseId?: number
    purchasePrice: number
    purchaseQuantity: number
    createdAt?: Date | string
    deletedAt?: Date | string | null
    createdBy?: number | null
    deletedBy?: number | null
    updatedBy?: number | null
    updatedAt?: Date | string | null
    isDeleted?: boolean
    productId: number
  }

  export type ProductPurchaseCreateOrConnectWithoutPurchaseInput = {
    where: ProductPurchaseWhereUniqueInput
    create: XOR<ProductPurchaseCreateWithoutPurchaseInput, ProductPurchaseUncheckedCreateWithoutPurchaseInput>
  }

  export type ProductPurchaseCreateManyPurchaseInputEnvelope = {
    data: ProductPurchaseCreateManyPurchaseInput | ProductPurchaseCreateManyPurchaseInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutCreatedPurchasesInput = {
    update: XOR<UserUpdateWithoutCreatedPurchasesInput, UserUncheckedUpdateWithoutCreatedPurchasesInput>
    create: XOR<UserCreateWithoutCreatedPurchasesInput, UserUncheckedCreateWithoutCreatedPurchasesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCreatedPurchasesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCreatedPurchasesInput, UserUncheckedUpdateWithoutCreatedPurchasesInput>
  }

  export type UserUpdateWithoutCreatedPurchasesInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdRoles?: RoleUpdateManyWithoutCreatedByUserNestedInput
    deletedRoles?: RoleUpdateManyWithoutDeletedByUserNestedInput
    updatedRoles?: RoleUpdateManyWithoutUpdatedByUserNestedInput
    createdProducts?: ProductUpdateManyWithoutCreatedByUserNestedInput
    deletedProducts?: ProductUpdateManyWithoutDeletedByUserNestedInput
    updatedProducts?: ProductUpdateManyWithoutUpdatedByUserNestedInput
    createdSales?: SaleUpdateManyWithoutCreatedByUserNestedInput
    deletedSales?: SaleUpdateManyWithoutDeletedByUserNestedInput
    updatedSales?: SaleUpdateManyWithoutUpdatedByUserNestedInput
    deletedPurchases?: PurchaseUpdateManyWithoutDeletedByUserNestedInput
    updatedPurchases?: PurchaseUpdateManyWithoutUpdatedByUserNestedInput
    createdProductPurchases?: ProductPurchaseUpdateManyWithoutCreatedByUserNestedInput
    deletedProductPurchases?: ProductPurchaseUpdateManyWithoutDeletedByUserNestedInput
    updatedProductPurchases?: ProductPurchaseUpdateManyWithoutUpdatedByUserNestedInput
    createdProductSales?: ProductSaleUpdateManyWithoutCreatedByUserNestedInput
    deletedProductSales?: ProductSaleUpdateManyWithoutDeletedByUserNestedInput
    updatedProductSales?: ProductSaleUpdateManyWithoutUpdatedByUserNestedInput
    role?: RoleUpdateOneRequiredWithoutUsersNestedInput
    ownedProducts?: ProductUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCreatedPurchasesInput = {
    userId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    roleId?: IntFieldUpdateOperationsInput | number
    createdRoles?: RoleUncheckedUpdateManyWithoutCreatedByUserNestedInput
    deletedRoles?: RoleUncheckedUpdateManyWithoutDeletedByUserNestedInput
    updatedRoles?: RoleUncheckedUpdateManyWithoutUpdatedByUserNestedInput
    createdProducts?: ProductUncheckedUpdateManyWithoutCreatedByUserNestedInput
    deletedProducts?: ProductUncheckedUpdateManyWithoutDeletedByUserNestedInput
    updatedProducts?: ProductUncheckedUpdateManyWithoutUpdatedByUserNestedInput
    createdSales?: SaleUncheckedUpdateManyWithoutCreatedByUserNestedInput
    deletedSales?: SaleUncheckedUpdateManyWithoutDeletedByUserNestedInput
    updatedSales?: SaleUncheckedUpdateManyWithoutUpdatedByUserNestedInput
    deletedPurchases?: PurchaseUncheckedUpdateManyWithoutDeletedByUserNestedInput
    updatedPurchases?: PurchaseUncheckedUpdateManyWithoutUpdatedByUserNestedInput
    createdProductPurchases?: ProductPurchaseUncheckedUpdateManyWithoutCreatedByUserNestedInput
    deletedProductPurchases?: ProductPurchaseUncheckedUpdateManyWithoutDeletedByUserNestedInput
    updatedProductPurchases?: ProductPurchaseUncheckedUpdateManyWithoutUpdatedByUserNestedInput
    createdProductSales?: ProductSaleUncheckedUpdateManyWithoutCreatedByUserNestedInput
    deletedProductSales?: ProductSaleUncheckedUpdateManyWithoutDeletedByUserNestedInput
    updatedProductSales?: ProductSaleUncheckedUpdateManyWithoutUpdatedByUserNestedInput
    ownedProducts?: ProductUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUpsertWithoutDeletedPurchasesInput = {
    update: XOR<UserUpdateWithoutDeletedPurchasesInput, UserUncheckedUpdateWithoutDeletedPurchasesInput>
    create: XOR<UserCreateWithoutDeletedPurchasesInput, UserUncheckedCreateWithoutDeletedPurchasesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDeletedPurchasesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDeletedPurchasesInput, UserUncheckedUpdateWithoutDeletedPurchasesInput>
  }

  export type UserUpdateWithoutDeletedPurchasesInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdRoles?: RoleUpdateManyWithoutCreatedByUserNestedInput
    deletedRoles?: RoleUpdateManyWithoutDeletedByUserNestedInput
    updatedRoles?: RoleUpdateManyWithoutUpdatedByUserNestedInput
    createdProducts?: ProductUpdateManyWithoutCreatedByUserNestedInput
    deletedProducts?: ProductUpdateManyWithoutDeletedByUserNestedInput
    updatedProducts?: ProductUpdateManyWithoutUpdatedByUserNestedInput
    createdSales?: SaleUpdateManyWithoutCreatedByUserNestedInput
    deletedSales?: SaleUpdateManyWithoutDeletedByUserNestedInput
    updatedSales?: SaleUpdateManyWithoutUpdatedByUserNestedInput
    createdPurchases?: PurchaseUpdateManyWithoutCreatedByUserNestedInput
    updatedPurchases?: PurchaseUpdateManyWithoutUpdatedByUserNestedInput
    createdProductPurchases?: ProductPurchaseUpdateManyWithoutCreatedByUserNestedInput
    deletedProductPurchases?: ProductPurchaseUpdateManyWithoutDeletedByUserNestedInput
    updatedProductPurchases?: ProductPurchaseUpdateManyWithoutUpdatedByUserNestedInput
    createdProductSales?: ProductSaleUpdateManyWithoutCreatedByUserNestedInput
    deletedProductSales?: ProductSaleUpdateManyWithoutDeletedByUserNestedInput
    updatedProductSales?: ProductSaleUpdateManyWithoutUpdatedByUserNestedInput
    role?: RoleUpdateOneRequiredWithoutUsersNestedInput
    ownedProducts?: ProductUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutDeletedPurchasesInput = {
    userId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    roleId?: IntFieldUpdateOperationsInput | number
    createdRoles?: RoleUncheckedUpdateManyWithoutCreatedByUserNestedInput
    deletedRoles?: RoleUncheckedUpdateManyWithoutDeletedByUserNestedInput
    updatedRoles?: RoleUncheckedUpdateManyWithoutUpdatedByUserNestedInput
    createdProducts?: ProductUncheckedUpdateManyWithoutCreatedByUserNestedInput
    deletedProducts?: ProductUncheckedUpdateManyWithoutDeletedByUserNestedInput
    updatedProducts?: ProductUncheckedUpdateManyWithoutUpdatedByUserNestedInput
    createdSales?: SaleUncheckedUpdateManyWithoutCreatedByUserNestedInput
    deletedSales?: SaleUncheckedUpdateManyWithoutDeletedByUserNestedInput
    updatedSales?: SaleUncheckedUpdateManyWithoutUpdatedByUserNestedInput
    createdPurchases?: PurchaseUncheckedUpdateManyWithoutCreatedByUserNestedInput
    updatedPurchases?: PurchaseUncheckedUpdateManyWithoutUpdatedByUserNestedInput
    createdProductPurchases?: ProductPurchaseUncheckedUpdateManyWithoutCreatedByUserNestedInput
    deletedProductPurchases?: ProductPurchaseUncheckedUpdateManyWithoutDeletedByUserNestedInput
    updatedProductPurchases?: ProductPurchaseUncheckedUpdateManyWithoutUpdatedByUserNestedInput
    createdProductSales?: ProductSaleUncheckedUpdateManyWithoutCreatedByUserNestedInput
    deletedProductSales?: ProductSaleUncheckedUpdateManyWithoutDeletedByUserNestedInput
    updatedProductSales?: ProductSaleUncheckedUpdateManyWithoutUpdatedByUserNestedInput
    ownedProducts?: ProductUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUpsertWithoutUpdatedPurchasesInput = {
    update: XOR<UserUpdateWithoutUpdatedPurchasesInput, UserUncheckedUpdateWithoutUpdatedPurchasesInput>
    create: XOR<UserCreateWithoutUpdatedPurchasesInput, UserUncheckedCreateWithoutUpdatedPurchasesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUpdatedPurchasesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUpdatedPurchasesInput, UserUncheckedUpdateWithoutUpdatedPurchasesInput>
  }

  export type UserUpdateWithoutUpdatedPurchasesInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdRoles?: RoleUpdateManyWithoutCreatedByUserNestedInput
    deletedRoles?: RoleUpdateManyWithoutDeletedByUserNestedInput
    updatedRoles?: RoleUpdateManyWithoutUpdatedByUserNestedInput
    createdProducts?: ProductUpdateManyWithoutCreatedByUserNestedInput
    deletedProducts?: ProductUpdateManyWithoutDeletedByUserNestedInput
    updatedProducts?: ProductUpdateManyWithoutUpdatedByUserNestedInput
    createdSales?: SaleUpdateManyWithoutCreatedByUserNestedInput
    deletedSales?: SaleUpdateManyWithoutDeletedByUserNestedInput
    updatedSales?: SaleUpdateManyWithoutUpdatedByUserNestedInput
    createdPurchases?: PurchaseUpdateManyWithoutCreatedByUserNestedInput
    deletedPurchases?: PurchaseUpdateManyWithoutDeletedByUserNestedInput
    createdProductPurchases?: ProductPurchaseUpdateManyWithoutCreatedByUserNestedInput
    deletedProductPurchases?: ProductPurchaseUpdateManyWithoutDeletedByUserNestedInput
    updatedProductPurchases?: ProductPurchaseUpdateManyWithoutUpdatedByUserNestedInput
    createdProductSales?: ProductSaleUpdateManyWithoutCreatedByUserNestedInput
    deletedProductSales?: ProductSaleUpdateManyWithoutDeletedByUserNestedInput
    updatedProductSales?: ProductSaleUpdateManyWithoutUpdatedByUserNestedInput
    role?: RoleUpdateOneRequiredWithoutUsersNestedInput
    ownedProducts?: ProductUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUpdatedPurchasesInput = {
    userId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    roleId?: IntFieldUpdateOperationsInput | number
    createdRoles?: RoleUncheckedUpdateManyWithoutCreatedByUserNestedInput
    deletedRoles?: RoleUncheckedUpdateManyWithoutDeletedByUserNestedInput
    updatedRoles?: RoleUncheckedUpdateManyWithoutUpdatedByUserNestedInput
    createdProducts?: ProductUncheckedUpdateManyWithoutCreatedByUserNestedInput
    deletedProducts?: ProductUncheckedUpdateManyWithoutDeletedByUserNestedInput
    updatedProducts?: ProductUncheckedUpdateManyWithoutUpdatedByUserNestedInput
    createdSales?: SaleUncheckedUpdateManyWithoutCreatedByUserNestedInput
    deletedSales?: SaleUncheckedUpdateManyWithoutDeletedByUserNestedInput
    updatedSales?: SaleUncheckedUpdateManyWithoutUpdatedByUserNestedInput
    createdPurchases?: PurchaseUncheckedUpdateManyWithoutCreatedByUserNestedInput
    deletedPurchases?: PurchaseUncheckedUpdateManyWithoutDeletedByUserNestedInput
    createdProductPurchases?: ProductPurchaseUncheckedUpdateManyWithoutCreatedByUserNestedInput
    deletedProductPurchases?: ProductPurchaseUncheckedUpdateManyWithoutDeletedByUserNestedInput
    updatedProductPurchases?: ProductPurchaseUncheckedUpdateManyWithoutUpdatedByUserNestedInput
    createdProductSales?: ProductSaleUncheckedUpdateManyWithoutCreatedByUserNestedInput
    deletedProductSales?: ProductSaleUncheckedUpdateManyWithoutDeletedByUserNestedInput
    updatedProductSales?: ProductSaleUncheckedUpdateManyWithoutUpdatedByUserNestedInput
    ownedProducts?: ProductUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ProductPurchaseUpsertWithWhereUniqueWithoutPurchaseInput = {
    where: ProductPurchaseWhereUniqueInput
    update: XOR<ProductPurchaseUpdateWithoutPurchaseInput, ProductPurchaseUncheckedUpdateWithoutPurchaseInput>
    create: XOR<ProductPurchaseCreateWithoutPurchaseInput, ProductPurchaseUncheckedCreateWithoutPurchaseInput>
  }

  export type ProductPurchaseUpdateWithWhereUniqueWithoutPurchaseInput = {
    where: ProductPurchaseWhereUniqueInput
    data: XOR<ProductPurchaseUpdateWithoutPurchaseInput, ProductPurchaseUncheckedUpdateWithoutPurchaseInput>
  }

  export type ProductPurchaseUpdateManyWithWhereWithoutPurchaseInput = {
    where: ProductPurchaseScalarWhereInput
    data: XOR<ProductPurchaseUpdateManyMutationInput, ProductPurchaseUncheckedUpdateManyWithoutPurchaseInput>
  }

  export type UserCreateWithoutCreatedProductPurchasesInput = {
    name: string
    email: string
    password: string
    createdAt?: Date | string
    deletedAt?: Date | string | null
    createdBy?: number | null
    deletedBy?: number | null
    isDeleted?: boolean
    createdRoles?: RoleCreateNestedManyWithoutCreatedByUserInput
    deletedRoles?: RoleCreateNestedManyWithoutDeletedByUserInput
    updatedRoles?: RoleCreateNestedManyWithoutUpdatedByUserInput
    createdProducts?: ProductCreateNestedManyWithoutCreatedByUserInput
    deletedProducts?: ProductCreateNestedManyWithoutDeletedByUserInput
    updatedProducts?: ProductCreateNestedManyWithoutUpdatedByUserInput
    createdSales?: SaleCreateNestedManyWithoutCreatedByUserInput
    deletedSales?: SaleCreateNestedManyWithoutDeletedByUserInput
    updatedSales?: SaleCreateNestedManyWithoutUpdatedByUserInput
    createdPurchases?: PurchaseCreateNestedManyWithoutCreatedByUserInput
    deletedPurchases?: PurchaseCreateNestedManyWithoutDeletedByUserInput
    updatedPurchases?: PurchaseCreateNestedManyWithoutUpdatedByUserInput
    deletedProductPurchases?: ProductPurchaseCreateNestedManyWithoutDeletedByUserInput
    updatedProductPurchases?: ProductPurchaseCreateNestedManyWithoutUpdatedByUserInput
    createdProductSales?: ProductSaleCreateNestedManyWithoutCreatedByUserInput
    deletedProductSales?: ProductSaleCreateNestedManyWithoutDeletedByUserInput
    updatedProductSales?: ProductSaleCreateNestedManyWithoutUpdatedByUserInput
    role: RoleCreateNestedOneWithoutUsersInput
    ownedProducts?: ProductCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCreatedProductPurchasesInput = {
    userId?: number
    name: string
    email: string
    password: string
    createdAt?: Date | string
    deletedAt?: Date | string | null
    createdBy?: number | null
    deletedBy?: number | null
    isDeleted?: boolean
    roleId: number
    createdRoles?: RoleUncheckedCreateNestedManyWithoutCreatedByUserInput
    deletedRoles?: RoleUncheckedCreateNestedManyWithoutDeletedByUserInput
    updatedRoles?: RoleUncheckedCreateNestedManyWithoutUpdatedByUserInput
    createdProducts?: ProductUncheckedCreateNestedManyWithoutCreatedByUserInput
    deletedProducts?: ProductUncheckedCreateNestedManyWithoutDeletedByUserInput
    updatedProducts?: ProductUncheckedCreateNestedManyWithoutUpdatedByUserInput
    createdSales?: SaleUncheckedCreateNestedManyWithoutCreatedByUserInput
    deletedSales?: SaleUncheckedCreateNestedManyWithoutDeletedByUserInput
    updatedSales?: SaleUncheckedCreateNestedManyWithoutUpdatedByUserInput
    createdPurchases?: PurchaseUncheckedCreateNestedManyWithoutCreatedByUserInput
    deletedPurchases?: PurchaseUncheckedCreateNestedManyWithoutDeletedByUserInput
    updatedPurchases?: PurchaseUncheckedCreateNestedManyWithoutUpdatedByUserInput
    deletedProductPurchases?: ProductPurchaseUncheckedCreateNestedManyWithoutDeletedByUserInput
    updatedProductPurchases?: ProductPurchaseUncheckedCreateNestedManyWithoutUpdatedByUserInput
    createdProductSales?: ProductSaleUncheckedCreateNestedManyWithoutCreatedByUserInput
    deletedProductSales?: ProductSaleUncheckedCreateNestedManyWithoutDeletedByUserInput
    updatedProductSales?: ProductSaleUncheckedCreateNestedManyWithoutUpdatedByUserInput
    ownedProducts?: ProductUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCreatedProductPurchasesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCreatedProductPurchasesInput, UserUncheckedCreateWithoutCreatedProductPurchasesInput>
  }

  export type UserCreateWithoutDeletedProductPurchasesInput = {
    name: string
    email: string
    password: string
    createdAt?: Date | string
    deletedAt?: Date | string | null
    createdBy?: number | null
    deletedBy?: number | null
    isDeleted?: boolean
    createdRoles?: RoleCreateNestedManyWithoutCreatedByUserInput
    deletedRoles?: RoleCreateNestedManyWithoutDeletedByUserInput
    updatedRoles?: RoleCreateNestedManyWithoutUpdatedByUserInput
    createdProducts?: ProductCreateNestedManyWithoutCreatedByUserInput
    deletedProducts?: ProductCreateNestedManyWithoutDeletedByUserInput
    updatedProducts?: ProductCreateNestedManyWithoutUpdatedByUserInput
    createdSales?: SaleCreateNestedManyWithoutCreatedByUserInput
    deletedSales?: SaleCreateNestedManyWithoutDeletedByUserInput
    updatedSales?: SaleCreateNestedManyWithoutUpdatedByUserInput
    createdPurchases?: PurchaseCreateNestedManyWithoutCreatedByUserInput
    deletedPurchases?: PurchaseCreateNestedManyWithoutDeletedByUserInput
    updatedPurchases?: PurchaseCreateNestedManyWithoutUpdatedByUserInput
    createdProductPurchases?: ProductPurchaseCreateNestedManyWithoutCreatedByUserInput
    updatedProductPurchases?: ProductPurchaseCreateNestedManyWithoutUpdatedByUserInput
    createdProductSales?: ProductSaleCreateNestedManyWithoutCreatedByUserInput
    deletedProductSales?: ProductSaleCreateNestedManyWithoutDeletedByUserInput
    updatedProductSales?: ProductSaleCreateNestedManyWithoutUpdatedByUserInput
    role: RoleCreateNestedOneWithoutUsersInput
    ownedProducts?: ProductCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutDeletedProductPurchasesInput = {
    userId?: number
    name: string
    email: string
    password: string
    createdAt?: Date | string
    deletedAt?: Date | string | null
    createdBy?: number | null
    deletedBy?: number | null
    isDeleted?: boolean
    roleId: number
    createdRoles?: RoleUncheckedCreateNestedManyWithoutCreatedByUserInput
    deletedRoles?: RoleUncheckedCreateNestedManyWithoutDeletedByUserInput
    updatedRoles?: RoleUncheckedCreateNestedManyWithoutUpdatedByUserInput
    createdProducts?: ProductUncheckedCreateNestedManyWithoutCreatedByUserInput
    deletedProducts?: ProductUncheckedCreateNestedManyWithoutDeletedByUserInput
    updatedProducts?: ProductUncheckedCreateNestedManyWithoutUpdatedByUserInput
    createdSales?: SaleUncheckedCreateNestedManyWithoutCreatedByUserInput
    deletedSales?: SaleUncheckedCreateNestedManyWithoutDeletedByUserInput
    updatedSales?: SaleUncheckedCreateNestedManyWithoutUpdatedByUserInput
    createdPurchases?: PurchaseUncheckedCreateNestedManyWithoutCreatedByUserInput
    deletedPurchases?: PurchaseUncheckedCreateNestedManyWithoutDeletedByUserInput
    updatedPurchases?: PurchaseUncheckedCreateNestedManyWithoutUpdatedByUserInput
    createdProductPurchases?: ProductPurchaseUncheckedCreateNestedManyWithoutCreatedByUserInput
    updatedProductPurchases?: ProductPurchaseUncheckedCreateNestedManyWithoutUpdatedByUserInput
    createdProductSales?: ProductSaleUncheckedCreateNestedManyWithoutCreatedByUserInput
    deletedProductSales?: ProductSaleUncheckedCreateNestedManyWithoutDeletedByUserInput
    updatedProductSales?: ProductSaleUncheckedCreateNestedManyWithoutUpdatedByUserInput
    ownedProducts?: ProductUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutDeletedProductPurchasesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDeletedProductPurchasesInput, UserUncheckedCreateWithoutDeletedProductPurchasesInput>
  }

  export type UserCreateWithoutUpdatedProductPurchasesInput = {
    name: string
    email: string
    password: string
    createdAt?: Date | string
    deletedAt?: Date | string | null
    createdBy?: number | null
    deletedBy?: number | null
    isDeleted?: boolean
    createdRoles?: RoleCreateNestedManyWithoutCreatedByUserInput
    deletedRoles?: RoleCreateNestedManyWithoutDeletedByUserInput
    updatedRoles?: RoleCreateNestedManyWithoutUpdatedByUserInput
    createdProducts?: ProductCreateNestedManyWithoutCreatedByUserInput
    deletedProducts?: ProductCreateNestedManyWithoutDeletedByUserInput
    updatedProducts?: ProductCreateNestedManyWithoutUpdatedByUserInput
    createdSales?: SaleCreateNestedManyWithoutCreatedByUserInput
    deletedSales?: SaleCreateNestedManyWithoutDeletedByUserInput
    updatedSales?: SaleCreateNestedManyWithoutUpdatedByUserInput
    createdPurchases?: PurchaseCreateNestedManyWithoutCreatedByUserInput
    deletedPurchases?: PurchaseCreateNestedManyWithoutDeletedByUserInput
    updatedPurchases?: PurchaseCreateNestedManyWithoutUpdatedByUserInput
    createdProductPurchases?: ProductPurchaseCreateNestedManyWithoutCreatedByUserInput
    deletedProductPurchases?: ProductPurchaseCreateNestedManyWithoutDeletedByUserInput
    createdProductSales?: ProductSaleCreateNestedManyWithoutCreatedByUserInput
    deletedProductSales?: ProductSaleCreateNestedManyWithoutDeletedByUserInput
    updatedProductSales?: ProductSaleCreateNestedManyWithoutUpdatedByUserInput
    role: RoleCreateNestedOneWithoutUsersInput
    ownedProducts?: ProductCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUpdatedProductPurchasesInput = {
    userId?: number
    name: string
    email: string
    password: string
    createdAt?: Date | string
    deletedAt?: Date | string | null
    createdBy?: number | null
    deletedBy?: number | null
    isDeleted?: boolean
    roleId: number
    createdRoles?: RoleUncheckedCreateNestedManyWithoutCreatedByUserInput
    deletedRoles?: RoleUncheckedCreateNestedManyWithoutDeletedByUserInput
    updatedRoles?: RoleUncheckedCreateNestedManyWithoutUpdatedByUserInput
    createdProducts?: ProductUncheckedCreateNestedManyWithoutCreatedByUserInput
    deletedProducts?: ProductUncheckedCreateNestedManyWithoutDeletedByUserInput
    updatedProducts?: ProductUncheckedCreateNestedManyWithoutUpdatedByUserInput
    createdSales?: SaleUncheckedCreateNestedManyWithoutCreatedByUserInput
    deletedSales?: SaleUncheckedCreateNestedManyWithoutDeletedByUserInput
    updatedSales?: SaleUncheckedCreateNestedManyWithoutUpdatedByUserInput
    createdPurchases?: PurchaseUncheckedCreateNestedManyWithoutCreatedByUserInput
    deletedPurchases?: PurchaseUncheckedCreateNestedManyWithoutDeletedByUserInput
    updatedPurchases?: PurchaseUncheckedCreateNestedManyWithoutUpdatedByUserInput
    createdProductPurchases?: ProductPurchaseUncheckedCreateNestedManyWithoutCreatedByUserInput
    deletedProductPurchases?: ProductPurchaseUncheckedCreateNestedManyWithoutDeletedByUserInput
    createdProductSales?: ProductSaleUncheckedCreateNestedManyWithoutCreatedByUserInput
    deletedProductSales?: ProductSaleUncheckedCreateNestedManyWithoutDeletedByUserInput
    updatedProductSales?: ProductSaleUncheckedCreateNestedManyWithoutUpdatedByUserInput
    ownedProducts?: ProductUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUpdatedProductPurchasesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUpdatedProductPurchasesInput, UserUncheckedCreateWithoutUpdatedProductPurchasesInput>
  }

  export type ProductCreateWithoutProductPurchaseInput = {
    imageUrl: string
    description: string
    category: string
    expiryDate?: Date | string | null
    productionDate?: Date | string | null
    quantity: number
    price: number
    costPrice: number
    createdAt?: Date | string
    deletedAt?: Date | string | null
    updatedAt?: Date | string | null
    isDeleted?: boolean
    createdByUser?: UserCreateNestedOneWithoutCreatedProductsInput
    deletedByUser?: UserCreateNestedOneWithoutDeletedProductsInput
    updatedByUser?: UserCreateNestedOneWithoutUpdatedProductsInput
    user: UserCreateNestedOneWithoutOwnedProductsInput
    productSale?: ProductSaleCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutProductPurchaseInput = {
    productId?: number
    imageUrl: string
    description: string
    category: string
    expiryDate?: Date | string | null
    productionDate?: Date | string | null
    quantity: number
    price: number
    costPrice: number
    createdAt?: Date | string
    deletedAt?: Date | string | null
    createdBy?: number | null
    deletedBy?: number | null
    updatedBy?: number | null
    updatedAt?: Date | string | null
    isDeleted?: boolean
    userId: number
    productSale?: ProductSaleUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutProductPurchaseInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutProductPurchaseInput, ProductUncheckedCreateWithoutProductPurchaseInput>
  }

  export type PurchaseCreateWithoutProductPurchaseInput = {
    createdAt?: Date | string
    deletedAt?: Date | string | null
    updatedAt?: Date | string | null
    isDeleted?: boolean
    productId: number
    createdByUser?: UserCreateNestedOneWithoutCreatedPurchasesInput
    deletedByUser?: UserCreateNestedOneWithoutDeletedPurchasesInput
    updatedByUser?: UserCreateNestedOneWithoutUpdatedPurchasesInput
  }

  export type PurchaseUncheckedCreateWithoutProductPurchaseInput = {
    purchaseId?: number
    createdAt?: Date | string
    deletedAt?: Date | string | null
    createdBy?: number | null
    deletedBy?: number | null
    updatedBy?: number | null
    updatedAt?: Date | string | null
    isDeleted?: boolean
    productId: number
  }

  export type PurchaseCreateOrConnectWithoutProductPurchaseInput = {
    where: PurchaseWhereUniqueInput
    create: XOR<PurchaseCreateWithoutProductPurchaseInput, PurchaseUncheckedCreateWithoutProductPurchaseInput>
  }

  export type UserUpsertWithoutCreatedProductPurchasesInput = {
    update: XOR<UserUpdateWithoutCreatedProductPurchasesInput, UserUncheckedUpdateWithoutCreatedProductPurchasesInput>
    create: XOR<UserCreateWithoutCreatedProductPurchasesInput, UserUncheckedCreateWithoutCreatedProductPurchasesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCreatedProductPurchasesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCreatedProductPurchasesInput, UserUncheckedUpdateWithoutCreatedProductPurchasesInput>
  }

  export type UserUpdateWithoutCreatedProductPurchasesInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdRoles?: RoleUpdateManyWithoutCreatedByUserNestedInput
    deletedRoles?: RoleUpdateManyWithoutDeletedByUserNestedInput
    updatedRoles?: RoleUpdateManyWithoutUpdatedByUserNestedInput
    createdProducts?: ProductUpdateManyWithoutCreatedByUserNestedInput
    deletedProducts?: ProductUpdateManyWithoutDeletedByUserNestedInput
    updatedProducts?: ProductUpdateManyWithoutUpdatedByUserNestedInput
    createdSales?: SaleUpdateManyWithoutCreatedByUserNestedInput
    deletedSales?: SaleUpdateManyWithoutDeletedByUserNestedInput
    updatedSales?: SaleUpdateManyWithoutUpdatedByUserNestedInput
    createdPurchases?: PurchaseUpdateManyWithoutCreatedByUserNestedInput
    deletedPurchases?: PurchaseUpdateManyWithoutDeletedByUserNestedInput
    updatedPurchases?: PurchaseUpdateManyWithoutUpdatedByUserNestedInput
    deletedProductPurchases?: ProductPurchaseUpdateManyWithoutDeletedByUserNestedInput
    updatedProductPurchases?: ProductPurchaseUpdateManyWithoutUpdatedByUserNestedInput
    createdProductSales?: ProductSaleUpdateManyWithoutCreatedByUserNestedInput
    deletedProductSales?: ProductSaleUpdateManyWithoutDeletedByUserNestedInput
    updatedProductSales?: ProductSaleUpdateManyWithoutUpdatedByUserNestedInput
    role?: RoleUpdateOneRequiredWithoutUsersNestedInput
    ownedProducts?: ProductUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCreatedProductPurchasesInput = {
    userId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    roleId?: IntFieldUpdateOperationsInput | number
    createdRoles?: RoleUncheckedUpdateManyWithoutCreatedByUserNestedInput
    deletedRoles?: RoleUncheckedUpdateManyWithoutDeletedByUserNestedInput
    updatedRoles?: RoleUncheckedUpdateManyWithoutUpdatedByUserNestedInput
    createdProducts?: ProductUncheckedUpdateManyWithoutCreatedByUserNestedInput
    deletedProducts?: ProductUncheckedUpdateManyWithoutDeletedByUserNestedInput
    updatedProducts?: ProductUncheckedUpdateManyWithoutUpdatedByUserNestedInput
    createdSales?: SaleUncheckedUpdateManyWithoutCreatedByUserNestedInput
    deletedSales?: SaleUncheckedUpdateManyWithoutDeletedByUserNestedInput
    updatedSales?: SaleUncheckedUpdateManyWithoutUpdatedByUserNestedInput
    createdPurchases?: PurchaseUncheckedUpdateManyWithoutCreatedByUserNestedInput
    deletedPurchases?: PurchaseUncheckedUpdateManyWithoutDeletedByUserNestedInput
    updatedPurchases?: PurchaseUncheckedUpdateManyWithoutUpdatedByUserNestedInput
    deletedProductPurchases?: ProductPurchaseUncheckedUpdateManyWithoutDeletedByUserNestedInput
    updatedProductPurchases?: ProductPurchaseUncheckedUpdateManyWithoutUpdatedByUserNestedInput
    createdProductSales?: ProductSaleUncheckedUpdateManyWithoutCreatedByUserNestedInput
    deletedProductSales?: ProductSaleUncheckedUpdateManyWithoutDeletedByUserNestedInput
    updatedProductSales?: ProductSaleUncheckedUpdateManyWithoutUpdatedByUserNestedInput
    ownedProducts?: ProductUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUpsertWithoutDeletedProductPurchasesInput = {
    update: XOR<UserUpdateWithoutDeletedProductPurchasesInput, UserUncheckedUpdateWithoutDeletedProductPurchasesInput>
    create: XOR<UserCreateWithoutDeletedProductPurchasesInput, UserUncheckedCreateWithoutDeletedProductPurchasesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDeletedProductPurchasesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDeletedProductPurchasesInput, UserUncheckedUpdateWithoutDeletedProductPurchasesInput>
  }

  export type UserUpdateWithoutDeletedProductPurchasesInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdRoles?: RoleUpdateManyWithoutCreatedByUserNestedInput
    deletedRoles?: RoleUpdateManyWithoutDeletedByUserNestedInput
    updatedRoles?: RoleUpdateManyWithoutUpdatedByUserNestedInput
    createdProducts?: ProductUpdateManyWithoutCreatedByUserNestedInput
    deletedProducts?: ProductUpdateManyWithoutDeletedByUserNestedInput
    updatedProducts?: ProductUpdateManyWithoutUpdatedByUserNestedInput
    createdSales?: SaleUpdateManyWithoutCreatedByUserNestedInput
    deletedSales?: SaleUpdateManyWithoutDeletedByUserNestedInput
    updatedSales?: SaleUpdateManyWithoutUpdatedByUserNestedInput
    createdPurchases?: PurchaseUpdateManyWithoutCreatedByUserNestedInput
    deletedPurchases?: PurchaseUpdateManyWithoutDeletedByUserNestedInput
    updatedPurchases?: PurchaseUpdateManyWithoutUpdatedByUserNestedInput
    createdProductPurchases?: ProductPurchaseUpdateManyWithoutCreatedByUserNestedInput
    updatedProductPurchases?: ProductPurchaseUpdateManyWithoutUpdatedByUserNestedInput
    createdProductSales?: ProductSaleUpdateManyWithoutCreatedByUserNestedInput
    deletedProductSales?: ProductSaleUpdateManyWithoutDeletedByUserNestedInput
    updatedProductSales?: ProductSaleUpdateManyWithoutUpdatedByUserNestedInput
    role?: RoleUpdateOneRequiredWithoutUsersNestedInput
    ownedProducts?: ProductUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutDeletedProductPurchasesInput = {
    userId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    roleId?: IntFieldUpdateOperationsInput | number
    createdRoles?: RoleUncheckedUpdateManyWithoutCreatedByUserNestedInput
    deletedRoles?: RoleUncheckedUpdateManyWithoutDeletedByUserNestedInput
    updatedRoles?: RoleUncheckedUpdateManyWithoutUpdatedByUserNestedInput
    createdProducts?: ProductUncheckedUpdateManyWithoutCreatedByUserNestedInput
    deletedProducts?: ProductUncheckedUpdateManyWithoutDeletedByUserNestedInput
    updatedProducts?: ProductUncheckedUpdateManyWithoutUpdatedByUserNestedInput
    createdSales?: SaleUncheckedUpdateManyWithoutCreatedByUserNestedInput
    deletedSales?: SaleUncheckedUpdateManyWithoutDeletedByUserNestedInput
    updatedSales?: SaleUncheckedUpdateManyWithoutUpdatedByUserNestedInput
    createdPurchases?: PurchaseUncheckedUpdateManyWithoutCreatedByUserNestedInput
    deletedPurchases?: PurchaseUncheckedUpdateManyWithoutDeletedByUserNestedInput
    updatedPurchases?: PurchaseUncheckedUpdateManyWithoutUpdatedByUserNestedInput
    createdProductPurchases?: ProductPurchaseUncheckedUpdateManyWithoutCreatedByUserNestedInput
    updatedProductPurchases?: ProductPurchaseUncheckedUpdateManyWithoutUpdatedByUserNestedInput
    createdProductSales?: ProductSaleUncheckedUpdateManyWithoutCreatedByUserNestedInput
    deletedProductSales?: ProductSaleUncheckedUpdateManyWithoutDeletedByUserNestedInput
    updatedProductSales?: ProductSaleUncheckedUpdateManyWithoutUpdatedByUserNestedInput
    ownedProducts?: ProductUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUpsertWithoutUpdatedProductPurchasesInput = {
    update: XOR<UserUpdateWithoutUpdatedProductPurchasesInput, UserUncheckedUpdateWithoutUpdatedProductPurchasesInput>
    create: XOR<UserCreateWithoutUpdatedProductPurchasesInput, UserUncheckedCreateWithoutUpdatedProductPurchasesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUpdatedProductPurchasesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUpdatedProductPurchasesInput, UserUncheckedUpdateWithoutUpdatedProductPurchasesInput>
  }

  export type UserUpdateWithoutUpdatedProductPurchasesInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdRoles?: RoleUpdateManyWithoutCreatedByUserNestedInput
    deletedRoles?: RoleUpdateManyWithoutDeletedByUserNestedInput
    updatedRoles?: RoleUpdateManyWithoutUpdatedByUserNestedInput
    createdProducts?: ProductUpdateManyWithoutCreatedByUserNestedInput
    deletedProducts?: ProductUpdateManyWithoutDeletedByUserNestedInput
    updatedProducts?: ProductUpdateManyWithoutUpdatedByUserNestedInput
    createdSales?: SaleUpdateManyWithoutCreatedByUserNestedInput
    deletedSales?: SaleUpdateManyWithoutDeletedByUserNestedInput
    updatedSales?: SaleUpdateManyWithoutUpdatedByUserNestedInput
    createdPurchases?: PurchaseUpdateManyWithoutCreatedByUserNestedInput
    deletedPurchases?: PurchaseUpdateManyWithoutDeletedByUserNestedInput
    updatedPurchases?: PurchaseUpdateManyWithoutUpdatedByUserNestedInput
    createdProductPurchases?: ProductPurchaseUpdateManyWithoutCreatedByUserNestedInput
    deletedProductPurchases?: ProductPurchaseUpdateManyWithoutDeletedByUserNestedInput
    createdProductSales?: ProductSaleUpdateManyWithoutCreatedByUserNestedInput
    deletedProductSales?: ProductSaleUpdateManyWithoutDeletedByUserNestedInput
    updatedProductSales?: ProductSaleUpdateManyWithoutUpdatedByUserNestedInput
    role?: RoleUpdateOneRequiredWithoutUsersNestedInput
    ownedProducts?: ProductUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUpdatedProductPurchasesInput = {
    userId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    roleId?: IntFieldUpdateOperationsInput | number
    createdRoles?: RoleUncheckedUpdateManyWithoutCreatedByUserNestedInput
    deletedRoles?: RoleUncheckedUpdateManyWithoutDeletedByUserNestedInput
    updatedRoles?: RoleUncheckedUpdateManyWithoutUpdatedByUserNestedInput
    createdProducts?: ProductUncheckedUpdateManyWithoutCreatedByUserNestedInput
    deletedProducts?: ProductUncheckedUpdateManyWithoutDeletedByUserNestedInput
    updatedProducts?: ProductUncheckedUpdateManyWithoutUpdatedByUserNestedInput
    createdSales?: SaleUncheckedUpdateManyWithoutCreatedByUserNestedInput
    deletedSales?: SaleUncheckedUpdateManyWithoutDeletedByUserNestedInput
    updatedSales?: SaleUncheckedUpdateManyWithoutUpdatedByUserNestedInput
    createdPurchases?: PurchaseUncheckedUpdateManyWithoutCreatedByUserNestedInput
    deletedPurchases?: PurchaseUncheckedUpdateManyWithoutDeletedByUserNestedInput
    updatedPurchases?: PurchaseUncheckedUpdateManyWithoutUpdatedByUserNestedInput
    createdProductPurchases?: ProductPurchaseUncheckedUpdateManyWithoutCreatedByUserNestedInput
    deletedProductPurchases?: ProductPurchaseUncheckedUpdateManyWithoutDeletedByUserNestedInput
    createdProductSales?: ProductSaleUncheckedUpdateManyWithoutCreatedByUserNestedInput
    deletedProductSales?: ProductSaleUncheckedUpdateManyWithoutDeletedByUserNestedInput
    updatedProductSales?: ProductSaleUncheckedUpdateManyWithoutUpdatedByUserNestedInput
    ownedProducts?: ProductUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ProductUpsertWithoutProductPurchaseInput = {
    update: XOR<ProductUpdateWithoutProductPurchaseInput, ProductUncheckedUpdateWithoutProductPurchaseInput>
    create: XOR<ProductCreateWithoutProductPurchaseInput, ProductUncheckedCreateWithoutProductPurchaseInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutProductPurchaseInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutProductPurchaseInput, ProductUncheckedUpdateWithoutProductPurchaseInput>
  }

  export type ProductUpdateWithoutProductPurchaseInput = {
    imageUrl?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    expiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    productionDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    costPrice?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdByUser?: UserUpdateOneWithoutCreatedProductsNestedInput
    deletedByUser?: UserUpdateOneWithoutDeletedProductsNestedInput
    updatedByUser?: UserUpdateOneWithoutUpdatedProductsNestedInput
    user?: UserUpdateOneRequiredWithoutOwnedProductsNestedInput
    productSale?: ProductSaleUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutProductPurchaseInput = {
    productId?: IntFieldUpdateOperationsInput | number
    imageUrl?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    expiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    productionDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    costPrice?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    userId?: IntFieldUpdateOperationsInput | number
    productSale?: ProductSaleUncheckedUpdateManyWithoutProductNestedInput
  }

  export type PurchaseUpsertWithoutProductPurchaseInput = {
    update: XOR<PurchaseUpdateWithoutProductPurchaseInput, PurchaseUncheckedUpdateWithoutProductPurchaseInput>
    create: XOR<PurchaseCreateWithoutProductPurchaseInput, PurchaseUncheckedCreateWithoutProductPurchaseInput>
    where?: PurchaseWhereInput
  }

  export type PurchaseUpdateToOneWithWhereWithoutProductPurchaseInput = {
    where?: PurchaseWhereInput
    data: XOR<PurchaseUpdateWithoutProductPurchaseInput, PurchaseUncheckedUpdateWithoutProductPurchaseInput>
  }

  export type PurchaseUpdateWithoutProductPurchaseInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    productId?: IntFieldUpdateOperationsInput | number
    createdByUser?: UserUpdateOneWithoutCreatedPurchasesNestedInput
    deletedByUser?: UserUpdateOneWithoutDeletedPurchasesNestedInput
    updatedByUser?: UserUpdateOneWithoutUpdatedPurchasesNestedInput
  }

  export type PurchaseUncheckedUpdateWithoutProductPurchaseInput = {
    purchaseId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    productId?: IntFieldUpdateOperationsInput | number
  }

  export type UserCreateWithoutCreatedProductSalesInput = {
    name: string
    email: string
    password: string
    createdAt?: Date | string
    deletedAt?: Date | string | null
    createdBy?: number | null
    deletedBy?: number | null
    isDeleted?: boolean
    createdRoles?: RoleCreateNestedManyWithoutCreatedByUserInput
    deletedRoles?: RoleCreateNestedManyWithoutDeletedByUserInput
    updatedRoles?: RoleCreateNestedManyWithoutUpdatedByUserInput
    createdProducts?: ProductCreateNestedManyWithoutCreatedByUserInput
    deletedProducts?: ProductCreateNestedManyWithoutDeletedByUserInput
    updatedProducts?: ProductCreateNestedManyWithoutUpdatedByUserInput
    createdSales?: SaleCreateNestedManyWithoutCreatedByUserInput
    deletedSales?: SaleCreateNestedManyWithoutDeletedByUserInput
    updatedSales?: SaleCreateNestedManyWithoutUpdatedByUserInput
    createdPurchases?: PurchaseCreateNestedManyWithoutCreatedByUserInput
    deletedPurchases?: PurchaseCreateNestedManyWithoutDeletedByUserInput
    updatedPurchases?: PurchaseCreateNestedManyWithoutUpdatedByUserInput
    createdProductPurchases?: ProductPurchaseCreateNestedManyWithoutCreatedByUserInput
    deletedProductPurchases?: ProductPurchaseCreateNestedManyWithoutDeletedByUserInput
    updatedProductPurchases?: ProductPurchaseCreateNestedManyWithoutUpdatedByUserInput
    deletedProductSales?: ProductSaleCreateNestedManyWithoutDeletedByUserInput
    updatedProductSales?: ProductSaleCreateNestedManyWithoutUpdatedByUserInput
    role: RoleCreateNestedOneWithoutUsersInput
    ownedProducts?: ProductCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCreatedProductSalesInput = {
    userId?: number
    name: string
    email: string
    password: string
    createdAt?: Date | string
    deletedAt?: Date | string | null
    createdBy?: number | null
    deletedBy?: number | null
    isDeleted?: boolean
    roleId: number
    createdRoles?: RoleUncheckedCreateNestedManyWithoutCreatedByUserInput
    deletedRoles?: RoleUncheckedCreateNestedManyWithoutDeletedByUserInput
    updatedRoles?: RoleUncheckedCreateNestedManyWithoutUpdatedByUserInput
    createdProducts?: ProductUncheckedCreateNestedManyWithoutCreatedByUserInput
    deletedProducts?: ProductUncheckedCreateNestedManyWithoutDeletedByUserInput
    updatedProducts?: ProductUncheckedCreateNestedManyWithoutUpdatedByUserInput
    createdSales?: SaleUncheckedCreateNestedManyWithoutCreatedByUserInput
    deletedSales?: SaleUncheckedCreateNestedManyWithoutDeletedByUserInput
    updatedSales?: SaleUncheckedCreateNestedManyWithoutUpdatedByUserInput
    createdPurchases?: PurchaseUncheckedCreateNestedManyWithoutCreatedByUserInput
    deletedPurchases?: PurchaseUncheckedCreateNestedManyWithoutDeletedByUserInput
    updatedPurchases?: PurchaseUncheckedCreateNestedManyWithoutUpdatedByUserInput
    createdProductPurchases?: ProductPurchaseUncheckedCreateNestedManyWithoutCreatedByUserInput
    deletedProductPurchases?: ProductPurchaseUncheckedCreateNestedManyWithoutDeletedByUserInput
    updatedProductPurchases?: ProductPurchaseUncheckedCreateNestedManyWithoutUpdatedByUserInput
    deletedProductSales?: ProductSaleUncheckedCreateNestedManyWithoutDeletedByUserInput
    updatedProductSales?: ProductSaleUncheckedCreateNestedManyWithoutUpdatedByUserInput
    ownedProducts?: ProductUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCreatedProductSalesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCreatedProductSalesInput, UserUncheckedCreateWithoutCreatedProductSalesInput>
  }

  export type UserCreateWithoutDeletedProductSalesInput = {
    name: string
    email: string
    password: string
    createdAt?: Date | string
    deletedAt?: Date | string | null
    createdBy?: number | null
    deletedBy?: number | null
    isDeleted?: boolean
    createdRoles?: RoleCreateNestedManyWithoutCreatedByUserInput
    deletedRoles?: RoleCreateNestedManyWithoutDeletedByUserInput
    updatedRoles?: RoleCreateNestedManyWithoutUpdatedByUserInput
    createdProducts?: ProductCreateNestedManyWithoutCreatedByUserInput
    deletedProducts?: ProductCreateNestedManyWithoutDeletedByUserInput
    updatedProducts?: ProductCreateNestedManyWithoutUpdatedByUserInput
    createdSales?: SaleCreateNestedManyWithoutCreatedByUserInput
    deletedSales?: SaleCreateNestedManyWithoutDeletedByUserInput
    updatedSales?: SaleCreateNestedManyWithoutUpdatedByUserInput
    createdPurchases?: PurchaseCreateNestedManyWithoutCreatedByUserInput
    deletedPurchases?: PurchaseCreateNestedManyWithoutDeletedByUserInput
    updatedPurchases?: PurchaseCreateNestedManyWithoutUpdatedByUserInput
    createdProductPurchases?: ProductPurchaseCreateNestedManyWithoutCreatedByUserInput
    deletedProductPurchases?: ProductPurchaseCreateNestedManyWithoutDeletedByUserInput
    updatedProductPurchases?: ProductPurchaseCreateNestedManyWithoutUpdatedByUserInput
    createdProductSales?: ProductSaleCreateNestedManyWithoutCreatedByUserInput
    updatedProductSales?: ProductSaleCreateNestedManyWithoutUpdatedByUserInput
    role: RoleCreateNestedOneWithoutUsersInput
    ownedProducts?: ProductCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutDeletedProductSalesInput = {
    userId?: number
    name: string
    email: string
    password: string
    createdAt?: Date | string
    deletedAt?: Date | string | null
    createdBy?: number | null
    deletedBy?: number | null
    isDeleted?: boolean
    roleId: number
    createdRoles?: RoleUncheckedCreateNestedManyWithoutCreatedByUserInput
    deletedRoles?: RoleUncheckedCreateNestedManyWithoutDeletedByUserInput
    updatedRoles?: RoleUncheckedCreateNestedManyWithoutUpdatedByUserInput
    createdProducts?: ProductUncheckedCreateNestedManyWithoutCreatedByUserInput
    deletedProducts?: ProductUncheckedCreateNestedManyWithoutDeletedByUserInput
    updatedProducts?: ProductUncheckedCreateNestedManyWithoutUpdatedByUserInput
    createdSales?: SaleUncheckedCreateNestedManyWithoutCreatedByUserInput
    deletedSales?: SaleUncheckedCreateNestedManyWithoutDeletedByUserInput
    updatedSales?: SaleUncheckedCreateNestedManyWithoutUpdatedByUserInput
    createdPurchases?: PurchaseUncheckedCreateNestedManyWithoutCreatedByUserInput
    deletedPurchases?: PurchaseUncheckedCreateNestedManyWithoutDeletedByUserInput
    updatedPurchases?: PurchaseUncheckedCreateNestedManyWithoutUpdatedByUserInput
    createdProductPurchases?: ProductPurchaseUncheckedCreateNestedManyWithoutCreatedByUserInput
    deletedProductPurchases?: ProductPurchaseUncheckedCreateNestedManyWithoutDeletedByUserInput
    updatedProductPurchases?: ProductPurchaseUncheckedCreateNestedManyWithoutUpdatedByUserInput
    createdProductSales?: ProductSaleUncheckedCreateNestedManyWithoutCreatedByUserInput
    updatedProductSales?: ProductSaleUncheckedCreateNestedManyWithoutUpdatedByUserInput
    ownedProducts?: ProductUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutDeletedProductSalesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDeletedProductSalesInput, UserUncheckedCreateWithoutDeletedProductSalesInput>
  }

  export type UserCreateWithoutUpdatedProductSalesInput = {
    name: string
    email: string
    password: string
    createdAt?: Date | string
    deletedAt?: Date | string | null
    createdBy?: number | null
    deletedBy?: number | null
    isDeleted?: boolean
    createdRoles?: RoleCreateNestedManyWithoutCreatedByUserInput
    deletedRoles?: RoleCreateNestedManyWithoutDeletedByUserInput
    updatedRoles?: RoleCreateNestedManyWithoutUpdatedByUserInput
    createdProducts?: ProductCreateNestedManyWithoutCreatedByUserInput
    deletedProducts?: ProductCreateNestedManyWithoutDeletedByUserInput
    updatedProducts?: ProductCreateNestedManyWithoutUpdatedByUserInput
    createdSales?: SaleCreateNestedManyWithoutCreatedByUserInput
    deletedSales?: SaleCreateNestedManyWithoutDeletedByUserInput
    updatedSales?: SaleCreateNestedManyWithoutUpdatedByUserInput
    createdPurchases?: PurchaseCreateNestedManyWithoutCreatedByUserInput
    deletedPurchases?: PurchaseCreateNestedManyWithoutDeletedByUserInput
    updatedPurchases?: PurchaseCreateNestedManyWithoutUpdatedByUserInput
    createdProductPurchases?: ProductPurchaseCreateNestedManyWithoutCreatedByUserInput
    deletedProductPurchases?: ProductPurchaseCreateNestedManyWithoutDeletedByUserInput
    updatedProductPurchases?: ProductPurchaseCreateNestedManyWithoutUpdatedByUserInput
    createdProductSales?: ProductSaleCreateNestedManyWithoutCreatedByUserInput
    deletedProductSales?: ProductSaleCreateNestedManyWithoutDeletedByUserInput
    role: RoleCreateNestedOneWithoutUsersInput
    ownedProducts?: ProductCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUpdatedProductSalesInput = {
    userId?: number
    name: string
    email: string
    password: string
    createdAt?: Date | string
    deletedAt?: Date | string | null
    createdBy?: number | null
    deletedBy?: number | null
    isDeleted?: boolean
    roleId: number
    createdRoles?: RoleUncheckedCreateNestedManyWithoutCreatedByUserInput
    deletedRoles?: RoleUncheckedCreateNestedManyWithoutDeletedByUserInput
    updatedRoles?: RoleUncheckedCreateNestedManyWithoutUpdatedByUserInput
    createdProducts?: ProductUncheckedCreateNestedManyWithoutCreatedByUserInput
    deletedProducts?: ProductUncheckedCreateNestedManyWithoutDeletedByUserInput
    updatedProducts?: ProductUncheckedCreateNestedManyWithoutUpdatedByUserInput
    createdSales?: SaleUncheckedCreateNestedManyWithoutCreatedByUserInput
    deletedSales?: SaleUncheckedCreateNestedManyWithoutDeletedByUserInput
    updatedSales?: SaleUncheckedCreateNestedManyWithoutUpdatedByUserInput
    createdPurchases?: PurchaseUncheckedCreateNestedManyWithoutCreatedByUserInput
    deletedPurchases?: PurchaseUncheckedCreateNestedManyWithoutDeletedByUserInput
    updatedPurchases?: PurchaseUncheckedCreateNestedManyWithoutUpdatedByUserInput
    createdProductPurchases?: ProductPurchaseUncheckedCreateNestedManyWithoutCreatedByUserInput
    deletedProductPurchases?: ProductPurchaseUncheckedCreateNestedManyWithoutDeletedByUserInput
    updatedProductPurchases?: ProductPurchaseUncheckedCreateNestedManyWithoutUpdatedByUserInput
    createdProductSales?: ProductSaleUncheckedCreateNestedManyWithoutCreatedByUserInput
    deletedProductSales?: ProductSaleUncheckedCreateNestedManyWithoutDeletedByUserInput
    ownedProducts?: ProductUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUpdatedProductSalesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUpdatedProductSalesInput, UserUncheckedCreateWithoutUpdatedProductSalesInput>
  }

  export type ProductCreateWithoutProductSaleInput = {
    imageUrl: string
    description: string
    category: string
    expiryDate?: Date | string | null
    productionDate?: Date | string | null
    quantity: number
    price: number
    costPrice: number
    createdAt?: Date | string
    deletedAt?: Date | string | null
    updatedAt?: Date | string | null
    isDeleted?: boolean
    createdByUser?: UserCreateNestedOneWithoutCreatedProductsInput
    deletedByUser?: UserCreateNestedOneWithoutDeletedProductsInput
    updatedByUser?: UserCreateNestedOneWithoutUpdatedProductsInput
    user: UserCreateNestedOneWithoutOwnedProductsInput
    productPurchase?: ProductPurchaseCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutProductSaleInput = {
    productId?: number
    imageUrl: string
    description: string
    category: string
    expiryDate?: Date | string | null
    productionDate?: Date | string | null
    quantity: number
    price: number
    costPrice: number
    createdAt?: Date | string
    deletedAt?: Date | string | null
    createdBy?: number | null
    deletedBy?: number | null
    updatedBy?: number | null
    updatedAt?: Date | string | null
    isDeleted?: boolean
    userId: number
    productPurchase?: ProductPurchaseUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutProductSaleInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutProductSaleInput, ProductUncheckedCreateWithoutProductSaleInput>
  }

  export type SaleCreateWithoutProductSaleInput = {
    createdAt?: Date | string
    deletedAt?: Date | string | null
    updatedAt?: Date | string | null
    isDeleted?: boolean
    createdByUser?: UserCreateNestedOneWithoutCreatedSalesInput
    deletedByUser?: UserCreateNestedOneWithoutDeletedSalesInput
    updatedByUser?: UserCreateNestedOneWithoutUpdatedSalesInput
  }

  export type SaleUncheckedCreateWithoutProductSaleInput = {
    saleId?: number
    createdAt?: Date | string
    deletedAt?: Date | string | null
    createdBy?: number | null
    deletedBy?: number | null
    updatedBy?: number | null
    updatedAt?: Date | string | null
    isDeleted?: boolean
  }

  export type SaleCreateOrConnectWithoutProductSaleInput = {
    where: SaleWhereUniqueInput
    create: XOR<SaleCreateWithoutProductSaleInput, SaleUncheckedCreateWithoutProductSaleInput>
  }

  export type UserUpsertWithoutCreatedProductSalesInput = {
    update: XOR<UserUpdateWithoutCreatedProductSalesInput, UserUncheckedUpdateWithoutCreatedProductSalesInput>
    create: XOR<UserCreateWithoutCreatedProductSalesInput, UserUncheckedCreateWithoutCreatedProductSalesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCreatedProductSalesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCreatedProductSalesInput, UserUncheckedUpdateWithoutCreatedProductSalesInput>
  }

  export type UserUpdateWithoutCreatedProductSalesInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdRoles?: RoleUpdateManyWithoutCreatedByUserNestedInput
    deletedRoles?: RoleUpdateManyWithoutDeletedByUserNestedInput
    updatedRoles?: RoleUpdateManyWithoutUpdatedByUserNestedInput
    createdProducts?: ProductUpdateManyWithoutCreatedByUserNestedInput
    deletedProducts?: ProductUpdateManyWithoutDeletedByUserNestedInput
    updatedProducts?: ProductUpdateManyWithoutUpdatedByUserNestedInput
    createdSales?: SaleUpdateManyWithoutCreatedByUserNestedInput
    deletedSales?: SaleUpdateManyWithoutDeletedByUserNestedInput
    updatedSales?: SaleUpdateManyWithoutUpdatedByUserNestedInput
    createdPurchases?: PurchaseUpdateManyWithoutCreatedByUserNestedInput
    deletedPurchases?: PurchaseUpdateManyWithoutDeletedByUserNestedInput
    updatedPurchases?: PurchaseUpdateManyWithoutUpdatedByUserNestedInput
    createdProductPurchases?: ProductPurchaseUpdateManyWithoutCreatedByUserNestedInput
    deletedProductPurchases?: ProductPurchaseUpdateManyWithoutDeletedByUserNestedInput
    updatedProductPurchases?: ProductPurchaseUpdateManyWithoutUpdatedByUserNestedInput
    deletedProductSales?: ProductSaleUpdateManyWithoutDeletedByUserNestedInput
    updatedProductSales?: ProductSaleUpdateManyWithoutUpdatedByUserNestedInput
    role?: RoleUpdateOneRequiredWithoutUsersNestedInput
    ownedProducts?: ProductUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCreatedProductSalesInput = {
    userId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    roleId?: IntFieldUpdateOperationsInput | number
    createdRoles?: RoleUncheckedUpdateManyWithoutCreatedByUserNestedInput
    deletedRoles?: RoleUncheckedUpdateManyWithoutDeletedByUserNestedInput
    updatedRoles?: RoleUncheckedUpdateManyWithoutUpdatedByUserNestedInput
    createdProducts?: ProductUncheckedUpdateManyWithoutCreatedByUserNestedInput
    deletedProducts?: ProductUncheckedUpdateManyWithoutDeletedByUserNestedInput
    updatedProducts?: ProductUncheckedUpdateManyWithoutUpdatedByUserNestedInput
    createdSales?: SaleUncheckedUpdateManyWithoutCreatedByUserNestedInput
    deletedSales?: SaleUncheckedUpdateManyWithoutDeletedByUserNestedInput
    updatedSales?: SaleUncheckedUpdateManyWithoutUpdatedByUserNestedInput
    createdPurchases?: PurchaseUncheckedUpdateManyWithoutCreatedByUserNestedInput
    deletedPurchases?: PurchaseUncheckedUpdateManyWithoutDeletedByUserNestedInput
    updatedPurchases?: PurchaseUncheckedUpdateManyWithoutUpdatedByUserNestedInput
    createdProductPurchases?: ProductPurchaseUncheckedUpdateManyWithoutCreatedByUserNestedInput
    deletedProductPurchases?: ProductPurchaseUncheckedUpdateManyWithoutDeletedByUserNestedInput
    updatedProductPurchases?: ProductPurchaseUncheckedUpdateManyWithoutUpdatedByUserNestedInput
    deletedProductSales?: ProductSaleUncheckedUpdateManyWithoutDeletedByUserNestedInput
    updatedProductSales?: ProductSaleUncheckedUpdateManyWithoutUpdatedByUserNestedInput
    ownedProducts?: ProductUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUpsertWithoutDeletedProductSalesInput = {
    update: XOR<UserUpdateWithoutDeletedProductSalesInput, UserUncheckedUpdateWithoutDeletedProductSalesInput>
    create: XOR<UserCreateWithoutDeletedProductSalesInput, UserUncheckedCreateWithoutDeletedProductSalesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDeletedProductSalesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDeletedProductSalesInput, UserUncheckedUpdateWithoutDeletedProductSalesInput>
  }

  export type UserUpdateWithoutDeletedProductSalesInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdRoles?: RoleUpdateManyWithoutCreatedByUserNestedInput
    deletedRoles?: RoleUpdateManyWithoutDeletedByUserNestedInput
    updatedRoles?: RoleUpdateManyWithoutUpdatedByUserNestedInput
    createdProducts?: ProductUpdateManyWithoutCreatedByUserNestedInput
    deletedProducts?: ProductUpdateManyWithoutDeletedByUserNestedInput
    updatedProducts?: ProductUpdateManyWithoutUpdatedByUserNestedInput
    createdSales?: SaleUpdateManyWithoutCreatedByUserNestedInput
    deletedSales?: SaleUpdateManyWithoutDeletedByUserNestedInput
    updatedSales?: SaleUpdateManyWithoutUpdatedByUserNestedInput
    createdPurchases?: PurchaseUpdateManyWithoutCreatedByUserNestedInput
    deletedPurchases?: PurchaseUpdateManyWithoutDeletedByUserNestedInput
    updatedPurchases?: PurchaseUpdateManyWithoutUpdatedByUserNestedInput
    createdProductPurchases?: ProductPurchaseUpdateManyWithoutCreatedByUserNestedInput
    deletedProductPurchases?: ProductPurchaseUpdateManyWithoutDeletedByUserNestedInput
    updatedProductPurchases?: ProductPurchaseUpdateManyWithoutUpdatedByUserNestedInput
    createdProductSales?: ProductSaleUpdateManyWithoutCreatedByUserNestedInput
    updatedProductSales?: ProductSaleUpdateManyWithoutUpdatedByUserNestedInput
    role?: RoleUpdateOneRequiredWithoutUsersNestedInput
    ownedProducts?: ProductUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutDeletedProductSalesInput = {
    userId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    roleId?: IntFieldUpdateOperationsInput | number
    createdRoles?: RoleUncheckedUpdateManyWithoutCreatedByUserNestedInput
    deletedRoles?: RoleUncheckedUpdateManyWithoutDeletedByUserNestedInput
    updatedRoles?: RoleUncheckedUpdateManyWithoutUpdatedByUserNestedInput
    createdProducts?: ProductUncheckedUpdateManyWithoutCreatedByUserNestedInput
    deletedProducts?: ProductUncheckedUpdateManyWithoutDeletedByUserNestedInput
    updatedProducts?: ProductUncheckedUpdateManyWithoutUpdatedByUserNestedInput
    createdSales?: SaleUncheckedUpdateManyWithoutCreatedByUserNestedInput
    deletedSales?: SaleUncheckedUpdateManyWithoutDeletedByUserNestedInput
    updatedSales?: SaleUncheckedUpdateManyWithoutUpdatedByUserNestedInput
    createdPurchases?: PurchaseUncheckedUpdateManyWithoutCreatedByUserNestedInput
    deletedPurchases?: PurchaseUncheckedUpdateManyWithoutDeletedByUserNestedInput
    updatedPurchases?: PurchaseUncheckedUpdateManyWithoutUpdatedByUserNestedInput
    createdProductPurchases?: ProductPurchaseUncheckedUpdateManyWithoutCreatedByUserNestedInput
    deletedProductPurchases?: ProductPurchaseUncheckedUpdateManyWithoutDeletedByUserNestedInput
    updatedProductPurchases?: ProductPurchaseUncheckedUpdateManyWithoutUpdatedByUserNestedInput
    createdProductSales?: ProductSaleUncheckedUpdateManyWithoutCreatedByUserNestedInput
    updatedProductSales?: ProductSaleUncheckedUpdateManyWithoutUpdatedByUserNestedInput
    ownedProducts?: ProductUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUpsertWithoutUpdatedProductSalesInput = {
    update: XOR<UserUpdateWithoutUpdatedProductSalesInput, UserUncheckedUpdateWithoutUpdatedProductSalesInput>
    create: XOR<UserCreateWithoutUpdatedProductSalesInput, UserUncheckedCreateWithoutUpdatedProductSalesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUpdatedProductSalesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUpdatedProductSalesInput, UserUncheckedUpdateWithoutUpdatedProductSalesInput>
  }

  export type UserUpdateWithoutUpdatedProductSalesInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdRoles?: RoleUpdateManyWithoutCreatedByUserNestedInput
    deletedRoles?: RoleUpdateManyWithoutDeletedByUserNestedInput
    updatedRoles?: RoleUpdateManyWithoutUpdatedByUserNestedInput
    createdProducts?: ProductUpdateManyWithoutCreatedByUserNestedInput
    deletedProducts?: ProductUpdateManyWithoutDeletedByUserNestedInput
    updatedProducts?: ProductUpdateManyWithoutUpdatedByUserNestedInput
    createdSales?: SaleUpdateManyWithoutCreatedByUserNestedInput
    deletedSales?: SaleUpdateManyWithoutDeletedByUserNestedInput
    updatedSales?: SaleUpdateManyWithoutUpdatedByUserNestedInput
    createdPurchases?: PurchaseUpdateManyWithoutCreatedByUserNestedInput
    deletedPurchases?: PurchaseUpdateManyWithoutDeletedByUserNestedInput
    updatedPurchases?: PurchaseUpdateManyWithoutUpdatedByUserNestedInput
    createdProductPurchases?: ProductPurchaseUpdateManyWithoutCreatedByUserNestedInput
    deletedProductPurchases?: ProductPurchaseUpdateManyWithoutDeletedByUserNestedInput
    updatedProductPurchases?: ProductPurchaseUpdateManyWithoutUpdatedByUserNestedInput
    createdProductSales?: ProductSaleUpdateManyWithoutCreatedByUserNestedInput
    deletedProductSales?: ProductSaleUpdateManyWithoutDeletedByUserNestedInput
    role?: RoleUpdateOneRequiredWithoutUsersNestedInput
    ownedProducts?: ProductUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUpdatedProductSalesInput = {
    userId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    roleId?: IntFieldUpdateOperationsInput | number
    createdRoles?: RoleUncheckedUpdateManyWithoutCreatedByUserNestedInput
    deletedRoles?: RoleUncheckedUpdateManyWithoutDeletedByUserNestedInput
    updatedRoles?: RoleUncheckedUpdateManyWithoutUpdatedByUserNestedInput
    createdProducts?: ProductUncheckedUpdateManyWithoutCreatedByUserNestedInput
    deletedProducts?: ProductUncheckedUpdateManyWithoutDeletedByUserNestedInput
    updatedProducts?: ProductUncheckedUpdateManyWithoutUpdatedByUserNestedInput
    createdSales?: SaleUncheckedUpdateManyWithoutCreatedByUserNestedInput
    deletedSales?: SaleUncheckedUpdateManyWithoutDeletedByUserNestedInput
    updatedSales?: SaleUncheckedUpdateManyWithoutUpdatedByUserNestedInput
    createdPurchases?: PurchaseUncheckedUpdateManyWithoutCreatedByUserNestedInput
    deletedPurchases?: PurchaseUncheckedUpdateManyWithoutDeletedByUserNestedInput
    updatedPurchases?: PurchaseUncheckedUpdateManyWithoutUpdatedByUserNestedInput
    createdProductPurchases?: ProductPurchaseUncheckedUpdateManyWithoutCreatedByUserNestedInput
    deletedProductPurchases?: ProductPurchaseUncheckedUpdateManyWithoutDeletedByUserNestedInput
    updatedProductPurchases?: ProductPurchaseUncheckedUpdateManyWithoutUpdatedByUserNestedInput
    createdProductSales?: ProductSaleUncheckedUpdateManyWithoutCreatedByUserNestedInput
    deletedProductSales?: ProductSaleUncheckedUpdateManyWithoutDeletedByUserNestedInput
    ownedProducts?: ProductUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ProductUpsertWithoutProductSaleInput = {
    update: XOR<ProductUpdateWithoutProductSaleInput, ProductUncheckedUpdateWithoutProductSaleInput>
    create: XOR<ProductCreateWithoutProductSaleInput, ProductUncheckedCreateWithoutProductSaleInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutProductSaleInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutProductSaleInput, ProductUncheckedUpdateWithoutProductSaleInput>
  }

  export type ProductUpdateWithoutProductSaleInput = {
    imageUrl?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    expiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    productionDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    costPrice?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdByUser?: UserUpdateOneWithoutCreatedProductsNestedInput
    deletedByUser?: UserUpdateOneWithoutDeletedProductsNestedInput
    updatedByUser?: UserUpdateOneWithoutUpdatedProductsNestedInput
    user?: UserUpdateOneRequiredWithoutOwnedProductsNestedInput
    productPurchase?: ProductPurchaseUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutProductSaleInput = {
    productId?: IntFieldUpdateOperationsInput | number
    imageUrl?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    expiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    productionDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    costPrice?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    userId?: IntFieldUpdateOperationsInput | number
    productPurchase?: ProductPurchaseUncheckedUpdateManyWithoutProductNestedInput
  }

  export type SaleUpsertWithoutProductSaleInput = {
    update: XOR<SaleUpdateWithoutProductSaleInput, SaleUncheckedUpdateWithoutProductSaleInput>
    create: XOR<SaleCreateWithoutProductSaleInput, SaleUncheckedCreateWithoutProductSaleInput>
    where?: SaleWhereInput
  }

  export type SaleUpdateToOneWithWhereWithoutProductSaleInput = {
    where?: SaleWhereInput
    data: XOR<SaleUpdateWithoutProductSaleInput, SaleUncheckedUpdateWithoutProductSaleInput>
  }

  export type SaleUpdateWithoutProductSaleInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdByUser?: UserUpdateOneWithoutCreatedSalesNestedInput
    deletedByUser?: UserUpdateOneWithoutDeletedSalesNestedInput
    updatedByUser?: UserUpdateOneWithoutUpdatedSalesNestedInput
  }

  export type SaleUncheckedUpdateWithoutProductSaleInput = {
    saleId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type RoleCreateManyCreatedByUserInput = {
    roleId?: number
    roleType: string
    createdAt?: Date | string
    deletedAt?: Date | string | null
    deletedBy?: number | null
    updatedBy?: number | null
    updatedAt?: Date | string | null
    isDeleted?: boolean
  }

  export type RoleCreateManyDeletedByUserInput = {
    roleId?: number
    roleType: string
    createdAt?: Date | string
    deletedAt?: Date | string | null
    createdBy?: number | null
    updatedBy?: number | null
    updatedAt?: Date | string | null
    isDeleted?: boolean
  }

  export type RoleCreateManyUpdatedByUserInput = {
    roleId?: number
    roleType: string
    createdAt?: Date | string
    deletedAt?: Date | string | null
    createdBy?: number | null
    deletedBy?: number | null
    updatedAt?: Date | string | null
    isDeleted?: boolean
  }

  export type ProductCreateManyCreatedByUserInput = {
    productId?: number
    imageUrl: string
    description: string
    category: string
    expiryDate?: Date | string | null
    productionDate?: Date | string | null
    quantity: number
    price: number
    costPrice: number
    createdAt?: Date | string
    deletedAt?: Date | string | null
    deletedBy?: number | null
    updatedBy?: number | null
    updatedAt?: Date | string | null
    isDeleted?: boolean
    userId: number
  }

  export type ProductCreateManyDeletedByUserInput = {
    productId?: number
    imageUrl: string
    description: string
    category: string
    expiryDate?: Date | string | null
    productionDate?: Date | string | null
    quantity: number
    price: number
    costPrice: number
    createdAt?: Date | string
    deletedAt?: Date | string | null
    createdBy?: number | null
    updatedBy?: number | null
    updatedAt?: Date | string | null
    isDeleted?: boolean
    userId: number
  }

  export type ProductCreateManyUpdatedByUserInput = {
    productId?: number
    imageUrl: string
    description: string
    category: string
    expiryDate?: Date | string | null
    productionDate?: Date | string | null
    quantity: number
    price: number
    costPrice: number
    createdAt?: Date | string
    deletedAt?: Date | string | null
    createdBy?: number | null
    deletedBy?: number | null
    updatedAt?: Date | string | null
    isDeleted?: boolean
    userId: number
  }

  export type SaleCreateManyCreatedByUserInput = {
    saleId?: number
    createdAt?: Date | string
    deletedAt?: Date | string | null
    deletedBy?: number | null
    updatedBy?: number | null
    updatedAt?: Date | string | null
    isDeleted?: boolean
  }

  export type SaleCreateManyDeletedByUserInput = {
    saleId?: number
    createdAt?: Date | string
    deletedAt?: Date | string | null
    createdBy?: number | null
    updatedBy?: number | null
    updatedAt?: Date | string | null
    isDeleted?: boolean
  }

  export type SaleCreateManyUpdatedByUserInput = {
    saleId?: number
    createdAt?: Date | string
    deletedAt?: Date | string | null
    createdBy?: number | null
    deletedBy?: number | null
    updatedAt?: Date | string | null
    isDeleted?: boolean
  }

  export type PurchaseCreateManyCreatedByUserInput = {
    purchaseId?: number
    createdAt?: Date | string
    deletedAt?: Date | string | null
    deletedBy?: number | null
    updatedBy?: number | null
    updatedAt?: Date | string | null
    isDeleted?: boolean
    productId: number
  }

  export type PurchaseCreateManyDeletedByUserInput = {
    purchaseId?: number
    createdAt?: Date | string
    deletedAt?: Date | string | null
    createdBy?: number | null
    updatedBy?: number | null
    updatedAt?: Date | string | null
    isDeleted?: boolean
    productId: number
  }

  export type PurchaseCreateManyUpdatedByUserInput = {
    purchaseId?: number
    createdAt?: Date | string
    deletedAt?: Date | string | null
    createdBy?: number | null
    deletedBy?: number | null
    updatedAt?: Date | string | null
    isDeleted?: boolean
    productId: number
  }

  export type ProductPurchaseCreateManyCreatedByUserInput = {
    productPurchaseId?: number
    purchasePrice: number
    purchaseQuantity: number
    createdAt?: Date | string
    deletedAt?: Date | string | null
    deletedBy?: number | null
    updatedBy?: number | null
    updatedAt?: Date | string | null
    isDeleted?: boolean
    productId: number
    purchaseId: number
  }

  export type ProductPurchaseCreateManyDeletedByUserInput = {
    productPurchaseId?: number
    purchasePrice: number
    purchaseQuantity: number
    createdAt?: Date | string
    deletedAt?: Date | string | null
    createdBy?: number | null
    updatedBy?: number | null
    updatedAt?: Date | string | null
    isDeleted?: boolean
    productId: number
    purchaseId: number
  }

  export type ProductPurchaseCreateManyUpdatedByUserInput = {
    productPurchaseId?: number
    purchasePrice: number
    purchaseQuantity: number
    createdAt?: Date | string
    deletedAt?: Date | string | null
    createdBy?: number | null
    deletedBy?: number | null
    updatedAt?: Date | string | null
    isDeleted?: boolean
    productId: number
    purchaseId: number
  }

  export type ProductSaleCreateManyCreatedByUserInput = {
    productSaleId?: number
    salePrice: number
    saleQuantity: number
    createdAt?: Date | string
    deletedAt?: Date | string | null
    deletedBy?: number | null
    updatedBy?: number | null
    updatedAt?: Date | string | null
    isDeleted?: boolean
    productId: number
    saleId: number
  }

  export type ProductSaleCreateManyDeletedByUserInput = {
    productSaleId?: number
    salePrice: number
    saleQuantity: number
    createdAt?: Date | string
    deletedAt?: Date | string | null
    createdBy?: number | null
    updatedBy?: number | null
    updatedAt?: Date | string | null
    isDeleted?: boolean
    productId: number
    saleId: number
  }

  export type ProductSaleCreateManyUpdatedByUserInput = {
    productSaleId?: number
    salePrice: number
    saleQuantity: number
    createdAt?: Date | string
    deletedAt?: Date | string | null
    createdBy?: number | null
    deletedBy?: number | null
    updatedAt?: Date | string | null
    isDeleted?: boolean
    productId: number
    saleId: number
  }

  export type ProductCreateManyUserInput = {
    productId?: number
    imageUrl: string
    description: string
    category: string
    expiryDate?: Date | string | null
    productionDate?: Date | string | null
    quantity: number
    price: number
    costPrice: number
    createdAt?: Date | string
    deletedAt?: Date | string | null
    createdBy?: number | null
    deletedBy?: number | null
    updatedBy?: number | null
    updatedAt?: Date | string | null
    isDeleted?: boolean
  }

  export type RoleUpdateWithoutCreatedByUserInput = {
    roleType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedByUser?: UserUpdateOneWithoutDeletedRolesNestedInput
    updatedByUser?: UserUpdateOneWithoutUpdatedRolesNestedInput
    users?: UserUpdateManyWithoutRoleNestedInput
  }

  export type RoleUncheckedUpdateWithoutCreatedByUserInput = {
    roleId?: IntFieldUpdateOperationsInput | number
    roleType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    users?: UserUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type RoleUncheckedUpdateManyWithoutCreatedByUserInput = {
    roleId?: IntFieldUpdateOperationsInput | number
    roleType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type RoleUpdateWithoutDeletedByUserInput = {
    roleType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdByUser?: UserUpdateOneWithoutCreatedRolesNestedInput
    updatedByUser?: UserUpdateOneWithoutUpdatedRolesNestedInput
    users?: UserUpdateManyWithoutRoleNestedInput
  }

  export type RoleUncheckedUpdateWithoutDeletedByUserInput = {
    roleId?: IntFieldUpdateOperationsInput | number
    roleType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    users?: UserUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type RoleUncheckedUpdateManyWithoutDeletedByUserInput = {
    roleId?: IntFieldUpdateOperationsInput | number
    roleType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type RoleUpdateWithoutUpdatedByUserInput = {
    roleType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdByUser?: UserUpdateOneWithoutCreatedRolesNestedInput
    deletedByUser?: UserUpdateOneWithoutDeletedRolesNestedInput
    users?: UserUpdateManyWithoutRoleNestedInput
  }

  export type RoleUncheckedUpdateWithoutUpdatedByUserInput = {
    roleId?: IntFieldUpdateOperationsInput | number
    roleType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    users?: UserUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type RoleUncheckedUpdateManyWithoutUpdatedByUserInput = {
    roleId?: IntFieldUpdateOperationsInput | number
    roleType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ProductUpdateWithoutCreatedByUserInput = {
    imageUrl?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    expiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    productionDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    costPrice?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedByUser?: UserUpdateOneWithoutDeletedProductsNestedInput
    updatedByUser?: UserUpdateOneWithoutUpdatedProductsNestedInput
    user?: UserUpdateOneRequiredWithoutOwnedProductsNestedInput
    productPurchase?: ProductPurchaseUpdateManyWithoutProductNestedInput
    productSale?: ProductSaleUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutCreatedByUserInput = {
    productId?: IntFieldUpdateOperationsInput | number
    imageUrl?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    expiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    productionDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    costPrice?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    userId?: IntFieldUpdateOperationsInput | number
    productPurchase?: ProductPurchaseUncheckedUpdateManyWithoutProductNestedInput
    productSale?: ProductSaleUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateManyWithoutCreatedByUserInput = {
    productId?: IntFieldUpdateOperationsInput | number
    imageUrl?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    expiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    productionDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    costPrice?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type ProductUpdateWithoutDeletedByUserInput = {
    imageUrl?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    expiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    productionDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    costPrice?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdByUser?: UserUpdateOneWithoutCreatedProductsNestedInput
    updatedByUser?: UserUpdateOneWithoutUpdatedProductsNestedInput
    user?: UserUpdateOneRequiredWithoutOwnedProductsNestedInput
    productPurchase?: ProductPurchaseUpdateManyWithoutProductNestedInput
    productSale?: ProductSaleUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutDeletedByUserInput = {
    productId?: IntFieldUpdateOperationsInput | number
    imageUrl?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    expiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    productionDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    costPrice?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    userId?: IntFieldUpdateOperationsInput | number
    productPurchase?: ProductPurchaseUncheckedUpdateManyWithoutProductNestedInput
    productSale?: ProductSaleUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateManyWithoutDeletedByUserInput = {
    productId?: IntFieldUpdateOperationsInput | number
    imageUrl?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    expiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    productionDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    costPrice?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type ProductUpdateWithoutUpdatedByUserInput = {
    imageUrl?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    expiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    productionDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    costPrice?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdByUser?: UserUpdateOneWithoutCreatedProductsNestedInput
    deletedByUser?: UserUpdateOneWithoutDeletedProductsNestedInput
    user?: UserUpdateOneRequiredWithoutOwnedProductsNestedInput
    productPurchase?: ProductPurchaseUpdateManyWithoutProductNestedInput
    productSale?: ProductSaleUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutUpdatedByUserInput = {
    productId?: IntFieldUpdateOperationsInput | number
    imageUrl?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    expiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    productionDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    costPrice?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    userId?: IntFieldUpdateOperationsInput | number
    productPurchase?: ProductPurchaseUncheckedUpdateManyWithoutProductNestedInput
    productSale?: ProductSaleUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateManyWithoutUpdatedByUserInput = {
    productId?: IntFieldUpdateOperationsInput | number
    imageUrl?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    expiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    productionDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    costPrice?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type SaleUpdateWithoutCreatedByUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedByUser?: UserUpdateOneWithoutDeletedSalesNestedInput
    updatedByUser?: UserUpdateOneWithoutUpdatedSalesNestedInput
    productSale?: ProductSaleUpdateManyWithoutSaleNestedInput
  }

  export type SaleUncheckedUpdateWithoutCreatedByUserInput = {
    saleId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    productSale?: ProductSaleUncheckedUpdateManyWithoutSaleNestedInput
  }

  export type SaleUncheckedUpdateManyWithoutCreatedByUserInput = {
    saleId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type SaleUpdateWithoutDeletedByUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdByUser?: UserUpdateOneWithoutCreatedSalesNestedInput
    updatedByUser?: UserUpdateOneWithoutUpdatedSalesNestedInput
    productSale?: ProductSaleUpdateManyWithoutSaleNestedInput
  }

  export type SaleUncheckedUpdateWithoutDeletedByUserInput = {
    saleId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    productSale?: ProductSaleUncheckedUpdateManyWithoutSaleNestedInput
  }

  export type SaleUncheckedUpdateManyWithoutDeletedByUserInput = {
    saleId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type SaleUpdateWithoutUpdatedByUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdByUser?: UserUpdateOneWithoutCreatedSalesNestedInput
    deletedByUser?: UserUpdateOneWithoutDeletedSalesNestedInput
    productSale?: ProductSaleUpdateManyWithoutSaleNestedInput
  }

  export type SaleUncheckedUpdateWithoutUpdatedByUserInput = {
    saleId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    productSale?: ProductSaleUncheckedUpdateManyWithoutSaleNestedInput
  }

  export type SaleUncheckedUpdateManyWithoutUpdatedByUserInput = {
    saleId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PurchaseUpdateWithoutCreatedByUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    productId?: IntFieldUpdateOperationsInput | number
    deletedByUser?: UserUpdateOneWithoutDeletedPurchasesNestedInput
    updatedByUser?: UserUpdateOneWithoutUpdatedPurchasesNestedInput
    productPurchase?: ProductPurchaseUpdateManyWithoutPurchaseNestedInput
  }

  export type PurchaseUncheckedUpdateWithoutCreatedByUserInput = {
    purchaseId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    productId?: IntFieldUpdateOperationsInput | number
    productPurchase?: ProductPurchaseUncheckedUpdateManyWithoutPurchaseNestedInput
  }

  export type PurchaseUncheckedUpdateManyWithoutCreatedByUserInput = {
    purchaseId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    productId?: IntFieldUpdateOperationsInput | number
  }

  export type PurchaseUpdateWithoutDeletedByUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    productId?: IntFieldUpdateOperationsInput | number
    createdByUser?: UserUpdateOneWithoutCreatedPurchasesNestedInput
    updatedByUser?: UserUpdateOneWithoutUpdatedPurchasesNestedInput
    productPurchase?: ProductPurchaseUpdateManyWithoutPurchaseNestedInput
  }

  export type PurchaseUncheckedUpdateWithoutDeletedByUserInput = {
    purchaseId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    productId?: IntFieldUpdateOperationsInput | number
    productPurchase?: ProductPurchaseUncheckedUpdateManyWithoutPurchaseNestedInput
  }

  export type PurchaseUncheckedUpdateManyWithoutDeletedByUserInput = {
    purchaseId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    productId?: IntFieldUpdateOperationsInput | number
  }

  export type PurchaseUpdateWithoutUpdatedByUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    productId?: IntFieldUpdateOperationsInput | number
    createdByUser?: UserUpdateOneWithoutCreatedPurchasesNestedInput
    deletedByUser?: UserUpdateOneWithoutDeletedPurchasesNestedInput
    productPurchase?: ProductPurchaseUpdateManyWithoutPurchaseNestedInput
  }

  export type PurchaseUncheckedUpdateWithoutUpdatedByUserInput = {
    purchaseId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    productId?: IntFieldUpdateOperationsInput | number
    productPurchase?: ProductPurchaseUncheckedUpdateManyWithoutPurchaseNestedInput
  }

  export type PurchaseUncheckedUpdateManyWithoutUpdatedByUserInput = {
    purchaseId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    productId?: IntFieldUpdateOperationsInput | number
  }

  export type ProductPurchaseUpdateWithoutCreatedByUserInput = {
    purchasePrice?: FloatFieldUpdateOperationsInput | number
    purchaseQuantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedByUser?: UserUpdateOneWithoutDeletedProductPurchasesNestedInput
    updatedByUser?: UserUpdateOneWithoutUpdatedProductPurchasesNestedInput
    product?: ProductUpdateOneRequiredWithoutProductPurchaseNestedInput
    purchase?: PurchaseUpdateOneRequiredWithoutProductPurchaseNestedInput
  }

  export type ProductPurchaseUncheckedUpdateWithoutCreatedByUserInput = {
    productPurchaseId?: IntFieldUpdateOperationsInput | number
    purchasePrice?: FloatFieldUpdateOperationsInput | number
    purchaseQuantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    productId?: IntFieldUpdateOperationsInput | number
    purchaseId?: IntFieldUpdateOperationsInput | number
  }

  export type ProductPurchaseUncheckedUpdateManyWithoutCreatedByUserInput = {
    productPurchaseId?: IntFieldUpdateOperationsInput | number
    purchasePrice?: FloatFieldUpdateOperationsInput | number
    purchaseQuantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    productId?: IntFieldUpdateOperationsInput | number
    purchaseId?: IntFieldUpdateOperationsInput | number
  }

  export type ProductPurchaseUpdateWithoutDeletedByUserInput = {
    purchasePrice?: FloatFieldUpdateOperationsInput | number
    purchaseQuantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdByUser?: UserUpdateOneWithoutCreatedProductPurchasesNestedInput
    updatedByUser?: UserUpdateOneWithoutUpdatedProductPurchasesNestedInput
    product?: ProductUpdateOneRequiredWithoutProductPurchaseNestedInput
    purchase?: PurchaseUpdateOneRequiredWithoutProductPurchaseNestedInput
  }

  export type ProductPurchaseUncheckedUpdateWithoutDeletedByUserInput = {
    productPurchaseId?: IntFieldUpdateOperationsInput | number
    purchasePrice?: FloatFieldUpdateOperationsInput | number
    purchaseQuantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    productId?: IntFieldUpdateOperationsInput | number
    purchaseId?: IntFieldUpdateOperationsInput | number
  }

  export type ProductPurchaseUncheckedUpdateManyWithoutDeletedByUserInput = {
    productPurchaseId?: IntFieldUpdateOperationsInput | number
    purchasePrice?: FloatFieldUpdateOperationsInput | number
    purchaseQuantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    productId?: IntFieldUpdateOperationsInput | number
    purchaseId?: IntFieldUpdateOperationsInput | number
  }

  export type ProductPurchaseUpdateWithoutUpdatedByUserInput = {
    purchasePrice?: FloatFieldUpdateOperationsInput | number
    purchaseQuantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdByUser?: UserUpdateOneWithoutCreatedProductPurchasesNestedInput
    deletedByUser?: UserUpdateOneWithoutDeletedProductPurchasesNestedInput
    product?: ProductUpdateOneRequiredWithoutProductPurchaseNestedInput
    purchase?: PurchaseUpdateOneRequiredWithoutProductPurchaseNestedInput
  }

  export type ProductPurchaseUncheckedUpdateWithoutUpdatedByUserInput = {
    productPurchaseId?: IntFieldUpdateOperationsInput | number
    purchasePrice?: FloatFieldUpdateOperationsInput | number
    purchaseQuantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    productId?: IntFieldUpdateOperationsInput | number
    purchaseId?: IntFieldUpdateOperationsInput | number
  }

  export type ProductPurchaseUncheckedUpdateManyWithoutUpdatedByUserInput = {
    productPurchaseId?: IntFieldUpdateOperationsInput | number
    purchasePrice?: FloatFieldUpdateOperationsInput | number
    purchaseQuantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    productId?: IntFieldUpdateOperationsInput | number
    purchaseId?: IntFieldUpdateOperationsInput | number
  }

  export type ProductSaleUpdateWithoutCreatedByUserInput = {
    salePrice?: FloatFieldUpdateOperationsInput | number
    saleQuantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedByUser?: UserUpdateOneWithoutDeletedProductSalesNestedInput
    updatedByUser?: UserUpdateOneWithoutUpdatedProductSalesNestedInput
    product?: ProductUpdateOneRequiredWithoutProductSaleNestedInput
    sale?: SaleUpdateOneRequiredWithoutProductSaleNestedInput
  }

  export type ProductSaleUncheckedUpdateWithoutCreatedByUserInput = {
    productSaleId?: IntFieldUpdateOperationsInput | number
    salePrice?: FloatFieldUpdateOperationsInput | number
    saleQuantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    productId?: IntFieldUpdateOperationsInput | number
    saleId?: IntFieldUpdateOperationsInput | number
  }

  export type ProductSaleUncheckedUpdateManyWithoutCreatedByUserInput = {
    productSaleId?: IntFieldUpdateOperationsInput | number
    salePrice?: FloatFieldUpdateOperationsInput | number
    saleQuantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    productId?: IntFieldUpdateOperationsInput | number
    saleId?: IntFieldUpdateOperationsInput | number
  }

  export type ProductSaleUpdateWithoutDeletedByUserInput = {
    salePrice?: FloatFieldUpdateOperationsInput | number
    saleQuantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdByUser?: UserUpdateOneWithoutCreatedProductSalesNestedInput
    updatedByUser?: UserUpdateOneWithoutUpdatedProductSalesNestedInput
    product?: ProductUpdateOneRequiredWithoutProductSaleNestedInput
    sale?: SaleUpdateOneRequiredWithoutProductSaleNestedInput
  }

  export type ProductSaleUncheckedUpdateWithoutDeletedByUserInput = {
    productSaleId?: IntFieldUpdateOperationsInput | number
    salePrice?: FloatFieldUpdateOperationsInput | number
    saleQuantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    productId?: IntFieldUpdateOperationsInput | number
    saleId?: IntFieldUpdateOperationsInput | number
  }

  export type ProductSaleUncheckedUpdateManyWithoutDeletedByUserInput = {
    productSaleId?: IntFieldUpdateOperationsInput | number
    salePrice?: FloatFieldUpdateOperationsInput | number
    saleQuantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    productId?: IntFieldUpdateOperationsInput | number
    saleId?: IntFieldUpdateOperationsInput | number
  }

  export type ProductSaleUpdateWithoutUpdatedByUserInput = {
    salePrice?: FloatFieldUpdateOperationsInput | number
    saleQuantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdByUser?: UserUpdateOneWithoutCreatedProductSalesNestedInput
    deletedByUser?: UserUpdateOneWithoutDeletedProductSalesNestedInput
    product?: ProductUpdateOneRequiredWithoutProductSaleNestedInput
    sale?: SaleUpdateOneRequiredWithoutProductSaleNestedInput
  }

  export type ProductSaleUncheckedUpdateWithoutUpdatedByUserInput = {
    productSaleId?: IntFieldUpdateOperationsInput | number
    salePrice?: FloatFieldUpdateOperationsInput | number
    saleQuantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    productId?: IntFieldUpdateOperationsInput | number
    saleId?: IntFieldUpdateOperationsInput | number
  }

  export type ProductSaleUncheckedUpdateManyWithoutUpdatedByUserInput = {
    productSaleId?: IntFieldUpdateOperationsInput | number
    salePrice?: FloatFieldUpdateOperationsInput | number
    saleQuantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    productId?: IntFieldUpdateOperationsInput | number
    saleId?: IntFieldUpdateOperationsInput | number
  }

  export type ProductUpdateWithoutUserInput = {
    imageUrl?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    expiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    productionDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    costPrice?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdByUser?: UserUpdateOneWithoutCreatedProductsNestedInput
    deletedByUser?: UserUpdateOneWithoutDeletedProductsNestedInput
    updatedByUser?: UserUpdateOneWithoutUpdatedProductsNestedInput
    productPurchase?: ProductPurchaseUpdateManyWithoutProductNestedInput
    productSale?: ProductSaleUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutUserInput = {
    productId?: IntFieldUpdateOperationsInput | number
    imageUrl?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    expiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    productionDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    costPrice?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    productPurchase?: ProductPurchaseUncheckedUpdateManyWithoutProductNestedInput
    productSale?: ProductSaleUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateManyWithoutUserInput = {
    productId?: IntFieldUpdateOperationsInput | number
    imageUrl?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    expiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    productionDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    costPrice?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserCreateManyRoleInput = {
    userId?: number
    name: string
    email: string
    password: string
    createdAt?: Date | string
    deletedAt?: Date | string | null
    createdBy?: number | null
    deletedBy?: number | null
    isDeleted?: boolean
  }

  export type UserUpdateWithoutRoleInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdRoles?: RoleUpdateManyWithoutCreatedByUserNestedInput
    deletedRoles?: RoleUpdateManyWithoutDeletedByUserNestedInput
    updatedRoles?: RoleUpdateManyWithoutUpdatedByUserNestedInput
    createdProducts?: ProductUpdateManyWithoutCreatedByUserNestedInput
    deletedProducts?: ProductUpdateManyWithoutDeletedByUserNestedInput
    updatedProducts?: ProductUpdateManyWithoutUpdatedByUserNestedInput
    createdSales?: SaleUpdateManyWithoutCreatedByUserNestedInput
    deletedSales?: SaleUpdateManyWithoutDeletedByUserNestedInput
    updatedSales?: SaleUpdateManyWithoutUpdatedByUserNestedInput
    createdPurchases?: PurchaseUpdateManyWithoutCreatedByUserNestedInput
    deletedPurchases?: PurchaseUpdateManyWithoutDeletedByUserNestedInput
    updatedPurchases?: PurchaseUpdateManyWithoutUpdatedByUserNestedInput
    createdProductPurchases?: ProductPurchaseUpdateManyWithoutCreatedByUserNestedInput
    deletedProductPurchases?: ProductPurchaseUpdateManyWithoutDeletedByUserNestedInput
    updatedProductPurchases?: ProductPurchaseUpdateManyWithoutUpdatedByUserNestedInput
    createdProductSales?: ProductSaleUpdateManyWithoutCreatedByUserNestedInput
    deletedProductSales?: ProductSaleUpdateManyWithoutDeletedByUserNestedInput
    updatedProductSales?: ProductSaleUpdateManyWithoutUpdatedByUserNestedInput
    ownedProducts?: ProductUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRoleInput = {
    userId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdRoles?: RoleUncheckedUpdateManyWithoutCreatedByUserNestedInput
    deletedRoles?: RoleUncheckedUpdateManyWithoutDeletedByUserNestedInput
    updatedRoles?: RoleUncheckedUpdateManyWithoutUpdatedByUserNestedInput
    createdProducts?: ProductUncheckedUpdateManyWithoutCreatedByUserNestedInput
    deletedProducts?: ProductUncheckedUpdateManyWithoutDeletedByUserNestedInput
    updatedProducts?: ProductUncheckedUpdateManyWithoutUpdatedByUserNestedInput
    createdSales?: SaleUncheckedUpdateManyWithoutCreatedByUserNestedInput
    deletedSales?: SaleUncheckedUpdateManyWithoutDeletedByUserNestedInput
    updatedSales?: SaleUncheckedUpdateManyWithoutUpdatedByUserNestedInput
    createdPurchases?: PurchaseUncheckedUpdateManyWithoutCreatedByUserNestedInput
    deletedPurchases?: PurchaseUncheckedUpdateManyWithoutDeletedByUserNestedInput
    updatedPurchases?: PurchaseUncheckedUpdateManyWithoutUpdatedByUserNestedInput
    createdProductPurchases?: ProductPurchaseUncheckedUpdateManyWithoutCreatedByUserNestedInput
    deletedProductPurchases?: ProductPurchaseUncheckedUpdateManyWithoutDeletedByUserNestedInput
    updatedProductPurchases?: ProductPurchaseUncheckedUpdateManyWithoutUpdatedByUserNestedInput
    createdProductSales?: ProductSaleUncheckedUpdateManyWithoutCreatedByUserNestedInput
    deletedProductSales?: ProductSaleUncheckedUpdateManyWithoutDeletedByUserNestedInput
    updatedProductSales?: ProductSaleUncheckedUpdateManyWithoutUpdatedByUserNestedInput
    ownedProducts?: ProductUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutRoleInput = {
    userId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ProductPurchaseCreateManyProductInput = {
    productPurchaseId?: number
    purchasePrice: number
    purchaseQuantity: number
    createdAt?: Date | string
    deletedAt?: Date | string | null
    createdBy?: number | null
    deletedBy?: number | null
    updatedBy?: number | null
    updatedAt?: Date | string | null
    isDeleted?: boolean
    purchaseId: number
  }

  export type ProductSaleCreateManyProductInput = {
    productSaleId?: number
    salePrice: number
    saleQuantity: number
    createdAt?: Date | string
    deletedAt?: Date | string | null
    createdBy?: number | null
    deletedBy?: number | null
    updatedBy?: number | null
    updatedAt?: Date | string | null
    isDeleted?: boolean
    saleId: number
  }

  export type ProductPurchaseUpdateWithoutProductInput = {
    purchasePrice?: FloatFieldUpdateOperationsInput | number
    purchaseQuantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdByUser?: UserUpdateOneWithoutCreatedProductPurchasesNestedInput
    deletedByUser?: UserUpdateOneWithoutDeletedProductPurchasesNestedInput
    updatedByUser?: UserUpdateOneWithoutUpdatedProductPurchasesNestedInput
    purchase?: PurchaseUpdateOneRequiredWithoutProductPurchaseNestedInput
  }

  export type ProductPurchaseUncheckedUpdateWithoutProductInput = {
    productPurchaseId?: IntFieldUpdateOperationsInput | number
    purchasePrice?: FloatFieldUpdateOperationsInput | number
    purchaseQuantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    purchaseId?: IntFieldUpdateOperationsInput | number
  }

  export type ProductPurchaseUncheckedUpdateManyWithoutProductInput = {
    productPurchaseId?: IntFieldUpdateOperationsInput | number
    purchasePrice?: FloatFieldUpdateOperationsInput | number
    purchaseQuantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    purchaseId?: IntFieldUpdateOperationsInput | number
  }

  export type ProductSaleUpdateWithoutProductInput = {
    salePrice?: FloatFieldUpdateOperationsInput | number
    saleQuantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdByUser?: UserUpdateOneWithoutCreatedProductSalesNestedInput
    deletedByUser?: UserUpdateOneWithoutDeletedProductSalesNestedInput
    updatedByUser?: UserUpdateOneWithoutUpdatedProductSalesNestedInput
    sale?: SaleUpdateOneRequiredWithoutProductSaleNestedInput
  }

  export type ProductSaleUncheckedUpdateWithoutProductInput = {
    productSaleId?: IntFieldUpdateOperationsInput | number
    salePrice?: FloatFieldUpdateOperationsInput | number
    saleQuantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    saleId?: IntFieldUpdateOperationsInput | number
  }

  export type ProductSaleUncheckedUpdateManyWithoutProductInput = {
    productSaleId?: IntFieldUpdateOperationsInput | number
    salePrice?: FloatFieldUpdateOperationsInput | number
    saleQuantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    saleId?: IntFieldUpdateOperationsInput | number
  }

  export type ProductSaleCreateManySaleInput = {
    productSaleId?: number
    salePrice: number
    saleQuantity: number
    createdAt?: Date | string
    deletedAt?: Date | string | null
    createdBy?: number | null
    deletedBy?: number | null
    updatedBy?: number | null
    updatedAt?: Date | string | null
    isDeleted?: boolean
    productId: number
  }

  export type ProductSaleUpdateWithoutSaleInput = {
    salePrice?: FloatFieldUpdateOperationsInput | number
    saleQuantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdByUser?: UserUpdateOneWithoutCreatedProductSalesNestedInput
    deletedByUser?: UserUpdateOneWithoutDeletedProductSalesNestedInput
    updatedByUser?: UserUpdateOneWithoutUpdatedProductSalesNestedInput
    product?: ProductUpdateOneRequiredWithoutProductSaleNestedInput
  }

  export type ProductSaleUncheckedUpdateWithoutSaleInput = {
    productSaleId?: IntFieldUpdateOperationsInput | number
    salePrice?: FloatFieldUpdateOperationsInput | number
    saleQuantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    productId?: IntFieldUpdateOperationsInput | number
  }

  export type ProductSaleUncheckedUpdateManyWithoutSaleInput = {
    productSaleId?: IntFieldUpdateOperationsInput | number
    salePrice?: FloatFieldUpdateOperationsInput | number
    saleQuantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    productId?: IntFieldUpdateOperationsInput | number
  }

  export type ProductPurchaseCreateManyPurchaseInput = {
    productPurchaseId?: number
    purchasePrice: number
    purchaseQuantity: number
    createdAt?: Date | string
    deletedAt?: Date | string | null
    createdBy?: number | null
    deletedBy?: number | null
    updatedBy?: number | null
    updatedAt?: Date | string | null
    isDeleted?: boolean
    productId: number
  }

  export type ProductPurchaseUpdateWithoutPurchaseInput = {
    purchasePrice?: FloatFieldUpdateOperationsInput | number
    purchaseQuantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdByUser?: UserUpdateOneWithoutCreatedProductPurchasesNestedInput
    deletedByUser?: UserUpdateOneWithoutDeletedProductPurchasesNestedInput
    updatedByUser?: UserUpdateOneWithoutUpdatedProductPurchasesNestedInput
    product?: ProductUpdateOneRequiredWithoutProductPurchaseNestedInput
  }

  export type ProductPurchaseUncheckedUpdateWithoutPurchaseInput = {
    productPurchaseId?: IntFieldUpdateOperationsInput | number
    purchasePrice?: FloatFieldUpdateOperationsInput | number
    purchaseQuantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    productId?: IntFieldUpdateOperationsInput | number
  }

  export type ProductPurchaseUncheckedUpdateManyWithoutPurchaseInput = {
    productPurchaseId?: IntFieldUpdateOperationsInput | number
    purchasePrice?: FloatFieldUpdateOperationsInput | number
    purchaseQuantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    productId?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}