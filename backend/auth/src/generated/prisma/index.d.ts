
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
 * Model auth_user
 * 
 */
export type auth_user = $Result.DefaultSelection<Prisma.$auth_userPayload>
/**
 * Model email_verification
 * 
 */
export type email_verification = $Result.DefaultSelection<Prisma.$email_verificationPayload>
/**
 * Model password_reset_token
 * 
 */
export type password_reset_token = $Result.DefaultSelection<Prisma.$password_reset_tokenPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Auth_users
 * const auth_users = await prisma.auth_user.findMany()
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
   * // Fetch zero or more Auth_users
   * const auth_users = await prisma.auth_user.findMany()
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
   * `prisma.auth_user`: Exposes CRUD operations for the **auth_user** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Auth_users
    * const auth_users = await prisma.auth_user.findMany()
    * ```
    */
  get auth_user(): Prisma.auth_userDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.email_verification`: Exposes CRUD operations for the **email_verification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Email_verifications
    * const email_verifications = await prisma.email_verification.findMany()
    * ```
    */
  get email_verification(): Prisma.email_verificationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.password_reset_token`: Exposes CRUD operations for the **password_reset_token** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Password_reset_tokens
    * const password_reset_tokens = await prisma.password_reset_token.findMany()
    * ```
    */
  get password_reset_token(): Prisma.password_reset_tokenDelegate<ExtArgs, ClientOptions>;
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
    auth_user: 'auth_user',
    email_verification: 'email_verification',
    password_reset_token: 'password_reset_token'
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
      modelProps: "auth_user" | "email_verification" | "password_reset_token"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      auth_user: {
        payload: Prisma.$auth_userPayload<ExtArgs>
        fields: Prisma.auth_userFieldRefs
        operations: {
          findUnique: {
            args: Prisma.auth_userFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$auth_userPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.auth_userFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$auth_userPayload>
          }
          findFirst: {
            args: Prisma.auth_userFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$auth_userPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.auth_userFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$auth_userPayload>
          }
          findMany: {
            args: Prisma.auth_userFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$auth_userPayload>[]
          }
          create: {
            args: Prisma.auth_userCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$auth_userPayload>
          }
          createMany: {
            args: Prisma.auth_userCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.auth_userDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$auth_userPayload>
          }
          update: {
            args: Prisma.auth_userUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$auth_userPayload>
          }
          deleteMany: {
            args: Prisma.auth_userDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.auth_userUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.auth_userUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$auth_userPayload>
          }
          aggregate: {
            args: Prisma.Auth_userAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAuth_user>
          }
          groupBy: {
            args: Prisma.auth_userGroupByArgs<ExtArgs>
            result: $Utils.Optional<Auth_userGroupByOutputType>[]
          }
          count: {
            args: Prisma.auth_userCountArgs<ExtArgs>
            result: $Utils.Optional<Auth_userCountAggregateOutputType> | number
          }
        }
      }
      email_verification: {
        payload: Prisma.$email_verificationPayload<ExtArgs>
        fields: Prisma.email_verificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.email_verificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$email_verificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.email_verificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$email_verificationPayload>
          }
          findFirst: {
            args: Prisma.email_verificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$email_verificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.email_verificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$email_verificationPayload>
          }
          findMany: {
            args: Prisma.email_verificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$email_verificationPayload>[]
          }
          create: {
            args: Prisma.email_verificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$email_verificationPayload>
          }
          createMany: {
            args: Prisma.email_verificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.email_verificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$email_verificationPayload>
          }
          update: {
            args: Prisma.email_verificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$email_verificationPayload>
          }
          deleteMany: {
            args: Prisma.email_verificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.email_verificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.email_verificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$email_verificationPayload>
          }
          aggregate: {
            args: Prisma.Email_verificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmail_verification>
          }
          groupBy: {
            args: Prisma.email_verificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<Email_verificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.email_verificationCountArgs<ExtArgs>
            result: $Utils.Optional<Email_verificationCountAggregateOutputType> | number
          }
        }
      }
      password_reset_token: {
        payload: Prisma.$password_reset_tokenPayload<ExtArgs>
        fields: Prisma.password_reset_tokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.password_reset_tokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$password_reset_tokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.password_reset_tokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$password_reset_tokenPayload>
          }
          findFirst: {
            args: Prisma.password_reset_tokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$password_reset_tokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.password_reset_tokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$password_reset_tokenPayload>
          }
          findMany: {
            args: Prisma.password_reset_tokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$password_reset_tokenPayload>[]
          }
          create: {
            args: Prisma.password_reset_tokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$password_reset_tokenPayload>
          }
          createMany: {
            args: Prisma.password_reset_tokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.password_reset_tokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$password_reset_tokenPayload>
          }
          update: {
            args: Prisma.password_reset_tokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$password_reset_tokenPayload>
          }
          deleteMany: {
            args: Prisma.password_reset_tokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.password_reset_tokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.password_reset_tokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$password_reset_tokenPayload>
          }
          aggregate: {
            args: Prisma.Password_reset_tokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePassword_reset_token>
          }
          groupBy: {
            args: Prisma.password_reset_tokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<Password_reset_tokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.password_reset_tokenCountArgs<ExtArgs>
            result: $Utils.Optional<Password_reset_tokenCountAggregateOutputType> | number
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
    auth_user?: auth_userOmit
    email_verification?: email_verificationOmit
    password_reset_token?: password_reset_tokenOmit
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
   * Models
   */

  /**
   * Model auth_user
   */

  export type AggregateAuth_user = {
    _count: Auth_userCountAggregateOutputType | null
    _avg: Auth_userAvgAggregateOutputType | null
    _sum: Auth_userSumAggregateOutputType | null
    _min: Auth_userMinAggregateOutputType | null
    _max: Auth_userMaxAggregateOutputType | null
  }

  export type Auth_userAvgAggregateOutputType = {
    id: number | null
  }

  export type Auth_userSumAggregateOutputType = {
    id: bigint | null
  }

  export type Auth_userMinAggregateOutputType = {
    id: bigint | null
    email: string | null
    password: string | null
    is_deleted: boolean | null
    deleted_at: Date | null
  }

  export type Auth_userMaxAggregateOutputType = {
    id: bigint | null
    email: string | null
    password: string | null
    is_deleted: boolean | null
    deleted_at: Date | null
  }

  export type Auth_userCountAggregateOutputType = {
    id: number
    email: number
    password: number
    is_deleted: number
    deleted_at: number
    _all: number
  }


  export type Auth_userAvgAggregateInputType = {
    id?: true
  }

  export type Auth_userSumAggregateInputType = {
    id?: true
  }

  export type Auth_userMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    is_deleted?: true
    deleted_at?: true
  }

  export type Auth_userMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    is_deleted?: true
    deleted_at?: true
  }

  export type Auth_userCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    is_deleted?: true
    deleted_at?: true
    _all?: true
  }

  export type Auth_userAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which auth_user to aggregate.
     */
    where?: auth_userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of auth_users to fetch.
     */
    orderBy?: auth_userOrderByWithRelationInput | auth_userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: auth_userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` auth_users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` auth_users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned auth_users
    **/
    _count?: true | Auth_userCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Auth_userAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Auth_userSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Auth_userMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Auth_userMaxAggregateInputType
  }

  export type GetAuth_userAggregateType<T extends Auth_userAggregateArgs> = {
        [P in keyof T & keyof AggregateAuth_user]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuth_user[P]>
      : GetScalarType<T[P], AggregateAuth_user[P]>
  }




  export type auth_userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: auth_userWhereInput
    orderBy?: auth_userOrderByWithAggregationInput | auth_userOrderByWithAggregationInput[]
    by: Auth_userScalarFieldEnum[] | Auth_userScalarFieldEnum
    having?: auth_userScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Auth_userCountAggregateInputType | true
    _avg?: Auth_userAvgAggregateInputType
    _sum?: Auth_userSumAggregateInputType
    _min?: Auth_userMinAggregateInputType
    _max?: Auth_userMaxAggregateInputType
  }

  export type Auth_userGroupByOutputType = {
    id: bigint
    email: string | null
    password: string | null
    is_deleted: boolean | null
    deleted_at: Date | null
    _count: Auth_userCountAggregateOutputType | null
    _avg: Auth_userAvgAggregateOutputType | null
    _sum: Auth_userSumAggregateOutputType | null
    _min: Auth_userMinAggregateOutputType | null
    _max: Auth_userMaxAggregateOutputType | null
  }

  type GetAuth_userGroupByPayload<T extends auth_userGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Auth_userGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Auth_userGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Auth_userGroupByOutputType[P]>
            : GetScalarType<T[P], Auth_userGroupByOutputType[P]>
        }
      >
    >


  export type auth_userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    is_deleted?: boolean
    deleted_at?: boolean
  }, ExtArgs["result"]["auth_user"]>



  export type auth_userSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    is_deleted?: boolean
    deleted_at?: boolean
  }

  export type auth_userOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "is_deleted" | "deleted_at", ExtArgs["result"]["auth_user"]>

  export type $auth_userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "auth_user"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      email: string | null
      password: string | null
      is_deleted: boolean | null
      deleted_at: Date | null
    }, ExtArgs["result"]["auth_user"]>
    composites: {}
  }

  type auth_userGetPayload<S extends boolean | null | undefined | auth_userDefaultArgs> = $Result.GetResult<Prisma.$auth_userPayload, S>

  type auth_userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<auth_userFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Auth_userCountAggregateInputType | true
    }

  export interface auth_userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['auth_user'], meta: { name: 'auth_user' } }
    /**
     * Find zero or one Auth_user that matches the filter.
     * @param {auth_userFindUniqueArgs} args - Arguments to find a Auth_user
     * @example
     * // Get one Auth_user
     * const auth_user = await prisma.auth_user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends auth_userFindUniqueArgs>(args: SelectSubset<T, auth_userFindUniqueArgs<ExtArgs>>): Prisma__auth_userClient<$Result.GetResult<Prisma.$auth_userPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Auth_user that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {auth_userFindUniqueOrThrowArgs} args - Arguments to find a Auth_user
     * @example
     * // Get one Auth_user
     * const auth_user = await prisma.auth_user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends auth_userFindUniqueOrThrowArgs>(args: SelectSubset<T, auth_userFindUniqueOrThrowArgs<ExtArgs>>): Prisma__auth_userClient<$Result.GetResult<Prisma.$auth_userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Auth_user that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {auth_userFindFirstArgs} args - Arguments to find a Auth_user
     * @example
     * // Get one Auth_user
     * const auth_user = await prisma.auth_user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends auth_userFindFirstArgs>(args?: SelectSubset<T, auth_userFindFirstArgs<ExtArgs>>): Prisma__auth_userClient<$Result.GetResult<Prisma.$auth_userPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Auth_user that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {auth_userFindFirstOrThrowArgs} args - Arguments to find a Auth_user
     * @example
     * // Get one Auth_user
     * const auth_user = await prisma.auth_user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends auth_userFindFirstOrThrowArgs>(args?: SelectSubset<T, auth_userFindFirstOrThrowArgs<ExtArgs>>): Prisma__auth_userClient<$Result.GetResult<Prisma.$auth_userPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Auth_users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {auth_userFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Auth_users
     * const auth_users = await prisma.auth_user.findMany()
     * 
     * // Get first 10 Auth_users
     * const auth_users = await prisma.auth_user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const auth_userWithIdOnly = await prisma.auth_user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends auth_userFindManyArgs>(args?: SelectSubset<T, auth_userFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$auth_userPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Auth_user.
     * @param {auth_userCreateArgs} args - Arguments to create a Auth_user.
     * @example
     * // Create one Auth_user
     * const Auth_user = await prisma.auth_user.create({
     *   data: {
     *     // ... data to create a Auth_user
     *   }
     * })
     * 
     */
    create<T extends auth_userCreateArgs>(args: SelectSubset<T, auth_userCreateArgs<ExtArgs>>): Prisma__auth_userClient<$Result.GetResult<Prisma.$auth_userPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Auth_users.
     * @param {auth_userCreateManyArgs} args - Arguments to create many Auth_users.
     * @example
     * // Create many Auth_users
     * const auth_user = await prisma.auth_user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends auth_userCreateManyArgs>(args?: SelectSubset<T, auth_userCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Auth_user.
     * @param {auth_userDeleteArgs} args - Arguments to delete one Auth_user.
     * @example
     * // Delete one Auth_user
     * const Auth_user = await prisma.auth_user.delete({
     *   where: {
     *     // ... filter to delete one Auth_user
     *   }
     * })
     * 
     */
    delete<T extends auth_userDeleteArgs>(args: SelectSubset<T, auth_userDeleteArgs<ExtArgs>>): Prisma__auth_userClient<$Result.GetResult<Prisma.$auth_userPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Auth_user.
     * @param {auth_userUpdateArgs} args - Arguments to update one Auth_user.
     * @example
     * // Update one Auth_user
     * const auth_user = await prisma.auth_user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends auth_userUpdateArgs>(args: SelectSubset<T, auth_userUpdateArgs<ExtArgs>>): Prisma__auth_userClient<$Result.GetResult<Prisma.$auth_userPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Auth_users.
     * @param {auth_userDeleteManyArgs} args - Arguments to filter Auth_users to delete.
     * @example
     * // Delete a few Auth_users
     * const { count } = await prisma.auth_user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends auth_userDeleteManyArgs>(args?: SelectSubset<T, auth_userDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Auth_users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {auth_userUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Auth_users
     * const auth_user = await prisma.auth_user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends auth_userUpdateManyArgs>(args: SelectSubset<T, auth_userUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Auth_user.
     * @param {auth_userUpsertArgs} args - Arguments to update or create a Auth_user.
     * @example
     * // Update or create a Auth_user
     * const auth_user = await prisma.auth_user.upsert({
     *   create: {
     *     // ... data to create a Auth_user
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Auth_user we want to update
     *   }
     * })
     */
    upsert<T extends auth_userUpsertArgs>(args: SelectSubset<T, auth_userUpsertArgs<ExtArgs>>): Prisma__auth_userClient<$Result.GetResult<Prisma.$auth_userPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Auth_users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {auth_userCountArgs} args - Arguments to filter Auth_users to count.
     * @example
     * // Count the number of Auth_users
     * const count = await prisma.auth_user.count({
     *   where: {
     *     // ... the filter for the Auth_users we want to count
     *   }
     * })
    **/
    count<T extends auth_userCountArgs>(
      args?: Subset<T, auth_userCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Auth_userCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Auth_user.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Auth_userAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Auth_userAggregateArgs>(args: Subset<T, Auth_userAggregateArgs>): Prisma.PrismaPromise<GetAuth_userAggregateType<T>>

    /**
     * Group by Auth_user.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {auth_userGroupByArgs} args - Group by arguments.
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
      T extends auth_userGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: auth_userGroupByArgs['orderBy'] }
        : { orderBy?: auth_userGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, auth_userGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuth_userGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the auth_user model
   */
  readonly fields: auth_userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for auth_user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__auth_userClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the auth_user model
   */
  interface auth_userFieldRefs {
    readonly id: FieldRef<"auth_user", 'BigInt'>
    readonly email: FieldRef<"auth_user", 'String'>
    readonly password: FieldRef<"auth_user", 'String'>
    readonly is_deleted: FieldRef<"auth_user", 'Boolean'>
    readonly deleted_at: FieldRef<"auth_user", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * auth_user findUnique
   */
  export type auth_userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auth_user
     */
    select?: auth_userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the auth_user
     */
    omit?: auth_userOmit<ExtArgs> | null
    /**
     * Filter, which auth_user to fetch.
     */
    where: auth_userWhereUniqueInput
  }

  /**
   * auth_user findUniqueOrThrow
   */
  export type auth_userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auth_user
     */
    select?: auth_userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the auth_user
     */
    omit?: auth_userOmit<ExtArgs> | null
    /**
     * Filter, which auth_user to fetch.
     */
    where: auth_userWhereUniqueInput
  }

  /**
   * auth_user findFirst
   */
  export type auth_userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auth_user
     */
    select?: auth_userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the auth_user
     */
    omit?: auth_userOmit<ExtArgs> | null
    /**
     * Filter, which auth_user to fetch.
     */
    where?: auth_userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of auth_users to fetch.
     */
    orderBy?: auth_userOrderByWithRelationInput | auth_userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for auth_users.
     */
    cursor?: auth_userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` auth_users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` auth_users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of auth_users.
     */
    distinct?: Auth_userScalarFieldEnum | Auth_userScalarFieldEnum[]
  }

  /**
   * auth_user findFirstOrThrow
   */
  export type auth_userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auth_user
     */
    select?: auth_userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the auth_user
     */
    omit?: auth_userOmit<ExtArgs> | null
    /**
     * Filter, which auth_user to fetch.
     */
    where?: auth_userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of auth_users to fetch.
     */
    orderBy?: auth_userOrderByWithRelationInput | auth_userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for auth_users.
     */
    cursor?: auth_userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` auth_users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` auth_users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of auth_users.
     */
    distinct?: Auth_userScalarFieldEnum | Auth_userScalarFieldEnum[]
  }

  /**
   * auth_user findMany
   */
  export type auth_userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auth_user
     */
    select?: auth_userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the auth_user
     */
    omit?: auth_userOmit<ExtArgs> | null
    /**
     * Filter, which auth_users to fetch.
     */
    where?: auth_userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of auth_users to fetch.
     */
    orderBy?: auth_userOrderByWithRelationInput | auth_userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing auth_users.
     */
    cursor?: auth_userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` auth_users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` auth_users.
     */
    skip?: number
    distinct?: Auth_userScalarFieldEnum | Auth_userScalarFieldEnum[]
  }

  /**
   * auth_user create
   */
  export type auth_userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auth_user
     */
    select?: auth_userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the auth_user
     */
    omit?: auth_userOmit<ExtArgs> | null
    /**
     * The data needed to create a auth_user.
     */
    data?: XOR<auth_userCreateInput, auth_userUncheckedCreateInput>
  }

  /**
   * auth_user createMany
   */
  export type auth_userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many auth_users.
     */
    data: auth_userCreateManyInput | auth_userCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * auth_user update
   */
  export type auth_userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auth_user
     */
    select?: auth_userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the auth_user
     */
    omit?: auth_userOmit<ExtArgs> | null
    /**
     * The data needed to update a auth_user.
     */
    data: XOR<auth_userUpdateInput, auth_userUncheckedUpdateInput>
    /**
     * Choose, which auth_user to update.
     */
    where: auth_userWhereUniqueInput
  }

  /**
   * auth_user updateMany
   */
  export type auth_userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update auth_users.
     */
    data: XOR<auth_userUpdateManyMutationInput, auth_userUncheckedUpdateManyInput>
    /**
     * Filter which auth_users to update
     */
    where?: auth_userWhereInput
    /**
     * Limit how many auth_users to update.
     */
    limit?: number
  }

  /**
   * auth_user upsert
   */
  export type auth_userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auth_user
     */
    select?: auth_userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the auth_user
     */
    omit?: auth_userOmit<ExtArgs> | null
    /**
     * The filter to search for the auth_user to update in case it exists.
     */
    where: auth_userWhereUniqueInput
    /**
     * In case the auth_user found by the `where` argument doesn't exist, create a new auth_user with this data.
     */
    create: XOR<auth_userCreateInput, auth_userUncheckedCreateInput>
    /**
     * In case the auth_user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<auth_userUpdateInput, auth_userUncheckedUpdateInput>
  }

  /**
   * auth_user delete
   */
  export type auth_userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auth_user
     */
    select?: auth_userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the auth_user
     */
    omit?: auth_userOmit<ExtArgs> | null
    /**
     * Filter which auth_user to delete.
     */
    where: auth_userWhereUniqueInput
  }

  /**
   * auth_user deleteMany
   */
  export type auth_userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which auth_users to delete
     */
    where?: auth_userWhereInput
    /**
     * Limit how many auth_users to delete.
     */
    limit?: number
  }

  /**
   * auth_user without action
   */
  export type auth_userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auth_user
     */
    select?: auth_userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the auth_user
     */
    omit?: auth_userOmit<ExtArgs> | null
  }


  /**
   * Model email_verification
   */

  export type AggregateEmail_verification = {
    _count: Email_verificationCountAggregateOutputType | null
    _min: Email_verificationMinAggregateOutputType | null
    _max: Email_verificationMaxAggregateOutputType | null
  }

  export type Email_verificationMinAggregateOutputType = {
    email: string | null
    code: string | null
    expires_at: Date | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Email_verificationMaxAggregateOutputType = {
    email: string | null
    code: string | null
    expires_at: Date | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Email_verificationCountAggregateOutputType = {
    email: number
    code: number
    expires_at: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type Email_verificationMinAggregateInputType = {
    email?: true
    code?: true
    expires_at?: true
    created_at?: true
    updated_at?: true
  }

  export type Email_verificationMaxAggregateInputType = {
    email?: true
    code?: true
    expires_at?: true
    created_at?: true
    updated_at?: true
  }

  export type Email_verificationCountAggregateInputType = {
    email?: true
    code?: true
    expires_at?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type Email_verificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which email_verification to aggregate.
     */
    where?: email_verificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of email_verifications to fetch.
     */
    orderBy?: email_verificationOrderByWithRelationInput | email_verificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: email_verificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` email_verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` email_verifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned email_verifications
    **/
    _count?: true | Email_verificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Email_verificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Email_verificationMaxAggregateInputType
  }

  export type GetEmail_verificationAggregateType<T extends Email_verificationAggregateArgs> = {
        [P in keyof T & keyof AggregateEmail_verification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmail_verification[P]>
      : GetScalarType<T[P], AggregateEmail_verification[P]>
  }




  export type email_verificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: email_verificationWhereInput
    orderBy?: email_verificationOrderByWithAggregationInput | email_verificationOrderByWithAggregationInput[]
    by: Email_verificationScalarFieldEnum[] | Email_verificationScalarFieldEnum
    having?: email_verificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Email_verificationCountAggregateInputType | true
    _min?: Email_verificationMinAggregateInputType
    _max?: Email_verificationMaxAggregateInputType
  }

  export type Email_verificationGroupByOutputType = {
    email: string
    code: string
    expires_at: Date
    created_at: Date
    updated_at: Date
    _count: Email_verificationCountAggregateOutputType | null
    _min: Email_verificationMinAggregateOutputType | null
    _max: Email_verificationMaxAggregateOutputType | null
  }

  type GetEmail_verificationGroupByPayload<T extends email_verificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Email_verificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Email_verificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Email_verificationGroupByOutputType[P]>
            : GetScalarType<T[P], Email_verificationGroupByOutputType[P]>
        }
      >
    >


  export type email_verificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    email?: boolean
    code?: boolean
    expires_at?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["email_verification"]>



  export type email_verificationSelectScalar = {
    email?: boolean
    code?: boolean
    expires_at?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type email_verificationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"email" | "code" | "expires_at" | "created_at" | "updated_at", ExtArgs["result"]["email_verification"]>

  export type $email_verificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "email_verification"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      email: string
      code: string
      expires_at: Date
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["email_verification"]>
    composites: {}
  }

  type email_verificationGetPayload<S extends boolean | null | undefined | email_verificationDefaultArgs> = $Result.GetResult<Prisma.$email_verificationPayload, S>

  type email_verificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<email_verificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Email_verificationCountAggregateInputType | true
    }

  export interface email_verificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['email_verification'], meta: { name: 'email_verification' } }
    /**
     * Find zero or one Email_verification that matches the filter.
     * @param {email_verificationFindUniqueArgs} args - Arguments to find a Email_verification
     * @example
     * // Get one Email_verification
     * const email_verification = await prisma.email_verification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends email_verificationFindUniqueArgs>(args: SelectSubset<T, email_verificationFindUniqueArgs<ExtArgs>>): Prisma__email_verificationClient<$Result.GetResult<Prisma.$email_verificationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Email_verification that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {email_verificationFindUniqueOrThrowArgs} args - Arguments to find a Email_verification
     * @example
     * // Get one Email_verification
     * const email_verification = await prisma.email_verification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends email_verificationFindUniqueOrThrowArgs>(args: SelectSubset<T, email_verificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__email_verificationClient<$Result.GetResult<Prisma.$email_verificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Email_verification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {email_verificationFindFirstArgs} args - Arguments to find a Email_verification
     * @example
     * // Get one Email_verification
     * const email_verification = await prisma.email_verification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends email_verificationFindFirstArgs>(args?: SelectSubset<T, email_verificationFindFirstArgs<ExtArgs>>): Prisma__email_verificationClient<$Result.GetResult<Prisma.$email_verificationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Email_verification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {email_verificationFindFirstOrThrowArgs} args - Arguments to find a Email_verification
     * @example
     * // Get one Email_verification
     * const email_verification = await prisma.email_verification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends email_verificationFindFirstOrThrowArgs>(args?: SelectSubset<T, email_verificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__email_verificationClient<$Result.GetResult<Prisma.$email_verificationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Email_verifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {email_verificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Email_verifications
     * const email_verifications = await prisma.email_verification.findMany()
     * 
     * // Get first 10 Email_verifications
     * const email_verifications = await prisma.email_verification.findMany({ take: 10 })
     * 
     * // Only select the `email`
     * const email_verificationWithEmailOnly = await prisma.email_verification.findMany({ select: { email: true } })
     * 
     */
    findMany<T extends email_verificationFindManyArgs>(args?: SelectSubset<T, email_verificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$email_verificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Email_verification.
     * @param {email_verificationCreateArgs} args - Arguments to create a Email_verification.
     * @example
     * // Create one Email_verification
     * const Email_verification = await prisma.email_verification.create({
     *   data: {
     *     // ... data to create a Email_verification
     *   }
     * })
     * 
     */
    create<T extends email_verificationCreateArgs>(args: SelectSubset<T, email_verificationCreateArgs<ExtArgs>>): Prisma__email_verificationClient<$Result.GetResult<Prisma.$email_verificationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Email_verifications.
     * @param {email_verificationCreateManyArgs} args - Arguments to create many Email_verifications.
     * @example
     * // Create many Email_verifications
     * const email_verification = await prisma.email_verification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends email_verificationCreateManyArgs>(args?: SelectSubset<T, email_verificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Email_verification.
     * @param {email_verificationDeleteArgs} args - Arguments to delete one Email_verification.
     * @example
     * // Delete one Email_verification
     * const Email_verification = await prisma.email_verification.delete({
     *   where: {
     *     // ... filter to delete one Email_verification
     *   }
     * })
     * 
     */
    delete<T extends email_verificationDeleteArgs>(args: SelectSubset<T, email_verificationDeleteArgs<ExtArgs>>): Prisma__email_verificationClient<$Result.GetResult<Prisma.$email_verificationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Email_verification.
     * @param {email_verificationUpdateArgs} args - Arguments to update one Email_verification.
     * @example
     * // Update one Email_verification
     * const email_verification = await prisma.email_verification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends email_verificationUpdateArgs>(args: SelectSubset<T, email_verificationUpdateArgs<ExtArgs>>): Prisma__email_verificationClient<$Result.GetResult<Prisma.$email_verificationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Email_verifications.
     * @param {email_verificationDeleteManyArgs} args - Arguments to filter Email_verifications to delete.
     * @example
     * // Delete a few Email_verifications
     * const { count } = await prisma.email_verification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends email_verificationDeleteManyArgs>(args?: SelectSubset<T, email_verificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Email_verifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {email_verificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Email_verifications
     * const email_verification = await prisma.email_verification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends email_verificationUpdateManyArgs>(args: SelectSubset<T, email_verificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Email_verification.
     * @param {email_verificationUpsertArgs} args - Arguments to update or create a Email_verification.
     * @example
     * // Update or create a Email_verification
     * const email_verification = await prisma.email_verification.upsert({
     *   create: {
     *     // ... data to create a Email_verification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Email_verification we want to update
     *   }
     * })
     */
    upsert<T extends email_verificationUpsertArgs>(args: SelectSubset<T, email_verificationUpsertArgs<ExtArgs>>): Prisma__email_verificationClient<$Result.GetResult<Prisma.$email_verificationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Email_verifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {email_verificationCountArgs} args - Arguments to filter Email_verifications to count.
     * @example
     * // Count the number of Email_verifications
     * const count = await prisma.email_verification.count({
     *   where: {
     *     // ... the filter for the Email_verifications we want to count
     *   }
     * })
    **/
    count<T extends email_verificationCountArgs>(
      args?: Subset<T, email_verificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Email_verificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Email_verification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Email_verificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Email_verificationAggregateArgs>(args: Subset<T, Email_verificationAggregateArgs>): Prisma.PrismaPromise<GetEmail_verificationAggregateType<T>>

    /**
     * Group by Email_verification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {email_verificationGroupByArgs} args - Group by arguments.
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
      T extends email_verificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: email_verificationGroupByArgs['orderBy'] }
        : { orderBy?: email_verificationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, email_verificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmail_verificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the email_verification model
   */
  readonly fields: email_verificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for email_verification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__email_verificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the email_verification model
   */
  interface email_verificationFieldRefs {
    readonly email: FieldRef<"email_verification", 'String'>
    readonly code: FieldRef<"email_verification", 'String'>
    readonly expires_at: FieldRef<"email_verification", 'DateTime'>
    readonly created_at: FieldRef<"email_verification", 'DateTime'>
    readonly updated_at: FieldRef<"email_verification", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * email_verification findUnique
   */
  export type email_verificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the email_verification
     */
    select?: email_verificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the email_verification
     */
    omit?: email_verificationOmit<ExtArgs> | null
    /**
     * Filter, which email_verification to fetch.
     */
    where: email_verificationWhereUniqueInput
  }

  /**
   * email_verification findUniqueOrThrow
   */
  export type email_verificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the email_verification
     */
    select?: email_verificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the email_verification
     */
    omit?: email_verificationOmit<ExtArgs> | null
    /**
     * Filter, which email_verification to fetch.
     */
    where: email_verificationWhereUniqueInput
  }

  /**
   * email_verification findFirst
   */
  export type email_verificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the email_verification
     */
    select?: email_verificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the email_verification
     */
    omit?: email_verificationOmit<ExtArgs> | null
    /**
     * Filter, which email_verification to fetch.
     */
    where?: email_verificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of email_verifications to fetch.
     */
    orderBy?: email_verificationOrderByWithRelationInput | email_verificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for email_verifications.
     */
    cursor?: email_verificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` email_verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` email_verifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of email_verifications.
     */
    distinct?: Email_verificationScalarFieldEnum | Email_verificationScalarFieldEnum[]
  }

  /**
   * email_verification findFirstOrThrow
   */
  export type email_verificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the email_verification
     */
    select?: email_verificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the email_verification
     */
    omit?: email_verificationOmit<ExtArgs> | null
    /**
     * Filter, which email_verification to fetch.
     */
    where?: email_verificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of email_verifications to fetch.
     */
    orderBy?: email_verificationOrderByWithRelationInput | email_verificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for email_verifications.
     */
    cursor?: email_verificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` email_verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` email_verifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of email_verifications.
     */
    distinct?: Email_verificationScalarFieldEnum | Email_verificationScalarFieldEnum[]
  }

  /**
   * email_verification findMany
   */
  export type email_verificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the email_verification
     */
    select?: email_verificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the email_verification
     */
    omit?: email_verificationOmit<ExtArgs> | null
    /**
     * Filter, which email_verifications to fetch.
     */
    where?: email_verificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of email_verifications to fetch.
     */
    orderBy?: email_verificationOrderByWithRelationInput | email_verificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing email_verifications.
     */
    cursor?: email_verificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` email_verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` email_verifications.
     */
    skip?: number
    distinct?: Email_verificationScalarFieldEnum | Email_verificationScalarFieldEnum[]
  }

  /**
   * email_verification create
   */
  export type email_verificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the email_verification
     */
    select?: email_verificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the email_verification
     */
    omit?: email_verificationOmit<ExtArgs> | null
    /**
     * The data needed to create a email_verification.
     */
    data: XOR<email_verificationCreateInput, email_verificationUncheckedCreateInput>
  }

  /**
   * email_verification createMany
   */
  export type email_verificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many email_verifications.
     */
    data: email_verificationCreateManyInput | email_verificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * email_verification update
   */
  export type email_verificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the email_verification
     */
    select?: email_verificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the email_verification
     */
    omit?: email_verificationOmit<ExtArgs> | null
    /**
     * The data needed to update a email_verification.
     */
    data: XOR<email_verificationUpdateInput, email_verificationUncheckedUpdateInput>
    /**
     * Choose, which email_verification to update.
     */
    where: email_verificationWhereUniqueInput
  }

  /**
   * email_verification updateMany
   */
  export type email_verificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update email_verifications.
     */
    data: XOR<email_verificationUpdateManyMutationInput, email_verificationUncheckedUpdateManyInput>
    /**
     * Filter which email_verifications to update
     */
    where?: email_verificationWhereInput
    /**
     * Limit how many email_verifications to update.
     */
    limit?: number
  }

  /**
   * email_verification upsert
   */
  export type email_verificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the email_verification
     */
    select?: email_verificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the email_verification
     */
    omit?: email_verificationOmit<ExtArgs> | null
    /**
     * The filter to search for the email_verification to update in case it exists.
     */
    where: email_verificationWhereUniqueInput
    /**
     * In case the email_verification found by the `where` argument doesn't exist, create a new email_verification with this data.
     */
    create: XOR<email_verificationCreateInput, email_verificationUncheckedCreateInput>
    /**
     * In case the email_verification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<email_verificationUpdateInput, email_verificationUncheckedUpdateInput>
  }

  /**
   * email_verification delete
   */
  export type email_verificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the email_verification
     */
    select?: email_verificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the email_verification
     */
    omit?: email_verificationOmit<ExtArgs> | null
    /**
     * Filter which email_verification to delete.
     */
    where: email_verificationWhereUniqueInput
  }

  /**
   * email_verification deleteMany
   */
  export type email_verificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which email_verifications to delete
     */
    where?: email_verificationWhereInput
    /**
     * Limit how many email_verifications to delete.
     */
    limit?: number
  }

  /**
   * email_verification without action
   */
  export type email_verificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the email_verification
     */
    select?: email_verificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the email_verification
     */
    omit?: email_verificationOmit<ExtArgs> | null
  }


  /**
   * Model password_reset_token
   */

  export type AggregatePassword_reset_token = {
    _count: Password_reset_tokenCountAggregateOutputType | null
    _min: Password_reset_tokenMinAggregateOutputType | null
    _max: Password_reset_tokenMaxAggregateOutputType | null
  }

  export type Password_reset_tokenMinAggregateOutputType = {
    email: string | null
    token: string | null
    expires_at: Date | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Password_reset_tokenMaxAggregateOutputType = {
    email: string | null
    token: string | null
    expires_at: Date | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Password_reset_tokenCountAggregateOutputType = {
    email: number
    token: number
    expires_at: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type Password_reset_tokenMinAggregateInputType = {
    email?: true
    token?: true
    expires_at?: true
    created_at?: true
    updated_at?: true
  }

  export type Password_reset_tokenMaxAggregateInputType = {
    email?: true
    token?: true
    expires_at?: true
    created_at?: true
    updated_at?: true
  }

  export type Password_reset_tokenCountAggregateInputType = {
    email?: true
    token?: true
    expires_at?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type Password_reset_tokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which password_reset_token to aggregate.
     */
    where?: password_reset_tokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of password_reset_tokens to fetch.
     */
    orderBy?: password_reset_tokenOrderByWithRelationInput | password_reset_tokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: password_reset_tokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` password_reset_tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` password_reset_tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned password_reset_tokens
    **/
    _count?: true | Password_reset_tokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Password_reset_tokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Password_reset_tokenMaxAggregateInputType
  }

  export type GetPassword_reset_tokenAggregateType<T extends Password_reset_tokenAggregateArgs> = {
        [P in keyof T & keyof AggregatePassword_reset_token]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePassword_reset_token[P]>
      : GetScalarType<T[P], AggregatePassword_reset_token[P]>
  }




  export type password_reset_tokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: password_reset_tokenWhereInput
    orderBy?: password_reset_tokenOrderByWithAggregationInput | password_reset_tokenOrderByWithAggregationInput[]
    by: Password_reset_tokenScalarFieldEnum[] | Password_reset_tokenScalarFieldEnum
    having?: password_reset_tokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Password_reset_tokenCountAggregateInputType | true
    _min?: Password_reset_tokenMinAggregateInputType
    _max?: Password_reset_tokenMaxAggregateInputType
  }

  export type Password_reset_tokenGroupByOutputType = {
    email: string
    token: string
    expires_at: Date
    created_at: Date
    updated_at: Date
    _count: Password_reset_tokenCountAggregateOutputType | null
    _min: Password_reset_tokenMinAggregateOutputType | null
    _max: Password_reset_tokenMaxAggregateOutputType | null
  }

  type GetPassword_reset_tokenGroupByPayload<T extends password_reset_tokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Password_reset_tokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Password_reset_tokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Password_reset_tokenGroupByOutputType[P]>
            : GetScalarType<T[P], Password_reset_tokenGroupByOutputType[P]>
        }
      >
    >


  export type password_reset_tokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    email?: boolean
    token?: boolean
    expires_at?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["password_reset_token"]>



  export type password_reset_tokenSelectScalar = {
    email?: boolean
    token?: boolean
    expires_at?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type password_reset_tokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"email" | "token" | "expires_at" | "created_at" | "updated_at", ExtArgs["result"]["password_reset_token"]>

  export type $password_reset_tokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "password_reset_token"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      email: string
      token: string
      expires_at: Date
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["password_reset_token"]>
    composites: {}
  }

  type password_reset_tokenGetPayload<S extends boolean | null | undefined | password_reset_tokenDefaultArgs> = $Result.GetResult<Prisma.$password_reset_tokenPayload, S>

  type password_reset_tokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<password_reset_tokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Password_reset_tokenCountAggregateInputType | true
    }

  export interface password_reset_tokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['password_reset_token'], meta: { name: 'password_reset_token' } }
    /**
     * Find zero or one Password_reset_token that matches the filter.
     * @param {password_reset_tokenFindUniqueArgs} args - Arguments to find a Password_reset_token
     * @example
     * // Get one Password_reset_token
     * const password_reset_token = await prisma.password_reset_token.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends password_reset_tokenFindUniqueArgs>(args: SelectSubset<T, password_reset_tokenFindUniqueArgs<ExtArgs>>): Prisma__password_reset_tokenClient<$Result.GetResult<Prisma.$password_reset_tokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Password_reset_token that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {password_reset_tokenFindUniqueOrThrowArgs} args - Arguments to find a Password_reset_token
     * @example
     * // Get one Password_reset_token
     * const password_reset_token = await prisma.password_reset_token.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends password_reset_tokenFindUniqueOrThrowArgs>(args: SelectSubset<T, password_reset_tokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__password_reset_tokenClient<$Result.GetResult<Prisma.$password_reset_tokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Password_reset_token that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {password_reset_tokenFindFirstArgs} args - Arguments to find a Password_reset_token
     * @example
     * // Get one Password_reset_token
     * const password_reset_token = await prisma.password_reset_token.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends password_reset_tokenFindFirstArgs>(args?: SelectSubset<T, password_reset_tokenFindFirstArgs<ExtArgs>>): Prisma__password_reset_tokenClient<$Result.GetResult<Prisma.$password_reset_tokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Password_reset_token that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {password_reset_tokenFindFirstOrThrowArgs} args - Arguments to find a Password_reset_token
     * @example
     * // Get one Password_reset_token
     * const password_reset_token = await prisma.password_reset_token.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends password_reset_tokenFindFirstOrThrowArgs>(args?: SelectSubset<T, password_reset_tokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__password_reset_tokenClient<$Result.GetResult<Prisma.$password_reset_tokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Password_reset_tokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {password_reset_tokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Password_reset_tokens
     * const password_reset_tokens = await prisma.password_reset_token.findMany()
     * 
     * // Get first 10 Password_reset_tokens
     * const password_reset_tokens = await prisma.password_reset_token.findMany({ take: 10 })
     * 
     * // Only select the `email`
     * const password_reset_tokenWithEmailOnly = await prisma.password_reset_token.findMany({ select: { email: true } })
     * 
     */
    findMany<T extends password_reset_tokenFindManyArgs>(args?: SelectSubset<T, password_reset_tokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$password_reset_tokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Password_reset_token.
     * @param {password_reset_tokenCreateArgs} args - Arguments to create a Password_reset_token.
     * @example
     * // Create one Password_reset_token
     * const Password_reset_token = await prisma.password_reset_token.create({
     *   data: {
     *     // ... data to create a Password_reset_token
     *   }
     * })
     * 
     */
    create<T extends password_reset_tokenCreateArgs>(args: SelectSubset<T, password_reset_tokenCreateArgs<ExtArgs>>): Prisma__password_reset_tokenClient<$Result.GetResult<Prisma.$password_reset_tokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Password_reset_tokens.
     * @param {password_reset_tokenCreateManyArgs} args - Arguments to create many Password_reset_tokens.
     * @example
     * // Create many Password_reset_tokens
     * const password_reset_token = await prisma.password_reset_token.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends password_reset_tokenCreateManyArgs>(args?: SelectSubset<T, password_reset_tokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Password_reset_token.
     * @param {password_reset_tokenDeleteArgs} args - Arguments to delete one Password_reset_token.
     * @example
     * // Delete one Password_reset_token
     * const Password_reset_token = await prisma.password_reset_token.delete({
     *   where: {
     *     // ... filter to delete one Password_reset_token
     *   }
     * })
     * 
     */
    delete<T extends password_reset_tokenDeleteArgs>(args: SelectSubset<T, password_reset_tokenDeleteArgs<ExtArgs>>): Prisma__password_reset_tokenClient<$Result.GetResult<Prisma.$password_reset_tokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Password_reset_token.
     * @param {password_reset_tokenUpdateArgs} args - Arguments to update one Password_reset_token.
     * @example
     * // Update one Password_reset_token
     * const password_reset_token = await prisma.password_reset_token.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends password_reset_tokenUpdateArgs>(args: SelectSubset<T, password_reset_tokenUpdateArgs<ExtArgs>>): Prisma__password_reset_tokenClient<$Result.GetResult<Prisma.$password_reset_tokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Password_reset_tokens.
     * @param {password_reset_tokenDeleteManyArgs} args - Arguments to filter Password_reset_tokens to delete.
     * @example
     * // Delete a few Password_reset_tokens
     * const { count } = await prisma.password_reset_token.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends password_reset_tokenDeleteManyArgs>(args?: SelectSubset<T, password_reset_tokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Password_reset_tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {password_reset_tokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Password_reset_tokens
     * const password_reset_token = await prisma.password_reset_token.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends password_reset_tokenUpdateManyArgs>(args: SelectSubset<T, password_reset_tokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Password_reset_token.
     * @param {password_reset_tokenUpsertArgs} args - Arguments to update or create a Password_reset_token.
     * @example
     * // Update or create a Password_reset_token
     * const password_reset_token = await prisma.password_reset_token.upsert({
     *   create: {
     *     // ... data to create a Password_reset_token
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Password_reset_token we want to update
     *   }
     * })
     */
    upsert<T extends password_reset_tokenUpsertArgs>(args: SelectSubset<T, password_reset_tokenUpsertArgs<ExtArgs>>): Prisma__password_reset_tokenClient<$Result.GetResult<Prisma.$password_reset_tokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Password_reset_tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {password_reset_tokenCountArgs} args - Arguments to filter Password_reset_tokens to count.
     * @example
     * // Count the number of Password_reset_tokens
     * const count = await prisma.password_reset_token.count({
     *   where: {
     *     // ... the filter for the Password_reset_tokens we want to count
     *   }
     * })
    **/
    count<T extends password_reset_tokenCountArgs>(
      args?: Subset<T, password_reset_tokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Password_reset_tokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Password_reset_token.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Password_reset_tokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Password_reset_tokenAggregateArgs>(args: Subset<T, Password_reset_tokenAggregateArgs>): Prisma.PrismaPromise<GetPassword_reset_tokenAggregateType<T>>

    /**
     * Group by Password_reset_token.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {password_reset_tokenGroupByArgs} args - Group by arguments.
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
      T extends password_reset_tokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: password_reset_tokenGroupByArgs['orderBy'] }
        : { orderBy?: password_reset_tokenGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, password_reset_tokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPassword_reset_tokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the password_reset_token model
   */
  readonly fields: password_reset_tokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for password_reset_token.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__password_reset_tokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the password_reset_token model
   */
  interface password_reset_tokenFieldRefs {
    readonly email: FieldRef<"password_reset_token", 'String'>
    readonly token: FieldRef<"password_reset_token", 'String'>
    readonly expires_at: FieldRef<"password_reset_token", 'DateTime'>
    readonly created_at: FieldRef<"password_reset_token", 'DateTime'>
    readonly updated_at: FieldRef<"password_reset_token", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * password_reset_token findUnique
   */
  export type password_reset_tokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the password_reset_token
     */
    select?: password_reset_tokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the password_reset_token
     */
    omit?: password_reset_tokenOmit<ExtArgs> | null
    /**
     * Filter, which password_reset_token to fetch.
     */
    where: password_reset_tokenWhereUniqueInput
  }

  /**
   * password_reset_token findUniqueOrThrow
   */
  export type password_reset_tokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the password_reset_token
     */
    select?: password_reset_tokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the password_reset_token
     */
    omit?: password_reset_tokenOmit<ExtArgs> | null
    /**
     * Filter, which password_reset_token to fetch.
     */
    where: password_reset_tokenWhereUniqueInput
  }

  /**
   * password_reset_token findFirst
   */
  export type password_reset_tokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the password_reset_token
     */
    select?: password_reset_tokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the password_reset_token
     */
    omit?: password_reset_tokenOmit<ExtArgs> | null
    /**
     * Filter, which password_reset_token to fetch.
     */
    where?: password_reset_tokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of password_reset_tokens to fetch.
     */
    orderBy?: password_reset_tokenOrderByWithRelationInput | password_reset_tokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for password_reset_tokens.
     */
    cursor?: password_reset_tokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` password_reset_tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` password_reset_tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of password_reset_tokens.
     */
    distinct?: Password_reset_tokenScalarFieldEnum | Password_reset_tokenScalarFieldEnum[]
  }

  /**
   * password_reset_token findFirstOrThrow
   */
  export type password_reset_tokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the password_reset_token
     */
    select?: password_reset_tokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the password_reset_token
     */
    omit?: password_reset_tokenOmit<ExtArgs> | null
    /**
     * Filter, which password_reset_token to fetch.
     */
    where?: password_reset_tokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of password_reset_tokens to fetch.
     */
    orderBy?: password_reset_tokenOrderByWithRelationInput | password_reset_tokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for password_reset_tokens.
     */
    cursor?: password_reset_tokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` password_reset_tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` password_reset_tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of password_reset_tokens.
     */
    distinct?: Password_reset_tokenScalarFieldEnum | Password_reset_tokenScalarFieldEnum[]
  }

  /**
   * password_reset_token findMany
   */
  export type password_reset_tokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the password_reset_token
     */
    select?: password_reset_tokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the password_reset_token
     */
    omit?: password_reset_tokenOmit<ExtArgs> | null
    /**
     * Filter, which password_reset_tokens to fetch.
     */
    where?: password_reset_tokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of password_reset_tokens to fetch.
     */
    orderBy?: password_reset_tokenOrderByWithRelationInput | password_reset_tokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing password_reset_tokens.
     */
    cursor?: password_reset_tokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` password_reset_tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` password_reset_tokens.
     */
    skip?: number
    distinct?: Password_reset_tokenScalarFieldEnum | Password_reset_tokenScalarFieldEnum[]
  }

  /**
   * password_reset_token create
   */
  export type password_reset_tokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the password_reset_token
     */
    select?: password_reset_tokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the password_reset_token
     */
    omit?: password_reset_tokenOmit<ExtArgs> | null
    /**
     * The data needed to create a password_reset_token.
     */
    data: XOR<password_reset_tokenCreateInput, password_reset_tokenUncheckedCreateInput>
  }

  /**
   * password_reset_token createMany
   */
  export type password_reset_tokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many password_reset_tokens.
     */
    data: password_reset_tokenCreateManyInput | password_reset_tokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * password_reset_token update
   */
  export type password_reset_tokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the password_reset_token
     */
    select?: password_reset_tokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the password_reset_token
     */
    omit?: password_reset_tokenOmit<ExtArgs> | null
    /**
     * The data needed to update a password_reset_token.
     */
    data: XOR<password_reset_tokenUpdateInput, password_reset_tokenUncheckedUpdateInput>
    /**
     * Choose, which password_reset_token to update.
     */
    where: password_reset_tokenWhereUniqueInput
  }

  /**
   * password_reset_token updateMany
   */
  export type password_reset_tokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update password_reset_tokens.
     */
    data: XOR<password_reset_tokenUpdateManyMutationInput, password_reset_tokenUncheckedUpdateManyInput>
    /**
     * Filter which password_reset_tokens to update
     */
    where?: password_reset_tokenWhereInput
    /**
     * Limit how many password_reset_tokens to update.
     */
    limit?: number
  }

  /**
   * password_reset_token upsert
   */
  export type password_reset_tokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the password_reset_token
     */
    select?: password_reset_tokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the password_reset_token
     */
    omit?: password_reset_tokenOmit<ExtArgs> | null
    /**
     * The filter to search for the password_reset_token to update in case it exists.
     */
    where: password_reset_tokenWhereUniqueInput
    /**
     * In case the password_reset_token found by the `where` argument doesn't exist, create a new password_reset_token with this data.
     */
    create: XOR<password_reset_tokenCreateInput, password_reset_tokenUncheckedCreateInput>
    /**
     * In case the password_reset_token was found with the provided `where` argument, update it with this data.
     */
    update: XOR<password_reset_tokenUpdateInput, password_reset_tokenUncheckedUpdateInput>
  }

  /**
   * password_reset_token delete
   */
  export type password_reset_tokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the password_reset_token
     */
    select?: password_reset_tokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the password_reset_token
     */
    omit?: password_reset_tokenOmit<ExtArgs> | null
    /**
     * Filter which password_reset_token to delete.
     */
    where: password_reset_tokenWhereUniqueInput
  }

  /**
   * password_reset_token deleteMany
   */
  export type password_reset_tokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which password_reset_tokens to delete
     */
    where?: password_reset_tokenWhereInput
    /**
     * Limit how many password_reset_tokens to delete.
     */
    limit?: number
  }

  /**
   * password_reset_token without action
   */
  export type password_reset_tokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the password_reset_token
     */
    select?: password_reset_tokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the password_reset_token
     */
    omit?: password_reset_tokenOmit<ExtArgs> | null
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


  export const Auth_userScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    is_deleted: 'is_deleted',
    deleted_at: 'deleted_at'
  };

  export type Auth_userScalarFieldEnum = (typeof Auth_userScalarFieldEnum)[keyof typeof Auth_userScalarFieldEnum]


  export const Email_verificationScalarFieldEnum: {
    email: 'email',
    code: 'code',
    expires_at: 'expires_at',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type Email_verificationScalarFieldEnum = (typeof Email_verificationScalarFieldEnum)[keyof typeof Email_verificationScalarFieldEnum]


  export const Password_reset_tokenScalarFieldEnum: {
    email: 'email',
    token: 'token',
    expires_at: 'expires_at',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type Password_reset_tokenScalarFieldEnum = (typeof Password_reset_tokenScalarFieldEnum)[keyof typeof Password_reset_tokenScalarFieldEnum]


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


  export const auth_userOrderByRelevanceFieldEnum: {
    email: 'email',
    password: 'password'
  };

  export type auth_userOrderByRelevanceFieldEnum = (typeof auth_userOrderByRelevanceFieldEnum)[keyof typeof auth_userOrderByRelevanceFieldEnum]


  export const email_verificationOrderByRelevanceFieldEnum: {
    email: 'email',
    code: 'code'
  };

  export type email_verificationOrderByRelevanceFieldEnum = (typeof email_verificationOrderByRelevanceFieldEnum)[keyof typeof email_verificationOrderByRelevanceFieldEnum]


  export const password_reset_tokenOrderByRelevanceFieldEnum: {
    email: 'email',
    token: 'token'
  };

  export type password_reset_tokenOrderByRelevanceFieldEnum = (typeof password_reset_tokenOrderByRelevanceFieldEnum)[keyof typeof password_reset_tokenOrderByRelevanceFieldEnum]


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


  export type auth_userWhereInput = {
    AND?: auth_userWhereInput | auth_userWhereInput[]
    OR?: auth_userWhereInput[]
    NOT?: auth_userWhereInput | auth_userWhereInput[]
    id?: BigIntFilter<"auth_user"> | bigint | number
    email?: StringNullableFilter<"auth_user"> | string | null
    password?: StringNullableFilter<"auth_user"> | string | null
    is_deleted?: BoolNullableFilter<"auth_user"> | boolean | null
    deleted_at?: DateTimeNullableFilter<"auth_user"> | Date | string | null
  }

  export type auth_userOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    is_deleted?: SortOrderInput | SortOrder
    deleted_at?: SortOrderInput | SortOrder
    _relevance?: auth_userOrderByRelevanceInput
  }

  export type auth_userWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: auth_userWhereInput | auth_userWhereInput[]
    OR?: auth_userWhereInput[]
    NOT?: auth_userWhereInput | auth_userWhereInput[]
    email?: StringNullableFilter<"auth_user"> | string | null
    password?: StringNullableFilter<"auth_user"> | string | null
    is_deleted?: BoolNullableFilter<"auth_user"> | boolean | null
    deleted_at?: DateTimeNullableFilter<"auth_user"> | Date | string | null
  }, "id">

  export type auth_userOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    is_deleted?: SortOrderInput | SortOrder
    deleted_at?: SortOrderInput | SortOrder
    _count?: auth_userCountOrderByAggregateInput
    _avg?: auth_userAvgOrderByAggregateInput
    _max?: auth_userMaxOrderByAggregateInput
    _min?: auth_userMinOrderByAggregateInput
    _sum?: auth_userSumOrderByAggregateInput
  }

  export type auth_userScalarWhereWithAggregatesInput = {
    AND?: auth_userScalarWhereWithAggregatesInput | auth_userScalarWhereWithAggregatesInput[]
    OR?: auth_userScalarWhereWithAggregatesInput[]
    NOT?: auth_userScalarWhereWithAggregatesInput | auth_userScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"auth_user"> | bigint | number
    email?: StringNullableWithAggregatesFilter<"auth_user"> | string | null
    password?: StringNullableWithAggregatesFilter<"auth_user"> | string | null
    is_deleted?: BoolNullableWithAggregatesFilter<"auth_user"> | boolean | null
    deleted_at?: DateTimeNullableWithAggregatesFilter<"auth_user"> | Date | string | null
  }

  export type email_verificationWhereInput = {
    AND?: email_verificationWhereInput | email_verificationWhereInput[]
    OR?: email_verificationWhereInput[]
    NOT?: email_verificationWhereInput | email_verificationWhereInput[]
    email?: StringFilter<"email_verification"> | string
    code?: StringFilter<"email_verification"> | string
    expires_at?: DateTimeFilter<"email_verification"> | Date | string
    created_at?: DateTimeFilter<"email_verification"> | Date | string
    updated_at?: DateTimeFilter<"email_verification"> | Date | string
  }

  export type email_verificationOrderByWithRelationInput = {
    email?: SortOrder
    code?: SortOrder
    expires_at?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _relevance?: email_verificationOrderByRelevanceInput
  }

  export type email_verificationWhereUniqueInput = Prisma.AtLeast<{
    email?: string
    AND?: email_verificationWhereInput | email_verificationWhereInput[]
    OR?: email_verificationWhereInput[]
    NOT?: email_verificationWhereInput | email_verificationWhereInput[]
    code?: StringFilter<"email_verification"> | string
    expires_at?: DateTimeFilter<"email_verification"> | Date | string
    created_at?: DateTimeFilter<"email_verification"> | Date | string
    updated_at?: DateTimeFilter<"email_verification"> | Date | string
  }, "email">

  export type email_verificationOrderByWithAggregationInput = {
    email?: SortOrder
    code?: SortOrder
    expires_at?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: email_verificationCountOrderByAggregateInput
    _max?: email_verificationMaxOrderByAggregateInput
    _min?: email_verificationMinOrderByAggregateInput
  }

  export type email_verificationScalarWhereWithAggregatesInput = {
    AND?: email_verificationScalarWhereWithAggregatesInput | email_verificationScalarWhereWithAggregatesInput[]
    OR?: email_verificationScalarWhereWithAggregatesInput[]
    NOT?: email_verificationScalarWhereWithAggregatesInput | email_verificationScalarWhereWithAggregatesInput[]
    email?: StringWithAggregatesFilter<"email_verification"> | string
    code?: StringWithAggregatesFilter<"email_verification"> | string
    expires_at?: DateTimeWithAggregatesFilter<"email_verification"> | Date | string
    created_at?: DateTimeWithAggregatesFilter<"email_verification"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"email_verification"> | Date | string
  }

  export type password_reset_tokenWhereInput = {
    AND?: password_reset_tokenWhereInput | password_reset_tokenWhereInput[]
    OR?: password_reset_tokenWhereInput[]
    NOT?: password_reset_tokenWhereInput | password_reset_tokenWhereInput[]
    email?: StringFilter<"password_reset_token"> | string
    token?: StringFilter<"password_reset_token"> | string
    expires_at?: DateTimeFilter<"password_reset_token"> | Date | string
    created_at?: DateTimeFilter<"password_reset_token"> | Date | string
    updated_at?: DateTimeFilter<"password_reset_token"> | Date | string
  }

  export type password_reset_tokenOrderByWithRelationInput = {
    email?: SortOrder
    token?: SortOrder
    expires_at?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _relevance?: password_reset_tokenOrderByRelevanceInput
  }

  export type password_reset_tokenWhereUniqueInput = Prisma.AtLeast<{
    email?: string
    token?: string
    AND?: password_reset_tokenWhereInput | password_reset_tokenWhereInput[]
    OR?: password_reset_tokenWhereInput[]
    NOT?: password_reset_tokenWhereInput | password_reset_tokenWhereInput[]
    expires_at?: DateTimeFilter<"password_reset_token"> | Date | string
    created_at?: DateTimeFilter<"password_reset_token"> | Date | string
    updated_at?: DateTimeFilter<"password_reset_token"> | Date | string
  }, "token" | "email">

  export type password_reset_tokenOrderByWithAggregationInput = {
    email?: SortOrder
    token?: SortOrder
    expires_at?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: password_reset_tokenCountOrderByAggregateInput
    _max?: password_reset_tokenMaxOrderByAggregateInput
    _min?: password_reset_tokenMinOrderByAggregateInput
  }

  export type password_reset_tokenScalarWhereWithAggregatesInput = {
    AND?: password_reset_tokenScalarWhereWithAggregatesInput | password_reset_tokenScalarWhereWithAggregatesInput[]
    OR?: password_reset_tokenScalarWhereWithAggregatesInput[]
    NOT?: password_reset_tokenScalarWhereWithAggregatesInput | password_reset_tokenScalarWhereWithAggregatesInput[]
    email?: StringWithAggregatesFilter<"password_reset_token"> | string
    token?: StringWithAggregatesFilter<"password_reset_token"> | string
    expires_at?: DateTimeWithAggregatesFilter<"password_reset_token"> | Date | string
    created_at?: DateTimeWithAggregatesFilter<"password_reset_token"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"password_reset_token"> | Date | string
  }

  export type auth_userCreateInput = {
    id?: bigint | number
    email?: string | null
    password?: string | null
    is_deleted?: boolean | null
    deleted_at?: Date | string | null
  }

  export type auth_userUncheckedCreateInput = {
    id?: bigint | number
    email?: string | null
    password?: string | null
    is_deleted?: boolean | null
    deleted_at?: Date | string | null
  }

  export type auth_userUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    is_deleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type auth_userUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    is_deleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type auth_userCreateManyInput = {
    id?: bigint | number
    email?: string | null
    password?: string | null
    is_deleted?: boolean | null
    deleted_at?: Date | string | null
  }

  export type auth_userUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    is_deleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type auth_userUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    is_deleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type email_verificationCreateInput = {
    email: string
    code: string
    expires_at: Date | string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type email_verificationUncheckedCreateInput = {
    email: string
    code: string
    expires_at: Date | string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type email_verificationUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type email_verificationUncheckedUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type email_verificationCreateManyInput = {
    email: string
    code: string
    expires_at: Date | string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type email_verificationUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type email_verificationUncheckedUpdateManyInput = {
    email?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type password_reset_tokenCreateInput = {
    email: string
    token: string
    expires_at: Date | string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type password_reset_tokenUncheckedCreateInput = {
    email: string
    token: string
    expires_at: Date | string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type password_reset_tokenUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type password_reset_tokenUncheckedUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type password_reset_tokenCreateManyInput = {
    email: string
    token: string
    expires_at: Date | string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type password_reset_tokenUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type password_reset_tokenUncheckedUpdateManyInput = {
    email?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type auth_userOrderByRelevanceInput = {
    fields: auth_userOrderByRelevanceFieldEnum | auth_userOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type auth_userCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    is_deleted?: SortOrder
    deleted_at?: SortOrder
  }

  export type auth_userAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type auth_userMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    is_deleted?: SortOrder
    deleted_at?: SortOrder
  }

  export type auth_userMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    is_deleted?: SortOrder
    deleted_at?: SortOrder
  }

  export type auth_userSumOrderByAggregateInput = {
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

  export type email_verificationOrderByRelevanceInput = {
    fields: email_verificationOrderByRelevanceFieldEnum | email_verificationOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type email_verificationCountOrderByAggregateInput = {
    email?: SortOrder
    code?: SortOrder
    expires_at?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type email_verificationMaxOrderByAggregateInput = {
    email?: SortOrder
    code?: SortOrder
    expires_at?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type email_verificationMinOrderByAggregateInput = {
    email?: SortOrder
    code?: SortOrder
    expires_at?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
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

  export type password_reset_tokenOrderByRelevanceInput = {
    fields: password_reset_tokenOrderByRelevanceFieldEnum | password_reset_tokenOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type password_reset_tokenCountOrderByAggregateInput = {
    email?: SortOrder
    token?: SortOrder
    expires_at?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type password_reset_tokenMaxOrderByAggregateInput = {
    email?: SortOrder
    token?: SortOrder
    expires_at?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type password_reset_tokenMinOrderByAggregateInput = {
    email?: SortOrder
    token?: SortOrder
    expires_at?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
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

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
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