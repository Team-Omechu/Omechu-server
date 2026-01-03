
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
 * Model user
 * 
 */
export type user = $Result.DefaultSelection<Prisma.$userPayload>
/**
 * Model agreement_consent
 * 
 */
export type agreement_consent = $Result.DefaultSelection<Prisma.$agreement_consentPayload>
/**
 * Model allergy_min
 * 
 */
export type allergy_min = $Result.DefaultSelection<Prisma.$allergy_minPayload>
/**
 * Model inquiry
 * 
 */
export type inquiry = $Result.DefaultSelection<Prisma.$inquiryPayload>
/**
 * Model meal_alert
 * 
 */
export type meal_alert = $Result.DefaultSelection<Prisma.$meal_alertPayload>
/**
 * Model meal_time
 * 
 */
export type meal_time = $Result.DefaultSelection<Prisma.$meal_timePayload>
/**
 * Model user_allergy
 * 
 */
export type user_allergy = $Result.DefaultSelection<Prisma.$user_allergyPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const user_exercise: {
  dieting: 'dieting',
  bulking: 'bulking',
  maintaining: 'maintaining'
};

export type user_exercise = (typeof user_exercise)[keyof typeof user_exercise]

}

export type user_exercise = $Enums.user_exercise

export const user_exercise: typeof $Enums.user_exercise

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
   * `prisma.user`: Exposes CRUD operations for the **user** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.userDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.agreement_consent`: Exposes CRUD operations for the **agreement_consent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Agreement_consents
    * const agreement_consents = await prisma.agreement_consent.findMany()
    * ```
    */
  get agreement_consent(): Prisma.agreement_consentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.allergy_min`: Exposes CRUD operations for the **allergy_min** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Allergy_mins
    * const allergy_mins = await prisma.allergy_min.findMany()
    * ```
    */
  get allergy_min(): Prisma.allergy_minDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.inquiry`: Exposes CRUD operations for the **inquiry** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Inquiries
    * const inquiries = await prisma.inquiry.findMany()
    * ```
    */
  get inquiry(): Prisma.inquiryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.meal_alert`: Exposes CRUD operations for the **meal_alert** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Meal_alerts
    * const meal_alerts = await prisma.meal_alert.findMany()
    * ```
    */
  get meal_alert(): Prisma.meal_alertDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.meal_time`: Exposes CRUD operations for the **meal_time** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Meal_times
    * const meal_times = await prisma.meal_time.findMany()
    * ```
    */
  get meal_time(): Prisma.meal_timeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user_allergy`: Exposes CRUD operations for the **user_allergy** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more User_allergies
    * const user_allergies = await prisma.user_allergy.findMany()
    * ```
    */
  get user_allergy(): Prisma.user_allergyDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.12.0
   * Query Engine version: 8047c96bbd92db98a2abc7c9323ce77c02c89dbc
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
    user: 'user',
    agreement_consent: 'agreement_consent',
    allergy_min: 'allergy_min',
    inquiry: 'inquiry',
    meal_alert: 'meal_alert',
    meal_time: 'meal_time',
    user_allergy: 'user_allergy'
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
      modelProps: "user" | "agreement_consent" | "allergy_min" | "inquiry" | "meal_alert" | "meal_time" | "user_allergy"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      user: {
        payload: Prisma.$userPayload<ExtArgs>
        fields: Prisma.userFieldRefs
        operations: {
          findUnique: {
            args: Prisma.userFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.userFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findFirst: {
            args: Prisma.userFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.userFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findMany: {
            args: Prisma.userFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          create: {
            args: Prisma.userCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          createMany: {
            args: Prisma.userCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.userDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          update: {
            args: Prisma.userUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          deleteMany: {
            args: Prisma.userDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.userUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.userUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.userGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.userCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      agreement_consent: {
        payload: Prisma.$agreement_consentPayload<ExtArgs>
        fields: Prisma.agreement_consentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.agreement_consentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$agreement_consentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.agreement_consentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$agreement_consentPayload>
          }
          findFirst: {
            args: Prisma.agreement_consentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$agreement_consentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.agreement_consentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$agreement_consentPayload>
          }
          findMany: {
            args: Prisma.agreement_consentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$agreement_consentPayload>[]
          }
          create: {
            args: Prisma.agreement_consentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$agreement_consentPayload>
          }
          createMany: {
            args: Prisma.agreement_consentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.agreement_consentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$agreement_consentPayload>
          }
          update: {
            args: Prisma.agreement_consentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$agreement_consentPayload>
          }
          deleteMany: {
            args: Prisma.agreement_consentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.agreement_consentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.agreement_consentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$agreement_consentPayload>
          }
          aggregate: {
            args: Prisma.Agreement_consentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAgreement_consent>
          }
          groupBy: {
            args: Prisma.agreement_consentGroupByArgs<ExtArgs>
            result: $Utils.Optional<Agreement_consentGroupByOutputType>[]
          }
          count: {
            args: Prisma.agreement_consentCountArgs<ExtArgs>
            result: $Utils.Optional<Agreement_consentCountAggregateOutputType> | number
          }
        }
      }
      allergy_min: {
        payload: Prisma.$allergy_minPayload<ExtArgs>
        fields: Prisma.allergy_minFieldRefs
        operations: {
          findUnique: {
            args: Prisma.allergy_minFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$allergy_minPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.allergy_minFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$allergy_minPayload>
          }
          findFirst: {
            args: Prisma.allergy_minFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$allergy_minPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.allergy_minFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$allergy_minPayload>
          }
          findMany: {
            args: Prisma.allergy_minFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$allergy_minPayload>[]
          }
          create: {
            args: Prisma.allergy_minCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$allergy_minPayload>
          }
          createMany: {
            args: Prisma.allergy_minCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.allergy_minDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$allergy_minPayload>
          }
          update: {
            args: Prisma.allergy_minUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$allergy_minPayload>
          }
          deleteMany: {
            args: Prisma.allergy_minDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.allergy_minUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.allergy_minUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$allergy_minPayload>
          }
          aggregate: {
            args: Prisma.Allergy_minAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAllergy_min>
          }
          groupBy: {
            args: Prisma.allergy_minGroupByArgs<ExtArgs>
            result: $Utils.Optional<Allergy_minGroupByOutputType>[]
          }
          count: {
            args: Prisma.allergy_minCountArgs<ExtArgs>
            result: $Utils.Optional<Allergy_minCountAggregateOutputType> | number
          }
        }
      }
      inquiry: {
        payload: Prisma.$inquiryPayload<ExtArgs>
        fields: Prisma.inquiryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.inquiryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inquiryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.inquiryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inquiryPayload>
          }
          findFirst: {
            args: Prisma.inquiryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inquiryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.inquiryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inquiryPayload>
          }
          findMany: {
            args: Prisma.inquiryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inquiryPayload>[]
          }
          create: {
            args: Prisma.inquiryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inquiryPayload>
          }
          createMany: {
            args: Prisma.inquiryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.inquiryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inquiryPayload>
          }
          update: {
            args: Prisma.inquiryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inquiryPayload>
          }
          deleteMany: {
            args: Prisma.inquiryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.inquiryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.inquiryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inquiryPayload>
          }
          aggregate: {
            args: Prisma.InquiryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInquiry>
          }
          groupBy: {
            args: Prisma.inquiryGroupByArgs<ExtArgs>
            result: $Utils.Optional<InquiryGroupByOutputType>[]
          }
          count: {
            args: Prisma.inquiryCountArgs<ExtArgs>
            result: $Utils.Optional<InquiryCountAggregateOutputType> | number
          }
        }
      }
      meal_alert: {
        payload: Prisma.$meal_alertPayload<ExtArgs>
        fields: Prisma.meal_alertFieldRefs
        operations: {
          findUnique: {
            args: Prisma.meal_alertFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$meal_alertPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.meal_alertFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$meal_alertPayload>
          }
          findFirst: {
            args: Prisma.meal_alertFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$meal_alertPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.meal_alertFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$meal_alertPayload>
          }
          findMany: {
            args: Prisma.meal_alertFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$meal_alertPayload>[]
          }
          create: {
            args: Prisma.meal_alertCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$meal_alertPayload>
          }
          createMany: {
            args: Prisma.meal_alertCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.meal_alertDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$meal_alertPayload>
          }
          update: {
            args: Prisma.meal_alertUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$meal_alertPayload>
          }
          deleteMany: {
            args: Prisma.meal_alertDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.meal_alertUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.meal_alertUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$meal_alertPayload>
          }
          aggregate: {
            args: Prisma.Meal_alertAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMeal_alert>
          }
          groupBy: {
            args: Prisma.meal_alertGroupByArgs<ExtArgs>
            result: $Utils.Optional<Meal_alertGroupByOutputType>[]
          }
          count: {
            args: Prisma.meal_alertCountArgs<ExtArgs>
            result: $Utils.Optional<Meal_alertCountAggregateOutputType> | number
          }
        }
      }
      meal_time: {
        payload: Prisma.$meal_timePayload<ExtArgs>
        fields: Prisma.meal_timeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.meal_timeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$meal_timePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.meal_timeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$meal_timePayload>
          }
          findFirst: {
            args: Prisma.meal_timeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$meal_timePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.meal_timeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$meal_timePayload>
          }
          findMany: {
            args: Prisma.meal_timeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$meal_timePayload>[]
          }
          create: {
            args: Prisma.meal_timeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$meal_timePayload>
          }
          createMany: {
            args: Prisma.meal_timeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.meal_timeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$meal_timePayload>
          }
          update: {
            args: Prisma.meal_timeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$meal_timePayload>
          }
          deleteMany: {
            args: Prisma.meal_timeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.meal_timeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.meal_timeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$meal_timePayload>
          }
          aggregate: {
            args: Prisma.Meal_timeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMeal_time>
          }
          groupBy: {
            args: Prisma.meal_timeGroupByArgs<ExtArgs>
            result: $Utils.Optional<Meal_timeGroupByOutputType>[]
          }
          count: {
            args: Prisma.meal_timeCountArgs<ExtArgs>
            result: $Utils.Optional<Meal_timeCountAggregateOutputType> | number
          }
        }
      }
      user_allergy: {
        payload: Prisma.$user_allergyPayload<ExtArgs>
        fields: Prisma.user_allergyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.user_allergyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_allergyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.user_allergyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_allergyPayload>
          }
          findFirst: {
            args: Prisma.user_allergyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_allergyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.user_allergyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_allergyPayload>
          }
          findMany: {
            args: Prisma.user_allergyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_allergyPayload>[]
          }
          create: {
            args: Prisma.user_allergyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_allergyPayload>
          }
          createMany: {
            args: Prisma.user_allergyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.user_allergyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_allergyPayload>
          }
          update: {
            args: Prisma.user_allergyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_allergyPayload>
          }
          deleteMany: {
            args: Prisma.user_allergyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.user_allergyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.user_allergyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_allergyPayload>
          }
          aggregate: {
            args: Prisma.User_allergyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser_allergy>
          }
          groupBy: {
            args: Prisma.user_allergyGroupByArgs<ExtArgs>
            result: $Utils.Optional<User_allergyGroupByOutputType>[]
          }
          count: {
            args: Prisma.user_allergyCountArgs<ExtArgs>
            result: $Utils.Optional<User_allergyCountAggregateOutputType> | number
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
    user?: userOmit
    agreement_consent?: agreement_consentOmit
    allergy_min?: allergy_minOmit
    inquiry?: inquiryOmit
    meal_alert?: meal_alertOmit
    meal_time?: meal_timeOmit
    user_allergy?: user_allergyOmit
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
    agreement_consent: number
    inquiry: number
    meal_alert: number
    user_allergy: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    agreement_consent?: boolean | UserCountOutputTypeCountAgreement_consentArgs
    inquiry?: boolean | UserCountOutputTypeCountInquiryArgs
    meal_alert?: boolean | UserCountOutputTypeCountMeal_alertArgs
    user_allergy?: boolean | UserCountOutputTypeCountUser_allergyArgs
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
  export type UserCountOutputTypeCountAgreement_consentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: agreement_consentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountInquiryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: inquiryWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMeal_alertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: meal_alertWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUser_allergyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_allergyWhereInput
  }


  /**
   * Count Type Allergy_minCountOutputType
   */

  export type Allergy_minCountOutputType = {
    user_allergy: number
  }

  export type Allergy_minCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user_allergy?: boolean | Allergy_minCountOutputTypeCountUser_allergyArgs
  }

  // Custom InputTypes
  /**
   * Allergy_minCountOutputType without action
   */
  export type Allergy_minCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Allergy_minCountOutputType
     */
    select?: Allergy_minCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Allergy_minCountOutputType without action
   */
  export type Allergy_minCountOutputTypeCountUser_allergyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_allergyWhereInput
  }


  /**
   * Count Type Meal_timeCountOutputType
   */

  export type Meal_timeCountOutputType = {
    meal_alert: number
  }

  export type Meal_timeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meal_alert?: boolean | Meal_timeCountOutputTypeCountMeal_alertArgs
  }

  // Custom InputTypes
  /**
   * Meal_timeCountOutputType without action
   */
  export type Meal_timeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meal_timeCountOutputType
     */
    select?: Meal_timeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Meal_timeCountOutputType without action
   */
  export type Meal_timeCountOutputTypeCountMeal_alertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: meal_alertWhereInput
  }


  /**
   * Models
   */

  /**
   * Model user
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: bigint | null
  }

  export type UserMinAggregateOutputType = {
    id: bigint | null
    phone_num: string | null
    nickname: string | null
    exercise: $Enums.user_exercise | null
  }

  export type UserMaxAggregateOutputType = {
    id: bigint | null
    phone_num: string | null
    nickname: string | null
    exercise: $Enums.user_exercise | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    phone_num: number
    nickname: number
    exercise: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    phone_num?: true
    nickname?: true
    exercise?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    phone_num?: true
    nickname?: true
    exercise?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    phone_num?: true
    nickname?: true
    exercise?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user to aggregate.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
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




  export type userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput
    orderBy?: userOrderByWithAggregationInput | userOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: userScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: bigint
    phone_num: string | null
    nickname: string | null
    exercise: $Enums.user_exercise | null
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends userGroupByArgs> = Prisma.PrismaPromise<
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


  export type userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    phone_num?: boolean
    nickname?: boolean
    exercise?: boolean
    agreement_consent?: boolean | user$agreement_consentArgs<ExtArgs>
    inquiry?: boolean | user$inquiryArgs<ExtArgs>
    meal_alert?: boolean | user$meal_alertArgs<ExtArgs>
    user_allergy?: boolean | user$user_allergyArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type userSelectScalar = {
    id?: boolean
    phone_num?: boolean
    nickname?: boolean
    exercise?: boolean
  }

  export type userOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "phone_num" | "nickname" | "exercise", ExtArgs["result"]["user"]>
  export type userInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    agreement_consent?: boolean | user$agreement_consentArgs<ExtArgs>
    inquiry?: boolean | user$inquiryArgs<ExtArgs>
    meal_alert?: boolean | user$meal_alertArgs<ExtArgs>
    user_allergy?: boolean | user$user_allergyArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user"
    objects: {
      agreement_consent: Prisma.$agreement_consentPayload<ExtArgs>[]
      inquiry: Prisma.$inquiryPayload<ExtArgs>[]
      meal_alert: Prisma.$meal_alertPayload<ExtArgs>[]
      user_allergy: Prisma.$user_allergyPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      phone_num: string | null
      nickname: string | null
      exercise: $Enums.user_exercise | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type userGetPayload<S extends boolean | null | undefined | userDefaultArgs> = $Result.GetResult<Prisma.$userPayload, S>

  type userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<userFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user'], meta: { name: 'user' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {userFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends userFindUniqueArgs>(args: SelectSubset<T, userFindUniqueArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {userFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends userFindUniqueOrThrowArgs>(args: SelectSubset<T, userFindUniqueOrThrowArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends userFindFirstArgs>(args?: SelectSubset<T, userFindFirstArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends userFindFirstOrThrowArgs>(args?: SelectSubset<T, userFindFirstOrThrowArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends userFindManyArgs>(args?: SelectSubset<T, userFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {userCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends userCreateArgs>(args: SelectSubset<T, userCreateArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {userCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends userCreateManyArgs>(args?: SelectSubset<T, userCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {userDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends userDeleteArgs>(args: SelectSubset<T, userDeleteArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {userUpdateArgs} args - Arguments to update one User.
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
    update<T extends userUpdateArgs>(args: SelectSubset<T, userUpdateArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {userDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends userDeleteManyArgs>(args?: SelectSubset<T, userDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userUpdateManyArgs} args - Arguments to update one or more rows.
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
    updateMany<T extends userUpdateManyArgs>(args: SelectSubset<T, userUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {userUpsertArgs} args - Arguments to update or create a User.
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
    upsert<T extends userUpsertArgs>(args: SelectSubset<T, userUpsertArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends userCountArgs>(
      args?: Subset<T, userCountArgs>,
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
     * @param {userGroupByArgs} args - Group by arguments.
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
      T extends userGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userGroupByArgs['orderBy'] }
        : { orderBy?: userGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, userGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user model
   */
  readonly fields: userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    agreement_consent<T extends user$agreement_consentArgs<ExtArgs> = {}>(args?: Subset<T, user$agreement_consentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$agreement_consentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    inquiry<T extends user$inquiryArgs<ExtArgs> = {}>(args?: Subset<T, user$inquiryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$inquiryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    meal_alert<T extends user$meal_alertArgs<ExtArgs> = {}>(args?: Subset<T, user$meal_alertArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$meal_alertPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    user_allergy<T extends user$user_allergyArgs<ExtArgs> = {}>(args?: Subset<T, user$user_allergyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_allergyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the user model
   */
  interface userFieldRefs {
    readonly id: FieldRef<"user", 'BigInt'>
    readonly phone_num: FieldRef<"user", 'String'>
    readonly nickname: FieldRef<"user", 'String'>
    readonly exercise: FieldRef<"user", 'user_exercise'>
  }
    

  // Custom InputTypes
  /**
   * user findUnique
   */
  export type userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findUniqueOrThrow
   */
  export type userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findFirst
   */
  export type userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findFirstOrThrow
   */
  export type userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findMany
   */
  export type userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user create
   */
  export type userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The data needed to create a user.
     */
    data: XOR<userCreateInput, userUncheckedCreateInput>
  }

  /**
   * user createMany
   */
  export type userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user update
   */
  export type userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The data needed to update a user.
     */
    data: XOR<userUpdateInput, userUncheckedUpdateInput>
    /**
     * Choose, which user to update.
     */
    where: userWhereUniqueInput
  }

  /**
   * user updateMany
   */
  export type userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: userWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * user upsert
   */
  export type userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The filter to search for the user to update in case it exists.
     */
    where: userWhereUniqueInput
    /**
     * In case the user found by the `where` argument doesn't exist, create a new user with this data.
     */
    create: XOR<userCreateInput, userUncheckedCreateInput>
    /**
     * In case the user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userUpdateInput, userUncheckedUpdateInput>
  }

  /**
   * user delete
   */
  export type userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter which user to delete.
     */
    where: userWhereUniqueInput
  }

  /**
   * user deleteMany
   */
  export type userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: userWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * user.agreement_consent
   */
  export type user$agreement_consentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the agreement_consent
     */
    select?: agreement_consentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the agreement_consent
     */
    omit?: agreement_consentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: agreement_consentInclude<ExtArgs> | null
    where?: agreement_consentWhereInput
    orderBy?: agreement_consentOrderByWithRelationInput | agreement_consentOrderByWithRelationInput[]
    cursor?: agreement_consentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Agreement_consentScalarFieldEnum | Agreement_consentScalarFieldEnum[]
  }

  /**
   * user.inquiry
   */
  export type user$inquiryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inquiry
     */
    select?: inquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the inquiry
     */
    omit?: inquiryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inquiryInclude<ExtArgs> | null
    where?: inquiryWhereInput
    orderBy?: inquiryOrderByWithRelationInput | inquiryOrderByWithRelationInput[]
    cursor?: inquiryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InquiryScalarFieldEnum | InquiryScalarFieldEnum[]
  }

  /**
   * user.meal_alert
   */
  export type user$meal_alertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the meal_alert
     */
    select?: meal_alertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the meal_alert
     */
    omit?: meal_alertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: meal_alertInclude<ExtArgs> | null
    where?: meal_alertWhereInput
    orderBy?: meal_alertOrderByWithRelationInput | meal_alertOrderByWithRelationInput[]
    cursor?: meal_alertWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Meal_alertScalarFieldEnum | Meal_alertScalarFieldEnum[]
  }

  /**
   * user.user_allergy
   */
  export type user$user_allergyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_allergy
     */
    select?: user_allergySelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_allergy
     */
    omit?: user_allergyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_allergyInclude<ExtArgs> | null
    where?: user_allergyWhereInput
    orderBy?: user_allergyOrderByWithRelationInput | user_allergyOrderByWithRelationInput[]
    cursor?: user_allergyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: User_allergyScalarFieldEnum | User_allergyScalarFieldEnum[]
  }

  /**
   * user without action
   */
  export type userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
  }


  /**
   * Model agreement_consent
   */

  export type AggregateAgreement_consent = {
    _count: Agreement_consentCountAggregateOutputType | null
    _avg: Agreement_consentAvgAggregateOutputType | null
    _sum: Agreement_consentSumAggregateOutputType | null
    _min: Agreement_consentMinAggregateOutputType | null
    _max: Agreement_consentMaxAggregateOutputType | null
  }

  export type Agreement_consentAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type Agreement_consentSumAggregateOutputType = {
    id: bigint | null
    user_id: bigint | null
  }

  export type Agreement_consentMinAggregateOutputType = {
    id: bigint | null
    user_id: bigint | null
    terms_of_service: boolean | null
    privacy_policy: boolean | null
    location_service: boolean | null
    is_over14: boolean | null
    created_at: Date | null
  }

  export type Agreement_consentMaxAggregateOutputType = {
    id: bigint | null
    user_id: bigint | null
    terms_of_service: boolean | null
    privacy_policy: boolean | null
    location_service: boolean | null
    is_over14: boolean | null
    created_at: Date | null
  }

  export type Agreement_consentCountAggregateOutputType = {
    id: number
    user_id: number
    terms_of_service: number
    privacy_policy: number
    location_service: number
    is_over14: number
    created_at: number
    _all: number
  }


  export type Agreement_consentAvgAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type Agreement_consentSumAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type Agreement_consentMinAggregateInputType = {
    id?: true
    user_id?: true
    terms_of_service?: true
    privacy_policy?: true
    location_service?: true
    is_over14?: true
    created_at?: true
  }

  export type Agreement_consentMaxAggregateInputType = {
    id?: true
    user_id?: true
    terms_of_service?: true
    privacy_policy?: true
    location_service?: true
    is_over14?: true
    created_at?: true
  }

  export type Agreement_consentCountAggregateInputType = {
    id?: true
    user_id?: true
    terms_of_service?: true
    privacy_policy?: true
    location_service?: true
    is_over14?: true
    created_at?: true
    _all?: true
  }

  export type Agreement_consentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which agreement_consent to aggregate.
     */
    where?: agreement_consentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of agreement_consents to fetch.
     */
    orderBy?: agreement_consentOrderByWithRelationInput | agreement_consentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: agreement_consentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` agreement_consents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` agreement_consents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned agreement_consents
    **/
    _count?: true | Agreement_consentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Agreement_consentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Agreement_consentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Agreement_consentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Agreement_consentMaxAggregateInputType
  }

  export type GetAgreement_consentAggregateType<T extends Agreement_consentAggregateArgs> = {
        [P in keyof T & keyof AggregateAgreement_consent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAgreement_consent[P]>
      : GetScalarType<T[P], AggregateAgreement_consent[P]>
  }




  export type agreement_consentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: agreement_consentWhereInput
    orderBy?: agreement_consentOrderByWithAggregationInput | agreement_consentOrderByWithAggregationInput[]
    by: Agreement_consentScalarFieldEnum[] | Agreement_consentScalarFieldEnum
    having?: agreement_consentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Agreement_consentCountAggregateInputType | true
    _avg?: Agreement_consentAvgAggregateInputType
    _sum?: Agreement_consentSumAggregateInputType
    _min?: Agreement_consentMinAggregateInputType
    _max?: Agreement_consentMaxAggregateInputType
  }

  export type Agreement_consentGroupByOutputType = {
    id: bigint
    user_id: bigint
    terms_of_service: boolean | null
    privacy_policy: boolean | null
    location_service: boolean | null
    is_over14: boolean | null
    created_at: Date | null
    _count: Agreement_consentCountAggregateOutputType | null
    _avg: Agreement_consentAvgAggregateOutputType | null
    _sum: Agreement_consentSumAggregateOutputType | null
    _min: Agreement_consentMinAggregateOutputType | null
    _max: Agreement_consentMaxAggregateOutputType | null
  }

  type GetAgreement_consentGroupByPayload<T extends agreement_consentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Agreement_consentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Agreement_consentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Agreement_consentGroupByOutputType[P]>
            : GetScalarType<T[P], Agreement_consentGroupByOutputType[P]>
        }
      >
    >


  export type agreement_consentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    terms_of_service?: boolean
    privacy_policy?: boolean
    location_service?: boolean
    is_over14?: boolean
    created_at?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["agreement_consent"]>



  export type agreement_consentSelectScalar = {
    id?: boolean
    user_id?: boolean
    terms_of_service?: boolean
    privacy_policy?: boolean
    location_service?: boolean
    is_over14?: boolean
    created_at?: boolean
  }

  export type agreement_consentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "terms_of_service" | "privacy_policy" | "location_service" | "is_over14" | "created_at", ExtArgs["result"]["agreement_consent"]>
  export type agreement_consentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
  }

  export type $agreement_consentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "agreement_consent"
    objects: {
      user: Prisma.$userPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      user_id: bigint
      terms_of_service: boolean | null
      privacy_policy: boolean | null
      location_service: boolean | null
      is_over14: boolean | null
      created_at: Date | null
    }, ExtArgs["result"]["agreement_consent"]>
    composites: {}
  }

  type agreement_consentGetPayload<S extends boolean | null | undefined | agreement_consentDefaultArgs> = $Result.GetResult<Prisma.$agreement_consentPayload, S>

  type agreement_consentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<agreement_consentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Agreement_consentCountAggregateInputType | true
    }

  export interface agreement_consentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['agreement_consent'], meta: { name: 'agreement_consent' } }
    /**
     * Find zero or one Agreement_consent that matches the filter.
     * @param {agreement_consentFindUniqueArgs} args - Arguments to find a Agreement_consent
     * @example
     * // Get one Agreement_consent
     * const agreement_consent = await prisma.agreement_consent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends agreement_consentFindUniqueArgs>(args: SelectSubset<T, agreement_consentFindUniqueArgs<ExtArgs>>): Prisma__agreement_consentClient<$Result.GetResult<Prisma.$agreement_consentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Agreement_consent that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {agreement_consentFindUniqueOrThrowArgs} args - Arguments to find a Agreement_consent
     * @example
     * // Get one Agreement_consent
     * const agreement_consent = await prisma.agreement_consent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends agreement_consentFindUniqueOrThrowArgs>(args: SelectSubset<T, agreement_consentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__agreement_consentClient<$Result.GetResult<Prisma.$agreement_consentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Agreement_consent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {agreement_consentFindFirstArgs} args - Arguments to find a Agreement_consent
     * @example
     * // Get one Agreement_consent
     * const agreement_consent = await prisma.agreement_consent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends agreement_consentFindFirstArgs>(args?: SelectSubset<T, agreement_consentFindFirstArgs<ExtArgs>>): Prisma__agreement_consentClient<$Result.GetResult<Prisma.$agreement_consentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Agreement_consent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {agreement_consentFindFirstOrThrowArgs} args - Arguments to find a Agreement_consent
     * @example
     * // Get one Agreement_consent
     * const agreement_consent = await prisma.agreement_consent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends agreement_consentFindFirstOrThrowArgs>(args?: SelectSubset<T, agreement_consentFindFirstOrThrowArgs<ExtArgs>>): Prisma__agreement_consentClient<$Result.GetResult<Prisma.$agreement_consentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Agreement_consents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {agreement_consentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Agreement_consents
     * const agreement_consents = await prisma.agreement_consent.findMany()
     * 
     * // Get first 10 Agreement_consents
     * const agreement_consents = await prisma.agreement_consent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const agreement_consentWithIdOnly = await prisma.agreement_consent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends agreement_consentFindManyArgs>(args?: SelectSubset<T, agreement_consentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$agreement_consentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Agreement_consent.
     * @param {agreement_consentCreateArgs} args - Arguments to create a Agreement_consent.
     * @example
     * // Create one Agreement_consent
     * const Agreement_consent = await prisma.agreement_consent.create({
     *   data: {
     *     // ... data to create a Agreement_consent
     *   }
     * })
     * 
     */
    create<T extends agreement_consentCreateArgs>(args: SelectSubset<T, agreement_consentCreateArgs<ExtArgs>>): Prisma__agreement_consentClient<$Result.GetResult<Prisma.$agreement_consentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Agreement_consents.
     * @param {agreement_consentCreateManyArgs} args - Arguments to create many Agreement_consents.
     * @example
     * // Create many Agreement_consents
     * const agreement_consent = await prisma.agreement_consent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends agreement_consentCreateManyArgs>(args?: SelectSubset<T, agreement_consentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Agreement_consent.
     * @param {agreement_consentDeleteArgs} args - Arguments to delete one Agreement_consent.
     * @example
     * // Delete one Agreement_consent
     * const Agreement_consent = await prisma.agreement_consent.delete({
     *   where: {
     *     // ... filter to delete one Agreement_consent
     *   }
     * })
     * 
     */
    delete<T extends agreement_consentDeleteArgs>(args: SelectSubset<T, agreement_consentDeleteArgs<ExtArgs>>): Prisma__agreement_consentClient<$Result.GetResult<Prisma.$agreement_consentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Agreement_consent.
     * @param {agreement_consentUpdateArgs} args - Arguments to update one Agreement_consent.
     * @example
     * // Update one Agreement_consent
     * const agreement_consent = await prisma.agreement_consent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends agreement_consentUpdateArgs>(args: SelectSubset<T, agreement_consentUpdateArgs<ExtArgs>>): Prisma__agreement_consentClient<$Result.GetResult<Prisma.$agreement_consentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Agreement_consents.
     * @param {agreement_consentDeleteManyArgs} args - Arguments to filter Agreement_consents to delete.
     * @example
     * // Delete a few Agreement_consents
     * const { count } = await prisma.agreement_consent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends agreement_consentDeleteManyArgs>(args?: SelectSubset<T, agreement_consentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Agreement_consents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {agreement_consentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Agreement_consents
     * const agreement_consent = await prisma.agreement_consent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends agreement_consentUpdateManyArgs>(args: SelectSubset<T, agreement_consentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Agreement_consent.
     * @param {agreement_consentUpsertArgs} args - Arguments to update or create a Agreement_consent.
     * @example
     * // Update or create a Agreement_consent
     * const agreement_consent = await prisma.agreement_consent.upsert({
     *   create: {
     *     // ... data to create a Agreement_consent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Agreement_consent we want to update
     *   }
     * })
     */
    upsert<T extends agreement_consentUpsertArgs>(args: SelectSubset<T, agreement_consentUpsertArgs<ExtArgs>>): Prisma__agreement_consentClient<$Result.GetResult<Prisma.$agreement_consentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Agreement_consents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {agreement_consentCountArgs} args - Arguments to filter Agreement_consents to count.
     * @example
     * // Count the number of Agreement_consents
     * const count = await prisma.agreement_consent.count({
     *   where: {
     *     // ... the filter for the Agreement_consents we want to count
     *   }
     * })
    **/
    count<T extends agreement_consentCountArgs>(
      args?: Subset<T, agreement_consentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Agreement_consentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Agreement_consent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Agreement_consentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Agreement_consentAggregateArgs>(args: Subset<T, Agreement_consentAggregateArgs>): Prisma.PrismaPromise<GetAgreement_consentAggregateType<T>>

    /**
     * Group by Agreement_consent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {agreement_consentGroupByArgs} args - Group by arguments.
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
      T extends agreement_consentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: agreement_consentGroupByArgs['orderBy'] }
        : { orderBy?: agreement_consentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, agreement_consentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAgreement_consentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the agreement_consent model
   */
  readonly fields: agreement_consentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for agreement_consent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__agreement_consentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the agreement_consent model
   */
  interface agreement_consentFieldRefs {
    readonly id: FieldRef<"agreement_consent", 'BigInt'>
    readonly user_id: FieldRef<"agreement_consent", 'BigInt'>
    readonly terms_of_service: FieldRef<"agreement_consent", 'Boolean'>
    readonly privacy_policy: FieldRef<"agreement_consent", 'Boolean'>
    readonly location_service: FieldRef<"agreement_consent", 'Boolean'>
    readonly is_over14: FieldRef<"agreement_consent", 'Boolean'>
    readonly created_at: FieldRef<"agreement_consent", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * agreement_consent findUnique
   */
  export type agreement_consentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the agreement_consent
     */
    select?: agreement_consentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the agreement_consent
     */
    omit?: agreement_consentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: agreement_consentInclude<ExtArgs> | null
    /**
     * Filter, which agreement_consent to fetch.
     */
    where: agreement_consentWhereUniqueInput
  }

  /**
   * agreement_consent findUniqueOrThrow
   */
  export type agreement_consentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the agreement_consent
     */
    select?: agreement_consentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the agreement_consent
     */
    omit?: agreement_consentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: agreement_consentInclude<ExtArgs> | null
    /**
     * Filter, which agreement_consent to fetch.
     */
    where: agreement_consentWhereUniqueInput
  }

  /**
   * agreement_consent findFirst
   */
  export type agreement_consentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the agreement_consent
     */
    select?: agreement_consentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the agreement_consent
     */
    omit?: agreement_consentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: agreement_consentInclude<ExtArgs> | null
    /**
     * Filter, which agreement_consent to fetch.
     */
    where?: agreement_consentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of agreement_consents to fetch.
     */
    orderBy?: agreement_consentOrderByWithRelationInput | agreement_consentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for agreement_consents.
     */
    cursor?: agreement_consentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` agreement_consents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` agreement_consents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of agreement_consents.
     */
    distinct?: Agreement_consentScalarFieldEnum | Agreement_consentScalarFieldEnum[]
  }

  /**
   * agreement_consent findFirstOrThrow
   */
  export type agreement_consentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the agreement_consent
     */
    select?: agreement_consentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the agreement_consent
     */
    omit?: agreement_consentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: agreement_consentInclude<ExtArgs> | null
    /**
     * Filter, which agreement_consent to fetch.
     */
    where?: agreement_consentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of agreement_consents to fetch.
     */
    orderBy?: agreement_consentOrderByWithRelationInput | agreement_consentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for agreement_consents.
     */
    cursor?: agreement_consentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` agreement_consents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` agreement_consents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of agreement_consents.
     */
    distinct?: Agreement_consentScalarFieldEnum | Agreement_consentScalarFieldEnum[]
  }

  /**
   * agreement_consent findMany
   */
  export type agreement_consentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the agreement_consent
     */
    select?: agreement_consentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the agreement_consent
     */
    omit?: agreement_consentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: agreement_consentInclude<ExtArgs> | null
    /**
     * Filter, which agreement_consents to fetch.
     */
    where?: agreement_consentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of agreement_consents to fetch.
     */
    orderBy?: agreement_consentOrderByWithRelationInput | agreement_consentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing agreement_consents.
     */
    cursor?: agreement_consentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` agreement_consents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` agreement_consents.
     */
    skip?: number
    distinct?: Agreement_consentScalarFieldEnum | Agreement_consentScalarFieldEnum[]
  }

  /**
   * agreement_consent create
   */
  export type agreement_consentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the agreement_consent
     */
    select?: agreement_consentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the agreement_consent
     */
    omit?: agreement_consentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: agreement_consentInclude<ExtArgs> | null
    /**
     * The data needed to create a agreement_consent.
     */
    data: XOR<agreement_consentCreateInput, agreement_consentUncheckedCreateInput>
  }

  /**
   * agreement_consent createMany
   */
  export type agreement_consentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many agreement_consents.
     */
    data: agreement_consentCreateManyInput | agreement_consentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * agreement_consent update
   */
  export type agreement_consentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the agreement_consent
     */
    select?: agreement_consentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the agreement_consent
     */
    omit?: agreement_consentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: agreement_consentInclude<ExtArgs> | null
    /**
     * The data needed to update a agreement_consent.
     */
    data: XOR<agreement_consentUpdateInput, agreement_consentUncheckedUpdateInput>
    /**
     * Choose, which agreement_consent to update.
     */
    where: agreement_consentWhereUniqueInput
  }

  /**
   * agreement_consent updateMany
   */
  export type agreement_consentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update agreement_consents.
     */
    data: XOR<agreement_consentUpdateManyMutationInput, agreement_consentUncheckedUpdateManyInput>
    /**
     * Filter which agreement_consents to update
     */
    where?: agreement_consentWhereInput
    /**
     * Limit how many agreement_consents to update.
     */
    limit?: number
  }

  /**
   * agreement_consent upsert
   */
  export type agreement_consentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the agreement_consent
     */
    select?: agreement_consentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the agreement_consent
     */
    omit?: agreement_consentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: agreement_consentInclude<ExtArgs> | null
    /**
     * The filter to search for the agreement_consent to update in case it exists.
     */
    where: agreement_consentWhereUniqueInput
    /**
     * In case the agreement_consent found by the `where` argument doesn't exist, create a new agreement_consent with this data.
     */
    create: XOR<agreement_consentCreateInput, agreement_consentUncheckedCreateInput>
    /**
     * In case the agreement_consent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<agreement_consentUpdateInput, agreement_consentUncheckedUpdateInput>
  }

  /**
   * agreement_consent delete
   */
  export type agreement_consentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the agreement_consent
     */
    select?: agreement_consentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the agreement_consent
     */
    omit?: agreement_consentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: agreement_consentInclude<ExtArgs> | null
    /**
     * Filter which agreement_consent to delete.
     */
    where: agreement_consentWhereUniqueInput
  }

  /**
   * agreement_consent deleteMany
   */
  export type agreement_consentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which agreement_consents to delete
     */
    where?: agreement_consentWhereInput
    /**
     * Limit how many agreement_consents to delete.
     */
    limit?: number
  }

  /**
   * agreement_consent without action
   */
  export type agreement_consentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the agreement_consent
     */
    select?: agreement_consentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the agreement_consent
     */
    omit?: agreement_consentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: agreement_consentInclude<ExtArgs> | null
  }


  /**
   * Model allergy_min
   */

  export type AggregateAllergy_min = {
    _count: Allergy_minCountAggregateOutputType | null
    _avg: Allergy_minAvgAggregateOutputType | null
    _sum: Allergy_minSumAggregateOutputType | null
    _min: Allergy_minMinAggregateOutputType | null
    _max: Allergy_minMaxAggregateOutputType | null
  }

  export type Allergy_minAvgAggregateOutputType = {
    id: number | null
  }

  export type Allergy_minSumAggregateOutputType = {
    id: bigint | null
  }

  export type Allergy_minMinAggregateOutputType = {
    id: bigint | null
    allergy: string | null
  }

  export type Allergy_minMaxAggregateOutputType = {
    id: bigint | null
    allergy: string | null
  }

  export type Allergy_minCountAggregateOutputType = {
    id: number
    allergy: number
    _all: number
  }


  export type Allergy_minAvgAggregateInputType = {
    id?: true
  }

  export type Allergy_minSumAggregateInputType = {
    id?: true
  }

  export type Allergy_minMinAggregateInputType = {
    id?: true
    allergy?: true
  }

  export type Allergy_minMaxAggregateInputType = {
    id?: true
    allergy?: true
  }

  export type Allergy_minCountAggregateInputType = {
    id?: true
    allergy?: true
    _all?: true
  }

  export type Allergy_minAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which allergy_min to aggregate.
     */
    where?: allergy_minWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of allergy_mins to fetch.
     */
    orderBy?: allergy_minOrderByWithRelationInput | allergy_minOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: allergy_minWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` allergy_mins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` allergy_mins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned allergy_mins
    **/
    _count?: true | Allergy_minCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Allergy_minAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Allergy_minSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Allergy_minMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Allergy_minMaxAggregateInputType
  }

  export type GetAllergy_minAggregateType<T extends Allergy_minAggregateArgs> = {
        [P in keyof T & keyof AggregateAllergy_min]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAllergy_min[P]>
      : GetScalarType<T[P], AggregateAllergy_min[P]>
  }




  export type allergy_minGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: allergy_minWhereInput
    orderBy?: allergy_minOrderByWithAggregationInput | allergy_minOrderByWithAggregationInput[]
    by: Allergy_minScalarFieldEnum[] | Allergy_minScalarFieldEnum
    having?: allergy_minScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Allergy_minCountAggregateInputType | true
    _avg?: Allergy_minAvgAggregateInputType
    _sum?: Allergy_minSumAggregateInputType
    _min?: Allergy_minMinAggregateInputType
    _max?: Allergy_minMaxAggregateInputType
  }

  export type Allergy_minGroupByOutputType = {
    id: bigint
    allergy: string | null
    _count: Allergy_minCountAggregateOutputType | null
    _avg: Allergy_minAvgAggregateOutputType | null
    _sum: Allergy_minSumAggregateOutputType | null
    _min: Allergy_minMinAggregateOutputType | null
    _max: Allergy_minMaxAggregateOutputType | null
  }

  type GetAllergy_minGroupByPayload<T extends allergy_minGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Allergy_minGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Allergy_minGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Allergy_minGroupByOutputType[P]>
            : GetScalarType<T[P], Allergy_minGroupByOutputType[P]>
        }
      >
    >


  export type allergy_minSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    allergy?: boolean
    user_allergy?: boolean | allergy_min$user_allergyArgs<ExtArgs>
    _count?: boolean | Allergy_minCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["allergy_min"]>



  export type allergy_minSelectScalar = {
    id?: boolean
    allergy?: boolean
  }

  export type allergy_minOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "allergy", ExtArgs["result"]["allergy_min"]>
  export type allergy_minInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user_allergy?: boolean | allergy_min$user_allergyArgs<ExtArgs>
    _count?: boolean | Allergy_minCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $allergy_minPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "allergy_min"
    objects: {
      user_allergy: Prisma.$user_allergyPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      allergy: string | null
    }, ExtArgs["result"]["allergy_min"]>
    composites: {}
  }

  type allergy_minGetPayload<S extends boolean | null | undefined | allergy_minDefaultArgs> = $Result.GetResult<Prisma.$allergy_minPayload, S>

  type allergy_minCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<allergy_minFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Allergy_minCountAggregateInputType | true
    }

  export interface allergy_minDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['allergy_min'], meta: { name: 'allergy_min' } }
    /**
     * Find zero or one Allergy_min that matches the filter.
     * @param {allergy_minFindUniqueArgs} args - Arguments to find a Allergy_min
     * @example
     * // Get one Allergy_min
     * const allergy_min = await prisma.allergy_min.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends allergy_minFindUniqueArgs>(args: SelectSubset<T, allergy_minFindUniqueArgs<ExtArgs>>): Prisma__allergy_minClient<$Result.GetResult<Prisma.$allergy_minPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Allergy_min that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {allergy_minFindUniqueOrThrowArgs} args - Arguments to find a Allergy_min
     * @example
     * // Get one Allergy_min
     * const allergy_min = await prisma.allergy_min.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends allergy_minFindUniqueOrThrowArgs>(args: SelectSubset<T, allergy_minFindUniqueOrThrowArgs<ExtArgs>>): Prisma__allergy_minClient<$Result.GetResult<Prisma.$allergy_minPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Allergy_min that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {allergy_minFindFirstArgs} args - Arguments to find a Allergy_min
     * @example
     * // Get one Allergy_min
     * const allergy_min = await prisma.allergy_min.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends allergy_minFindFirstArgs>(args?: SelectSubset<T, allergy_minFindFirstArgs<ExtArgs>>): Prisma__allergy_minClient<$Result.GetResult<Prisma.$allergy_minPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Allergy_min that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {allergy_minFindFirstOrThrowArgs} args - Arguments to find a Allergy_min
     * @example
     * // Get one Allergy_min
     * const allergy_min = await prisma.allergy_min.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends allergy_minFindFirstOrThrowArgs>(args?: SelectSubset<T, allergy_minFindFirstOrThrowArgs<ExtArgs>>): Prisma__allergy_minClient<$Result.GetResult<Prisma.$allergy_minPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Allergy_mins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {allergy_minFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Allergy_mins
     * const allergy_mins = await prisma.allergy_min.findMany()
     * 
     * // Get first 10 Allergy_mins
     * const allergy_mins = await prisma.allergy_min.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const allergy_minWithIdOnly = await prisma.allergy_min.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends allergy_minFindManyArgs>(args?: SelectSubset<T, allergy_minFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$allergy_minPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Allergy_min.
     * @param {allergy_minCreateArgs} args - Arguments to create a Allergy_min.
     * @example
     * // Create one Allergy_min
     * const Allergy_min = await prisma.allergy_min.create({
     *   data: {
     *     // ... data to create a Allergy_min
     *   }
     * })
     * 
     */
    create<T extends allergy_minCreateArgs>(args: SelectSubset<T, allergy_minCreateArgs<ExtArgs>>): Prisma__allergy_minClient<$Result.GetResult<Prisma.$allergy_minPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Allergy_mins.
     * @param {allergy_minCreateManyArgs} args - Arguments to create many Allergy_mins.
     * @example
     * // Create many Allergy_mins
     * const allergy_min = await prisma.allergy_min.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends allergy_minCreateManyArgs>(args?: SelectSubset<T, allergy_minCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Allergy_min.
     * @param {allergy_minDeleteArgs} args - Arguments to delete one Allergy_min.
     * @example
     * // Delete one Allergy_min
     * const Allergy_min = await prisma.allergy_min.delete({
     *   where: {
     *     // ... filter to delete one Allergy_min
     *   }
     * })
     * 
     */
    delete<T extends allergy_minDeleteArgs>(args: SelectSubset<T, allergy_minDeleteArgs<ExtArgs>>): Prisma__allergy_minClient<$Result.GetResult<Prisma.$allergy_minPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Allergy_min.
     * @param {allergy_minUpdateArgs} args - Arguments to update one Allergy_min.
     * @example
     * // Update one Allergy_min
     * const allergy_min = await prisma.allergy_min.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends allergy_minUpdateArgs>(args: SelectSubset<T, allergy_minUpdateArgs<ExtArgs>>): Prisma__allergy_minClient<$Result.GetResult<Prisma.$allergy_minPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Allergy_mins.
     * @param {allergy_minDeleteManyArgs} args - Arguments to filter Allergy_mins to delete.
     * @example
     * // Delete a few Allergy_mins
     * const { count } = await prisma.allergy_min.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends allergy_minDeleteManyArgs>(args?: SelectSubset<T, allergy_minDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Allergy_mins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {allergy_minUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Allergy_mins
     * const allergy_min = await prisma.allergy_min.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends allergy_minUpdateManyArgs>(args: SelectSubset<T, allergy_minUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Allergy_min.
     * @param {allergy_minUpsertArgs} args - Arguments to update or create a Allergy_min.
     * @example
     * // Update or create a Allergy_min
     * const allergy_min = await prisma.allergy_min.upsert({
     *   create: {
     *     // ... data to create a Allergy_min
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Allergy_min we want to update
     *   }
     * })
     */
    upsert<T extends allergy_minUpsertArgs>(args: SelectSubset<T, allergy_minUpsertArgs<ExtArgs>>): Prisma__allergy_minClient<$Result.GetResult<Prisma.$allergy_minPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Allergy_mins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {allergy_minCountArgs} args - Arguments to filter Allergy_mins to count.
     * @example
     * // Count the number of Allergy_mins
     * const count = await prisma.allergy_min.count({
     *   where: {
     *     // ... the filter for the Allergy_mins we want to count
     *   }
     * })
    **/
    count<T extends allergy_minCountArgs>(
      args?: Subset<T, allergy_minCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Allergy_minCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Allergy_min.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Allergy_minAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Allergy_minAggregateArgs>(args: Subset<T, Allergy_minAggregateArgs>): Prisma.PrismaPromise<GetAllergy_minAggregateType<T>>

    /**
     * Group by Allergy_min.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {allergy_minGroupByArgs} args - Group by arguments.
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
      T extends allergy_minGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: allergy_minGroupByArgs['orderBy'] }
        : { orderBy?: allergy_minGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, allergy_minGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAllergy_minGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the allergy_min model
   */
  readonly fields: allergy_minFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for allergy_min.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__allergy_minClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user_allergy<T extends allergy_min$user_allergyArgs<ExtArgs> = {}>(args?: Subset<T, allergy_min$user_allergyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_allergyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the allergy_min model
   */
  interface allergy_minFieldRefs {
    readonly id: FieldRef<"allergy_min", 'BigInt'>
    readonly allergy: FieldRef<"allergy_min", 'String'>
  }
    

  // Custom InputTypes
  /**
   * allergy_min findUnique
   */
  export type allergy_minFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the allergy_min
     */
    select?: allergy_minSelect<ExtArgs> | null
    /**
     * Omit specific fields from the allergy_min
     */
    omit?: allergy_minOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: allergy_minInclude<ExtArgs> | null
    /**
     * Filter, which allergy_min to fetch.
     */
    where: allergy_minWhereUniqueInput
  }

  /**
   * allergy_min findUniqueOrThrow
   */
  export type allergy_minFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the allergy_min
     */
    select?: allergy_minSelect<ExtArgs> | null
    /**
     * Omit specific fields from the allergy_min
     */
    omit?: allergy_minOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: allergy_minInclude<ExtArgs> | null
    /**
     * Filter, which allergy_min to fetch.
     */
    where: allergy_minWhereUniqueInput
  }

  /**
   * allergy_min findFirst
   */
  export type allergy_minFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the allergy_min
     */
    select?: allergy_minSelect<ExtArgs> | null
    /**
     * Omit specific fields from the allergy_min
     */
    omit?: allergy_minOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: allergy_minInclude<ExtArgs> | null
    /**
     * Filter, which allergy_min to fetch.
     */
    where?: allergy_minWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of allergy_mins to fetch.
     */
    orderBy?: allergy_minOrderByWithRelationInput | allergy_minOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for allergy_mins.
     */
    cursor?: allergy_minWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` allergy_mins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` allergy_mins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of allergy_mins.
     */
    distinct?: Allergy_minScalarFieldEnum | Allergy_minScalarFieldEnum[]
  }

  /**
   * allergy_min findFirstOrThrow
   */
  export type allergy_minFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the allergy_min
     */
    select?: allergy_minSelect<ExtArgs> | null
    /**
     * Omit specific fields from the allergy_min
     */
    omit?: allergy_minOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: allergy_minInclude<ExtArgs> | null
    /**
     * Filter, which allergy_min to fetch.
     */
    where?: allergy_minWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of allergy_mins to fetch.
     */
    orderBy?: allergy_minOrderByWithRelationInput | allergy_minOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for allergy_mins.
     */
    cursor?: allergy_minWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` allergy_mins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` allergy_mins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of allergy_mins.
     */
    distinct?: Allergy_minScalarFieldEnum | Allergy_minScalarFieldEnum[]
  }

  /**
   * allergy_min findMany
   */
  export type allergy_minFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the allergy_min
     */
    select?: allergy_minSelect<ExtArgs> | null
    /**
     * Omit specific fields from the allergy_min
     */
    omit?: allergy_minOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: allergy_minInclude<ExtArgs> | null
    /**
     * Filter, which allergy_mins to fetch.
     */
    where?: allergy_minWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of allergy_mins to fetch.
     */
    orderBy?: allergy_minOrderByWithRelationInput | allergy_minOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing allergy_mins.
     */
    cursor?: allergy_minWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` allergy_mins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` allergy_mins.
     */
    skip?: number
    distinct?: Allergy_minScalarFieldEnum | Allergy_minScalarFieldEnum[]
  }

  /**
   * allergy_min create
   */
  export type allergy_minCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the allergy_min
     */
    select?: allergy_minSelect<ExtArgs> | null
    /**
     * Omit specific fields from the allergy_min
     */
    omit?: allergy_minOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: allergy_minInclude<ExtArgs> | null
    /**
     * The data needed to create a allergy_min.
     */
    data?: XOR<allergy_minCreateInput, allergy_minUncheckedCreateInput>
  }

  /**
   * allergy_min createMany
   */
  export type allergy_minCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many allergy_mins.
     */
    data: allergy_minCreateManyInput | allergy_minCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * allergy_min update
   */
  export type allergy_minUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the allergy_min
     */
    select?: allergy_minSelect<ExtArgs> | null
    /**
     * Omit specific fields from the allergy_min
     */
    omit?: allergy_minOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: allergy_minInclude<ExtArgs> | null
    /**
     * The data needed to update a allergy_min.
     */
    data: XOR<allergy_minUpdateInput, allergy_minUncheckedUpdateInput>
    /**
     * Choose, which allergy_min to update.
     */
    where: allergy_minWhereUniqueInput
  }

  /**
   * allergy_min updateMany
   */
  export type allergy_minUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update allergy_mins.
     */
    data: XOR<allergy_minUpdateManyMutationInput, allergy_minUncheckedUpdateManyInput>
    /**
     * Filter which allergy_mins to update
     */
    where?: allergy_minWhereInput
    /**
     * Limit how many allergy_mins to update.
     */
    limit?: number
  }

  /**
   * allergy_min upsert
   */
  export type allergy_minUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the allergy_min
     */
    select?: allergy_minSelect<ExtArgs> | null
    /**
     * Omit specific fields from the allergy_min
     */
    omit?: allergy_minOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: allergy_minInclude<ExtArgs> | null
    /**
     * The filter to search for the allergy_min to update in case it exists.
     */
    where: allergy_minWhereUniqueInput
    /**
     * In case the allergy_min found by the `where` argument doesn't exist, create a new allergy_min with this data.
     */
    create: XOR<allergy_minCreateInput, allergy_minUncheckedCreateInput>
    /**
     * In case the allergy_min was found with the provided `where` argument, update it with this data.
     */
    update: XOR<allergy_minUpdateInput, allergy_minUncheckedUpdateInput>
  }

  /**
   * allergy_min delete
   */
  export type allergy_minDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the allergy_min
     */
    select?: allergy_minSelect<ExtArgs> | null
    /**
     * Omit specific fields from the allergy_min
     */
    omit?: allergy_minOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: allergy_minInclude<ExtArgs> | null
    /**
     * Filter which allergy_min to delete.
     */
    where: allergy_minWhereUniqueInput
  }

  /**
   * allergy_min deleteMany
   */
  export type allergy_minDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which allergy_mins to delete
     */
    where?: allergy_minWhereInput
    /**
     * Limit how many allergy_mins to delete.
     */
    limit?: number
  }

  /**
   * allergy_min.user_allergy
   */
  export type allergy_min$user_allergyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_allergy
     */
    select?: user_allergySelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_allergy
     */
    omit?: user_allergyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_allergyInclude<ExtArgs> | null
    where?: user_allergyWhereInput
    orderBy?: user_allergyOrderByWithRelationInput | user_allergyOrderByWithRelationInput[]
    cursor?: user_allergyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: User_allergyScalarFieldEnum | User_allergyScalarFieldEnum[]
  }

  /**
   * allergy_min without action
   */
  export type allergy_minDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the allergy_min
     */
    select?: allergy_minSelect<ExtArgs> | null
    /**
     * Omit specific fields from the allergy_min
     */
    omit?: allergy_minOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: allergy_minInclude<ExtArgs> | null
  }


  /**
   * Model inquiry
   */

  export type AggregateInquiry = {
    _count: InquiryCountAggregateOutputType | null
    _avg: InquiryAvgAggregateOutputType | null
    _sum: InquirySumAggregateOutputType | null
    _min: InquiryMinAggregateOutputType | null
    _max: InquiryMaxAggregateOutputType | null
  }

  export type InquiryAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type InquirySumAggregateOutputType = {
    id: bigint | null
    user_id: bigint | null
  }

  export type InquiryMinAggregateOutputType = {
    id: bigint | null
    user_id: bigint | null
    title: string | null
    content: string | null
    created_at: Date | null
  }

  export type InquiryMaxAggregateOutputType = {
    id: bigint | null
    user_id: bigint | null
    title: string | null
    content: string | null
    created_at: Date | null
  }

  export type InquiryCountAggregateOutputType = {
    id: number
    user_id: number
    title: number
    content: number
    created_at: number
    _all: number
  }


  export type InquiryAvgAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type InquirySumAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type InquiryMinAggregateInputType = {
    id?: true
    user_id?: true
    title?: true
    content?: true
    created_at?: true
  }

  export type InquiryMaxAggregateInputType = {
    id?: true
    user_id?: true
    title?: true
    content?: true
    created_at?: true
  }

  export type InquiryCountAggregateInputType = {
    id?: true
    user_id?: true
    title?: true
    content?: true
    created_at?: true
    _all?: true
  }

  export type InquiryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which inquiry to aggregate.
     */
    where?: inquiryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of inquiries to fetch.
     */
    orderBy?: inquiryOrderByWithRelationInput | inquiryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: inquiryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` inquiries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` inquiries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned inquiries
    **/
    _count?: true | InquiryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InquiryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InquirySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InquiryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InquiryMaxAggregateInputType
  }

  export type GetInquiryAggregateType<T extends InquiryAggregateArgs> = {
        [P in keyof T & keyof AggregateInquiry]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInquiry[P]>
      : GetScalarType<T[P], AggregateInquiry[P]>
  }




  export type inquiryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: inquiryWhereInput
    orderBy?: inquiryOrderByWithAggregationInput | inquiryOrderByWithAggregationInput[]
    by: InquiryScalarFieldEnum[] | InquiryScalarFieldEnum
    having?: inquiryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InquiryCountAggregateInputType | true
    _avg?: InquiryAvgAggregateInputType
    _sum?: InquirySumAggregateInputType
    _min?: InquiryMinAggregateInputType
    _max?: InquiryMaxAggregateInputType
  }

  export type InquiryGroupByOutputType = {
    id: bigint
    user_id: bigint
    title: string | null
    content: string | null
    created_at: Date | null
    _count: InquiryCountAggregateOutputType | null
    _avg: InquiryAvgAggregateOutputType | null
    _sum: InquirySumAggregateOutputType | null
    _min: InquiryMinAggregateOutputType | null
    _max: InquiryMaxAggregateOutputType | null
  }

  type GetInquiryGroupByPayload<T extends inquiryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InquiryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InquiryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InquiryGroupByOutputType[P]>
            : GetScalarType<T[P], InquiryGroupByOutputType[P]>
        }
      >
    >


  export type inquirySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    title?: boolean
    content?: boolean
    created_at?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inquiry"]>



  export type inquirySelectScalar = {
    id?: boolean
    user_id?: boolean
    title?: boolean
    content?: boolean
    created_at?: boolean
  }

  export type inquiryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "title" | "content" | "created_at", ExtArgs["result"]["inquiry"]>
  export type inquiryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
  }

  export type $inquiryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "inquiry"
    objects: {
      user: Prisma.$userPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      user_id: bigint
      title: string | null
      content: string | null
      created_at: Date | null
    }, ExtArgs["result"]["inquiry"]>
    composites: {}
  }

  type inquiryGetPayload<S extends boolean | null | undefined | inquiryDefaultArgs> = $Result.GetResult<Prisma.$inquiryPayload, S>

  type inquiryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<inquiryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InquiryCountAggregateInputType | true
    }

  export interface inquiryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['inquiry'], meta: { name: 'inquiry' } }
    /**
     * Find zero or one Inquiry that matches the filter.
     * @param {inquiryFindUniqueArgs} args - Arguments to find a Inquiry
     * @example
     * // Get one Inquiry
     * const inquiry = await prisma.inquiry.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends inquiryFindUniqueArgs>(args: SelectSubset<T, inquiryFindUniqueArgs<ExtArgs>>): Prisma__inquiryClient<$Result.GetResult<Prisma.$inquiryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Inquiry that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {inquiryFindUniqueOrThrowArgs} args - Arguments to find a Inquiry
     * @example
     * // Get one Inquiry
     * const inquiry = await prisma.inquiry.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends inquiryFindUniqueOrThrowArgs>(args: SelectSubset<T, inquiryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__inquiryClient<$Result.GetResult<Prisma.$inquiryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Inquiry that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inquiryFindFirstArgs} args - Arguments to find a Inquiry
     * @example
     * // Get one Inquiry
     * const inquiry = await prisma.inquiry.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends inquiryFindFirstArgs>(args?: SelectSubset<T, inquiryFindFirstArgs<ExtArgs>>): Prisma__inquiryClient<$Result.GetResult<Prisma.$inquiryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Inquiry that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inquiryFindFirstOrThrowArgs} args - Arguments to find a Inquiry
     * @example
     * // Get one Inquiry
     * const inquiry = await prisma.inquiry.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends inquiryFindFirstOrThrowArgs>(args?: SelectSubset<T, inquiryFindFirstOrThrowArgs<ExtArgs>>): Prisma__inquiryClient<$Result.GetResult<Prisma.$inquiryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Inquiries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inquiryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Inquiries
     * const inquiries = await prisma.inquiry.findMany()
     * 
     * // Get first 10 Inquiries
     * const inquiries = await prisma.inquiry.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const inquiryWithIdOnly = await prisma.inquiry.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends inquiryFindManyArgs>(args?: SelectSubset<T, inquiryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$inquiryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Inquiry.
     * @param {inquiryCreateArgs} args - Arguments to create a Inquiry.
     * @example
     * // Create one Inquiry
     * const Inquiry = await prisma.inquiry.create({
     *   data: {
     *     // ... data to create a Inquiry
     *   }
     * })
     * 
     */
    create<T extends inquiryCreateArgs>(args: SelectSubset<T, inquiryCreateArgs<ExtArgs>>): Prisma__inquiryClient<$Result.GetResult<Prisma.$inquiryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Inquiries.
     * @param {inquiryCreateManyArgs} args - Arguments to create many Inquiries.
     * @example
     * // Create many Inquiries
     * const inquiry = await prisma.inquiry.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends inquiryCreateManyArgs>(args?: SelectSubset<T, inquiryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Inquiry.
     * @param {inquiryDeleteArgs} args - Arguments to delete one Inquiry.
     * @example
     * // Delete one Inquiry
     * const Inquiry = await prisma.inquiry.delete({
     *   where: {
     *     // ... filter to delete one Inquiry
     *   }
     * })
     * 
     */
    delete<T extends inquiryDeleteArgs>(args: SelectSubset<T, inquiryDeleteArgs<ExtArgs>>): Prisma__inquiryClient<$Result.GetResult<Prisma.$inquiryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Inquiry.
     * @param {inquiryUpdateArgs} args - Arguments to update one Inquiry.
     * @example
     * // Update one Inquiry
     * const inquiry = await prisma.inquiry.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends inquiryUpdateArgs>(args: SelectSubset<T, inquiryUpdateArgs<ExtArgs>>): Prisma__inquiryClient<$Result.GetResult<Prisma.$inquiryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Inquiries.
     * @param {inquiryDeleteManyArgs} args - Arguments to filter Inquiries to delete.
     * @example
     * // Delete a few Inquiries
     * const { count } = await prisma.inquiry.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends inquiryDeleteManyArgs>(args?: SelectSubset<T, inquiryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Inquiries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inquiryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Inquiries
     * const inquiry = await prisma.inquiry.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends inquiryUpdateManyArgs>(args: SelectSubset<T, inquiryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Inquiry.
     * @param {inquiryUpsertArgs} args - Arguments to update or create a Inquiry.
     * @example
     * // Update or create a Inquiry
     * const inquiry = await prisma.inquiry.upsert({
     *   create: {
     *     // ... data to create a Inquiry
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Inquiry we want to update
     *   }
     * })
     */
    upsert<T extends inquiryUpsertArgs>(args: SelectSubset<T, inquiryUpsertArgs<ExtArgs>>): Prisma__inquiryClient<$Result.GetResult<Prisma.$inquiryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Inquiries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inquiryCountArgs} args - Arguments to filter Inquiries to count.
     * @example
     * // Count the number of Inquiries
     * const count = await prisma.inquiry.count({
     *   where: {
     *     // ... the filter for the Inquiries we want to count
     *   }
     * })
    **/
    count<T extends inquiryCountArgs>(
      args?: Subset<T, inquiryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InquiryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Inquiry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InquiryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InquiryAggregateArgs>(args: Subset<T, InquiryAggregateArgs>): Prisma.PrismaPromise<GetInquiryAggregateType<T>>

    /**
     * Group by Inquiry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inquiryGroupByArgs} args - Group by arguments.
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
      T extends inquiryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: inquiryGroupByArgs['orderBy'] }
        : { orderBy?: inquiryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, inquiryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInquiryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the inquiry model
   */
  readonly fields: inquiryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for inquiry.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__inquiryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the inquiry model
   */
  interface inquiryFieldRefs {
    readonly id: FieldRef<"inquiry", 'BigInt'>
    readonly user_id: FieldRef<"inquiry", 'BigInt'>
    readonly title: FieldRef<"inquiry", 'String'>
    readonly content: FieldRef<"inquiry", 'String'>
    readonly created_at: FieldRef<"inquiry", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * inquiry findUnique
   */
  export type inquiryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inquiry
     */
    select?: inquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the inquiry
     */
    omit?: inquiryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inquiryInclude<ExtArgs> | null
    /**
     * Filter, which inquiry to fetch.
     */
    where: inquiryWhereUniqueInput
  }

  /**
   * inquiry findUniqueOrThrow
   */
  export type inquiryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inquiry
     */
    select?: inquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the inquiry
     */
    omit?: inquiryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inquiryInclude<ExtArgs> | null
    /**
     * Filter, which inquiry to fetch.
     */
    where: inquiryWhereUniqueInput
  }

  /**
   * inquiry findFirst
   */
  export type inquiryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inquiry
     */
    select?: inquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the inquiry
     */
    omit?: inquiryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inquiryInclude<ExtArgs> | null
    /**
     * Filter, which inquiry to fetch.
     */
    where?: inquiryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of inquiries to fetch.
     */
    orderBy?: inquiryOrderByWithRelationInput | inquiryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for inquiries.
     */
    cursor?: inquiryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` inquiries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` inquiries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of inquiries.
     */
    distinct?: InquiryScalarFieldEnum | InquiryScalarFieldEnum[]
  }

  /**
   * inquiry findFirstOrThrow
   */
  export type inquiryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inquiry
     */
    select?: inquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the inquiry
     */
    omit?: inquiryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inquiryInclude<ExtArgs> | null
    /**
     * Filter, which inquiry to fetch.
     */
    where?: inquiryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of inquiries to fetch.
     */
    orderBy?: inquiryOrderByWithRelationInput | inquiryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for inquiries.
     */
    cursor?: inquiryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` inquiries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` inquiries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of inquiries.
     */
    distinct?: InquiryScalarFieldEnum | InquiryScalarFieldEnum[]
  }

  /**
   * inquiry findMany
   */
  export type inquiryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inquiry
     */
    select?: inquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the inquiry
     */
    omit?: inquiryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inquiryInclude<ExtArgs> | null
    /**
     * Filter, which inquiries to fetch.
     */
    where?: inquiryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of inquiries to fetch.
     */
    orderBy?: inquiryOrderByWithRelationInput | inquiryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing inquiries.
     */
    cursor?: inquiryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` inquiries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` inquiries.
     */
    skip?: number
    distinct?: InquiryScalarFieldEnum | InquiryScalarFieldEnum[]
  }

  /**
   * inquiry create
   */
  export type inquiryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inquiry
     */
    select?: inquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the inquiry
     */
    omit?: inquiryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inquiryInclude<ExtArgs> | null
    /**
     * The data needed to create a inquiry.
     */
    data: XOR<inquiryCreateInput, inquiryUncheckedCreateInput>
  }

  /**
   * inquiry createMany
   */
  export type inquiryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many inquiries.
     */
    data: inquiryCreateManyInput | inquiryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * inquiry update
   */
  export type inquiryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inquiry
     */
    select?: inquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the inquiry
     */
    omit?: inquiryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inquiryInclude<ExtArgs> | null
    /**
     * The data needed to update a inquiry.
     */
    data: XOR<inquiryUpdateInput, inquiryUncheckedUpdateInput>
    /**
     * Choose, which inquiry to update.
     */
    where: inquiryWhereUniqueInput
  }

  /**
   * inquiry updateMany
   */
  export type inquiryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update inquiries.
     */
    data: XOR<inquiryUpdateManyMutationInput, inquiryUncheckedUpdateManyInput>
    /**
     * Filter which inquiries to update
     */
    where?: inquiryWhereInput
    /**
     * Limit how many inquiries to update.
     */
    limit?: number
  }

  /**
   * inquiry upsert
   */
  export type inquiryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inquiry
     */
    select?: inquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the inquiry
     */
    omit?: inquiryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inquiryInclude<ExtArgs> | null
    /**
     * The filter to search for the inquiry to update in case it exists.
     */
    where: inquiryWhereUniqueInput
    /**
     * In case the inquiry found by the `where` argument doesn't exist, create a new inquiry with this data.
     */
    create: XOR<inquiryCreateInput, inquiryUncheckedCreateInput>
    /**
     * In case the inquiry was found with the provided `where` argument, update it with this data.
     */
    update: XOR<inquiryUpdateInput, inquiryUncheckedUpdateInput>
  }

  /**
   * inquiry delete
   */
  export type inquiryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inquiry
     */
    select?: inquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the inquiry
     */
    omit?: inquiryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inquiryInclude<ExtArgs> | null
    /**
     * Filter which inquiry to delete.
     */
    where: inquiryWhereUniqueInput
  }

  /**
   * inquiry deleteMany
   */
  export type inquiryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which inquiries to delete
     */
    where?: inquiryWhereInput
    /**
     * Limit how many inquiries to delete.
     */
    limit?: number
  }

  /**
   * inquiry without action
   */
  export type inquiryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inquiry
     */
    select?: inquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the inquiry
     */
    omit?: inquiryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inquiryInclude<ExtArgs> | null
  }


  /**
   * Model meal_alert
   */

  export type AggregateMeal_alert = {
    _count: Meal_alertCountAggregateOutputType | null
    _avg: Meal_alertAvgAggregateOutputType | null
    _sum: Meal_alertSumAggregateOutputType | null
    _min: Meal_alertMinAggregateOutputType | null
    _max: Meal_alertMaxAggregateOutputType | null
  }

  export type Meal_alertAvgAggregateOutputType = {
    user_id: number | null
    meal_id: number | null
  }

  export type Meal_alertSumAggregateOutputType = {
    user_id: bigint | null
    meal_id: bigint | null
  }

  export type Meal_alertMinAggregateOutputType = {
    user_id: bigint | null
    meal_id: bigint | null
    enabled: boolean | null
    alarm_time: Date | null
  }

  export type Meal_alertMaxAggregateOutputType = {
    user_id: bigint | null
    meal_id: bigint | null
    enabled: boolean | null
    alarm_time: Date | null
  }

  export type Meal_alertCountAggregateOutputType = {
    user_id: number
    meal_id: number
    enabled: number
    alarm_time: number
    _all: number
  }


  export type Meal_alertAvgAggregateInputType = {
    user_id?: true
    meal_id?: true
  }

  export type Meal_alertSumAggregateInputType = {
    user_id?: true
    meal_id?: true
  }

  export type Meal_alertMinAggregateInputType = {
    user_id?: true
    meal_id?: true
    enabled?: true
    alarm_time?: true
  }

  export type Meal_alertMaxAggregateInputType = {
    user_id?: true
    meal_id?: true
    enabled?: true
    alarm_time?: true
  }

  export type Meal_alertCountAggregateInputType = {
    user_id?: true
    meal_id?: true
    enabled?: true
    alarm_time?: true
    _all?: true
  }

  export type Meal_alertAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which meal_alert to aggregate.
     */
    where?: meal_alertWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of meal_alerts to fetch.
     */
    orderBy?: meal_alertOrderByWithRelationInput | meal_alertOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: meal_alertWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` meal_alerts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` meal_alerts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned meal_alerts
    **/
    _count?: true | Meal_alertCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Meal_alertAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Meal_alertSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Meal_alertMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Meal_alertMaxAggregateInputType
  }

  export type GetMeal_alertAggregateType<T extends Meal_alertAggregateArgs> = {
        [P in keyof T & keyof AggregateMeal_alert]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMeal_alert[P]>
      : GetScalarType<T[P], AggregateMeal_alert[P]>
  }




  export type meal_alertGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: meal_alertWhereInput
    orderBy?: meal_alertOrderByWithAggregationInput | meal_alertOrderByWithAggregationInput[]
    by: Meal_alertScalarFieldEnum[] | Meal_alertScalarFieldEnum
    having?: meal_alertScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Meal_alertCountAggregateInputType | true
    _avg?: Meal_alertAvgAggregateInputType
    _sum?: Meal_alertSumAggregateInputType
    _min?: Meal_alertMinAggregateInputType
    _max?: Meal_alertMaxAggregateInputType
  }

  export type Meal_alertGroupByOutputType = {
    user_id: bigint
    meal_id: bigint
    enabled: boolean | null
    alarm_time: Date | null
    _count: Meal_alertCountAggregateOutputType | null
    _avg: Meal_alertAvgAggregateOutputType | null
    _sum: Meal_alertSumAggregateOutputType | null
    _min: Meal_alertMinAggregateOutputType | null
    _max: Meal_alertMaxAggregateOutputType | null
  }

  type GetMeal_alertGroupByPayload<T extends meal_alertGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Meal_alertGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Meal_alertGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Meal_alertGroupByOutputType[P]>
            : GetScalarType<T[P], Meal_alertGroupByOutputType[P]>
        }
      >
    >


  export type meal_alertSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    meal_id?: boolean
    enabled?: boolean
    alarm_time?: boolean
    meal_time?: boolean | meal_timeDefaultArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["meal_alert"]>



  export type meal_alertSelectScalar = {
    user_id?: boolean
    meal_id?: boolean
    enabled?: boolean
    alarm_time?: boolean
  }

  export type meal_alertOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"user_id" | "meal_id" | "enabled" | "alarm_time", ExtArgs["result"]["meal_alert"]>
  export type meal_alertInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meal_time?: boolean | meal_timeDefaultArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
  }

  export type $meal_alertPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "meal_alert"
    objects: {
      meal_time: Prisma.$meal_timePayload<ExtArgs>
      user: Prisma.$userPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      user_id: bigint
      meal_id: bigint
      enabled: boolean | null
      alarm_time: Date | null
    }, ExtArgs["result"]["meal_alert"]>
    composites: {}
  }

  type meal_alertGetPayload<S extends boolean | null | undefined | meal_alertDefaultArgs> = $Result.GetResult<Prisma.$meal_alertPayload, S>

  type meal_alertCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<meal_alertFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Meal_alertCountAggregateInputType | true
    }

  export interface meal_alertDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['meal_alert'], meta: { name: 'meal_alert' } }
    /**
     * Find zero or one Meal_alert that matches the filter.
     * @param {meal_alertFindUniqueArgs} args - Arguments to find a Meal_alert
     * @example
     * // Get one Meal_alert
     * const meal_alert = await prisma.meal_alert.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends meal_alertFindUniqueArgs>(args: SelectSubset<T, meal_alertFindUniqueArgs<ExtArgs>>): Prisma__meal_alertClient<$Result.GetResult<Prisma.$meal_alertPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Meal_alert that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {meal_alertFindUniqueOrThrowArgs} args - Arguments to find a Meal_alert
     * @example
     * // Get one Meal_alert
     * const meal_alert = await prisma.meal_alert.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends meal_alertFindUniqueOrThrowArgs>(args: SelectSubset<T, meal_alertFindUniqueOrThrowArgs<ExtArgs>>): Prisma__meal_alertClient<$Result.GetResult<Prisma.$meal_alertPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Meal_alert that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {meal_alertFindFirstArgs} args - Arguments to find a Meal_alert
     * @example
     * // Get one Meal_alert
     * const meal_alert = await prisma.meal_alert.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends meal_alertFindFirstArgs>(args?: SelectSubset<T, meal_alertFindFirstArgs<ExtArgs>>): Prisma__meal_alertClient<$Result.GetResult<Prisma.$meal_alertPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Meal_alert that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {meal_alertFindFirstOrThrowArgs} args - Arguments to find a Meal_alert
     * @example
     * // Get one Meal_alert
     * const meal_alert = await prisma.meal_alert.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends meal_alertFindFirstOrThrowArgs>(args?: SelectSubset<T, meal_alertFindFirstOrThrowArgs<ExtArgs>>): Prisma__meal_alertClient<$Result.GetResult<Prisma.$meal_alertPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Meal_alerts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {meal_alertFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Meal_alerts
     * const meal_alerts = await prisma.meal_alert.findMany()
     * 
     * // Get first 10 Meal_alerts
     * const meal_alerts = await prisma.meal_alert.findMany({ take: 10 })
     * 
     * // Only select the `user_id`
     * const meal_alertWithUser_idOnly = await prisma.meal_alert.findMany({ select: { user_id: true } })
     * 
     */
    findMany<T extends meal_alertFindManyArgs>(args?: SelectSubset<T, meal_alertFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$meal_alertPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Meal_alert.
     * @param {meal_alertCreateArgs} args - Arguments to create a Meal_alert.
     * @example
     * // Create one Meal_alert
     * const Meal_alert = await prisma.meal_alert.create({
     *   data: {
     *     // ... data to create a Meal_alert
     *   }
     * })
     * 
     */
    create<T extends meal_alertCreateArgs>(args: SelectSubset<T, meal_alertCreateArgs<ExtArgs>>): Prisma__meal_alertClient<$Result.GetResult<Prisma.$meal_alertPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Meal_alerts.
     * @param {meal_alertCreateManyArgs} args - Arguments to create many Meal_alerts.
     * @example
     * // Create many Meal_alerts
     * const meal_alert = await prisma.meal_alert.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends meal_alertCreateManyArgs>(args?: SelectSubset<T, meal_alertCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Meal_alert.
     * @param {meal_alertDeleteArgs} args - Arguments to delete one Meal_alert.
     * @example
     * // Delete one Meal_alert
     * const Meal_alert = await prisma.meal_alert.delete({
     *   where: {
     *     // ... filter to delete one Meal_alert
     *   }
     * })
     * 
     */
    delete<T extends meal_alertDeleteArgs>(args: SelectSubset<T, meal_alertDeleteArgs<ExtArgs>>): Prisma__meal_alertClient<$Result.GetResult<Prisma.$meal_alertPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Meal_alert.
     * @param {meal_alertUpdateArgs} args - Arguments to update one Meal_alert.
     * @example
     * // Update one Meal_alert
     * const meal_alert = await prisma.meal_alert.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends meal_alertUpdateArgs>(args: SelectSubset<T, meal_alertUpdateArgs<ExtArgs>>): Prisma__meal_alertClient<$Result.GetResult<Prisma.$meal_alertPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Meal_alerts.
     * @param {meal_alertDeleteManyArgs} args - Arguments to filter Meal_alerts to delete.
     * @example
     * // Delete a few Meal_alerts
     * const { count } = await prisma.meal_alert.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends meal_alertDeleteManyArgs>(args?: SelectSubset<T, meal_alertDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Meal_alerts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {meal_alertUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Meal_alerts
     * const meal_alert = await prisma.meal_alert.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends meal_alertUpdateManyArgs>(args: SelectSubset<T, meal_alertUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Meal_alert.
     * @param {meal_alertUpsertArgs} args - Arguments to update or create a Meal_alert.
     * @example
     * // Update or create a Meal_alert
     * const meal_alert = await prisma.meal_alert.upsert({
     *   create: {
     *     // ... data to create a Meal_alert
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Meal_alert we want to update
     *   }
     * })
     */
    upsert<T extends meal_alertUpsertArgs>(args: SelectSubset<T, meal_alertUpsertArgs<ExtArgs>>): Prisma__meal_alertClient<$Result.GetResult<Prisma.$meal_alertPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Meal_alerts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {meal_alertCountArgs} args - Arguments to filter Meal_alerts to count.
     * @example
     * // Count the number of Meal_alerts
     * const count = await prisma.meal_alert.count({
     *   where: {
     *     // ... the filter for the Meal_alerts we want to count
     *   }
     * })
    **/
    count<T extends meal_alertCountArgs>(
      args?: Subset<T, meal_alertCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Meal_alertCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Meal_alert.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Meal_alertAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Meal_alertAggregateArgs>(args: Subset<T, Meal_alertAggregateArgs>): Prisma.PrismaPromise<GetMeal_alertAggregateType<T>>

    /**
     * Group by Meal_alert.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {meal_alertGroupByArgs} args - Group by arguments.
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
      T extends meal_alertGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: meal_alertGroupByArgs['orderBy'] }
        : { orderBy?: meal_alertGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, meal_alertGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMeal_alertGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the meal_alert model
   */
  readonly fields: meal_alertFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for meal_alert.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__meal_alertClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    meal_time<T extends meal_timeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, meal_timeDefaultArgs<ExtArgs>>): Prisma__meal_timeClient<$Result.GetResult<Prisma.$meal_timePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the meal_alert model
   */
  interface meal_alertFieldRefs {
    readonly user_id: FieldRef<"meal_alert", 'BigInt'>
    readonly meal_id: FieldRef<"meal_alert", 'BigInt'>
    readonly enabled: FieldRef<"meal_alert", 'Boolean'>
    readonly alarm_time: FieldRef<"meal_alert", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * meal_alert findUnique
   */
  export type meal_alertFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the meal_alert
     */
    select?: meal_alertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the meal_alert
     */
    omit?: meal_alertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: meal_alertInclude<ExtArgs> | null
    /**
     * Filter, which meal_alert to fetch.
     */
    where: meal_alertWhereUniqueInput
  }

  /**
   * meal_alert findUniqueOrThrow
   */
  export type meal_alertFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the meal_alert
     */
    select?: meal_alertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the meal_alert
     */
    omit?: meal_alertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: meal_alertInclude<ExtArgs> | null
    /**
     * Filter, which meal_alert to fetch.
     */
    where: meal_alertWhereUniqueInput
  }

  /**
   * meal_alert findFirst
   */
  export type meal_alertFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the meal_alert
     */
    select?: meal_alertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the meal_alert
     */
    omit?: meal_alertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: meal_alertInclude<ExtArgs> | null
    /**
     * Filter, which meal_alert to fetch.
     */
    where?: meal_alertWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of meal_alerts to fetch.
     */
    orderBy?: meal_alertOrderByWithRelationInput | meal_alertOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for meal_alerts.
     */
    cursor?: meal_alertWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` meal_alerts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` meal_alerts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of meal_alerts.
     */
    distinct?: Meal_alertScalarFieldEnum | Meal_alertScalarFieldEnum[]
  }

  /**
   * meal_alert findFirstOrThrow
   */
  export type meal_alertFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the meal_alert
     */
    select?: meal_alertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the meal_alert
     */
    omit?: meal_alertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: meal_alertInclude<ExtArgs> | null
    /**
     * Filter, which meal_alert to fetch.
     */
    where?: meal_alertWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of meal_alerts to fetch.
     */
    orderBy?: meal_alertOrderByWithRelationInput | meal_alertOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for meal_alerts.
     */
    cursor?: meal_alertWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` meal_alerts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` meal_alerts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of meal_alerts.
     */
    distinct?: Meal_alertScalarFieldEnum | Meal_alertScalarFieldEnum[]
  }

  /**
   * meal_alert findMany
   */
  export type meal_alertFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the meal_alert
     */
    select?: meal_alertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the meal_alert
     */
    omit?: meal_alertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: meal_alertInclude<ExtArgs> | null
    /**
     * Filter, which meal_alerts to fetch.
     */
    where?: meal_alertWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of meal_alerts to fetch.
     */
    orderBy?: meal_alertOrderByWithRelationInput | meal_alertOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing meal_alerts.
     */
    cursor?: meal_alertWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` meal_alerts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` meal_alerts.
     */
    skip?: number
    distinct?: Meal_alertScalarFieldEnum | Meal_alertScalarFieldEnum[]
  }

  /**
   * meal_alert create
   */
  export type meal_alertCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the meal_alert
     */
    select?: meal_alertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the meal_alert
     */
    omit?: meal_alertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: meal_alertInclude<ExtArgs> | null
    /**
     * The data needed to create a meal_alert.
     */
    data: XOR<meal_alertCreateInput, meal_alertUncheckedCreateInput>
  }

  /**
   * meal_alert createMany
   */
  export type meal_alertCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many meal_alerts.
     */
    data: meal_alertCreateManyInput | meal_alertCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * meal_alert update
   */
  export type meal_alertUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the meal_alert
     */
    select?: meal_alertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the meal_alert
     */
    omit?: meal_alertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: meal_alertInclude<ExtArgs> | null
    /**
     * The data needed to update a meal_alert.
     */
    data: XOR<meal_alertUpdateInput, meal_alertUncheckedUpdateInput>
    /**
     * Choose, which meal_alert to update.
     */
    where: meal_alertWhereUniqueInput
  }

  /**
   * meal_alert updateMany
   */
  export type meal_alertUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update meal_alerts.
     */
    data: XOR<meal_alertUpdateManyMutationInput, meal_alertUncheckedUpdateManyInput>
    /**
     * Filter which meal_alerts to update
     */
    where?: meal_alertWhereInput
    /**
     * Limit how many meal_alerts to update.
     */
    limit?: number
  }

  /**
   * meal_alert upsert
   */
  export type meal_alertUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the meal_alert
     */
    select?: meal_alertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the meal_alert
     */
    omit?: meal_alertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: meal_alertInclude<ExtArgs> | null
    /**
     * The filter to search for the meal_alert to update in case it exists.
     */
    where: meal_alertWhereUniqueInput
    /**
     * In case the meal_alert found by the `where` argument doesn't exist, create a new meal_alert with this data.
     */
    create: XOR<meal_alertCreateInput, meal_alertUncheckedCreateInput>
    /**
     * In case the meal_alert was found with the provided `where` argument, update it with this data.
     */
    update: XOR<meal_alertUpdateInput, meal_alertUncheckedUpdateInput>
  }

  /**
   * meal_alert delete
   */
  export type meal_alertDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the meal_alert
     */
    select?: meal_alertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the meal_alert
     */
    omit?: meal_alertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: meal_alertInclude<ExtArgs> | null
    /**
     * Filter which meal_alert to delete.
     */
    where: meal_alertWhereUniqueInput
  }

  /**
   * meal_alert deleteMany
   */
  export type meal_alertDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which meal_alerts to delete
     */
    where?: meal_alertWhereInput
    /**
     * Limit how many meal_alerts to delete.
     */
    limit?: number
  }

  /**
   * meal_alert without action
   */
  export type meal_alertDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the meal_alert
     */
    select?: meal_alertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the meal_alert
     */
    omit?: meal_alertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: meal_alertInclude<ExtArgs> | null
  }


  /**
   * Model meal_time
   */

  export type AggregateMeal_time = {
    _count: Meal_timeCountAggregateOutputType | null
    _avg: Meal_timeAvgAggregateOutputType | null
    _sum: Meal_timeSumAggregateOutputType | null
    _min: Meal_timeMinAggregateOutputType | null
    _max: Meal_timeMaxAggregateOutputType | null
  }

  export type Meal_timeAvgAggregateOutputType = {
    id: number | null
  }

  export type Meal_timeSumAggregateOutputType = {
    id: bigint | null
  }

  export type Meal_timeMinAggregateOutputType = {
    id: bigint | null
    alert_time: Date | null
    comment: string | null
  }

  export type Meal_timeMaxAggregateOutputType = {
    id: bigint | null
    alert_time: Date | null
    comment: string | null
  }

  export type Meal_timeCountAggregateOutputType = {
    id: number
    alert_time: number
    comment: number
    _all: number
  }


  export type Meal_timeAvgAggregateInputType = {
    id?: true
  }

  export type Meal_timeSumAggregateInputType = {
    id?: true
  }

  export type Meal_timeMinAggregateInputType = {
    id?: true
    alert_time?: true
    comment?: true
  }

  export type Meal_timeMaxAggregateInputType = {
    id?: true
    alert_time?: true
    comment?: true
  }

  export type Meal_timeCountAggregateInputType = {
    id?: true
    alert_time?: true
    comment?: true
    _all?: true
  }

  export type Meal_timeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which meal_time to aggregate.
     */
    where?: meal_timeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of meal_times to fetch.
     */
    orderBy?: meal_timeOrderByWithRelationInput | meal_timeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: meal_timeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` meal_times from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` meal_times.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned meal_times
    **/
    _count?: true | Meal_timeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Meal_timeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Meal_timeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Meal_timeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Meal_timeMaxAggregateInputType
  }

  export type GetMeal_timeAggregateType<T extends Meal_timeAggregateArgs> = {
        [P in keyof T & keyof AggregateMeal_time]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMeal_time[P]>
      : GetScalarType<T[P], AggregateMeal_time[P]>
  }




  export type meal_timeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: meal_timeWhereInput
    orderBy?: meal_timeOrderByWithAggregationInput | meal_timeOrderByWithAggregationInput[]
    by: Meal_timeScalarFieldEnum[] | Meal_timeScalarFieldEnum
    having?: meal_timeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Meal_timeCountAggregateInputType | true
    _avg?: Meal_timeAvgAggregateInputType
    _sum?: Meal_timeSumAggregateInputType
    _min?: Meal_timeMinAggregateInputType
    _max?: Meal_timeMaxAggregateInputType
  }

  export type Meal_timeGroupByOutputType = {
    id: bigint
    alert_time: Date | null
    comment: string | null
    _count: Meal_timeCountAggregateOutputType | null
    _avg: Meal_timeAvgAggregateOutputType | null
    _sum: Meal_timeSumAggregateOutputType | null
    _min: Meal_timeMinAggregateOutputType | null
    _max: Meal_timeMaxAggregateOutputType | null
  }

  type GetMeal_timeGroupByPayload<T extends meal_timeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Meal_timeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Meal_timeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Meal_timeGroupByOutputType[P]>
            : GetScalarType<T[P], Meal_timeGroupByOutputType[P]>
        }
      >
    >


  export type meal_timeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    alert_time?: boolean
    comment?: boolean
    meal_alert?: boolean | meal_time$meal_alertArgs<ExtArgs>
    _count?: boolean | Meal_timeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["meal_time"]>



  export type meal_timeSelectScalar = {
    id?: boolean
    alert_time?: boolean
    comment?: boolean
  }

  export type meal_timeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "alert_time" | "comment", ExtArgs["result"]["meal_time"]>
  export type meal_timeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meal_alert?: boolean | meal_time$meal_alertArgs<ExtArgs>
    _count?: boolean | Meal_timeCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $meal_timePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "meal_time"
    objects: {
      meal_alert: Prisma.$meal_alertPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      alert_time: Date | null
      comment: string | null
    }, ExtArgs["result"]["meal_time"]>
    composites: {}
  }

  type meal_timeGetPayload<S extends boolean | null | undefined | meal_timeDefaultArgs> = $Result.GetResult<Prisma.$meal_timePayload, S>

  type meal_timeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<meal_timeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Meal_timeCountAggregateInputType | true
    }

  export interface meal_timeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['meal_time'], meta: { name: 'meal_time' } }
    /**
     * Find zero or one Meal_time that matches the filter.
     * @param {meal_timeFindUniqueArgs} args - Arguments to find a Meal_time
     * @example
     * // Get one Meal_time
     * const meal_time = await prisma.meal_time.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends meal_timeFindUniqueArgs>(args: SelectSubset<T, meal_timeFindUniqueArgs<ExtArgs>>): Prisma__meal_timeClient<$Result.GetResult<Prisma.$meal_timePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Meal_time that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {meal_timeFindUniqueOrThrowArgs} args - Arguments to find a Meal_time
     * @example
     * // Get one Meal_time
     * const meal_time = await prisma.meal_time.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends meal_timeFindUniqueOrThrowArgs>(args: SelectSubset<T, meal_timeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__meal_timeClient<$Result.GetResult<Prisma.$meal_timePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Meal_time that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {meal_timeFindFirstArgs} args - Arguments to find a Meal_time
     * @example
     * // Get one Meal_time
     * const meal_time = await prisma.meal_time.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends meal_timeFindFirstArgs>(args?: SelectSubset<T, meal_timeFindFirstArgs<ExtArgs>>): Prisma__meal_timeClient<$Result.GetResult<Prisma.$meal_timePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Meal_time that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {meal_timeFindFirstOrThrowArgs} args - Arguments to find a Meal_time
     * @example
     * // Get one Meal_time
     * const meal_time = await prisma.meal_time.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends meal_timeFindFirstOrThrowArgs>(args?: SelectSubset<T, meal_timeFindFirstOrThrowArgs<ExtArgs>>): Prisma__meal_timeClient<$Result.GetResult<Prisma.$meal_timePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Meal_times that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {meal_timeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Meal_times
     * const meal_times = await prisma.meal_time.findMany()
     * 
     * // Get first 10 Meal_times
     * const meal_times = await prisma.meal_time.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const meal_timeWithIdOnly = await prisma.meal_time.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends meal_timeFindManyArgs>(args?: SelectSubset<T, meal_timeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$meal_timePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Meal_time.
     * @param {meal_timeCreateArgs} args - Arguments to create a Meal_time.
     * @example
     * // Create one Meal_time
     * const Meal_time = await prisma.meal_time.create({
     *   data: {
     *     // ... data to create a Meal_time
     *   }
     * })
     * 
     */
    create<T extends meal_timeCreateArgs>(args: SelectSubset<T, meal_timeCreateArgs<ExtArgs>>): Prisma__meal_timeClient<$Result.GetResult<Prisma.$meal_timePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Meal_times.
     * @param {meal_timeCreateManyArgs} args - Arguments to create many Meal_times.
     * @example
     * // Create many Meal_times
     * const meal_time = await prisma.meal_time.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends meal_timeCreateManyArgs>(args?: SelectSubset<T, meal_timeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Meal_time.
     * @param {meal_timeDeleteArgs} args - Arguments to delete one Meal_time.
     * @example
     * // Delete one Meal_time
     * const Meal_time = await prisma.meal_time.delete({
     *   where: {
     *     // ... filter to delete one Meal_time
     *   }
     * })
     * 
     */
    delete<T extends meal_timeDeleteArgs>(args: SelectSubset<T, meal_timeDeleteArgs<ExtArgs>>): Prisma__meal_timeClient<$Result.GetResult<Prisma.$meal_timePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Meal_time.
     * @param {meal_timeUpdateArgs} args - Arguments to update one Meal_time.
     * @example
     * // Update one Meal_time
     * const meal_time = await prisma.meal_time.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends meal_timeUpdateArgs>(args: SelectSubset<T, meal_timeUpdateArgs<ExtArgs>>): Prisma__meal_timeClient<$Result.GetResult<Prisma.$meal_timePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Meal_times.
     * @param {meal_timeDeleteManyArgs} args - Arguments to filter Meal_times to delete.
     * @example
     * // Delete a few Meal_times
     * const { count } = await prisma.meal_time.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends meal_timeDeleteManyArgs>(args?: SelectSubset<T, meal_timeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Meal_times.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {meal_timeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Meal_times
     * const meal_time = await prisma.meal_time.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends meal_timeUpdateManyArgs>(args: SelectSubset<T, meal_timeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Meal_time.
     * @param {meal_timeUpsertArgs} args - Arguments to update or create a Meal_time.
     * @example
     * // Update or create a Meal_time
     * const meal_time = await prisma.meal_time.upsert({
     *   create: {
     *     // ... data to create a Meal_time
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Meal_time we want to update
     *   }
     * })
     */
    upsert<T extends meal_timeUpsertArgs>(args: SelectSubset<T, meal_timeUpsertArgs<ExtArgs>>): Prisma__meal_timeClient<$Result.GetResult<Prisma.$meal_timePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Meal_times.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {meal_timeCountArgs} args - Arguments to filter Meal_times to count.
     * @example
     * // Count the number of Meal_times
     * const count = await prisma.meal_time.count({
     *   where: {
     *     // ... the filter for the Meal_times we want to count
     *   }
     * })
    **/
    count<T extends meal_timeCountArgs>(
      args?: Subset<T, meal_timeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Meal_timeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Meal_time.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Meal_timeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Meal_timeAggregateArgs>(args: Subset<T, Meal_timeAggregateArgs>): Prisma.PrismaPromise<GetMeal_timeAggregateType<T>>

    /**
     * Group by Meal_time.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {meal_timeGroupByArgs} args - Group by arguments.
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
      T extends meal_timeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: meal_timeGroupByArgs['orderBy'] }
        : { orderBy?: meal_timeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, meal_timeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMeal_timeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the meal_time model
   */
  readonly fields: meal_timeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for meal_time.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__meal_timeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    meal_alert<T extends meal_time$meal_alertArgs<ExtArgs> = {}>(args?: Subset<T, meal_time$meal_alertArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$meal_alertPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the meal_time model
   */
  interface meal_timeFieldRefs {
    readonly id: FieldRef<"meal_time", 'BigInt'>
    readonly alert_time: FieldRef<"meal_time", 'DateTime'>
    readonly comment: FieldRef<"meal_time", 'String'>
  }
    

  // Custom InputTypes
  /**
   * meal_time findUnique
   */
  export type meal_timeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the meal_time
     */
    select?: meal_timeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the meal_time
     */
    omit?: meal_timeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: meal_timeInclude<ExtArgs> | null
    /**
     * Filter, which meal_time to fetch.
     */
    where: meal_timeWhereUniqueInput
  }

  /**
   * meal_time findUniqueOrThrow
   */
  export type meal_timeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the meal_time
     */
    select?: meal_timeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the meal_time
     */
    omit?: meal_timeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: meal_timeInclude<ExtArgs> | null
    /**
     * Filter, which meal_time to fetch.
     */
    where: meal_timeWhereUniqueInput
  }

  /**
   * meal_time findFirst
   */
  export type meal_timeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the meal_time
     */
    select?: meal_timeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the meal_time
     */
    omit?: meal_timeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: meal_timeInclude<ExtArgs> | null
    /**
     * Filter, which meal_time to fetch.
     */
    where?: meal_timeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of meal_times to fetch.
     */
    orderBy?: meal_timeOrderByWithRelationInput | meal_timeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for meal_times.
     */
    cursor?: meal_timeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` meal_times from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` meal_times.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of meal_times.
     */
    distinct?: Meal_timeScalarFieldEnum | Meal_timeScalarFieldEnum[]
  }

  /**
   * meal_time findFirstOrThrow
   */
  export type meal_timeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the meal_time
     */
    select?: meal_timeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the meal_time
     */
    omit?: meal_timeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: meal_timeInclude<ExtArgs> | null
    /**
     * Filter, which meal_time to fetch.
     */
    where?: meal_timeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of meal_times to fetch.
     */
    orderBy?: meal_timeOrderByWithRelationInput | meal_timeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for meal_times.
     */
    cursor?: meal_timeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` meal_times from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` meal_times.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of meal_times.
     */
    distinct?: Meal_timeScalarFieldEnum | Meal_timeScalarFieldEnum[]
  }

  /**
   * meal_time findMany
   */
  export type meal_timeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the meal_time
     */
    select?: meal_timeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the meal_time
     */
    omit?: meal_timeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: meal_timeInclude<ExtArgs> | null
    /**
     * Filter, which meal_times to fetch.
     */
    where?: meal_timeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of meal_times to fetch.
     */
    orderBy?: meal_timeOrderByWithRelationInput | meal_timeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing meal_times.
     */
    cursor?: meal_timeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` meal_times from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` meal_times.
     */
    skip?: number
    distinct?: Meal_timeScalarFieldEnum | Meal_timeScalarFieldEnum[]
  }

  /**
   * meal_time create
   */
  export type meal_timeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the meal_time
     */
    select?: meal_timeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the meal_time
     */
    omit?: meal_timeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: meal_timeInclude<ExtArgs> | null
    /**
     * The data needed to create a meal_time.
     */
    data?: XOR<meal_timeCreateInput, meal_timeUncheckedCreateInput>
  }

  /**
   * meal_time createMany
   */
  export type meal_timeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many meal_times.
     */
    data: meal_timeCreateManyInput | meal_timeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * meal_time update
   */
  export type meal_timeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the meal_time
     */
    select?: meal_timeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the meal_time
     */
    omit?: meal_timeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: meal_timeInclude<ExtArgs> | null
    /**
     * The data needed to update a meal_time.
     */
    data: XOR<meal_timeUpdateInput, meal_timeUncheckedUpdateInput>
    /**
     * Choose, which meal_time to update.
     */
    where: meal_timeWhereUniqueInput
  }

  /**
   * meal_time updateMany
   */
  export type meal_timeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update meal_times.
     */
    data: XOR<meal_timeUpdateManyMutationInput, meal_timeUncheckedUpdateManyInput>
    /**
     * Filter which meal_times to update
     */
    where?: meal_timeWhereInput
    /**
     * Limit how many meal_times to update.
     */
    limit?: number
  }

  /**
   * meal_time upsert
   */
  export type meal_timeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the meal_time
     */
    select?: meal_timeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the meal_time
     */
    omit?: meal_timeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: meal_timeInclude<ExtArgs> | null
    /**
     * The filter to search for the meal_time to update in case it exists.
     */
    where: meal_timeWhereUniqueInput
    /**
     * In case the meal_time found by the `where` argument doesn't exist, create a new meal_time with this data.
     */
    create: XOR<meal_timeCreateInput, meal_timeUncheckedCreateInput>
    /**
     * In case the meal_time was found with the provided `where` argument, update it with this data.
     */
    update: XOR<meal_timeUpdateInput, meal_timeUncheckedUpdateInput>
  }

  /**
   * meal_time delete
   */
  export type meal_timeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the meal_time
     */
    select?: meal_timeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the meal_time
     */
    omit?: meal_timeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: meal_timeInclude<ExtArgs> | null
    /**
     * Filter which meal_time to delete.
     */
    where: meal_timeWhereUniqueInput
  }

  /**
   * meal_time deleteMany
   */
  export type meal_timeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which meal_times to delete
     */
    where?: meal_timeWhereInput
    /**
     * Limit how many meal_times to delete.
     */
    limit?: number
  }

  /**
   * meal_time.meal_alert
   */
  export type meal_time$meal_alertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the meal_alert
     */
    select?: meal_alertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the meal_alert
     */
    omit?: meal_alertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: meal_alertInclude<ExtArgs> | null
    where?: meal_alertWhereInput
    orderBy?: meal_alertOrderByWithRelationInput | meal_alertOrderByWithRelationInput[]
    cursor?: meal_alertWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Meal_alertScalarFieldEnum | Meal_alertScalarFieldEnum[]
  }

  /**
   * meal_time without action
   */
  export type meal_timeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the meal_time
     */
    select?: meal_timeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the meal_time
     */
    omit?: meal_timeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: meal_timeInclude<ExtArgs> | null
  }


  /**
   * Model user_allergy
   */

  export type AggregateUser_allergy = {
    _count: User_allergyCountAggregateOutputType | null
    _avg: User_allergyAvgAggregateOutputType | null
    _sum: User_allergySumAggregateOutputType | null
    _min: User_allergyMinAggregateOutputType | null
    _max: User_allergyMaxAggregateOutputType | null
  }

  export type User_allergyAvgAggregateOutputType = {
    user_id: number | null
    allergy_id: number | null
  }

  export type User_allergySumAggregateOutputType = {
    user_id: bigint | null
    allergy_id: bigint | null
  }

  export type User_allergyMinAggregateOutputType = {
    user_id: bigint | null
    allergy_id: bigint | null
  }

  export type User_allergyMaxAggregateOutputType = {
    user_id: bigint | null
    allergy_id: bigint | null
  }

  export type User_allergyCountAggregateOutputType = {
    user_id: number
    allergy_id: number
    _all: number
  }


  export type User_allergyAvgAggregateInputType = {
    user_id?: true
    allergy_id?: true
  }

  export type User_allergySumAggregateInputType = {
    user_id?: true
    allergy_id?: true
  }

  export type User_allergyMinAggregateInputType = {
    user_id?: true
    allergy_id?: true
  }

  export type User_allergyMaxAggregateInputType = {
    user_id?: true
    allergy_id?: true
  }

  export type User_allergyCountAggregateInputType = {
    user_id?: true
    allergy_id?: true
    _all?: true
  }

  export type User_allergyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user_allergy to aggregate.
     */
    where?: user_allergyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_allergies to fetch.
     */
    orderBy?: user_allergyOrderByWithRelationInput | user_allergyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: user_allergyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_allergies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_allergies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned user_allergies
    **/
    _count?: true | User_allergyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: User_allergyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: User_allergySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: User_allergyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: User_allergyMaxAggregateInputType
  }

  export type GetUser_allergyAggregateType<T extends User_allergyAggregateArgs> = {
        [P in keyof T & keyof AggregateUser_allergy]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser_allergy[P]>
      : GetScalarType<T[P], AggregateUser_allergy[P]>
  }




  export type user_allergyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_allergyWhereInput
    orderBy?: user_allergyOrderByWithAggregationInput | user_allergyOrderByWithAggregationInput[]
    by: User_allergyScalarFieldEnum[] | User_allergyScalarFieldEnum
    having?: user_allergyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: User_allergyCountAggregateInputType | true
    _avg?: User_allergyAvgAggregateInputType
    _sum?: User_allergySumAggregateInputType
    _min?: User_allergyMinAggregateInputType
    _max?: User_allergyMaxAggregateInputType
  }

  export type User_allergyGroupByOutputType = {
    user_id: bigint
    allergy_id: bigint
    _count: User_allergyCountAggregateOutputType | null
    _avg: User_allergyAvgAggregateOutputType | null
    _sum: User_allergySumAggregateOutputType | null
    _min: User_allergyMinAggregateOutputType | null
    _max: User_allergyMaxAggregateOutputType | null
  }

  type GetUser_allergyGroupByPayload<T extends user_allergyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<User_allergyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof User_allergyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], User_allergyGroupByOutputType[P]>
            : GetScalarType<T[P], User_allergyGroupByOutputType[P]>
        }
      >
    >


  export type user_allergySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    allergy_id?: boolean
    allergy_min?: boolean | allergy_minDefaultArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user_allergy"]>



  export type user_allergySelectScalar = {
    user_id?: boolean
    allergy_id?: boolean
  }

  export type user_allergyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"user_id" | "allergy_id", ExtArgs["result"]["user_allergy"]>
  export type user_allergyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    allergy_min?: boolean | allergy_minDefaultArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
  }

  export type $user_allergyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user_allergy"
    objects: {
      allergy_min: Prisma.$allergy_minPayload<ExtArgs>
      user: Prisma.$userPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      user_id: bigint
      allergy_id: bigint
    }, ExtArgs["result"]["user_allergy"]>
    composites: {}
  }

  type user_allergyGetPayload<S extends boolean | null | undefined | user_allergyDefaultArgs> = $Result.GetResult<Prisma.$user_allergyPayload, S>

  type user_allergyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<user_allergyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: User_allergyCountAggregateInputType | true
    }

  export interface user_allergyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user_allergy'], meta: { name: 'user_allergy' } }
    /**
     * Find zero or one User_allergy that matches the filter.
     * @param {user_allergyFindUniqueArgs} args - Arguments to find a User_allergy
     * @example
     * // Get one User_allergy
     * const user_allergy = await prisma.user_allergy.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends user_allergyFindUniqueArgs>(args: SelectSubset<T, user_allergyFindUniqueArgs<ExtArgs>>): Prisma__user_allergyClient<$Result.GetResult<Prisma.$user_allergyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User_allergy that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {user_allergyFindUniqueOrThrowArgs} args - Arguments to find a User_allergy
     * @example
     * // Get one User_allergy
     * const user_allergy = await prisma.user_allergy.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends user_allergyFindUniqueOrThrowArgs>(args: SelectSubset<T, user_allergyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__user_allergyClient<$Result.GetResult<Prisma.$user_allergyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User_allergy that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_allergyFindFirstArgs} args - Arguments to find a User_allergy
     * @example
     * // Get one User_allergy
     * const user_allergy = await prisma.user_allergy.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends user_allergyFindFirstArgs>(args?: SelectSubset<T, user_allergyFindFirstArgs<ExtArgs>>): Prisma__user_allergyClient<$Result.GetResult<Prisma.$user_allergyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User_allergy that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_allergyFindFirstOrThrowArgs} args - Arguments to find a User_allergy
     * @example
     * // Get one User_allergy
     * const user_allergy = await prisma.user_allergy.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends user_allergyFindFirstOrThrowArgs>(args?: SelectSubset<T, user_allergyFindFirstOrThrowArgs<ExtArgs>>): Prisma__user_allergyClient<$Result.GetResult<Prisma.$user_allergyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more User_allergies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_allergyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all User_allergies
     * const user_allergies = await prisma.user_allergy.findMany()
     * 
     * // Get first 10 User_allergies
     * const user_allergies = await prisma.user_allergy.findMany({ take: 10 })
     * 
     * // Only select the `user_id`
     * const user_allergyWithUser_idOnly = await prisma.user_allergy.findMany({ select: { user_id: true } })
     * 
     */
    findMany<T extends user_allergyFindManyArgs>(args?: SelectSubset<T, user_allergyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_allergyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User_allergy.
     * @param {user_allergyCreateArgs} args - Arguments to create a User_allergy.
     * @example
     * // Create one User_allergy
     * const User_allergy = await prisma.user_allergy.create({
     *   data: {
     *     // ... data to create a User_allergy
     *   }
     * })
     * 
     */
    create<T extends user_allergyCreateArgs>(args: SelectSubset<T, user_allergyCreateArgs<ExtArgs>>): Prisma__user_allergyClient<$Result.GetResult<Prisma.$user_allergyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many User_allergies.
     * @param {user_allergyCreateManyArgs} args - Arguments to create many User_allergies.
     * @example
     * // Create many User_allergies
     * const user_allergy = await prisma.user_allergy.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends user_allergyCreateManyArgs>(args?: SelectSubset<T, user_allergyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User_allergy.
     * @param {user_allergyDeleteArgs} args - Arguments to delete one User_allergy.
     * @example
     * // Delete one User_allergy
     * const User_allergy = await prisma.user_allergy.delete({
     *   where: {
     *     // ... filter to delete one User_allergy
     *   }
     * })
     * 
     */
    delete<T extends user_allergyDeleteArgs>(args: SelectSubset<T, user_allergyDeleteArgs<ExtArgs>>): Prisma__user_allergyClient<$Result.GetResult<Prisma.$user_allergyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User_allergy.
     * @param {user_allergyUpdateArgs} args - Arguments to update one User_allergy.
     * @example
     * // Update one User_allergy
     * const user_allergy = await prisma.user_allergy.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends user_allergyUpdateArgs>(args: SelectSubset<T, user_allergyUpdateArgs<ExtArgs>>): Prisma__user_allergyClient<$Result.GetResult<Prisma.$user_allergyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more User_allergies.
     * @param {user_allergyDeleteManyArgs} args - Arguments to filter User_allergies to delete.
     * @example
     * // Delete a few User_allergies
     * const { count } = await prisma.user_allergy.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends user_allergyDeleteManyArgs>(args?: SelectSubset<T, user_allergyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more User_allergies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_allergyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many User_allergies
     * const user_allergy = await prisma.user_allergy.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends user_allergyUpdateManyArgs>(args: SelectSubset<T, user_allergyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User_allergy.
     * @param {user_allergyUpsertArgs} args - Arguments to update or create a User_allergy.
     * @example
     * // Update or create a User_allergy
     * const user_allergy = await prisma.user_allergy.upsert({
     *   create: {
     *     // ... data to create a User_allergy
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User_allergy we want to update
     *   }
     * })
     */
    upsert<T extends user_allergyUpsertArgs>(args: SelectSubset<T, user_allergyUpsertArgs<ExtArgs>>): Prisma__user_allergyClient<$Result.GetResult<Prisma.$user_allergyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of User_allergies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_allergyCountArgs} args - Arguments to filter User_allergies to count.
     * @example
     * // Count the number of User_allergies
     * const count = await prisma.user_allergy.count({
     *   where: {
     *     // ... the filter for the User_allergies we want to count
     *   }
     * })
    **/
    count<T extends user_allergyCountArgs>(
      args?: Subset<T, user_allergyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], User_allergyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User_allergy.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_allergyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends User_allergyAggregateArgs>(args: Subset<T, User_allergyAggregateArgs>): Prisma.PrismaPromise<GetUser_allergyAggregateType<T>>

    /**
     * Group by User_allergy.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_allergyGroupByArgs} args - Group by arguments.
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
      T extends user_allergyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: user_allergyGroupByArgs['orderBy'] }
        : { orderBy?: user_allergyGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, user_allergyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUser_allergyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user_allergy model
   */
  readonly fields: user_allergyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user_allergy.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__user_allergyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    allergy_min<T extends allergy_minDefaultArgs<ExtArgs> = {}>(args?: Subset<T, allergy_minDefaultArgs<ExtArgs>>): Prisma__allergy_minClient<$Result.GetResult<Prisma.$allergy_minPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the user_allergy model
   */
  interface user_allergyFieldRefs {
    readonly user_id: FieldRef<"user_allergy", 'BigInt'>
    readonly allergy_id: FieldRef<"user_allergy", 'BigInt'>
  }
    

  // Custom InputTypes
  /**
   * user_allergy findUnique
   */
  export type user_allergyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_allergy
     */
    select?: user_allergySelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_allergy
     */
    omit?: user_allergyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_allergyInclude<ExtArgs> | null
    /**
     * Filter, which user_allergy to fetch.
     */
    where: user_allergyWhereUniqueInput
  }

  /**
   * user_allergy findUniqueOrThrow
   */
  export type user_allergyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_allergy
     */
    select?: user_allergySelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_allergy
     */
    omit?: user_allergyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_allergyInclude<ExtArgs> | null
    /**
     * Filter, which user_allergy to fetch.
     */
    where: user_allergyWhereUniqueInput
  }

  /**
   * user_allergy findFirst
   */
  export type user_allergyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_allergy
     */
    select?: user_allergySelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_allergy
     */
    omit?: user_allergyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_allergyInclude<ExtArgs> | null
    /**
     * Filter, which user_allergy to fetch.
     */
    where?: user_allergyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_allergies to fetch.
     */
    orderBy?: user_allergyOrderByWithRelationInput | user_allergyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_allergies.
     */
    cursor?: user_allergyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_allergies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_allergies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_allergies.
     */
    distinct?: User_allergyScalarFieldEnum | User_allergyScalarFieldEnum[]
  }

  /**
   * user_allergy findFirstOrThrow
   */
  export type user_allergyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_allergy
     */
    select?: user_allergySelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_allergy
     */
    omit?: user_allergyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_allergyInclude<ExtArgs> | null
    /**
     * Filter, which user_allergy to fetch.
     */
    where?: user_allergyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_allergies to fetch.
     */
    orderBy?: user_allergyOrderByWithRelationInput | user_allergyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_allergies.
     */
    cursor?: user_allergyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_allergies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_allergies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_allergies.
     */
    distinct?: User_allergyScalarFieldEnum | User_allergyScalarFieldEnum[]
  }

  /**
   * user_allergy findMany
   */
  export type user_allergyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_allergy
     */
    select?: user_allergySelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_allergy
     */
    omit?: user_allergyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_allergyInclude<ExtArgs> | null
    /**
     * Filter, which user_allergies to fetch.
     */
    where?: user_allergyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_allergies to fetch.
     */
    orderBy?: user_allergyOrderByWithRelationInput | user_allergyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing user_allergies.
     */
    cursor?: user_allergyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_allergies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_allergies.
     */
    skip?: number
    distinct?: User_allergyScalarFieldEnum | User_allergyScalarFieldEnum[]
  }

  /**
   * user_allergy create
   */
  export type user_allergyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_allergy
     */
    select?: user_allergySelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_allergy
     */
    omit?: user_allergyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_allergyInclude<ExtArgs> | null
    /**
     * The data needed to create a user_allergy.
     */
    data: XOR<user_allergyCreateInput, user_allergyUncheckedCreateInput>
  }

  /**
   * user_allergy createMany
   */
  export type user_allergyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many user_allergies.
     */
    data: user_allergyCreateManyInput | user_allergyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user_allergy update
   */
  export type user_allergyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_allergy
     */
    select?: user_allergySelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_allergy
     */
    omit?: user_allergyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_allergyInclude<ExtArgs> | null
    /**
     * The data needed to update a user_allergy.
     */
    data: XOR<user_allergyUpdateInput, user_allergyUncheckedUpdateInput>
    /**
     * Choose, which user_allergy to update.
     */
    where: user_allergyWhereUniqueInput
  }

  /**
   * user_allergy updateMany
   */
  export type user_allergyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update user_allergies.
     */
    data: XOR<user_allergyUpdateManyMutationInput, user_allergyUncheckedUpdateManyInput>
    /**
     * Filter which user_allergies to update
     */
    where?: user_allergyWhereInput
    /**
     * Limit how many user_allergies to update.
     */
    limit?: number
  }

  /**
   * user_allergy upsert
   */
  export type user_allergyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_allergy
     */
    select?: user_allergySelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_allergy
     */
    omit?: user_allergyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_allergyInclude<ExtArgs> | null
    /**
     * The filter to search for the user_allergy to update in case it exists.
     */
    where: user_allergyWhereUniqueInput
    /**
     * In case the user_allergy found by the `where` argument doesn't exist, create a new user_allergy with this data.
     */
    create: XOR<user_allergyCreateInput, user_allergyUncheckedCreateInput>
    /**
     * In case the user_allergy was found with the provided `where` argument, update it with this data.
     */
    update: XOR<user_allergyUpdateInput, user_allergyUncheckedUpdateInput>
  }

  /**
   * user_allergy delete
   */
  export type user_allergyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_allergy
     */
    select?: user_allergySelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_allergy
     */
    omit?: user_allergyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_allergyInclude<ExtArgs> | null
    /**
     * Filter which user_allergy to delete.
     */
    where: user_allergyWhereUniqueInput
  }

  /**
   * user_allergy deleteMany
   */
  export type user_allergyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user_allergies to delete
     */
    where?: user_allergyWhereInput
    /**
     * Limit how many user_allergies to delete.
     */
    limit?: number
  }

  /**
   * user_allergy without action
   */
  export type user_allergyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_allergy
     */
    select?: user_allergySelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_allergy
     */
    omit?: user_allergyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_allergyInclude<ExtArgs> | null
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
    id: 'id',
    phone_num: 'phone_num',
    nickname: 'nickname',
    exercise: 'exercise'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const Agreement_consentScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    terms_of_service: 'terms_of_service',
    privacy_policy: 'privacy_policy',
    location_service: 'location_service',
    is_over14: 'is_over14',
    created_at: 'created_at'
  };

  export type Agreement_consentScalarFieldEnum = (typeof Agreement_consentScalarFieldEnum)[keyof typeof Agreement_consentScalarFieldEnum]


  export const Allergy_minScalarFieldEnum: {
    id: 'id',
    allergy: 'allergy'
  };

  export type Allergy_minScalarFieldEnum = (typeof Allergy_minScalarFieldEnum)[keyof typeof Allergy_minScalarFieldEnum]


  export const InquiryScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    title: 'title',
    content: 'content',
    created_at: 'created_at'
  };

  export type InquiryScalarFieldEnum = (typeof InquiryScalarFieldEnum)[keyof typeof InquiryScalarFieldEnum]


  export const Meal_alertScalarFieldEnum: {
    user_id: 'user_id',
    meal_id: 'meal_id',
    enabled: 'enabled',
    alarm_time: 'alarm_time'
  };

  export type Meal_alertScalarFieldEnum = (typeof Meal_alertScalarFieldEnum)[keyof typeof Meal_alertScalarFieldEnum]


  export const Meal_timeScalarFieldEnum: {
    id: 'id',
    alert_time: 'alert_time',
    comment: 'comment'
  };

  export type Meal_timeScalarFieldEnum = (typeof Meal_timeScalarFieldEnum)[keyof typeof Meal_timeScalarFieldEnum]


  export const User_allergyScalarFieldEnum: {
    user_id: 'user_id',
    allergy_id: 'allergy_id'
  };

  export type User_allergyScalarFieldEnum = (typeof User_allergyScalarFieldEnum)[keyof typeof User_allergyScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const userOrderByRelevanceFieldEnum: {
    phone_num: 'phone_num',
    nickname: 'nickname'
  };

  export type userOrderByRelevanceFieldEnum = (typeof userOrderByRelevanceFieldEnum)[keyof typeof userOrderByRelevanceFieldEnum]


  export const allergy_minOrderByRelevanceFieldEnum: {
    allergy: 'allergy'
  };

  export type allergy_minOrderByRelevanceFieldEnum = (typeof allergy_minOrderByRelevanceFieldEnum)[keyof typeof allergy_minOrderByRelevanceFieldEnum]


  export const inquiryOrderByRelevanceFieldEnum: {
    title: 'title',
    content: 'content'
  };

  export type inquiryOrderByRelevanceFieldEnum = (typeof inquiryOrderByRelevanceFieldEnum)[keyof typeof inquiryOrderByRelevanceFieldEnum]


  export const meal_timeOrderByRelevanceFieldEnum: {
    comment: 'comment'
  };

  export type meal_timeOrderByRelevanceFieldEnum = (typeof meal_timeOrderByRelevanceFieldEnum)[keyof typeof meal_timeOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'user_exercise'
   */
  export type Enumuser_exerciseFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'user_exercise'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type userWhereInput = {
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    id?: BigIntFilter<"user"> | bigint | number
    phone_num?: StringNullableFilter<"user"> | string | null
    nickname?: StringNullableFilter<"user"> | string | null
    exercise?: Enumuser_exerciseNullableFilter<"user"> | $Enums.user_exercise | null
    agreement_consent?: Agreement_consentListRelationFilter
    inquiry?: InquiryListRelationFilter
    meal_alert?: Meal_alertListRelationFilter
    user_allergy?: User_allergyListRelationFilter
  }

  export type userOrderByWithRelationInput = {
    id?: SortOrder
    phone_num?: SortOrderInput | SortOrder
    nickname?: SortOrderInput | SortOrder
    exercise?: SortOrderInput | SortOrder
    agreement_consent?: agreement_consentOrderByRelationAggregateInput
    inquiry?: inquiryOrderByRelationAggregateInput
    meal_alert?: meal_alertOrderByRelationAggregateInput
    user_allergy?: user_allergyOrderByRelationAggregateInput
    _relevance?: userOrderByRelevanceInput
  }

  export type userWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    phone_num?: StringNullableFilter<"user"> | string | null
    nickname?: StringNullableFilter<"user"> | string | null
    exercise?: Enumuser_exerciseNullableFilter<"user"> | $Enums.user_exercise | null
    agreement_consent?: Agreement_consentListRelationFilter
    inquiry?: InquiryListRelationFilter
    meal_alert?: Meal_alertListRelationFilter
    user_allergy?: User_allergyListRelationFilter
  }, "id">

  export type userOrderByWithAggregationInput = {
    id?: SortOrder
    phone_num?: SortOrderInput | SortOrder
    nickname?: SortOrderInput | SortOrder
    exercise?: SortOrderInput | SortOrder
    _count?: userCountOrderByAggregateInput
    _avg?: userAvgOrderByAggregateInput
    _max?: userMaxOrderByAggregateInput
    _min?: userMinOrderByAggregateInput
    _sum?: userSumOrderByAggregateInput
  }

  export type userScalarWhereWithAggregatesInput = {
    AND?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    OR?: userScalarWhereWithAggregatesInput[]
    NOT?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"user"> | bigint | number
    phone_num?: StringNullableWithAggregatesFilter<"user"> | string | null
    nickname?: StringNullableWithAggregatesFilter<"user"> | string | null
    exercise?: Enumuser_exerciseNullableWithAggregatesFilter<"user"> | $Enums.user_exercise | null
  }

  export type agreement_consentWhereInput = {
    AND?: agreement_consentWhereInput | agreement_consentWhereInput[]
    OR?: agreement_consentWhereInput[]
    NOT?: agreement_consentWhereInput | agreement_consentWhereInput[]
    id?: BigIntFilter<"agreement_consent"> | bigint | number
    user_id?: BigIntFilter<"agreement_consent"> | bigint | number
    terms_of_service?: BoolNullableFilter<"agreement_consent"> | boolean | null
    privacy_policy?: BoolNullableFilter<"agreement_consent"> | boolean | null
    location_service?: BoolNullableFilter<"agreement_consent"> | boolean | null
    is_over14?: BoolNullableFilter<"agreement_consent"> | boolean | null
    created_at?: DateTimeNullableFilter<"agreement_consent"> | Date | string | null
    user?: XOR<UserScalarRelationFilter, userWhereInput>
  }

  export type agreement_consentOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    terms_of_service?: SortOrderInput | SortOrder
    privacy_policy?: SortOrderInput | SortOrder
    location_service?: SortOrderInput | SortOrder
    is_over14?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    user?: userOrderByWithRelationInput
  }

  export type agreement_consentWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: agreement_consentWhereInput | agreement_consentWhereInput[]
    OR?: agreement_consentWhereInput[]
    NOT?: agreement_consentWhereInput | agreement_consentWhereInput[]
    user_id?: BigIntFilter<"agreement_consent"> | bigint | number
    terms_of_service?: BoolNullableFilter<"agreement_consent"> | boolean | null
    privacy_policy?: BoolNullableFilter<"agreement_consent"> | boolean | null
    location_service?: BoolNullableFilter<"agreement_consent"> | boolean | null
    is_over14?: BoolNullableFilter<"agreement_consent"> | boolean | null
    created_at?: DateTimeNullableFilter<"agreement_consent"> | Date | string | null
    user?: XOR<UserScalarRelationFilter, userWhereInput>
  }, "id">

  export type agreement_consentOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    terms_of_service?: SortOrderInput | SortOrder
    privacy_policy?: SortOrderInput | SortOrder
    location_service?: SortOrderInput | SortOrder
    is_over14?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: agreement_consentCountOrderByAggregateInput
    _avg?: agreement_consentAvgOrderByAggregateInput
    _max?: agreement_consentMaxOrderByAggregateInput
    _min?: agreement_consentMinOrderByAggregateInput
    _sum?: agreement_consentSumOrderByAggregateInput
  }

  export type agreement_consentScalarWhereWithAggregatesInput = {
    AND?: agreement_consentScalarWhereWithAggregatesInput | agreement_consentScalarWhereWithAggregatesInput[]
    OR?: agreement_consentScalarWhereWithAggregatesInput[]
    NOT?: agreement_consentScalarWhereWithAggregatesInput | agreement_consentScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"agreement_consent"> | bigint | number
    user_id?: BigIntWithAggregatesFilter<"agreement_consent"> | bigint | number
    terms_of_service?: BoolNullableWithAggregatesFilter<"agreement_consent"> | boolean | null
    privacy_policy?: BoolNullableWithAggregatesFilter<"agreement_consent"> | boolean | null
    location_service?: BoolNullableWithAggregatesFilter<"agreement_consent"> | boolean | null
    is_over14?: BoolNullableWithAggregatesFilter<"agreement_consent"> | boolean | null
    created_at?: DateTimeNullableWithAggregatesFilter<"agreement_consent"> | Date | string | null
  }

  export type allergy_minWhereInput = {
    AND?: allergy_minWhereInput | allergy_minWhereInput[]
    OR?: allergy_minWhereInput[]
    NOT?: allergy_minWhereInput | allergy_minWhereInput[]
    id?: BigIntFilter<"allergy_min"> | bigint | number
    allergy?: StringNullableFilter<"allergy_min"> | string | null
    user_allergy?: User_allergyListRelationFilter
  }

  export type allergy_minOrderByWithRelationInput = {
    id?: SortOrder
    allergy?: SortOrderInput | SortOrder
    user_allergy?: user_allergyOrderByRelationAggregateInput
    _relevance?: allergy_minOrderByRelevanceInput
  }

  export type allergy_minWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: allergy_minWhereInput | allergy_minWhereInput[]
    OR?: allergy_minWhereInput[]
    NOT?: allergy_minWhereInput | allergy_minWhereInput[]
    allergy?: StringNullableFilter<"allergy_min"> | string | null
    user_allergy?: User_allergyListRelationFilter
  }, "id">

  export type allergy_minOrderByWithAggregationInput = {
    id?: SortOrder
    allergy?: SortOrderInput | SortOrder
    _count?: allergy_minCountOrderByAggregateInput
    _avg?: allergy_minAvgOrderByAggregateInput
    _max?: allergy_minMaxOrderByAggregateInput
    _min?: allergy_minMinOrderByAggregateInput
    _sum?: allergy_minSumOrderByAggregateInput
  }

  export type allergy_minScalarWhereWithAggregatesInput = {
    AND?: allergy_minScalarWhereWithAggregatesInput | allergy_minScalarWhereWithAggregatesInput[]
    OR?: allergy_minScalarWhereWithAggregatesInput[]
    NOT?: allergy_minScalarWhereWithAggregatesInput | allergy_minScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"allergy_min"> | bigint | number
    allergy?: StringNullableWithAggregatesFilter<"allergy_min"> | string | null
  }

  export type inquiryWhereInput = {
    AND?: inquiryWhereInput | inquiryWhereInput[]
    OR?: inquiryWhereInput[]
    NOT?: inquiryWhereInput | inquiryWhereInput[]
    id?: BigIntFilter<"inquiry"> | bigint | number
    user_id?: BigIntFilter<"inquiry"> | bigint | number
    title?: StringNullableFilter<"inquiry"> | string | null
    content?: StringNullableFilter<"inquiry"> | string | null
    created_at?: DateTimeNullableFilter<"inquiry"> | Date | string | null
    user?: XOR<UserScalarRelationFilter, userWhereInput>
  }

  export type inquiryOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    title?: SortOrderInput | SortOrder
    content?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    user?: userOrderByWithRelationInput
    _relevance?: inquiryOrderByRelevanceInput
  }

  export type inquiryWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: inquiryWhereInput | inquiryWhereInput[]
    OR?: inquiryWhereInput[]
    NOT?: inquiryWhereInput | inquiryWhereInput[]
    user_id?: BigIntFilter<"inquiry"> | bigint | number
    title?: StringNullableFilter<"inquiry"> | string | null
    content?: StringNullableFilter<"inquiry"> | string | null
    created_at?: DateTimeNullableFilter<"inquiry"> | Date | string | null
    user?: XOR<UserScalarRelationFilter, userWhereInput>
  }, "id">

  export type inquiryOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    title?: SortOrderInput | SortOrder
    content?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: inquiryCountOrderByAggregateInput
    _avg?: inquiryAvgOrderByAggregateInput
    _max?: inquiryMaxOrderByAggregateInput
    _min?: inquiryMinOrderByAggregateInput
    _sum?: inquirySumOrderByAggregateInput
  }

  export type inquiryScalarWhereWithAggregatesInput = {
    AND?: inquiryScalarWhereWithAggregatesInput | inquiryScalarWhereWithAggregatesInput[]
    OR?: inquiryScalarWhereWithAggregatesInput[]
    NOT?: inquiryScalarWhereWithAggregatesInput | inquiryScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"inquiry"> | bigint | number
    user_id?: BigIntWithAggregatesFilter<"inquiry"> | bigint | number
    title?: StringNullableWithAggregatesFilter<"inquiry"> | string | null
    content?: StringNullableWithAggregatesFilter<"inquiry"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"inquiry"> | Date | string | null
  }

  export type meal_alertWhereInput = {
    AND?: meal_alertWhereInput | meal_alertWhereInput[]
    OR?: meal_alertWhereInput[]
    NOT?: meal_alertWhereInput | meal_alertWhereInput[]
    user_id?: BigIntFilter<"meal_alert"> | bigint | number
    meal_id?: BigIntFilter<"meal_alert"> | bigint | number
    enabled?: BoolNullableFilter<"meal_alert"> | boolean | null
    alarm_time?: DateTimeNullableFilter<"meal_alert"> | Date | string | null
    meal_time?: XOR<Meal_timeScalarRelationFilter, meal_timeWhereInput>
    user?: XOR<UserScalarRelationFilter, userWhereInput>
  }

  export type meal_alertOrderByWithRelationInput = {
    user_id?: SortOrder
    meal_id?: SortOrder
    enabled?: SortOrderInput | SortOrder
    alarm_time?: SortOrderInput | SortOrder
    meal_time?: meal_timeOrderByWithRelationInput
    user?: userOrderByWithRelationInput
  }

  export type meal_alertWhereUniqueInput = Prisma.AtLeast<{
    user_id_meal_id?: meal_alertUser_idMeal_idCompoundUniqueInput
    AND?: meal_alertWhereInput | meal_alertWhereInput[]
    OR?: meal_alertWhereInput[]
    NOT?: meal_alertWhereInput | meal_alertWhereInput[]
    user_id?: BigIntFilter<"meal_alert"> | bigint | number
    meal_id?: BigIntFilter<"meal_alert"> | bigint | number
    enabled?: BoolNullableFilter<"meal_alert"> | boolean | null
    alarm_time?: DateTimeNullableFilter<"meal_alert"> | Date | string | null
    meal_time?: XOR<Meal_timeScalarRelationFilter, meal_timeWhereInput>
    user?: XOR<UserScalarRelationFilter, userWhereInput>
  }, "user_id_meal_id">

  export type meal_alertOrderByWithAggregationInput = {
    user_id?: SortOrder
    meal_id?: SortOrder
    enabled?: SortOrderInput | SortOrder
    alarm_time?: SortOrderInput | SortOrder
    _count?: meal_alertCountOrderByAggregateInput
    _avg?: meal_alertAvgOrderByAggregateInput
    _max?: meal_alertMaxOrderByAggregateInput
    _min?: meal_alertMinOrderByAggregateInput
    _sum?: meal_alertSumOrderByAggregateInput
  }

  export type meal_alertScalarWhereWithAggregatesInput = {
    AND?: meal_alertScalarWhereWithAggregatesInput | meal_alertScalarWhereWithAggregatesInput[]
    OR?: meal_alertScalarWhereWithAggregatesInput[]
    NOT?: meal_alertScalarWhereWithAggregatesInput | meal_alertScalarWhereWithAggregatesInput[]
    user_id?: BigIntWithAggregatesFilter<"meal_alert"> | bigint | number
    meal_id?: BigIntWithAggregatesFilter<"meal_alert"> | bigint | number
    enabled?: BoolNullableWithAggregatesFilter<"meal_alert"> | boolean | null
    alarm_time?: DateTimeNullableWithAggregatesFilter<"meal_alert"> | Date | string | null
  }

  export type meal_timeWhereInput = {
    AND?: meal_timeWhereInput | meal_timeWhereInput[]
    OR?: meal_timeWhereInput[]
    NOT?: meal_timeWhereInput | meal_timeWhereInput[]
    id?: BigIntFilter<"meal_time"> | bigint | number
    alert_time?: DateTimeNullableFilter<"meal_time"> | Date | string | null
    comment?: StringNullableFilter<"meal_time"> | string | null
    meal_alert?: Meal_alertListRelationFilter
  }

  export type meal_timeOrderByWithRelationInput = {
    id?: SortOrder
    alert_time?: SortOrderInput | SortOrder
    comment?: SortOrderInput | SortOrder
    meal_alert?: meal_alertOrderByRelationAggregateInput
    _relevance?: meal_timeOrderByRelevanceInput
  }

  export type meal_timeWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: meal_timeWhereInput | meal_timeWhereInput[]
    OR?: meal_timeWhereInput[]
    NOT?: meal_timeWhereInput | meal_timeWhereInput[]
    alert_time?: DateTimeNullableFilter<"meal_time"> | Date | string | null
    comment?: StringNullableFilter<"meal_time"> | string | null
    meal_alert?: Meal_alertListRelationFilter
  }, "id">

  export type meal_timeOrderByWithAggregationInput = {
    id?: SortOrder
    alert_time?: SortOrderInput | SortOrder
    comment?: SortOrderInput | SortOrder
    _count?: meal_timeCountOrderByAggregateInput
    _avg?: meal_timeAvgOrderByAggregateInput
    _max?: meal_timeMaxOrderByAggregateInput
    _min?: meal_timeMinOrderByAggregateInput
    _sum?: meal_timeSumOrderByAggregateInput
  }

  export type meal_timeScalarWhereWithAggregatesInput = {
    AND?: meal_timeScalarWhereWithAggregatesInput | meal_timeScalarWhereWithAggregatesInput[]
    OR?: meal_timeScalarWhereWithAggregatesInput[]
    NOT?: meal_timeScalarWhereWithAggregatesInput | meal_timeScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"meal_time"> | bigint | number
    alert_time?: DateTimeNullableWithAggregatesFilter<"meal_time"> | Date | string | null
    comment?: StringNullableWithAggregatesFilter<"meal_time"> | string | null
  }

  export type user_allergyWhereInput = {
    AND?: user_allergyWhereInput | user_allergyWhereInput[]
    OR?: user_allergyWhereInput[]
    NOT?: user_allergyWhereInput | user_allergyWhereInput[]
    user_id?: BigIntFilter<"user_allergy"> | bigint | number
    allergy_id?: BigIntFilter<"user_allergy"> | bigint | number
    allergy_min?: XOR<Allergy_minScalarRelationFilter, allergy_minWhereInput>
    user?: XOR<UserScalarRelationFilter, userWhereInput>
  }

  export type user_allergyOrderByWithRelationInput = {
    user_id?: SortOrder
    allergy_id?: SortOrder
    allergy_min?: allergy_minOrderByWithRelationInput
    user?: userOrderByWithRelationInput
  }

  export type user_allergyWhereUniqueInput = Prisma.AtLeast<{
    user_id_allergy_id?: user_allergyUser_idAllergy_idCompoundUniqueInput
    AND?: user_allergyWhereInput | user_allergyWhereInput[]
    OR?: user_allergyWhereInput[]
    NOT?: user_allergyWhereInput | user_allergyWhereInput[]
    user_id?: BigIntFilter<"user_allergy"> | bigint | number
    allergy_id?: BigIntFilter<"user_allergy"> | bigint | number
    allergy_min?: XOR<Allergy_minScalarRelationFilter, allergy_minWhereInput>
    user?: XOR<UserScalarRelationFilter, userWhereInput>
  }, "user_id_allergy_id">

  export type user_allergyOrderByWithAggregationInput = {
    user_id?: SortOrder
    allergy_id?: SortOrder
    _count?: user_allergyCountOrderByAggregateInput
    _avg?: user_allergyAvgOrderByAggregateInput
    _max?: user_allergyMaxOrderByAggregateInput
    _min?: user_allergyMinOrderByAggregateInput
    _sum?: user_allergySumOrderByAggregateInput
  }

  export type user_allergyScalarWhereWithAggregatesInput = {
    AND?: user_allergyScalarWhereWithAggregatesInput | user_allergyScalarWhereWithAggregatesInput[]
    OR?: user_allergyScalarWhereWithAggregatesInput[]
    NOT?: user_allergyScalarWhereWithAggregatesInput | user_allergyScalarWhereWithAggregatesInput[]
    user_id?: BigIntWithAggregatesFilter<"user_allergy"> | bigint | number
    allergy_id?: BigIntWithAggregatesFilter<"user_allergy"> | bigint | number
  }

  export type userCreateInput = {
    id: bigint | number
    phone_num?: string | null
    nickname?: string | null
    exercise?: $Enums.user_exercise | null
    agreement_consent?: agreement_consentCreateNestedManyWithoutUserInput
    inquiry?: inquiryCreateNestedManyWithoutUserInput
    meal_alert?: meal_alertCreateNestedManyWithoutUserInput
    user_allergy?: user_allergyCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateInput = {
    id: bigint | number
    phone_num?: string | null
    nickname?: string | null
    exercise?: $Enums.user_exercise | null
    agreement_consent?: agreement_consentUncheckedCreateNestedManyWithoutUserInput
    inquiry?: inquiryUncheckedCreateNestedManyWithoutUserInput
    meal_alert?: meal_alertUncheckedCreateNestedManyWithoutUserInput
    user_allergy?: user_allergyUncheckedCreateNestedManyWithoutUserInput
  }

  export type userUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    phone_num?: NullableStringFieldUpdateOperationsInput | string | null
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    exercise?: NullableEnumuser_exerciseFieldUpdateOperationsInput | $Enums.user_exercise | null
    agreement_consent?: agreement_consentUpdateManyWithoutUserNestedInput
    inquiry?: inquiryUpdateManyWithoutUserNestedInput
    meal_alert?: meal_alertUpdateManyWithoutUserNestedInput
    user_allergy?: user_allergyUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    phone_num?: NullableStringFieldUpdateOperationsInput | string | null
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    exercise?: NullableEnumuser_exerciseFieldUpdateOperationsInput | $Enums.user_exercise | null
    agreement_consent?: agreement_consentUncheckedUpdateManyWithoutUserNestedInput
    inquiry?: inquiryUncheckedUpdateManyWithoutUserNestedInput
    meal_alert?: meal_alertUncheckedUpdateManyWithoutUserNestedInput
    user_allergy?: user_allergyUncheckedUpdateManyWithoutUserNestedInput
  }

  export type userCreateManyInput = {
    id: bigint | number
    phone_num?: string | null
    nickname?: string | null
    exercise?: $Enums.user_exercise | null
  }

  export type userUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    phone_num?: NullableStringFieldUpdateOperationsInput | string | null
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    exercise?: NullableEnumuser_exerciseFieldUpdateOperationsInput | $Enums.user_exercise | null
  }

  export type userUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    phone_num?: NullableStringFieldUpdateOperationsInput | string | null
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    exercise?: NullableEnumuser_exerciseFieldUpdateOperationsInput | $Enums.user_exercise | null
  }

  export type agreement_consentCreateInput = {
    id?: bigint | number
    terms_of_service?: boolean | null
    privacy_policy?: boolean | null
    location_service?: boolean | null
    is_over14?: boolean | null
    created_at?: Date | string | null
    user: userCreateNestedOneWithoutAgreement_consentInput
  }

  export type agreement_consentUncheckedCreateInput = {
    id?: bigint | number
    user_id: bigint | number
    terms_of_service?: boolean | null
    privacy_policy?: boolean | null
    location_service?: boolean | null
    is_over14?: boolean | null
    created_at?: Date | string | null
  }

  export type agreement_consentUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    terms_of_service?: NullableBoolFieldUpdateOperationsInput | boolean | null
    privacy_policy?: NullableBoolFieldUpdateOperationsInput | boolean | null
    location_service?: NullableBoolFieldUpdateOperationsInput | boolean | null
    is_over14?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: userUpdateOneRequiredWithoutAgreement_consentNestedInput
  }

  export type agreement_consentUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    terms_of_service?: NullableBoolFieldUpdateOperationsInput | boolean | null
    privacy_policy?: NullableBoolFieldUpdateOperationsInput | boolean | null
    location_service?: NullableBoolFieldUpdateOperationsInput | boolean | null
    is_over14?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type agreement_consentCreateManyInput = {
    id?: bigint | number
    user_id: bigint | number
    terms_of_service?: boolean | null
    privacy_policy?: boolean | null
    location_service?: boolean | null
    is_over14?: boolean | null
    created_at?: Date | string | null
  }

  export type agreement_consentUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    terms_of_service?: NullableBoolFieldUpdateOperationsInput | boolean | null
    privacy_policy?: NullableBoolFieldUpdateOperationsInput | boolean | null
    location_service?: NullableBoolFieldUpdateOperationsInput | boolean | null
    is_over14?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type agreement_consentUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    terms_of_service?: NullableBoolFieldUpdateOperationsInput | boolean | null
    privacy_policy?: NullableBoolFieldUpdateOperationsInput | boolean | null
    location_service?: NullableBoolFieldUpdateOperationsInput | boolean | null
    is_over14?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type allergy_minCreateInput = {
    id?: bigint | number
    allergy?: string | null
    user_allergy?: user_allergyCreateNestedManyWithoutAllergy_minInput
  }

  export type allergy_minUncheckedCreateInput = {
    id?: bigint | number
    allergy?: string | null
    user_allergy?: user_allergyUncheckedCreateNestedManyWithoutAllergy_minInput
  }

  export type allergy_minUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    allergy?: NullableStringFieldUpdateOperationsInput | string | null
    user_allergy?: user_allergyUpdateManyWithoutAllergy_minNestedInput
  }

  export type allergy_minUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    allergy?: NullableStringFieldUpdateOperationsInput | string | null
    user_allergy?: user_allergyUncheckedUpdateManyWithoutAllergy_minNestedInput
  }

  export type allergy_minCreateManyInput = {
    id?: bigint | number
    allergy?: string | null
  }

  export type allergy_minUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    allergy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type allergy_minUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    allergy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type inquiryCreateInput = {
    id: bigint | number
    title?: string | null
    content?: string | null
    created_at?: Date | string | null
    user: userCreateNestedOneWithoutInquiryInput
  }

  export type inquiryUncheckedCreateInput = {
    id: bigint | number
    user_id: bigint | number
    title?: string | null
    content?: string | null
    created_at?: Date | string | null
  }

  export type inquiryUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: userUpdateOneRequiredWithoutInquiryNestedInput
  }

  export type inquiryUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type inquiryCreateManyInput = {
    id: bigint | number
    user_id: bigint | number
    title?: string | null
    content?: string | null
    created_at?: Date | string | null
  }

  export type inquiryUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type inquiryUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type meal_alertCreateInput = {
    enabled?: boolean | null
    alarm_time?: Date | string | null
    meal_time: meal_timeCreateNestedOneWithoutMeal_alertInput
    user: userCreateNestedOneWithoutMeal_alertInput
  }

  export type meal_alertUncheckedCreateInput = {
    user_id: bigint | number
    meal_id: bigint | number
    enabled?: boolean | null
    alarm_time?: Date | string | null
  }

  export type meal_alertUpdateInput = {
    enabled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    alarm_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    meal_time?: meal_timeUpdateOneRequiredWithoutMeal_alertNestedInput
    user?: userUpdateOneRequiredWithoutMeal_alertNestedInput
  }

  export type meal_alertUncheckedUpdateInput = {
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    meal_id?: BigIntFieldUpdateOperationsInput | bigint | number
    enabled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    alarm_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type meal_alertCreateManyInput = {
    user_id: bigint | number
    meal_id: bigint | number
    enabled?: boolean | null
    alarm_time?: Date | string | null
  }

  export type meal_alertUpdateManyMutationInput = {
    enabled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    alarm_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type meal_alertUncheckedUpdateManyInput = {
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    meal_id?: BigIntFieldUpdateOperationsInput | bigint | number
    enabled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    alarm_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type meal_timeCreateInput = {
    id?: bigint | number
    alert_time?: Date | string | null
    comment?: string | null
    meal_alert?: meal_alertCreateNestedManyWithoutMeal_timeInput
  }

  export type meal_timeUncheckedCreateInput = {
    id?: bigint | number
    alert_time?: Date | string | null
    comment?: string | null
    meal_alert?: meal_alertUncheckedCreateNestedManyWithoutMeal_timeInput
  }

  export type meal_timeUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    alert_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    meal_alert?: meal_alertUpdateManyWithoutMeal_timeNestedInput
  }

  export type meal_timeUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    alert_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    meal_alert?: meal_alertUncheckedUpdateManyWithoutMeal_timeNestedInput
  }

  export type meal_timeCreateManyInput = {
    id?: bigint | number
    alert_time?: Date | string | null
    comment?: string | null
  }

  export type meal_timeUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    alert_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type meal_timeUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    alert_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type user_allergyCreateInput = {
    allergy_min: allergy_minCreateNestedOneWithoutUser_allergyInput
    user: userCreateNestedOneWithoutUser_allergyInput
  }

  export type user_allergyUncheckedCreateInput = {
    user_id: bigint | number
    allergy_id: bigint | number
  }

  export type user_allergyUpdateInput = {
    allergy_min?: allergy_minUpdateOneRequiredWithoutUser_allergyNestedInput
    user?: userUpdateOneRequiredWithoutUser_allergyNestedInput
  }

  export type user_allergyUncheckedUpdateInput = {
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    allergy_id?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type user_allergyCreateManyInput = {
    user_id: bigint | number
    allergy_id: bigint | number
  }

  export type user_allergyUpdateManyMutationInput = {

  }

  export type user_allergyUncheckedUpdateManyInput = {
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    allergy_id?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type Enumuser_exerciseNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.user_exercise | Enumuser_exerciseFieldRefInput<$PrismaModel> | null
    in?: $Enums.user_exercise[] | null
    notIn?: $Enums.user_exercise[] | null
    not?: NestedEnumuser_exerciseNullableFilter<$PrismaModel> | $Enums.user_exercise | null
  }

  export type Agreement_consentListRelationFilter = {
    every?: agreement_consentWhereInput
    some?: agreement_consentWhereInput
    none?: agreement_consentWhereInput
  }

  export type InquiryListRelationFilter = {
    every?: inquiryWhereInput
    some?: inquiryWhereInput
    none?: inquiryWhereInput
  }

  export type Meal_alertListRelationFilter = {
    every?: meal_alertWhereInput
    some?: meal_alertWhereInput
    none?: meal_alertWhereInput
  }

  export type User_allergyListRelationFilter = {
    every?: user_allergyWhereInput
    some?: user_allergyWhereInput
    none?: user_allergyWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type agreement_consentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type inquiryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type meal_alertOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type user_allergyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type userOrderByRelevanceInput = {
    fields: userOrderByRelevanceFieldEnum | userOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type userCountOrderByAggregateInput = {
    id?: SortOrder
    phone_num?: SortOrder
    nickname?: SortOrder
    exercise?: SortOrder
  }

  export type userAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type userMaxOrderByAggregateInput = {
    id?: SortOrder
    phone_num?: SortOrder
    nickname?: SortOrder
    exercise?: SortOrder
  }

  export type userMinOrderByAggregateInput = {
    id?: SortOrder
    phone_num?: SortOrder
    nickname?: SortOrder
    exercise?: SortOrder
  }

  export type userSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type Enumuser_exerciseNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.user_exercise | Enumuser_exerciseFieldRefInput<$PrismaModel> | null
    in?: $Enums.user_exercise[] | null
    notIn?: $Enums.user_exercise[] | null
    not?: NestedEnumuser_exerciseNullableWithAggregatesFilter<$PrismaModel> | $Enums.user_exercise | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumuser_exerciseNullableFilter<$PrismaModel>
    _max?: NestedEnumuser_exerciseNullableFilter<$PrismaModel>
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type UserScalarRelationFilter = {
    is?: userWhereInput
    isNot?: userWhereInput
  }

  export type agreement_consentCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    terms_of_service?: SortOrder
    privacy_policy?: SortOrder
    location_service?: SortOrder
    is_over14?: SortOrder
    created_at?: SortOrder
  }

  export type agreement_consentAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type agreement_consentMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    terms_of_service?: SortOrder
    privacy_policy?: SortOrder
    location_service?: SortOrder
    is_over14?: SortOrder
    created_at?: SortOrder
  }

  export type agreement_consentMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    terms_of_service?: SortOrder
    privacy_policy?: SortOrder
    location_service?: SortOrder
    is_over14?: SortOrder
    created_at?: SortOrder
  }

  export type agreement_consentSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type allergy_minOrderByRelevanceInput = {
    fields: allergy_minOrderByRelevanceFieldEnum | allergy_minOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type allergy_minCountOrderByAggregateInput = {
    id?: SortOrder
    allergy?: SortOrder
  }

  export type allergy_minAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type allergy_minMaxOrderByAggregateInput = {
    id?: SortOrder
    allergy?: SortOrder
  }

  export type allergy_minMinOrderByAggregateInput = {
    id?: SortOrder
    allergy?: SortOrder
  }

  export type allergy_minSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type inquiryOrderByRelevanceInput = {
    fields: inquiryOrderByRelevanceFieldEnum | inquiryOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type inquiryCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    created_at?: SortOrder
  }

  export type inquiryAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type inquiryMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    created_at?: SortOrder
  }

  export type inquiryMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    created_at?: SortOrder
  }

  export type inquirySumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type Meal_timeScalarRelationFilter = {
    is?: meal_timeWhereInput
    isNot?: meal_timeWhereInput
  }

  export type meal_alertUser_idMeal_idCompoundUniqueInput = {
    user_id: bigint | number
    meal_id: bigint | number
  }

  export type meal_alertCountOrderByAggregateInput = {
    user_id?: SortOrder
    meal_id?: SortOrder
    enabled?: SortOrder
    alarm_time?: SortOrder
  }

  export type meal_alertAvgOrderByAggregateInput = {
    user_id?: SortOrder
    meal_id?: SortOrder
  }

  export type meal_alertMaxOrderByAggregateInput = {
    user_id?: SortOrder
    meal_id?: SortOrder
    enabled?: SortOrder
    alarm_time?: SortOrder
  }

  export type meal_alertMinOrderByAggregateInput = {
    user_id?: SortOrder
    meal_id?: SortOrder
    enabled?: SortOrder
    alarm_time?: SortOrder
  }

  export type meal_alertSumOrderByAggregateInput = {
    user_id?: SortOrder
    meal_id?: SortOrder
  }

  export type meal_timeOrderByRelevanceInput = {
    fields: meal_timeOrderByRelevanceFieldEnum | meal_timeOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type meal_timeCountOrderByAggregateInput = {
    id?: SortOrder
    alert_time?: SortOrder
    comment?: SortOrder
  }

  export type meal_timeAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type meal_timeMaxOrderByAggregateInput = {
    id?: SortOrder
    alert_time?: SortOrder
    comment?: SortOrder
  }

  export type meal_timeMinOrderByAggregateInput = {
    id?: SortOrder
    alert_time?: SortOrder
    comment?: SortOrder
  }

  export type meal_timeSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type Allergy_minScalarRelationFilter = {
    is?: allergy_minWhereInput
    isNot?: allergy_minWhereInput
  }

  export type user_allergyUser_idAllergy_idCompoundUniqueInput = {
    user_id: bigint | number
    allergy_id: bigint | number
  }

  export type user_allergyCountOrderByAggregateInput = {
    user_id?: SortOrder
    allergy_id?: SortOrder
  }

  export type user_allergyAvgOrderByAggregateInput = {
    user_id?: SortOrder
    allergy_id?: SortOrder
  }

  export type user_allergyMaxOrderByAggregateInput = {
    user_id?: SortOrder
    allergy_id?: SortOrder
  }

  export type user_allergyMinOrderByAggregateInput = {
    user_id?: SortOrder
    allergy_id?: SortOrder
  }

  export type user_allergySumOrderByAggregateInput = {
    user_id?: SortOrder
    allergy_id?: SortOrder
  }

  export type agreement_consentCreateNestedManyWithoutUserInput = {
    create?: XOR<agreement_consentCreateWithoutUserInput, agreement_consentUncheckedCreateWithoutUserInput> | agreement_consentCreateWithoutUserInput[] | agreement_consentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: agreement_consentCreateOrConnectWithoutUserInput | agreement_consentCreateOrConnectWithoutUserInput[]
    createMany?: agreement_consentCreateManyUserInputEnvelope
    connect?: agreement_consentWhereUniqueInput | agreement_consentWhereUniqueInput[]
  }

  export type inquiryCreateNestedManyWithoutUserInput = {
    create?: XOR<inquiryCreateWithoutUserInput, inquiryUncheckedCreateWithoutUserInput> | inquiryCreateWithoutUserInput[] | inquiryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: inquiryCreateOrConnectWithoutUserInput | inquiryCreateOrConnectWithoutUserInput[]
    createMany?: inquiryCreateManyUserInputEnvelope
    connect?: inquiryWhereUniqueInput | inquiryWhereUniqueInput[]
  }

  export type meal_alertCreateNestedManyWithoutUserInput = {
    create?: XOR<meal_alertCreateWithoutUserInput, meal_alertUncheckedCreateWithoutUserInput> | meal_alertCreateWithoutUserInput[] | meal_alertUncheckedCreateWithoutUserInput[]
    connectOrCreate?: meal_alertCreateOrConnectWithoutUserInput | meal_alertCreateOrConnectWithoutUserInput[]
    createMany?: meal_alertCreateManyUserInputEnvelope
    connect?: meal_alertWhereUniqueInput | meal_alertWhereUniqueInput[]
  }

  export type user_allergyCreateNestedManyWithoutUserInput = {
    create?: XOR<user_allergyCreateWithoutUserInput, user_allergyUncheckedCreateWithoutUserInput> | user_allergyCreateWithoutUserInput[] | user_allergyUncheckedCreateWithoutUserInput[]
    connectOrCreate?: user_allergyCreateOrConnectWithoutUserInput | user_allergyCreateOrConnectWithoutUserInput[]
    createMany?: user_allergyCreateManyUserInputEnvelope
    connect?: user_allergyWhereUniqueInput | user_allergyWhereUniqueInput[]
  }

  export type agreement_consentUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<agreement_consentCreateWithoutUserInput, agreement_consentUncheckedCreateWithoutUserInput> | agreement_consentCreateWithoutUserInput[] | agreement_consentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: agreement_consentCreateOrConnectWithoutUserInput | agreement_consentCreateOrConnectWithoutUserInput[]
    createMany?: agreement_consentCreateManyUserInputEnvelope
    connect?: agreement_consentWhereUniqueInput | agreement_consentWhereUniqueInput[]
  }

  export type inquiryUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<inquiryCreateWithoutUserInput, inquiryUncheckedCreateWithoutUserInput> | inquiryCreateWithoutUserInput[] | inquiryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: inquiryCreateOrConnectWithoutUserInput | inquiryCreateOrConnectWithoutUserInput[]
    createMany?: inquiryCreateManyUserInputEnvelope
    connect?: inquiryWhereUniqueInput | inquiryWhereUniqueInput[]
  }

  export type meal_alertUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<meal_alertCreateWithoutUserInput, meal_alertUncheckedCreateWithoutUserInput> | meal_alertCreateWithoutUserInput[] | meal_alertUncheckedCreateWithoutUserInput[]
    connectOrCreate?: meal_alertCreateOrConnectWithoutUserInput | meal_alertCreateOrConnectWithoutUserInput[]
    createMany?: meal_alertCreateManyUserInputEnvelope
    connect?: meal_alertWhereUniqueInput | meal_alertWhereUniqueInput[]
  }

  export type user_allergyUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<user_allergyCreateWithoutUserInput, user_allergyUncheckedCreateWithoutUserInput> | user_allergyCreateWithoutUserInput[] | user_allergyUncheckedCreateWithoutUserInput[]
    connectOrCreate?: user_allergyCreateOrConnectWithoutUserInput | user_allergyCreateOrConnectWithoutUserInput[]
    createMany?: user_allergyCreateManyUserInputEnvelope
    connect?: user_allergyWhereUniqueInput | user_allergyWhereUniqueInput[]
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableEnumuser_exerciseFieldUpdateOperationsInput = {
    set?: $Enums.user_exercise | null
  }

  export type agreement_consentUpdateManyWithoutUserNestedInput = {
    create?: XOR<agreement_consentCreateWithoutUserInput, agreement_consentUncheckedCreateWithoutUserInput> | agreement_consentCreateWithoutUserInput[] | agreement_consentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: agreement_consentCreateOrConnectWithoutUserInput | agreement_consentCreateOrConnectWithoutUserInput[]
    upsert?: agreement_consentUpsertWithWhereUniqueWithoutUserInput | agreement_consentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: agreement_consentCreateManyUserInputEnvelope
    set?: agreement_consentWhereUniqueInput | agreement_consentWhereUniqueInput[]
    disconnect?: agreement_consentWhereUniqueInput | agreement_consentWhereUniqueInput[]
    delete?: agreement_consentWhereUniqueInput | agreement_consentWhereUniqueInput[]
    connect?: agreement_consentWhereUniqueInput | agreement_consentWhereUniqueInput[]
    update?: agreement_consentUpdateWithWhereUniqueWithoutUserInput | agreement_consentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: agreement_consentUpdateManyWithWhereWithoutUserInput | agreement_consentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: agreement_consentScalarWhereInput | agreement_consentScalarWhereInput[]
  }

  export type inquiryUpdateManyWithoutUserNestedInput = {
    create?: XOR<inquiryCreateWithoutUserInput, inquiryUncheckedCreateWithoutUserInput> | inquiryCreateWithoutUserInput[] | inquiryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: inquiryCreateOrConnectWithoutUserInput | inquiryCreateOrConnectWithoutUserInput[]
    upsert?: inquiryUpsertWithWhereUniqueWithoutUserInput | inquiryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: inquiryCreateManyUserInputEnvelope
    set?: inquiryWhereUniqueInput | inquiryWhereUniqueInput[]
    disconnect?: inquiryWhereUniqueInput | inquiryWhereUniqueInput[]
    delete?: inquiryWhereUniqueInput | inquiryWhereUniqueInput[]
    connect?: inquiryWhereUniqueInput | inquiryWhereUniqueInput[]
    update?: inquiryUpdateWithWhereUniqueWithoutUserInput | inquiryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: inquiryUpdateManyWithWhereWithoutUserInput | inquiryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: inquiryScalarWhereInput | inquiryScalarWhereInput[]
  }

  export type meal_alertUpdateManyWithoutUserNestedInput = {
    create?: XOR<meal_alertCreateWithoutUserInput, meal_alertUncheckedCreateWithoutUserInput> | meal_alertCreateWithoutUserInput[] | meal_alertUncheckedCreateWithoutUserInput[]
    connectOrCreate?: meal_alertCreateOrConnectWithoutUserInput | meal_alertCreateOrConnectWithoutUserInput[]
    upsert?: meal_alertUpsertWithWhereUniqueWithoutUserInput | meal_alertUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: meal_alertCreateManyUserInputEnvelope
    set?: meal_alertWhereUniqueInput | meal_alertWhereUniqueInput[]
    disconnect?: meal_alertWhereUniqueInput | meal_alertWhereUniqueInput[]
    delete?: meal_alertWhereUniqueInput | meal_alertWhereUniqueInput[]
    connect?: meal_alertWhereUniqueInput | meal_alertWhereUniqueInput[]
    update?: meal_alertUpdateWithWhereUniqueWithoutUserInput | meal_alertUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: meal_alertUpdateManyWithWhereWithoutUserInput | meal_alertUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: meal_alertScalarWhereInput | meal_alertScalarWhereInput[]
  }

  export type user_allergyUpdateManyWithoutUserNestedInput = {
    create?: XOR<user_allergyCreateWithoutUserInput, user_allergyUncheckedCreateWithoutUserInput> | user_allergyCreateWithoutUserInput[] | user_allergyUncheckedCreateWithoutUserInput[]
    connectOrCreate?: user_allergyCreateOrConnectWithoutUserInput | user_allergyCreateOrConnectWithoutUserInput[]
    upsert?: user_allergyUpsertWithWhereUniqueWithoutUserInput | user_allergyUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: user_allergyCreateManyUserInputEnvelope
    set?: user_allergyWhereUniqueInput | user_allergyWhereUniqueInput[]
    disconnect?: user_allergyWhereUniqueInput | user_allergyWhereUniqueInput[]
    delete?: user_allergyWhereUniqueInput | user_allergyWhereUniqueInput[]
    connect?: user_allergyWhereUniqueInput | user_allergyWhereUniqueInput[]
    update?: user_allergyUpdateWithWhereUniqueWithoutUserInput | user_allergyUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: user_allergyUpdateManyWithWhereWithoutUserInput | user_allergyUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: user_allergyScalarWhereInput | user_allergyScalarWhereInput[]
  }

  export type agreement_consentUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<agreement_consentCreateWithoutUserInput, agreement_consentUncheckedCreateWithoutUserInput> | agreement_consentCreateWithoutUserInput[] | agreement_consentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: agreement_consentCreateOrConnectWithoutUserInput | agreement_consentCreateOrConnectWithoutUserInput[]
    upsert?: agreement_consentUpsertWithWhereUniqueWithoutUserInput | agreement_consentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: agreement_consentCreateManyUserInputEnvelope
    set?: agreement_consentWhereUniqueInput | agreement_consentWhereUniqueInput[]
    disconnect?: agreement_consentWhereUniqueInput | agreement_consentWhereUniqueInput[]
    delete?: agreement_consentWhereUniqueInput | agreement_consentWhereUniqueInput[]
    connect?: agreement_consentWhereUniqueInput | agreement_consentWhereUniqueInput[]
    update?: agreement_consentUpdateWithWhereUniqueWithoutUserInput | agreement_consentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: agreement_consentUpdateManyWithWhereWithoutUserInput | agreement_consentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: agreement_consentScalarWhereInput | agreement_consentScalarWhereInput[]
  }

  export type inquiryUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<inquiryCreateWithoutUserInput, inquiryUncheckedCreateWithoutUserInput> | inquiryCreateWithoutUserInput[] | inquiryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: inquiryCreateOrConnectWithoutUserInput | inquiryCreateOrConnectWithoutUserInput[]
    upsert?: inquiryUpsertWithWhereUniqueWithoutUserInput | inquiryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: inquiryCreateManyUserInputEnvelope
    set?: inquiryWhereUniqueInput | inquiryWhereUniqueInput[]
    disconnect?: inquiryWhereUniqueInput | inquiryWhereUniqueInput[]
    delete?: inquiryWhereUniqueInput | inquiryWhereUniqueInput[]
    connect?: inquiryWhereUniqueInput | inquiryWhereUniqueInput[]
    update?: inquiryUpdateWithWhereUniqueWithoutUserInput | inquiryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: inquiryUpdateManyWithWhereWithoutUserInput | inquiryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: inquiryScalarWhereInput | inquiryScalarWhereInput[]
  }

  export type meal_alertUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<meal_alertCreateWithoutUserInput, meal_alertUncheckedCreateWithoutUserInput> | meal_alertCreateWithoutUserInput[] | meal_alertUncheckedCreateWithoutUserInput[]
    connectOrCreate?: meal_alertCreateOrConnectWithoutUserInput | meal_alertCreateOrConnectWithoutUserInput[]
    upsert?: meal_alertUpsertWithWhereUniqueWithoutUserInput | meal_alertUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: meal_alertCreateManyUserInputEnvelope
    set?: meal_alertWhereUniqueInput | meal_alertWhereUniqueInput[]
    disconnect?: meal_alertWhereUniqueInput | meal_alertWhereUniqueInput[]
    delete?: meal_alertWhereUniqueInput | meal_alertWhereUniqueInput[]
    connect?: meal_alertWhereUniqueInput | meal_alertWhereUniqueInput[]
    update?: meal_alertUpdateWithWhereUniqueWithoutUserInput | meal_alertUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: meal_alertUpdateManyWithWhereWithoutUserInput | meal_alertUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: meal_alertScalarWhereInput | meal_alertScalarWhereInput[]
  }

  export type user_allergyUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<user_allergyCreateWithoutUserInput, user_allergyUncheckedCreateWithoutUserInput> | user_allergyCreateWithoutUserInput[] | user_allergyUncheckedCreateWithoutUserInput[]
    connectOrCreate?: user_allergyCreateOrConnectWithoutUserInput | user_allergyCreateOrConnectWithoutUserInput[]
    upsert?: user_allergyUpsertWithWhereUniqueWithoutUserInput | user_allergyUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: user_allergyCreateManyUserInputEnvelope
    set?: user_allergyWhereUniqueInput | user_allergyWhereUniqueInput[]
    disconnect?: user_allergyWhereUniqueInput | user_allergyWhereUniqueInput[]
    delete?: user_allergyWhereUniqueInput | user_allergyWhereUniqueInput[]
    connect?: user_allergyWhereUniqueInput | user_allergyWhereUniqueInput[]
    update?: user_allergyUpdateWithWhereUniqueWithoutUserInput | user_allergyUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: user_allergyUpdateManyWithWhereWithoutUserInput | user_allergyUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: user_allergyScalarWhereInput | user_allergyScalarWhereInput[]
  }

  export type userCreateNestedOneWithoutAgreement_consentInput = {
    create?: XOR<userCreateWithoutAgreement_consentInput, userUncheckedCreateWithoutAgreement_consentInput>
    connectOrCreate?: userCreateOrConnectWithoutAgreement_consentInput
    connect?: userWhereUniqueInput
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type userUpdateOneRequiredWithoutAgreement_consentNestedInput = {
    create?: XOR<userCreateWithoutAgreement_consentInput, userUncheckedCreateWithoutAgreement_consentInput>
    connectOrCreate?: userCreateOrConnectWithoutAgreement_consentInput
    upsert?: userUpsertWithoutAgreement_consentInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutAgreement_consentInput, userUpdateWithoutAgreement_consentInput>, userUncheckedUpdateWithoutAgreement_consentInput>
  }

  export type user_allergyCreateNestedManyWithoutAllergy_minInput = {
    create?: XOR<user_allergyCreateWithoutAllergy_minInput, user_allergyUncheckedCreateWithoutAllergy_minInput> | user_allergyCreateWithoutAllergy_minInput[] | user_allergyUncheckedCreateWithoutAllergy_minInput[]
    connectOrCreate?: user_allergyCreateOrConnectWithoutAllergy_minInput | user_allergyCreateOrConnectWithoutAllergy_minInput[]
    createMany?: user_allergyCreateManyAllergy_minInputEnvelope
    connect?: user_allergyWhereUniqueInput | user_allergyWhereUniqueInput[]
  }

  export type user_allergyUncheckedCreateNestedManyWithoutAllergy_minInput = {
    create?: XOR<user_allergyCreateWithoutAllergy_minInput, user_allergyUncheckedCreateWithoutAllergy_minInput> | user_allergyCreateWithoutAllergy_minInput[] | user_allergyUncheckedCreateWithoutAllergy_minInput[]
    connectOrCreate?: user_allergyCreateOrConnectWithoutAllergy_minInput | user_allergyCreateOrConnectWithoutAllergy_minInput[]
    createMany?: user_allergyCreateManyAllergy_minInputEnvelope
    connect?: user_allergyWhereUniqueInput | user_allergyWhereUniqueInput[]
  }

  export type user_allergyUpdateManyWithoutAllergy_minNestedInput = {
    create?: XOR<user_allergyCreateWithoutAllergy_minInput, user_allergyUncheckedCreateWithoutAllergy_minInput> | user_allergyCreateWithoutAllergy_minInput[] | user_allergyUncheckedCreateWithoutAllergy_minInput[]
    connectOrCreate?: user_allergyCreateOrConnectWithoutAllergy_minInput | user_allergyCreateOrConnectWithoutAllergy_minInput[]
    upsert?: user_allergyUpsertWithWhereUniqueWithoutAllergy_minInput | user_allergyUpsertWithWhereUniqueWithoutAllergy_minInput[]
    createMany?: user_allergyCreateManyAllergy_minInputEnvelope
    set?: user_allergyWhereUniqueInput | user_allergyWhereUniqueInput[]
    disconnect?: user_allergyWhereUniqueInput | user_allergyWhereUniqueInput[]
    delete?: user_allergyWhereUniqueInput | user_allergyWhereUniqueInput[]
    connect?: user_allergyWhereUniqueInput | user_allergyWhereUniqueInput[]
    update?: user_allergyUpdateWithWhereUniqueWithoutAllergy_minInput | user_allergyUpdateWithWhereUniqueWithoutAllergy_minInput[]
    updateMany?: user_allergyUpdateManyWithWhereWithoutAllergy_minInput | user_allergyUpdateManyWithWhereWithoutAllergy_minInput[]
    deleteMany?: user_allergyScalarWhereInput | user_allergyScalarWhereInput[]
  }

  export type user_allergyUncheckedUpdateManyWithoutAllergy_minNestedInput = {
    create?: XOR<user_allergyCreateWithoutAllergy_minInput, user_allergyUncheckedCreateWithoutAllergy_minInput> | user_allergyCreateWithoutAllergy_minInput[] | user_allergyUncheckedCreateWithoutAllergy_minInput[]
    connectOrCreate?: user_allergyCreateOrConnectWithoutAllergy_minInput | user_allergyCreateOrConnectWithoutAllergy_minInput[]
    upsert?: user_allergyUpsertWithWhereUniqueWithoutAllergy_minInput | user_allergyUpsertWithWhereUniqueWithoutAllergy_minInput[]
    createMany?: user_allergyCreateManyAllergy_minInputEnvelope
    set?: user_allergyWhereUniqueInput | user_allergyWhereUniqueInput[]
    disconnect?: user_allergyWhereUniqueInput | user_allergyWhereUniqueInput[]
    delete?: user_allergyWhereUniqueInput | user_allergyWhereUniqueInput[]
    connect?: user_allergyWhereUniqueInput | user_allergyWhereUniqueInput[]
    update?: user_allergyUpdateWithWhereUniqueWithoutAllergy_minInput | user_allergyUpdateWithWhereUniqueWithoutAllergy_minInput[]
    updateMany?: user_allergyUpdateManyWithWhereWithoutAllergy_minInput | user_allergyUpdateManyWithWhereWithoutAllergy_minInput[]
    deleteMany?: user_allergyScalarWhereInput | user_allergyScalarWhereInput[]
  }

  export type userCreateNestedOneWithoutInquiryInput = {
    create?: XOR<userCreateWithoutInquiryInput, userUncheckedCreateWithoutInquiryInput>
    connectOrCreate?: userCreateOrConnectWithoutInquiryInput
    connect?: userWhereUniqueInput
  }

  export type userUpdateOneRequiredWithoutInquiryNestedInput = {
    create?: XOR<userCreateWithoutInquiryInput, userUncheckedCreateWithoutInquiryInput>
    connectOrCreate?: userCreateOrConnectWithoutInquiryInput
    upsert?: userUpsertWithoutInquiryInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutInquiryInput, userUpdateWithoutInquiryInput>, userUncheckedUpdateWithoutInquiryInput>
  }

  export type meal_timeCreateNestedOneWithoutMeal_alertInput = {
    create?: XOR<meal_timeCreateWithoutMeal_alertInput, meal_timeUncheckedCreateWithoutMeal_alertInput>
    connectOrCreate?: meal_timeCreateOrConnectWithoutMeal_alertInput
    connect?: meal_timeWhereUniqueInput
  }

  export type userCreateNestedOneWithoutMeal_alertInput = {
    create?: XOR<userCreateWithoutMeal_alertInput, userUncheckedCreateWithoutMeal_alertInput>
    connectOrCreate?: userCreateOrConnectWithoutMeal_alertInput
    connect?: userWhereUniqueInput
  }

  export type meal_timeUpdateOneRequiredWithoutMeal_alertNestedInput = {
    create?: XOR<meal_timeCreateWithoutMeal_alertInput, meal_timeUncheckedCreateWithoutMeal_alertInput>
    connectOrCreate?: meal_timeCreateOrConnectWithoutMeal_alertInput
    upsert?: meal_timeUpsertWithoutMeal_alertInput
    connect?: meal_timeWhereUniqueInput
    update?: XOR<XOR<meal_timeUpdateToOneWithWhereWithoutMeal_alertInput, meal_timeUpdateWithoutMeal_alertInput>, meal_timeUncheckedUpdateWithoutMeal_alertInput>
  }

  export type userUpdateOneRequiredWithoutMeal_alertNestedInput = {
    create?: XOR<userCreateWithoutMeal_alertInput, userUncheckedCreateWithoutMeal_alertInput>
    connectOrCreate?: userCreateOrConnectWithoutMeal_alertInput
    upsert?: userUpsertWithoutMeal_alertInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutMeal_alertInput, userUpdateWithoutMeal_alertInput>, userUncheckedUpdateWithoutMeal_alertInput>
  }

  export type meal_alertCreateNestedManyWithoutMeal_timeInput = {
    create?: XOR<meal_alertCreateWithoutMeal_timeInput, meal_alertUncheckedCreateWithoutMeal_timeInput> | meal_alertCreateWithoutMeal_timeInput[] | meal_alertUncheckedCreateWithoutMeal_timeInput[]
    connectOrCreate?: meal_alertCreateOrConnectWithoutMeal_timeInput | meal_alertCreateOrConnectWithoutMeal_timeInput[]
    createMany?: meal_alertCreateManyMeal_timeInputEnvelope
    connect?: meal_alertWhereUniqueInput | meal_alertWhereUniqueInput[]
  }

  export type meal_alertUncheckedCreateNestedManyWithoutMeal_timeInput = {
    create?: XOR<meal_alertCreateWithoutMeal_timeInput, meal_alertUncheckedCreateWithoutMeal_timeInput> | meal_alertCreateWithoutMeal_timeInput[] | meal_alertUncheckedCreateWithoutMeal_timeInput[]
    connectOrCreate?: meal_alertCreateOrConnectWithoutMeal_timeInput | meal_alertCreateOrConnectWithoutMeal_timeInput[]
    createMany?: meal_alertCreateManyMeal_timeInputEnvelope
    connect?: meal_alertWhereUniqueInput | meal_alertWhereUniqueInput[]
  }

  export type meal_alertUpdateManyWithoutMeal_timeNestedInput = {
    create?: XOR<meal_alertCreateWithoutMeal_timeInput, meal_alertUncheckedCreateWithoutMeal_timeInput> | meal_alertCreateWithoutMeal_timeInput[] | meal_alertUncheckedCreateWithoutMeal_timeInput[]
    connectOrCreate?: meal_alertCreateOrConnectWithoutMeal_timeInput | meal_alertCreateOrConnectWithoutMeal_timeInput[]
    upsert?: meal_alertUpsertWithWhereUniqueWithoutMeal_timeInput | meal_alertUpsertWithWhereUniqueWithoutMeal_timeInput[]
    createMany?: meal_alertCreateManyMeal_timeInputEnvelope
    set?: meal_alertWhereUniqueInput | meal_alertWhereUniqueInput[]
    disconnect?: meal_alertWhereUniqueInput | meal_alertWhereUniqueInput[]
    delete?: meal_alertWhereUniqueInput | meal_alertWhereUniqueInput[]
    connect?: meal_alertWhereUniqueInput | meal_alertWhereUniqueInput[]
    update?: meal_alertUpdateWithWhereUniqueWithoutMeal_timeInput | meal_alertUpdateWithWhereUniqueWithoutMeal_timeInput[]
    updateMany?: meal_alertUpdateManyWithWhereWithoutMeal_timeInput | meal_alertUpdateManyWithWhereWithoutMeal_timeInput[]
    deleteMany?: meal_alertScalarWhereInput | meal_alertScalarWhereInput[]
  }

  export type meal_alertUncheckedUpdateManyWithoutMeal_timeNestedInput = {
    create?: XOR<meal_alertCreateWithoutMeal_timeInput, meal_alertUncheckedCreateWithoutMeal_timeInput> | meal_alertCreateWithoutMeal_timeInput[] | meal_alertUncheckedCreateWithoutMeal_timeInput[]
    connectOrCreate?: meal_alertCreateOrConnectWithoutMeal_timeInput | meal_alertCreateOrConnectWithoutMeal_timeInput[]
    upsert?: meal_alertUpsertWithWhereUniqueWithoutMeal_timeInput | meal_alertUpsertWithWhereUniqueWithoutMeal_timeInput[]
    createMany?: meal_alertCreateManyMeal_timeInputEnvelope
    set?: meal_alertWhereUniqueInput | meal_alertWhereUniqueInput[]
    disconnect?: meal_alertWhereUniqueInput | meal_alertWhereUniqueInput[]
    delete?: meal_alertWhereUniqueInput | meal_alertWhereUniqueInput[]
    connect?: meal_alertWhereUniqueInput | meal_alertWhereUniqueInput[]
    update?: meal_alertUpdateWithWhereUniqueWithoutMeal_timeInput | meal_alertUpdateWithWhereUniqueWithoutMeal_timeInput[]
    updateMany?: meal_alertUpdateManyWithWhereWithoutMeal_timeInput | meal_alertUpdateManyWithWhereWithoutMeal_timeInput[]
    deleteMany?: meal_alertScalarWhereInput | meal_alertScalarWhereInput[]
  }

  export type allergy_minCreateNestedOneWithoutUser_allergyInput = {
    create?: XOR<allergy_minCreateWithoutUser_allergyInput, allergy_minUncheckedCreateWithoutUser_allergyInput>
    connectOrCreate?: allergy_minCreateOrConnectWithoutUser_allergyInput
    connect?: allergy_minWhereUniqueInput
  }

  export type userCreateNestedOneWithoutUser_allergyInput = {
    create?: XOR<userCreateWithoutUser_allergyInput, userUncheckedCreateWithoutUser_allergyInput>
    connectOrCreate?: userCreateOrConnectWithoutUser_allergyInput
    connect?: userWhereUniqueInput
  }

  export type allergy_minUpdateOneRequiredWithoutUser_allergyNestedInput = {
    create?: XOR<allergy_minCreateWithoutUser_allergyInput, allergy_minUncheckedCreateWithoutUser_allergyInput>
    connectOrCreate?: allergy_minCreateOrConnectWithoutUser_allergyInput
    upsert?: allergy_minUpsertWithoutUser_allergyInput
    connect?: allergy_minWhereUniqueInput
    update?: XOR<XOR<allergy_minUpdateToOneWithWhereWithoutUser_allergyInput, allergy_minUpdateWithoutUser_allergyInput>, allergy_minUncheckedUpdateWithoutUser_allergyInput>
  }

  export type userUpdateOneRequiredWithoutUser_allergyNestedInput = {
    create?: XOR<userCreateWithoutUser_allergyInput, userUncheckedCreateWithoutUser_allergyInput>
    connectOrCreate?: userCreateOrConnectWithoutUser_allergyInput
    upsert?: userUpsertWithoutUser_allergyInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutUser_allergyInput, userUpdateWithoutUser_allergyInput>, userUncheckedUpdateWithoutUser_allergyInput>
  }

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumuser_exerciseNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.user_exercise | Enumuser_exerciseFieldRefInput<$PrismaModel> | null
    in?: $Enums.user_exercise[] | null
    notIn?: $Enums.user_exercise[] | null
    not?: NestedEnumuser_exerciseNullableFilter<$PrismaModel> | $Enums.user_exercise | null
  }

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumuser_exerciseNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.user_exercise | Enumuser_exerciseFieldRefInput<$PrismaModel> | null
    in?: $Enums.user_exercise[] | null
    notIn?: $Enums.user_exercise[] | null
    not?: NestedEnumuser_exerciseNullableWithAggregatesFilter<$PrismaModel> | $Enums.user_exercise | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumuser_exerciseNullableFilter<$PrismaModel>
    _max?: NestedEnumuser_exerciseNullableFilter<$PrismaModel>
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type agreement_consentCreateWithoutUserInput = {
    id?: bigint | number
    terms_of_service?: boolean | null
    privacy_policy?: boolean | null
    location_service?: boolean | null
    is_over14?: boolean | null
    created_at?: Date | string | null
  }

  export type agreement_consentUncheckedCreateWithoutUserInput = {
    id?: bigint | number
    terms_of_service?: boolean | null
    privacy_policy?: boolean | null
    location_service?: boolean | null
    is_over14?: boolean | null
    created_at?: Date | string | null
  }

  export type agreement_consentCreateOrConnectWithoutUserInput = {
    where: agreement_consentWhereUniqueInput
    create: XOR<agreement_consentCreateWithoutUserInput, agreement_consentUncheckedCreateWithoutUserInput>
  }

  export type agreement_consentCreateManyUserInputEnvelope = {
    data: agreement_consentCreateManyUserInput | agreement_consentCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type inquiryCreateWithoutUserInput = {
    id: bigint | number
    title?: string | null
    content?: string | null
    created_at?: Date | string | null
  }

  export type inquiryUncheckedCreateWithoutUserInput = {
    id: bigint | number
    title?: string | null
    content?: string | null
    created_at?: Date | string | null
  }

  export type inquiryCreateOrConnectWithoutUserInput = {
    where: inquiryWhereUniqueInput
    create: XOR<inquiryCreateWithoutUserInput, inquiryUncheckedCreateWithoutUserInput>
  }

  export type inquiryCreateManyUserInputEnvelope = {
    data: inquiryCreateManyUserInput | inquiryCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type meal_alertCreateWithoutUserInput = {
    enabled?: boolean | null
    alarm_time?: Date | string | null
    meal_time: meal_timeCreateNestedOneWithoutMeal_alertInput
  }

  export type meal_alertUncheckedCreateWithoutUserInput = {
    meal_id: bigint | number
    enabled?: boolean | null
    alarm_time?: Date | string | null
  }

  export type meal_alertCreateOrConnectWithoutUserInput = {
    where: meal_alertWhereUniqueInput
    create: XOR<meal_alertCreateWithoutUserInput, meal_alertUncheckedCreateWithoutUserInput>
  }

  export type meal_alertCreateManyUserInputEnvelope = {
    data: meal_alertCreateManyUserInput | meal_alertCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type user_allergyCreateWithoutUserInput = {
    allergy_min: allergy_minCreateNestedOneWithoutUser_allergyInput
  }

  export type user_allergyUncheckedCreateWithoutUserInput = {
    allergy_id: bigint | number
  }

  export type user_allergyCreateOrConnectWithoutUserInput = {
    where: user_allergyWhereUniqueInput
    create: XOR<user_allergyCreateWithoutUserInput, user_allergyUncheckedCreateWithoutUserInput>
  }

  export type user_allergyCreateManyUserInputEnvelope = {
    data: user_allergyCreateManyUserInput | user_allergyCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type agreement_consentUpsertWithWhereUniqueWithoutUserInput = {
    where: agreement_consentWhereUniqueInput
    update: XOR<agreement_consentUpdateWithoutUserInput, agreement_consentUncheckedUpdateWithoutUserInput>
    create: XOR<agreement_consentCreateWithoutUserInput, agreement_consentUncheckedCreateWithoutUserInput>
  }

  export type agreement_consentUpdateWithWhereUniqueWithoutUserInput = {
    where: agreement_consentWhereUniqueInput
    data: XOR<agreement_consentUpdateWithoutUserInput, agreement_consentUncheckedUpdateWithoutUserInput>
  }

  export type agreement_consentUpdateManyWithWhereWithoutUserInput = {
    where: agreement_consentScalarWhereInput
    data: XOR<agreement_consentUpdateManyMutationInput, agreement_consentUncheckedUpdateManyWithoutUserInput>
  }

  export type agreement_consentScalarWhereInput = {
    AND?: agreement_consentScalarWhereInput | agreement_consentScalarWhereInput[]
    OR?: agreement_consentScalarWhereInput[]
    NOT?: agreement_consentScalarWhereInput | agreement_consentScalarWhereInput[]
    id?: BigIntFilter<"agreement_consent"> | bigint | number
    user_id?: BigIntFilter<"agreement_consent"> | bigint | number
    terms_of_service?: BoolNullableFilter<"agreement_consent"> | boolean | null
    privacy_policy?: BoolNullableFilter<"agreement_consent"> | boolean | null
    location_service?: BoolNullableFilter<"agreement_consent"> | boolean | null
    is_over14?: BoolNullableFilter<"agreement_consent"> | boolean | null
    created_at?: DateTimeNullableFilter<"agreement_consent"> | Date | string | null
  }

  export type inquiryUpsertWithWhereUniqueWithoutUserInput = {
    where: inquiryWhereUniqueInput
    update: XOR<inquiryUpdateWithoutUserInput, inquiryUncheckedUpdateWithoutUserInput>
    create: XOR<inquiryCreateWithoutUserInput, inquiryUncheckedCreateWithoutUserInput>
  }

  export type inquiryUpdateWithWhereUniqueWithoutUserInput = {
    where: inquiryWhereUniqueInput
    data: XOR<inquiryUpdateWithoutUserInput, inquiryUncheckedUpdateWithoutUserInput>
  }

  export type inquiryUpdateManyWithWhereWithoutUserInput = {
    where: inquiryScalarWhereInput
    data: XOR<inquiryUpdateManyMutationInput, inquiryUncheckedUpdateManyWithoutUserInput>
  }

  export type inquiryScalarWhereInput = {
    AND?: inquiryScalarWhereInput | inquiryScalarWhereInput[]
    OR?: inquiryScalarWhereInput[]
    NOT?: inquiryScalarWhereInput | inquiryScalarWhereInput[]
    id?: BigIntFilter<"inquiry"> | bigint | number
    user_id?: BigIntFilter<"inquiry"> | bigint | number
    title?: StringNullableFilter<"inquiry"> | string | null
    content?: StringNullableFilter<"inquiry"> | string | null
    created_at?: DateTimeNullableFilter<"inquiry"> | Date | string | null
  }

  export type meal_alertUpsertWithWhereUniqueWithoutUserInput = {
    where: meal_alertWhereUniqueInput
    update: XOR<meal_alertUpdateWithoutUserInput, meal_alertUncheckedUpdateWithoutUserInput>
    create: XOR<meal_alertCreateWithoutUserInput, meal_alertUncheckedCreateWithoutUserInput>
  }

  export type meal_alertUpdateWithWhereUniqueWithoutUserInput = {
    where: meal_alertWhereUniqueInput
    data: XOR<meal_alertUpdateWithoutUserInput, meal_alertUncheckedUpdateWithoutUserInput>
  }

  export type meal_alertUpdateManyWithWhereWithoutUserInput = {
    where: meal_alertScalarWhereInput
    data: XOR<meal_alertUpdateManyMutationInput, meal_alertUncheckedUpdateManyWithoutUserInput>
  }

  export type meal_alertScalarWhereInput = {
    AND?: meal_alertScalarWhereInput | meal_alertScalarWhereInput[]
    OR?: meal_alertScalarWhereInput[]
    NOT?: meal_alertScalarWhereInput | meal_alertScalarWhereInput[]
    user_id?: BigIntFilter<"meal_alert"> | bigint | number
    meal_id?: BigIntFilter<"meal_alert"> | bigint | number
    enabled?: BoolNullableFilter<"meal_alert"> | boolean | null
    alarm_time?: DateTimeNullableFilter<"meal_alert"> | Date | string | null
  }

  export type user_allergyUpsertWithWhereUniqueWithoutUserInput = {
    where: user_allergyWhereUniqueInput
    update: XOR<user_allergyUpdateWithoutUserInput, user_allergyUncheckedUpdateWithoutUserInput>
    create: XOR<user_allergyCreateWithoutUserInput, user_allergyUncheckedCreateWithoutUserInput>
  }

  export type user_allergyUpdateWithWhereUniqueWithoutUserInput = {
    where: user_allergyWhereUniqueInput
    data: XOR<user_allergyUpdateWithoutUserInput, user_allergyUncheckedUpdateWithoutUserInput>
  }

  export type user_allergyUpdateManyWithWhereWithoutUserInput = {
    where: user_allergyScalarWhereInput
    data: XOR<user_allergyUpdateManyMutationInput, user_allergyUncheckedUpdateManyWithoutUserInput>
  }

  export type user_allergyScalarWhereInput = {
    AND?: user_allergyScalarWhereInput | user_allergyScalarWhereInput[]
    OR?: user_allergyScalarWhereInput[]
    NOT?: user_allergyScalarWhereInput | user_allergyScalarWhereInput[]
    user_id?: BigIntFilter<"user_allergy"> | bigint | number
    allergy_id?: BigIntFilter<"user_allergy"> | bigint | number
  }

  export type userCreateWithoutAgreement_consentInput = {
    id: bigint | number
    phone_num?: string | null
    nickname?: string | null
    exercise?: $Enums.user_exercise | null
    inquiry?: inquiryCreateNestedManyWithoutUserInput
    meal_alert?: meal_alertCreateNestedManyWithoutUserInput
    user_allergy?: user_allergyCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateWithoutAgreement_consentInput = {
    id: bigint | number
    phone_num?: string | null
    nickname?: string | null
    exercise?: $Enums.user_exercise | null
    inquiry?: inquiryUncheckedCreateNestedManyWithoutUserInput
    meal_alert?: meal_alertUncheckedCreateNestedManyWithoutUserInput
    user_allergy?: user_allergyUncheckedCreateNestedManyWithoutUserInput
  }

  export type userCreateOrConnectWithoutAgreement_consentInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutAgreement_consentInput, userUncheckedCreateWithoutAgreement_consentInput>
  }

  export type userUpsertWithoutAgreement_consentInput = {
    update: XOR<userUpdateWithoutAgreement_consentInput, userUncheckedUpdateWithoutAgreement_consentInput>
    create: XOR<userCreateWithoutAgreement_consentInput, userUncheckedCreateWithoutAgreement_consentInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutAgreement_consentInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutAgreement_consentInput, userUncheckedUpdateWithoutAgreement_consentInput>
  }

  export type userUpdateWithoutAgreement_consentInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    phone_num?: NullableStringFieldUpdateOperationsInput | string | null
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    exercise?: NullableEnumuser_exerciseFieldUpdateOperationsInput | $Enums.user_exercise | null
    inquiry?: inquiryUpdateManyWithoutUserNestedInput
    meal_alert?: meal_alertUpdateManyWithoutUserNestedInput
    user_allergy?: user_allergyUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutAgreement_consentInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    phone_num?: NullableStringFieldUpdateOperationsInput | string | null
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    exercise?: NullableEnumuser_exerciseFieldUpdateOperationsInput | $Enums.user_exercise | null
    inquiry?: inquiryUncheckedUpdateManyWithoutUserNestedInput
    meal_alert?: meal_alertUncheckedUpdateManyWithoutUserNestedInput
    user_allergy?: user_allergyUncheckedUpdateManyWithoutUserNestedInput
  }

  export type user_allergyCreateWithoutAllergy_minInput = {
    user: userCreateNestedOneWithoutUser_allergyInput
  }

  export type user_allergyUncheckedCreateWithoutAllergy_minInput = {
    user_id: bigint | number
  }

  export type user_allergyCreateOrConnectWithoutAllergy_minInput = {
    where: user_allergyWhereUniqueInput
    create: XOR<user_allergyCreateWithoutAllergy_minInput, user_allergyUncheckedCreateWithoutAllergy_minInput>
  }

  export type user_allergyCreateManyAllergy_minInputEnvelope = {
    data: user_allergyCreateManyAllergy_minInput | user_allergyCreateManyAllergy_minInput[]
    skipDuplicates?: boolean
  }

  export type user_allergyUpsertWithWhereUniqueWithoutAllergy_minInput = {
    where: user_allergyWhereUniqueInput
    update: XOR<user_allergyUpdateWithoutAllergy_minInput, user_allergyUncheckedUpdateWithoutAllergy_minInput>
    create: XOR<user_allergyCreateWithoutAllergy_minInput, user_allergyUncheckedCreateWithoutAllergy_minInput>
  }

  export type user_allergyUpdateWithWhereUniqueWithoutAllergy_minInput = {
    where: user_allergyWhereUniqueInput
    data: XOR<user_allergyUpdateWithoutAllergy_minInput, user_allergyUncheckedUpdateWithoutAllergy_minInput>
  }

  export type user_allergyUpdateManyWithWhereWithoutAllergy_minInput = {
    where: user_allergyScalarWhereInput
    data: XOR<user_allergyUpdateManyMutationInput, user_allergyUncheckedUpdateManyWithoutAllergy_minInput>
  }

  export type userCreateWithoutInquiryInput = {
    id: bigint | number
    phone_num?: string | null
    nickname?: string | null
    exercise?: $Enums.user_exercise | null
    agreement_consent?: agreement_consentCreateNestedManyWithoutUserInput
    meal_alert?: meal_alertCreateNestedManyWithoutUserInput
    user_allergy?: user_allergyCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateWithoutInquiryInput = {
    id: bigint | number
    phone_num?: string | null
    nickname?: string | null
    exercise?: $Enums.user_exercise | null
    agreement_consent?: agreement_consentUncheckedCreateNestedManyWithoutUserInput
    meal_alert?: meal_alertUncheckedCreateNestedManyWithoutUserInput
    user_allergy?: user_allergyUncheckedCreateNestedManyWithoutUserInput
  }

  export type userCreateOrConnectWithoutInquiryInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutInquiryInput, userUncheckedCreateWithoutInquiryInput>
  }

  export type userUpsertWithoutInquiryInput = {
    update: XOR<userUpdateWithoutInquiryInput, userUncheckedUpdateWithoutInquiryInput>
    create: XOR<userCreateWithoutInquiryInput, userUncheckedCreateWithoutInquiryInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutInquiryInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutInquiryInput, userUncheckedUpdateWithoutInquiryInput>
  }

  export type userUpdateWithoutInquiryInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    phone_num?: NullableStringFieldUpdateOperationsInput | string | null
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    exercise?: NullableEnumuser_exerciseFieldUpdateOperationsInput | $Enums.user_exercise | null
    agreement_consent?: agreement_consentUpdateManyWithoutUserNestedInput
    meal_alert?: meal_alertUpdateManyWithoutUserNestedInput
    user_allergy?: user_allergyUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutInquiryInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    phone_num?: NullableStringFieldUpdateOperationsInput | string | null
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    exercise?: NullableEnumuser_exerciseFieldUpdateOperationsInput | $Enums.user_exercise | null
    agreement_consent?: agreement_consentUncheckedUpdateManyWithoutUserNestedInput
    meal_alert?: meal_alertUncheckedUpdateManyWithoutUserNestedInput
    user_allergy?: user_allergyUncheckedUpdateManyWithoutUserNestedInput
  }

  export type meal_timeCreateWithoutMeal_alertInput = {
    id?: bigint | number
    alert_time?: Date | string | null
    comment?: string | null
  }

  export type meal_timeUncheckedCreateWithoutMeal_alertInput = {
    id?: bigint | number
    alert_time?: Date | string | null
    comment?: string | null
  }

  export type meal_timeCreateOrConnectWithoutMeal_alertInput = {
    where: meal_timeWhereUniqueInput
    create: XOR<meal_timeCreateWithoutMeal_alertInput, meal_timeUncheckedCreateWithoutMeal_alertInput>
  }

  export type userCreateWithoutMeal_alertInput = {
    id: bigint | number
    phone_num?: string | null
    nickname?: string | null
    exercise?: $Enums.user_exercise | null
    agreement_consent?: agreement_consentCreateNestedManyWithoutUserInput
    inquiry?: inquiryCreateNestedManyWithoutUserInput
    user_allergy?: user_allergyCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateWithoutMeal_alertInput = {
    id: bigint | number
    phone_num?: string | null
    nickname?: string | null
    exercise?: $Enums.user_exercise | null
    agreement_consent?: agreement_consentUncheckedCreateNestedManyWithoutUserInput
    inquiry?: inquiryUncheckedCreateNestedManyWithoutUserInput
    user_allergy?: user_allergyUncheckedCreateNestedManyWithoutUserInput
  }

  export type userCreateOrConnectWithoutMeal_alertInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutMeal_alertInput, userUncheckedCreateWithoutMeal_alertInput>
  }

  export type meal_timeUpsertWithoutMeal_alertInput = {
    update: XOR<meal_timeUpdateWithoutMeal_alertInput, meal_timeUncheckedUpdateWithoutMeal_alertInput>
    create: XOR<meal_timeCreateWithoutMeal_alertInput, meal_timeUncheckedCreateWithoutMeal_alertInput>
    where?: meal_timeWhereInput
  }

  export type meal_timeUpdateToOneWithWhereWithoutMeal_alertInput = {
    where?: meal_timeWhereInput
    data: XOR<meal_timeUpdateWithoutMeal_alertInput, meal_timeUncheckedUpdateWithoutMeal_alertInput>
  }

  export type meal_timeUpdateWithoutMeal_alertInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    alert_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type meal_timeUncheckedUpdateWithoutMeal_alertInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    alert_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type userUpsertWithoutMeal_alertInput = {
    update: XOR<userUpdateWithoutMeal_alertInput, userUncheckedUpdateWithoutMeal_alertInput>
    create: XOR<userCreateWithoutMeal_alertInput, userUncheckedCreateWithoutMeal_alertInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutMeal_alertInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutMeal_alertInput, userUncheckedUpdateWithoutMeal_alertInput>
  }

  export type userUpdateWithoutMeal_alertInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    phone_num?: NullableStringFieldUpdateOperationsInput | string | null
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    exercise?: NullableEnumuser_exerciseFieldUpdateOperationsInput | $Enums.user_exercise | null
    agreement_consent?: agreement_consentUpdateManyWithoutUserNestedInput
    inquiry?: inquiryUpdateManyWithoutUserNestedInput
    user_allergy?: user_allergyUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutMeal_alertInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    phone_num?: NullableStringFieldUpdateOperationsInput | string | null
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    exercise?: NullableEnumuser_exerciseFieldUpdateOperationsInput | $Enums.user_exercise | null
    agreement_consent?: agreement_consentUncheckedUpdateManyWithoutUserNestedInput
    inquiry?: inquiryUncheckedUpdateManyWithoutUserNestedInput
    user_allergy?: user_allergyUncheckedUpdateManyWithoutUserNestedInput
  }

  export type meal_alertCreateWithoutMeal_timeInput = {
    enabled?: boolean | null
    alarm_time?: Date | string | null
    user: userCreateNestedOneWithoutMeal_alertInput
  }

  export type meal_alertUncheckedCreateWithoutMeal_timeInput = {
    user_id: bigint | number
    enabled?: boolean | null
    alarm_time?: Date | string | null
  }

  export type meal_alertCreateOrConnectWithoutMeal_timeInput = {
    where: meal_alertWhereUniqueInput
    create: XOR<meal_alertCreateWithoutMeal_timeInput, meal_alertUncheckedCreateWithoutMeal_timeInput>
  }

  export type meal_alertCreateManyMeal_timeInputEnvelope = {
    data: meal_alertCreateManyMeal_timeInput | meal_alertCreateManyMeal_timeInput[]
    skipDuplicates?: boolean
  }

  export type meal_alertUpsertWithWhereUniqueWithoutMeal_timeInput = {
    where: meal_alertWhereUniqueInput
    update: XOR<meal_alertUpdateWithoutMeal_timeInput, meal_alertUncheckedUpdateWithoutMeal_timeInput>
    create: XOR<meal_alertCreateWithoutMeal_timeInput, meal_alertUncheckedCreateWithoutMeal_timeInput>
  }

  export type meal_alertUpdateWithWhereUniqueWithoutMeal_timeInput = {
    where: meal_alertWhereUniqueInput
    data: XOR<meal_alertUpdateWithoutMeal_timeInput, meal_alertUncheckedUpdateWithoutMeal_timeInput>
  }

  export type meal_alertUpdateManyWithWhereWithoutMeal_timeInput = {
    where: meal_alertScalarWhereInput
    data: XOR<meal_alertUpdateManyMutationInput, meal_alertUncheckedUpdateManyWithoutMeal_timeInput>
  }

  export type allergy_minCreateWithoutUser_allergyInput = {
    id?: bigint | number
    allergy?: string | null
  }

  export type allergy_minUncheckedCreateWithoutUser_allergyInput = {
    id?: bigint | number
    allergy?: string | null
  }

  export type allergy_minCreateOrConnectWithoutUser_allergyInput = {
    where: allergy_minWhereUniqueInput
    create: XOR<allergy_minCreateWithoutUser_allergyInput, allergy_minUncheckedCreateWithoutUser_allergyInput>
  }

  export type userCreateWithoutUser_allergyInput = {
    id: bigint | number
    phone_num?: string | null
    nickname?: string | null
    exercise?: $Enums.user_exercise | null
    agreement_consent?: agreement_consentCreateNestedManyWithoutUserInput
    inquiry?: inquiryCreateNestedManyWithoutUserInput
    meal_alert?: meal_alertCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateWithoutUser_allergyInput = {
    id: bigint | number
    phone_num?: string | null
    nickname?: string | null
    exercise?: $Enums.user_exercise | null
    agreement_consent?: agreement_consentUncheckedCreateNestedManyWithoutUserInput
    inquiry?: inquiryUncheckedCreateNestedManyWithoutUserInput
    meal_alert?: meal_alertUncheckedCreateNestedManyWithoutUserInput
  }

  export type userCreateOrConnectWithoutUser_allergyInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutUser_allergyInput, userUncheckedCreateWithoutUser_allergyInput>
  }

  export type allergy_minUpsertWithoutUser_allergyInput = {
    update: XOR<allergy_minUpdateWithoutUser_allergyInput, allergy_minUncheckedUpdateWithoutUser_allergyInput>
    create: XOR<allergy_minCreateWithoutUser_allergyInput, allergy_minUncheckedCreateWithoutUser_allergyInput>
    where?: allergy_minWhereInput
  }

  export type allergy_minUpdateToOneWithWhereWithoutUser_allergyInput = {
    where?: allergy_minWhereInput
    data: XOR<allergy_minUpdateWithoutUser_allergyInput, allergy_minUncheckedUpdateWithoutUser_allergyInput>
  }

  export type allergy_minUpdateWithoutUser_allergyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    allergy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type allergy_minUncheckedUpdateWithoutUser_allergyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    allergy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type userUpsertWithoutUser_allergyInput = {
    update: XOR<userUpdateWithoutUser_allergyInput, userUncheckedUpdateWithoutUser_allergyInput>
    create: XOR<userCreateWithoutUser_allergyInput, userUncheckedCreateWithoutUser_allergyInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutUser_allergyInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutUser_allergyInput, userUncheckedUpdateWithoutUser_allergyInput>
  }

  export type userUpdateWithoutUser_allergyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    phone_num?: NullableStringFieldUpdateOperationsInput | string | null
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    exercise?: NullableEnumuser_exerciseFieldUpdateOperationsInput | $Enums.user_exercise | null
    agreement_consent?: agreement_consentUpdateManyWithoutUserNestedInput
    inquiry?: inquiryUpdateManyWithoutUserNestedInput
    meal_alert?: meal_alertUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutUser_allergyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    phone_num?: NullableStringFieldUpdateOperationsInput | string | null
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    exercise?: NullableEnumuser_exerciseFieldUpdateOperationsInput | $Enums.user_exercise | null
    agreement_consent?: agreement_consentUncheckedUpdateManyWithoutUserNestedInput
    inquiry?: inquiryUncheckedUpdateManyWithoutUserNestedInput
    meal_alert?: meal_alertUncheckedUpdateManyWithoutUserNestedInput
  }

  export type agreement_consentCreateManyUserInput = {
    id?: bigint | number
    terms_of_service?: boolean | null
    privacy_policy?: boolean | null
    location_service?: boolean | null
    is_over14?: boolean | null
    created_at?: Date | string | null
  }

  export type inquiryCreateManyUserInput = {
    id: bigint | number
    title?: string | null
    content?: string | null
    created_at?: Date | string | null
  }

  export type meal_alertCreateManyUserInput = {
    meal_id: bigint | number
    enabled?: boolean | null
    alarm_time?: Date | string | null
  }

  export type user_allergyCreateManyUserInput = {
    allergy_id: bigint | number
  }

  export type agreement_consentUpdateWithoutUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    terms_of_service?: NullableBoolFieldUpdateOperationsInput | boolean | null
    privacy_policy?: NullableBoolFieldUpdateOperationsInput | boolean | null
    location_service?: NullableBoolFieldUpdateOperationsInput | boolean | null
    is_over14?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type agreement_consentUncheckedUpdateWithoutUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    terms_of_service?: NullableBoolFieldUpdateOperationsInput | boolean | null
    privacy_policy?: NullableBoolFieldUpdateOperationsInput | boolean | null
    location_service?: NullableBoolFieldUpdateOperationsInput | boolean | null
    is_over14?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type agreement_consentUncheckedUpdateManyWithoutUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    terms_of_service?: NullableBoolFieldUpdateOperationsInput | boolean | null
    privacy_policy?: NullableBoolFieldUpdateOperationsInput | boolean | null
    location_service?: NullableBoolFieldUpdateOperationsInput | boolean | null
    is_over14?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type inquiryUpdateWithoutUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type inquiryUncheckedUpdateWithoutUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type inquiryUncheckedUpdateManyWithoutUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type meal_alertUpdateWithoutUserInput = {
    enabled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    alarm_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    meal_time?: meal_timeUpdateOneRequiredWithoutMeal_alertNestedInput
  }

  export type meal_alertUncheckedUpdateWithoutUserInput = {
    meal_id?: BigIntFieldUpdateOperationsInput | bigint | number
    enabled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    alarm_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type meal_alertUncheckedUpdateManyWithoutUserInput = {
    meal_id?: BigIntFieldUpdateOperationsInput | bigint | number
    enabled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    alarm_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type user_allergyUpdateWithoutUserInput = {
    allergy_min?: allergy_minUpdateOneRequiredWithoutUser_allergyNestedInput
  }

  export type user_allergyUncheckedUpdateWithoutUserInput = {
    allergy_id?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type user_allergyUncheckedUpdateManyWithoutUserInput = {
    allergy_id?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type user_allergyCreateManyAllergy_minInput = {
    user_id: bigint | number
  }

  export type user_allergyUpdateWithoutAllergy_minInput = {
    user?: userUpdateOneRequiredWithoutUser_allergyNestedInput
  }

  export type user_allergyUncheckedUpdateWithoutAllergy_minInput = {
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type user_allergyUncheckedUpdateManyWithoutAllergy_minInput = {
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type meal_alertCreateManyMeal_timeInput = {
    user_id: bigint | number
    enabled?: boolean | null
    alarm_time?: Date | string | null
  }

  export type meal_alertUpdateWithoutMeal_timeInput = {
    enabled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    alarm_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: userUpdateOneRequiredWithoutMeal_alertNestedInput
  }

  export type meal_alertUncheckedUpdateWithoutMeal_timeInput = {
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    enabled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    alarm_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type meal_alertUncheckedUpdateManyWithoutMeal_timeInput = {
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    enabled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    alarm_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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