
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
 * This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
 */
export type meal_alert = $Result.DefaultSelection<Prisma.$meal_alertPayload>
/**
 * Model meal_time
 * 
 */
export type meal_time = $Result.DefaultSelection<Prisma.$meal_timePayload>
/**
 * Model prefer
 * 
 */
export type prefer = $Result.DefaultSelection<Prisma.$preferPayload>
/**
 * Model recommend_except
 * 
 */
export type recommend_except = $Result.DefaultSelection<Prisma.$recommend_exceptPayload>
/**
 * Model sessions
 * 
 */
export type sessions = $Result.DefaultSelection<Prisma.$sessionsPayload>
/**
 * Model user
 * 
 */
export type user = $Result.DefaultSelection<Prisma.$userPayload>
/**
 * Model user_allergy
 * 
 */
export type user_allergy = $Result.DefaultSelection<Prisma.$user_allergyPayload>
/**
 * Model user_withdrawal
 * 
 */
export type user_withdrawal = $Result.DefaultSelection<Prisma.$user_withdrawalPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const prefer_prefer: {
  korean: 'korean',
  western: 'western',
  chinese: 'chinese',
  japanese: 'japanese',
  other: 'other'
};

export type prefer_prefer = (typeof prefer_prefer)[keyof typeof prefer_prefer]


export const user_exercise: {
  cutting: 'cutting',
  bulking: 'bulking',
  maintenance: 'maintenance'
};

export type user_exercise = (typeof user_exercise)[keyof typeof user_exercise]

}

export type prefer_prefer = $Enums.prefer_prefer

export const prefer_prefer: typeof $Enums.prefer_prefer

export type user_exercise = $Enums.user_exercise

export const user_exercise: typeof $Enums.user_exercise

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Agreement_consents
 * const agreement_consents = await prisma.agreement_consent.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Agreement_consents
   * const agreement_consents = await prisma.agreement_consent.findMany()
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
   * `prisma.prefer`: Exposes CRUD operations for the **prefer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Prefers
    * const prefers = await prisma.prefer.findMany()
    * ```
    */
  get prefer(): Prisma.preferDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.recommend_except`: Exposes CRUD operations for the **recommend_except** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Recommend_excepts
    * const recommend_excepts = await prisma.recommend_except.findMany()
    * ```
    */
  get recommend_except(): Prisma.recommend_exceptDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sessions`: Exposes CRUD operations for the **sessions** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.sessions.findMany()
    * ```
    */
  get sessions(): Prisma.sessionsDelegate<ExtArgs, ClientOptions>;

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
   * `prisma.user_allergy`: Exposes CRUD operations for the **user_allergy** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more User_allergies
    * const user_allergies = await prisma.user_allergy.findMany()
    * ```
    */
  get user_allergy(): Prisma.user_allergyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user_withdrawal`: Exposes CRUD operations for the **user_withdrawal** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more User_withdrawals
    * const user_withdrawals = await prisma.user_withdrawal.findMany()
    * ```
    */
  get user_withdrawal(): Prisma.user_withdrawalDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.19.2
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    agreement_consent: 'agreement_consent',
    allergy_min: 'allergy_min',
    inquiry: 'inquiry',
    meal_alert: 'meal_alert',
    meal_time: 'meal_time',
    prefer: 'prefer',
    recommend_except: 'recommend_except',
    sessions: 'sessions',
    user: 'user',
    user_allergy: 'user_allergy',
    user_withdrawal: 'user_withdrawal'
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
      modelProps: "agreement_consent" | "allergy_min" | "inquiry" | "meal_alert" | "meal_time" | "prefer" | "recommend_except" | "sessions" | "user" | "user_allergy" | "user_withdrawal"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
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
      prefer: {
        payload: Prisma.$preferPayload<ExtArgs>
        fields: Prisma.preferFieldRefs
        operations: {
          findUnique: {
            args: Prisma.preferFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$preferPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.preferFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$preferPayload>
          }
          findFirst: {
            args: Prisma.preferFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$preferPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.preferFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$preferPayload>
          }
          findMany: {
            args: Prisma.preferFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$preferPayload>[]
          }
          create: {
            args: Prisma.preferCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$preferPayload>
          }
          createMany: {
            args: Prisma.preferCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.preferDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$preferPayload>
          }
          update: {
            args: Prisma.preferUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$preferPayload>
          }
          deleteMany: {
            args: Prisma.preferDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.preferUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.preferUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$preferPayload>
          }
          aggregate: {
            args: Prisma.PreferAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePrefer>
          }
          groupBy: {
            args: Prisma.preferGroupByArgs<ExtArgs>
            result: $Utils.Optional<PreferGroupByOutputType>[]
          }
          count: {
            args: Prisma.preferCountArgs<ExtArgs>
            result: $Utils.Optional<PreferCountAggregateOutputType> | number
          }
        }
      }
      recommend_except: {
        payload: Prisma.$recommend_exceptPayload<ExtArgs>
        fields: Prisma.recommend_exceptFieldRefs
        operations: {
          findUnique: {
            args: Prisma.recommend_exceptFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recommend_exceptPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.recommend_exceptFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recommend_exceptPayload>
          }
          findFirst: {
            args: Prisma.recommend_exceptFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recommend_exceptPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.recommend_exceptFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recommend_exceptPayload>
          }
          findMany: {
            args: Prisma.recommend_exceptFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recommend_exceptPayload>[]
          }
          create: {
            args: Prisma.recommend_exceptCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recommend_exceptPayload>
          }
          createMany: {
            args: Prisma.recommend_exceptCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.recommend_exceptDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recommend_exceptPayload>
          }
          update: {
            args: Prisma.recommend_exceptUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recommend_exceptPayload>
          }
          deleteMany: {
            args: Prisma.recommend_exceptDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.recommend_exceptUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.recommend_exceptUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recommend_exceptPayload>
          }
          aggregate: {
            args: Prisma.Recommend_exceptAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRecommend_except>
          }
          groupBy: {
            args: Prisma.recommend_exceptGroupByArgs<ExtArgs>
            result: $Utils.Optional<Recommend_exceptGroupByOutputType>[]
          }
          count: {
            args: Prisma.recommend_exceptCountArgs<ExtArgs>
            result: $Utils.Optional<Recommend_exceptCountAggregateOutputType> | number
          }
        }
      }
      sessions: {
        payload: Prisma.$sessionsPayload<ExtArgs>
        fields: Prisma.sessionsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.sessionsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sessionsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.sessionsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sessionsPayload>
          }
          findFirst: {
            args: Prisma.sessionsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sessionsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.sessionsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sessionsPayload>
          }
          findMany: {
            args: Prisma.sessionsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sessionsPayload>[]
          }
          create: {
            args: Prisma.sessionsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sessionsPayload>
          }
          createMany: {
            args: Prisma.sessionsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.sessionsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sessionsPayload>
          }
          update: {
            args: Prisma.sessionsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sessionsPayload>
          }
          deleteMany: {
            args: Prisma.sessionsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.sessionsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.sessionsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sessionsPayload>
          }
          aggregate: {
            args: Prisma.SessionsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSessions>
          }
          groupBy: {
            args: Prisma.sessionsGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionsGroupByOutputType>[]
          }
          count: {
            args: Prisma.sessionsCountArgs<ExtArgs>
            result: $Utils.Optional<SessionsCountAggregateOutputType> | number
          }
        }
      }
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
      user_withdrawal: {
        payload: Prisma.$user_withdrawalPayload<ExtArgs>
        fields: Prisma.user_withdrawalFieldRefs
        operations: {
          findUnique: {
            args: Prisma.user_withdrawalFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_withdrawalPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.user_withdrawalFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_withdrawalPayload>
          }
          findFirst: {
            args: Prisma.user_withdrawalFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_withdrawalPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.user_withdrawalFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_withdrawalPayload>
          }
          findMany: {
            args: Prisma.user_withdrawalFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_withdrawalPayload>[]
          }
          create: {
            args: Prisma.user_withdrawalCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_withdrawalPayload>
          }
          createMany: {
            args: Prisma.user_withdrawalCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.user_withdrawalDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_withdrawalPayload>
          }
          update: {
            args: Prisma.user_withdrawalUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_withdrawalPayload>
          }
          deleteMany: {
            args: Prisma.user_withdrawalDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.user_withdrawalUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.user_withdrawalUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_withdrawalPayload>
          }
          aggregate: {
            args: Prisma.User_withdrawalAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser_withdrawal>
          }
          groupBy: {
            args: Prisma.user_withdrawalGroupByArgs<ExtArgs>
            result: $Utils.Optional<User_withdrawalGroupByOutputType>[]
          }
          count: {
            args: Prisma.user_withdrawalCountArgs<ExtArgs>
            result: $Utils.Optional<User_withdrawalCountAggregateOutputType> | number
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
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
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
    agreement_consent?: agreement_consentOmit
    allergy_min?: allergy_minOmit
    inquiry?: inquiryOmit
    meal_alert?: meal_alertOmit
    meal_time?: meal_timeOmit
    prefer?: preferOmit
    recommend_except?: recommend_exceptOmit
    sessions?: sessionsOmit
    user?: userOmit
    user_allergy?: user_allergyOmit
    user_withdrawal?: user_withdrawalOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    prefer: number
    user_allergy: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    prefer?: boolean | UserCountOutputTypeCountPreferArgs
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
  export type UserCountOutputTypeCountPreferArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: preferWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUser_allergyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_allergyWhereInput
  }


  /**
   * Models
   */

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
    marketing_consent: boolean | null
  }

  export type Agreement_consentMaxAggregateOutputType = {
    id: bigint | null
    user_id: bigint | null
    terms_of_service: boolean | null
    privacy_policy: boolean | null
    location_service: boolean | null
    is_over14: boolean | null
    created_at: Date | null
    marketing_consent: boolean | null
  }

  export type Agreement_consentCountAggregateOutputType = {
    id: number
    user_id: number
    terms_of_service: number
    privacy_policy: number
    location_service: number
    is_over14: number
    created_at: number
    marketing_consent: number
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
    marketing_consent?: true
  }

  export type Agreement_consentMaxAggregateInputType = {
    id?: true
    user_id?: true
    terms_of_service?: true
    privacy_policy?: true
    location_service?: true
    is_over14?: true
    created_at?: true
    marketing_consent?: true
  }

  export type Agreement_consentCountAggregateInputType = {
    id?: true
    user_id?: true
    terms_of_service?: true
    privacy_policy?: true
    location_service?: true
    is_over14?: true
    created_at?: true
    marketing_consent?: true
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
    marketing_consent: boolean | null
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
    marketing_consent?: boolean
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
    marketing_consent?: boolean
  }

  export type agreement_consentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "terms_of_service" | "privacy_policy" | "location_service" | "is_over14" | "created_at" | "marketing_consent", ExtArgs["result"]["agreement_consent"]>
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
      marketing_consent: boolean | null
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
    readonly marketing_consent: FieldRef<"agreement_consent", 'Boolean'>
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
  }, ExtArgs["result"]["inquiry"]>



  export type inquirySelectScalar = {
    id?: boolean
    user_id?: boolean
    title?: boolean
    content?: boolean
    created_at?: boolean
  }

  export type inquiryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "title" | "content" | "created_at", ExtArgs["result"]["inquiry"]>

  export type $inquiryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "inquiry"
    objects: {}
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
  }

  export type $meal_alertPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "meal_alert"
    objects: {
      meal_time: Prisma.$meal_timePayload<ExtArgs>
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
   * Model prefer
   */

  export type AggregatePrefer = {
    _count: PreferCountAggregateOutputType | null
    _avg: PreferAvgAggregateOutputType | null
    _sum: PreferSumAggregateOutputType | null
    _min: PreferMinAggregateOutputType | null
    _max: PreferMaxAggregateOutputType | null
  }

  export type PreferAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type PreferSumAggregateOutputType = {
    id: bigint | null
    user_id: bigint | null
  }

  export type PreferMinAggregateOutputType = {
    id: bigint | null
    prefer: $Enums.prefer_prefer | null
    user_id: bigint | null
  }

  export type PreferMaxAggregateOutputType = {
    id: bigint | null
    prefer: $Enums.prefer_prefer | null
    user_id: bigint | null
  }

  export type PreferCountAggregateOutputType = {
    id: number
    prefer: number
    user_id: number
    _all: number
  }


  export type PreferAvgAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type PreferSumAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type PreferMinAggregateInputType = {
    id?: true
    prefer?: true
    user_id?: true
  }

  export type PreferMaxAggregateInputType = {
    id?: true
    prefer?: true
    user_id?: true
  }

  export type PreferCountAggregateInputType = {
    id?: true
    prefer?: true
    user_id?: true
    _all?: true
  }

  export type PreferAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which prefer to aggregate.
     */
    where?: preferWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of prefers to fetch.
     */
    orderBy?: preferOrderByWithRelationInput | preferOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: preferWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` prefers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` prefers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned prefers
    **/
    _count?: true | PreferCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PreferAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PreferSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PreferMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PreferMaxAggregateInputType
  }

  export type GetPreferAggregateType<T extends PreferAggregateArgs> = {
        [P in keyof T & keyof AggregatePrefer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePrefer[P]>
      : GetScalarType<T[P], AggregatePrefer[P]>
  }




  export type preferGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: preferWhereInput
    orderBy?: preferOrderByWithAggregationInput | preferOrderByWithAggregationInput[]
    by: PreferScalarFieldEnum[] | PreferScalarFieldEnum
    having?: preferScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PreferCountAggregateInputType | true
    _avg?: PreferAvgAggregateInputType
    _sum?: PreferSumAggregateInputType
    _min?: PreferMinAggregateInputType
    _max?: PreferMaxAggregateInputType
  }

  export type PreferGroupByOutputType = {
    id: bigint
    prefer: $Enums.prefer_prefer
    user_id: bigint
    _count: PreferCountAggregateOutputType | null
    _avg: PreferAvgAggregateOutputType | null
    _sum: PreferSumAggregateOutputType | null
    _min: PreferMinAggregateOutputType | null
    _max: PreferMaxAggregateOutputType | null
  }

  type GetPreferGroupByPayload<T extends preferGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PreferGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PreferGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PreferGroupByOutputType[P]>
            : GetScalarType<T[P], PreferGroupByOutputType[P]>
        }
      >
    >


  export type preferSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    prefer?: boolean
    user_id?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["prefer"]>



  export type preferSelectScalar = {
    id?: boolean
    prefer?: boolean
    user_id?: boolean
  }

  export type preferOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "prefer" | "user_id", ExtArgs["result"]["prefer"]>
  export type preferInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
  }

  export type $preferPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "prefer"
    objects: {
      user: Prisma.$userPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      prefer: $Enums.prefer_prefer
      user_id: bigint
    }, ExtArgs["result"]["prefer"]>
    composites: {}
  }

  type preferGetPayload<S extends boolean | null | undefined | preferDefaultArgs> = $Result.GetResult<Prisma.$preferPayload, S>

  type preferCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<preferFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PreferCountAggregateInputType | true
    }

  export interface preferDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['prefer'], meta: { name: 'prefer' } }
    /**
     * Find zero or one Prefer that matches the filter.
     * @param {preferFindUniqueArgs} args - Arguments to find a Prefer
     * @example
     * // Get one Prefer
     * const prefer = await prisma.prefer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends preferFindUniqueArgs>(args: SelectSubset<T, preferFindUniqueArgs<ExtArgs>>): Prisma__preferClient<$Result.GetResult<Prisma.$preferPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Prefer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {preferFindUniqueOrThrowArgs} args - Arguments to find a Prefer
     * @example
     * // Get one Prefer
     * const prefer = await prisma.prefer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends preferFindUniqueOrThrowArgs>(args: SelectSubset<T, preferFindUniqueOrThrowArgs<ExtArgs>>): Prisma__preferClient<$Result.GetResult<Prisma.$preferPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Prefer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {preferFindFirstArgs} args - Arguments to find a Prefer
     * @example
     * // Get one Prefer
     * const prefer = await prisma.prefer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends preferFindFirstArgs>(args?: SelectSubset<T, preferFindFirstArgs<ExtArgs>>): Prisma__preferClient<$Result.GetResult<Prisma.$preferPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Prefer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {preferFindFirstOrThrowArgs} args - Arguments to find a Prefer
     * @example
     * // Get one Prefer
     * const prefer = await prisma.prefer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends preferFindFirstOrThrowArgs>(args?: SelectSubset<T, preferFindFirstOrThrowArgs<ExtArgs>>): Prisma__preferClient<$Result.GetResult<Prisma.$preferPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Prefers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {preferFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Prefers
     * const prefers = await prisma.prefer.findMany()
     * 
     * // Get first 10 Prefers
     * const prefers = await prisma.prefer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const preferWithIdOnly = await prisma.prefer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends preferFindManyArgs>(args?: SelectSubset<T, preferFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$preferPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Prefer.
     * @param {preferCreateArgs} args - Arguments to create a Prefer.
     * @example
     * // Create one Prefer
     * const Prefer = await prisma.prefer.create({
     *   data: {
     *     // ... data to create a Prefer
     *   }
     * })
     * 
     */
    create<T extends preferCreateArgs>(args: SelectSubset<T, preferCreateArgs<ExtArgs>>): Prisma__preferClient<$Result.GetResult<Prisma.$preferPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Prefers.
     * @param {preferCreateManyArgs} args - Arguments to create many Prefers.
     * @example
     * // Create many Prefers
     * const prefer = await prisma.prefer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends preferCreateManyArgs>(args?: SelectSubset<T, preferCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Prefer.
     * @param {preferDeleteArgs} args - Arguments to delete one Prefer.
     * @example
     * // Delete one Prefer
     * const Prefer = await prisma.prefer.delete({
     *   where: {
     *     // ... filter to delete one Prefer
     *   }
     * })
     * 
     */
    delete<T extends preferDeleteArgs>(args: SelectSubset<T, preferDeleteArgs<ExtArgs>>): Prisma__preferClient<$Result.GetResult<Prisma.$preferPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Prefer.
     * @param {preferUpdateArgs} args - Arguments to update one Prefer.
     * @example
     * // Update one Prefer
     * const prefer = await prisma.prefer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends preferUpdateArgs>(args: SelectSubset<T, preferUpdateArgs<ExtArgs>>): Prisma__preferClient<$Result.GetResult<Prisma.$preferPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Prefers.
     * @param {preferDeleteManyArgs} args - Arguments to filter Prefers to delete.
     * @example
     * // Delete a few Prefers
     * const { count } = await prisma.prefer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends preferDeleteManyArgs>(args?: SelectSubset<T, preferDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Prefers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {preferUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Prefers
     * const prefer = await prisma.prefer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends preferUpdateManyArgs>(args: SelectSubset<T, preferUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Prefer.
     * @param {preferUpsertArgs} args - Arguments to update or create a Prefer.
     * @example
     * // Update or create a Prefer
     * const prefer = await prisma.prefer.upsert({
     *   create: {
     *     // ... data to create a Prefer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Prefer we want to update
     *   }
     * })
     */
    upsert<T extends preferUpsertArgs>(args: SelectSubset<T, preferUpsertArgs<ExtArgs>>): Prisma__preferClient<$Result.GetResult<Prisma.$preferPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Prefers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {preferCountArgs} args - Arguments to filter Prefers to count.
     * @example
     * // Count the number of Prefers
     * const count = await prisma.prefer.count({
     *   where: {
     *     // ... the filter for the Prefers we want to count
     *   }
     * })
    **/
    count<T extends preferCountArgs>(
      args?: Subset<T, preferCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PreferCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Prefer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PreferAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PreferAggregateArgs>(args: Subset<T, PreferAggregateArgs>): Prisma.PrismaPromise<GetPreferAggregateType<T>>

    /**
     * Group by Prefer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {preferGroupByArgs} args - Group by arguments.
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
      T extends preferGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: preferGroupByArgs['orderBy'] }
        : { orderBy?: preferGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, preferGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPreferGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the prefer model
   */
  readonly fields: preferFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for prefer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__preferClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the prefer model
   */
  interface preferFieldRefs {
    readonly id: FieldRef<"prefer", 'BigInt'>
    readonly prefer: FieldRef<"prefer", 'prefer_prefer'>
    readonly user_id: FieldRef<"prefer", 'BigInt'>
  }
    

  // Custom InputTypes
  /**
   * prefer findUnique
   */
  export type preferFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prefer
     */
    select?: preferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prefer
     */
    omit?: preferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: preferInclude<ExtArgs> | null
    /**
     * Filter, which prefer to fetch.
     */
    where: preferWhereUniqueInput
  }

  /**
   * prefer findUniqueOrThrow
   */
  export type preferFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prefer
     */
    select?: preferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prefer
     */
    omit?: preferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: preferInclude<ExtArgs> | null
    /**
     * Filter, which prefer to fetch.
     */
    where: preferWhereUniqueInput
  }

  /**
   * prefer findFirst
   */
  export type preferFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prefer
     */
    select?: preferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prefer
     */
    omit?: preferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: preferInclude<ExtArgs> | null
    /**
     * Filter, which prefer to fetch.
     */
    where?: preferWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of prefers to fetch.
     */
    orderBy?: preferOrderByWithRelationInput | preferOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for prefers.
     */
    cursor?: preferWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` prefers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` prefers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of prefers.
     */
    distinct?: PreferScalarFieldEnum | PreferScalarFieldEnum[]
  }

  /**
   * prefer findFirstOrThrow
   */
  export type preferFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prefer
     */
    select?: preferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prefer
     */
    omit?: preferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: preferInclude<ExtArgs> | null
    /**
     * Filter, which prefer to fetch.
     */
    where?: preferWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of prefers to fetch.
     */
    orderBy?: preferOrderByWithRelationInput | preferOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for prefers.
     */
    cursor?: preferWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` prefers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` prefers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of prefers.
     */
    distinct?: PreferScalarFieldEnum | PreferScalarFieldEnum[]
  }

  /**
   * prefer findMany
   */
  export type preferFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prefer
     */
    select?: preferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prefer
     */
    omit?: preferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: preferInclude<ExtArgs> | null
    /**
     * Filter, which prefers to fetch.
     */
    where?: preferWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of prefers to fetch.
     */
    orderBy?: preferOrderByWithRelationInput | preferOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing prefers.
     */
    cursor?: preferWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` prefers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` prefers.
     */
    skip?: number
    distinct?: PreferScalarFieldEnum | PreferScalarFieldEnum[]
  }

  /**
   * prefer create
   */
  export type preferCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prefer
     */
    select?: preferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prefer
     */
    omit?: preferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: preferInclude<ExtArgs> | null
    /**
     * The data needed to create a prefer.
     */
    data: XOR<preferCreateInput, preferUncheckedCreateInput>
  }

  /**
   * prefer createMany
   */
  export type preferCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many prefers.
     */
    data: preferCreateManyInput | preferCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * prefer update
   */
  export type preferUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prefer
     */
    select?: preferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prefer
     */
    omit?: preferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: preferInclude<ExtArgs> | null
    /**
     * The data needed to update a prefer.
     */
    data: XOR<preferUpdateInput, preferUncheckedUpdateInput>
    /**
     * Choose, which prefer to update.
     */
    where: preferWhereUniqueInput
  }

  /**
   * prefer updateMany
   */
  export type preferUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update prefers.
     */
    data: XOR<preferUpdateManyMutationInput, preferUncheckedUpdateManyInput>
    /**
     * Filter which prefers to update
     */
    where?: preferWhereInput
    /**
     * Limit how many prefers to update.
     */
    limit?: number
  }

  /**
   * prefer upsert
   */
  export type preferUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prefer
     */
    select?: preferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prefer
     */
    omit?: preferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: preferInclude<ExtArgs> | null
    /**
     * The filter to search for the prefer to update in case it exists.
     */
    where: preferWhereUniqueInput
    /**
     * In case the prefer found by the `where` argument doesn't exist, create a new prefer with this data.
     */
    create: XOR<preferCreateInput, preferUncheckedCreateInput>
    /**
     * In case the prefer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<preferUpdateInput, preferUncheckedUpdateInput>
  }

  /**
   * prefer delete
   */
  export type preferDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prefer
     */
    select?: preferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prefer
     */
    omit?: preferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: preferInclude<ExtArgs> | null
    /**
     * Filter which prefer to delete.
     */
    where: preferWhereUniqueInput
  }

  /**
   * prefer deleteMany
   */
  export type preferDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which prefers to delete
     */
    where?: preferWhereInput
    /**
     * Limit how many prefers to delete.
     */
    limit?: number
  }

  /**
   * prefer without action
   */
  export type preferDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prefer
     */
    select?: preferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prefer
     */
    omit?: preferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: preferInclude<ExtArgs> | null
  }


  /**
   * Model recommend_except
   */

  export type AggregateRecommend_except = {
    _count: Recommend_exceptCountAggregateOutputType | null
    _avg: Recommend_exceptAvgAggregateOutputType | null
    _sum: Recommend_exceptSumAggregateOutputType | null
    _min: Recommend_exceptMinAggregateOutputType | null
    _max: Recommend_exceptMaxAggregateOutputType | null
  }

  export type Recommend_exceptAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
    menu_id: number | null
  }

  export type Recommend_exceptSumAggregateOutputType = {
    id: bigint | null
    user_id: bigint | null
    menu_id: bigint | null
  }

  export type Recommend_exceptMinAggregateOutputType = {
    id: bigint | null
    user_id: bigint | null
    menu_id: bigint | null
    bit: boolean | null
    created_at: Date | null
  }

  export type Recommend_exceptMaxAggregateOutputType = {
    id: bigint | null
    user_id: bigint | null
    menu_id: bigint | null
    bit: boolean | null
    created_at: Date | null
  }

  export type Recommend_exceptCountAggregateOutputType = {
    id: number
    user_id: number
    menu_id: number
    bit: number
    created_at: number
    _all: number
  }


  export type Recommend_exceptAvgAggregateInputType = {
    id?: true
    user_id?: true
    menu_id?: true
  }

  export type Recommend_exceptSumAggregateInputType = {
    id?: true
    user_id?: true
    menu_id?: true
  }

  export type Recommend_exceptMinAggregateInputType = {
    id?: true
    user_id?: true
    menu_id?: true
    bit?: true
    created_at?: true
  }

  export type Recommend_exceptMaxAggregateInputType = {
    id?: true
    user_id?: true
    menu_id?: true
    bit?: true
    created_at?: true
  }

  export type Recommend_exceptCountAggregateInputType = {
    id?: true
    user_id?: true
    menu_id?: true
    bit?: true
    created_at?: true
    _all?: true
  }

  export type Recommend_exceptAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which recommend_except to aggregate.
     */
    where?: recommend_exceptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of recommend_excepts to fetch.
     */
    orderBy?: recommend_exceptOrderByWithRelationInput | recommend_exceptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: recommend_exceptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` recommend_excepts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` recommend_excepts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned recommend_excepts
    **/
    _count?: true | Recommend_exceptCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Recommend_exceptAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Recommend_exceptSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Recommend_exceptMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Recommend_exceptMaxAggregateInputType
  }

  export type GetRecommend_exceptAggregateType<T extends Recommend_exceptAggregateArgs> = {
        [P in keyof T & keyof AggregateRecommend_except]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRecommend_except[P]>
      : GetScalarType<T[P], AggregateRecommend_except[P]>
  }




  export type recommend_exceptGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: recommend_exceptWhereInput
    orderBy?: recommend_exceptOrderByWithAggregationInput | recommend_exceptOrderByWithAggregationInput[]
    by: Recommend_exceptScalarFieldEnum[] | Recommend_exceptScalarFieldEnum
    having?: recommend_exceptScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Recommend_exceptCountAggregateInputType | true
    _avg?: Recommend_exceptAvgAggregateInputType
    _sum?: Recommend_exceptSumAggregateInputType
    _min?: Recommend_exceptMinAggregateInputType
    _max?: Recommend_exceptMaxAggregateInputType
  }

  export type Recommend_exceptGroupByOutputType = {
    id: bigint
    user_id: bigint
    menu_id: bigint
    bit: boolean | null
    created_at: Date | null
    _count: Recommend_exceptCountAggregateOutputType | null
    _avg: Recommend_exceptAvgAggregateOutputType | null
    _sum: Recommend_exceptSumAggregateOutputType | null
    _min: Recommend_exceptMinAggregateOutputType | null
    _max: Recommend_exceptMaxAggregateOutputType | null
  }

  type GetRecommend_exceptGroupByPayload<T extends recommend_exceptGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Recommend_exceptGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Recommend_exceptGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Recommend_exceptGroupByOutputType[P]>
            : GetScalarType<T[P], Recommend_exceptGroupByOutputType[P]>
        }
      >
    >


  export type recommend_exceptSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    menu_id?: boolean
    bit?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["recommend_except"]>



  export type recommend_exceptSelectScalar = {
    id?: boolean
    user_id?: boolean
    menu_id?: boolean
    bit?: boolean
    created_at?: boolean
  }

  export type recommend_exceptOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "menu_id" | "bit" | "created_at", ExtArgs["result"]["recommend_except"]>

  export type $recommend_exceptPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "recommend_except"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      user_id: bigint
      menu_id: bigint
      bit: boolean | null
      created_at: Date | null
    }, ExtArgs["result"]["recommend_except"]>
    composites: {}
  }

  type recommend_exceptGetPayload<S extends boolean | null | undefined | recommend_exceptDefaultArgs> = $Result.GetResult<Prisma.$recommend_exceptPayload, S>

  type recommend_exceptCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<recommend_exceptFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Recommend_exceptCountAggregateInputType | true
    }

  export interface recommend_exceptDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['recommend_except'], meta: { name: 'recommend_except' } }
    /**
     * Find zero or one Recommend_except that matches the filter.
     * @param {recommend_exceptFindUniqueArgs} args - Arguments to find a Recommend_except
     * @example
     * // Get one Recommend_except
     * const recommend_except = await prisma.recommend_except.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends recommend_exceptFindUniqueArgs>(args: SelectSubset<T, recommend_exceptFindUniqueArgs<ExtArgs>>): Prisma__recommend_exceptClient<$Result.GetResult<Prisma.$recommend_exceptPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Recommend_except that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {recommend_exceptFindUniqueOrThrowArgs} args - Arguments to find a Recommend_except
     * @example
     * // Get one Recommend_except
     * const recommend_except = await prisma.recommend_except.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends recommend_exceptFindUniqueOrThrowArgs>(args: SelectSubset<T, recommend_exceptFindUniqueOrThrowArgs<ExtArgs>>): Prisma__recommend_exceptClient<$Result.GetResult<Prisma.$recommend_exceptPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Recommend_except that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {recommend_exceptFindFirstArgs} args - Arguments to find a Recommend_except
     * @example
     * // Get one Recommend_except
     * const recommend_except = await prisma.recommend_except.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends recommend_exceptFindFirstArgs>(args?: SelectSubset<T, recommend_exceptFindFirstArgs<ExtArgs>>): Prisma__recommend_exceptClient<$Result.GetResult<Prisma.$recommend_exceptPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Recommend_except that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {recommend_exceptFindFirstOrThrowArgs} args - Arguments to find a Recommend_except
     * @example
     * // Get one Recommend_except
     * const recommend_except = await prisma.recommend_except.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends recommend_exceptFindFirstOrThrowArgs>(args?: SelectSubset<T, recommend_exceptFindFirstOrThrowArgs<ExtArgs>>): Prisma__recommend_exceptClient<$Result.GetResult<Prisma.$recommend_exceptPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Recommend_excepts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {recommend_exceptFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Recommend_excepts
     * const recommend_excepts = await prisma.recommend_except.findMany()
     * 
     * // Get first 10 Recommend_excepts
     * const recommend_excepts = await prisma.recommend_except.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const recommend_exceptWithIdOnly = await prisma.recommend_except.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends recommend_exceptFindManyArgs>(args?: SelectSubset<T, recommend_exceptFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$recommend_exceptPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Recommend_except.
     * @param {recommend_exceptCreateArgs} args - Arguments to create a Recommend_except.
     * @example
     * // Create one Recommend_except
     * const Recommend_except = await prisma.recommend_except.create({
     *   data: {
     *     // ... data to create a Recommend_except
     *   }
     * })
     * 
     */
    create<T extends recommend_exceptCreateArgs>(args: SelectSubset<T, recommend_exceptCreateArgs<ExtArgs>>): Prisma__recommend_exceptClient<$Result.GetResult<Prisma.$recommend_exceptPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Recommend_excepts.
     * @param {recommend_exceptCreateManyArgs} args - Arguments to create many Recommend_excepts.
     * @example
     * // Create many Recommend_excepts
     * const recommend_except = await prisma.recommend_except.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends recommend_exceptCreateManyArgs>(args?: SelectSubset<T, recommend_exceptCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Recommend_except.
     * @param {recommend_exceptDeleteArgs} args - Arguments to delete one Recommend_except.
     * @example
     * // Delete one Recommend_except
     * const Recommend_except = await prisma.recommend_except.delete({
     *   where: {
     *     // ... filter to delete one Recommend_except
     *   }
     * })
     * 
     */
    delete<T extends recommend_exceptDeleteArgs>(args: SelectSubset<T, recommend_exceptDeleteArgs<ExtArgs>>): Prisma__recommend_exceptClient<$Result.GetResult<Prisma.$recommend_exceptPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Recommend_except.
     * @param {recommend_exceptUpdateArgs} args - Arguments to update one Recommend_except.
     * @example
     * // Update one Recommend_except
     * const recommend_except = await prisma.recommend_except.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends recommend_exceptUpdateArgs>(args: SelectSubset<T, recommend_exceptUpdateArgs<ExtArgs>>): Prisma__recommend_exceptClient<$Result.GetResult<Prisma.$recommend_exceptPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Recommend_excepts.
     * @param {recommend_exceptDeleteManyArgs} args - Arguments to filter Recommend_excepts to delete.
     * @example
     * // Delete a few Recommend_excepts
     * const { count } = await prisma.recommend_except.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends recommend_exceptDeleteManyArgs>(args?: SelectSubset<T, recommend_exceptDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Recommend_excepts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {recommend_exceptUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Recommend_excepts
     * const recommend_except = await prisma.recommend_except.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends recommend_exceptUpdateManyArgs>(args: SelectSubset<T, recommend_exceptUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Recommend_except.
     * @param {recommend_exceptUpsertArgs} args - Arguments to update or create a Recommend_except.
     * @example
     * // Update or create a Recommend_except
     * const recommend_except = await prisma.recommend_except.upsert({
     *   create: {
     *     // ... data to create a Recommend_except
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Recommend_except we want to update
     *   }
     * })
     */
    upsert<T extends recommend_exceptUpsertArgs>(args: SelectSubset<T, recommend_exceptUpsertArgs<ExtArgs>>): Prisma__recommend_exceptClient<$Result.GetResult<Prisma.$recommend_exceptPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Recommend_excepts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {recommend_exceptCountArgs} args - Arguments to filter Recommend_excepts to count.
     * @example
     * // Count the number of Recommend_excepts
     * const count = await prisma.recommend_except.count({
     *   where: {
     *     // ... the filter for the Recommend_excepts we want to count
     *   }
     * })
    **/
    count<T extends recommend_exceptCountArgs>(
      args?: Subset<T, recommend_exceptCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Recommend_exceptCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Recommend_except.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Recommend_exceptAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Recommend_exceptAggregateArgs>(args: Subset<T, Recommend_exceptAggregateArgs>): Prisma.PrismaPromise<GetRecommend_exceptAggregateType<T>>

    /**
     * Group by Recommend_except.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {recommend_exceptGroupByArgs} args - Group by arguments.
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
      T extends recommend_exceptGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: recommend_exceptGroupByArgs['orderBy'] }
        : { orderBy?: recommend_exceptGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, recommend_exceptGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRecommend_exceptGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the recommend_except model
   */
  readonly fields: recommend_exceptFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for recommend_except.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__recommend_exceptClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the recommend_except model
   */
  interface recommend_exceptFieldRefs {
    readonly id: FieldRef<"recommend_except", 'BigInt'>
    readonly user_id: FieldRef<"recommend_except", 'BigInt'>
    readonly menu_id: FieldRef<"recommend_except", 'BigInt'>
    readonly bit: FieldRef<"recommend_except", 'Boolean'>
    readonly created_at: FieldRef<"recommend_except", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * recommend_except findUnique
   */
  export type recommend_exceptFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recommend_except
     */
    select?: recommend_exceptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the recommend_except
     */
    omit?: recommend_exceptOmit<ExtArgs> | null
    /**
     * Filter, which recommend_except to fetch.
     */
    where: recommend_exceptWhereUniqueInput
  }

  /**
   * recommend_except findUniqueOrThrow
   */
  export type recommend_exceptFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recommend_except
     */
    select?: recommend_exceptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the recommend_except
     */
    omit?: recommend_exceptOmit<ExtArgs> | null
    /**
     * Filter, which recommend_except to fetch.
     */
    where: recommend_exceptWhereUniqueInput
  }

  /**
   * recommend_except findFirst
   */
  export type recommend_exceptFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recommend_except
     */
    select?: recommend_exceptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the recommend_except
     */
    omit?: recommend_exceptOmit<ExtArgs> | null
    /**
     * Filter, which recommend_except to fetch.
     */
    where?: recommend_exceptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of recommend_excepts to fetch.
     */
    orderBy?: recommend_exceptOrderByWithRelationInput | recommend_exceptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for recommend_excepts.
     */
    cursor?: recommend_exceptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` recommend_excepts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` recommend_excepts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of recommend_excepts.
     */
    distinct?: Recommend_exceptScalarFieldEnum | Recommend_exceptScalarFieldEnum[]
  }

  /**
   * recommend_except findFirstOrThrow
   */
  export type recommend_exceptFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recommend_except
     */
    select?: recommend_exceptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the recommend_except
     */
    omit?: recommend_exceptOmit<ExtArgs> | null
    /**
     * Filter, which recommend_except to fetch.
     */
    where?: recommend_exceptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of recommend_excepts to fetch.
     */
    orderBy?: recommend_exceptOrderByWithRelationInput | recommend_exceptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for recommend_excepts.
     */
    cursor?: recommend_exceptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` recommend_excepts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` recommend_excepts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of recommend_excepts.
     */
    distinct?: Recommend_exceptScalarFieldEnum | Recommend_exceptScalarFieldEnum[]
  }

  /**
   * recommend_except findMany
   */
  export type recommend_exceptFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recommend_except
     */
    select?: recommend_exceptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the recommend_except
     */
    omit?: recommend_exceptOmit<ExtArgs> | null
    /**
     * Filter, which recommend_excepts to fetch.
     */
    where?: recommend_exceptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of recommend_excepts to fetch.
     */
    orderBy?: recommend_exceptOrderByWithRelationInput | recommend_exceptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing recommend_excepts.
     */
    cursor?: recommend_exceptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` recommend_excepts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` recommend_excepts.
     */
    skip?: number
    distinct?: Recommend_exceptScalarFieldEnum | Recommend_exceptScalarFieldEnum[]
  }

  /**
   * recommend_except create
   */
  export type recommend_exceptCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recommend_except
     */
    select?: recommend_exceptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the recommend_except
     */
    omit?: recommend_exceptOmit<ExtArgs> | null
    /**
     * The data needed to create a recommend_except.
     */
    data: XOR<recommend_exceptCreateInput, recommend_exceptUncheckedCreateInput>
  }

  /**
   * recommend_except createMany
   */
  export type recommend_exceptCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many recommend_excepts.
     */
    data: recommend_exceptCreateManyInput | recommend_exceptCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * recommend_except update
   */
  export type recommend_exceptUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recommend_except
     */
    select?: recommend_exceptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the recommend_except
     */
    omit?: recommend_exceptOmit<ExtArgs> | null
    /**
     * The data needed to update a recommend_except.
     */
    data: XOR<recommend_exceptUpdateInput, recommend_exceptUncheckedUpdateInput>
    /**
     * Choose, which recommend_except to update.
     */
    where: recommend_exceptWhereUniqueInput
  }

  /**
   * recommend_except updateMany
   */
  export type recommend_exceptUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update recommend_excepts.
     */
    data: XOR<recommend_exceptUpdateManyMutationInput, recommend_exceptUncheckedUpdateManyInput>
    /**
     * Filter which recommend_excepts to update
     */
    where?: recommend_exceptWhereInput
    /**
     * Limit how many recommend_excepts to update.
     */
    limit?: number
  }

  /**
   * recommend_except upsert
   */
  export type recommend_exceptUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recommend_except
     */
    select?: recommend_exceptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the recommend_except
     */
    omit?: recommend_exceptOmit<ExtArgs> | null
    /**
     * The filter to search for the recommend_except to update in case it exists.
     */
    where: recommend_exceptWhereUniqueInput
    /**
     * In case the recommend_except found by the `where` argument doesn't exist, create a new recommend_except with this data.
     */
    create: XOR<recommend_exceptCreateInput, recommend_exceptUncheckedCreateInput>
    /**
     * In case the recommend_except was found with the provided `where` argument, update it with this data.
     */
    update: XOR<recommend_exceptUpdateInput, recommend_exceptUncheckedUpdateInput>
  }

  /**
   * recommend_except delete
   */
  export type recommend_exceptDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recommend_except
     */
    select?: recommend_exceptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the recommend_except
     */
    omit?: recommend_exceptOmit<ExtArgs> | null
    /**
     * Filter which recommend_except to delete.
     */
    where: recommend_exceptWhereUniqueInput
  }

  /**
   * recommend_except deleteMany
   */
  export type recommend_exceptDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which recommend_excepts to delete
     */
    where?: recommend_exceptWhereInput
    /**
     * Limit how many recommend_excepts to delete.
     */
    limit?: number
  }

  /**
   * recommend_except without action
   */
  export type recommend_exceptDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recommend_except
     */
    select?: recommend_exceptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the recommend_except
     */
    omit?: recommend_exceptOmit<ExtArgs> | null
  }


  /**
   * Model sessions
   */

  export type AggregateSessions = {
    _count: SessionsCountAggregateOutputType | null
    _avg: SessionsAvgAggregateOutputType | null
    _sum: SessionsSumAggregateOutputType | null
    _min: SessionsMinAggregateOutputType | null
    _max: SessionsMaxAggregateOutputType | null
  }

  export type SessionsAvgAggregateOutputType = {
    expires: number | null
  }

  export type SessionsSumAggregateOutputType = {
    expires: number | null
  }

  export type SessionsMinAggregateOutputType = {
    session_id: string | null
    expires: number | null
    data: string | null
  }

  export type SessionsMaxAggregateOutputType = {
    session_id: string | null
    expires: number | null
    data: string | null
  }

  export type SessionsCountAggregateOutputType = {
    session_id: number
    expires: number
    data: number
    _all: number
  }


  export type SessionsAvgAggregateInputType = {
    expires?: true
  }

  export type SessionsSumAggregateInputType = {
    expires?: true
  }

  export type SessionsMinAggregateInputType = {
    session_id?: true
    expires?: true
    data?: true
  }

  export type SessionsMaxAggregateInputType = {
    session_id?: true
    expires?: true
    data?: true
  }

  export type SessionsCountAggregateInputType = {
    session_id?: true
    expires?: true
    data?: true
    _all?: true
  }

  export type SessionsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sessions to aggregate.
     */
    where?: sessionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sessions to fetch.
     */
    orderBy?: sessionsOrderByWithRelationInput | sessionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: sessionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned sessions
    **/
    _count?: true | SessionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SessionsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SessionsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionsMaxAggregateInputType
  }

  export type GetSessionsAggregateType<T extends SessionsAggregateArgs> = {
        [P in keyof T & keyof AggregateSessions]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSessions[P]>
      : GetScalarType<T[P], AggregateSessions[P]>
  }




  export type sessionsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: sessionsWhereInput
    orderBy?: sessionsOrderByWithAggregationInput | sessionsOrderByWithAggregationInput[]
    by: SessionsScalarFieldEnum[] | SessionsScalarFieldEnum
    having?: sessionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionsCountAggregateInputType | true
    _avg?: SessionsAvgAggregateInputType
    _sum?: SessionsSumAggregateInputType
    _min?: SessionsMinAggregateInputType
    _max?: SessionsMaxAggregateInputType
  }

  export type SessionsGroupByOutputType = {
    session_id: string
    expires: number
    data: string | null
    _count: SessionsCountAggregateOutputType | null
    _avg: SessionsAvgAggregateOutputType | null
    _sum: SessionsSumAggregateOutputType | null
    _min: SessionsMinAggregateOutputType | null
    _max: SessionsMaxAggregateOutputType | null
  }

  type GetSessionsGroupByPayload<T extends sessionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionsGroupByOutputType[P]>
            : GetScalarType<T[P], SessionsGroupByOutputType[P]>
        }
      >
    >


  export type sessionsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    session_id?: boolean
    expires?: boolean
    data?: boolean
  }, ExtArgs["result"]["sessions"]>



  export type sessionsSelectScalar = {
    session_id?: boolean
    expires?: boolean
    data?: boolean
  }

  export type sessionsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"session_id" | "expires" | "data", ExtArgs["result"]["sessions"]>

  export type $sessionsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "sessions"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      session_id: string
      expires: number
      data: string | null
    }, ExtArgs["result"]["sessions"]>
    composites: {}
  }

  type sessionsGetPayload<S extends boolean | null | undefined | sessionsDefaultArgs> = $Result.GetResult<Prisma.$sessionsPayload, S>

  type sessionsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<sessionsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionsCountAggregateInputType | true
    }

  export interface sessionsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['sessions'], meta: { name: 'sessions' } }
    /**
     * Find zero or one Sessions that matches the filter.
     * @param {sessionsFindUniqueArgs} args - Arguments to find a Sessions
     * @example
     * // Get one Sessions
     * const sessions = await prisma.sessions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends sessionsFindUniqueArgs>(args: SelectSubset<T, sessionsFindUniqueArgs<ExtArgs>>): Prisma__sessionsClient<$Result.GetResult<Prisma.$sessionsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Sessions that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {sessionsFindUniqueOrThrowArgs} args - Arguments to find a Sessions
     * @example
     * // Get one Sessions
     * const sessions = await prisma.sessions.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends sessionsFindUniqueOrThrowArgs>(args: SelectSubset<T, sessionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__sessionsClient<$Result.GetResult<Prisma.$sessionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sessionsFindFirstArgs} args - Arguments to find a Sessions
     * @example
     * // Get one Sessions
     * const sessions = await prisma.sessions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends sessionsFindFirstArgs>(args?: SelectSubset<T, sessionsFindFirstArgs<ExtArgs>>): Prisma__sessionsClient<$Result.GetResult<Prisma.$sessionsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sessions that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sessionsFindFirstOrThrowArgs} args - Arguments to find a Sessions
     * @example
     * // Get one Sessions
     * const sessions = await prisma.sessions.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends sessionsFindFirstOrThrowArgs>(args?: SelectSubset<T, sessionsFindFirstOrThrowArgs<ExtArgs>>): Prisma__sessionsClient<$Result.GetResult<Prisma.$sessionsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sessionsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.sessions.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.sessions.findMany({ take: 10 })
     * 
     * // Only select the `session_id`
     * const sessionsWithSession_idOnly = await prisma.sessions.findMany({ select: { session_id: true } })
     * 
     */
    findMany<T extends sessionsFindManyArgs>(args?: SelectSubset<T, sessionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sessionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Sessions.
     * @param {sessionsCreateArgs} args - Arguments to create a Sessions.
     * @example
     * // Create one Sessions
     * const Sessions = await prisma.sessions.create({
     *   data: {
     *     // ... data to create a Sessions
     *   }
     * })
     * 
     */
    create<T extends sessionsCreateArgs>(args: SelectSubset<T, sessionsCreateArgs<ExtArgs>>): Prisma__sessionsClient<$Result.GetResult<Prisma.$sessionsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sessions.
     * @param {sessionsCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const sessions = await prisma.sessions.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends sessionsCreateManyArgs>(args?: SelectSubset<T, sessionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Sessions.
     * @param {sessionsDeleteArgs} args - Arguments to delete one Sessions.
     * @example
     * // Delete one Sessions
     * const Sessions = await prisma.sessions.delete({
     *   where: {
     *     // ... filter to delete one Sessions
     *   }
     * })
     * 
     */
    delete<T extends sessionsDeleteArgs>(args: SelectSubset<T, sessionsDeleteArgs<ExtArgs>>): Prisma__sessionsClient<$Result.GetResult<Prisma.$sessionsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Sessions.
     * @param {sessionsUpdateArgs} args - Arguments to update one Sessions.
     * @example
     * // Update one Sessions
     * const sessions = await prisma.sessions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends sessionsUpdateArgs>(args: SelectSubset<T, sessionsUpdateArgs<ExtArgs>>): Prisma__sessionsClient<$Result.GetResult<Prisma.$sessionsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sessions.
     * @param {sessionsDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.sessions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends sessionsDeleteManyArgs>(args?: SelectSubset<T, sessionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sessionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const sessions = await prisma.sessions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends sessionsUpdateManyArgs>(args: SelectSubset<T, sessionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Sessions.
     * @param {sessionsUpsertArgs} args - Arguments to update or create a Sessions.
     * @example
     * // Update or create a Sessions
     * const sessions = await prisma.sessions.upsert({
     *   create: {
     *     // ... data to create a Sessions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sessions we want to update
     *   }
     * })
     */
    upsert<T extends sessionsUpsertArgs>(args: SelectSubset<T, sessionsUpsertArgs<ExtArgs>>): Prisma__sessionsClient<$Result.GetResult<Prisma.$sessionsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sessionsCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.sessions.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends sessionsCountArgs>(
      args?: Subset<T, sessionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SessionsAggregateArgs>(args: Subset<T, SessionsAggregateArgs>): Prisma.PrismaPromise<GetSessionsAggregateType<T>>

    /**
     * Group by Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sessionsGroupByArgs} args - Group by arguments.
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
      T extends sessionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: sessionsGroupByArgs['orderBy'] }
        : { orderBy?: sessionsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, sessionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the sessions model
   */
  readonly fields: sessionsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for sessions.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__sessionsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the sessions model
   */
  interface sessionsFieldRefs {
    readonly session_id: FieldRef<"sessions", 'String'>
    readonly expires: FieldRef<"sessions", 'Int'>
    readonly data: FieldRef<"sessions", 'String'>
  }
    

  // Custom InputTypes
  /**
   * sessions findUnique
   */
  export type sessionsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sessions
     */
    select?: sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sessions
     */
    omit?: sessionsOmit<ExtArgs> | null
    /**
     * Filter, which sessions to fetch.
     */
    where: sessionsWhereUniqueInput
  }

  /**
   * sessions findUniqueOrThrow
   */
  export type sessionsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sessions
     */
    select?: sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sessions
     */
    omit?: sessionsOmit<ExtArgs> | null
    /**
     * Filter, which sessions to fetch.
     */
    where: sessionsWhereUniqueInput
  }

  /**
   * sessions findFirst
   */
  export type sessionsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sessions
     */
    select?: sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sessions
     */
    omit?: sessionsOmit<ExtArgs> | null
    /**
     * Filter, which sessions to fetch.
     */
    where?: sessionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sessions to fetch.
     */
    orderBy?: sessionsOrderByWithRelationInput | sessionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sessions.
     */
    cursor?: sessionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sessions.
     */
    distinct?: SessionsScalarFieldEnum | SessionsScalarFieldEnum[]
  }

  /**
   * sessions findFirstOrThrow
   */
  export type sessionsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sessions
     */
    select?: sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sessions
     */
    omit?: sessionsOmit<ExtArgs> | null
    /**
     * Filter, which sessions to fetch.
     */
    where?: sessionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sessions to fetch.
     */
    orderBy?: sessionsOrderByWithRelationInput | sessionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sessions.
     */
    cursor?: sessionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sessions.
     */
    distinct?: SessionsScalarFieldEnum | SessionsScalarFieldEnum[]
  }

  /**
   * sessions findMany
   */
  export type sessionsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sessions
     */
    select?: sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sessions
     */
    omit?: sessionsOmit<ExtArgs> | null
    /**
     * Filter, which sessions to fetch.
     */
    where?: sessionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sessions to fetch.
     */
    orderBy?: sessionsOrderByWithRelationInput | sessionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing sessions.
     */
    cursor?: sessionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sessions.
     */
    skip?: number
    distinct?: SessionsScalarFieldEnum | SessionsScalarFieldEnum[]
  }

  /**
   * sessions create
   */
  export type sessionsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sessions
     */
    select?: sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sessions
     */
    omit?: sessionsOmit<ExtArgs> | null
    /**
     * The data needed to create a sessions.
     */
    data: XOR<sessionsCreateInput, sessionsUncheckedCreateInput>
  }

  /**
   * sessions createMany
   */
  export type sessionsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many sessions.
     */
    data: sessionsCreateManyInput | sessionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * sessions update
   */
  export type sessionsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sessions
     */
    select?: sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sessions
     */
    omit?: sessionsOmit<ExtArgs> | null
    /**
     * The data needed to update a sessions.
     */
    data: XOR<sessionsUpdateInput, sessionsUncheckedUpdateInput>
    /**
     * Choose, which sessions to update.
     */
    where: sessionsWhereUniqueInput
  }

  /**
   * sessions updateMany
   */
  export type sessionsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update sessions.
     */
    data: XOR<sessionsUpdateManyMutationInput, sessionsUncheckedUpdateManyInput>
    /**
     * Filter which sessions to update
     */
    where?: sessionsWhereInput
    /**
     * Limit how many sessions to update.
     */
    limit?: number
  }

  /**
   * sessions upsert
   */
  export type sessionsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sessions
     */
    select?: sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sessions
     */
    omit?: sessionsOmit<ExtArgs> | null
    /**
     * The filter to search for the sessions to update in case it exists.
     */
    where: sessionsWhereUniqueInput
    /**
     * In case the sessions found by the `where` argument doesn't exist, create a new sessions with this data.
     */
    create: XOR<sessionsCreateInput, sessionsUncheckedCreateInput>
    /**
     * In case the sessions was found with the provided `where` argument, update it with this data.
     */
    update: XOR<sessionsUpdateInput, sessionsUncheckedUpdateInput>
  }

  /**
   * sessions delete
   */
  export type sessionsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sessions
     */
    select?: sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sessions
     */
    omit?: sessionsOmit<ExtArgs> | null
    /**
     * Filter which sessions to delete.
     */
    where: sessionsWhereUniqueInput
  }

  /**
   * sessions deleteMany
   */
  export type sessionsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sessions to delete
     */
    where?: sessionsWhereInput
    /**
     * Limit how many sessions to delete.
     */
    limit?: number
  }

  /**
   * sessions without action
   */
  export type sessionsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sessions
     */
    select?: sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sessions
     */
    omit?: sessionsOmit<ExtArgs> | null
  }


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
    is_deleted: boolean | null
    deleted_at: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: bigint | null
    phone_num: string | null
    nickname: string | null
    exercise: $Enums.user_exercise | null
    is_deleted: boolean | null
    deleted_at: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    phone_num: number
    nickname: number
    exercise: number
    is_deleted: number
    deleted_at: number
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
    is_deleted?: true
    deleted_at?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    phone_num?: true
    nickname?: true
    exercise?: true
    is_deleted?: true
    deleted_at?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    phone_num?: true
    nickname?: true
    exercise?: true
    is_deleted?: true
    deleted_at?: true
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
    is_deleted: boolean | null
    deleted_at: Date | null
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
    is_deleted?: boolean
    deleted_at?: boolean
    agreement_consent?: boolean | user$agreement_consentArgs<ExtArgs>
    prefer?: boolean | user$preferArgs<ExtArgs>
    user_allergy?: boolean | user$user_allergyArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type userSelectScalar = {
    id?: boolean
    phone_num?: boolean
    nickname?: boolean
    exercise?: boolean
    is_deleted?: boolean
    deleted_at?: boolean
  }

  export type userOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "phone_num" | "nickname" | "exercise" | "is_deleted" | "deleted_at", ExtArgs["result"]["user"]>
  export type userInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    agreement_consent?: boolean | user$agreement_consentArgs<ExtArgs>
    prefer?: boolean | user$preferArgs<ExtArgs>
    user_allergy?: boolean | user$user_allergyArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user"
    objects: {
      agreement_consent: Prisma.$agreement_consentPayload<ExtArgs> | null
      prefer: Prisma.$preferPayload<ExtArgs>[]
      user_allergy: Prisma.$user_allergyPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      phone_num: string | null
      nickname: string | null
      exercise: $Enums.user_exercise | null
      is_deleted: boolean | null
      deleted_at: Date | null
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
    agreement_consent<T extends user$agreement_consentArgs<ExtArgs> = {}>(args?: Subset<T, user$agreement_consentArgs<ExtArgs>>): Prisma__agreement_consentClient<$Result.GetResult<Prisma.$agreement_consentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    prefer<T extends user$preferArgs<ExtArgs> = {}>(args?: Subset<T, user$preferArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$preferPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly is_deleted: FieldRef<"user", 'Boolean'>
    readonly deleted_at: FieldRef<"user", 'DateTime'>
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
  }

  /**
   * user.prefer
   */
  export type user$preferArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prefer
     */
    select?: preferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prefer
     */
    omit?: preferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: preferInclude<ExtArgs> | null
    where?: preferWhereInput
    orderBy?: preferOrderByWithRelationInput | preferOrderByWithRelationInput[]
    cursor?: preferWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PreferScalarFieldEnum | PreferScalarFieldEnum[]
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
   * Model user_withdrawal
   */

  export type AggregateUser_withdrawal = {
    _count: User_withdrawalCountAggregateOutputType | null
    _avg: User_withdrawalAvgAggregateOutputType | null
    _sum: User_withdrawalSumAggregateOutputType | null
    _min: User_withdrawalMinAggregateOutputType | null
    _max: User_withdrawalMaxAggregateOutputType | null
  }

  export type User_withdrawalAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type User_withdrawalSumAggregateOutputType = {
    id: bigint | null
    user_id: bigint | null
  }

  export type User_withdrawalMinAggregateOutputType = {
    id: bigint | null
    user_id: bigint | null
    reason: string | null
    created_at: Date | null
  }

  export type User_withdrawalMaxAggregateOutputType = {
    id: bigint | null
    user_id: bigint | null
    reason: string | null
    created_at: Date | null
  }

  export type User_withdrawalCountAggregateOutputType = {
    id: number
    user_id: number
    reason: number
    created_at: number
    _all: number
  }


  export type User_withdrawalAvgAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type User_withdrawalSumAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type User_withdrawalMinAggregateInputType = {
    id?: true
    user_id?: true
    reason?: true
    created_at?: true
  }

  export type User_withdrawalMaxAggregateInputType = {
    id?: true
    user_id?: true
    reason?: true
    created_at?: true
  }

  export type User_withdrawalCountAggregateInputType = {
    id?: true
    user_id?: true
    reason?: true
    created_at?: true
    _all?: true
  }

  export type User_withdrawalAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user_withdrawal to aggregate.
     */
    where?: user_withdrawalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_withdrawals to fetch.
     */
    orderBy?: user_withdrawalOrderByWithRelationInput | user_withdrawalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: user_withdrawalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_withdrawals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_withdrawals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned user_withdrawals
    **/
    _count?: true | User_withdrawalCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: User_withdrawalAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: User_withdrawalSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: User_withdrawalMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: User_withdrawalMaxAggregateInputType
  }

  export type GetUser_withdrawalAggregateType<T extends User_withdrawalAggregateArgs> = {
        [P in keyof T & keyof AggregateUser_withdrawal]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser_withdrawal[P]>
      : GetScalarType<T[P], AggregateUser_withdrawal[P]>
  }




  export type user_withdrawalGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_withdrawalWhereInput
    orderBy?: user_withdrawalOrderByWithAggregationInput | user_withdrawalOrderByWithAggregationInput[]
    by: User_withdrawalScalarFieldEnum[] | User_withdrawalScalarFieldEnum
    having?: user_withdrawalScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: User_withdrawalCountAggregateInputType | true
    _avg?: User_withdrawalAvgAggregateInputType
    _sum?: User_withdrawalSumAggregateInputType
    _min?: User_withdrawalMinAggregateInputType
    _max?: User_withdrawalMaxAggregateInputType
  }

  export type User_withdrawalGroupByOutputType = {
    id: bigint
    user_id: bigint
    reason: string
    created_at: Date
    _count: User_withdrawalCountAggregateOutputType | null
    _avg: User_withdrawalAvgAggregateOutputType | null
    _sum: User_withdrawalSumAggregateOutputType | null
    _min: User_withdrawalMinAggregateOutputType | null
    _max: User_withdrawalMaxAggregateOutputType | null
  }

  type GetUser_withdrawalGroupByPayload<T extends user_withdrawalGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<User_withdrawalGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof User_withdrawalGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], User_withdrawalGroupByOutputType[P]>
            : GetScalarType<T[P], User_withdrawalGroupByOutputType[P]>
        }
      >
    >


  export type user_withdrawalSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    reason?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["user_withdrawal"]>



  export type user_withdrawalSelectScalar = {
    id?: boolean
    user_id?: boolean
    reason?: boolean
    created_at?: boolean
  }

  export type user_withdrawalOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "reason" | "created_at", ExtArgs["result"]["user_withdrawal"]>

  export type $user_withdrawalPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user_withdrawal"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      user_id: bigint
      reason: string
      created_at: Date
    }, ExtArgs["result"]["user_withdrawal"]>
    composites: {}
  }

  type user_withdrawalGetPayload<S extends boolean | null | undefined | user_withdrawalDefaultArgs> = $Result.GetResult<Prisma.$user_withdrawalPayload, S>

  type user_withdrawalCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<user_withdrawalFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: User_withdrawalCountAggregateInputType | true
    }

  export interface user_withdrawalDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user_withdrawal'], meta: { name: 'user_withdrawal' } }
    /**
     * Find zero or one User_withdrawal that matches the filter.
     * @param {user_withdrawalFindUniqueArgs} args - Arguments to find a User_withdrawal
     * @example
     * // Get one User_withdrawal
     * const user_withdrawal = await prisma.user_withdrawal.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends user_withdrawalFindUniqueArgs>(args: SelectSubset<T, user_withdrawalFindUniqueArgs<ExtArgs>>): Prisma__user_withdrawalClient<$Result.GetResult<Prisma.$user_withdrawalPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User_withdrawal that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {user_withdrawalFindUniqueOrThrowArgs} args - Arguments to find a User_withdrawal
     * @example
     * // Get one User_withdrawal
     * const user_withdrawal = await prisma.user_withdrawal.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends user_withdrawalFindUniqueOrThrowArgs>(args: SelectSubset<T, user_withdrawalFindUniqueOrThrowArgs<ExtArgs>>): Prisma__user_withdrawalClient<$Result.GetResult<Prisma.$user_withdrawalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User_withdrawal that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_withdrawalFindFirstArgs} args - Arguments to find a User_withdrawal
     * @example
     * // Get one User_withdrawal
     * const user_withdrawal = await prisma.user_withdrawal.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends user_withdrawalFindFirstArgs>(args?: SelectSubset<T, user_withdrawalFindFirstArgs<ExtArgs>>): Prisma__user_withdrawalClient<$Result.GetResult<Prisma.$user_withdrawalPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User_withdrawal that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_withdrawalFindFirstOrThrowArgs} args - Arguments to find a User_withdrawal
     * @example
     * // Get one User_withdrawal
     * const user_withdrawal = await prisma.user_withdrawal.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends user_withdrawalFindFirstOrThrowArgs>(args?: SelectSubset<T, user_withdrawalFindFirstOrThrowArgs<ExtArgs>>): Prisma__user_withdrawalClient<$Result.GetResult<Prisma.$user_withdrawalPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more User_withdrawals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_withdrawalFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all User_withdrawals
     * const user_withdrawals = await prisma.user_withdrawal.findMany()
     * 
     * // Get first 10 User_withdrawals
     * const user_withdrawals = await prisma.user_withdrawal.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const user_withdrawalWithIdOnly = await prisma.user_withdrawal.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends user_withdrawalFindManyArgs>(args?: SelectSubset<T, user_withdrawalFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_withdrawalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User_withdrawal.
     * @param {user_withdrawalCreateArgs} args - Arguments to create a User_withdrawal.
     * @example
     * // Create one User_withdrawal
     * const User_withdrawal = await prisma.user_withdrawal.create({
     *   data: {
     *     // ... data to create a User_withdrawal
     *   }
     * })
     * 
     */
    create<T extends user_withdrawalCreateArgs>(args: SelectSubset<T, user_withdrawalCreateArgs<ExtArgs>>): Prisma__user_withdrawalClient<$Result.GetResult<Prisma.$user_withdrawalPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many User_withdrawals.
     * @param {user_withdrawalCreateManyArgs} args - Arguments to create many User_withdrawals.
     * @example
     * // Create many User_withdrawals
     * const user_withdrawal = await prisma.user_withdrawal.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends user_withdrawalCreateManyArgs>(args?: SelectSubset<T, user_withdrawalCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User_withdrawal.
     * @param {user_withdrawalDeleteArgs} args - Arguments to delete one User_withdrawal.
     * @example
     * // Delete one User_withdrawal
     * const User_withdrawal = await prisma.user_withdrawal.delete({
     *   where: {
     *     // ... filter to delete one User_withdrawal
     *   }
     * })
     * 
     */
    delete<T extends user_withdrawalDeleteArgs>(args: SelectSubset<T, user_withdrawalDeleteArgs<ExtArgs>>): Prisma__user_withdrawalClient<$Result.GetResult<Prisma.$user_withdrawalPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User_withdrawal.
     * @param {user_withdrawalUpdateArgs} args - Arguments to update one User_withdrawal.
     * @example
     * // Update one User_withdrawal
     * const user_withdrawal = await prisma.user_withdrawal.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends user_withdrawalUpdateArgs>(args: SelectSubset<T, user_withdrawalUpdateArgs<ExtArgs>>): Prisma__user_withdrawalClient<$Result.GetResult<Prisma.$user_withdrawalPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more User_withdrawals.
     * @param {user_withdrawalDeleteManyArgs} args - Arguments to filter User_withdrawals to delete.
     * @example
     * // Delete a few User_withdrawals
     * const { count } = await prisma.user_withdrawal.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends user_withdrawalDeleteManyArgs>(args?: SelectSubset<T, user_withdrawalDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more User_withdrawals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_withdrawalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many User_withdrawals
     * const user_withdrawal = await prisma.user_withdrawal.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends user_withdrawalUpdateManyArgs>(args: SelectSubset<T, user_withdrawalUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User_withdrawal.
     * @param {user_withdrawalUpsertArgs} args - Arguments to update or create a User_withdrawal.
     * @example
     * // Update or create a User_withdrawal
     * const user_withdrawal = await prisma.user_withdrawal.upsert({
     *   create: {
     *     // ... data to create a User_withdrawal
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User_withdrawal we want to update
     *   }
     * })
     */
    upsert<T extends user_withdrawalUpsertArgs>(args: SelectSubset<T, user_withdrawalUpsertArgs<ExtArgs>>): Prisma__user_withdrawalClient<$Result.GetResult<Prisma.$user_withdrawalPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of User_withdrawals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_withdrawalCountArgs} args - Arguments to filter User_withdrawals to count.
     * @example
     * // Count the number of User_withdrawals
     * const count = await prisma.user_withdrawal.count({
     *   where: {
     *     // ... the filter for the User_withdrawals we want to count
     *   }
     * })
    **/
    count<T extends user_withdrawalCountArgs>(
      args?: Subset<T, user_withdrawalCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], User_withdrawalCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User_withdrawal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_withdrawalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends User_withdrawalAggregateArgs>(args: Subset<T, User_withdrawalAggregateArgs>): Prisma.PrismaPromise<GetUser_withdrawalAggregateType<T>>

    /**
     * Group by User_withdrawal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_withdrawalGroupByArgs} args - Group by arguments.
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
      T extends user_withdrawalGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: user_withdrawalGroupByArgs['orderBy'] }
        : { orderBy?: user_withdrawalGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, user_withdrawalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUser_withdrawalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user_withdrawal model
   */
  readonly fields: user_withdrawalFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user_withdrawal.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__user_withdrawalClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the user_withdrawal model
   */
  interface user_withdrawalFieldRefs {
    readonly id: FieldRef<"user_withdrawal", 'BigInt'>
    readonly user_id: FieldRef<"user_withdrawal", 'BigInt'>
    readonly reason: FieldRef<"user_withdrawal", 'String'>
    readonly created_at: FieldRef<"user_withdrawal", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * user_withdrawal findUnique
   */
  export type user_withdrawalFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_withdrawal
     */
    select?: user_withdrawalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_withdrawal
     */
    omit?: user_withdrawalOmit<ExtArgs> | null
    /**
     * Filter, which user_withdrawal to fetch.
     */
    where: user_withdrawalWhereUniqueInput
  }

  /**
   * user_withdrawal findUniqueOrThrow
   */
  export type user_withdrawalFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_withdrawal
     */
    select?: user_withdrawalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_withdrawal
     */
    omit?: user_withdrawalOmit<ExtArgs> | null
    /**
     * Filter, which user_withdrawal to fetch.
     */
    where: user_withdrawalWhereUniqueInput
  }

  /**
   * user_withdrawal findFirst
   */
  export type user_withdrawalFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_withdrawal
     */
    select?: user_withdrawalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_withdrawal
     */
    omit?: user_withdrawalOmit<ExtArgs> | null
    /**
     * Filter, which user_withdrawal to fetch.
     */
    where?: user_withdrawalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_withdrawals to fetch.
     */
    orderBy?: user_withdrawalOrderByWithRelationInput | user_withdrawalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_withdrawals.
     */
    cursor?: user_withdrawalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_withdrawals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_withdrawals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_withdrawals.
     */
    distinct?: User_withdrawalScalarFieldEnum | User_withdrawalScalarFieldEnum[]
  }

  /**
   * user_withdrawal findFirstOrThrow
   */
  export type user_withdrawalFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_withdrawal
     */
    select?: user_withdrawalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_withdrawal
     */
    omit?: user_withdrawalOmit<ExtArgs> | null
    /**
     * Filter, which user_withdrawal to fetch.
     */
    where?: user_withdrawalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_withdrawals to fetch.
     */
    orderBy?: user_withdrawalOrderByWithRelationInput | user_withdrawalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_withdrawals.
     */
    cursor?: user_withdrawalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_withdrawals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_withdrawals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_withdrawals.
     */
    distinct?: User_withdrawalScalarFieldEnum | User_withdrawalScalarFieldEnum[]
  }

  /**
   * user_withdrawal findMany
   */
  export type user_withdrawalFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_withdrawal
     */
    select?: user_withdrawalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_withdrawal
     */
    omit?: user_withdrawalOmit<ExtArgs> | null
    /**
     * Filter, which user_withdrawals to fetch.
     */
    where?: user_withdrawalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_withdrawals to fetch.
     */
    orderBy?: user_withdrawalOrderByWithRelationInput | user_withdrawalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing user_withdrawals.
     */
    cursor?: user_withdrawalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_withdrawals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_withdrawals.
     */
    skip?: number
    distinct?: User_withdrawalScalarFieldEnum | User_withdrawalScalarFieldEnum[]
  }

  /**
   * user_withdrawal create
   */
  export type user_withdrawalCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_withdrawal
     */
    select?: user_withdrawalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_withdrawal
     */
    omit?: user_withdrawalOmit<ExtArgs> | null
    /**
     * The data needed to create a user_withdrawal.
     */
    data: XOR<user_withdrawalCreateInput, user_withdrawalUncheckedCreateInput>
  }

  /**
   * user_withdrawal createMany
   */
  export type user_withdrawalCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many user_withdrawals.
     */
    data: user_withdrawalCreateManyInput | user_withdrawalCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user_withdrawal update
   */
  export type user_withdrawalUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_withdrawal
     */
    select?: user_withdrawalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_withdrawal
     */
    omit?: user_withdrawalOmit<ExtArgs> | null
    /**
     * The data needed to update a user_withdrawal.
     */
    data: XOR<user_withdrawalUpdateInput, user_withdrawalUncheckedUpdateInput>
    /**
     * Choose, which user_withdrawal to update.
     */
    where: user_withdrawalWhereUniqueInput
  }

  /**
   * user_withdrawal updateMany
   */
  export type user_withdrawalUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update user_withdrawals.
     */
    data: XOR<user_withdrawalUpdateManyMutationInput, user_withdrawalUncheckedUpdateManyInput>
    /**
     * Filter which user_withdrawals to update
     */
    where?: user_withdrawalWhereInput
    /**
     * Limit how many user_withdrawals to update.
     */
    limit?: number
  }

  /**
   * user_withdrawal upsert
   */
  export type user_withdrawalUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_withdrawal
     */
    select?: user_withdrawalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_withdrawal
     */
    omit?: user_withdrawalOmit<ExtArgs> | null
    /**
     * The filter to search for the user_withdrawal to update in case it exists.
     */
    where: user_withdrawalWhereUniqueInput
    /**
     * In case the user_withdrawal found by the `where` argument doesn't exist, create a new user_withdrawal with this data.
     */
    create: XOR<user_withdrawalCreateInput, user_withdrawalUncheckedCreateInput>
    /**
     * In case the user_withdrawal was found with the provided `where` argument, update it with this data.
     */
    update: XOR<user_withdrawalUpdateInput, user_withdrawalUncheckedUpdateInput>
  }

  /**
   * user_withdrawal delete
   */
  export type user_withdrawalDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_withdrawal
     */
    select?: user_withdrawalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_withdrawal
     */
    omit?: user_withdrawalOmit<ExtArgs> | null
    /**
     * Filter which user_withdrawal to delete.
     */
    where: user_withdrawalWhereUniqueInput
  }

  /**
   * user_withdrawal deleteMany
   */
  export type user_withdrawalDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user_withdrawals to delete
     */
    where?: user_withdrawalWhereInput
    /**
     * Limit how many user_withdrawals to delete.
     */
    limit?: number
  }

  /**
   * user_withdrawal without action
   */
  export type user_withdrawalDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_withdrawal
     */
    select?: user_withdrawalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_withdrawal
     */
    omit?: user_withdrawalOmit<ExtArgs> | null
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


  export const Agreement_consentScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    terms_of_service: 'terms_of_service',
    privacy_policy: 'privacy_policy',
    location_service: 'location_service',
    is_over14: 'is_over14',
    created_at: 'created_at',
    marketing_consent: 'marketing_consent'
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


  export const PreferScalarFieldEnum: {
    id: 'id',
    prefer: 'prefer',
    user_id: 'user_id'
  };

  export type PreferScalarFieldEnum = (typeof PreferScalarFieldEnum)[keyof typeof PreferScalarFieldEnum]


  export const Recommend_exceptScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    menu_id: 'menu_id',
    bit: 'bit',
    created_at: 'created_at'
  };

  export type Recommend_exceptScalarFieldEnum = (typeof Recommend_exceptScalarFieldEnum)[keyof typeof Recommend_exceptScalarFieldEnum]


  export const SessionsScalarFieldEnum: {
    session_id: 'session_id',
    expires: 'expires',
    data: 'data'
  };

  export type SessionsScalarFieldEnum = (typeof SessionsScalarFieldEnum)[keyof typeof SessionsScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    phone_num: 'phone_num',
    nickname: 'nickname',
    exercise: 'exercise',
    is_deleted: 'is_deleted',
    deleted_at: 'deleted_at'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const User_allergyScalarFieldEnum: {
    user_id: 'user_id',
    allergy_id: 'allergy_id'
  };

  export type User_allergyScalarFieldEnum = (typeof User_allergyScalarFieldEnum)[keyof typeof User_allergyScalarFieldEnum]


  export const User_withdrawalScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    reason: 'reason',
    created_at: 'created_at'
  };

  export type User_withdrawalScalarFieldEnum = (typeof User_withdrawalScalarFieldEnum)[keyof typeof User_withdrawalScalarFieldEnum]


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


  export const sessionsOrderByRelevanceFieldEnum: {
    session_id: 'session_id',
    data: 'data'
  };

  export type sessionsOrderByRelevanceFieldEnum = (typeof sessionsOrderByRelevanceFieldEnum)[keyof typeof sessionsOrderByRelevanceFieldEnum]


  export const userOrderByRelevanceFieldEnum: {
    phone_num: 'phone_num',
    nickname: 'nickname'
  };

  export type userOrderByRelevanceFieldEnum = (typeof userOrderByRelevanceFieldEnum)[keyof typeof userOrderByRelevanceFieldEnum]


  export const user_withdrawalOrderByRelevanceFieldEnum: {
    reason: 'reason'
  };

  export type user_withdrawalOrderByRelevanceFieldEnum = (typeof user_withdrawalOrderByRelevanceFieldEnum)[keyof typeof user_withdrawalOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'prefer_prefer'
   */
  export type Enumprefer_preferFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'prefer_prefer'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'user_exercise'
   */
  export type Enumuser_exerciseFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'user_exercise'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


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
    marketing_consent?: BoolNullableFilter<"agreement_consent"> | boolean | null
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
    marketing_consent?: SortOrderInput | SortOrder
    user?: userOrderByWithRelationInput
  }

  export type agreement_consentWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    user_id?: bigint | number
    AND?: agreement_consentWhereInput | agreement_consentWhereInput[]
    OR?: agreement_consentWhereInput[]
    NOT?: agreement_consentWhereInput | agreement_consentWhereInput[]
    terms_of_service?: BoolNullableFilter<"agreement_consent"> | boolean | null
    privacy_policy?: BoolNullableFilter<"agreement_consent"> | boolean | null
    location_service?: BoolNullableFilter<"agreement_consent"> | boolean | null
    is_over14?: BoolNullableFilter<"agreement_consent"> | boolean | null
    created_at?: DateTimeNullableFilter<"agreement_consent"> | Date | string | null
    marketing_consent?: BoolNullableFilter<"agreement_consent"> | boolean | null
    user?: XOR<UserScalarRelationFilter, userWhereInput>
  }, "id" | "user_id">

  export type agreement_consentOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    terms_of_service?: SortOrderInput | SortOrder
    privacy_policy?: SortOrderInput | SortOrder
    location_service?: SortOrderInput | SortOrder
    is_over14?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    marketing_consent?: SortOrderInput | SortOrder
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
    marketing_consent?: BoolNullableWithAggregatesFilter<"agreement_consent"> | boolean | null
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
  }

  export type inquiryOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    title?: SortOrderInput | SortOrder
    content?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
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
  }

  export type meal_alertOrderByWithRelationInput = {
    user_id?: SortOrder
    meal_id?: SortOrder
    enabled?: SortOrderInput | SortOrder
    alarm_time?: SortOrderInput | SortOrder
    meal_time?: meal_timeOrderByWithRelationInput
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

  export type preferWhereInput = {
    AND?: preferWhereInput | preferWhereInput[]
    OR?: preferWhereInput[]
    NOT?: preferWhereInput | preferWhereInput[]
    id?: BigIntFilter<"prefer"> | bigint | number
    prefer?: Enumprefer_preferFilter<"prefer"> | $Enums.prefer_prefer
    user_id?: BigIntFilter<"prefer"> | bigint | number
    user?: XOR<UserScalarRelationFilter, userWhereInput>
  }

  export type preferOrderByWithRelationInput = {
    id?: SortOrder
    prefer?: SortOrder
    user_id?: SortOrder
    user?: userOrderByWithRelationInput
  }

  export type preferWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: preferWhereInput | preferWhereInput[]
    OR?: preferWhereInput[]
    NOT?: preferWhereInput | preferWhereInput[]
    prefer?: Enumprefer_preferFilter<"prefer"> | $Enums.prefer_prefer
    user_id?: BigIntFilter<"prefer"> | bigint | number
    user?: XOR<UserScalarRelationFilter, userWhereInput>
  }, "id">

  export type preferOrderByWithAggregationInput = {
    id?: SortOrder
    prefer?: SortOrder
    user_id?: SortOrder
    _count?: preferCountOrderByAggregateInput
    _avg?: preferAvgOrderByAggregateInput
    _max?: preferMaxOrderByAggregateInput
    _min?: preferMinOrderByAggregateInput
    _sum?: preferSumOrderByAggregateInput
  }

  export type preferScalarWhereWithAggregatesInput = {
    AND?: preferScalarWhereWithAggregatesInput | preferScalarWhereWithAggregatesInput[]
    OR?: preferScalarWhereWithAggregatesInput[]
    NOT?: preferScalarWhereWithAggregatesInput | preferScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"prefer"> | bigint | number
    prefer?: Enumprefer_preferWithAggregatesFilter<"prefer"> | $Enums.prefer_prefer
    user_id?: BigIntWithAggregatesFilter<"prefer"> | bigint | number
  }

  export type recommend_exceptWhereInput = {
    AND?: recommend_exceptWhereInput | recommend_exceptWhereInput[]
    OR?: recommend_exceptWhereInput[]
    NOT?: recommend_exceptWhereInput | recommend_exceptWhereInput[]
    id?: BigIntFilter<"recommend_except"> | bigint | number
    user_id?: BigIntFilter<"recommend_except"> | bigint | number
    menu_id?: BigIntFilter<"recommend_except"> | bigint | number
    bit?: BoolNullableFilter<"recommend_except"> | boolean | null
    created_at?: DateTimeNullableFilter<"recommend_except"> | Date | string | null
  }

  export type recommend_exceptOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    menu_id?: SortOrder
    bit?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
  }

  export type recommend_exceptWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    user_id_menu_id?: recommend_exceptUser_idMenu_idCompoundUniqueInput
    AND?: recommend_exceptWhereInput | recommend_exceptWhereInput[]
    OR?: recommend_exceptWhereInput[]
    NOT?: recommend_exceptWhereInput | recommend_exceptWhereInput[]
    user_id?: BigIntFilter<"recommend_except"> | bigint | number
    menu_id?: BigIntFilter<"recommend_except"> | bigint | number
    bit?: BoolNullableFilter<"recommend_except"> | boolean | null
    created_at?: DateTimeNullableFilter<"recommend_except"> | Date | string | null
  }, "id" | "user_id_menu_id">

  export type recommend_exceptOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    menu_id?: SortOrder
    bit?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: recommend_exceptCountOrderByAggregateInput
    _avg?: recommend_exceptAvgOrderByAggregateInput
    _max?: recommend_exceptMaxOrderByAggregateInput
    _min?: recommend_exceptMinOrderByAggregateInput
    _sum?: recommend_exceptSumOrderByAggregateInput
  }

  export type recommend_exceptScalarWhereWithAggregatesInput = {
    AND?: recommend_exceptScalarWhereWithAggregatesInput | recommend_exceptScalarWhereWithAggregatesInput[]
    OR?: recommend_exceptScalarWhereWithAggregatesInput[]
    NOT?: recommend_exceptScalarWhereWithAggregatesInput | recommend_exceptScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"recommend_except"> | bigint | number
    user_id?: BigIntWithAggregatesFilter<"recommend_except"> | bigint | number
    menu_id?: BigIntWithAggregatesFilter<"recommend_except"> | bigint | number
    bit?: BoolNullableWithAggregatesFilter<"recommend_except"> | boolean | null
    created_at?: DateTimeNullableWithAggregatesFilter<"recommend_except"> | Date | string | null
  }

  export type sessionsWhereInput = {
    AND?: sessionsWhereInput | sessionsWhereInput[]
    OR?: sessionsWhereInput[]
    NOT?: sessionsWhereInput | sessionsWhereInput[]
    session_id?: StringFilter<"sessions"> | string
    expires?: IntFilter<"sessions"> | number
    data?: StringNullableFilter<"sessions"> | string | null
  }

  export type sessionsOrderByWithRelationInput = {
    session_id?: SortOrder
    expires?: SortOrder
    data?: SortOrderInput | SortOrder
    _relevance?: sessionsOrderByRelevanceInput
  }

  export type sessionsWhereUniqueInput = Prisma.AtLeast<{
    session_id?: string
    AND?: sessionsWhereInput | sessionsWhereInput[]
    OR?: sessionsWhereInput[]
    NOT?: sessionsWhereInput | sessionsWhereInput[]
    expires?: IntFilter<"sessions"> | number
    data?: StringNullableFilter<"sessions"> | string | null
  }, "session_id">

  export type sessionsOrderByWithAggregationInput = {
    session_id?: SortOrder
    expires?: SortOrder
    data?: SortOrderInput | SortOrder
    _count?: sessionsCountOrderByAggregateInput
    _avg?: sessionsAvgOrderByAggregateInput
    _max?: sessionsMaxOrderByAggregateInput
    _min?: sessionsMinOrderByAggregateInput
    _sum?: sessionsSumOrderByAggregateInput
  }

  export type sessionsScalarWhereWithAggregatesInput = {
    AND?: sessionsScalarWhereWithAggregatesInput | sessionsScalarWhereWithAggregatesInput[]
    OR?: sessionsScalarWhereWithAggregatesInput[]
    NOT?: sessionsScalarWhereWithAggregatesInput | sessionsScalarWhereWithAggregatesInput[]
    session_id?: StringWithAggregatesFilter<"sessions"> | string
    expires?: IntWithAggregatesFilter<"sessions"> | number
    data?: StringNullableWithAggregatesFilter<"sessions"> | string | null
  }

  export type userWhereInput = {
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    id?: BigIntFilter<"user"> | bigint | number
    phone_num?: StringNullableFilter<"user"> | string | null
    nickname?: StringNullableFilter<"user"> | string | null
    exercise?: Enumuser_exerciseNullableFilter<"user"> | $Enums.user_exercise | null
    is_deleted?: BoolNullableFilter<"user"> | boolean | null
    deleted_at?: DateTimeNullableFilter<"user"> | Date | string | null
    agreement_consent?: XOR<Agreement_consentNullableScalarRelationFilter, agreement_consentWhereInput> | null
    prefer?: PreferListRelationFilter
    user_allergy?: User_allergyListRelationFilter
  }

  export type userOrderByWithRelationInput = {
    id?: SortOrder
    phone_num?: SortOrderInput | SortOrder
    nickname?: SortOrderInput | SortOrder
    exercise?: SortOrderInput | SortOrder
    is_deleted?: SortOrderInput | SortOrder
    deleted_at?: SortOrderInput | SortOrder
    agreement_consent?: agreement_consentOrderByWithRelationInput
    prefer?: preferOrderByRelationAggregateInput
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
    is_deleted?: BoolNullableFilter<"user"> | boolean | null
    deleted_at?: DateTimeNullableFilter<"user"> | Date | string | null
    agreement_consent?: XOR<Agreement_consentNullableScalarRelationFilter, agreement_consentWhereInput> | null
    prefer?: PreferListRelationFilter
    user_allergy?: User_allergyListRelationFilter
  }, "id">

  export type userOrderByWithAggregationInput = {
    id?: SortOrder
    phone_num?: SortOrderInput | SortOrder
    nickname?: SortOrderInput | SortOrder
    exercise?: SortOrderInput | SortOrder
    is_deleted?: SortOrderInput | SortOrder
    deleted_at?: SortOrderInput | SortOrder
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
    is_deleted?: BoolNullableWithAggregatesFilter<"user"> | boolean | null
    deleted_at?: DateTimeNullableWithAggregatesFilter<"user"> | Date | string | null
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

  export type user_withdrawalWhereInput = {
    AND?: user_withdrawalWhereInput | user_withdrawalWhereInput[]
    OR?: user_withdrawalWhereInput[]
    NOT?: user_withdrawalWhereInput | user_withdrawalWhereInput[]
    id?: BigIntFilter<"user_withdrawal"> | bigint | number
    user_id?: BigIntFilter<"user_withdrawal"> | bigint | number
    reason?: StringFilter<"user_withdrawal"> | string
    created_at?: DateTimeFilter<"user_withdrawal"> | Date | string
  }

  export type user_withdrawalOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    reason?: SortOrder
    created_at?: SortOrder
    _relevance?: user_withdrawalOrderByRelevanceInput
  }

  export type user_withdrawalWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: user_withdrawalWhereInput | user_withdrawalWhereInput[]
    OR?: user_withdrawalWhereInput[]
    NOT?: user_withdrawalWhereInput | user_withdrawalWhereInput[]
    user_id?: BigIntFilter<"user_withdrawal"> | bigint | number
    reason?: StringFilter<"user_withdrawal"> | string
    created_at?: DateTimeFilter<"user_withdrawal"> | Date | string
  }, "id">

  export type user_withdrawalOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    reason?: SortOrder
    created_at?: SortOrder
    _count?: user_withdrawalCountOrderByAggregateInput
    _avg?: user_withdrawalAvgOrderByAggregateInput
    _max?: user_withdrawalMaxOrderByAggregateInput
    _min?: user_withdrawalMinOrderByAggregateInput
    _sum?: user_withdrawalSumOrderByAggregateInput
  }

  export type user_withdrawalScalarWhereWithAggregatesInput = {
    AND?: user_withdrawalScalarWhereWithAggregatesInput | user_withdrawalScalarWhereWithAggregatesInput[]
    OR?: user_withdrawalScalarWhereWithAggregatesInput[]
    NOT?: user_withdrawalScalarWhereWithAggregatesInput | user_withdrawalScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"user_withdrawal"> | bigint | number
    user_id?: BigIntWithAggregatesFilter<"user_withdrawal"> | bigint | number
    reason?: StringWithAggregatesFilter<"user_withdrawal"> | string
    created_at?: DateTimeWithAggregatesFilter<"user_withdrawal"> | Date | string
  }

  export type agreement_consentCreateInput = {
    id?: bigint | number
    terms_of_service?: boolean | null
    privacy_policy?: boolean | null
    location_service?: boolean | null
    is_over14?: boolean | null
    created_at?: Date | string | null
    marketing_consent?: boolean | null
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
    marketing_consent?: boolean | null
  }

  export type agreement_consentUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    terms_of_service?: NullableBoolFieldUpdateOperationsInput | boolean | null
    privacy_policy?: NullableBoolFieldUpdateOperationsInput | boolean | null
    location_service?: NullableBoolFieldUpdateOperationsInput | boolean | null
    is_over14?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    marketing_consent?: NullableBoolFieldUpdateOperationsInput | boolean | null
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
    marketing_consent?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type agreement_consentCreateManyInput = {
    id?: bigint | number
    user_id: bigint | number
    terms_of_service?: boolean | null
    privacy_policy?: boolean | null
    location_service?: boolean | null
    is_over14?: boolean | null
    created_at?: Date | string | null
    marketing_consent?: boolean | null
  }

  export type agreement_consentUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    terms_of_service?: NullableBoolFieldUpdateOperationsInput | boolean | null
    privacy_policy?: NullableBoolFieldUpdateOperationsInput | boolean | null
    location_service?: NullableBoolFieldUpdateOperationsInput | boolean | null
    is_over14?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    marketing_consent?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type agreement_consentUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    terms_of_service?: NullableBoolFieldUpdateOperationsInput | boolean | null
    privacy_policy?: NullableBoolFieldUpdateOperationsInput | boolean | null
    location_service?: NullableBoolFieldUpdateOperationsInput | boolean | null
    is_over14?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    marketing_consent?: NullableBoolFieldUpdateOperationsInput | boolean | null
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
    id?: bigint | number
    user_id: bigint | number
    title?: string | null
    content?: string | null
    created_at?: Date | string | null
  }

  export type inquiryUncheckedCreateInput = {
    id?: bigint | number
    user_id: bigint | number
    title?: string | null
    content?: string | null
    created_at?: Date | string | null
  }

  export type inquiryUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type inquiryUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type inquiryCreateManyInput = {
    id?: bigint | number
    user_id: bigint | number
    title?: string | null
    content?: string | null
    created_at?: Date | string | null
  }

  export type inquiryUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number
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
    user_id: bigint | number
    enabled?: boolean | null
    alarm_time?: Date | string | null
    meal_time: meal_timeCreateNestedOneWithoutMeal_alertInput
  }

  export type meal_alertUncheckedCreateInput = {
    user_id: bigint | number
    meal_id: bigint | number
    enabled?: boolean | null
    alarm_time?: Date | string | null
  }

  export type meal_alertUpdateInput = {
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    enabled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    alarm_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    meal_time?: meal_timeUpdateOneRequiredWithoutMeal_alertNestedInput
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
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number
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

  export type preferCreateInput = {
    id?: bigint | number
    prefer: $Enums.prefer_prefer
    user: userCreateNestedOneWithoutPreferInput
  }

  export type preferUncheckedCreateInput = {
    id?: bigint | number
    prefer: $Enums.prefer_prefer
    user_id: bigint | number
  }

  export type preferUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    prefer?: Enumprefer_preferFieldUpdateOperationsInput | $Enums.prefer_prefer
    user?: userUpdateOneRequiredWithoutPreferNestedInput
  }

  export type preferUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    prefer?: Enumprefer_preferFieldUpdateOperationsInput | $Enums.prefer_prefer
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type preferCreateManyInput = {
    id?: bigint | number
    prefer: $Enums.prefer_prefer
    user_id: bigint | number
  }

  export type preferUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    prefer?: Enumprefer_preferFieldUpdateOperationsInput | $Enums.prefer_prefer
  }

  export type preferUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    prefer?: Enumprefer_preferFieldUpdateOperationsInput | $Enums.prefer_prefer
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type recommend_exceptCreateInput = {
    id?: bigint | number
    user_id: bigint | number
    menu_id: bigint | number
    bit?: boolean | null
    created_at?: Date | string | null
  }

  export type recommend_exceptUncheckedCreateInput = {
    id?: bigint | number
    user_id: bigint | number
    menu_id: bigint | number
    bit?: boolean | null
    created_at?: Date | string | null
  }

  export type recommend_exceptUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    menu_id?: BigIntFieldUpdateOperationsInput | bigint | number
    bit?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type recommend_exceptUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    menu_id?: BigIntFieldUpdateOperationsInput | bigint | number
    bit?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type recommend_exceptCreateManyInput = {
    id?: bigint | number
    user_id: bigint | number
    menu_id: bigint | number
    bit?: boolean | null
    created_at?: Date | string | null
  }

  export type recommend_exceptUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    menu_id?: BigIntFieldUpdateOperationsInput | bigint | number
    bit?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type recommend_exceptUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    menu_id?: BigIntFieldUpdateOperationsInput | bigint | number
    bit?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type sessionsCreateInput = {
    session_id: string
    expires: number
    data?: string | null
  }

  export type sessionsUncheckedCreateInput = {
    session_id: string
    expires: number
    data?: string | null
  }

  export type sessionsUpdateInput = {
    session_id?: StringFieldUpdateOperationsInput | string
    expires?: IntFieldUpdateOperationsInput | number
    data?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type sessionsUncheckedUpdateInput = {
    session_id?: StringFieldUpdateOperationsInput | string
    expires?: IntFieldUpdateOperationsInput | number
    data?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type sessionsCreateManyInput = {
    session_id: string
    expires: number
    data?: string | null
  }

  export type sessionsUpdateManyMutationInput = {
    session_id?: StringFieldUpdateOperationsInput | string
    expires?: IntFieldUpdateOperationsInput | number
    data?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type sessionsUncheckedUpdateManyInput = {
    session_id?: StringFieldUpdateOperationsInput | string
    expires?: IntFieldUpdateOperationsInput | number
    data?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type userCreateInput = {
    id: bigint | number
    phone_num?: string | null
    nickname?: string | null
    exercise?: $Enums.user_exercise | null
    is_deleted?: boolean | null
    deleted_at?: Date | string | null
    agreement_consent?: agreement_consentCreateNestedOneWithoutUserInput
    prefer?: preferCreateNestedManyWithoutUserInput
    user_allergy?: user_allergyCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateInput = {
    id: bigint | number
    phone_num?: string | null
    nickname?: string | null
    exercise?: $Enums.user_exercise | null
    is_deleted?: boolean | null
    deleted_at?: Date | string | null
    agreement_consent?: agreement_consentUncheckedCreateNestedOneWithoutUserInput
    prefer?: preferUncheckedCreateNestedManyWithoutUserInput
    user_allergy?: user_allergyUncheckedCreateNestedManyWithoutUserInput
  }

  export type userUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    phone_num?: NullableStringFieldUpdateOperationsInput | string | null
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    exercise?: NullableEnumuser_exerciseFieldUpdateOperationsInput | $Enums.user_exercise | null
    is_deleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    agreement_consent?: agreement_consentUpdateOneWithoutUserNestedInput
    prefer?: preferUpdateManyWithoutUserNestedInput
    user_allergy?: user_allergyUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    phone_num?: NullableStringFieldUpdateOperationsInput | string | null
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    exercise?: NullableEnumuser_exerciseFieldUpdateOperationsInput | $Enums.user_exercise | null
    is_deleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    agreement_consent?: agreement_consentUncheckedUpdateOneWithoutUserNestedInput
    prefer?: preferUncheckedUpdateManyWithoutUserNestedInput
    user_allergy?: user_allergyUncheckedUpdateManyWithoutUserNestedInput
  }

  export type userCreateManyInput = {
    id: bigint | number
    phone_num?: string | null
    nickname?: string | null
    exercise?: $Enums.user_exercise | null
    is_deleted?: boolean | null
    deleted_at?: Date | string | null
  }

  export type userUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    phone_num?: NullableStringFieldUpdateOperationsInput | string | null
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    exercise?: NullableEnumuser_exerciseFieldUpdateOperationsInput | $Enums.user_exercise | null
    is_deleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type userUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    phone_num?: NullableStringFieldUpdateOperationsInput | string | null
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    exercise?: NullableEnumuser_exerciseFieldUpdateOperationsInput | $Enums.user_exercise | null
    is_deleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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

  export type user_withdrawalCreateInput = {
    id?: bigint | number
    user_id: bigint | number
    reason: string
    created_at?: Date | string
  }

  export type user_withdrawalUncheckedCreateInput = {
    id?: bigint | number
    user_id: bigint | number
    reason: string
    created_at?: Date | string
  }

  export type user_withdrawalUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    reason?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type user_withdrawalUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    reason?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type user_withdrawalCreateManyInput = {
    id?: bigint | number
    user_id: bigint | number
    reason: string
    created_at?: Date | string
  }

  export type user_withdrawalUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    reason?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type user_withdrawalUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    reason?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type agreement_consentCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    terms_of_service?: SortOrder
    privacy_policy?: SortOrder
    location_service?: SortOrder
    is_over14?: SortOrder
    created_at?: SortOrder
    marketing_consent?: SortOrder
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
    marketing_consent?: SortOrder
  }

  export type agreement_consentMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    terms_of_service?: SortOrder
    privacy_policy?: SortOrder
    location_service?: SortOrder
    is_over14?: SortOrder
    created_at?: SortOrder
    marketing_consent?: SortOrder
  }

  export type agreement_consentSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
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

  export type User_allergyListRelationFilter = {
    every?: user_allergyWhereInput
    some?: user_allergyWhereInput
    none?: user_allergyWhereInput
  }

  export type user_allergyOrderByRelationAggregateInput = {
    _count?: SortOrder
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

  export type Meal_alertListRelationFilter = {
    every?: meal_alertWhereInput
    some?: meal_alertWhereInput
    none?: meal_alertWhereInput
  }

  export type meal_alertOrderByRelationAggregateInput = {
    _count?: SortOrder
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

  export type Enumprefer_preferFilter<$PrismaModel = never> = {
    equals?: $Enums.prefer_prefer | Enumprefer_preferFieldRefInput<$PrismaModel>
    in?: $Enums.prefer_prefer[]
    notIn?: $Enums.prefer_prefer[]
    not?: NestedEnumprefer_preferFilter<$PrismaModel> | $Enums.prefer_prefer
  }

  export type preferCountOrderByAggregateInput = {
    id?: SortOrder
    prefer?: SortOrder
    user_id?: SortOrder
  }

  export type preferAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type preferMaxOrderByAggregateInput = {
    id?: SortOrder
    prefer?: SortOrder
    user_id?: SortOrder
  }

  export type preferMinOrderByAggregateInput = {
    id?: SortOrder
    prefer?: SortOrder
    user_id?: SortOrder
  }

  export type preferSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type Enumprefer_preferWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.prefer_prefer | Enumprefer_preferFieldRefInput<$PrismaModel>
    in?: $Enums.prefer_prefer[]
    notIn?: $Enums.prefer_prefer[]
    not?: NestedEnumprefer_preferWithAggregatesFilter<$PrismaModel> | $Enums.prefer_prefer
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumprefer_preferFilter<$PrismaModel>
    _max?: NestedEnumprefer_preferFilter<$PrismaModel>
  }

  export type recommend_exceptUser_idMenu_idCompoundUniqueInput = {
    user_id: bigint | number
    menu_id: bigint | number
  }

  export type recommend_exceptCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    menu_id?: SortOrder
    bit?: SortOrder
    created_at?: SortOrder
  }

  export type recommend_exceptAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    menu_id?: SortOrder
  }

  export type recommend_exceptMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    menu_id?: SortOrder
    bit?: SortOrder
    created_at?: SortOrder
  }

  export type recommend_exceptMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    menu_id?: SortOrder
    bit?: SortOrder
    created_at?: SortOrder
  }

  export type recommend_exceptSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    menu_id?: SortOrder
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type sessionsOrderByRelevanceInput = {
    fields: sessionsOrderByRelevanceFieldEnum | sessionsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type sessionsCountOrderByAggregateInput = {
    session_id?: SortOrder
    expires?: SortOrder
    data?: SortOrder
  }

  export type sessionsAvgOrderByAggregateInput = {
    expires?: SortOrder
  }

  export type sessionsMaxOrderByAggregateInput = {
    session_id?: SortOrder
    expires?: SortOrder
    data?: SortOrder
  }

  export type sessionsMinOrderByAggregateInput = {
    session_id?: SortOrder
    expires?: SortOrder
    data?: SortOrder
  }

  export type sessionsSumOrderByAggregateInput = {
    expires?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type Enumuser_exerciseNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.user_exercise | Enumuser_exerciseFieldRefInput<$PrismaModel> | null
    in?: $Enums.user_exercise[] | null
    notIn?: $Enums.user_exercise[] | null
    not?: NestedEnumuser_exerciseNullableFilter<$PrismaModel> | $Enums.user_exercise | null
  }

  export type Agreement_consentNullableScalarRelationFilter = {
    is?: agreement_consentWhereInput | null
    isNot?: agreement_consentWhereInput | null
  }

  export type PreferListRelationFilter = {
    every?: preferWhereInput
    some?: preferWhereInput
    none?: preferWhereInput
  }

  export type preferOrderByRelationAggregateInput = {
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
    is_deleted?: SortOrder
    deleted_at?: SortOrder
  }

  export type userAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type userMaxOrderByAggregateInput = {
    id?: SortOrder
    phone_num?: SortOrder
    nickname?: SortOrder
    exercise?: SortOrder
    is_deleted?: SortOrder
    deleted_at?: SortOrder
  }

  export type userMinOrderByAggregateInput = {
    id?: SortOrder
    phone_num?: SortOrder
    nickname?: SortOrder
    exercise?: SortOrder
    is_deleted?: SortOrder
    deleted_at?: SortOrder
  }

  export type userSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type user_withdrawalOrderByRelevanceInput = {
    fields: user_withdrawalOrderByRelevanceFieldEnum | user_withdrawalOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type user_withdrawalCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    reason?: SortOrder
    created_at?: SortOrder
  }

  export type user_withdrawalAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type user_withdrawalMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    reason?: SortOrder
    created_at?: SortOrder
  }

  export type user_withdrawalMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    reason?: SortOrder
    created_at?: SortOrder
  }

  export type user_withdrawalSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type userCreateNestedOneWithoutAgreement_consentInput = {
    create?: XOR<userCreateWithoutAgreement_consentInput, userUncheckedCreateWithoutAgreement_consentInput>
    connectOrCreate?: userCreateOrConnectWithoutAgreement_consentInput
    connect?: userWhereUniqueInput
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
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

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
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

  export type meal_timeCreateNestedOneWithoutMeal_alertInput = {
    create?: XOR<meal_timeCreateWithoutMeal_alertInput, meal_timeUncheckedCreateWithoutMeal_alertInput>
    connectOrCreate?: meal_timeCreateOrConnectWithoutMeal_alertInput
    connect?: meal_timeWhereUniqueInput
  }

  export type meal_timeUpdateOneRequiredWithoutMeal_alertNestedInput = {
    create?: XOR<meal_timeCreateWithoutMeal_alertInput, meal_timeUncheckedCreateWithoutMeal_alertInput>
    connectOrCreate?: meal_timeCreateOrConnectWithoutMeal_alertInput
    upsert?: meal_timeUpsertWithoutMeal_alertInput
    connect?: meal_timeWhereUniqueInput
    update?: XOR<XOR<meal_timeUpdateToOneWithWhereWithoutMeal_alertInput, meal_timeUpdateWithoutMeal_alertInput>, meal_timeUncheckedUpdateWithoutMeal_alertInput>
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

  export type userCreateNestedOneWithoutPreferInput = {
    create?: XOR<userCreateWithoutPreferInput, userUncheckedCreateWithoutPreferInput>
    connectOrCreate?: userCreateOrConnectWithoutPreferInput
    connect?: userWhereUniqueInput
  }

  export type Enumprefer_preferFieldUpdateOperationsInput = {
    set?: $Enums.prefer_prefer
  }

  export type userUpdateOneRequiredWithoutPreferNestedInput = {
    create?: XOR<userCreateWithoutPreferInput, userUncheckedCreateWithoutPreferInput>
    connectOrCreate?: userCreateOrConnectWithoutPreferInput
    upsert?: userUpsertWithoutPreferInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutPreferInput, userUpdateWithoutPreferInput>, userUncheckedUpdateWithoutPreferInput>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type agreement_consentCreateNestedOneWithoutUserInput = {
    create?: XOR<agreement_consentCreateWithoutUserInput, agreement_consentUncheckedCreateWithoutUserInput>
    connectOrCreate?: agreement_consentCreateOrConnectWithoutUserInput
    connect?: agreement_consentWhereUniqueInput
  }

  export type preferCreateNestedManyWithoutUserInput = {
    create?: XOR<preferCreateWithoutUserInput, preferUncheckedCreateWithoutUserInput> | preferCreateWithoutUserInput[] | preferUncheckedCreateWithoutUserInput[]
    connectOrCreate?: preferCreateOrConnectWithoutUserInput | preferCreateOrConnectWithoutUserInput[]
    createMany?: preferCreateManyUserInputEnvelope
    connect?: preferWhereUniqueInput | preferWhereUniqueInput[]
  }

  export type user_allergyCreateNestedManyWithoutUserInput = {
    create?: XOR<user_allergyCreateWithoutUserInput, user_allergyUncheckedCreateWithoutUserInput> | user_allergyCreateWithoutUserInput[] | user_allergyUncheckedCreateWithoutUserInput[]
    connectOrCreate?: user_allergyCreateOrConnectWithoutUserInput | user_allergyCreateOrConnectWithoutUserInput[]
    createMany?: user_allergyCreateManyUserInputEnvelope
    connect?: user_allergyWhereUniqueInput | user_allergyWhereUniqueInput[]
  }

  export type agreement_consentUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<agreement_consentCreateWithoutUserInput, agreement_consentUncheckedCreateWithoutUserInput>
    connectOrCreate?: agreement_consentCreateOrConnectWithoutUserInput
    connect?: agreement_consentWhereUniqueInput
  }

  export type preferUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<preferCreateWithoutUserInput, preferUncheckedCreateWithoutUserInput> | preferCreateWithoutUserInput[] | preferUncheckedCreateWithoutUserInput[]
    connectOrCreate?: preferCreateOrConnectWithoutUserInput | preferCreateOrConnectWithoutUserInput[]
    createMany?: preferCreateManyUserInputEnvelope
    connect?: preferWhereUniqueInput | preferWhereUniqueInput[]
  }

  export type user_allergyUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<user_allergyCreateWithoutUserInput, user_allergyUncheckedCreateWithoutUserInput> | user_allergyCreateWithoutUserInput[] | user_allergyUncheckedCreateWithoutUserInput[]
    connectOrCreate?: user_allergyCreateOrConnectWithoutUserInput | user_allergyCreateOrConnectWithoutUserInput[]
    createMany?: user_allergyCreateManyUserInputEnvelope
    connect?: user_allergyWhereUniqueInput | user_allergyWhereUniqueInput[]
  }

  export type NullableEnumuser_exerciseFieldUpdateOperationsInput = {
    set?: $Enums.user_exercise | null
  }

  export type agreement_consentUpdateOneWithoutUserNestedInput = {
    create?: XOR<agreement_consentCreateWithoutUserInput, agreement_consentUncheckedCreateWithoutUserInput>
    connectOrCreate?: agreement_consentCreateOrConnectWithoutUserInput
    upsert?: agreement_consentUpsertWithoutUserInput
    disconnect?: agreement_consentWhereInput | boolean
    delete?: agreement_consentWhereInput | boolean
    connect?: agreement_consentWhereUniqueInput
    update?: XOR<XOR<agreement_consentUpdateToOneWithWhereWithoutUserInput, agreement_consentUpdateWithoutUserInput>, agreement_consentUncheckedUpdateWithoutUserInput>
  }

  export type preferUpdateManyWithoutUserNestedInput = {
    create?: XOR<preferCreateWithoutUserInput, preferUncheckedCreateWithoutUserInput> | preferCreateWithoutUserInput[] | preferUncheckedCreateWithoutUserInput[]
    connectOrCreate?: preferCreateOrConnectWithoutUserInput | preferCreateOrConnectWithoutUserInput[]
    upsert?: preferUpsertWithWhereUniqueWithoutUserInput | preferUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: preferCreateManyUserInputEnvelope
    set?: preferWhereUniqueInput | preferWhereUniqueInput[]
    disconnect?: preferWhereUniqueInput | preferWhereUniqueInput[]
    delete?: preferWhereUniqueInput | preferWhereUniqueInput[]
    connect?: preferWhereUniqueInput | preferWhereUniqueInput[]
    update?: preferUpdateWithWhereUniqueWithoutUserInput | preferUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: preferUpdateManyWithWhereWithoutUserInput | preferUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: preferScalarWhereInput | preferScalarWhereInput[]
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

  export type agreement_consentUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<agreement_consentCreateWithoutUserInput, agreement_consentUncheckedCreateWithoutUserInput>
    connectOrCreate?: agreement_consentCreateOrConnectWithoutUserInput
    upsert?: agreement_consentUpsertWithoutUserInput
    disconnect?: agreement_consentWhereInput | boolean
    delete?: agreement_consentWhereInput | boolean
    connect?: agreement_consentWhereUniqueInput
    update?: XOR<XOR<agreement_consentUpdateToOneWithWhereWithoutUserInput, agreement_consentUpdateWithoutUserInput>, agreement_consentUncheckedUpdateWithoutUserInput>
  }

  export type preferUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<preferCreateWithoutUserInput, preferUncheckedCreateWithoutUserInput> | preferCreateWithoutUserInput[] | preferUncheckedCreateWithoutUserInput[]
    connectOrCreate?: preferCreateOrConnectWithoutUserInput | preferCreateOrConnectWithoutUserInput[]
    upsert?: preferUpsertWithWhereUniqueWithoutUserInput | preferUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: preferCreateManyUserInputEnvelope
    set?: preferWhereUniqueInput | preferWhereUniqueInput[]
    disconnect?: preferWhereUniqueInput | preferWhereUniqueInput[]
    delete?: preferWhereUniqueInput | preferWhereUniqueInput[]
    connect?: preferWhereUniqueInput | preferWhereUniqueInput[]
    update?: preferUpdateWithWhereUniqueWithoutUserInput | preferUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: preferUpdateManyWithWhereWithoutUserInput | preferUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: preferScalarWhereInput | preferScalarWhereInput[]
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

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
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

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
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

  export type NestedEnumprefer_preferFilter<$PrismaModel = never> = {
    equals?: $Enums.prefer_prefer | Enumprefer_preferFieldRefInput<$PrismaModel>
    in?: $Enums.prefer_prefer[]
    notIn?: $Enums.prefer_prefer[]
    not?: NestedEnumprefer_preferFilter<$PrismaModel> | $Enums.prefer_prefer
  }

  export type NestedEnumprefer_preferWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.prefer_prefer | Enumprefer_preferFieldRefInput<$PrismaModel>
    in?: $Enums.prefer_prefer[]
    notIn?: $Enums.prefer_prefer[]
    not?: NestedEnumprefer_preferWithAggregatesFilter<$PrismaModel> | $Enums.prefer_prefer
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumprefer_preferFilter<$PrismaModel>
    _max?: NestedEnumprefer_preferFilter<$PrismaModel>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type NestedEnumuser_exerciseNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.user_exercise | Enumuser_exerciseFieldRefInput<$PrismaModel> | null
    in?: $Enums.user_exercise[] | null
    notIn?: $Enums.user_exercise[] | null
    not?: NestedEnumuser_exerciseNullableFilter<$PrismaModel> | $Enums.user_exercise | null
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

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type userCreateWithoutAgreement_consentInput = {
    id: bigint | number
    phone_num?: string | null
    nickname?: string | null
    exercise?: $Enums.user_exercise | null
    is_deleted?: boolean | null
    deleted_at?: Date | string | null
    prefer?: preferCreateNestedManyWithoutUserInput
    user_allergy?: user_allergyCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateWithoutAgreement_consentInput = {
    id: bigint | number
    phone_num?: string | null
    nickname?: string | null
    exercise?: $Enums.user_exercise | null
    is_deleted?: boolean | null
    deleted_at?: Date | string | null
    prefer?: preferUncheckedCreateNestedManyWithoutUserInput
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
    is_deleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    prefer?: preferUpdateManyWithoutUserNestedInput
    user_allergy?: user_allergyUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutAgreement_consentInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    phone_num?: NullableStringFieldUpdateOperationsInput | string | null
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    exercise?: NullableEnumuser_exerciseFieldUpdateOperationsInput | $Enums.user_exercise | null
    is_deleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    prefer?: preferUncheckedUpdateManyWithoutUserNestedInput
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

  export type user_allergyScalarWhereInput = {
    AND?: user_allergyScalarWhereInput | user_allergyScalarWhereInput[]
    OR?: user_allergyScalarWhereInput[]
    NOT?: user_allergyScalarWhereInput | user_allergyScalarWhereInput[]
    user_id?: BigIntFilter<"user_allergy"> | bigint | number
    allergy_id?: BigIntFilter<"user_allergy"> | bigint | number
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

  export type meal_alertCreateWithoutMeal_timeInput = {
    user_id: bigint | number
    enabled?: boolean | null
    alarm_time?: Date | string | null
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

  export type meal_alertScalarWhereInput = {
    AND?: meal_alertScalarWhereInput | meal_alertScalarWhereInput[]
    OR?: meal_alertScalarWhereInput[]
    NOT?: meal_alertScalarWhereInput | meal_alertScalarWhereInput[]
    user_id?: BigIntFilter<"meal_alert"> | bigint | number
    meal_id?: BigIntFilter<"meal_alert"> | bigint | number
    enabled?: BoolNullableFilter<"meal_alert"> | boolean | null
    alarm_time?: DateTimeNullableFilter<"meal_alert"> | Date | string | null
  }

  export type userCreateWithoutPreferInput = {
    id: bigint | number
    phone_num?: string | null
    nickname?: string | null
    exercise?: $Enums.user_exercise | null
    is_deleted?: boolean | null
    deleted_at?: Date | string | null
    agreement_consent?: agreement_consentCreateNestedOneWithoutUserInput
    user_allergy?: user_allergyCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateWithoutPreferInput = {
    id: bigint | number
    phone_num?: string | null
    nickname?: string | null
    exercise?: $Enums.user_exercise | null
    is_deleted?: boolean | null
    deleted_at?: Date | string | null
    agreement_consent?: agreement_consentUncheckedCreateNestedOneWithoutUserInput
    user_allergy?: user_allergyUncheckedCreateNestedManyWithoutUserInput
  }

  export type userCreateOrConnectWithoutPreferInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutPreferInput, userUncheckedCreateWithoutPreferInput>
  }

  export type userUpsertWithoutPreferInput = {
    update: XOR<userUpdateWithoutPreferInput, userUncheckedUpdateWithoutPreferInput>
    create: XOR<userCreateWithoutPreferInput, userUncheckedCreateWithoutPreferInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutPreferInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutPreferInput, userUncheckedUpdateWithoutPreferInput>
  }

  export type userUpdateWithoutPreferInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    phone_num?: NullableStringFieldUpdateOperationsInput | string | null
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    exercise?: NullableEnumuser_exerciseFieldUpdateOperationsInput | $Enums.user_exercise | null
    is_deleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    agreement_consent?: agreement_consentUpdateOneWithoutUserNestedInput
    user_allergy?: user_allergyUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutPreferInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    phone_num?: NullableStringFieldUpdateOperationsInput | string | null
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    exercise?: NullableEnumuser_exerciseFieldUpdateOperationsInput | $Enums.user_exercise | null
    is_deleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    agreement_consent?: agreement_consentUncheckedUpdateOneWithoutUserNestedInput
    user_allergy?: user_allergyUncheckedUpdateManyWithoutUserNestedInput
  }

  export type agreement_consentCreateWithoutUserInput = {
    id?: bigint | number
    terms_of_service?: boolean | null
    privacy_policy?: boolean | null
    location_service?: boolean | null
    is_over14?: boolean | null
    created_at?: Date | string | null
    marketing_consent?: boolean | null
  }

  export type agreement_consentUncheckedCreateWithoutUserInput = {
    id?: bigint | number
    terms_of_service?: boolean | null
    privacy_policy?: boolean | null
    location_service?: boolean | null
    is_over14?: boolean | null
    created_at?: Date | string | null
    marketing_consent?: boolean | null
  }

  export type agreement_consentCreateOrConnectWithoutUserInput = {
    where: agreement_consentWhereUniqueInput
    create: XOR<agreement_consentCreateWithoutUserInput, agreement_consentUncheckedCreateWithoutUserInput>
  }

  export type preferCreateWithoutUserInput = {
    id?: bigint | number
    prefer: $Enums.prefer_prefer
  }

  export type preferUncheckedCreateWithoutUserInput = {
    id?: bigint | number
    prefer: $Enums.prefer_prefer
  }

  export type preferCreateOrConnectWithoutUserInput = {
    where: preferWhereUniqueInput
    create: XOR<preferCreateWithoutUserInput, preferUncheckedCreateWithoutUserInput>
  }

  export type preferCreateManyUserInputEnvelope = {
    data: preferCreateManyUserInput | preferCreateManyUserInput[]
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

  export type agreement_consentUpsertWithoutUserInput = {
    update: XOR<agreement_consentUpdateWithoutUserInput, agreement_consentUncheckedUpdateWithoutUserInput>
    create: XOR<agreement_consentCreateWithoutUserInput, agreement_consentUncheckedCreateWithoutUserInput>
    where?: agreement_consentWhereInput
  }

  export type agreement_consentUpdateToOneWithWhereWithoutUserInput = {
    where?: agreement_consentWhereInput
    data: XOR<agreement_consentUpdateWithoutUserInput, agreement_consentUncheckedUpdateWithoutUserInput>
  }

  export type agreement_consentUpdateWithoutUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    terms_of_service?: NullableBoolFieldUpdateOperationsInput | boolean | null
    privacy_policy?: NullableBoolFieldUpdateOperationsInput | boolean | null
    location_service?: NullableBoolFieldUpdateOperationsInput | boolean | null
    is_over14?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    marketing_consent?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type agreement_consentUncheckedUpdateWithoutUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    terms_of_service?: NullableBoolFieldUpdateOperationsInput | boolean | null
    privacy_policy?: NullableBoolFieldUpdateOperationsInput | boolean | null
    location_service?: NullableBoolFieldUpdateOperationsInput | boolean | null
    is_over14?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    marketing_consent?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type preferUpsertWithWhereUniqueWithoutUserInput = {
    where: preferWhereUniqueInput
    update: XOR<preferUpdateWithoutUserInput, preferUncheckedUpdateWithoutUserInput>
    create: XOR<preferCreateWithoutUserInput, preferUncheckedCreateWithoutUserInput>
  }

  export type preferUpdateWithWhereUniqueWithoutUserInput = {
    where: preferWhereUniqueInput
    data: XOR<preferUpdateWithoutUserInput, preferUncheckedUpdateWithoutUserInput>
  }

  export type preferUpdateManyWithWhereWithoutUserInput = {
    where: preferScalarWhereInput
    data: XOR<preferUpdateManyMutationInput, preferUncheckedUpdateManyWithoutUserInput>
  }

  export type preferScalarWhereInput = {
    AND?: preferScalarWhereInput | preferScalarWhereInput[]
    OR?: preferScalarWhereInput[]
    NOT?: preferScalarWhereInput | preferScalarWhereInput[]
    id?: BigIntFilter<"prefer"> | bigint | number
    prefer?: Enumprefer_preferFilter<"prefer"> | $Enums.prefer_prefer
    user_id?: BigIntFilter<"prefer"> | bigint | number
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
    is_deleted?: boolean | null
    deleted_at?: Date | string | null
    agreement_consent?: agreement_consentCreateNestedOneWithoutUserInput
    prefer?: preferCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateWithoutUser_allergyInput = {
    id: bigint | number
    phone_num?: string | null
    nickname?: string | null
    exercise?: $Enums.user_exercise | null
    is_deleted?: boolean | null
    deleted_at?: Date | string | null
    agreement_consent?: agreement_consentUncheckedCreateNestedOneWithoutUserInput
    prefer?: preferUncheckedCreateNestedManyWithoutUserInput
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
    is_deleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    agreement_consent?: agreement_consentUpdateOneWithoutUserNestedInput
    prefer?: preferUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutUser_allergyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    phone_num?: NullableStringFieldUpdateOperationsInput | string | null
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    exercise?: NullableEnumuser_exerciseFieldUpdateOperationsInput | $Enums.user_exercise | null
    is_deleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    agreement_consent?: agreement_consentUncheckedUpdateOneWithoutUserNestedInput
    prefer?: preferUncheckedUpdateManyWithoutUserNestedInput
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
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    enabled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    alarm_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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

  export type preferCreateManyUserInput = {
    id?: bigint | number
    prefer: $Enums.prefer_prefer
  }

  export type user_allergyCreateManyUserInput = {
    allergy_id: bigint | number
  }

  export type preferUpdateWithoutUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    prefer?: Enumprefer_preferFieldUpdateOperationsInput | $Enums.prefer_prefer
  }

  export type preferUncheckedUpdateWithoutUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    prefer?: Enumprefer_preferFieldUpdateOperationsInput | $Enums.prefer_prefer
  }

  export type preferUncheckedUpdateManyWithoutUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    prefer?: Enumprefer_preferFieldUpdateOperationsInput | $Enums.prefer_prefer
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