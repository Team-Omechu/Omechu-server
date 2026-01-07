
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
 * Model menu
 * 
 */
export type menu = $Result.DefaultSelection<Prisma.$menuPayload>
/**
 * Model mukburim
 * 
 */
export type mukburim = $Result.DefaultSelection<Prisma.$mukburimPayload>
/**
 * Model menu_tag
 * 
 */
export type menu_tag = $Result.DefaultSelection<Prisma.$menu_tagPayload>
/**
 * Model battle
 * 
 */
export type battle = $Result.DefaultSelection<Prisma.$battlePayload>
/**
 * Model battle_menu
 * 
 */
export type battle_menu = $Result.DefaultSelection<Prisma.$battle_menuPayload>
/**
 * Model battle_participant
 * 
 */
export type battle_participant = $Result.DefaultSelection<Prisma.$battle_participantPayload>
/**
 * Model menu_allery
 * 
 */
export type menu_allery = $Result.DefaultSelection<Prisma.$menu_alleryPayload>
/**
 * Model menu_vitamin
 * 
 */
export type menu_vitamin = $Result.DefaultSelection<Prisma.$menu_vitaminPayload>
/**
 * Model spin_result
 * 
 */
export type spin_result = $Result.DefaultSelection<Prisma.$spin_resultPayload>
/**
 * Model vitamin
 * 
 */
export type vitamin = $Result.DefaultSelection<Prisma.$vitaminPayload>
/**
 * Model allergy
 * 
 */
export type allergy = $Result.DefaultSelection<Prisma.$allergyPayload>
/**
 * Model sessions
 * 
 */
export type sessions = $Result.DefaultSelection<Prisma.$sessionsPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Menus
 * const menus = await prisma.menu.findMany()
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
   * // Fetch zero or more Menus
   * const menus = await prisma.menu.findMany()
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
   * `prisma.menu`: Exposes CRUD operations for the **menu** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Menus
    * const menus = await prisma.menu.findMany()
    * ```
    */
  get menu(): Prisma.menuDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mukburim`: Exposes CRUD operations for the **mukburim** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Mukburims
    * const mukburims = await prisma.mukburim.findMany()
    * ```
    */
  get mukburim(): Prisma.mukburimDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.menu_tag`: Exposes CRUD operations for the **menu_tag** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Menu_tags
    * const menu_tags = await prisma.menu_tag.findMany()
    * ```
    */
  get menu_tag(): Prisma.menu_tagDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.battle`: Exposes CRUD operations for the **battle** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Battles
    * const battles = await prisma.battle.findMany()
    * ```
    */
  get battle(): Prisma.battleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.battle_menu`: Exposes CRUD operations for the **battle_menu** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Battle_menus
    * const battle_menus = await prisma.battle_menu.findMany()
    * ```
    */
  get battle_menu(): Prisma.battle_menuDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.battle_participant`: Exposes CRUD operations for the **battle_participant** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Battle_participants
    * const battle_participants = await prisma.battle_participant.findMany()
    * ```
    */
  get battle_participant(): Prisma.battle_participantDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.menu_allery`: Exposes CRUD operations for the **menu_allery** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Menu_alleries
    * const menu_alleries = await prisma.menu_allery.findMany()
    * ```
    */
  get menu_allery(): Prisma.menu_alleryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.menu_vitamin`: Exposes CRUD operations for the **menu_vitamin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Menu_vitamins
    * const menu_vitamins = await prisma.menu_vitamin.findMany()
    * ```
    */
  get menu_vitamin(): Prisma.menu_vitaminDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.spin_result`: Exposes CRUD operations for the **spin_result** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Spin_results
    * const spin_results = await prisma.spin_result.findMany()
    * ```
    */
  get spin_result(): Prisma.spin_resultDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.vitamin`: Exposes CRUD operations for the **vitamin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Vitamins
    * const vitamins = await prisma.vitamin.findMany()
    * ```
    */
  get vitamin(): Prisma.vitaminDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.allergy`: Exposes CRUD operations for the **allergy** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Allergies
    * const allergies = await prisma.allergy.findMany()
    * ```
    */
  get allergy(): Prisma.allergyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sessions`: Exposes CRUD operations for the **sessions** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.sessions.findMany()
    * ```
    */
  get sessions(): Prisma.sessionsDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.19.1
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
    menu: 'menu',
    mukburim: 'mukburim',
    menu_tag: 'menu_tag',
    battle: 'battle',
    battle_menu: 'battle_menu',
    battle_participant: 'battle_participant',
    menu_allery: 'menu_allery',
    menu_vitamin: 'menu_vitamin',
    spin_result: 'spin_result',
    vitamin: 'vitamin',
    allergy: 'allergy',
    sessions: 'sessions'
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
      modelProps: "menu" | "mukburim" | "menu_tag" | "battle" | "battle_menu" | "battle_participant" | "menu_allery" | "menu_vitamin" | "spin_result" | "vitamin" | "allergy" | "sessions"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      menu: {
        payload: Prisma.$menuPayload<ExtArgs>
        fields: Prisma.menuFieldRefs
        operations: {
          findUnique: {
            args: Prisma.menuFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$menuPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.menuFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$menuPayload>
          }
          findFirst: {
            args: Prisma.menuFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$menuPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.menuFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$menuPayload>
          }
          findMany: {
            args: Prisma.menuFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$menuPayload>[]
          }
          create: {
            args: Prisma.menuCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$menuPayload>
          }
          createMany: {
            args: Prisma.menuCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.menuDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$menuPayload>
          }
          update: {
            args: Prisma.menuUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$menuPayload>
          }
          deleteMany: {
            args: Prisma.menuDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.menuUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.menuUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$menuPayload>
          }
          aggregate: {
            args: Prisma.MenuAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMenu>
          }
          groupBy: {
            args: Prisma.menuGroupByArgs<ExtArgs>
            result: $Utils.Optional<MenuGroupByOutputType>[]
          }
          count: {
            args: Prisma.menuCountArgs<ExtArgs>
            result: $Utils.Optional<MenuCountAggregateOutputType> | number
          }
        }
      }
      mukburim: {
        payload: Prisma.$mukburimPayload<ExtArgs>
        fields: Prisma.mukburimFieldRefs
        operations: {
          findUnique: {
            args: Prisma.mukburimFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mukburimPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.mukburimFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mukburimPayload>
          }
          findFirst: {
            args: Prisma.mukburimFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mukburimPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.mukburimFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mukburimPayload>
          }
          findMany: {
            args: Prisma.mukburimFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mukburimPayload>[]
          }
          create: {
            args: Prisma.mukburimCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mukburimPayload>
          }
          createMany: {
            args: Prisma.mukburimCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.mukburimDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mukburimPayload>
          }
          update: {
            args: Prisma.mukburimUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mukburimPayload>
          }
          deleteMany: {
            args: Prisma.mukburimDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.mukburimUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.mukburimUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mukburimPayload>
          }
          aggregate: {
            args: Prisma.MukburimAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMukburim>
          }
          groupBy: {
            args: Prisma.mukburimGroupByArgs<ExtArgs>
            result: $Utils.Optional<MukburimGroupByOutputType>[]
          }
          count: {
            args: Prisma.mukburimCountArgs<ExtArgs>
            result: $Utils.Optional<MukburimCountAggregateOutputType> | number
          }
        }
      }
      menu_tag: {
        payload: Prisma.$menu_tagPayload<ExtArgs>
        fields: Prisma.menu_tagFieldRefs
        operations: {
          findUnique: {
            args: Prisma.menu_tagFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$menu_tagPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.menu_tagFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$menu_tagPayload>
          }
          findFirst: {
            args: Prisma.menu_tagFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$menu_tagPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.menu_tagFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$menu_tagPayload>
          }
          findMany: {
            args: Prisma.menu_tagFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$menu_tagPayload>[]
          }
          create: {
            args: Prisma.menu_tagCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$menu_tagPayload>
          }
          createMany: {
            args: Prisma.menu_tagCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.menu_tagDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$menu_tagPayload>
          }
          update: {
            args: Prisma.menu_tagUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$menu_tagPayload>
          }
          deleteMany: {
            args: Prisma.menu_tagDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.menu_tagUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.menu_tagUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$menu_tagPayload>
          }
          aggregate: {
            args: Prisma.Menu_tagAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMenu_tag>
          }
          groupBy: {
            args: Prisma.menu_tagGroupByArgs<ExtArgs>
            result: $Utils.Optional<Menu_tagGroupByOutputType>[]
          }
          count: {
            args: Prisma.menu_tagCountArgs<ExtArgs>
            result: $Utils.Optional<Menu_tagCountAggregateOutputType> | number
          }
        }
      }
      battle: {
        payload: Prisma.$battlePayload<ExtArgs>
        fields: Prisma.battleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.battleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$battlePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.battleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$battlePayload>
          }
          findFirst: {
            args: Prisma.battleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$battlePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.battleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$battlePayload>
          }
          findMany: {
            args: Prisma.battleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$battlePayload>[]
          }
          create: {
            args: Prisma.battleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$battlePayload>
          }
          createMany: {
            args: Prisma.battleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.battleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$battlePayload>
          }
          update: {
            args: Prisma.battleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$battlePayload>
          }
          deleteMany: {
            args: Prisma.battleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.battleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.battleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$battlePayload>
          }
          aggregate: {
            args: Prisma.BattleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBattle>
          }
          groupBy: {
            args: Prisma.battleGroupByArgs<ExtArgs>
            result: $Utils.Optional<BattleGroupByOutputType>[]
          }
          count: {
            args: Prisma.battleCountArgs<ExtArgs>
            result: $Utils.Optional<BattleCountAggregateOutputType> | number
          }
        }
      }
      battle_menu: {
        payload: Prisma.$battle_menuPayload<ExtArgs>
        fields: Prisma.battle_menuFieldRefs
        operations: {
          findUnique: {
            args: Prisma.battle_menuFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$battle_menuPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.battle_menuFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$battle_menuPayload>
          }
          findFirst: {
            args: Prisma.battle_menuFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$battle_menuPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.battle_menuFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$battle_menuPayload>
          }
          findMany: {
            args: Prisma.battle_menuFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$battle_menuPayload>[]
          }
          create: {
            args: Prisma.battle_menuCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$battle_menuPayload>
          }
          createMany: {
            args: Prisma.battle_menuCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.battle_menuDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$battle_menuPayload>
          }
          update: {
            args: Prisma.battle_menuUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$battle_menuPayload>
          }
          deleteMany: {
            args: Prisma.battle_menuDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.battle_menuUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.battle_menuUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$battle_menuPayload>
          }
          aggregate: {
            args: Prisma.Battle_menuAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBattle_menu>
          }
          groupBy: {
            args: Prisma.battle_menuGroupByArgs<ExtArgs>
            result: $Utils.Optional<Battle_menuGroupByOutputType>[]
          }
          count: {
            args: Prisma.battle_menuCountArgs<ExtArgs>
            result: $Utils.Optional<Battle_menuCountAggregateOutputType> | number
          }
        }
      }
      battle_participant: {
        payload: Prisma.$battle_participantPayload<ExtArgs>
        fields: Prisma.battle_participantFieldRefs
        operations: {
          findUnique: {
            args: Prisma.battle_participantFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$battle_participantPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.battle_participantFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$battle_participantPayload>
          }
          findFirst: {
            args: Prisma.battle_participantFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$battle_participantPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.battle_participantFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$battle_participantPayload>
          }
          findMany: {
            args: Prisma.battle_participantFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$battle_participantPayload>[]
          }
          create: {
            args: Prisma.battle_participantCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$battle_participantPayload>
          }
          createMany: {
            args: Prisma.battle_participantCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.battle_participantDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$battle_participantPayload>
          }
          update: {
            args: Prisma.battle_participantUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$battle_participantPayload>
          }
          deleteMany: {
            args: Prisma.battle_participantDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.battle_participantUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.battle_participantUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$battle_participantPayload>
          }
          aggregate: {
            args: Prisma.Battle_participantAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBattle_participant>
          }
          groupBy: {
            args: Prisma.battle_participantGroupByArgs<ExtArgs>
            result: $Utils.Optional<Battle_participantGroupByOutputType>[]
          }
          count: {
            args: Prisma.battle_participantCountArgs<ExtArgs>
            result: $Utils.Optional<Battle_participantCountAggregateOutputType> | number
          }
        }
      }
      menu_allery: {
        payload: Prisma.$menu_alleryPayload<ExtArgs>
        fields: Prisma.menu_alleryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.menu_alleryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$menu_alleryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.menu_alleryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$menu_alleryPayload>
          }
          findFirst: {
            args: Prisma.menu_alleryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$menu_alleryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.menu_alleryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$menu_alleryPayload>
          }
          findMany: {
            args: Prisma.menu_alleryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$menu_alleryPayload>[]
          }
          create: {
            args: Prisma.menu_alleryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$menu_alleryPayload>
          }
          createMany: {
            args: Prisma.menu_alleryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.menu_alleryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$menu_alleryPayload>
          }
          update: {
            args: Prisma.menu_alleryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$menu_alleryPayload>
          }
          deleteMany: {
            args: Prisma.menu_alleryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.menu_alleryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.menu_alleryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$menu_alleryPayload>
          }
          aggregate: {
            args: Prisma.Menu_alleryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMenu_allery>
          }
          groupBy: {
            args: Prisma.menu_alleryGroupByArgs<ExtArgs>
            result: $Utils.Optional<Menu_alleryGroupByOutputType>[]
          }
          count: {
            args: Prisma.menu_alleryCountArgs<ExtArgs>
            result: $Utils.Optional<Menu_alleryCountAggregateOutputType> | number
          }
        }
      }
      menu_vitamin: {
        payload: Prisma.$menu_vitaminPayload<ExtArgs>
        fields: Prisma.menu_vitaminFieldRefs
        operations: {
          findUnique: {
            args: Prisma.menu_vitaminFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$menu_vitaminPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.menu_vitaminFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$menu_vitaminPayload>
          }
          findFirst: {
            args: Prisma.menu_vitaminFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$menu_vitaminPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.menu_vitaminFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$menu_vitaminPayload>
          }
          findMany: {
            args: Prisma.menu_vitaminFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$menu_vitaminPayload>[]
          }
          create: {
            args: Prisma.menu_vitaminCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$menu_vitaminPayload>
          }
          createMany: {
            args: Prisma.menu_vitaminCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.menu_vitaminDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$menu_vitaminPayload>
          }
          update: {
            args: Prisma.menu_vitaminUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$menu_vitaminPayload>
          }
          deleteMany: {
            args: Prisma.menu_vitaminDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.menu_vitaminUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.menu_vitaminUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$menu_vitaminPayload>
          }
          aggregate: {
            args: Prisma.Menu_vitaminAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMenu_vitamin>
          }
          groupBy: {
            args: Prisma.menu_vitaminGroupByArgs<ExtArgs>
            result: $Utils.Optional<Menu_vitaminGroupByOutputType>[]
          }
          count: {
            args: Prisma.menu_vitaminCountArgs<ExtArgs>
            result: $Utils.Optional<Menu_vitaminCountAggregateOutputType> | number
          }
        }
      }
      spin_result: {
        payload: Prisma.$spin_resultPayload<ExtArgs>
        fields: Prisma.spin_resultFieldRefs
        operations: {
          findUnique: {
            args: Prisma.spin_resultFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$spin_resultPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.spin_resultFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$spin_resultPayload>
          }
          findFirst: {
            args: Prisma.spin_resultFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$spin_resultPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.spin_resultFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$spin_resultPayload>
          }
          findMany: {
            args: Prisma.spin_resultFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$spin_resultPayload>[]
          }
          create: {
            args: Prisma.spin_resultCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$spin_resultPayload>
          }
          createMany: {
            args: Prisma.spin_resultCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.spin_resultDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$spin_resultPayload>
          }
          update: {
            args: Prisma.spin_resultUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$spin_resultPayload>
          }
          deleteMany: {
            args: Prisma.spin_resultDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.spin_resultUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.spin_resultUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$spin_resultPayload>
          }
          aggregate: {
            args: Prisma.Spin_resultAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSpin_result>
          }
          groupBy: {
            args: Prisma.spin_resultGroupByArgs<ExtArgs>
            result: $Utils.Optional<Spin_resultGroupByOutputType>[]
          }
          count: {
            args: Prisma.spin_resultCountArgs<ExtArgs>
            result: $Utils.Optional<Spin_resultCountAggregateOutputType> | number
          }
        }
      }
      vitamin: {
        payload: Prisma.$vitaminPayload<ExtArgs>
        fields: Prisma.vitaminFieldRefs
        operations: {
          findUnique: {
            args: Prisma.vitaminFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vitaminPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.vitaminFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vitaminPayload>
          }
          findFirst: {
            args: Prisma.vitaminFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vitaminPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.vitaminFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vitaminPayload>
          }
          findMany: {
            args: Prisma.vitaminFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vitaminPayload>[]
          }
          create: {
            args: Prisma.vitaminCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vitaminPayload>
          }
          createMany: {
            args: Prisma.vitaminCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.vitaminDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vitaminPayload>
          }
          update: {
            args: Prisma.vitaminUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vitaminPayload>
          }
          deleteMany: {
            args: Prisma.vitaminDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.vitaminUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.vitaminUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vitaminPayload>
          }
          aggregate: {
            args: Prisma.VitaminAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVitamin>
          }
          groupBy: {
            args: Prisma.vitaminGroupByArgs<ExtArgs>
            result: $Utils.Optional<VitaminGroupByOutputType>[]
          }
          count: {
            args: Prisma.vitaminCountArgs<ExtArgs>
            result: $Utils.Optional<VitaminCountAggregateOutputType> | number
          }
        }
      }
      allergy: {
        payload: Prisma.$allergyPayload<ExtArgs>
        fields: Prisma.allergyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.allergyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$allergyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.allergyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$allergyPayload>
          }
          findFirst: {
            args: Prisma.allergyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$allergyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.allergyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$allergyPayload>
          }
          findMany: {
            args: Prisma.allergyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$allergyPayload>[]
          }
          create: {
            args: Prisma.allergyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$allergyPayload>
          }
          createMany: {
            args: Prisma.allergyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.allergyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$allergyPayload>
          }
          update: {
            args: Prisma.allergyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$allergyPayload>
          }
          deleteMany: {
            args: Prisma.allergyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.allergyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.allergyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$allergyPayload>
          }
          aggregate: {
            args: Prisma.AllergyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAllergy>
          }
          groupBy: {
            args: Prisma.allergyGroupByArgs<ExtArgs>
            result: $Utils.Optional<AllergyGroupByOutputType>[]
          }
          count: {
            args: Prisma.allergyCountArgs<ExtArgs>
            result: $Utils.Optional<AllergyCountAggregateOutputType> | number
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
    menu?: menuOmit
    mukburim?: mukburimOmit
    menu_tag?: menu_tagOmit
    battle?: battleOmit
    battle_menu?: battle_menuOmit
    battle_participant?: battle_participantOmit
    menu_allery?: menu_alleryOmit
    menu_vitamin?: menu_vitaminOmit
    spin_result?: spin_resultOmit
    vitamin?: vitaminOmit
    allergy?: allergyOmit
    sessions?: sessionsOmit
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
   * Count Type MenuCountOutputType
   */

  export type MenuCountOutputType = {
    battle_menu: number
    menu_allery: number
    menu_tag: number
    menu_vitamin: number
    mukburim: number
    spin_result: number
  }

  export type MenuCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    battle_menu?: boolean | MenuCountOutputTypeCountBattle_menuArgs
    menu_allery?: boolean | MenuCountOutputTypeCountMenu_alleryArgs
    menu_tag?: boolean | MenuCountOutputTypeCountMenu_tagArgs
    menu_vitamin?: boolean | MenuCountOutputTypeCountMenu_vitaminArgs
    mukburim?: boolean | MenuCountOutputTypeCountMukburimArgs
    spin_result?: boolean | MenuCountOutputTypeCountSpin_resultArgs
  }

  // Custom InputTypes
  /**
   * MenuCountOutputType without action
   */
  export type MenuCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuCountOutputType
     */
    select?: MenuCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MenuCountOutputType without action
   */
  export type MenuCountOutputTypeCountBattle_menuArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: battle_menuWhereInput
  }

  /**
   * MenuCountOutputType without action
   */
  export type MenuCountOutputTypeCountMenu_alleryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: menu_alleryWhereInput
  }

  /**
   * MenuCountOutputType without action
   */
  export type MenuCountOutputTypeCountMenu_tagArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: menu_tagWhereInput
  }

  /**
   * MenuCountOutputType without action
   */
  export type MenuCountOutputTypeCountMenu_vitaminArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: menu_vitaminWhereInput
  }

  /**
   * MenuCountOutputType without action
   */
  export type MenuCountOutputTypeCountMukburimArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: mukburimWhereInput
  }

  /**
   * MenuCountOutputType without action
   */
  export type MenuCountOutputTypeCountSpin_resultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: spin_resultWhereInput
  }


  /**
   * Count Type BattleCountOutputType
   */

  export type BattleCountOutputType = {
    battle_menu: number
    battle_participant: number
    spin_result: number
  }

  export type BattleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    battle_menu?: boolean | BattleCountOutputTypeCountBattle_menuArgs
    battle_participant?: boolean | BattleCountOutputTypeCountBattle_participantArgs
    spin_result?: boolean | BattleCountOutputTypeCountSpin_resultArgs
  }

  // Custom InputTypes
  /**
   * BattleCountOutputType without action
   */
  export type BattleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BattleCountOutputType
     */
    select?: BattleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BattleCountOutputType without action
   */
  export type BattleCountOutputTypeCountBattle_menuArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: battle_menuWhereInput
  }

  /**
   * BattleCountOutputType without action
   */
  export type BattleCountOutputTypeCountBattle_participantArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: battle_participantWhereInput
  }

  /**
   * BattleCountOutputType without action
   */
  export type BattleCountOutputTypeCountSpin_resultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: spin_resultWhereInput
  }


  /**
   * Count Type VitaminCountOutputType
   */

  export type VitaminCountOutputType = {
    menu_vitamin: number
  }

  export type VitaminCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    menu_vitamin?: boolean | VitaminCountOutputTypeCountMenu_vitaminArgs
  }

  // Custom InputTypes
  /**
   * VitaminCountOutputType without action
   */
  export type VitaminCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VitaminCountOutputType
     */
    select?: VitaminCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VitaminCountOutputType without action
   */
  export type VitaminCountOutputTypeCountMenu_vitaminArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: menu_vitaminWhereInput
  }


  /**
   * Count Type AllergyCountOutputType
   */

  export type AllergyCountOutputType = {
    menu_allery: number
  }

  export type AllergyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    menu_allery?: boolean | AllergyCountOutputTypeCountMenu_alleryArgs
  }

  // Custom InputTypes
  /**
   * AllergyCountOutputType without action
   */
  export type AllergyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AllergyCountOutputType
     */
    select?: AllergyCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AllergyCountOutputType without action
   */
  export type AllergyCountOutputTypeCountMenu_alleryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: menu_alleryWhereInput
  }


  /**
   * Models
   */

  /**
   * Model menu
   */

  export type AggregateMenu = {
    _count: MenuCountAggregateOutputType | null
    _avg: MenuAvgAggregateOutputType | null
    _sum: MenuSumAggregateOutputType | null
    _min: MenuMinAggregateOutputType | null
    _max: MenuMaxAggregateOutputType | null
  }

  export type MenuAvgAggregateOutputType = {
    id: number | null
    calory: number | null
    carbo: number | null
    protein: number | null
    fat: number | null
    sodium: number | null
  }

  export type MenuSumAggregateOutputType = {
    id: bigint | null
    calory: bigint | null
    carbo: bigint | null
    protein: bigint | null
    fat: bigint | null
    sodium: bigint | null
  }

  export type MenuMinAggregateOutputType = {
    id: bigint | null
    name: string | null
    description: string | null
    calory: bigint | null
    carbo: bigint | null
    protein: bigint | null
    fat: bigint | null
    sodium: bigint | null
    image_link: string | null
  }

  export type MenuMaxAggregateOutputType = {
    id: bigint | null
    name: string | null
    description: string | null
    calory: bigint | null
    carbo: bigint | null
    protein: bigint | null
    fat: bigint | null
    sodium: bigint | null
    image_link: string | null
  }

  export type MenuCountAggregateOutputType = {
    id: number
    name: number
    description: number
    calory: number
    carbo: number
    protein: number
    fat: number
    sodium: number
    image_link: number
    _all: number
  }


  export type MenuAvgAggregateInputType = {
    id?: true
    calory?: true
    carbo?: true
    protein?: true
    fat?: true
    sodium?: true
  }

  export type MenuSumAggregateInputType = {
    id?: true
    calory?: true
    carbo?: true
    protein?: true
    fat?: true
    sodium?: true
  }

  export type MenuMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    calory?: true
    carbo?: true
    protein?: true
    fat?: true
    sodium?: true
    image_link?: true
  }

  export type MenuMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    calory?: true
    carbo?: true
    protein?: true
    fat?: true
    sodium?: true
    image_link?: true
  }

  export type MenuCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    calory?: true
    carbo?: true
    protein?: true
    fat?: true
    sodium?: true
    image_link?: true
    _all?: true
  }

  export type MenuAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which menu to aggregate.
     */
    where?: menuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of menus to fetch.
     */
    orderBy?: menuOrderByWithRelationInput | menuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: menuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` menus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` menus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned menus
    **/
    _count?: true | MenuCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MenuAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MenuSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MenuMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MenuMaxAggregateInputType
  }

  export type GetMenuAggregateType<T extends MenuAggregateArgs> = {
        [P in keyof T & keyof AggregateMenu]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMenu[P]>
      : GetScalarType<T[P], AggregateMenu[P]>
  }




  export type menuGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: menuWhereInput
    orderBy?: menuOrderByWithAggregationInput | menuOrderByWithAggregationInput[]
    by: MenuScalarFieldEnum[] | MenuScalarFieldEnum
    having?: menuScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MenuCountAggregateInputType | true
    _avg?: MenuAvgAggregateInputType
    _sum?: MenuSumAggregateInputType
    _min?: MenuMinAggregateInputType
    _max?: MenuMaxAggregateInputType
  }

  export type MenuGroupByOutputType = {
    id: bigint
    name: string
    description: string | null
    calory: bigint | null
    carbo: bigint | null
    protein: bigint | null
    fat: bigint | null
    sodium: bigint | null
    image_link: string | null
    _count: MenuCountAggregateOutputType | null
    _avg: MenuAvgAggregateOutputType | null
    _sum: MenuSumAggregateOutputType | null
    _min: MenuMinAggregateOutputType | null
    _max: MenuMaxAggregateOutputType | null
  }

  type GetMenuGroupByPayload<T extends menuGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MenuGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MenuGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MenuGroupByOutputType[P]>
            : GetScalarType<T[P], MenuGroupByOutputType[P]>
        }
      >
    >


  export type menuSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    calory?: boolean
    carbo?: boolean
    protein?: boolean
    fat?: boolean
    sodium?: boolean
    image_link?: boolean
    battle_menu?: boolean | menu$battle_menuArgs<ExtArgs>
    menu_allery?: boolean | menu$menu_alleryArgs<ExtArgs>
    menu_tag?: boolean | menu$menu_tagArgs<ExtArgs>
    menu_vitamin?: boolean | menu$menu_vitaminArgs<ExtArgs>
    mukburim?: boolean | menu$mukburimArgs<ExtArgs>
    spin_result?: boolean | menu$spin_resultArgs<ExtArgs>
    _count?: boolean | MenuCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["menu"]>



  export type menuSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    calory?: boolean
    carbo?: boolean
    protein?: boolean
    fat?: boolean
    sodium?: boolean
    image_link?: boolean
  }

  export type menuOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "calory" | "carbo" | "protein" | "fat" | "sodium" | "image_link", ExtArgs["result"]["menu"]>
  export type menuInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    battle_menu?: boolean | menu$battle_menuArgs<ExtArgs>
    menu_allery?: boolean | menu$menu_alleryArgs<ExtArgs>
    menu_tag?: boolean | menu$menu_tagArgs<ExtArgs>
    menu_vitamin?: boolean | menu$menu_vitaminArgs<ExtArgs>
    mukburim?: boolean | menu$mukburimArgs<ExtArgs>
    spin_result?: boolean | menu$spin_resultArgs<ExtArgs>
    _count?: boolean | MenuCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $menuPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "menu"
    objects: {
      battle_menu: Prisma.$battle_menuPayload<ExtArgs>[]
      menu_allery: Prisma.$menu_alleryPayload<ExtArgs>[]
      menu_tag: Prisma.$menu_tagPayload<ExtArgs>[]
      menu_vitamin: Prisma.$menu_vitaminPayload<ExtArgs>[]
      mukburim: Prisma.$mukburimPayload<ExtArgs>[]
      spin_result: Prisma.$spin_resultPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      name: string
      description: string | null
      calory: bigint | null
      carbo: bigint | null
      protein: bigint | null
      fat: bigint | null
      sodium: bigint | null
      image_link: string | null
    }, ExtArgs["result"]["menu"]>
    composites: {}
  }

  type menuGetPayload<S extends boolean | null | undefined | menuDefaultArgs> = $Result.GetResult<Prisma.$menuPayload, S>

  type menuCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<menuFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MenuCountAggregateInputType | true
    }

  export interface menuDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['menu'], meta: { name: 'menu' } }
    /**
     * Find zero or one Menu that matches the filter.
     * @param {menuFindUniqueArgs} args - Arguments to find a Menu
     * @example
     * // Get one Menu
     * const menu = await prisma.menu.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends menuFindUniqueArgs>(args: SelectSubset<T, menuFindUniqueArgs<ExtArgs>>): Prisma__menuClient<$Result.GetResult<Prisma.$menuPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Menu that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {menuFindUniqueOrThrowArgs} args - Arguments to find a Menu
     * @example
     * // Get one Menu
     * const menu = await prisma.menu.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends menuFindUniqueOrThrowArgs>(args: SelectSubset<T, menuFindUniqueOrThrowArgs<ExtArgs>>): Prisma__menuClient<$Result.GetResult<Prisma.$menuPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Menu that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {menuFindFirstArgs} args - Arguments to find a Menu
     * @example
     * // Get one Menu
     * const menu = await prisma.menu.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends menuFindFirstArgs>(args?: SelectSubset<T, menuFindFirstArgs<ExtArgs>>): Prisma__menuClient<$Result.GetResult<Prisma.$menuPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Menu that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {menuFindFirstOrThrowArgs} args - Arguments to find a Menu
     * @example
     * // Get one Menu
     * const menu = await prisma.menu.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends menuFindFirstOrThrowArgs>(args?: SelectSubset<T, menuFindFirstOrThrowArgs<ExtArgs>>): Prisma__menuClient<$Result.GetResult<Prisma.$menuPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Menus that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {menuFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Menus
     * const menus = await prisma.menu.findMany()
     * 
     * // Get first 10 Menus
     * const menus = await prisma.menu.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const menuWithIdOnly = await prisma.menu.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends menuFindManyArgs>(args?: SelectSubset<T, menuFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$menuPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Menu.
     * @param {menuCreateArgs} args - Arguments to create a Menu.
     * @example
     * // Create one Menu
     * const Menu = await prisma.menu.create({
     *   data: {
     *     // ... data to create a Menu
     *   }
     * })
     * 
     */
    create<T extends menuCreateArgs>(args: SelectSubset<T, menuCreateArgs<ExtArgs>>): Prisma__menuClient<$Result.GetResult<Prisma.$menuPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Menus.
     * @param {menuCreateManyArgs} args - Arguments to create many Menus.
     * @example
     * // Create many Menus
     * const menu = await prisma.menu.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends menuCreateManyArgs>(args?: SelectSubset<T, menuCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Menu.
     * @param {menuDeleteArgs} args - Arguments to delete one Menu.
     * @example
     * // Delete one Menu
     * const Menu = await prisma.menu.delete({
     *   where: {
     *     // ... filter to delete one Menu
     *   }
     * })
     * 
     */
    delete<T extends menuDeleteArgs>(args: SelectSubset<T, menuDeleteArgs<ExtArgs>>): Prisma__menuClient<$Result.GetResult<Prisma.$menuPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Menu.
     * @param {menuUpdateArgs} args - Arguments to update one Menu.
     * @example
     * // Update one Menu
     * const menu = await prisma.menu.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends menuUpdateArgs>(args: SelectSubset<T, menuUpdateArgs<ExtArgs>>): Prisma__menuClient<$Result.GetResult<Prisma.$menuPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Menus.
     * @param {menuDeleteManyArgs} args - Arguments to filter Menus to delete.
     * @example
     * // Delete a few Menus
     * const { count } = await prisma.menu.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends menuDeleteManyArgs>(args?: SelectSubset<T, menuDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Menus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {menuUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Menus
     * const menu = await prisma.menu.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends menuUpdateManyArgs>(args: SelectSubset<T, menuUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Menu.
     * @param {menuUpsertArgs} args - Arguments to update or create a Menu.
     * @example
     * // Update or create a Menu
     * const menu = await prisma.menu.upsert({
     *   create: {
     *     // ... data to create a Menu
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Menu we want to update
     *   }
     * })
     */
    upsert<T extends menuUpsertArgs>(args: SelectSubset<T, menuUpsertArgs<ExtArgs>>): Prisma__menuClient<$Result.GetResult<Prisma.$menuPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Menus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {menuCountArgs} args - Arguments to filter Menus to count.
     * @example
     * // Count the number of Menus
     * const count = await prisma.menu.count({
     *   where: {
     *     // ... the filter for the Menus we want to count
     *   }
     * })
    **/
    count<T extends menuCountArgs>(
      args?: Subset<T, menuCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MenuCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Menu.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MenuAggregateArgs>(args: Subset<T, MenuAggregateArgs>): Prisma.PrismaPromise<GetMenuAggregateType<T>>

    /**
     * Group by Menu.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {menuGroupByArgs} args - Group by arguments.
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
      T extends menuGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: menuGroupByArgs['orderBy'] }
        : { orderBy?: menuGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, menuGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMenuGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the menu model
   */
  readonly fields: menuFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for menu.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__menuClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    battle_menu<T extends menu$battle_menuArgs<ExtArgs> = {}>(args?: Subset<T, menu$battle_menuArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$battle_menuPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    menu_allery<T extends menu$menu_alleryArgs<ExtArgs> = {}>(args?: Subset<T, menu$menu_alleryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$menu_alleryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    menu_tag<T extends menu$menu_tagArgs<ExtArgs> = {}>(args?: Subset<T, menu$menu_tagArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$menu_tagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    menu_vitamin<T extends menu$menu_vitaminArgs<ExtArgs> = {}>(args?: Subset<T, menu$menu_vitaminArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$menu_vitaminPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    mukburim<T extends menu$mukburimArgs<ExtArgs> = {}>(args?: Subset<T, menu$mukburimArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$mukburimPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    spin_result<T extends menu$spin_resultArgs<ExtArgs> = {}>(args?: Subset<T, menu$spin_resultArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$spin_resultPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the menu model
   */
  interface menuFieldRefs {
    readonly id: FieldRef<"menu", 'BigInt'>
    readonly name: FieldRef<"menu", 'String'>
    readonly description: FieldRef<"menu", 'String'>
    readonly calory: FieldRef<"menu", 'BigInt'>
    readonly carbo: FieldRef<"menu", 'BigInt'>
    readonly protein: FieldRef<"menu", 'BigInt'>
    readonly fat: FieldRef<"menu", 'BigInt'>
    readonly sodium: FieldRef<"menu", 'BigInt'>
    readonly image_link: FieldRef<"menu", 'String'>
  }
    

  // Custom InputTypes
  /**
   * menu findUnique
   */
  export type menuFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the menu
     */
    select?: menuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the menu
     */
    omit?: menuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: menuInclude<ExtArgs> | null
    /**
     * Filter, which menu to fetch.
     */
    where: menuWhereUniqueInput
  }

  /**
   * menu findUniqueOrThrow
   */
  export type menuFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the menu
     */
    select?: menuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the menu
     */
    omit?: menuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: menuInclude<ExtArgs> | null
    /**
     * Filter, which menu to fetch.
     */
    where: menuWhereUniqueInput
  }

  /**
   * menu findFirst
   */
  export type menuFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the menu
     */
    select?: menuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the menu
     */
    omit?: menuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: menuInclude<ExtArgs> | null
    /**
     * Filter, which menu to fetch.
     */
    where?: menuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of menus to fetch.
     */
    orderBy?: menuOrderByWithRelationInput | menuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for menus.
     */
    cursor?: menuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` menus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` menus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of menus.
     */
    distinct?: MenuScalarFieldEnum | MenuScalarFieldEnum[]
  }

  /**
   * menu findFirstOrThrow
   */
  export type menuFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the menu
     */
    select?: menuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the menu
     */
    omit?: menuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: menuInclude<ExtArgs> | null
    /**
     * Filter, which menu to fetch.
     */
    where?: menuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of menus to fetch.
     */
    orderBy?: menuOrderByWithRelationInput | menuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for menus.
     */
    cursor?: menuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` menus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` menus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of menus.
     */
    distinct?: MenuScalarFieldEnum | MenuScalarFieldEnum[]
  }

  /**
   * menu findMany
   */
  export type menuFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the menu
     */
    select?: menuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the menu
     */
    omit?: menuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: menuInclude<ExtArgs> | null
    /**
     * Filter, which menus to fetch.
     */
    where?: menuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of menus to fetch.
     */
    orderBy?: menuOrderByWithRelationInput | menuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing menus.
     */
    cursor?: menuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` menus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` menus.
     */
    skip?: number
    distinct?: MenuScalarFieldEnum | MenuScalarFieldEnum[]
  }

  /**
   * menu create
   */
  export type menuCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the menu
     */
    select?: menuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the menu
     */
    omit?: menuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: menuInclude<ExtArgs> | null
    /**
     * The data needed to create a menu.
     */
    data: XOR<menuCreateInput, menuUncheckedCreateInput>
  }

  /**
   * menu createMany
   */
  export type menuCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many menus.
     */
    data: menuCreateManyInput | menuCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * menu update
   */
  export type menuUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the menu
     */
    select?: menuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the menu
     */
    omit?: menuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: menuInclude<ExtArgs> | null
    /**
     * The data needed to update a menu.
     */
    data: XOR<menuUpdateInput, menuUncheckedUpdateInput>
    /**
     * Choose, which menu to update.
     */
    where: menuWhereUniqueInput
  }

  /**
   * menu updateMany
   */
  export type menuUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update menus.
     */
    data: XOR<menuUpdateManyMutationInput, menuUncheckedUpdateManyInput>
    /**
     * Filter which menus to update
     */
    where?: menuWhereInput
    /**
     * Limit how many menus to update.
     */
    limit?: number
  }

  /**
   * menu upsert
   */
  export type menuUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the menu
     */
    select?: menuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the menu
     */
    omit?: menuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: menuInclude<ExtArgs> | null
    /**
     * The filter to search for the menu to update in case it exists.
     */
    where: menuWhereUniqueInput
    /**
     * In case the menu found by the `where` argument doesn't exist, create a new menu with this data.
     */
    create: XOR<menuCreateInput, menuUncheckedCreateInput>
    /**
     * In case the menu was found with the provided `where` argument, update it with this data.
     */
    update: XOR<menuUpdateInput, menuUncheckedUpdateInput>
  }

  /**
   * menu delete
   */
  export type menuDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the menu
     */
    select?: menuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the menu
     */
    omit?: menuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: menuInclude<ExtArgs> | null
    /**
     * Filter which menu to delete.
     */
    where: menuWhereUniqueInput
  }

  /**
   * menu deleteMany
   */
  export type menuDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which menus to delete
     */
    where?: menuWhereInput
    /**
     * Limit how many menus to delete.
     */
    limit?: number
  }

  /**
   * menu.battle_menu
   */
  export type menu$battle_menuArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the battle_menu
     */
    select?: battle_menuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the battle_menu
     */
    omit?: battle_menuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: battle_menuInclude<ExtArgs> | null
    where?: battle_menuWhereInput
    orderBy?: battle_menuOrderByWithRelationInput | battle_menuOrderByWithRelationInput[]
    cursor?: battle_menuWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Battle_menuScalarFieldEnum | Battle_menuScalarFieldEnum[]
  }

  /**
   * menu.menu_allery
   */
  export type menu$menu_alleryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the menu_allery
     */
    select?: menu_allerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the menu_allery
     */
    omit?: menu_alleryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: menu_alleryInclude<ExtArgs> | null
    where?: menu_alleryWhereInput
    orderBy?: menu_alleryOrderByWithRelationInput | menu_alleryOrderByWithRelationInput[]
    cursor?: menu_alleryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Menu_alleryScalarFieldEnum | Menu_alleryScalarFieldEnum[]
  }

  /**
   * menu.menu_tag
   */
  export type menu$menu_tagArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the menu_tag
     */
    select?: menu_tagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the menu_tag
     */
    omit?: menu_tagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: menu_tagInclude<ExtArgs> | null
    where?: menu_tagWhereInput
    orderBy?: menu_tagOrderByWithRelationInput | menu_tagOrderByWithRelationInput[]
    cursor?: menu_tagWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Menu_tagScalarFieldEnum | Menu_tagScalarFieldEnum[]
  }

  /**
   * menu.menu_vitamin
   */
  export type menu$menu_vitaminArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the menu_vitamin
     */
    select?: menu_vitaminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the menu_vitamin
     */
    omit?: menu_vitaminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: menu_vitaminInclude<ExtArgs> | null
    where?: menu_vitaminWhereInput
    orderBy?: menu_vitaminOrderByWithRelationInput | menu_vitaminOrderByWithRelationInput[]
    cursor?: menu_vitaminWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Menu_vitaminScalarFieldEnum | Menu_vitaminScalarFieldEnum[]
  }

  /**
   * menu.mukburim
   */
  export type menu$mukburimArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mukburim
     */
    select?: mukburimSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mukburim
     */
    omit?: mukburimOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mukburimInclude<ExtArgs> | null
    where?: mukburimWhereInput
    orderBy?: mukburimOrderByWithRelationInput | mukburimOrderByWithRelationInput[]
    cursor?: mukburimWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MukburimScalarFieldEnum | MukburimScalarFieldEnum[]
  }

  /**
   * menu.spin_result
   */
  export type menu$spin_resultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the spin_result
     */
    select?: spin_resultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the spin_result
     */
    omit?: spin_resultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: spin_resultInclude<ExtArgs> | null
    where?: spin_resultWhereInput
    orderBy?: spin_resultOrderByWithRelationInput | spin_resultOrderByWithRelationInput[]
    cursor?: spin_resultWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Spin_resultScalarFieldEnum | Spin_resultScalarFieldEnum[]
  }

  /**
   * menu without action
   */
  export type menuDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the menu
     */
    select?: menuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the menu
     */
    omit?: menuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: menuInclude<ExtArgs> | null
  }


  /**
   * Model mukburim
   */

  export type AggregateMukburim = {
    _count: MukburimCountAggregateOutputType | null
    _avg: MukburimAvgAggregateOutputType | null
    _sum: MukburimSumAggregateOutputType | null
    _min: MukburimMinAggregateOutputType | null
    _max: MukburimMaxAggregateOutputType | null
  }

  export type MukburimAvgAggregateOutputType = {
    id: number | null
    menu_id: number | null
    user_id: number | null
  }

  export type MukburimSumAggregateOutputType = {
    id: bigint | null
    menu_id: bigint | null
    user_id: bigint | null
  }

  export type MukburimMinAggregateOutputType = {
    id: bigint | null
    menu_id: bigint | null
    user_id: bigint | null
    date: Date | null
  }

  export type MukburimMaxAggregateOutputType = {
    id: bigint | null
    menu_id: bigint | null
    user_id: bigint | null
    date: Date | null
  }

  export type MukburimCountAggregateOutputType = {
    id: number
    menu_id: number
    user_id: number
    date: number
    _all: number
  }


  export type MukburimAvgAggregateInputType = {
    id?: true
    menu_id?: true
    user_id?: true
  }

  export type MukburimSumAggregateInputType = {
    id?: true
    menu_id?: true
    user_id?: true
  }

  export type MukburimMinAggregateInputType = {
    id?: true
    menu_id?: true
    user_id?: true
    date?: true
  }

  export type MukburimMaxAggregateInputType = {
    id?: true
    menu_id?: true
    user_id?: true
    date?: true
  }

  export type MukburimCountAggregateInputType = {
    id?: true
    menu_id?: true
    user_id?: true
    date?: true
    _all?: true
  }

  export type MukburimAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which mukburim to aggregate.
     */
    where?: mukburimWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mukburims to fetch.
     */
    orderBy?: mukburimOrderByWithRelationInput | mukburimOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: mukburimWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mukburims from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mukburims.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned mukburims
    **/
    _count?: true | MukburimCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MukburimAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MukburimSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MukburimMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MukburimMaxAggregateInputType
  }

  export type GetMukburimAggregateType<T extends MukburimAggregateArgs> = {
        [P in keyof T & keyof AggregateMukburim]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMukburim[P]>
      : GetScalarType<T[P], AggregateMukburim[P]>
  }




  export type mukburimGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: mukburimWhereInput
    orderBy?: mukburimOrderByWithAggregationInput | mukburimOrderByWithAggregationInput[]
    by: MukburimScalarFieldEnum[] | MukburimScalarFieldEnum
    having?: mukburimScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MukburimCountAggregateInputType | true
    _avg?: MukburimAvgAggregateInputType
    _sum?: MukburimSumAggregateInputType
    _min?: MukburimMinAggregateInputType
    _max?: MukburimMaxAggregateInputType
  }

  export type MukburimGroupByOutputType = {
    id: bigint
    menu_id: bigint
    user_id: bigint
    date: Date | null
    _count: MukburimCountAggregateOutputType | null
    _avg: MukburimAvgAggregateOutputType | null
    _sum: MukburimSumAggregateOutputType | null
    _min: MukburimMinAggregateOutputType | null
    _max: MukburimMaxAggregateOutputType | null
  }

  type GetMukburimGroupByPayload<T extends mukburimGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MukburimGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MukburimGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MukburimGroupByOutputType[P]>
            : GetScalarType<T[P], MukburimGroupByOutputType[P]>
        }
      >
    >


  export type mukburimSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    menu_id?: boolean
    user_id?: boolean
    date?: boolean
    menu?: boolean | menuDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mukburim"]>



  export type mukburimSelectScalar = {
    id?: boolean
    menu_id?: boolean
    user_id?: boolean
    date?: boolean
  }

  export type mukburimOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "menu_id" | "user_id" | "date", ExtArgs["result"]["mukburim"]>
  export type mukburimInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    menu?: boolean | menuDefaultArgs<ExtArgs>
  }

  export type $mukburimPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "mukburim"
    objects: {
      menu: Prisma.$menuPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      menu_id: bigint
      user_id: bigint
      date: Date | null
    }, ExtArgs["result"]["mukburim"]>
    composites: {}
  }

  type mukburimGetPayload<S extends boolean | null | undefined | mukburimDefaultArgs> = $Result.GetResult<Prisma.$mukburimPayload, S>

  type mukburimCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<mukburimFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MukburimCountAggregateInputType | true
    }

  export interface mukburimDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['mukburim'], meta: { name: 'mukburim' } }
    /**
     * Find zero or one Mukburim that matches the filter.
     * @param {mukburimFindUniqueArgs} args - Arguments to find a Mukburim
     * @example
     * // Get one Mukburim
     * const mukburim = await prisma.mukburim.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends mukburimFindUniqueArgs>(args: SelectSubset<T, mukburimFindUniqueArgs<ExtArgs>>): Prisma__mukburimClient<$Result.GetResult<Prisma.$mukburimPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Mukburim that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {mukburimFindUniqueOrThrowArgs} args - Arguments to find a Mukburim
     * @example
     * // Get one Mukburim
     * const mukburim = await prisma.mukburim.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends mukburimFindUniqueOrThrowArgs>(args: SelectSubset<T, mukburimFindUniqueOrThrowArgs<ExtArgs>>): Prisma__mukburimClient<$Result.GetResult<Prisma.$mukburimPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Mukburim that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mukburimFindFirstArgs} args - Arguments to find a Mukburim
     * @example
     * // Get one Mukburim
     * const mukburim = await prisma.mukburim.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends mukburimFindFirstArgs>(args?: SelectSubset<T, mukburimFindFirstArgs<ExtArgs>>): Prisma__mukburimClient<$Result.GetResult<Prisma.$mukburimPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Mukburim that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mukburimFindFirstOrThrowArgs} args - Arguments to find a Mukburim
     * @example
     * // Get one Mukburim
     * const mukburim = await prisma.mukburim.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends mukburimFindFirstOrThrowArgs>(args?: SelectSubset<T, mukburimFindFirstOrThrowArgs<ExtArgs>>): Prisma__mukburimClient<$Result.GetResult<Prisma.$mukburimPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Mukburims that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mukburimFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Mukburims
     * const mukburims = await prisma.mukburim.findMany()
     * 
     * // Get first 10 Mukburims
     * const mukburims = await prisma.mukburim.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mukburimWithIdOnly = await prisma.mukburim.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends mukburimFindManyArgs>(args?: SelectSubset<T, mukburimFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$mukburimPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Mukburim.
     * @param {mukburimCreateArgs} args - Arguments to create a Mukburim.
     * @example
     * // Create one Mukburim
     * const Mukburim = await prisma.mukburim.create({
     *   data: {
     *     // ... data to create a Mukburim
     *   }
     * })
     * 
     */
    create<T extends mukburimCreateArgs>(args: SelectSubset<T, mukburimCreateArgs<ExtArgs>>): Prisma__mukburimClient<$Result.GetResult<Prisma.$mukburimPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Mukburims.
     * @param {mukburimCreateManyArgs} args - Arguments to create many Mukburims.
     * @example
     * // Create many Mukburims
     * const mukburim = await prisma.mukburim.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends mukburimCreateManyArgs>(args?: SelectSubset<T, mukburimCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Mukburim.
     * @param {mukburimDeleteArgs} args - Arguments to delete one Mukburim.
     * @example
     * // Delete one Mukburim
     * const Mukburim = await prisma.mukburim.delete({
     *   where: {
     *     // ... filter to delete one Mukburim
     *   }
     * })
     * 
     */
    delete<T extends mukburimDeleteArgs>(args: SelectSubset<T, mukburimDeleteArgs<ExtArgs>>): Prisma__mukburimClient<$Result.GetResult<Prisma.$mukburimPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Mukburim.
     * @param {mukburimUpdateArgs} args - Arguments to update one Mukburim.
     * @example
     * // Update one Mukburim
     * const mukburim = await prisma.mukburim.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends mukburimUpdateArgs>(args: SelectSubset<T, mukburimUpdateArgs<ExtArgs>>): Prisma__mukburimClient<$Result.GetResult<Prisma.$mukburimPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Mukburims.
     * @param {mukburimDeleteManyArgs} args - Arguments to filter Mukburims to delete.
     * @example
     * // Delete a few Mukburims
     * const { count } = await prisma.mukburim.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends mukburimDeleteManyArgs>(args?: SelectSubset<T, mukburimDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Mukburims.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mukburimUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Mukburims
     * const mukburim = await prisma.mukburim.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends mukburimUpdateManyArgs>(args: SelectSubset<T, mukburimUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Mukburim.
     * @param {mukburimUpsertArgs} args - Arguments to update or create a Mukburim.
     * @example
     * // Update or create a Mukburim
     * const mukburim = await prisma.mukburim.upsert({
     *   create: {
     *     // ... data to create a Mukburim
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Mukburim we want to update
     *   }
     * })
     */
    upsert<T extends mukburimUpsertArgs>(args: SelectSubset<T, mukburimUpsertArgs<ExtArgs>>): Prisma__mukburimClient<$Result.GetResult<Prisma.$mukburimPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Mukburims.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mukburimCountArgs} args - Arguments to filter Mukburims to count.
     * @example
     * // Count the number of Mukburims
     * const count = await prisma.mukburim.count({
     *   where: {
     *     // ... the filter for the Mukburims we want to count
     *   }
     * })
    **/
    count<T extends mukburimCountArgs>(
      args?: Subset<T, mukburimCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MukburimCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Mukburim.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MukburimAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MukburimAggregateArgs>(args: Subset<T, MukburimAggregateArgs>): Prisma.PrismaPromise<GetMukburimAggregateType<T>>

    /**
     * Group by Mukburim.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mukburimGroupByArgs} args - Group by arguments.
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
      T extends mukburimGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: mukburimGroupByArgs['orderBy'] }
        : { orderBy?: mukburimGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, mukburimGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMukburimGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the mukburim model
   */
  readonly fields: mukburimFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for mukburim.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__mukburimClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    menu<T extends menuDefaultArgs<ExtArgs> = {}>(args?: Subset<T, menuDefaultArgs<ExtArgs>>): Prisma__menuClient<$Result.GetResult<Prisma.$menuPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the mukburim model
   */
  interface mukburimFieldRefs {
    readonly id: FieldRef<"mukburim", 'BigInt'>
    readonly menu_id: FieldRef<"mukburim", 'BigInt'>
    readonly user_id: FieldRef<"mukburim", 'BigInt'>
    readonly date: FieldRef<"mukburim", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * mukburim findUnique
   */
  export type mukburimFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mukburim
     */
    select?: mukburimSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mukburim
     */
    omit?: mukburimOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mukburimInclude<ExtArgs> | null
    /**
     * Filter, which mukburim to fetch.
     */
    where: mukburimWhereUniqueInput
  }

  /**
   * mukburim findUniqueOrThrow
   */
  export type mukburimFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mukburim
     */
    select?: mukburimSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mukburim
     */
    omit?: mukburimOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mukburimInclude<ExtArgs> | null
    /**
     * Filter, which mukburim to fetch.
     */
    where: mukburimWhereUniqueInput
  }

  /**
   * mukburim findFirst
   */
  export type mukburimFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mukburim
     */
    select?: mukburimSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mukburim
     */
    omit?: mukburimOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mukburimInclude<ExtArgs> | null
    /**
     * Filter, which mukburim to fetch.
     */
    where?: mukburimWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mukburims to fetch.
     */
    orderBy?: mukburimOrderByWithRelationInput | mukburimOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for mukburims.
     */
    cursor?: mukburimWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mukburims from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mukburims.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of mukburims.
     */
    distinct?: MukburimScalarFieldEnum | MukburimScalarFieldEnum[]
  }

  /**
   * mukburim findFirstOrThrow
   */
  export type mukburimFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mukburim
     */
    select?: mukburimSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mukburim
     */
    omit?: mukburimOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mukburimInclude<ExtArgs> | null
    /**
     * Filter, which mukburim to fetch.
     */
    where?: mukburimWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mukburims to fetch.
     */
    orderBy?: mukburimOrderByWithRelationInput | mukburimOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for mukburims.
     */
    cursor?: mukburimWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mukburims from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mukburims.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of mukburims.
     */
    distinct?: MukburimScalarFieldEnum | MukburimScalarFieldEnum[]
  }

  /**
   * mukburim findMany
   */
  export type mukburimFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mukburim
     */
    select?: mukburimSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mukburim
     */
    omit?: mukburimOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mukburimInclude<ExtArgs> | null
    /**
     * Filter, which mukburims to fetch.
     */
    where?: mukburimWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mukburims to fetch.
     */
    orderBy?: mukburimOrderByWithRelationInput | mukburimOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing mukburims.
     */
    cursor?: mukburimWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mukburims from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mukburims.
     */
    skip?: number
    distinct?: MukburimScalarFieldEnum | MukburimScalarFieldEnum[]
  }

  /**
   * mukburim create
   */
  export type mukburimCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mukburim
     */
    select?: mukburimSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mukburim
     */
    omit?: mukburimOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mukburimInclude<ExtArgs> | null
    /**
     * The data needed to create a mukburim.
     */
    data: XOR<mukburimCreateInput, mukburimUncheckedCreateInput>
  }

  /**
   * mukburim createMany
   */
  export type mukburimCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many mukburims.
     */
    data: mukburimCreateManyInput | mukburimCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * mukburim update
   */
  export type mukburimUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mukburim
     */
    select?: mukburimSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mukburim
     */
    omit?: mukburimOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mukburimInclude<ExtArgs> | null
    /**
     * The data needed to update a mukburim.
     */
    data: XOR<mukburimUpdateInput, mukburimUncheckedUpdateInput>
    /**
     * Choose, which mukburim to update.
     */
    where: mukburimWhereUniqueInput
  }

  /**
   * mukburim updateMany
   */
  export type mukburimUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update mukburims.
     */
    data: XOR<mukburimUpdateManyMutationInput, mukburimUncheckedUpdateManyInput>
    /**
     * Filter which mukburims to update
     */
    where?: mukburimWhereInput
    /**
     * Limit how many mukburims to update.
     */
    limit?: number
  }

  /**
   * mukburim upsert
   */
  export type mukburimUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mukburim
     */
    select?: mukburimSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mukburim
     */
    omit?: mukburimOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mukburimInclude<ExtArgs> | null
    /**
     * The filter to search for the mukburim to update in case it exists.
     */
    where: mukburimWhereUniqueInput
    /**
     * In case the mukburim found by the `where` argument doesn't exist, create a new mukburim with this data.
     */
    create: XOR<mukburimCreateInput, mukburimUncheckedCreateInput>
    /**
     * In case the mukburim was found with the provided `where` argument, update it with this data.
     */
    update: XOR<mukburimUpdateInput, mukburimUncheckedUpdateInput>
  }

  /**
   * mukburim delete
   */
  export type mukburimDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mukburim
     */
    select?: mukburimSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mukburim
     */
    omit?: mukburimOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mukburimInclude<ExtArgs> | null
    /**
     * Filter which mukburim to delete.
     */
    where: mukburimWhereUniqueInput
  }

  /**
   * mukburim deleteMany
   */
  export type mukburimDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which mukburims to delete
     */
    where?: mukburimWhereInput
    /**
     * Limit how many mukburims to delete.
     */
    limit?: number
  }

  /**
   * mukburim without action
   */
  export type mukburimDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mukburim
     */
    select?: mukburimSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mukburim
     */
    omit?: mukburimOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mukburimInclude<ExtArgs> | null
  }


  /**
   * Model menu_tag
   */

  export type AggregateMenu_tag = {
    _count: Menu_tagCountAggregateOutputType | null
    _avg: Menu_tagAvgAggregateOutputType | null
    _sum: Menu_tagSumAggregateOutputType | null
    _min: Menu_tagMinAggregateOutputType | null
    _max: Menu_tagMaxAggregateOutputType | null
  }

  export type Menu_tagAvgAggregateOutputType = {
    id: number | null
    menu_id: number | null
  }

  export type Menu_tagSumAggregateOutputType = {
    id: bigint | null
    menu_id: bigint | null
  }

  export type Menu_tagMinAggregateOutputType = {
    id: bigint | null
    menu_id: bigint | null
    tag: string | null
  }

  export type Menu_tagMaxAggregateOutputType = {
    id: bigint | null
    menu_id: bigint | null
    tag: string | null
  }

  export type Menu_tagCountAggregateOutputType = {
    id: number
    menu_id: number
    tag: number
    _all: number
  }


  export type Menu_tagAvgAggregateInputType = {
    id?: true
    menu_id?: true
  }

  export type Menu_tagSumAggregateInputType = {
    id?: true
    menu_id?: true
  }

  export type Menu_tagMinAggregateInputType = {
    id?: true
    menu_id?: true
    tag?: true
  }

  export type Menu_tagMaxAggregateInputType = {
    id?: true
    menu_id?: true
    tag?: true
  }

  export type Menu_tagCountAggregateInputType = {
    id?: true
    menu_id?: true
    tag?: true
    _all?: true
  }

  export type Menu_tagAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which menu_tag to aggregate.
     */
    where?: menu_tagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of menu_tags to fetch.
     */
    orderBy?: menu_tagOrderByWithRelationInput | menu_tagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: menu_tagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` menu_tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` menu_tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned menu_tags
    **/
    _count?: true | Menu_tagCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Menu_tagAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Menu_tagSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Menu_tagMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Menu_tagMaxAggregateInputType
  }

  export type GetMenu_tagAggregateType<T extends Menu_tagAggregateArgs> = {
        [P in keyof T & keyof AggregateMenu_tag]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMenu_tag[P]>
      : GetScalarType<T[P], AggregateMenu_tag[P]>
  }




  export type menu_tagGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: menu_tagWhereInput
    orderBy?: menu_tagOrderByWithAggregationInput | menu_tagOrderByWithAggregationInput[]
    by: Menu_tagScalarFieldEnum[] | Menu_tagScalarFieldEnum
    having?: menu_tagScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Menu_tagCountAggregateInputType | true
    _avg?: Menu_tagAvgAggregateInputType
    _sum?: Menu_tagSumAggregateInputType
    _min?: Menu_tagMinAggregateInputType
    _max?: Menu_tagMaxAggregateInputType
  }

  export type Menu_tagGroupByOutputType = {
    id: bigint
    menu_id: bigint
    tag: string | null
    _count: Menu_tagCountAggregateOutputType | null
    _avg: Menu_tagAvgAggregateOutputType | null
    _sum: Menu_tagSumAggregateOutputType | null
    _min: Menu_tagMinAggregateOutputType | null
    _max: Menu_tagMaxAggregateOutputType | null
  }

  type GetMenu_tagGroupByPayload<T extends menu_tagGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Menu_tagGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Menu_tagGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Menu_tagGroupByOutputType[P]>
            : GetScalarType<T[P], Menu_tagGroupByOutputType[P]>
        }
      >
    >


  export type menu_tagSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    menu_id?: boolean
    tag?: boolean
    menu?: boolean | menuDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["menu_tag"]>



  export type menu_tagSelectScalar = {
    id?: boolean
    menu_id?: boolean
    tag?: boolean
  }

  export type menu_tagOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "menu_id" | "tag", ExtArgs["result"]["menu_tag"]>
  export type menu_tagInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    menu?: boolean | menuDefaultArgs<ExtArgs>
  }

  export type $menu_tagPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "menu_tag"
    objects: {
      menu: Prisma.$menuPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      menu_id: bigint
      tag: string | null
    }, ExtArgs["result"]["menu_tag"]>
    composites: {}
  }

  type menu_tagGetPayload<S extends boolean | null | undefined | menu_tagDefaultArgs> = $Result.GetResult<Prisma.$menu_tagPayload, S>

  type menu_tagCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<menu_tagFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Menu_tagCountAggregateInputType | true
    }

  export interface menu_tagDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['menu_tag'], meta: { name: 'menu_tag' } }
    /**
     * Find zero or one Menu_tag that matches the filter.
     * @param {menu_tagFindUniqueArgs} args - Arguments to find a Menu_tag
     * @example
     * // Get one Menu_tag
     * const menu_tag = await prisma.menu_tag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends menu_tagFindUniqueArgs>(args: SelectSubset<T, menu_tagFindUniqueArgs<ExtArgs>>): Prisma__menu_tagClient<$Result.GetResult<Prisma.$menu_tagPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Menu_tag that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {menu_tagFindUniqueOrThrowArgs} args - Arguments to find a Menu_tag
     * @example
     * // Get one Menu_tag
     * const menu_tag = await prisma.menu_tag.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends menu_tagFindUniqueOrThrowArgs>(args: SelectSubset<T, menu_tagFindUniqueOrThrowArgs<ExtArgs>>): Prisma__menu_tagClient<$Result.GetResult<Prisma.$menu_tagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Menu_tag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {menu_tagFindFirstArgs} args - Arguments to find a Menu_tag
     * @example
     * // Get one Menu_tag
     * const menu_tag = await prisma.menu_tag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends menu_tagFindFirstArgs>(args?: SelectSubset<T, menu_tagFindFirstArgs<ExtArgs>>): Prisma__menu_tagClient<$Result.GetResult<Prisma.$menu_tagPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Menu_tag that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {menu_tagFindFirstOrThrowArgs} args - Arguments to find a Menu_tag
     * @example
     * // Get one Menu_tag
     * const menu_tag = await prisma.menu_tag.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends menu_tagFindFirstOrThrowArgs>(args?: SelectSubset<T, menu_tagFindFirstOrThrowArgs<ExtArgs>>): Prisma__menu_tagClient<$Result.GetResult<Prisma.$menu_tagPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Menu_tags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {menu_tagFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Menu_tags
     * const menu_tags = await prisma.menu_tag.findMany()
     * 
     * // Get first 10 Menu_tags
     * const menu_tags = await prisma.menu_tag.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const menu_tagWithIdOnly = await prisma.menu_tag.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends menu_tagFindManyArgs>(args?: SelectSubset<T, menu_tagFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$menu_tagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Menu_tag.
     * @param {menu_tagCreateArgs} args - Arguments to create a Menu_tag.
     * @example
     * // Create one Menu_tag
     * const Menu_tag = await prisma.menu_tag.create({
     *   data: {
     *     // ... data to create a Menu_tag
     *   }
     * })
     * 
     */
    create<T extends menu_tagCreateArgs>(args: SelectSubset<T, menu_tagCreateArgs<ExtArgs>>): Prisma__menu_tagClient<$Result.GetResult<Prisma.$menu_tagPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Menu_tags.
     * @param {menu_tagCreateManyArgs} args - Arguments to create many Menu_tags.
     * @example
     * // Create many Menu_tags
     * const menu_tag = await prisma.menu_tag.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends menu_tagCreateManyArgs>(args?: SelectSubset<T, menu_tagCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Menu_tag.
     * @param {menu_tagDeleteArgs} args - Arguments to delete one Menu_tag.
     * @example
     * // Delete one Menu_tag
     * const Menu_tag = await prisma.menu_tag.delete({
     *   where: {
     *     // ... filter to delete one Menu_tag
     *   }
     * })
     * 
     */
    delete<T extends menu_tagDeleteArgs>(args: SelectSubset<T, menu_tagDeleteArgs<ExtArgs>>): Prisma__menu_tagClient<$Result.GetResult<Prisma.$menu_tagPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Menu_tag.
     * @param {menu_tagUpdateArgs} args - Arguments to update one Menu_tag.
     * @example
     * // Update one Menu_tag
     * const menu_tag = await prisma.menu_tag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends menu_tagUpdateArgs>(args: SelectSubset<T, menu_tagUpdateArgs<ExtArgs>>): Prisma__menu_tagClient<$Result.GetResult<Prisma.$menu_tagPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Menu_tags.
     * @param {menu_tagDeleteManyArgs} args - Arguments to filter Menu_tags to delete.
     * @example
     * // Delete a few Menu_tags
     * const { count } = await prisma.menu_tag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends menu_tagDeleteManyArgs>(args?: SelectSubset<T, menu_tagDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Menu_tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {menu_tagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Menu_tags
     * const menu_tag = await prisma.menu_tag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends menu_tagUpdateManyArgs>(args: SelectSubset<T, menu_tagUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Menu_tag.
     * @param {menu_tagUpsertArgs} args - Arguments to update or create a Menu_tag.
     * @example
     * // Update or create a Menu_tag
     * const menu_tag = await prisma.menu_tag.upsert({
     *   create: {
     *     // ... data to create a Menu_tag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Menu_tag we want to update
     *   }
     * })
     */
    upsert<T extends menu_tagUpsertArgs>(args: SelectSubset<T, menu_tagUpsertArgs<ExtArgs>>): Prisma__menu_tagClient<$Result.GetResult<Prisma.$menu_tagPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Menu_tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {menu_tagCountArgs} args - Arguments to filter Menu_tags to count.
     * @example
     * // Count the number of Menu_tags
     * const count = await prisma.menu_tag.count({
     *   where: {
     *     // ... the filter for the Menu_tags we want to count
     *   }
     * })
    **/
    count<T extends menu_tagCountArgs>(
      args?: Subset<T, menu_tagCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Menu_tagCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Menu_tag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Menu_tagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Menu_tagAggregateArgs>(args: Subset<T, Menu_tagAggregateArgs>): Prisma.PrismaPromise<GetMenu_tagAggregateType<T>>

    /**
     * Group by Menu_tag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {menu_tagGroupByArgs} args - Group by arguments.
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
      T extends menu_tagGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: menu_tagGroupByArgs['orderBy'] }
        : { orderBy?: menu_tagGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, menu_tagGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMenu_tagGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the menu_tag model
   */
  readonly fields: menu_tagFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for menu_tag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__menu_tagClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    menu<T extends menuDefaultArgs<ExtArgs> = {}>(args?: Subset<T, menuDefaultArgs<ExtArgs>>): Prisma__menuClient<$Result.GetResult<Prisma.$menuPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the menu_tag model
   */
  interface menu_tagFieldRefs {
    readonly id: FieldRef<"menu_tag", 'BigInt'>
    readonly menu_id: FieldRef<"menu_tag", 'BigInt'>
    readonly tag: FieldRef<"menu_tag", 'String'>
  }
    

  // Custom InputTypes
  /**
   * menu_tag findUnique
   */
  export type menu_tagFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the menu_tag
     */
    select?: menu_tagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the menu_tag
     */
    omit?: menu_tagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: menu_tagInclude<ExtArgs> | null
    /**
     * Filter, which menu_tag to fetch.
     */
    where: menu_tagWhereUniqueInput
  }

  /**
   * menu_tag findUniqueOrThrow
   */
  export type menu_tagFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the menu_tag
     */
    select?: menu_tagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the menu_tag
     */
    omit?: menu_tagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: menu_tagInclude<ExtArgs> | null
    /**
     * Filter, which menu_tag to fetch.
     */
    where: menu_tagWhereUniqueInput
  }

  /**
   * menu_tag findFirst
   */
  export type menu_tagFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the menu_tag
     */
    select?: menu_tagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the menu_tag
     */
    omit?: menu_tagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: menu_tagInclude<ExtArgs> | null
    /**
     * Filter, which menu_tag to fetch.
     */
    where?: menu_tagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of menu_tags to fetch.
     */
    orderBy?: menu_tagOrderByWithRelationInput | menu_tagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for menu_tags.
     */
    cursor?: menu_tagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` menu_tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` menu_tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of menu_tags.
     */
    distinct?: Menu_tagScalarFieldEnum | Menu_tagScalarFieldEnum[]
  }

  /**
   * menu_tag findFirstOrThrow
   */
  export type menu_tagFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the menu_tag
     */
    select?: menu_tagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the menu_tag
     */
    omit?: menu_tagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: menu_tagInclude<ExtArgs> | null
    /**
     * Filter, which menu_tag to fetch.
     */
    where?: menu_tagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of menu_tags to fetch.
     */
    orderBy?: menu_tagOrderByWithRelationInput | menu_tagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for menu_tags.
     */
    cursor?: menu_tagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` menu_tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` menu_tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of menu_tags.
     */
    distinct?: Menu_tagScalarFieldEnum | Menu_tagScalarFieldEnum[]
  }

  /**
   * menu_tag findMany
   */
  export type menu_tagFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the menu_tag
     */
    select?: menu_tagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the menu_tag
     */
    omit?: menu_tagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: menu_tagInclude<ExtArgs> | null
    /**
     * Filter, which menu_tags to fetch.
     */
    where?: menu_tagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of menu_tags to fetch.
     */
    orderBy?: menu_tagOrderByWithRelationInput | menu_tagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing menu_tags.
     */
    cursor?: menu_tagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` menu_tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` menu_tags.
     */
    skip?: number
    distinct?: Menu_tagScalarFieldEnum | Menu_tagScalarFieldEnum[]
  }

  /**
   * menu_tag create
   */
  export type menu_tagCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the menu_tag
     */
    select?: menu_tagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the menu_tag
     */
    omit?: menu_tagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: menu_tagInclude<ExtArgs> | null
    /**
     * The data needed to create a menu_tag.
     */
    data: XOR<menu_tagCreateInput, menu_tagUncheckedCreateInput>
  }

  /**
   * menu_tag createMany
   */
  export type menu_tagCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many menu_tags.
     */
    data: menu_tagCreateManyInput | menu_tagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * menu_tag update
   */
  export type menu_tagUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the menu_tag
     */
    select?: menu_tagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the menu_tag
     */
    omit?: menu_tagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: menu_tagInclude<ExtArgs> | null
    /**
     * The data needed to update a menu_tag.
     */
    data: XOR<menu_tagUpdateInput, menu_tagUncheckedUpdateInput>
    /**
     * Choose, which menu_tag to update.
     */
    where: menu_tagWhereUniqueInput
  }

  /**
   * menu_tag updateMany
   */
  export type menu_tagUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update menu_tags.
     */
    data: XOR<menu_tagUpdateManyMutationInput, menu_tagUncheckedUpdateManyInput>
    /**
     * Filter which menu_tags to update
     */
    where?: menu_tagWhereInput
    /**
     * Limit how many menu_tags to update.
     */
    limit?: number
  }

  /**
   * menu_tag upsert
   */
  export type menu_tagUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the menu_tag
     */
    select?: menu_tagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the menu_tag
     */
    omit?: menu_tagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: menu_tagInclude<ExtArgs> | null
    /**
     * The filter to search for the menu_tag to update in case it exists.
     */
    where: menu_tagWhereUniqueInput
    /**
     * In case the menu_tag found by the `where` argument doesn't exist, create a new menu_tag with this data.
     */
    create: XOR<menu_tagCreateInput, menu_tagUncheckedCreateInput>
    /**
     * In case the menu_tag was found with the provided `where` argument, update it with this data.
     */
    update: XOR<menu_tagUpdateInput, menu_tagUncheckedUpdateInput>
  }

  /**
   * menu_tag delete
   */
  export type menu_tagDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the menu_tag
     */
    select?: menu_tagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the menu_tag
     */
    omit?: menu_tagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: menu_tagInclude<ExtArgs> | null
    /**
     * Filter which menu_tag to delete.
     */
    where: menu_tagWhereUniqueInput
  }

  /**
   * menu_tag deleteMany
   */
  export type menu_tagDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which menu_tags to delete
     */
    where?: menu_tagWhereInput
    /**
     * Limit how many menu_tags to delete.
     */
    limit?: number
  }

  /**
   * menu_tag without action
   */
  export type menu_tagDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the menu_tag
     */
    select?: menu_tagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the menu_tag
     */
    omit?: menu_tagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: menu_tagInclude<ExtArgs> | null
  }


  /**
   * Model battle
   */

  export type AggregateBattle = {
    _count: BattleCountAggregateOutputType | null
    _avg: BattleAvgAggregateOutputType | null
    _sum: BattleSumAggregateOutputType | null
    _min: BattleMinAggregateOutputType | null
    _max: BattleMaxAggregateOutputType | null
  }

  export type BattleAvgAggregateOutputType = {
    participant_count: number | null
  }

  export type BattleSumAggregateOutputType = {
    participant_count: number | null
  }

  export type BattleMinAggregateOutputType = {
    id: string | null
    creater_nickname: string | null
    status: string | null
    participant_count: number | null
    created_at: Date | null
    finished_at: Date | null
    expires_at: Date | null
  }

  export type BattleMaxAggregateOutputType = {
    id: string | null
    creater_nickname: string | null
    status: string | null
    participant_count: number | null
    created_at: Date | null
    finished_at: Date | null
    expires_at: Date | null
  }

  export type BattleCountAggregateOutputType = {
    id: number
    creater_nickname: number
    status: number
    participant_count: number
    created_at: number
    finished_at: number
    expires_at: number
    _all: number
  }


  export type BattleAvgAggregateInputType = {
    participant_count?: true
  }

  export type BattleSumAggregateInputType = {
    participant_count?: true
  }

  export type BattleMinAggregateInputType = {
    id?: true
    creater_nickname?: true
    status?: true
    participant_count?: true
    created_at?: true
    finished_at?: true
    expires_at?: true
  }

  export type BattleMaxAggregateInputType = {
    id?: true
    creater_nickname?: true
    status?: true
    participant_count?: true
    created_at?: true
    finished_at?: true
    expires_at?: true
  }

  export type BattleCountAggregateInputType = {
    id?: true
    creater_nickname?: true
    status?: true
    participant_count?: true
    created_at?: true
    finished_at?: true
    expires_at?: true
    _all?: true
  }

  export type BattleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which battle to aggregate.
     */
    where?: battleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of battles to fetch.
     */
    orderBy?: battleOrderByWithRelationInput | battleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: battleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` battles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` battles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned battles
    **/
    _count?: true | BattleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BattleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BattleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BattleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BattleMaxAggregateInputType
  }

  export type GetBattleAggregateType<T extends BattleAggregateArgs> = {
        [P in keyof T & keyof AggregateBattle]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBattle[P]>
      : GetScalarType<T[P], AggregateBattle[P]>
  }




  export type battleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: battleWhereInput
    orderBy?: battleOrderByWithAggregationInput | battleOrderByWithAggregationInput[]
    by: BattleScalarFieldEnum[] | BattleScalarFieldEnum
    having?: battleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BattleCountAggregateInputType | true
    _avg?: BattleAvgAggregateInputType
    _sum?: BattleSumAggregateInputType
    _min?: BattleMinAggregateInputType
    _max?: BattleMaxAggregateInputType
  }

  export type BattleGroupByOutputType = {
    id: string
    creater_nickname: string | null
    status: string | null
    participant_count: number | null
    created_at: Date | null
    finished_at: Date | null
    expires_at: Date | null
    _count: BattleCountAggregateOutputType | null
    _avg: BattleAvgAggregateOutputType | null
    _sum: BattleSumAggregateOutputType | null
    _min: BattleMinAggregateOutputType | null
    _max: BattleMaxAggregateOutputType | null
  }

  type GetBattleGroupByPayload<T extends battleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BattleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BattleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BattleGroupByOutputType[P]>
            : GetScalarType<T[P], BattleGroupByOutputType[P]>
        }
      >
    >


  export type battleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    creater_nickname?: boolean
    status?: boolean
    participant_count?: boolean
    created_at?: boolean
    finished_at?: boolean
    expires_at?: boolean
    battle_menu?: boolean | battle$battle_menuArgs<ExtArgs>
    battle_participant?: boolean | battle$battle_participantArgs<ExtArgs>
    spin_result?: boolean | battle$spin_resultArgs<ExtArgs>
    _count?: boolean | BattleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["battle"]>



  export type battleSelectScalar = {
    id?: boolean
    creater_nickname?: boolean
    status?: boolean
    participant_count?: boolean
    created_at?: boolean
    finished_at?: boolean
    expires_at?: boolean
  }

  export type battleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "creater_nickname" | "status" | "participant_count" | "created_at" | "finished_at" | "expires_at", ExtArgs["result"]["battle"]>
  export type battleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    battle_menu?: boolean | battle$battle_menuArgs<ExtArgs>
    battle_participant?: boolean | battle$battle_participantArgs<ExtArgs>
    spin_result?: boolean | battle$spin_resultArgs<ExtArgs>
    _count?: boolean | BattleCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $battlePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "battle"
    objects: {
      battle_menu: Prisma.$battle_menuPayload<ExtArgs>[]
      battle_participant: Prisma.$battle_participantPayload<ExtArgs>[]
      spin_result: Prisma.$spin_resultPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      creater_nickname: string | null
      status: string | null
      participant_count: number | null
      created_at: Date | null
      finished_at: Date | null
      expires_at: Date | null
    }, ExtArgs["result"]["battle"]>
    composites: {}
  }

  type battleGetPayload<S extends boolean | null | undefined | battleDefaultArgs> = $Result.GetResult<Prisma.$battlePayload, S>

  type battleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<battleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BattleCountAggregateInputType | true
    }

  export interface battleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['battle'], meta: { name: 'battle' } }
    /**
     * Find zero or one Battle that matches the filter.
     * @param {battleFindUniqueArgs} args - Arguments to find a Battle
     * @example
     * // Get one Battle
     * const battle = await prisma.battle.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends battleFindUniqueArgs>(args: SelectSubset<T, battleFindUniqueArgs<ExtArgs>>): Prisma__battleClient<$Result.GetResult<Prisma.$battlePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Battle that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {battleFindUniqueOrThrowArgs} args - Arguments to find a Battle
     * @example
     * // Get one Battle
     * const battle = await prisma.battle.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends battleFindUniqueOrThrowArgs>(args: SelectSubset<T, battleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__battleClient<$Result.GetResult<Prisma.$battlePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Battle that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {battleFindFirstArgs} args - Arguments to find a Battle
     * @example
     * // Get one Battle
     * const battle = await prisma.battle.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends battleFindFirstArgs>(args?: SelectSubset<T, battleFindFirstArgs<ExtArgs>>): Prisma__battleClient<$Result.GetResult<Prisma.$battlePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Battle that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {battleFindFirstOrThrowArgs} args - Arguments to find a Battle
     * @example
     * // Get one Battle
     * const battle = await prisma.battle.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends battleFindFirstOrThrowArgs>(args?: SelectSubset<T, battleFindFirstOrThrowArgs<ExtArgs>>): Prisma__battleClient<$Result.GetResult<Prisma.$battlePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Battles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {battleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Battles
     * const battles = await prisma.battle.findMany()
     * 
     * // Get first 10 Battles
     * const battles = await prisma.battle.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const battleWithIdOnly = await prisma.battle.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends battleFindManyArgs>(args?: SelectSubset<T, battleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$battlePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Battle.
     * @param {battleCreateArgs} args - Arguments to create a Battle.
     * @example
     * // Create one Battle
     * const Battle = await prisma.battle.create({
     *   data: {
     *     // ... data to create a Battle
     *   }
     * })
     * 
     */
    create<T extends battleCreateArgs>(args: SelectSubset<T, battleCreateArgs<ExtArgs>>): Prisma__battleClient<$Result.GetResult<Prisma.$battlePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Battles.
     * @param {battleCreateManyArgs} args - Arguments to create many Battles.
     * @example
     * // Create many Battles
     * const battle = await prisma.battle.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends battleCreateManyArgs>(args?: SelectSubset<T, battleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Battle.
     * @param {battleDeleteArgs} args - Arguments to delete one Battle.
     * @example
     * // Delete one Battle
     * const Battle = await prisma.battle.delete({
     *   where: {
     *     // ... filter to delete one Battle
     *   }
     * })
     * 
     */
    delete<T extends battleDeleteArgs>(args: SelectSubset<T, battleDeleteArgs<ExtArgs>>): Prisma__battleClient<$Result.GetResult<Prisma.$battlePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Battle.
     * @param {battleUpdateArgs} args - Arguments to update one Battle.
     * @example
     * // Update one Battle
     * const battle = await prisma.battle.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends battleUpdateArgs>(args: SelectSubset<T, battleUpdateArgs<ExtArgs>>): Prisma__battleClient<$Result.GetResult<Prisma.$battlePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Battles.
     * @param {battleDeleteManyArgs} args - Arguments to filter Battles to delete.
     * @example
     * // Delete a few Battles
     * const { count } = await prisma.battle.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends battleDeleteManyArgs>(args?: SelectSubset<T, battleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Battles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {battleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Battles
     * const battle = await prisma.battle.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends battleUpdateManyArgs>(args: SelectSubset<T, battleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Battle.
     * @param {battleUpsertArgs} args - Arguments to update or create a Battle.
     * @example
     * // Update or create a Battle
     * const battle = await prisma.battle.upsert({
     *   create: {
     *     // ... data to create a Battle
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Battle we want to update
     *   }
     * })
     */
    upsert<T extends battleUpsertArgs>(args: SelectSubset<T, battleUpsertArgs<ExtArgs>>): Prisma__battleClient<$Result.GetResult<Prisma.$battlePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Battles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {battleCountArgs} args - Arguments to filter Battles to count.
     * @example
     * // Count the number of Battles
     * const count = await prisma.battle.count({
     *   where: {
     *     // ... the filter for the Battles we want to count
     *   }
     * })
    **/
    count<T extends battleCountArgs>(
      args?: Subset<T, battleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BattleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Battle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BattleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BattleAggregateArgs>(args: Subset<T, BattleAggregateArgs>): Prisma.PrismaPromise<GetBattleAggregateType<T>>

    /**
     * Group by Battle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {battleGroupByArgs} args - Group by arguments.
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
      T extends battleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: battleGroupByArgs['orderBy'] }
        : { orderBy?: battleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, battleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBattleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the battle model
   */
  readonly fields: battleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for battle.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__battleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    battle_menu<T extends battle$battle_menuArgs<ExtArgs> = {}>(args?: Subset<T, battle$battle_menuArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$battle_menuPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    battle_participant<T extends battle$battle_participantArgs<ExtArgs> = {}>(args?: Subset<T, battle$battle_participantArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$battle_participantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    spin_result<T extends battle$spin_resultArgs<ExtArgs> = {}>(args?: Subset<T, battle$spin_resultArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$spin_resultPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the battle model
   */
  interface battleFieldRefs {
    readonly id: FieldRef<"battle", 'String'>
    readonly creater_nickname: FieldRef<"battle", 'String'>
    readonly status: FieldRef<"battle", 'String'>
    readonly participant_count: FieldRef<"battle", 'Int'>
    readonly created_at: FieldRef<"battle", 'DateTime'>
    readonly finished_at: FieldRef<"battle", 'DateTime'>
    readonly expires_at: FieldRef<"battle", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * battle findUnique
   */
  export type battleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the battle
     */
    select?: battleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the battle
     */
    omit?: battleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: battleInclude<ExtArgs> | null
    /**
     * Filter, which battle to fetch.
     */
    where: battleWhereUniqueInput
  }

  /**
   * battle findUniqueOrThrow
   */
  export type battleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the battle
     */
    select?: battleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the battle
     */
    omit?: battleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: battleInclude<ExtArgs> | null
    /**
     * Filter, which battle to fetch.
     */
    where: battleWhereUniqueInput
  }

  /**
   * battle findFirst
   */
  export type battleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the battle
     */
    select?: battleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the battle
     */
    omit?: battleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: battleInclude<ExtArgs> | null
    /**
     * Filter, which battle to fetch.
     */
    where?: battleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of battles to fetch.
     */
    orderBy?: battleOrderByWithRelationInput | battleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for battles.
     */
    cursor?: battleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` battles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` battles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of battles.
     */
    distinct?: BattleScalarFieldEnum | BattleScalarFieldEnum[]
  }

  /**
   * battle findFirstOrThrow
   */
  export type battleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the battle
     */
    select?: battleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the battle
     */
    omit?: battleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: battleInclude<ExtArgs> | null
    /**
     * Filter, which battle to fetch.
     */
    where?: battleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of battles to fetch.
     */
    orderBy?: battleOrderByWithRelationInput | battleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for battles.
     */
    cursor?: battleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` battles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` battles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of battles.
     */
    distinct?: BattleScalarFieldEnum | BattleScalarFieldEnum[]
  }

  /**
   * battle findMany
   */
  export type battleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the battle
     */
    select?: battleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the battle
     */
    omit?: battleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: battleInclude<ExtArgs> | null
    /**
     * Filter, which battles to fetch.
     */
    where?: battleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of battles to fetch.
     */
    orderBy?: battleOrderByWithRelationInput | battleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing battles.
     */
    cursor?: battleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` battles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` battles.
     */
    skip?: number
    distinct?: BattleScalarFieldEnum | BattleScalarFieldEnum[]
  }

  /**
   * battle create
   */
  export type battleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the battle
     */
    select?: battleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the battle
     */
    omit?: battleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: battleInclude<ExtArgs> | null
    /**
     * The data needed to create a battle.
     */
    data: XOR<battleCreateInput, battleUncheckedCreateInput>
  }

  /**
   * battle createMany
   */
  export type battleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many battles.
     */
    data: battleCreateManyInput | battleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * battle update
   */
  export type battleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the battle
     */
    select?: battleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the battle
     */
    omit?: battleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: battleInclude<ExtArgs> | null
    /**
     * The data needed to update a battle.
     */
    data: XOR<battleUpdateInput, battleUncheckedUpdateInput>
    /**
     * Choose, which battle to update.
     */
    where: battleWhereUniqueInput
  }

  /**
   * battle updateMany
   */
  export type battleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update battles.
     */
    data: XOR<battleUpdateManyMutationInput, battleUncheckedUpdateManyInput>
    /**
     * Filter which battles to update
     */
    where?: battleWhereInput
    /**
     * Limit how many battles to update.
     */
    limit?: number
  }

  /**
   * battle upsert
   */
  export type battleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the battle
     */
    select?: battleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the battle
     */
    omit?: battleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: battleInclude<ExtArgs> | null
    /**
     * The filter to search for the battle to update in case it exists.
     */
    where: battleWhereUniqueInput
    /**
     * In case the battle found by the `where` argument doesn't exist, create a new battle with this data.
     */
    create: XOR<battleCreateInput, battleUncheckedCreateInput>
    /**
     * In case the battle was found with the provided `where` argument, update it with this data.
     */
    update: XOR<battleUpdateInput, battleUncheckedUpdateInput>
  }

  /**
   * battle delete
   */
  export type battleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the battle
     */
    select?: battleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the battle
     */
    omit?: battleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: battleInclude<ExtArgs> | null
    /**
     * Filter which battle to delete.
     */
    where: battleWhereUniqueInput
  }

  /**
   * battle deleteMany
   */
  export type battleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which battles to delete
     */
    where?: battleWhereInput
    /**
     * Limit how many battles to delete.
     */
    limit?: number
  }

  /**
   * battle.battle_menu
   */
  export type battle$battle_menuArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the battle_menu
     */
    select?: battle_menuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the battle_menu
     */
    omit?: battle_menuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: battle_menuInclude<ExtArgs> | null
    where?: battle_menuWhereInput
    orderBy?: battle_menuOrderByWithRelationInput | battle_menuOrderByWithRelationInput[]
    cursor?: battle_menuWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Battle_menuScalarFieldEnum | Battle_menuScalarFieldEnum[]
  }

  /**
   * battle.battle_participant
   */
  export type battle$battle_participantArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the battle_participant
     */
    select?: battle_participantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the battle_participant
     */
    omit?: battle_participantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: battle_participantInclude<ExtArgs> | null
    where?: battle_participantWhereInput
    orderBy?: battle_participantOrderByWithRelationInput | battle_participantOrderByWithRelationInput[]
    cursor?: battle_participantWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Battle_participantScalarFieldEnum | Battle_participantScalarFieldEnum[]
  }

  /**
   * battle.spin_result
   */
  export type battle$spin_resultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the spin_result
     */
    select?: spin_resultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the spin_result
     */
    omit?: spin_resultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: spin_resultInclude<ExtArgs> | null
    where?: spin_resultWhereInput
    orderBy?: spin_resultOrderByWithRelationInput | spin_resultOrderByWithRelationInput[]
    cursor?: spin_resultWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Spin_resultScalarFieldEnum | Spin_resultScalarFieldEnum[]
  }

  /**
   * battle without action
   */
  export type battleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the battle
     */
    select?: battleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the battle
     */
    omit?: battleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: battleInclude<ExtArgs> | null
  }


  /**
   * Model battle_menu
   */

  export type AggregateBattle_menu = {
    _count: Battle_menuCountAggregateOutputType | null
    _avg: Battle_menuAvgAggregateOutputType | null
    _sum: Battle_menuSumAggregateOutputType | null
    _min: Battle_menuMinAggregateOutputType | null
    _max: Battle_menuMaxAggregateOutputType | null
  }

  export type Battle_menuAvgAggregateOutputType = {
    id: number | null
    boundary_angle: number | null
    menu_order: number | null
    menu_id: number | null
  }

  export type Battle_menuSumAggregateOutputType = {
    id: bigint | null
    boundary_angle: number | null
    menu_order: number | null
    menu_id: bigint | null
  }

  export type Battle_menuMinAggregateOutputType = {
    id: bigint | null
    menu_name: string | null
    boundary_angle: number | null
    menu_order: number | null
    battle_id: string | null
    menu_id: bigint | null
  }

  export type Battle_menuMaxAggregateOutputType = {
    id: bigint | null
    menu_name: string | null
    boundary_angle: number | null
    menu_order: number | null
    battle_id: string | null
    menu_id: bigint | null
  }

  export type Battle_menuCountAggregateOutputType = {
    id: number
    menu_name: number
    boundary_angle: number
    menu_order: number
    battle_id: number
    menu_id: number
    _all: number
  }


  export type Battle_menuAvgAggregateInputType = {
    id?: true
    boundary_angle?: true
    menu_order?: true
    menu_id?: true
  }

  export type Battle_menuSumAggregateInputType = {
    id?: true
    boundary_angle?: true
    menu_order?: true
    menu_id?: true
  }

  export type Battle_menuMinAggregateInputType = {
    id?: true
    menu_name?: true
    boundary_angle?: true
    menu_order?: true
    battle_id?: true
    menu_id?: true
  }

  export type Battle_menuMaxAggregateInputType = {
    id?: true
    menu_name?: true
    boundary_angle?: true
    menu_order?: true
    battle_id?: true
    menu_id?: true
  }

  export type Battle_menuCountAggregateInputType = {
    id?: true
    menu_name?: true
    boundary_angle?: true
    menu_order?: true
    battle_id?: true
    menu_id?: true
    _all?: true
  }

  export type Battle_menuAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which battle_menu to aggregate.
     */
    where?: battle_menuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of battle_menus to fetch.
     */
    orderBy?: battle_menuOrderByWithRelationInput | battle_menuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: battle_menuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` battle_menus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` battle_menus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned battle_menus
    **/
    _count?: true | Battle_menuCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Battle_menuAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Battle_menuSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Battle_menuMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Battle_menuMaxAggregateInputType
  }

  export type GetBattle_menuAggregateType<T extends Battle_menuAggregateArgs> = {
        [P in keyof T & keyof AggregateBattle_menu]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBattle_menu[P]>
      : GetScalarType<T[P], AggregateBattle_menu[P]>
  }




  export type battle_menuGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: battle_menuWhereInput
    orderBy?: battle_menuOrderByWithAggregationInput | battle_menuOrderByWithAggregationInput[]
    by: Battle_menuScalarFieldEnum[] | Battle_menuScalarFieldEnum
    having?: battle_menuScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Battle_menuCountAggregateInputType | true
    _avg?: Battle_menuAvgAggregateInputType
    _sum?: Battle_menuSumAggregateInputType
    _min?: Battle_menuMinAggregateInputType
    _max?: Battle_menuMaxAggregateInputType
  }

  export type Battle_menuGroupByOutputType = {
    id: bigint
    menu_name: string | null
    boundary_angle: number | null
    menu_order: number | null
    battle_id: string
    menu_id: bigint
    _count: Battle_menuCountAggregateOutputType | null
    _avg: Battle_menuAvgAggregateOutputType | null
    _sum: Battle_menuSumAggregateOutputType | null
    _min: Battle_menuMinAggregateOutputType | null
    _max: Battle_menuMaxAggregateOutputType | null
  }

  type GetBattle_menuGroupByPayload<T extends battle_menuGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Battle_menuGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Battle_menuGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Battle_menuGroupByOutputType[P]>
            : GetScalarType<T[P], Battle_menuGroupByOutputType[P]>
        }
      >
    >


  export type battle_menuSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    menu_name?: boolean
    boundary_angle?: boolean
    menu_order?: boolean
    battle_id?: boolean
    menu_id?: boolean
    battle?: boolean | battleDefaultArgs<ExtArgs>
    menu?: boolean | menuDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["battle_menu"]>



  export type battle_menuSelectScalar = {
    id?: boolean
    menu_name?: boolean
    boundary_angle?: boolean
    menu_order?: boolean
    battle_id?: boolean
    menu_id?: boolean
  }

  export type battle_menuOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "menu_name" | "boundary_angle" | "menu_order" | "battle_id" | "menu_id", ExtArgs["result"]["battle_menu"]>
  export type battle_menuInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    battle?: boolean | battleDefaultArgs<ExtArgs>
    menu?: boolean | menuDefaultArgs<ExtArgs>
  }

  export type $battle_menuPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "battle_menu"
    objects: {
      battle: Prisma.$battlePayload<ExtArgs>
      menu: Prisma.$menuPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      menu_name: string | null
      boundary_angle: number | null
      menu_order: number | null
      battle_id: string
      menu_id: bigint
    }, ExtArgs["result"]["battle_menu"]>
    composites: {}
  }

  type battle_menuGetPayload<S extends boolean | null | undefined | battle_menuDefaultArgs> = $Result.GetResult<Prisma.$battle_menuPayload, S>

  type battle_menuCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<battle_menuFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Battle_menuCountAggregateInputType | true
    }

  export interface battle_menuDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['battle_menu'], meta: { name: 'battle_menu' } }
    /**
     * Find zero or one Battle_menu that matches the filter.
     * @param {battle_menuFindUniqueArgs} args - Arguments to find a Battle_menu
     * @example
     * // Get one Battle_menu
     * const battle_menu = await prisma.battle_menu.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends battle_menuFindUniqueArgs>(args: SelectSubset<T, battle_menuFindUniqueArgs<ExtArgs>>): Prisma__battle_menuClient<$Result.GetResult<Prisma.$battle_menuPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Battle_menu that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {battle_menuFindUniqueOrThrowArgs} args - Arguments to find a Battle_menu
     * @example
     * // Get one Battle_menu
     * const battle_menu = await prisma.battle_menu.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends battle_menuFindUniqueOrThrowArgs>(args: SelectSubset<T, battle_menuFindUniqueOrThrowArgs<ExtArgs>>): Prisma__battle_menuClient<$Result.GetResult<Prisma.$battle_menuPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Battle_menu that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {battle_menuFindFirstArgs} args - Arguments to find a Battle_menu
     * @example
     * // Get one Battle_menu
     * const battle_menu = await prisma.battle_menu.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends battle_menuFindFirstArgs>(args?: SelectSubset<T, battle_menuFindFirstArgs<ExtArgs>>): Prisma__battle_menuClient<$Result.GetResult<Prisma.$battle_menuPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Battle_menu that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {battle_menuFindFirstOrThrowArgs} args - Arguments to find a Battle_menu
     * @example
     * // Get one Battle_menu
     * const battle_menu = await prisma.battle_menu.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends battle_menuFindFirstOrThrowArgs>(args?: SelectSubset<T, battle_menuFindFirstOrThrowArgs<ExtArgs>>): Prisma__battle_menuClient<$Result.GetResult<Prisma.$battle_menuPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Battle_menus that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {battle_menuFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Battle_menus
     * const battle_menus = await prisma.battle_menu.findMany()
     * 
     * // Get first 10 Battle_menus
     * const battle_menus = await prisma.battle_menu.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const battle_menuWithIdOnly = await prisma.battle_menu.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends battle_menuFindManyArgs>(args?: SelectSubset<T, battle_menuFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$battle_menuPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Battle_menu.
     * @param {battle_menuCreateArgs} args - Arguments to create a Battle_menu.
     * @example
     * // Create one Battle_menu
     * const Battle_menu = await prisma.battle_menu.create({
     *   data: {
     *     // ... data to create a Battle_menu
     *   }
     * })
     * 
     */
    create<T extends battle_menuCreateArgs>(args: SelectSubset<T, battle_menuCreateArgs<ExtArgs>>): Prisma__battle_menuClient<$Result.GetResult<Prisma.$battle_menuPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Battle_menus.
     * @param {battle_menuCreateManyArgs} args - Arguments to create many Battle_menus.
     * @example
     * // Create many Battle_menus
     * const battle_menu = await prisma.battle_menu.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends battle_menuCreateManyArgs>(args?: SelectSubset<T, battle_menuCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Battle_menu.
     * @param {battle_menuDeleteArgs} args - Arguments to delete one Battle_menu.
     * @example
     * // Delete one Battle_menu
     * const Battle_menu = await prisma.battle_menu.delete({
     *   where: {
     *     // ... filter to delete one Battle_menu
     *   }
     * })
     * 
     */
    delete<T extends battle_menuDeleteArgs>(args: SelectSubset<T, battle_menuDeleteArgs<ExtArgs>>): Prisma__battle_menuClient<$Result.GetResult<Prisma.$battle_menuPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Battle_menu.
     * @param {battle_menuUpdateArgs} args - Arguments to update one Battle_menu.
     * @example
     * // Update one Battle_menu
     * const battle_menu = await prisma.battle_menu.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends battle_menuUpdateArgs>(args: SelectSubset<T, battle_menuUpdateArgs<ExtArgs>>): Prisma__battle_menuClient<$Result.GetResult<Prisma.$battle_menuPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Battle_menus.
     * @param {battle_menuDeleteManyArgs} args - Arguments to filter Battle_menus to delete.
     * @example
     * // Delete a few Battle_menus
     * const { count } = await prisma.battle_menu.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends battle_menuDeleteManyArgs>(args?: SelectSubset<T, battle_menuDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Battle_menus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {battle_menuUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Battle_menus
     * const battle_menu = await prisma.battle_menu.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends battle_menuUpdateManyArgs>(args: SelectSubset<T, battle_menuUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Battle_menu.
     * @param {battle_menuUpsertArgs} args - Arguments to update or create a Battle_menu.
     * @example
     * // Update or create a Battle_menu
     * const battle_menu = await prisma.battle_menu.upsert({
     *   create: {
     *     // ... data to create a Battle_menu
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Battle_menu we want to update
     *   }
     * })
     */
    upsert<T extends battle_menuUpsertArgs>(args: SelectSubset<T, battle_menuUpsertArgs<ExtArgs>>): Prisma__battle_menuClient<$Result.GetResult<Prisma.$battle_menuPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Battle_menus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {battle_menuCountArgs} args - Arguments to filter Battle_menus to count.
     * @example
     * // Count the number of Battle_menus
     * const count = await prisma.battle_menu.count({
     *   where: {
     *     // ... the filter for the Battle_menus we want to count
     *   }
     * })
    **/
    count<T extends battle_menuCountArgs>(
      args?: Subset<T, battle_menuCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Battle_menuCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Battle_menu.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Battle_menuAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Battle_menuAggregateArgs>(args: Subset<T, Battle_menuAggregateArgs>): Prisma.PrismaPromise<GetBattle_menuAggregateType<T>>

    /**
     * Group by Battle_menu.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {battle_menuGroupByArgs} args - Group by arguments.
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
      T extends battle_menuGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: battle_menuGroupByArgs['orderBy'] }
        : { orderBy?: battle_menuGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, battle_menuGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBattle_menuGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the battle_menu model
   */
  readonly fields: battle_menuFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for battle_menu.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__battle_menuClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    battle<T extends battleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, battleDefaultArgs<ExtArgs>>): Prisma__battleClient<$Result.GetResult<Prisma.$battlePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    menu<T extends menuDefaultArgs<ExtArgs> = {}>(args?: Subset<T, menuDefaultArgs<ExtArgs>>): Prisma__menuClient<$Result.GetResult<Prisma.$menuPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the battle_menu model
   */
  interface battle_menuFieldRefs {
    readonly id: FieldRef<"battle_menu", 'BigInt'>
    readonly menu_name: FieldRef<"battle_menu", 'String'>
    readonly boundary_angle: FieldRef<"battle_menu", 'Float'>
    readonly menu_order: FieldRef<"battle_menu", 'Int'>
    readonly battle_id: FieldRef<"battle_menu", 'String'>
    readonly menu_id: FieldRef<"battle_menu", 'BigInt'>
  }
    

  // Custom InputTypes
  /**
   * battle_menu findUnique
   */
  export type battle_menuFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the battle_menu
     */
    select?: battle_menuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the battle_menu
     */
    omit?: battle_menuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: battle_menuInclude<ExtArgs> | null
    /**
     * Filter, which battle_menu to fetch.
     */
    where: battle_menuWhereUniqueInput
  }

  /**
   * battle_menu findUniqueOrThrow
   */
  export type battle_menuFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the battle_menu
     */
    select?: battle_menuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the battle_menu
     */
    omit?: battle_menuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: battle_menuInclude<ExtArgs> | null
    /**
     * Filter, which battle_menu to fetch.
     */
    where: battle_menuWhereUniqueInput
  }

  /**
   * battle_menu findFirst
   */
  export type battle_menuFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the battle_menu
     */
    select?: battle_menuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the battle_menu
     */
    omit?: battle_menuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: battle_menuInclude<ExtArgs> | null
    /**
     * Filter, which battle_menu to fetch.
     */
    where?: battle_menuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of battle_menus to fetch.
     */
    orderBy?: battle_menuOrderByWithRelationInput | battle_menuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for battle_menus.
     */
    cursor?: battle_menuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` battle_menus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` battle_menus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of battle_menus.
     */
    distinct?: Battle_menuScalarFieldEnum | Battle_menuScalarFieldEnum[]
  }

  /**
   * battle_menu findFirstOrThrow
   */
  export type battle_menuFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the battle_menu
     */
    select?: battle_menuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the battle_menu
     */
    omit?: battle_menuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: battle_menuInclude<ExtArgs> | null
    /**
     * Filter, which battle_menu to fetch.
     */
    where?: battle_menuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of battle_menus to fetch.
     */
    orderBy?: battle_menuOrderByWithRelationInput | battle_menuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for battle_menus.
     */
    cursor?: battle_menuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` battle_menus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` battle_menus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of battle_menus.
     */
    distinct?: Battle_menuScalarFieldEnum | Battle_menuScalarFieldEnum[]
  }

  /**
   * battle_menu findMany
   */
  export type battle_menuFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the battle_menu
     */
    select?: battle_menuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the battle_menu
     */
    omit?: battle_menuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: battle_menuInclude<ExtArgs> | null
    /**
     * Filter, which battle_menus to fetch.
     */
    where?: battle_menuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of battle_menus to fetch.
     */
    orderBy?: battle_menuOrderByWithRelationInput | battle_menuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing battle_menus.
     */
    cursor?: battle_menuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` battle_menus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` battle_menus.
     */
    skip?: number
    distinct?: Battle_menuScalarFieldEnum | Battle_menuScalarFieldEnum[]
  }

  /**
   * battle_menu create
   */
  export type battle_menuCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the battle_menu
     */
    select?: battle_menuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the battle_menu
     */
    omit?: battle_menuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: battle_menuInclude<ExtArgs> | null
    /**
     * The data needed to create a battle_menu.
     */
    data: XOR<battle_menuCreateInput, battle_menuUncheckedCreateInput>
  }

  /**
   * battle_menu createMany
   */
  export type battle_menuCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many battle_menus.
     */
    data: battle_menuCreateManyInput | battle_menuCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * battle_menu update
   */
  export type battle_menuUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the battle_menu
     */
    select?: battle_menuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the battle_menu
     */
    omit?: battle_menuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: battle_menuInclude<ExtArgs> | null
    /**
     * The data needed to update a battle_menu.
     */
    data: XOR<battle_menuUpdateInput, battle_menuUncheckedUpdateInput>
    /**
     * Choose, which battle_menu to update.
     */
    where: battle_menuWhereUniqueInput
  }

  /**
   * battle_menu updateMany
   */
  export type battle_menuUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update battle_menus.
     */
    data: XOR<battle_menuUpdateManyMutationInput, battle_menuUncheckedUpdateManyInput>
    /**
     * Filter which battle_menus to update
     */
    where?: battle_menuWhereInput
    /**
     * Limit how many battle_menus to update.
     */
    limit?: number
  }

  /**
   * battle_menu upsert
   */
  export type battle_menuUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the battle_menu
     */
    select?: battle_menuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the battle_menu
     */
    omit?: battle_menuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: battle_menuInclude<ExtArgs> | null
    /**
     * The filter to search for the battle_menu to update in case it exists.
     */
    where: battle_menuWhereUniqueInput
    /**
     * In case the battle_menu found by the `where` argument doesn't exist, create a new battle_menu with this data.
     */
    create: XOR<battle_menuCreateInput, battle_menuUncheckedCreateInput>
    /**
     * In case the battle_menu was found with the provided `where` argument, update it with this data.
     */
    update: XOR<battle_menuUpdateInput, battle_menuUncheckedUpdateInput>
  }

  /**
   * battle_menu delete
   */
  export type battle_menuDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the battle_menu
     */
    select?: battle_menuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the battle_menu
     */
    omit?: battle_menuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: battle_menuInclude<ExtArgs> | null
    /**
     * Filter which battle_menu to delete.
     */
    where: battle_menuWhereUniqueInput
  }

  /**
   * battle_menu deleteMany
   */
  export type battle_menuDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which battle_menus to delete
     */
    where?: battle_menuWhereInput
    /**
     * Limit how many battle_menus to delete.
     */
    limit?: number
  }

  /**
   * battle_menu without action
   */
  export type battle_menuDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the battle_menu
     */
    select?: battle_menuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the battle_menu
     */
    omit?: battle_menuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: battle_menuInclude<ExtArgs> | null
  }


  /**
   * Model battle_participant
   */

  export type AggregateBattle_participant = {
    _count: Battle_participantCountAggregateOutputType | null
    _avg: Battle_participantAvgAggregateOutputType | null
    _sum: Battle_participantSumAggregateOutputType | null
    _min: Battle_participantMinAggregateOutputType | null
    _max: Battle_participantMaxAggregateOutputType | null
  }

  export type Battle_participantAvgAggregateOutputType = {
    user_id: number | null
    is_creater: number | null
  }

  export type Battle_participantSumAggregateOutputType = {
    user_id: bigint | null
    is_creater: number | null
  }

  export type Battle_participantMinAggregateOutputType = {
    battle_id: string | null
    user_id: bigint | null
    nickname: string | null
    is_creater: number | null
    joined_at: Date | null
  }

  export type Battle_participantMaxAggregateOutputType = {
    battle_id: string | null
    user_id: bigint | null
    nickname: string | null
    is_creater: number | null
    joined_at: Date | null
  }

  export type Battle_participantCountAggregateOutputType = {
    battle_id: number
    user_id: number
    nickname: number
    is_creater: number
    joined_at: number
    _all: number
  }


  export type Battle_participantAvgAggregateInputType = {
    user_id?: true
    is_creater?: true
  }

  export type Battle_participantSumAggregateInputType = {
    user_id?: true
    is_creater?: true
  }

  export type Battle_participantMinAggregateInputType = {
    battle_id?: true
    user_id?: true
    nickname?: true
    is_creater?: true
    joined_at?: true
  }

  export type Battle_participantMaxAggregateInputType = {
    battle_id?: true
    user_id?: true
    nickname?: true
    is_creater?: true
    joined_at?: true
  }

  export type Battle_participantCountAggregateInputType = {
    battle_id?: true
    user_id?: true
    nickname?: true
    is_creater?: true
    joined_at?: true
    _all?: true
  }

  export type Battle_participantAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which battle_participant to aggregate.
     */
    where?: battle_participantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of battle_participants to fetch.
     */
    orderBy?: battle_participantOrderByWithRelationInput | battle_participantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: battle_participantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` battle_participants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` battle_participants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned battle_participants
    **/
    _count?: true | Battle_participantCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Battle_participantAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Battle_participantSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Battle_participantMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Battle_participantMaxAggregateInputType
  }

  export type GetBattle_participantAggregateType<T extends Battle_participantAggregateArgs> = {
        [P in keyof T & keyof AggregateBattle_participant]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBattle_participant[P]>
      : GetScalarType<T[P], AggregateBattle_participant[P]>
  }




  export type battle_participantGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: battle_participantWhereInput
    orderBy?: battle_participantOrderByWithAggregationInput | battle_participantOrderByWithAggregationInput[]
    by: Battle_participantScalarFieldEnum[] | Battle_participantScalarFieldEnum
    having?: battle_participantScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Battle_participantCountAggregateInputType | true
    _avg?: Battle_participantAvgAggregateInputType
    _sum?: Battle_participantSumAggregateInputType
    _min?: Battle_participantMinAggregateInputType
    _max?: Battle_participantMaxAggregateInputType
  }

  export type Battle_participantGroupByOutputType = {
    battle_id: string
    user_id: bigint
    nickname: string | null
    is_creater: number | null
    joined_at: Date | null
    _count: Battle_participantCountAggregateOutputType | null
    _avg: Battle_participantAvgAggregateOutputType | null
    _sum: Battle_participantSumAggregateOutputType | null
    _min: Battle_participantMinAggregateOutputType | null
    _max: Battle_participantMaxAggregateOutputType | null
  }

  type GetBattle_participantGroupByPayload<T extends battle_participantGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Battle_participantGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Battle_participantGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Battle_participantGroupByOutputType[P]>
            : GetScalarType<T[P], Battle_participantGroupByOutputType[P]>
        }
      >
    >


  export type battle_participantSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    battle_id?: boolean
    user_id?: boolean
    nickname?: boolean
    is_creater?: boolean
    joined_at?: boolean
    battle?: boolean | battleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["battle_participant"]>



  export type battle_participantSelectScalar = {
    battle_id?: boolean
    user_id?: boolean
    nickname?: boolean
    is_creater?: boolean
    joined_at?: boolean
  }

  export type battle_participantOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"battle_id" | "user_id" | "nickname" | "is_creater" | "joined_at", ExtArgs["result"]["battle_participant"]>
  export type battle_participantInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    battle?: boolean | battleDefaultArgs<ExtArgs>
  }

  export type $battle_participantPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "battle_participant"
    objects: {
      battle: Prisma.$battlePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      battle_id: string
      user_id: bigint
      nickname: string | null
      is_creater: number | null
      joined_at: Date | null
    }, ExtArgs["result"]["battle_participant"]>
    composites: {}
  }

  type battle_participantGetPayload<S extends boolean | null | undefined | battle_participantDefaultArgs> = $Result.GetResult<Prisma.$battle_participantPayload, S>

  type battle_participantCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<battle_participantFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Battle_participantCountAggregateInputType | true
    }

  export interface battle_participantDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['battle_participant'], meta: { name: 'battle_participant' } }
    /**
     * Find zero or one Battle_participant that matches the filter.
     * @param {battle_participantFindUniqueArgs} args - Arguments to find a Battle_participant
     * @example
     * // Get one Battle_participant
     * const battle_participant = await prisma.battle_participant.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends battle_participantFindUniqueArgs>(args: SelectSubset<T, battle_participantFindUniqueArgs<ExtArgs>>): Prisma__battle_participantClient<$Result.GetResult<Prisma.$battle_participantPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Battle_participant that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {battle_participantFindUniqueOrThrowArgs} args - Arguments to find a Battle_participant
     * @example
     * // Get one Battle_participant
     * const battle_participant = await prisma.battle_participant.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends battle_participantFindUniqueOrThrowArgs>(args: SelectSubset<T, battle_participantFindUniqueOrThrowArgs<ExtArgs>>): Prisma__battle_participantClient<$Result.GetResult<Prisma.$battle_participantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Battle_participant that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {battle_participantFindFirstArgs} args - Arguments to find a Battle_participant
     * @example
     * // Get one Battle_participant
     * const battle_participant = await prisma.battle_participant.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends battle_participantFindFirstArgs>(args?: SelectSubset<T, battle_participantFindFirstArgs<ExtArgs>>): Prisma__battle_participantClient<$Result.GetResult<Prisma.$battle_participantPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Battle_participant that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {battle_participantFindFirstOrThrowArgs} args - Arguments to find a Battle_participant
     * @example
     * // Get one Battle_participant
     * const battle_participant = await prisma.battle_participant.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends battle_participantFindFirstOrThrowArgs>(args?: SelectSubset<T, battle_participantFindFirstOrThrowArgs<ExtArgs>>): Prisma__battle_participantClient<$Result.GetResult<Prisma.$battle_participantPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Battle_participants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {battle_participantFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Battle_participants
     * const battle_participants = await prisma.battle_participant.findMany()
     * 
     * // Get first 10 Battle_participants
     * const battle_participants = await prisma.battle_participant.findMany({ take: 10 })
     * 
     * // Only select the `battle_id`
     * const battle_participantWithBattle_idOnly = await prisma.battle_participant.findMany({ select: { battle_id: true } })
     * 
     */
    findMany<T extends battle_participantFindManyArgs>(args?: SelectSubset<T, battle_participantFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$battle_participantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Battle_participant.
     * @param {battle_participantCreateArgs} args - Arguments to create a Battle_participant.
     * @example
     * // Create one Battle_participant
     * const Battle_participant = await prisma.battle_participant.create({
     *   data: {
     *     // ... data to create a Battle_participant
     *   }
     * })
     * 
     */
    create<T extends battle_participantCreateArgs>(args: SelectSubset<T, battle_participantCreateArgs<ExtArgs>>): Prisma__battle_participantClient<$Result.GetResult<Prisma.$battle_participantPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Battle_participants.
     * @param {battle_participantCreateManyArgs} args - Arguments to create many Battle_participants.
     * @example
     * // Create many Battle_participants
     * const battle_participant = await prisma.battle_participant.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends battle_participantCreateManyArgs>(args?: SelectSubset<T, battle_participantCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Battle_participant.
     * @param {battle_participantDeleteArgs} args - Arguments to delete one Battle_participant.
     * @example
     * // Delete one Battle_participant
     * const Battle_participant = await prisma.battle_participant.delete({
     *   where: {
     *     // ... filter to delete one Battle_participant
     *   }
     * })
     * 
     */
    delete<T extends battle_participantDeleteArgs>(args: SelectSubset<T, battle_participantDeleteArgs<ExtArgs>>): Prisma__battle_participantClient<$Result.GetResult<Prisma.$battle_participantPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Battle_participant.
     * @param {battle_participantUpdateArgs} args - Arguments to update one Battle_participant.
     * @example
     * // Update one Battle_participant
     * const battle_participant = await prisma.battle_participant.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends battle_participantUpdateArgs>(args: SelectSubset<T, battle_participantUpdateArgs<ExtArgs>>): Prisma__battle_participantClient<$Result.GetResult<Prisma.$battle_participantPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Battle_participants.
     * @param {battle_participantDeleteManyArgs} args - Arguments to filter Battle_participants to delete.
     * @example
     * // Delete a few Battle_participants
     * const { count } = await prisma.battle_participant.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends battle_participantDeleteManyArgs>(args?: SelectSubset<T, battle_participantDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Battle_participants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {battle_participantUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Battle_participants
     * const battle_participant = await prisma.battle_participant.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends battle_participantUpdateManyArgs>(args: SelectSubset<T, battle_participantUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Battle_participant.
     * @param {battle_participantUpsertArgs} args - Arguments to update or create a Battle_participant.
     * @example
     * // Update or create a Battle_participant
     * const battle_participant = await prisma.battle_participant.upsert({
     *   create: {
     *     // ... data to create a Battle_participant
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Battle_participant we want to update
     *   }
     * })
     */
    upsert<T extends battle_participantUpsertArgs>(args: SelectSubset<T, battle_participantUpsertArgs<ExtArgs>>): Prisma__battle_participantClient<$Result.GetResult<Prisma.$battle_participantPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Battle_participants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {battle_participantCountArgs} args - Arguments to filter Battle_participants to count.
     * @example
     * // Count the number of Battle_participants
     * const count = await prisma.battle_participant.count({
     *   where: {
     *     // ... the filter for the Battle_participants we want to count
     *   }
     * })
    **/
    count<T extends battle_participantCountArgs>(
      args?: Subset<T, battle_participantCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Battle_participantCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Battle_participant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Battle_participantAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Battle_participantAggregateArgs>(args: Subset<T, Battle_participantAggregateArgs>): Prisma.PrismaPromise<GetBattle_participantAggregateType<T>>

    /**
     * Group by Battle_participant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {battle_participantGroupByArgs} args - Group by arguments.
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
      T extends battle_participantGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: battle_participantGroupByArgs['orderBy'] }
        : { orderBy?: battle_participantGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, battle_participantGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBattle_participantGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the battle_participant model
   */
  readonly fields: battle_participantFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for battle_participant.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__battle_participantClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    battle<T extends battleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, battleDefaultArgs<ExtArgs>>): Prisma__battleClient<$Result.GetResult<Prisma.$battlePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the battle_participant model
   */
  interface battle_participantFieldRefs {
    readonly battle_id: FieldRef<"battle_participant", 'String'>
    readonly user_id: FieldRef<"battle_participant", 'BigInt'>
    readonly nickname: FieldRef<"battle_participant", 'String'>
    readonly is_creater: FieldRef<"battle_participant", 'Int'>
    readonly joined_at: FieldRef<"battle_participant", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * battle_participant findUnique
   */
  export type battle_participantFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the battle_participant
     */
    select?: battle_participantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the battle_participant
     */
    omit?: battle_participantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: battle_participantInclude<ExtArgs> | null
    /**
     * Filter, which battle_participant to fetch.
     */
    where: battle_participantWhereUniqueInput
  }

  /**
   * battle_participant findUniqueOrThrow
   */
  export type battle_participantFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the battle_participant
     */
    select?: battle_participantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the battle_participant
     */
    omit?: battle_participantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: battle_participantInclude<ExtArgs> | null
    /**
     * Filter, which battle_participant to fetch.
     */
    where: battle_participantWhereUniqueInput
  }

  /**
   * battle_participant findFirst
   */
  export type battle_participantFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the battle_participant
     */
    select?: battle_participantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the battle_participant
     */
    omit?: battle_participantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: battle_participantInclude<ExtArgs> | null
    /**
     * Filter, which battle_participant to fetch.
     */
    where?: battle_participantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of battle_participants to fetch.
     */
    orderBy?: battle_participantOrderByWithRelationInput | battle_participantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for battle_participants.
     */
    cursor?: battle_participantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` battle_participants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` battle_participants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of battle_participants.
     */
    distinct?: Battle_participantScalarFieldEnum | Battle_participantScalarFieldEnum[]
  }

  /**
   * battle_participant findFirstOrThrow
   */
  export type battle_participantFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the battle_participant
     */
    select?: battle_participantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the battle_participant
     */
    omit?: battle_participantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: battle_participantInclude<ExtArgs> | null
    /**
     * Filter, which battle_participant to fetch.
     */
    where?: battle_participantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of battle_participants to fetch.
     */
    orderBy?: battle_participantOrderByWithRelationInput | battle_participantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for battle_participants.
     */
    cursor?: battle_participantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` battle_participants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` battle_participants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of battle_participants.
     */
    distinct?: Battle_participantScalarFieldEnum | Battle_participantScalarFieldEnum[]
  }

  /**
   * battle_participant findMany
   */
  export type battle_participantFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the battle_participant
     */
    select?: battle_participantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the battle_participant
     */
    omit?: battle_participantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: battle_participantInclude<ExtArgs> | null
    /**
     * Filter, which battle_participants to fetch.
     */
    where?: battle_participantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of battle_participants to fetch.
     */
    orderBy?: battle_participantOrderByWithRelationInput | battle_participantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing battle_participants.
     */
    cursor?: battle_participantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` battle_participants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` battle_participants.
     */
    skip?: number
    distinct?: Battle_participantScalarFieldEnum | Battle_participantScalarFieldEnum[]
  }

  /**
   * battle_participant create
   */
  export type battle_participantCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the battle_participant
     */
    select?: battle_participantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the battle_participant
     */
    omit?: battle_participantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: battle_participantInclude<ExtArgs> | null
    /**
     * The data needed to create a battle_participant.
     */
    data: XOR<battle_participantCreateInput, battle_participantUncheckedCreateInput>
  }

  /**
   * battle_participant createMany
   */
  export type battle_participantCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many battle_participants.
     */
    data: battle_participantCreateManyInput | battle_participantCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * battle_participant update
   */
  export type battle_participantUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the battle_participant
     */
    select?: battle_participantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the battle_participant
     */
    omit?: battle_participantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: battle_participantInclude<ExtArgs> | null
    /**
     * The data needed to update a battle_participant.
     */
    data: XOR<battle_participantUpdateInput, battle_participantUncheckedUpdateInput>
    /**
     * Choose, which battle_participant to update.
     */
    where: battle_participantWhereUniqueInput
  }

  /**
   * battle_participant updateMany
   */
  export type battle_participantUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update battle_participants.
     */
    data: XOR<battle_participantUpdateManyMutationInput, battle_participantUncheckedUpdateManyInput>
    /**
     * Filter which battle_participants to update
     */
    where?: battle_participantWhereInput
    /**
     * Limit how many battle_participants to update.
     */
    limit?: number
  }

  /**
   * battle_participant upsert
   */
  export type battle_participantUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the battle_participant
     */
    select?: battle_participantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the battle_participant
     */
    omit?: battle_participantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: battle_participantInclude<ExtArgs> | null
    /**
     * The filter to search for the battle_participant to update in case it exists.
     */
    where: battle_participantWhereUniqueInput
    /**
     * In case the battle_participant found by the `where` argument doesn't exist, create a new battle_participant with this data.
     */
    create: XOR<battle_participantCreateInput, battle_participantUncheckedCreateInput>
    /**
     * In case the battle_participant was found with the provided `where` argument, update it with this data.
     */
    update: XOR<battle_participantUpdateInput, battle_participantUncheckedUpdateInput>
  }

  /**
   * battle_participant delete
   */
  export type battle_participantDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the battle_participant
     */
    select?: battle_participantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the battle_participant
     */
    omit?: battle_participantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: battle_participantInclude<ExtArgs> | null
    /**
     * Filter which battle_participant to delete.
     */
    where: battle_participantWhereUniqueInput
  }

  /**
   * battle_participant deleteMany
   */
  export type battle_participantDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which battle_participants to delete
     */
    where?: battle_participantWhereInput
    /**
     * Limit how many battle_participants to delete.
     */
    limit?: number
  }

  /**
   * battle_participant without action
   */
  export type battle_participantDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the battle_participant
     */
    select?: battle_participantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the battle_participant
     */
    omit?: battle_participantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: battle_participantInclude<ExtArgs> | null
  }


  /**
   * Model menu_allery
   */

  export type AggregateMenu_allery = {
    _count: Menu_alleryCountAggregateOutputType | null
    _avg: Menu_alleryAvgAggregateOutputType | null
    _sum: Menu_allerySumAggregateOutputType | null
    _min: Menu_alleryMinAggregateOutputType | null
    _max: Menu_alleryMaxAggregateOutputType | null
  }

  export type Menu_alleryAvgAggregateOutputType = {
    menu_id: number | null
    allergy_id: number | null
  }

  export type Menu_allerySumAggregateOutputType = {
    menu_id: bigint | null
    allergy_id: bigint | null
  }

  export type Menu_alleryMinAggregateOutputType = {
    menu_id: bigint | null
    allergy_id: bigint | null
  }

  export type Menu_alleryMaxAggregateOutputType = {
    menu_id: bigint | null
    allergy_id: bigint | null
  }

  export type Menu_alleryCountAggregateOutputType = {
    menu_id: number
    allergy_id: number
    _all: number
  }


  export type Menu_alleryAvgAggregateInputType = {
    menu_id?: true
    allergy_id?: true
  }

  export type Menu_allerySumAggregateInputType = {
    menu_id?: true
    allergy_id?: true
  }

  export type Menu_alleryMinAggregateInputType = {
    menu_id?: true
    allergy_id?: true
  }

  export type Menu_alleryMaxAggregateInputType = {
    menu_id?: true
    allergy_id?: true
  }

  export type Menu_alleryCountAggregateInputType = {
    menu_id?: true
    allergy_id?: true
    _all?: true
  }

  export type Menu_alleryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which menu_allery to aggregate.
     */
    where?: menu_alleryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of menu_alleries to fetch.
     */
    orderBy?: menu_alleryOrderByWithRelationInput | menu_alleryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: menu_alleryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` menu_alleries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` menu_alleries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned menu_alleries
    **/
    _count?: true | Menu_alleryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Menu_alleryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Menu_allerySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Menu_alleryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Menu_alleryMaxAggregateInputType
  }

  export type GetMenu_alleryAggregateType<T extends Menu_alleryAggregateArgs> = {
        [P in keyof T & keyof AggregateMenu_allery]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMenu_allery[P]>
      : GetScalarType<T[P], AggregateMenu_allery[P]>
  }




  export type menu_alleryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: menu_alleryWhereInput
    orderBy?: menu_alleryOrderByWithAggregationInput | menu_alleryOrderByWithAggregationInput[]
    by: Menu_alleryScalarFieldEnum[] | Menu_alleryScalarFieldEnum
    having?: menu_alleryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Menu_alleryCountAggregateInputType | true
    _avg?: Menu_alleryAvgAggregateInputType
    _sum?: Menu_allerySumAggregateInputType
    _min?: Menu_alleryMinAggregateInputType
    _max?: Menu_alleryMaxAggregateInputType
  }

  export type Menu_alleryGroupByOutputType = {
    menu_id: bigint
    allergy_id: bigint
    _count: Menu_alleryCountAggregateOutputType | null
    _avg: Menu_alleryAvgAggregateOutputType | null
    _sum: Menu_allerySumAggregateOutputType | null
    _min: Menu_alleryMinAggregateOutputType | null
    _max: Menu_alleryMaxAggregateOutputType | null
  }

  type GetMenu_alleryGroupByPayload<T extends menu_alleryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Menu_alleryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Menu_alleryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Menu_alleryGroupByOutputType[P]>
            : GetScalarType<T[P], Menu_alleryGroupByOutputType[P]>
        }
      >
    >


  export type menu_allerySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    menu_id?: boolean
    allergy_id?: boolean
    allery?: boolean | allergyDefaultArgs<ExtArgs>
    menu?: boolean | menuDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["menu_allery"]>



  export type menu_allerySelectScalar = {
    menu_id?: boolean
    allergy_id?: boolean
  }

  export type menu_alleryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"menu_id" | "allergy_id", ExtArgs["result"]["menu_allery"]>
  export type menu_alleryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    allery?: boolean | allergyDefaultArgs<ExtArgs>
    menu?: boolean | menuDefaultArgs<ExtArgs>
  }

  export type $menu_alleryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "menu_allery"
    objects: {
      allery: Prisma.$allergyPayload<ExtArgs>
      menu: Prisma.$menuPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      menu_id: bigint
      allergy_id: bigint
    }, ExtArgs["result"]["menu_allery"]>
    composites: {}
  }

  type menu_alleryGetPayload<S extends boolean | null | undefined | menu_alleryDefaultArgs> = $Result.GetResult<Prisma.$menu_alleryPayload, S>

  type menu_alleryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<menu_alleryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Menu_alleryCountAggregateInputType | true
    }

  export interface menu_alleryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['menu_allery'], meta: { name: 'menu_allery' } }
    /**
     * Find zero or one Menu_allery that matches the filter.
     * @param {menu_alleryFindUniqueArgs} args - Arguments to find a Menu_allery
     * @example
     * // Get one Menu_allery
     * const menu_allery = await prisma.menu_allery.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends menu_alleryFindUniqueArgs>(args: SelectSubset<T, menu_alleryFindUniqueArgs<ExtArgs>>): Prisma__menu_alleryClient<$Result.GetResult<Prisma.$menu_alleryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Menu_allery that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {menu_alleryFindUniqueOrThrowArgs} args - Arguments to find a Menu_allery
     * @example
     * // Get one Menu_allery
     * const menu_allery = await prisma.menu_allery.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends menu_alleryFindUniqueOrThrowArgs>(args: SelectSubset<T, menu_alleryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__menu_alleryClient<$Result.GetResult<Prisma.$menu_alleryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Menu_allery that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {menu_alleryFindFirstArgs} args - Arguments to find a Menu_allery
     * @example
     * // Get one Menu_allery
     * const menu_allery = await prisma.menu_allery.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends menu_alleryFindFirstArgs>(args?: SelectSubset<T, menu_alleryFindFirstArgs<ExtArgs>>): Prisma__menu_alleryClient<$Result.GetResult<Prisma.$menu_alleryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Menu_allery that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {menu_alleryFindFirstOrThrowArgs} args - Arguments to find a Menu_allery
     * @example
     * // Get one Menu_allery
     * const menu_allery = await prisma.menu_allery.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends menu_alleryFindFirstOrThrowArgs>(args?: SelectSubset<T, menu_alleryFindFirstOrThrowArgs<ExtArgs>>): Prisma__menu_alleryClient<$Result.GetResult<Prisma.$menu_alleryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Menu_alleries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {menu_alleryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Menu_alleries
     * const menu_alleries = await prisma.menu_allery.findMany()
     * 
     * // Get first 10 Menu_alleries
     * const menu_alleries = await prisma.menu_allery.findMany({ take: 10 })
     * 
     * // Only select the `menu_id`
     * const menu_alleryWithMenu_idOnly = await prisma.menu_allery.findMany({ select: { menu_id: true } })
     * 
     */
    findMany<T extends menu_alleryFindManyArgs>(args?: SelectSubset<T, menu_alleryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$menu_alleryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Menu_allery.
     * @param {menu_alleryCreateArgs} args - Arguments to create a Menu_allery.
     * @example
     * // Create one Menu_allery
     * const Menu_allery = await prisma.menu_allery.create({
     *   data: {
     *     // ... data to create a Menu_allery
     *   }
     * })
     * 
     */
    create<T extends menu_alleryCreateArgs>(args: SelectSubset<T, menu_alleryCreateArgs<ExtArgs>>): Prisma__menu_alleryClient<$Result.GetResult<Prisma.$menu_alleryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Menu_alleries.
     * @param {menu_alleryCreateManyArgs} args - Arguments to create many Menu_alleries.
     * @example
     * // Create many Menu_alleries
     * const menu_allery = await prisma.menu_allery.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends menu_alleryCreateManyArgs>(args?: SelectSubset<T, menu_alleryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Menu_allery.
     * @param {menu_alleryDeleteArgs} args - Arguments to delete one Menu_allery.
     * @example
     * // Delete one Menu_allery
     * const Menu_allery = await prisma.menu_allery.delete({
     *   where: {
     *     // ... filter to delete one Menu_allery
     *   }
     * })
     * 
     */
    delete<T extends menu_alleryDeleteArgs>(args: SelectSubset<T, menu_alleryDeleteArgs<ExtArgs>>): Prisma__menu_alleryClient<$Result.GetResult<Prisma.$menu_alleryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Menu_allery.
     * @param {menu_alleryUpdateArgs} args - Arguments to update one Menu_allery.
     * @example
     * // Update one Menu_allery
     * const menu_allery = await prisma.menu_allery.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends menu_alleryUpdateArgs>(args: SelectSubset<T, menu_alleryUpdateArgs<ExtArgs>>): Prisma__menu_alleryClient<$Result.GetResult<Prisma.$menu_alleryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Menu_alleries.
     * @param {menu_alleryDeleteManyArgs} args - Arguments to filter Menu_alleries to delete.
     * @example
     * // Delete a few Menu_alleries
     * const { count } = await prisma.menu_allery.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends menu_alleryDeleteManyArgs>(args?: SelectSubset<T, menu_alleryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Menu_alleries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {menu_alleryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Menu_alleries
     * const menu_allery = await prisma.menu_allery.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends menu_alleryUpdateManyArgs>(args: SelectSubset<T, menu_alleryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Menu_allery.
     * @param {menu_alleryUpsertArgs} args - Arguments to update or create a Menu_allery.
     * @example
     * // Update or create a Menu_allery
     * const menu_allery = await prisma.menu_allery.upsert({
     *   create: {
     *     // ... data to create a Menu_allery
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Menu_allery we want to update
     *   }
     * })
     */
    upsert<T extends menu_alleryUpsertArgs>(args: SelectSubset<T, menu_alleryUpsertArgs<ExtArgs>>): Prisma__menu_alleryClient<$Result.GetResult<Prisma.$menu_alleryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Menu_alleries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {menu_alleryCountArgs} args - Arguments to filter Menu_alleries to count.
     * @example
     * // Count the number of Menu_alleries
     * const count = await prisma.menu_allery.count({
     *   where: {
     *     // ... the filter for the Menu_alleries we want to count
     *   }
     * })
    **/
    count<T extends menu_alleryCountArgs>(
      args?: Subset<T, menu_alleryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Menu_alleryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Menu_allery.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Menu_alleryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Menu_alleryAggregateArgs>(args: Subset<T, Menu_alleryAggregateArgs>): Prisma.PrismaPromise<GetMenu_alleryAggregateType<T>>

    /**
     * Group by Menu_allery.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {menu_alleryGroupByArgs} args - Group by arguments.
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
      T extends menu_alleryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: menu_alleryGroupByArgs['orderBy'] }
        : { orderBy?: menu_alleryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, menu_alleryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMenu_alleryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the menu_allery model
   */
  readonly fields: menu_alleryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for menu_allery.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__menu_alleryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    allery<T extends allergyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, allergyDefaultArgs<ExtArgs>>): Prisma__allergyClient<$Result.GetResult<Prisma.$allergyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    menu<T extends menuDefaultArgs<ExtArgs> = {}>(args?: Subset<T, menuDefaultArgs<ExtArgs>>): Prisma__menuClient<$Result.GetResult<Prisma.$menuPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the menu_allery model
   */
  interface menu_alleryFieldRefs {
    readonly menu_id: FieldRef<"menu_allery", 'BigInt'>
    readonly allergy_id: FieldRef<"menu_allery", 'BigInt'>
  }
    

  // Custom InputTypes
  /**
   * menu_allery findUnique
   */
  export type menu_alleryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the menu_allery
     */
    select?: menu_allerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the menu_allery
     */
    omit?: menu_alleryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: menu_alleryInclude<ExtArgs> | null
    /**
     * Filter, which menu_allery to fetch.
     */
    where: menu_alleryWhereUniqueInput
  }

  /**
   * menu_allery findUniqueOrThrow
   */
  export type menu_alleryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the menu_allery
     */
    select?: menu_allerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the menu_allery
     */
    omit?: menu_alleryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: menu_alleryInclude<ExtArgs> | null
    /**
     * Filter, which menu_allery to fetch.
     */
    where: menu_alleryWhereUniqueInput
  }

  /**
   * menu_allery findFirst
   */
  export type menu_alleryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the menu_allery
     */
    select?: menu_allerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the menu_allery
     */
    omit?: menu_alleryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: menu_alleryInclude<ExtArgs> | null
    /**
     * Filter, which menu_allery to fetch.
     */
    where?: menu_alleryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of menu_alleries to fetch.
     */
    orderBy?: menu_alleryOrderByWithRelationInput | menu_alleryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for menu_alleries.
     */
    cursor?: menu_alleryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` menu_alleries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` menu_alleries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of menu_alleries.
     */
    distinct?: Menu_alleryScalarFieldEnum | Menu_alleryScalarFieldEnum[]
  }

  /**
   * menu_allery findFirstOrThrow
   */
  export type menu_alleryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the menu_allery
     */
    select?: menu_allerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the menu_allery
     */
    omit?: menu_alleryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: menu_alleryInclude<ExtArgs> | null
    /**
     * Filter, which menu_allery to fetch.
     */
    where?: menu_alleryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of menu_alleries to fetch.
     */
    orderBy?: menu_alleryOrderByWithRelationInput | menu_alleryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for menu_alleries.
     */
    cursor?: menu_alleryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` menu_alleries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` menu_alleries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of menu_alleries.
     */
    distinct?: Menu_alleryScalarFieldEnum | Menu_alleryScalarFieldEnum[]
  }

  /**
   * menu_allery findMany
   */
  export type menu_alleryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the menu_allery
     */
    select?: menu_allerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the menu_allery
     */
    omit?: menu_alleryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: menu_alleryInclude<ExtArgs> | null
    /**
     * Filter, which menu_alleries to fetch.
     */
    where?: menu_alleryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of menu_alleries to fetch.
     */
    orderBy?: menu_alleryOrderByWithRelationInput | menu_alleryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing menu_alleries.
     */
    cursor?: menu_alleryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` menu_alleries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` menu_alleries.
     */
    skip?: number
    distinct?: Menu_alleryScalarFieldEnum | Menu_alleryScalarFieldEnum[]
  }

  /**
   * menu_allery create
   */
  export type menu_alleryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the menu_allery
     */
    select?: menu_allerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the menu_allery
     */
    omit?: menu_alleryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: menu_alleryInclude<ExtArgs> | null
    /**
     * The data needed to create a menu_allery.
     */
    data: XOR<menu_alleryCreateInput, menu_alleryUncheckedCreateInput>
  }

  /**
   * menu_allery createMany
   */
  export type menu_alleryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many menu_alleries.
     */
    data: menu_alleryCreateManyInput | menu_alleryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * menu_allery update
   */
  export type menu_alleryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the menu_allery
     */
    select?: menu_allerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the menu_allery
     */
    omit?: menu_alleryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: menu_alleryInclude<ExtArgs> | null
    /**
     * The data needed to update a menu_allery.
     */
    data: XOR<menu_alleryUpdateInput, menu_alleryUncheckedUpdateInput>
    /**
     * Choose, which menu_allery to update.
     */
    where: menu_alleryWhereUniqueInput
  }

  /**
   * menu_allery updateMany
   */
  export type menu_alleryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update menu_alleries.
     */
    data: XOR<menu_alleryUpdateManyMutationInput, menu_alleryUncheckedUpdateManyInput>
    /**
     * Filter which menu_alleries to update
     */
    where?: menu_alleryWhereInput
    /**
     * Limit how many menu_alleries to update.
     */
    limit?: number
  }

  /**
   * menu_allery upsert
   */
  export type menu_alleryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the menu_allery
     */
    select?: menu_allerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the menu_allery
     */
    omit?: menu_alleryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: menu_alleryInclude<ExtArgs> | null
    /**
     * The filter to search for the menu_allery to update in case it exists.
     */
    where: menu_alleryWhereUniqueInput
    /**
     * In case the menu_allery found by the `where` argument doesn't exist, create a new menu_allery with this data.
     */
    create: XOR<menu_alleryCreateInput, menu_alleryUncheckedCreateInput>
    /**
     * In case the menu_allery was found with the provided `where` argument, update it with this data.
     */
    update: XOR<menu_alleryUpdateInput, menu_alleryUncheckedUpdateInput>
  }

  /**
   * menu_allery delete
   */
  export type menu_alleryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the menu_allery
     */
    select?: menu_allerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the menu_allery
     */
    omit?: menu_alleryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: menu_alleryInclude<ExtArgs> | null
    /**
     * Filter which menu_allery to delete.
     */
    where: menu_alleryWhereUniqueInput
  }

  /**
   * menu_allery deleteMany
   */
  export type menu_alleryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which menu_alleries to delete
     */
    where?: menu_alleryWhereInput
    /**
     * Limit how many menu_alleries to delete.
     */
    limit?: number
  }

  /**
   * menu_allery without action
   */
  export type menu_alleryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the menu_allery
     */
    select?: menu_allerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the menu_allery
     */
    omit?: menu_alleryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: menu_alleryInclude<ExtArgs> | null
  }


  /**
   * Model menu_vitamin
   */

  export type AggregateMenu_vitamin = {
    _count: Menu_vitaminCountAggregateOutputType | null
    _avg: Menu_vitaminAvgAggregateOutputType | null
    _sum: Menu_vitaminSumAggregateOutputType | null
    _min: Menu_vitaminMinAggregateOutputType | null
    _max: Menu_vitaminMaxAggregateOutputType | null
  }

  export type Menu_vitaminAvgAggregateOutputType = {
    menu_id: number | null
    vitamin_id: number | null
  }

  export type Menu_vitaminSumAggregateOutputType = {
    menu_id: bigint | null
    vitamin_id: bigint | null
  }

  export type Menu_vitaminMinAggregateOutputType = {
    menu_id: bigint | null
    vitamin_id: bigint | null
  }

  export type Menu_vitaminMaxAggregateOutputType = {
    menu_id: bigint | null
    vitamin_id: bigint | null
  }

  export type Menu_vitaminCountAggregateOutputType = {
    menu_id: number
    vitamin_id: number
    _all: number
  }


  export type Menu_vitaminAvgAggregateInputType = {
    menu_id?: true
    vitamin_id?: true
  }

  export type Menu_vitaminSumAggregateInputType = {
    menu_id?: true
    vitamin_id?: true
  }

  export type Menu_vitaminMinAggregateInputType = {
    menu_id?: true
    vitamin_id?: true
  }

  export type Menu_vitaminMaxAggregateInputType = {
    menu_id?: true
    vitamin_id?: true
  }

  export type Menu_vitaminCountAggregateInputType = {
    menu_id?: true
    vitamin_id?: true
    _all?: true
  }

  export type Menu_vitaminAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which menu_vitamin to aggregate.
     */
    where?: menu_vitaminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of menu_vitamins to fetch.
     */
    orderBy?: menu_vitaminOrderByWithRelationInput | menu_vitaminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: menu_vitaminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` menu_vitamins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` menu_vitamins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned menu_vitamins
    **/
    _count?: true | Menu_vitaminCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Menu_vitaminAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Menu_vitaminSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Menu_vitaminMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Menu_vitaminMaxAggregateInputType
  }

  export type GetMenu_vitaminAggregateType<T extends Menu_vitaminAggregateArgs> = {
        [P in keyof T & keyof AggregateMenu_vitamin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMenu_vitamin[P]>
      : GetScalarType<T[P], AggregateMenu_vitamin[P]>
  }




  export type menu_vitaminGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: menu_vitaminWhereInput
    orderBy?: menu_vitaminOrderByWithAggregationInput | menu_vitaminOrderByWithAggregationInput[]
    by: Menu_vitaminScalarFieldEnum[] | Menu_vitaminScalarFieldEnum
    having?: menu_vitaminScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Menu_vitaminCountAggregateInputType | true
    _avg?: Menu_vitaminAvgAggregateInputType
    _sum?: Menu_vitaminSumAggregateInputType
    _min?: Menu_vitaminMinAggregateInputType
    _max?: Menu_vitaminMaxAggregateInputType
  }

  export type Menu_vitaminGroupByOutputType = {
    menu_id: bigint
    vitamin_id: bigint
    _count: Menu_vitaminCountAggregateOutputType | null
    _avg: Menu_vitaminAvgAggregateOutputType | null
    _sum: Menu_vitaminSumAggregateOutputType | null
    _min: Menu_vitaminMinAggregateOutputType | null
    _max: Menu_vitaminMaxAggregateOutputType | null
  }

  type GetMenu_vitaminGroupByPayload<T extends menu_vitaminGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Menu_vitaminGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Menu_vitaminGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Menu_vitaminGroupByOutputType[P]>
            : GetScalarType<T[P], Menu_vitaminGroupByOutputType[P]>
        }
      >
    >


  export type menu_vitaminSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    menu_id?: boolean
    vitamin_id?: boolean
    menu?: boolean | menuDefaultArgs<ExtArgs>
    vitamin?: boolean | vitaminDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["menu_vitamin"]>



  export type menu_vitaminSelectScalar = {
    menu_id?: boolean
    vitamin_id?: boolean
  }

  export type menu_vitaminOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"menu_id" | "vitamin_id", ExtArgs["result"]["menu_vitamin"]>
  export type menu_vitaminInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    menu?: boolean | menuDefaultArgs<ExtArgs>
    vitamin?: boolean | vitaminDefaultArgs<ExtArgs>
  }

  export type $menu_vitaminPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "menu_vitamin"
    objects: {
      menu: Prisma.$menuPayload<ExtArgs>
      vitamin: Prisma.$vitaminPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      menu_id: bigint
      vitamin_id: bigint
    }, ExtArgs["result"]["menu_vitamin"]>
    composites: {}
  }

  type menu_vitaminGetPayload<S extends boolean | null | undefined | menu_vitaminDefaultArgs> = $Result.GetResult<Prisma.$menu_vitaminPayload, S>

  type menu_vitaminCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<menu_vitaminFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Menu_vitaminCountAggregateInputType | true
    }

  export interface menu_vitaminDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['menu_vitamin'], meta: { name: 'menu_vitamin' } }
    /**
     * Find zero or one Menu_vitamin that matches the filter.
     * @param {menu_vitaminFindUniqueArgs} args - Arguments to find a Menu_vitamin
     * @example
     * // Get one Menu_vitamin
     * const menu_vitamin = await prisma.menu_vitamin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends menu_vitaminFindUniqueArgs>(args: SelectSubset<T, menu_vitaminFindUniqueArgs<ExtArgs>>): Prisma__menu_vitaminClient<$Result.GetResult<Prisma.$menu_vitaminPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Menu_vitamin that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {menu_vitaminFindUniqueOrThrowArgs} args - Arguments to find a Menu_vitamin
     * @example
     * // Get one Menu_vitamin
     * const menu_vitamin = await prisma.menu_vitamin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends menu_vitaminFindUniqueOrThrowArgs>(args: SelectSubset<T, menu_vitaminFindUniqueOrThrowArgs<ExtArgs>>): Prisma__menu_vitaminClient<$Result.GetResult<Prisma.$menu_vitaminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Menu_vitamin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {menu_vitaminFindFirstArgs} args - Arguments to find a Menu_vitamin
     * @example
     * // Get one Menu_vitamin
     * const menu_vitamin = await prisma.menu_vitamin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends menu_vitaminFindFirstArgs>(args?: SelectSubset<T, menu_vitaminFindFirstArgs<ExtArgs>>): Prisma__menu_vitaminClient<$Result.GetResult<Prisma.$menu_vitaminPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Menu_vitamin that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {menu_vitaminFindFirstOrThrowArgs} args - Arguments to find a Menu_vitamin
     * @example
     * // Get one Menu_vitamin
     * const menu_vitamin = await prisma.menu_vitamin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends menu_vitaminFindFirstOrThrowArgs>(args?: SelectSubset<T, menu_vitaminFindFirstOrThrowArgs<ExtArgs>>): Prisma__menu_vitaminClient<$Result.GetResult<Prisma.$menu_vitaminPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Menu_vitamins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {menu_vitaminFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Menu_vitamins
     * const menu_vitamins = await prisma.menu_vitamin.findMany()
     * 
     * // Get first 10 Menu_vitamins
     * const menu_vitamins = await prisma.menu_vitamin.findMany({ take: 10 })
     * 
     * // Only select the `menu_id`
     * const menu_vitaminWithMenu_idOnly = await prisma.menu_vitamin.findMany({ select: { menu_id: true } })
     * 
     */
    findMany<T extends menu_vitaminFindManyArgs>(args?: SelectSubset<T, menu_vitaminFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$menu_vitaminPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Menu_vitamin.
     * @param {menu_vitaminCreateArgs} args - Arguments to create a Menu_vitamin.
     * @example
     * // Create one Menu_vitamin
     * const Menu_vitamin = await prisma.menu_vitamin.create({
     *   data: {
     *     // ... data to create a Menu_vitamin
     *   }
     * })
     * 
     */
    create<T extends menu_vitaminCreateArgs>(args: SelectSubset<T, menu_vitaminCreateArgs<ExtArgs>>): Prisma__menu_vitaminClient<$Result.GetResult<Prisma.$menu_vitaminPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Menu_vitamins.
     * @param {menu_vitaminCreateManyArgs} args - Arguments to create many Menu_vitamins.
     * @example
     * // Create many Menu_vitamins
     * const menu_vitamin = await prisma.menu_vitamin.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends menu_vitaminCreateManyArgs>(args?: SelectSubset<T, menu_vitaminCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Menu_vitamin.
     * @param {menu_vitaminDeleteArgs} args - Arguments to delete one Menu_vitamin.
     * @example
     * // Delete one Menu_vitamin
     * const Menu_vitamin = await prisma.menu_vitamin.delete({
     *   where: {
     *     // ... filter to delete one Menu_vitamin
     *   }
     * })
     * 
     */
    delete<T extends menu_vitaminDeleteArgs>(args: SelectSubset<T, menu_vitaminDeleteArgs<ExtArgs>>): Prisma__menu_vitaminClient<$Result.GetResult<Prisma.$menu_vitaminPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Menu_vitamin.
     * @param {menu_vitaminUpdateArgs} args - Arguments to update one Menu_vitamin.
     * @example
     * // Update one Menu_vitamin
     * const menu_vitamin = await prisma.menu_vitamin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends menu_vitaminUpdateArgs>(args: SelectSubset<T, menu_vitaminUpdateArgs<ExtArgs>>): Prisma__menu_vitaminClient<$Result.GetResult<Prisma.$menu_vitaminPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Menu_vitamins.
     * @param {menu_vitaminDeleteManyArgs} args - Arguments to filter Menu_vitamins to delete.
     * @example
     * // Delete a few Menu_vitamins
     * const { count } = await prisma.menu_vitamin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends menu_vitaminDeleteManyArgs>(args?: SelectSubset<T, menu_vitaminDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Menu_vitamins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {menu_vitaminUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Menu_vitamins
     * const menu_vitamin = await prisma.menu_vitamin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends menu_vitaminUpdateManyArgs>(args: SelectSubset<T, menu_vitaminUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Menu_vitamin.
     * @param {menu_vitaminUpsertArgs} args - Arguments to update or create a Menu_vitamin.
     * @example
     * // Update or create a Menu_vitamin
     * const menu_vitamin = await prisma.menu_vitamin.upsert({
     *   create: {
     *     // ... data to create a Menu_vitamin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Menu_vitamin we want to update
     *   }
     * })
     */
    upsert<T extends menu_vitaminUpsertArgs>(args: SelectSubset<T, menu_vitaminUpsertArgs<ExtArgs>>): Prisma__menu_vitaminClient<$Result.GetResult<Prisma.$menu_vitaminPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Menu_vitamins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {menu_vitaminCountArgs} args - Arguments to filter Menu_vitamins to count.
     * @example
     * // Count the number of Menu_vitamins
     * const count = await prisma.menu_vitamin.count({
     *   where: {
     *     // ... the filter for the Menu_vitamins we want to count
     *   }
     * })
    **/
    count<T extends menu_vitaminCountArgs>(
      args?: Subset<T, menu_vitaminCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Menu_vitaminCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Menu_vitamin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Menu_vitaminAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Menu_vitaminAggregateArgs>(args: Subset<T, Menu_vitaminAggregateArgs>): Prisma.PrismaPromise<GetMenu_vitaminAggregateType<T>>

    /**
     * Group by Menu_vitamin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {menu_vitaminGroupByArgs} args - Group by arguments.
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
      T extends menu_vitaminGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: menu_vitaminGroupByArgs['orderBy'] }
        : { orderBy?: menu_vitaminGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, menu_vitaminGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMenu_vitaminGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the menu_vitamin model
   */
  readonly fields: menu_vitaminFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for menu_vitamin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__menu_vitaminClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    menu<T extends menuDefaultArgs<ExtArgs> = {}>(args?: Subset<T, menuDefaultArgs<ExtArgs>>): Prisma__menuClient<$Result.GetResult<Prisma.$menuPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    vitamin<T extends vitaminDefaultArgs<ExtArgs> = {}>(args?: Subset<T, vitaminDefaultArgs<ExtArgs>>): Prisma__vitaminClient<$Result.GetResult<Prisma.$vitaminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the menu_vitamin model
   */
  interface menu_vitaminFieldRefs {
    readonly menu_id: FieldRef<"menu_vitamin", 'BigInt'>
    readonly vitamin_id: FieldRef<"menu_vitamin", 'BigInt'>
  }
    

  // Custom InputTypes
  /**
   * menu_vitamin findUnique
   */
  export type menu_vitaminFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the menu_vitamin
     */
    select?: menu_vitaminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the menu_vitamin
     */
    omit?: menu_vitaminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: menu_vitaminInclude<ExtArgs> | null
    /**
     * Filter, which menu_vitamin to fetch.
     */
    where: menu_vitaminWhereUniqueInput
  }

  /**
   * menu_vitamin findUniqueOrThrow
   */
  export type menu_vitaminFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the menu_vitamin
     */
    select?: menu_vitaminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the menu_vitamin
     */
    omit?: menu_vitaminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: menu_vitaminInclude<ExtArgs> | null
    /**
     * Filter, which menu_vitamin to fetch.
     */
    where: menu_vitaminWhereUniqueInput
  }

  /**
   * menu_vitamin findFirst
   */
  export type menu_vitaminFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the menu_vitamin
     */
    select?: menu_vitaminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the menu_vitamin
     */
    omit?: menu_vitaminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: menu_vitaminInclude<ExtArgs> | null
    /**
     * Filter, which menu_vitamin to fetch.
     */
    where?: menu_vitaminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of menu_vitamins to fetch.
     */
    orderBy?: menu_vitaminOrderByWithRelationInput | menu_vitaminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for menu_vitamins.
     */
    cursor?: menu_vitaminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` menu_vitamins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` menu_vitamins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of menu_vitamins.
     */
    distinct?: Menu_vitaminScalarFieldEnum | Menu_vitaminScalarFieldEnum[]
  }

  /**
   * menu_vitamin findFirstOrThrow
   */
  export type menu_vitaminFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the menu_vitamin
     */
    select?: menu_vitaminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the menu_vitamin
     */
    omit?: menu_vitaminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: menu_vitaminInclude<ExtArgs> | null
    /**
     * Filter, which menu_vitamin to fetch.
     */
    where?: menu_vitaminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of menu_vitamins to fetch.
     */
    orderBy?: menu_vitaminOrderByWithRelationInput | menu_vitaminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for menu_vitamins.
     */
    cursor?: menu_vitaminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` menu_vitamins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` menu_vitamins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of menu_vitamins.
     */
    distinct?: Menu_vitaminScalarFieldEnum | Menu_vitaminScalarFieldEnum[]
  }

  /**
   * menu_vitamin findMany
   */
  export type menu_vitaminFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the menu_vitamin
     */
    select?: menu_vitaminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the menu_vitamin
     */
    omit?: menu_vitaminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: menu_vitaminInclude<ExtArgs> | null
    /**
     * Filter, which menu_vitamins to fetch.
     */
    where?: menu_vitaminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of menu_vitamins to fetch.
     */
    orderBy?: menu_vitaminOrderByWithRelationInput | menu_vitaminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing menu_vitamins.
     */
    cursor?: menu_vitaminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` menu_vitamins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` menu_vitamins.
     */
    skip?: number
    distinct?: Menu_vitaminScalarFieldEnum | Menu_vitaminScalarFieldEnum[]
  }

  /**
   * menu_vitamin create
   */
  export type menu_vitaminCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the menu_vitamin
     */
    select?: menu_vitaminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the menu_vitamin
     */
    omit?: menu_vitaminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: menu_vitaminInclude<ExtArgs> | null
    /**
     * The data needed to create a menu_vitamin.
     */
    data: XOR<menu_vitaminCreateInput, menu_vitaminUncheckedCreateInput>
  }

  /**
   * menu_vitamin createMany
   */
  export type menu_vitaminCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many menu_vitamins.
     */
    data: menu_vitaminCreateManyInput | menu_vitaminCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * menu_vitamin update
   */
  export type menu_vitaminUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the menu_vitamin
     */
    select?: menu_vitaminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the menu_vitamin
     */
    omit?: menu_vitaminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: menu_vitaminInclude<ExtArgs> | null
    /**
     * The data needed to update a menu_vitamin.
     */
    data: XOR<menu_vitaminUpdateInput, menu_vitaminUncheckedUpdateInput>
    /**
     * Choose, which menu_vitamin to update.
     */
    where: menu_vitaminWhereUniqueInput
  }

  /**
   * menu_vitamin updateMany
   */
  export type menu_vitaminUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update menu_vitamins.
     */
    data: XOR<menu_vitaminUpdateManyMutationInput, menu_vitaminUncheckedUpdateManyInput>
    /**
     * Filter which menu_vitamins to update
     */
    where?: menu_vitaminWhereInput
    /**
     * Limit how many menu_vitamins to update.
     */
    limit?: number
  }

  /**
   * menu_vitamin upsert
   */
  export type menu_vitaminUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the menu_vitamin
     */
    select?: menu_vitaminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the menu_vitamin
     */
    omit?: menu_vitaminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: menu_vitaminInclude<ExtArgs> | null
    /**
     * The filter to search for the menu_vitamin to update in case it exists.
     */
    where: menu_vitaminWhereUniqueInput
    /**
     * In case the menu_vitamin found by the `where` argument doesn't exist, create a new menu_vitamin with this data.
     */
    create: XOR<menu_vitaminCreateInput, menu_vitaminUncheckedCreateInput>
    /**
     * In case the menu_vitamin was found with the provided `where` argument, update it with this data.
     */
    update: XOR<menu_vitaminUpdateInput, menu_vitaminUncheckedUpdateInput>
  }

  /**
   * menu_vitamin delete
   */
  export type menu_vitaminDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the menu_vitamin
     */
    select?: menu_vitaminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the menu_vitamin
     */
    omit?: menu_vitaminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: menu_vitaminInclude<ExtArgs> | null
    /**
     * Filter which menu_vitamin to delete.
     */
    where: menu_vitaminWhereUniqueInput
  }

  /**
   * menu_vitamin deleteMany
   */
  export type menu_vitaminDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which menu_vitamins to delete
     */
    where?: menu_vitaminWhereInput
    /**
     * Limit how many menu_vitamins to delete.
     */
    limit?: number
  }

  /**
   * menu_vitamin without action
   */
  export type menu_vitaminDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the menu_vitamin
     */
    select?: menu_vitaminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the menu_vitamin
     */
    omit?: menu_vitaminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: menu_vitaminInclude<ExtArgs> | null
  }


  /**
   * Model spin_result
   */

  export type AggregateSpin_result = {
    _count: Spin_resultCountAggregateOutputType | null
    _avg: Spin_resultAvgAggregateOutputType | null
    _sum: Spin_resultSumAggregateOutputType | null
    _min: Spin_resultMinAggregateOutputType | null
    _max: Spin_resultMaxAggregateOutputType | null
  }

  export type Spin_resultAvgAggregateOutputType = {
    id: number | null
    stopped_angle: number | null
    distance_to_boundary: number | null
    rank: number | null
    closest_menu_id: number | null
  }

  export type Spin_resultSumAggregateOutputType = {
    id: bigint | null
    stopped_angle: number | null
    distance_to_boundary: number | null
    rank: number | null
    closest_menu_id: bigint | null
  }

  export type Spin_resultMinAggregateOutputType = {
    id: bigint | null
    nickname: string | null
    stopped_angle: number | null
    distance_to_boundary: number | null
    rank: number | null
    spin_at: Date | null
    battle_id: string | null
    closest_menu_id: bigint | null
  }

  export type Spin_resultMaxAggregateOutputType = {
    id: bigint | null
    nickname: string | null
    stopped_angle: number | null
    distance_to_boundary: number | null
    rank: number | null
    spin_at: Date | null
    battle_id: string | null
    closest_menu_id: bigint | null
  }

  export type Spin_resultCountAggregateOutputType = {
    id: number
    nickname: number
    stopped_angle: number
    distance_to_boundary: number
    rank: number
    spin_at: number
    battle_id: number
    closest_menu_id: number
    _all: number
  }


  export type Spin_resultAvgAggregateInputType = {
    id?: true
    stopped_angle?: true
    distance_to_boundary?: true
    rank?: true
    closest_menu_id?: true
  }

  export type Spin_resultSumAggregateInputType = {
    id?: true
    stopped_angle?: true
    distance_to_boundary?: true
    rank?: true
    closest_menu_id?: true
  }

  export type Spin_resultMinAggregateInputType = {
    id?: true
    nickname?: true
    stopped_angle?: true
    distance_to_boundary?: true
    rank?: true
    spin_at?: true
    battle_id?: true
    closest_menu_id?: true
  }

  export type Spin_resultMaxAggregateInputType = {
    id?: true
    nickname?: true
    stopped_angle?: true
    distance_to_boundary?: true
    rank?: true
    spin_at?: true
    battle_id?: true
    closest_menu_id?: true
  }

  export type Spin_resultCountAggregateInputType = {
    id?: true
    nickname?: true
    stopped_angle?: true
    distance_to_boundary?: true
    rank?: true
    spin_at?: true
    battle_id?: true
    closest_menu_id?: true
    _all?: true
  }

  export type Spin_resultAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which spin_result to aggregate.
     */
    where?: spin_resultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of spin_results to fetch.
     */
    orderBy?: spin_resultOrderByWithRelationInput | spin_resultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: spin_resultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` spin_results from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` spin_results.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned spin_results
    **/
    _count?: true | Spin_resultCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Spin_resultAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Spin_resultSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Spin_resultMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Spin_resultMaxAggregateInputType
  }

  export type GetSpin_resultAggregateType<T extends Spin_resultAggregateArgs> = {
        [P in keyof T & keyof AggregateSpin_result]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSpin_result[P]>
      : GetScalarType<T[P], AggregateSpin_result[P]>
  }




  export type spin_resultGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: spin_resultWhereInput
    orderBy?: spin_resultOrderByWithAggregationInput | spin_resultOrderByWithAggregationInput[]
    by: Spin_resultScalarFieldEnum[] | Spin_resultScalarFieldEnum
    having?: spin_resultScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Spin_resultCountAggregateInputType | true
    _avg?: Spin_resultAvgAggregateInputType
    _sum?: Spin_resultSumAggregateInputType
    _min?: Spin_resultMinAggregateInputType
    _max?: Spin_resultMaxAggregateInputType
  }

  export type Spin_resultGroupByOutputType = {
    id: bigint
    nickname: string | null
    stopped_angle: number | null
    distance_to_boundary: number | null
    rank: number | null
    spin_at: Date | null
    battle_id: string
    closest_menu_id: bigint
    _count: Spin_resultCountAggregateOutputType | null
    _avg: Spin_resultAvgAggregateOutputType | null
    _sum: Spin_resultSumAggregateOutputType | null
    _min: Spin_resultMinAggregateOutputType | null
    _max: Spin_resultMaxAggregateOutputType | null
  }

  type GetSpin_resultGroupByPayload<T extends spin_resultGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Spin_resultGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Spin_resultGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Spin_resultGroupByOutputType[P]>
            : GetScalarType<T[P], Spin_resultGroupByOutputType[P]>
        }
      >
    >


  export type spin_resultSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nickname?: boolean
    stopped_angle?: boolean
    distance_to_boundary?: boolean
    rank?: boolean
    spin_at?: boolean
    battle_id?: boolean
    closest_menu_id?: boolean
    battle?: boolean | battleDefaultArgs<ExtArgs>
    menu?: boolean | menuDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["spin_result"]>



  export type spin_resultSelectScalar = {
    id?: boolean
    nickname?: boolean
    stopped_angle?: boolean
    distance_to_boundary?: boolean
    rank?: boolean
    spin_at?: boolean
    battle_id?: boolean
    closest_menu_id?: boolean
  }

  export type spin_resultOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nickname" | "stopped_angle" | "distance_to_boundary" | "rank" | "spin_at" | "battle_id" | "closest_menu_id", ExtArgs["result"]["spin_result"]>
  export type spin_resultInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    battle?: boolean | battleDefaultArgs<ExtArgs>
    menu?: boolean | menuDefaultArgs<ExtArgs>
  }

  export type $spin_resultPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "spin_result"
    objects: {
      battle: Prisma.$battlePayload<ExtArgs>
      menu: Prisma.$menuPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      nickname: string | null
      stopped_angle: number | null
      distance_to_boundary: number | null
      rank: number | null
      spin_at: Date | null
      battle_id: string
      closest_menu_id: bigint
    }, ExtArgs["result"]["spin_result"]>
    composites: {}
  }

  type spin_resultGetPayload<S extends boolean | null | undefined | spin_resultDefaultArgs> = $Result.GetResult<Prisma.$spin_resultPayload, S>

  type spin_resultCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<spin_resultFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Spin_resultCountAggregateInputType | true
    }

  export interface spin_resultDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['spin_result'], meta: { name: 'spin_result' } }
    /**
     * Find zero or one Spin_result that matches the filter.
     * @param {spin_resultFindUniqueArgs} args - Arguments to find a Spin_result
     * @example
     * // Get one Spin_result
     * const spin_result = await prisma.spin_result.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends spin_resultFindUniqueArgs>(args: SelectSubset<T, spin_resultFindUniqueArgs<ExtArgs>>): Prisma__spin_resultClient<$Result.GetResult<Prisma.$spin_resultPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Spin_result that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {spin_resultFindUniqueOrThrowArgs} args - Arguments to find a Spin_result
     * @example
     * // Get one Spin_result
     * const spin_result = await prisma.spin_result.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends spin_resultFindUniqueOrThrowArgs>(args: SelectSubset<T, spin_resultFindUniqueOrThrowArgs<ExtArgs>>): Prisma__spin_resultClient<$Result.GetResult<Prisma.$spin_resultPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Spin_result that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {spin_resultFindFirstArgs} args - Arguments to find a Spin_result
     * @example
     * // Get one Spin_result
     * const spin_result = await prisma.spin_result.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends spin_resultFindFirstArgs>(args?: SelectSubset<T, spin_resultFindFirstArgs<ExtArgs>>): Prisma__spin_resultClient<$Result.GetResult<Prisma.$spin_resultPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Spin_result that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {spin_resultFindFirstOrThrowArgs} args - Arguments to find a Spin_result
     * @example
     * // Get one Spin_result
     * const spin_result = await prisma.spin_result.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends spin_resultFindFirstOrThrowArgs>(args?: SelectSubset<T, spin_resultFindFirstOrThrowArgs<ExtArgs>>): Prisma__spin_resultClient<$Result.GetResult<Prisma.$spin_resultPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Spin_results that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {spin_resultFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Spin_results
     * const spin_results = await prisma.spin_result.findMany()
     * 
     * // Get first 10 Spin_results
     * const spin_results = await prisma.spin_result.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const spin_resultWithIdOnly = await prisma.spin_result.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends spin_resultFindManyArgs>(args?: SelectSubset<T, spin_resultFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$spin_resultPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Spin_result.
     * @param {spin_resultCreateArgs} args - Arguments to create a Spin_result.
     * @example
     * // Create one Spin_result
     * const Spin_result = await prisma.spin_result.create({
     *   data: {
     *     // ... data to create a Spin_result
     *   }
     * })
     * 
     */
    create<T extends spin_resultCreateArgs>(args: SelectSubset<T, spin_resultCreateArgs<ExtArgs>>): Prisma__spin_resultClient<$Result.GetResult<Prisma.$spin_resultPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Spin_results.
     * @param {spin_resultCreateManyArgs} args - Arguments to create many Spin_results.
     * @example
     * // Create many Spin_results
     * const spin_result = await prisma.spin_result.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends spin_resultCreateManyArgs>(args?: SelectSubset<T, spin_resultCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Spin_result.
     * @param {spin_resultDeleteArgs} args - Arguments to delete one Spin_result.
     * @example
     * // Delete one Spin_result
     * const Spin_result = await prisma.spin_result.delete({
     *   where: {
     *     // ... filter to delete one Spin_result
     *   }
     * })
     * 
     */
    delete<T extends spin_resultDeleteArgs>(args: SelectSubset<T, spin_resultDeleteArgs<ExtArgs>>): Prisma__spin_resultClient<$Result.GetResult<Prisma.$spin_resultPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Spin_result.
     * @param {spin_resultUpdateArgs} args - Arguments to update one Spin_result.
     * @example
     * // Update one Spin_result
     * const spin_result = await prisma.spin_result.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends spin_resultUpdateArgs>(args: SelectSubset<T, spin_resultUpdateArgs<ExtArgs>>): Prisma__spin_resultClient<$Result.GetResult<Prisma.$spin_resultPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Spin_results.
     * @param {spin_resultDeleteManyArgs} args - Arguments to filter Spin_results to delete.
     * @example
     * // Delete a few Spin_results
     * const { count } = await prisma.spin_result.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends spin_resultDeleteManyArgs>(args?: SelectSubset<T, spin_resultDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Spin_results.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {spin_resultUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Spin_results
     * const spin_result = await prisma.spin_result.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends spin_resultUpdateManyArgs>(args: SelectSubset<T, spin_resultUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Spin_result.
     * @param {spin_resultUpsertArgs} args - Arguments to update or create a Spin_result.
     * @example
     * // Update or create a Spin_result
     * const spin_result = await prisma.spin_result.upsert({
     *   create: {
     *     // ... data to create a Spin_result
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Spin_result we want to update
     *   }
     * })
     */
    upsert<T extends spin_resultUpsertArgs>(args: SelectSubset<T, spin_resultUpsertArgs<ExtArgs>>): Prisma__spin_resultClient<$Result.GetResult<Prisma.$spin_resultPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Spin_results.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {spin_resultCountArgs} args - Arguments to filter Spin_results to count.
     * @example
     * // Count the number of Spin_results
     * const count = await prisma.spin_result.count({
     *   where: {
     *     // ... the filter for the Spin_results we want to count
     *   }
     * })
    **/
    count<T extends spin_resultCountArgs>(
      args?: Subset<T, spin_resultCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Spin_resultCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Spin_result.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Spin_resultAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Spin_resultAggregateArgs>(args: Subset<T, Spin_resultAggregateArgs>): Prisma.PrismaPromise<GetSpin_resultAggregateType<T>>

    /**
     * Group by Spin_result.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {spin_resultGroupByArgs} args - Group by arguments.
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
      T extends spin_resultGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: spin_resultGroupByArgs['orderBy'] }
        : { orderBy?: spin_resultGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, spin_resultGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSpin_resultGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the spin_result model
   */
  readonly fields: spin_resultFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for spin_result.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__spin_resultClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    battle<T extends battleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, battleDefaultArgs<ExtArgs>>): Prisma__battleClient<$Result.GetResult<Prisma.$battlePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    menu<T extends menuDefaultArgs<ExtArgs> = {}>(args?: Subset<T, menuDefaultArgs<ExtArgs>>): Prisma__menuClient<$Result.GetResult<Prisma.$menuPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the spin_result model
   */
  interface spin_resultFieldRefs {
    readonly id: FieldRef<"spin_result", 'BigInt'>
    readonly nickname: FieldRef<"spin_result", 'String'>
    readonly stopped_angle: FieldRef<"spin_result", 'Float'>
    readonly distance_to_boundary: FieldRef<"spin_result", 'Float'>
    readonly rank: FieldRef<"spin_result", 'Int'>
    readonly spin_at: FieldRef<"spin_result", 'DateTime'>
    readonly battle_id: FieldRef<"spin_result", 'String'>
    readonly closest_menu_id: FieldRef<"spin_result", 'BigInt'>
  }
    

  // Custom InputTypes
  /**
   * spin_result findUnique
   */
  export type spin_resultFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the spin_result
     */
    select?: spin_resultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the spin_result
     */
    omit?: spin_resultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: spin_resultInclude<ExtArgs> | null
    /**
     * Filter, which spin_result to fetch.
     */
    where: spin_resultWhereUniqueInput
  }

  /**
   * spin_result findUniqueOrThrow
   */
  export type spin_resultFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the spin_result
     */
    select?: spin_resultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the spin_result
     */
    omit?: spin_resultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: spin_resultInclude<ExtArgs> | null
    /**
     * Filter, which spin_result to fetch.
     */
    where: spin_resultWhereUniqueInput
  }

  /**
   * spin_result findFirst
   */
  export type spin_resultFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the spin_result
     */
    select?: spin_resultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the spin_result
     */
    omit?: spin_resultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: spin_resultInclude<ExtArgs> | null
    /**
     * Filter, which spin_result to fetch.
     */
    where?: spin_resultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of spin_results to fetch.
     */
    orderBy?: spin_resultOrderByWithRelationInput | spin_resultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for spin_results.
     */
    cursor?: spin_resultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` spin_results from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` spin_results.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of spin_results.
     */
    distinct?: Spin_resultScalarFieldEnum | Spin_resultScalarFieldEnum[]
  }

  /**
   * spin_result findFirstOrThrow
   */
  export type spin_resultFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the spin_result
     */
    select?: spin_resultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the spin_result
     */
    omit?: spin_resultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: spin_resultInclude<ExtArgs> | null
    /**
     * Filter, which spin_result to fetch.
     */
    where?: spin_resultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of spin_results to fetch.
     */
    orderBy?: spin_resultOrderByWithRelationInput | spin_resultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for spin_results.
     */
    cursor?: spin_resultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` spin_results from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` spin_results.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of spin_results.
     */
    distinct?: Spin_resultScalarFieldEnum | Spin_resultScalarFieldEnum[]
  }

  /**
   * spin_result findMany
   */
  export type spin_resultFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the spin_result
     */
    select?: spin_resultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the spin_result
     */
    omit?: spin_resultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: spin_resultInclude<ExtArgs> | null
    /**
     * Filter, which spin_results to fetch.
     */
    where?: spin_resultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of spin_results to fetch.
     */
    orderBy?: spin_resultOrderByWithRelationInput | spin_resultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing spin_results.
     */
    cursor?: spin_resultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` spin_results from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` spin_results.
     */
    skip?: number
    distinct?: Spin_resultScalarFieldEnum | Spin_resultScalarFieldEnum[]
  }

  /**
   * spin_result create
   */
  export type spin_resultCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the spin_result
     */
    select?: spin_resultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the spin_result
     */
    omit?: spin_resultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: spin_resultInclude<ExtArgs> | null
    /**
     * The data needed to create a spin_result.
     */
    data: XOR<spin_resultCreateInput, spin_resultUncheckedCreateInput>
  }

  /**
   * spin_result createMany
   */
  export type spin_resultCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many spin_results.
     */
    data: spin_resultCreateManyInput | spin_resultCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * spin_result update
   */
  export type spin_resultUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the spin_result
     */
    select?: spin_resultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the spin_result
     */
    omit?: spin_resultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: spin_resultInclude<ExtArgs> | null
    /**
     * The data needed to update a spin_result.
     */
    data: XOR<spin_resultUpdateInput, spin_resultUncheckedUpdateInput>
    /**
     * Choose, which spin_result to update.
     */
    where: spin_resultWhereUniqueInput
  }

  /**
   * spin_result updateMany
   */
  export type spin_resultUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update spin_results.
     */
    data: XOR<spin_resultUpdateManyMutationInput, spin_resultUncheckedUpdateManyInput>
    /**
     * Filter which spin_results to update
     */
    where?: spin_resultWhereInput
    /**
     * Limit how many spin_results to update.
     */
    limit?: number
  }

  /**
   * spin_result upsert
   */
  export type spin_resultUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the spin_result
     */
    select?: spin_resultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the spin_result
     */
    omit?: spin_resultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: spin_resultInclude<ExtArgs> | null
    /**
     * The filter to search for the spin_result to update in case it exists.
     */
    where: spin_resultWhereUniqueInput
    /**
     * In case the spin_result found by the `where` argument doesn't exist, create a new spin_result with this data.
     */
    create: XOR<spin_resultCreateInput, spin_resultUncheckedCreateInput>
    /**
     * In case the spin_result was found with the provided `where` argument, update it with this data.
     */
    update: XOR<spin_resultUpdateInput, spin_resultUncheckedUpdateInput>
  }

  /**
   * spin_result delete
   */
  export type spin_resultDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the spin_result
     */
    select?: spin_resultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the spin_result
     */
    omit?: spin_resultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: spin_resultInclude<ExtArgs> | null
    /**
     * Filter which spin_result to delete.
     */
    where: spin_resultWhereUniqueInput
  }

  /**
   * spin_result deleteMany
   */
  export type spin_resultDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which spin_results to delete
     */
    where?: spin_resultWhereInput
    /**
     * Limit how many spin_results to delete.
     */
    limit?: number
  }

  /**
   * spin_result without action
   */
  export type spin_resultDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the spin_result
     */
    select?: spin_resultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the spin_result
     */
    omit?: spin_resultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: spin_resultInclude<ExtArgs> | null
  }


  /**
   * Model vitamin
   */

  export type AggregateVitamin = {
    _count: VitaminCountAggregateOutputType | null
    _avg: VitaminAvgAggregateOutputType | null
    _sum: VitaminSumAggregateOutputType | null
    _min: VitaminMinAggregateOutputType | null
    _max: VitaminMaxAggregateOutputType | null
  }

  export type VitaminAvgAggregateOutputType = {
    id: number | null
  }

  export type VitaminSumAggregateOutputType = {
    id: bigint | null
  }

  export type VitaminMinAggregateOutputType = {
    id: bigint | null
    vitamin: string | null
  }

  export type VitaminMaxAggregateOutputType = {
    id: bigint | null
    vitamin: string | null
  }

  export type VitaminCountAggregateOutputType = {
    id: number
    vitamin: number
    _all: number
  }


  export type VitaminAvgAggregateInputType = {
    id?: true
  }

  export type VitaminSumAggregateInputType = {
    id?: true
  }

  export type VitaminMinAggregateInputType = {
    id?: true
    vitamin?: true
  }

  export type VitaminMaxAggregateInputType = {
    id?: true
    vitamin?: true
  }

  export type VitaminCountAggregateInputType = {
    id?: true
    vitamin?: true
    _all?: true
  }

  export type VitaminAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which vitamin to aggregate.
     */
    where?: vitaminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of vitamins to fetch.
     */
    orderBy?: vitaminOrderByWithRelationInput | vitaminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: vitaminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` vitamins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` vitamins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned vitamins
    **/
    _count?: true | VitaminCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VitaminAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VitaminSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VitaminMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VitaminMaxAggregateInputType
  }

  export type GetVitaminAggregateType<T extends VitaminAggregateArgs> = {
        [P in keyof T & keyof AggregateVitamin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVitamin[P]>
      : GetScalarType<T[P], AggregateVitamin[P]>
  }




  export type vitaminGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: vitaminWhereInput
    orderBy?: vitaminOrderByWithAggregationInput | vitaminOrderByWithAggregationInput[]
    by: VitaminScalarFieldEnum[] | VitaminScalarFieldEnum
    having?: vitaminScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VitaminCountAggregateInputType | true
    _avg?: VitaminAvgAggregateInputType
    _sum?: VitaminSumAggregateInputType
    _min?: VitaminMinAggregateInputType
    _max?: VitaminMaxAggregateInputType
  }

  export type VitaminGroupByOutputType = {
    id: bigint
    vitamin: string | null
    _count: VitaminCountAggregateOutputType | null
    _avg: VitaminAvgAggregateOutputType | null
    _sum: VitaminSumAggregateOutputType | null
    _min: VitaminMinAggregateOutputType | null
    _max: VitaminMaxAggregateOutputType | null
  }

  type GetVitaminGroupByPayload<T extends vitaminGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VitaminGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VitaminGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VitaminGroupByOutputType[P]>
            : GetScalarType<T[P], VitaminGroupByOutputType[P]>
        }
      >
    >


  export type vitaminSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    vitamin?: boolean
    menu_vitamin?: boolean | vitamin$menu_vitaminArgs<ExtArgs>
    _count?: boolean | VitaminCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vitamin"]>



  export type vitaminSelectScalar = {
    id?: boolean
    vitamin?: boolean
  }

  export type vitaminOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "vitamin", ExtArgs["result"]["vitamin"]>
  export type vitaminInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    menu_vitamin?: boolean | vitamin$menu_vitaminArgs<ExtArgs>
    _count?: boolean | VitaminCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $vitaminPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "vitamin"
    objects: {
      menu_vitamin: Prisma.$menu_vitaminPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      vitamin: string | null
    }, ExtArgs["result"]["vitamin"]>
    composites: {}
  }

  type vitaminGetPayload<S extends boolean | null | undefined | vitaminDefaultArgs> = $Result.GetResult<Prisma.$vitaminPayload, S>

  type vitaminCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<vitaminFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VitaminCountAggregateInputType | true
    }

  export interface vitaminDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['vitamin'], meta: { name: 'vitamin' } }
    /**
     * Find zero or one Vitamin that matches the filter.
     * @param {vitaminFindUniqueArgs} args - Arguments to find a Vitamin
     * @example
     * // Get one Vitamin
     * const vitamin = await prisma.vitamin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends vitaminFindUniqueArgs>(args: SelectSubset<T, vitaminFindUniqueArgs<ExtArgs>>): Prisma__vitaminClient<$Result.GetResult<Prisma.$vitaminPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Vitamin that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {vitaminFindUniqueOrThrowArgs} args - Arguments to find a Vitamin
     * @example
     * // Get one Vitamin
     * const vitamin = await prisma.vitamin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends vitaminFindUniqueOrThrowArgs>(args: SelectSubset<T, vitaminFindUniqueOrThrowArgs<ExtArgs>>): Prisma__vitaminClient<$Result.GetResult<Prisma.$vitaminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vitamin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vitaminFindFirstArgs} args - Arguments to find a Vitamin
     * @example
     * // Get one Vitamin
     * const vitamin = await prisma.vitamin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends vitaminFindFirstArgs>(args?: SelectSubset<T, vitaminFindFirstArgs<ExtArgs>>): Prisma__vitaminClient<$Result.GetResult<Prisma.$vitaminPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vitamin that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vitaminFindFirstOrThrowArgs} args - Arguments to find a Vitamin
     * @example
     * // Get one Vitamin
     * const vitamin = await prisma.vitamin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends vitaminFindFirstOrThrowArgs>(args?: SelectSubset<T, vitaminFindFirstOrThrowArgs<ExtArgs>>): Prisma__vitaminClient<$Result.GetResult<Prisma.$vitaminPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Vitamins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vitaminFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Vitamins
     * const vitamins = await prisma.vitamin.findMany()
     * 
     * // Get first 10 Vitamins
     * const vitamins = await prisma.vitamin.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const vitaminWithIdOnly = await prisma.vitamin.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends vitaminFindManyArgs>(args?: SelectSubset<T, vitaminFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$vitaminPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Vitamin.
     * @param {vitaminCreateArgs} args - Arguments to create a Vitamin.
     * @example
     * // Create one Vitamin
     * const Vitamin = await prisma.vitamin.create({
     *   data: {
     *     // ... data to create a Vitamin
     *   }
     * })
     * 
     */
    create<T extends vitaminCreateArgs>(args: SelectSubset<T, vitaminCreateArgs<ExtArgs>>): Prisma__vitaminClient<$Result.GetResult<Prisma.$vitaminPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Vitamins.
     * @param {vitaminCreateManyArgs} args - Arguments to create many Vitamins.
     * @example
     * // Create many Vitamins
     * const vitamin = await prisma.vitamin.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends vitaminCreateManyArgs>(args?: SelectSubset<T, vitaminCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Vitamin.
     * @param {vitaminDeleteArgs} args - Arguments to delete one Vitamin.
     * @example
     * // Delete one Vitamin
     * const Vitamin = await prisma.vitamin.delete({
     *   where: {
     *     // ... filter to delete one Vitamin
     *   }
     * })
     * 
     */
    delete<T extends vitaminDeleteArgs>(args: SelectSubset<T, vitaminDeleteArgs<ExtArgs>>): Prisma__vitaminClient<$Result.GetResult<Prisma.$vitaminPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Vitamin.
     * @param {vitaminUpdateArgs} args - Arguments to update one Vitamin.
     * @example
     * // Update one Vitamin
     * const vitamin = await prisma.vitamin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends vitaminUpdateArgs>(args: SelectSubset<T, vitaminUpdateArgs<ExtArgs>>): Prisma__vitaminClient<$Result.GetResult<Prisma.$vitaminPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Vitamins.
     * @param {vitaminDeleteManyArgs} args - Arguments to filter Vitamins to delete.
     * @example
     * // Delete a few Vitamins
     * const { count } = await prisma.vitamin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends vitaminDeleteManyArgs>(args?: SelectSubset<T, vitaminDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vitamins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vitaminUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Vitamins
     * const vitamin = await prisma.vitamin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends vitaminUpdateManyArgs>(args: SelectSubset<T, vitaminUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Vitamin.
     * @param {vitaminUpsertArgs} args - Arguments to update or create a Vitamin.
     * @example
     * // Update or create a Vitamin
     * const vitamin = await prisma.vitamin.upsert({
     *   create: {
     *     // ... data to create a Vitamin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Vitamin we want to update
     *   }
     * })
     */
    upsert<T extends vitaminUpsertArgs>(args: SelectSubset<T, vitaminUpsertArgs<ExtArgs>>): Prisma__vitaminClient<$Result.GetResult<Prisma.$vitaminPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Vitamins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vitaminCountArgs} args - Arguments to filter Vitamins to count.
     * @example
     * // Count the number of Vitamins
     * const count = await prisma.vitamin.count({
     *   where: {
     *     // ... the filter for the Vitamins we want to count
     *   }
     * })
    **/
    count<T extends vitaminCountArgs>(
      args?: Subset<T, vitaminCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VitaminCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Vitamin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VitaminAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VitaminAggregateArgs>(args: Subset<T, VitaminAggregateArgs>): Prisma.PrismaPromise<GetVitaminAggregateType<T>>

    /**
     * Group by Vitamin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vitaminGroupByArgs} args - Group by arguments.
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
      T extends vitaminGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: vitaminGroupByArgs['orderBy'] }
        : { orderBy?: vitaminGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, vitaminGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVitaminGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the vitamin model
   */
  readonly fields: vitaminFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for vitamin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__vitaminClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    menu_vitamin<T extends vitamin$menu_vitaminArgs<ExtArgs> = {}>(args?: Subset<T, vitamin$menu_vitaminArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$menu_vitaminPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the vitamin model
   */
  interface vitaminFieldRefs {
    readonly id: FieldRef<"vitamin", 'BigInt'>
    readonly vitamin: FieldRef<"vitamin", 'String'>
  }
    

  // Custom InputTypes
  /**
   * vitamin findUnique
   */
  export type vitaminFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vitamin
     */
    select?: vitaminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vitamin
     */
    omit?: vitaminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vitaminInclude<ExtArgs> | null
    /**
     * Filter, which vitamin to fetch.
     */
    where: vitaminWhereUniqueInput
  }

  /**
   * vitamin findUniqueOrThrow
   */
  export type vitaminFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vitamin
     */
    select?: vitaminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vitamin
     */
    omit?: vitaminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vitaminInclude<ExtArgs> | null
    /**
     * Filter, which vitamin to fetch.
     */
    where: vitaminWhereUniqueInput
  }

  /**
   * vitamin findFirst
   */
  export type vitaminFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vitamin
     */
    select?: vitaminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vitamin
     */
    omit?: vitaminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vitaminInclude<ExtArgs> | null
    /**
     * Filter, which vitamin to fetch.
     */
    where?: vitaminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of vitamins to fetch.
     */
    orderBy?: vitaminOrderByWithRelationInput | vitaminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for vitamins.
     */
    cursor?: vitaminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` vitamins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` vitamins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of vitamins.
     */
    distinct?: VitaminScalarFieldEnum | VitaminScalarFieldEnum[]
  }

  /**
   * vitamin findFirstOrThrow
   */
  export type vitaminFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vitamin
     */
    select?: vitaminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vitamin
     */
    omit?: vitaminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vitaminInclude<ExtArgs> | null
    /**
     * Filter, which vitamin to fetch.
     */
    where?: vitaminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of vitamins to fetch.
     */
    orderBy?: vitaminOrderByWithRelationInput | vitaminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for vitamins.
     */
    cursor?: vitaminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` vitamins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` vitamins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of vitamins.
     */
    distinct?: VitaminScalarFieldEnum | VitaminScalarFieldEnum[]
  }

  /**
   * vitamin findMany
   */
  export type vitaminFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vitamin
     */
    select?: vitaminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vitamin
     */
    omit?: vitaminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vitaminInclude<ExtArgs> | null
    /**
     * Filter, which vitamins to fetch.
     */
    where?: vitaminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of vitamins to fetch.
     */
    orderBy?: vitaminOrderByWithRelationInput | vitaminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing vitamins.
     */
    cursor?: vitaminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` vitamins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` vitamins.
     */
    skip?: number
    distinct?: VitaminScalarFieldEnum | VitaminScalarFieldEnum[]
  }

  /**
   * vitamin create
   */
  export type vitaminCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vitamin
     */
    select?: vitaminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vitamin
     */
    omit?: vitaminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vitaminInclude<ExtArgs> | null
    /**
     * The data needed to create a vitamin.
     */
    data?: XOR<vitaminCreateInput, vitaminUncheckedCreateInput>
  }

  /**
   * vitamin createMany
   */
  export type vitaminCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many vitamins.
     */
    data: vitaminCreateManyInput | vitaminCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * vitamin update
   */
  export type vitaminUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vitamin
     */
    select?: vitaminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vitamin
     */
    omit?: vitaminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vitaminInclude<ExtArgs> | null
    /**
     * The data needed to update a vitamin.
     */
    data: XOR<vitaminUpdateInput, vitaminUncheckedUpdateInput>
    /**
     * Choose, which vitamin to update.
     */
    where: vitaminWhereUniqueInput
  }

  /**
   * vitamin updateMany
   */
  export type vitaminUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update vitamins.
     */
    data: XOR<vitaminUpdateManyMutationInput, vitaminUncheckedUpdateManyInput>
    /**
     * Filter which vitamins to update
     */
    where?: vitaminWhereInput
    /**
     * Limit how many vitamins to update.
     */
    limit?: number
  }

  /**
   * vitamin upsert
   */
  export type vitaminUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vitamin
     */
    select?: vitaminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vitamin
     */
    omit?: vitaminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vitaminInclude<ExtArgs> | null
    /**
     * The filter to search for the vitamin to update in case it exists.
     */
    where: vitaminWhereUniqueInput
    /**
     * In case the vitamin found by the `where` argument doesn't exist, create a new vitamin with this data.
     */
    create: XOR<vitaminCreateInput, vitaminUncheckedCreateInput>
    /**
     * In case the vitamin was found with the provided `where` argument, update it with this data.
     */
    update: XOR<vitaminUpdateInput, vitaminUncheckedUpdateInput>
  }

  /**
   * vitamin delete
   */
  export type vitaminDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vitamin
     */
    select?: vitaminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vitamin
     */
    omit?: vitaminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vitaminInclude<ExtArgs> | null
    /**
     * Filter which vitamin to delete.
     */
    where: vitaminWhereUniqueInput
  }

  /**
   * vitamin deleteMany
   */
  export type vitaminDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which vitamins to delete
     */
    where?: vitaminWhereInput
    /**
     * Limit how many vitamins to delete.
     */
    limit?: number
  }

  /**
   * vitamin.menu_vitamin
   */
  export type vitamin$menu_vitaminArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the menu_vitamin
     */
    select?: menu_vitaminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the menu_vitamin
     */
    omit?: menu_vitaminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: menu_vitaminInclude<ExtArgs> | null
    where?: menu_vitaminWhereInput
    orderBy?: menu_vitaminOrderByWithRelationInput | menu_vitaminOrderByWithRelationInput[]
    cursor?: menu_vitaminWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Menu_vitaminScalarFieldEnum | Menu_vitaminScalarFieldEnum[]
  }

  /**
   * vitamin without action
   */
  export type vitaminDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vitamin
     */
    select?: vitaminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vitamin
     */
    omit?: vitaminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vitaminInclude<ExtArgs> | null
  }


  /**
   * Model allergy
   */

  export type AggregateAllergy = {
    _count: AllergyCountAggregateOutputType | null
    _avg: AllergyAvgAggregateOutputType | null
    _sum: AllergySumAggregateOutputType | null
    _min: AllergyMinAggregateOutputType | null
    _max: AllergyMaxAggregateOutputType | null
  }

  export type AllergyAvgAggregateOutputType = {
    id: number | null
  }

  export type AllergySumAggregateOutputType = {
    id: bigint | null
  }

  export type AllergyMinAggregateOutputType = {
    id: bigint | null
    allergy: string | null
  }

  export type AllergyMaxAggregateOutputType = {
    id: bigint | null
    allergy: string | null
  }

  export type AllergyCountAggregateOutputType = {
    id: number
    allergy: number
    _all: number
  }


  export type AllergyAvgAggregateInputType = {
    id?: true
  }

  export type AllergySumAggregateInputType = {
    id?: true
  }

  export type AllergyMinAggregateInputType = {
    id?: true
    allergy?: true
  }

  export type AllergyMaxAggregateInputType = {
    id?: true
    allergy?: true
  }

  export type AllergyCountAggregateInputType = {
    id?: true
    allergy?: true
    _all?: true
  }

  export type AllergyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which allergy to aggregate.
     */
    where?: allergyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of allergies to fetch.
     */
    orderBy?: allergyOrderByWithRelationInput | allergyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: allergyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` allergies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` allergies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned allergies
    **/
    _count?: true | AllergyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AllergyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AllergySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AllergyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AllergyMaxAggregateInputType
  }

  export type GetAllergyAggregateType<T extends AllergyAggregateArgs> = {
        [P in keyof T & keyof AggregateAllergy]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAllergy[P]>
      : GetScalarType<T[P], AggregateAllergy[P]>
  }




  export type allergyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: allergyWhereInput
    orderBy?: allergyOrderByWithAggregationInput | allergyOrderByWithAggregationInput[]
    by: AllergyScalarFieldEnum[] | AllergyScalarFieldEnum
    having?: allergyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AllergyCountAggregateInputType | true
    _avg?: AllergyAvgAggregateInputType
    _sum?: AllergySumAggregateInputType
    _min?: AllergyMinAggregateInputType
    _max?: AllergyMaxAggregateInputType
  }

  export type AllergyGroupByOutputType = {
    id: bigint
    allergy: string | null
    _count: AllergyCountAggregateOutputType | null
    _avg: AllergyAvgAggregateOutputType | null
    _sum: AllergySumAggregateOutputType | null
    _min: AllergyMinAggregateOutputType | null
    _max: AllergyMaxAggregateOutputType | null
  }

  type GetAllergyGroupByPayload<T extends allergyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AllergyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AllergyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AllergyGroupByOutputType[P]>
            : GetScalarType<T[P], AllergyGroupByOutputType[P]>
        }
      >
    >


  export type allergySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    allergy?: boolean
    menu_allery?: boolean | allergy$menu_alleryArgs<ExtArgs>
    _count?: boolean | AllergyCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["allergy"]>



  export type allergySelectScalar = {
    id?: boolean
    allergy?: boolean
  }

  export type allergyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "allergy", ExtArgs["result"]["allergy"]>
  export type allergyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    menu_allery?: boolean | allergy$menu_alleryArgs<ExtArgs>
    _count?: boolean | AllergyCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $allergyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "allergy"
    objects: {
      menu_allery: Prisma.$menu_alleryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      allergy: string | null
    }, ExtArgs["result"]["allergy"]>
    composites: {}
  }

  type allergyGetPayload<S extends boolean | null | undefined | allergyDefaultArgs> = $Result.GetResult<Prisma.$allergyPayload, S>

  type allergyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<allergyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AllergyCountAggregateInputType | true
    }

  export interface allergyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['allergy'], meta: { name: 'allergy' } }
    /**
     * Find zero or one Allergy that matches the filter.
     * @param {allergyFindUniqueArgs} args - Arguments to find a Allergy
     * @example
     * // Get one Allergy
     * const allergy = await prisma.allergy.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends allergyFindUniqueArgs>(args: SelectSubset<T, allergyFindUniqueArgs<ExtArgs>>): Prisma__allergyClient<$Result.GetResult<Prisma.$allergyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Allergy that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {allergyFindUniqueOrThrowArgs} args - Arguments to find a Allergy
     * @example
     * // Get one Allergy
     * const allergy = await prisma.allergy.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends allergyFindUniqueOrThrowArgs>(args: SelectSubset<T, allergyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__allergyClient<$Result.GetResult<Prisma.$allergyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Allergy that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {allergyFindFirstArgs} args - Arguments to find a Allergy
     * @example
     * // Get one Allergy
     * const allergy = await prisma.allergy.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends allergyFindFirstArgs>(args?: SelectSubset<T, allergyFindFirstArgs<ExtArgs>>): Prisma__allergyClient<$Result.GetResult<Prisma.$allergyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Allergy that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {allergyFindFirstOrThrowArgs} args - Arguments to find a Allergy
     * @example
     * // Get one Allergy
     * const allergy = await prisma.allergy.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends allergyFindFirstOrThrowArgs>(args?: SelectSubset<T, allergyFindFirstOrThrowArgs<ExtArgs>>): Prisma__allergyClient<$Result.GetResult<Prisma.$allergyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Allergies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {allergyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Allergies
     * const allergies = await prisma.allergy.findMany()
     * 
     * // Get first 10 Allergies
     * const allergies = await prisma.allergy.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const allergyWithIdOnly = await prisma.allergy.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends allergyFindManyArgs>(args?: SelectSubset<T, allergyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$allergyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Allergy.
     * @param {allergyCreateArgs} args - Arguments to create a Allergy.
     * @example
     * // Create one Allergy
     * const Allergy = await prisma.allergy.create({
     *   data: {
     *     // ... data to create a Allergy
     *   }
     * })
     * 
     */
    create<T extends allergyCreateArgs>(args: SelectSubset<T, allergyCreateArgs<ExtArgs>>): Prisma__allergyClient<$Result.GetResult<Prisma.$allergyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Allergies.
     * @param {allergyCreateManyArgs} args - Arguments to create many Allergies.
     * @example
     * // Create many Allergies
     * const allergy = await prisma.allergy.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends allergyCreateManyArgs>(args?: SelectSubset<T, allergyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Allergy.
     * @param {allergyDeleteArgs} args - Arguments to delete one Allergy.
     * @example
     * // Delete one Allergy
     * const Allergy = await prisma.allergy.delete({
     *   where: {
     *     // ... filter to delete one Allergy
     *   }
     * })
     * 
     */
    delete<T extends allergyDeleteArgs>(args: SelectSubset<T, allergyDeleteArgs<ExtArgs>>): Prisma__allergyClient<$Result.GetResult<Prisma.$allergyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Allergy.
     * @param {allergyUpdateArgs} args - Arguments to update one Allergy.
     * @example
     * // Update one Allergy
     * const allergy = await prisma.allergy.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends allergyUpdateArgs>(args: SelectSubset<T, allergyUpdateArgs<ExtArgs>>): Prisma__allergyClient<$Result.GetResult<Prisma.$allergyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Allergies.
     * @param {allergyDeleteManyArgs} args - Arguments to filter Allergies to delete.
     * @example
     * // Delete a few Allergies
     * const { count } = await prisma.allergy.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends allergyDeleteManyArgs>(args?: SelectSubset<T, allergyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Allergies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {allergyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Allergies
     * const allergy = await prisma.allergy.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends allergyUpdateManyArgs>(args: SelectSubset<T, allergyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Allergy.
     * @param {allergyUpsertArgs} args - Arguments to update or create a Allergy.
     * @example
     * // Update or create a Allergy
     * const allergy = await prisma.allergy.upsert({
     *   create: {
     *     // ... data to create a Allergy
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Allergy we want to update
     *   }
     * })
     */
    upsert<T extends allergyUpsertArgs>(args: SelectSubset<T, allergyUpsertArgs<ExtArgs>>): Prisma__allergyClient<$Result.GetResult<Prisma.$allergyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Allergies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {allergyCountArgs} args - Arguments to filter Allergies to count.
     * @example
     * // Count the number of Allergies
     * const count = await prisma.allergy.count({
     *   where: {
     *     // ... the filter for the Allergies we want to count
     *   }
     * })
    **/
    count<T extends allergyCountArgs>(
      args?: Subset<T, allergyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AllergyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Allergy.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AllergyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AllergyAggregateArgs>(args: Subset<T, AllergyAggregateArgs>): Prisma.PrismaPromise<GetAllergyAggregateType<T>>

    /**
     * Group by Allergy.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {allergyGroupByArgs} args - Group by arguments.
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
      T extends allergyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: allergyGroupByArgs['orderBy'] }
        : { orderBy?: allergyGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, allergyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAllergyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the allergy model
   */
  readonly fields: allergyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for allergy.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__allergyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    menu_allery<T extends allergy$menu_alleryArgs<ExtArgs> = {}>(args?: Subset<T, allergy$menu_alleryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$menu_alleryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the allergy model
   */
  interface allergyFieldRefs {
    readonly id: FieldRef<"allergy", 'BigInt'>
    readonly allergy: FieldRef<"allergy", 'String'>
  }
    

  // Custom InputTypes
  /**
   * allergy findUnique
   */
  export type allergyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the allergy
     */
    select?: allergySelect<ExtArgs> | null
    /**
     * Omit specific fields from the allergy
     */
    omit?: allergyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: allergyInclude<ExtArgs> | null
    /**
     * Filter, which allergy to fetch.
     */
    where: allergyWhereUniqueInput
  }

  /**
   * allergy findUniqueOrThrow
   */
  export type allergyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the allergy
     */
    select?: allergySelect<ExtArgs> | null
    /**
     * Omit specific fields from the allergy
     */
    omit?: allergyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: allergyInclude<ExtArgs> | null
    /**
     * Filter, which allergy to fetch.
     */
    where: allergyWhereUniqueInput
  }

  /**
   * allergy findFirst
   */
  export type allergyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the allergy
     */
    select?: allergySelect<ExtArgs> | null
    /**
     * Omit specific fields from the allergy
     */
    omit?: allergyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: allergyInclude<ExtArgs> | null
    /**
     * Filter, which allergy to fetch.
     */
    where?: allergyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of allergies to fetch.
     */
    orderBy?: allergyOrderByWithRelationInput | allergyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for allergies.
     */
    cursor?: allergyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` allergies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` allergies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of allergies.
     */
    distinct?: AllergyScalarFieldEnum | AllergyScalarFieldEnum[]
  }

  /**
   * allergy findFirstOrThrow
   */
  export type allergyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the allergy
     */
    select?: allergySelect<ExtArgs> | null
    /**
     * Omit specific fields from the allergy
     */
    omit?: allergyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: allergyInclude<ExtArgs> | null
    /**
     * Filter, which allergy to fetch.
     */
    where?: allergyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of allergies to fetch.
     */
    orderBy?: allergyOrderByWithRelationInput | allergyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for allergies.
     */
    cursor?: allergyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` allergies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` allergies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of allergies.
     */
    distinct?: AllergyScalarFieldEnum | AllergyScalarFieldEnum[]
  }

  /**
   * allergy findMany
   */
  export type allergyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the allergy
     */
    select?: allergySelect<ExtArgs> | null
    /**
     * Omit specific fields from the allergy
     */
    omit?: allergyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: allergyInclude<ExtArgs> | null
    /**
     * Filter, which allergies to fetch.
     */
    where?: allergyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of allergies to fetch.
     */
    orderBy?: allergyOrderByWithRelationInput | allergyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing allergies.
     */
    cursor?: allergyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` allergies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` allergies.
     */
    skip?: number
    distinct?: AllergyScalarFieldEnum | AllergyScalarFieldEnum[]
  }

  /**
   * allergy create
   */
  export type allergyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the allergy
     */
    select?: allergySelect<ExtArgs> | null
    /**
     * Omit specific fields from the allergy
     */
    omit?: allergyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: allergyInclude<ExtArgs> | null
    /**
     * The data needed to create a allergy.
     */
    data?: XOR<allergyCreateInput, allergyUncheckedCreateInput>
  }

  /**
   * allergy createMany
   */
  export type allergyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many allergies.
     */
    data: allergyCreateManyInput | allergyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * allergy update
   */
  export type allergyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the allergy
     */
    select?: allergySelect<ExtArgs> | null
    /**
     * Omit specific fields from the allergy
     */
    omit?: allergyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: allergyInclude<ExtArgs> | null
    /**
     * The data needed to update a allergy.
     */
    data: XOR<allergyUpdateInput, allergyUncheckedUpdateInput>
    /**
     * Choose, which allergy to update.
     */
    where: allergyWhereUniqueInput
  }

  /**
   * allergy updateMany
   */
  export type allergyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update allergies.
     */
    data: XOR<allergyUpdateManyMutationInput, allergyUncheckedUpdateManyInput>
    /**
     * Filter which allergies to update
     */
    where?: allergyWhereInput
    /**
     * Limit how many allergies to update.
     */
    limit?: number
  }

  /**
   * allergy upsert
   */
  export type allergyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the allergy
     */
    select?: allergySelect<ExtArgs> | null
    /**
     * Omit specific fields from the allergy
     */
    omit?: allergyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: allergyInclude<ExtArgs> | null
    /**
     * The filter to search for the allergy to update in case it exists.
     */
    where: allergyWhereUniqueInput
    /**
     * In case the allergy found by the `where` argument doesn't exist, create a new allergy with this data.
     */
    create: XOR<allergyCreateInput, allergyUncheckedCreateInput>
    /**
     * In case the allergy was found with the provided `where` argument, update it with this data.
     */
    update: XOR<allergyUpdateInput, allergyUncheckedUpdateInput>
  }

  /**
   * allergy delete
   */
  export type allergyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the allergy
     */
    select?: allergySelect<ExtArgs> | null
    /**
     * Omit specific fields from the allergy
     */
    omit?: allergyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: allergyInclude<ExtArgs> | null
    /**
     * Filter which allergy to delete.
     */
    where: allergyWhereUniqueInput
  }

  /**
   * allergy deleteMany
   */
  export type allergyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which allergies to delete
     */
    where?: allergyWhereInput
    /**
     * Limit how many allergies to delete.
     */
    limit?: number
  }

  /**
   * allergy.menu_allery
   */
  export type allergy$menu_alleryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the menu_allery
     */
    select?: menu_allerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the menu_allery
     */
    omit?: menu_alleryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: menu_alleryInclude<ExtArgs> | null
    where?: menu_alleryWhereInput
    orderBy?: menu_alleryOrderByWithRelationInput | menu_alleryOrderByWithRelationInput[]
    cursor?: menu_alleryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Menu_alleryScalarFieldEnum | Menu_alleryScalarFieldEnum[]
  }

  /**
   * allergy without action
   */
  export type allergyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the allergy
     */
    select?: allergySelect<ExtArgs> | null
    /**
     * Omit specific fields from the allergy
     */
    omit?: allergyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: allergyInclude<ExtArgs> | null
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
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const MenuScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    calory: 'calory',
    carbo: 'carbo',
    protein: 'protein',
    fat: 'fat',
    sodium: 'sodium',
    image_link: 'image_link'
  };

  export type MenuScalarFieldEnum = (typeof MenuScalarFieldEnum)[keyof typeof MenuScalarFieldEnum]


  export const MukburimScalarFieldEnum: {
    id: 'id',
    menu_id: 'menu_id',
    user_id: 'user_id',
    date: 'date'
  };

  export type MukburimScalarFieldEnum = (typeof MukburimScalarFieldEnum)[keyof typeof MukburimScalarFieldEnum]


  export const Menu_tagScalarFieldEnum: {
    id: 'id',
    menu_id: 'menu_id',
    tag: 'tag'
  };

  export type Menu_tagScalarFieldEnum = (typeof Menu_tagScalarFieldEnum)[keyof typeof Menu_tagScalarFieldEnum]


  export const BattleScalarFieldEnum: {
    id: 'id',
    creater_nickname: 'creater_nickname',
    status: 'status',
    participant_count: 'participant_count',
    created_at: 'created_at',
    finished_at: 'finished_at',
    expires_at: 'expires_at'
  };

  export type BattleScalarFieldEnum = (typeof BattleScalarFieldEnum)[keyof typeof BattleScalarFieldEnum]


  export const Battle_menuScalarFieldEnum: {
    id: 'id',
    menu_name: 'menu_name',
    boundary_angle: 'boundary_angle',
    menu_order: 'menu_order',
    battle_id: 'battle_id',
    menu_id: 'menu_id'
  };

  export type Battle_menuScalarFieldEnum = (typeof Battle_menuScalarFieldEnum)[keyof typeof Battle_menuScalarFieldEnum]


  export const Battle_participantScalarFieldEnum: {
    battle_id: 'battle_id',
    user_id: 'user_id',
    nickname: 'nickname',
    is_creater: 'is_creater',
    joined_at: 'joined_at'
  };

  export type Battle_participantScalarFieldEnum = (typeof Battle_participantScalarFieldEnum)[keyof typeof Battle_participantScalarFieldEnum]


  export const Menu_alleryScalarFieldEnum: {
    menu_id: 'menu_id',
    allergy_id: 'allergy_id'
  };

  export type Menu_alleryScalarFieldEnum = (typeof Menu_alleryScalarFieldEnum)[keyof typeof Menu_alleryScalarFieldEnum]


  export const Menu_vitaminScalarFieldEnum: {
    menu_id: 'menu_id',
    vitamin_id: 'vitamin_id'
  };

  export type Menu_vitaminScalarFieldEnum = (typeof Menu_vitaminScalarFieldEnum)[keyof typeof Menu_vitaminScalarFieldEnum]


  export const Spin_resultScalarFieldEnum: {
    id: 'id',
    nickname: 'nickname',
    stopped_angle: 'stopped_angle',
    distance_to_boundary: 'distance_to_boundary',
    rank: 'rank',
    spin_at: 'spin_at',
    battle_id: 'battle_id',
    closest_menu_id: 'closest_menu_id'
  };

  export type Spin_resultScalarFieldEnum = (typeof Spin_resultScalarFieldEnum)[keyof typeof Spin_resultScalarFieldEnum]


  export const VitaminScalarFieldEnum: {
    id: 'id',
    vitamin: 'vitamin'
  };

  export type VitaminScalarFieldEnum = (typeof VitaminScalarFieldEnum)[keyof typeof VitaminScalarFieldEnum]


  export const AllergyScalarFieldEnum: {
    id: 'id',
    allergy: 'allergy'
  };

  export type AllergyScalarFieldEnum = (typeof AllergyScalarFieldEnum)[keyof typeof AllergyScalarFieldEnum]


  export const SessionsScalarFieldEnum: {
    session_id: 'session_id',
    expires: 'expires',
    data: 'data'
  };

  export type SessionsScalarFieldEnum = (typeof SessionsScalarFieldEnum)[keyof typeof SessionsScalarFieldEnum]


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


  export const menuOrderByRelevanceFieldEnum: {
    name: 'name',
    description: 'description',
    image_link: 'image_link'
  };

  export type menuOrderByRelevanceFieldEnum = (typeof menuOrderByRelevanceFieldEnum)[keyof typeof menuOrderByRelevanceFieldEnum]


  export const menu_tagOrderByRelevanceFieldEnum: {
    tag: 'tag'
  };

  export type menu_tagOrderByRelevanceFieldEnum = (typeof menu_tagOrderByRelevanceFieldEnum)[keyof typeof menu_tagOrderByRelevanceFieldEnum]


  export const battleOrderByRelevanceFieldEnum: {
    id: 'id',
    creater_nickname: 'creater_nickname',
    status: 'status'
  };

  export type battleOrderByRelevanceFieldEnum = (typeof battleOrderByRelevanceFieldEnum)[keyof typeof battleOrderByRelevanceFieldEnum]


  export const battle_menuOrderByRelevanceFieldEnum: {
    menu_name: 'menu_name',
    battle_id: 'battle_id'
  };

  export type battle_menuOrderByRelevanceFieldEnum = (typeof battle_menuOrderByRelevanceFieldEnum)[keyof typeof battle_menuOrderByRelevanceFieldEnum]


  export const battle_participantOrderByRelevanceFieldEnum: {
    battle_id: 'battle_id',
    nickname: 'nickname'
  };

  export type battle_participantOrderByRelevanceFieldEnum = (typeof battle_participantOrderByRelevanceFieldEnum)[keyof typeof battle_participantOrderByRelevanceFieldEnum]


  export const spin_resultOrderByRelevanceFieldEnum: {
    nickname: 'nickname',
    battle_id: 'battle_id'
  };

  export type spin_resultOrderByRelevanceFieldEnum = (typeof spin_resultOrderByRelevanceFieldEnum)[keyof typeof spin_resultOrderByRelevanceFieldEnum]


  export const vitaminOrderByRelevanceFieldEnum: {
    vitamin: 'vitamin'
  };

  export type vitaminOrderByRelevanceFieldEnum = (typeof vitaminOrderByRelevanceFieldEnum)[keyof typeof vitaminOrderByRelevanceFieldEnum]


  export const allergyOrderByRelevanceFieldEnum: {
    allergy: 'allergy'
  };

  export type allergyOrderByRelevanceFieldEnum = (typeof allergyOrderByRelevanceFieldEnum)[keyof typeof allergyOrderByRelevanceFieldEnum]


  export const sessionsOrderByRelevanceFieldEnum: {
    session_id: 'session_id',
    data: 'data'
  };

  export type sessionsOrderByRelevanceFieldEnum = (typeof sessionsOrderByRelevanceFieldEnum)[keyof typeof sessionsOrderByRelevanceFieldEnum]


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


  export type menuWhereInput = {
    AND?: menuWhereInput | menuWhereInput[]
    OR?: menuWhereInput[]
    NOT?: menuWhereInput | menuWhereInput[]
    id?: BigIntFilter<"menu"> | bigint | number
    name?: StringFilter<"menu"> | string
    description?: StringNullableFilter<"menu"> | string | null
    calory?: BigIntNullableFilter<"menu"> | bigint | number | null
    carbo?: BigIntNullableFilter<"menu"> | bigint | number | null
    protein?: BigIntNullableFilter<"menu"> | bigint | number | null
    fat?: BigIntNullableFilter<"menu"> | bigint | number | null
    sodium?: BigIntNullableFilter<"menu"> | bigint | number | null
    image_link?: StringNullableFilter<"menu"> | string | null
    battle_menu?: Battle_menuListRelationFilter
    menu_allery?: Menu_alleryListRelationFilter
    menu_tag?: Menu_tagListRelationFilter
    menu_vitamin?: Menu_vitaminListRelationFilter
    mukburim?: MukburimListRelationFilter
    spin_result?: Spin_resultListRelationFilter
  }

  export type menuOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    calory?: SortOrderInput | SortOrder
    carbo?: SortOrderInput | SortOrder
    protein?: SortOrderInput | SortOrder
    fat?: SortOrderInput | SortOrder
    sodium?: SortOrderInput | SortOrder
    image_link?: SortOrderInput | SortOrder
    battle_menu?: battle_menuOrderByRelationAggregateInput
    menu_allery?: menu_alleryOrderByRelationAggregateInput
    menu_tag?: menu_tagOrderByRelationAggregateInput
    menu_vitamin?: menu_vitaminOrderByRelationAggregateInput
    mukburim?: mukburimOrderByRelationAggregateInput
    spin_result?: spin_resultOrderByRelationAggregateInput
    _relevance?: menuOrderByRelevanceInput
  }

  export type menuWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: menuWhereInput | menuWhereInput[]
    OR?: menuWhereInput[]
    NOT?: menuWhereInput | menuWhereInput[]
    name?: StringFilter<"menu"> | string
    description?: StringNullableFilter<"menu"> | string | null
    calory?: BigIntNullableFilter<"menu"> | bigint | number | null
    carbo?: BigIntNullableFilter<"menu"> | bigint | number | null
    protein?: BigIntNullableFilter<"menu"> | bigint | number | null
    fat?: BigIntNullableFilter<"menu"> | bigint | number | null
    sodium?: BigIntNullableFilter<"menu"> | bigint | number | null
    image_link?: StringNullableFilter<"menu"> | string | null
    battle_menu?: Battle_menuListRelationFilter
    menu_allery?: Menu_alleryListRelationFilter
    menu_tag?: Menu_tagListRelationFilter
    menu_vitamin?: Menu_vitaminListRelationFilter
    mukburim?: MukburimListRelationFilter
    spin_result?: Spin_resultListRelationFilter
  }, "id">

  export type menuOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    calory?: SortOrderInput | SortOrder
    carbo?: SortOrderInput | SortOrder
    protein?: SortOrderInput | SortOrder
    fat?: SortOrderInput | SortOrder
    sodium?: SortOrderInput | SortOrder
    image_link?: SortOrderInput | SortOrder
    _count?: menuCountOrderByAggregateInput
    _avg?: menuAvgOrderByAggregateInput
    _max?: menuMaxOrderByAggregateInput
    _min?: menuMinOrderByAggregateInput
    _sum?: menuSumOrderByAggregateInput
  }

  export type menuScalarWhereWithAggregatesInput = {
    AND?: menuScalarWhereWithAggregatesInput | menuScalarWhereWithAggregatesInput[]
    OR?: menuScalarWhereWithAggregatesInput[]
    NOT?: menuScalarWhereWithAggregatesInput | menuScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"menu"> | bigint | number
    name?: StringWithAggregatesFilter<"menu"> | string
    description?: StringNullableWithAggregatesFilter<"menu"> | string | null
    calory?: BigIntNullableWithAggregatesFilter<"menu"> | bigint | number | null
    carbo?: BigIntNullableWithAggregatesFilter<"menu"> | bigint | number | null
    protein?: BigIntNullableWithAggregatesFilter<"menu"> | bigint | number | null
    fat?: BigIntNullableWithAggregatesFilter<"menu"> | bigint | number | null
    sodium?: BigIntNullableWithAggregatesFilter<"menu"> | bigint | number | null
    image_link?: StringNullableWithAggregatesFilter<"menu"> | string | null
  }

  export type mukburimWhereInput = {
    AND?: mukburimWhereInput | mukburimWhereInput[]
    OR?: mukburimWhereInput[]
    NOT?: mukburimWhereInput | mukburimWhereInput[]
    id?: BigIntFilter<"mukburim"> | bigint | number
    menu_id?: BigIntFilter<"mukburim"> | bigint | number
    user_id?: BigIntFilter<"mukburim"> | bigint | number
    date?: DateTimeNullableFilter<"mukburim"> | Date | string | null
    menu?: XOR<MenuScalarRelationFilter, menuWhereInput>
  }

  export type mukburimOrderByWithRelationInput = {
    id?: SortOrder
    menu_id?: SortOrder
    user_id?: SortOrder
    date?: SortOrderInput | SortOrder
    menu?: menuOrderByWithRelationInput
  }

  export type mukburimWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: mukburimWhereInput | mukburimWhereInput[]
    OR?: mukburimWhereInput[]
    NOT?: mukburimWhereInput | mukburimWhereInput[]
    menu_id?: BigIntFilter<"mukburim"> | bigint | number
    user_id?: BigIntFilter<"mukburim"> | bigint | number
    date?: DateTimeNullableFilter<"mukburim"> | Date | string | null
    menu?: XOR<MenuScalarRelationFilter, menuWhereInput>
  }, "id">

  export type mukburimOrderByWithAggregationInput = {
    id?: SortOrder
    menu_id?: SortOrder
    user_id?: SortOrder
    date?: SortOrderInput | SortOrder
    _count?: mukburimCountOrderByAggregateInput
    _avg?: mukburimAvgOrderByAggregateInput
    _max?: mukburimMaxOrderByAggregateInput
    _min?: mukburimMinOrderByAggregateInput
    _sum?: mukburimSumOrderByAggregateInput
  }

  export type mukburimScalarWhereWithAggregatesInput = {
    AND?: mukburimScalarWhereWithAggregatesInput | mukburimScalarWhereWithAggregatesInput[]
    OR?: mukburimScalarWhereWithAggregatesInput[]
    NOT?: mukburimScalarWhereWithAggregatesInput | mukburimScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"mukburim"> | bigint | number
    menu_id?: BigIntWithAggregatesFilter<"mukburim"> | bigint | number
    user_id?: BigIntWithAggregatesFilter<"mukburim"> | bigint | number
    date?: DateTimeNullableWithAggregatesFilter<"mukburim"> | Date | string | null
  }

  export type menu_tagWhereInput = {
    AND?: menu_tagWhereInput | menu_tagWhereInput[]
    OR?: menu_tagWhereInput[]
    NOT?: menu_tagWhereInput | menu_tagWhereInput[]
    id?: BigIntFilter<"menu_tag"> | bigint | number
    menu_id?: BigIntFilter<"menu_tag"> | bigint | number
    tag?: StringNullableFilter<"menu_tag"> | string | null
    menu?: XOR<MenuScalarRelationFilter, menuWhereInput>
  }

  export type menu_tagOrderByWithRelationInput = {
    id?: SortOrder
    menu_id?: SortOrder
    tag?: SortOrderInput | SortOrder
    menu?: menuOrderByWithRelationInput
    _relevance?: menu_tagOrderByRelevanceInput
  }

  export type menu_tagWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: menu_tagWhereInput | menu_tagWhereInput[]
    OR?: menu_tagWhereInput[]
    NOT?: menu_tagWhereInput | menu_tagWhereInput[]
    menu_id?: BigIntFilter<"menu_tag"> | bigint | number
    tag?: StringNullableFilter<"menu_tag"> | string | null
    menu?: XOR<MenuScalarRelationFilter, menuWhereInput>
  }, "id">

  export type menu_tagOrderByWithAggregationInput = {
    id?: SortOrder
    menu_id?: SortOrder
    tag?: SortOrderInput | SortOrder
    _count?: menu_tagCountOrderByAggregateInput
    _avg?: menu_tagAvgOrderByAggregateInput
    _max?: menu_tagMaxOrderByAggregateInput
    _min?: menu_tagMinOrderByAggregateInput
    _sum?: menu_tagSumOrderByAggregateInput
  }

  export type menu_tagScalarWhereWithAggregatesInput = {
    AND?: menu_tagScalarWhereWithAggregatesInput | menu_tagScalarWhereWithAggregatesInput[]
    OR?: menu_tagScalarWhereWithAggregatesInput[]
    NOT?: menu_tagScalarWhereWithAggregatesInput | menu_tagScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"menu_tag"> | bigint | number
    menu_id?: BigIntWithAggregatesFilter<"menu_tag"> | bigint | number
    tag?: StringNullableWithAggregatesFilter<"menu_tag"> | string | null
  }

  export type battleWhereInput = {
    AND?: battleWhereInput | battleWhereInput[]
    OR?: battleWhereInput[]
    NOT?: battleWhereInput | battleWhereInput[]
    id?: StringFilter<"battle"> | string
    creater_nickname?: StringNullableFilter<"battle"> | string | null
    status?: StringNullableFilter<"battle"> | string | null
    participant_count?: IntNullableFilter<"battle"> | number | null
    created_at?: DateTimeNullableFilter<"battle"> | Date | string | null
    finished_at?: DateTimeNullableFilter<"battle"> | Date | string | null
    expires_at?: DateTimeNullableFilter<"battle"> | Date | string | null
    battle_menu?: Battle_menuListRelationFilter
    battle_participant?: Battle_participantListRelationFilter
    spin_result?: Spin_resultListRelationFilter
  }

  export type battleOrderByWithRelationInput = {
    id?: SortOrder
    creater_nickname?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    participant_count?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    finished_at?: SortOrderInput | SortOrder
    expires_at?: SortOrderInput | SortOrder
    battle_menu?: battle_menuOrderByRelationAggregateInput
    battle_participant?: battle_participantOrderByRelationAggregateInput
    spin_result?: spin_resultOrderByRelationAggregateInput
    _relevance?: battleOrderByRelevanceInput
  }

  export type battleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: battleWhereInput | battleWhereInput[]
    OR?: battleWhereInput[]
    NOT?: battleWhereInput | battleWhereInput[]
    creater_nickname?: StringNullableFilter<"battle"> | string | null
    status?: StringNullableFilter<"battle"> | string | null
    participant_count?: IntNullableFilter<"battle"> | number | null
    created_at?: DateTimeNullableFilter<"battle"> | Date | string | null
    finished_at?: DateTimeNullableFilter<"battle"> | Date | string | null
    expires_at?: DateTimeNullableFilter<"battle"> | Date | string | null
    battle_menu?: Battle_menuListRelationFilter
    battle_participant?: Battle_participantListRelationFilter
    spin_result?: Spin_resultListRelationFilter
  }, "id">

  export type battleOrderByWithAggregationInput = {
    id?: SortOrder
    creater_nickname?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    participant_count?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    finished_at?: SortOrderInput | SortOrder
    expires_at?: SortOrderInput | SortOrder
    _count?: battleCountOrderByAggregateInput
    _avg?: battleAvgOrderByAggregateInput
    _max?: battleMaxOrderByAggregateInput
    _min?: battleMinOrderByAggregateInput
    _sum?: battleSumOrderByAggregateInput
  }

  export type battleScalarWhereWithAggregatesInput = {
    AND?: battleScalarWhereWithAggregatesInput | battleScalarWhereWithAggregatesInput[]
    OR?: battleScalarWhereWithAggregatesInput[]
    NOT?: battleScalarWhereWithAggregatesInput | battleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"battle"> | string
    creater_nickname?: StringNullableWithAggregatesFilter<"battle"> | string | null
    status?: StringNullableWithAggregatesFilter<"battle"> | string | null
    participant_count?: IntNullableWithAggregatesFilter<"battle"> | number | null
    created_at?: DateTimeNullableWithAggregatesFilter<"battle"> | Date | string | null
    finished_at?: DateTimeNullableWithAggregatesFilter<"battle"> | Date | string | null
    expires_at?: DateTimeNullableWithAggregatesFilter<"battle"> | Date | string | null
  }

  export type battle_menuWhereInput = {
    AND?: battle_menuWhereInput | battle_menuWhereInput[]
    OR?: battle_menuWhereInput[]
    NOT?: battle_menuWhereInput | battle_menuWhereInput[]
    id?: BigIntFilter<"battle_menu"> | bigint | number
    menu_name?: StringNullableFilter<"battle_menu"> | string | null
    boundary_angle?: FloatNullableFilter<"battle_menu"> | number | null
    menu_order?: IntNullableFilter<"battle_menu"> | number | null
    battle_id?: StringFilter<"battle_menu"> | string
    menu_id?: BigIntFilter<"battle_menu"> | bigint | number
    battle?: XOR<BattleScalarRelationFilter, battleWhereInput>
    menu?: XOR<MenuScalarRelationFilter, menuWhereInput>
  }

  export type battle_menuOrderByWithRelationInput = {
    id?: SortOrder
    menu_name?: SortOrderInput | SortOrder
    boundary_angle?: SortOrderInput | SortOrder
    menu_order?: SortOrderInput | SortOrder
    battle_id?: SortOrder
    menu_id?: SortOrder
    battle?: battleOrderByWithRelationInput
    menu?: menuOrderByWithRelationInput
    _relevance?: battle_menuOrderByRelevanceInput
  }

  export type battle_menuWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: battle_menuWhereInput | battle_menuWhereInput[]
    OR?: battle_menuWhereInput[]
    NOT?: battle_menuWhereInput | battle_menuWhereInput[]
    menu_name?: StringNullableFilter<"battle_menu"> | string | null
    boundary_angle?: FloatNullableFilter<"battle_menu"> | number | null
    menu_order?: IntNullableFilter<"battle_menu"> | number | null
    battle_id?: StringFilter<"battle_menu"> | string
    menu_id?: BigIntFilter<"battle_menu"> | bigint | number
    battle?: XOR<BattleScalarRelationFilter, battleWhereInput>
    menu?: XOR<MenuScalarRelationFilter, menuWhereInput>
  }, "id">

  export type battle_menuOrderByWithAggregationInput = {
    id?: SortOrder
    menu_name?: SortOrderInput | SortOrder
    boundary_angle?: SortOrderInput | SortOrder
    menu_order?: SortOrderInput | SortOrder
    battle_id?: SortOrder
    menu_id?: SortOrder
    _count?: battle_menuCountOrderByAggregateInput
    _avg?: battle_menuAvgOrderByAggregateInput
    _max?: battle_menuMaxOrderByAggregateInput
    _min?: battle_menuMinOrderByAggregateInput
    _sum?: battle_menuSumOrderByAggregateInput
  }

  export type battle_menuScalarWhereWithAggregatesInput = {
    AND?: battle_menuScalarWhereWithAggregatesInput | battle_menuScalarWhereWithAggregatesInput[]
    OR?: battle_menuScalarWhereWithAggregatesInput[]
    NOT?: battle_menuScalarWhereWithAggregatesInput | battle_menuScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"battle_menu"> | bigint | number
    menu_name?: StringNullableWithAggregatesFilter<"battle_menu"> | string | null
    boundary_angle?: FloatNullableWithAggregatesFilter<"battle_menu"> | number | null
    menu_order?: IntNullableWithAggregatesFilter<"battle_menu"> | number | null
    battle_id?: StringWithAggregatesFilter<"battle_menu"> | string
    menu_id?: BigIntWithAggregatesFilter<"battle_menu"> | bigint | number
  }

  export type battle_participantWhereInput = {
    AND?: battle_participantWhereInput | battle_participantWhereInput[]
    OR?: battle_participantWhereInput[]
    NOT?: battle_participantWhereInput | battle_participantWhereInput[]
    battle_id?: StringFilter<"battle_participant"> | string
    user_id?: BigIntFilter<"battle_participant"> | bigint | number
    nickname?: StringNullableFilter<"battle_participant"> | string | null
    is_creater?: IntNullableFilter<"battle_participant"> | number | null
    joined_at?: DateTimeNullableFilter<"battle_participant"> | Date | string | null
    battle?: XOR<BattleScalarRelationFilter, battleWhereInput>
  }

  export type battle_participantOrderByWithRelationInput = {
    battle_id?: SortOrder
    user_id?: SortOrder
    nickname?: SortOrderInput | SortOrder
    is_creater?: SortOrderInput | SortOrder
    joined_at?: SortOrderInput | SortOrder
    battle?: battleOrderByWithRelationInput
    _relevance?: battle_participantOrderByRelevanceInput
  }

  export type battle_participantWhereUniqueInput = Prisma.AtLeast<{
    user_id_battle_id?: battle_participantUser_idBattle_idCompoundUniqueInput
    AND?: battle_participantWhereInput | battle_participantWhereInput[]
    OR?: battle_participantWhereInput[]
    NOT?: battle_participantWhereInput | battle_participantWhereInput[]
    battle_id?: StringFilter<"battle_participant"> | string
    user_id?: BigIntFilter<"battle_participant"> | bigint | number
    nickname?: StringNullableFilter<"battle_participant"> | string | null
    is_creater?: IntNullableFilter<"battle_participant"> | number | null
    joined_at?: DateTimeNullableFilter<"battle_participant"> | Date | string | null
    battle?: XOR<BattleScalarRelationFilter, battleWhereInput>
  }, "user_id_battle_id">

  export type battle_participantOrderByWithAggregationInput = {
    battle_id?: SortOrder
    user_id?: SortOrder
    nickname?: SortOrderInput | SortOrder
    is_creater?: SortOrderInput | SortOrder
    joined_at?: SortOrderInput | SortOrder
    _count?: battle_participantCountOrderByAggregateInput
    _avg?: battle_participantAvgOrderByAggregateInput
    _max?: battle_participantMaxOrderByAggregateInput
    _min?: battle_participantMinOrderByAggregateInput
    _sum?: battle_participantSumOrderByAggregateInput
  }

  export type battle_participantScalarWhereWithAggregatesInput = {
    AND?: battle_participantScalarWhereWithAggregatesInput | battle_participantScalarWhereWithAggregatesInput[]
    OR?: battle_participantScalarWhereWithAggregatesInput[]
    NOT?: battle_participantScalarWhereWithAggregatesInput | battle_participantScalarWhereWithAggregatesInput[]
    battle_id?: StringWithAggregatesFilter<"battle_participant"> | string
    user_id?: BigIntWithAggregatesFilter<"battle_participant"> | bigint | number
    nickname?: StringNullableWithAggregatesFilter<"battle_participant"> | string | null
    is_creater?: IntNullableWithAggregatesFilter<"battle_participant"> | number | null
    joined_at?: DateTimeNullableWithAggregatesFilter<"battle_participant"> | Date | string | null
  }

  export type menu_alleryWhereInput = {
    AND?: menu_alleryWhereInput | menu_alleryWhereInput[]
    OR?: menu_alleryWhereInput[]
    NOT?: menu_alleryWhereInput | menu_alleryWhereInput[]
    menu_id?: BigIntFilter<"menu_allery"> | bigint | number
    allergy_id?: BigIntFilter<"menu_allery"> | bigint | number
    allery?: XOR<AllergyScalarRelationFilter, allergyWhereInput>
    menu?: XOR<MenuScalarRelationFilter, menuWhereInput>
  }

  export type menu_alleryOrderByWithRelationInput = {
    menu_id?: SortOrder
    allergy_id?: SortOrder
    allery?: allergyOrderByWithRelationInput
    menu?: menuOrderByWithRelationInput
  }

  export type menu_alleryWhereUniqueInput = Prisma.AtLeast<{
    menu_id_allergy_id?: menu_alleryMenu_idAllergy_idCompoundUniqueInput
    AND?: menu_alleryWhereInput | menu_alleryWhereInput[]
    OR?: menu_alleryWhereInput[]
    NOT?: menu_alleryWhereInput | menu_alleryWhereInput[]
    menu_id?: BigIntFilter<"menu_allery"> | bigint | number
    allergy_id?: BigIntFilter<"menu_allery"> | bigint | number
    allery?: XOR<AllergyScalarRelationFilter, allergyWhereInput>
    menu?: XOR<MenuScalarRelationFilter, menuWhereInput>
  }, "menu_id_allergy_id">

  export type menu_alleryOrderByWithAggregationInput = {
    menu_id?: SortOrder
    allergy_id?: SortOrder
    _count?: menu_alleryCountOrderByAggregateInput
    _avg?: menu_alleryAvgOrderByAggregateInput
    _max?: menu_alleryMaxOrderByAggregateInput
    _min?: menu_alleryMinOrderByAggregateInput
    _sum?: menu_allerySumOrderByAggregateInput
  }

  export type menu_alleryScalarWhereWithAggregatesInput = {
    AND?: menu_alleryScalarWhereWithAggregatesInput | menu_alleryScalarWhereWithAggregatesInput[]
    OR?: menu_alleryScalarWhereWithAggregatesInput[]
    NOT?: menu_alleryScalarWhereWithAggregatesInput | menu_alleryScalarWhereWithAggregatesInput[]
    menu_id?: BigIntWithAggregatesFilter<"menu_allery"> | bigint | number
    allergy_id?: BigIntWithAggregatesFilter<"menu_allery"> | bigint | number
  }

  export type menu_vitaminWhereInput = {
    AND?: menu_vitaminWhereInput | menu_vitaminWhereInput[]
    OR?: menu_vitaminWhereInput[]
    NOT?: menu_vitaminWhereInput | menu_vitaminWhereInput[]
    menu_id?: BigIntFilter<"menu_vitamin"> | bigint | number
    vitamin_id?: BigIntFilter<"menu_vitamin"> | bigint | number
    menu?: XOR<MenuScalarRelationFilter, menuWhereInput>
    vitamin?: XOR<VitaminScalarRelationFilter, vitaminWhereInput>
  }

  export type menu_vitaminOrderByWithRelationInput = {
    menu_id?: SortOrder
    vitamin_id?: SortOrder
    menu?: menuOrderByWithRelationInput
    vitamin?: vitaminOrderByWithRelationInput
  }

  export type menu_vitaminWhereUniqueInput = Prisma.AtLeast<{
    menu_id_vitamin_id?: menu_vitaminMenu_idVitamin_idCompoundUniqueInput
    AND?: menu_vitaminWhereInput | menu_vitaminWhereInput[]
    OR?: menu_vitaminWhereInput[]
    NOT?: menu_vitaminWhereInput | menu_vitaminWhereInput[]
    menu_id?: BigIntFilter<"menu_vitamin"> | bigint | number
    vitamin_id?: BigIntFilter<"menu_vitamin"> | bigint | number
    menu?: XOR<MenuScalarRelationFilter, menuWhereInput>
    vitamin?: XOR<VitaminScalarRelationFilter, vitaminWhereInput>
  }, "menu_id_vitamin_id">

  export type menu_vitaminOrderByWithAggregationInput = {
    menu_id?: SortOrder
    vitamin_id?: SortOrder
    _count?: menu_vitaminCountOrderByAggregateInput
    _avg?: menu_vitaminAvgOrderByAggregateInput
    _max?: menu_vitaminMaxOrderByAggregateInput
    _min?: menu_vitaminMinOrderByAggregateInput
    _sum?: menu_vitaminSumOrderByAggregateInput
  }

  export type menu_vitaminScalarWhereWithAggregatesInput = {
    AND?: menu_vitaminScalarWhereWithAggregatesInput | menu_vitaminScalarWhereWithAggregatesInput[]
    OR?: menu_vitaminScalarWhereWithAggregatesInput[]
    NOT?: menu_vitaminScalarWhereWithAggregatesInput | menu_vitaminScalarWhereWithAggregatesInput[]
    menu_id?: BigIntWithAggregatesFilter<"menu_vitamin"> | bigint | number
    vitamin_id?: BigIntWithAggregatesFilter<"menu_vitamin"> | bigint | number
  }

  export type spin_resultWhereInput = {
    AND?: spin_resultWhereInput | spin_resultWhereInput[]
    OR?: spin_resultWhereInput[]
    NOT?: spin_resultWhereInput | spin_resultWhereInput[]
    id?: BigIntFilter<"spin_result"> | bigint | number
    nickname?: StringNullableFilter<"spin_result"> | string | null
    stopped_angle?: FloatNullableFilter<"spin_result"> | number | null
    distance_to_boundary?: FloatNullableFilter<"spin_result"> | number | null
    rank?: IntNullableFilter<"spin_result"> | number | null
    spin_at?: DateTimeNullableFilter<"spin_result"> | Date | string | null
    battle_id?: StringFilter<"spin_result"> | string
    closest_menu_id?: BigIntFilter<"spin_result"> | bigint | number
    battle?: XOR<BattleScalarRelationFilter, battleWhereInput>
    menu?: XOR<MenuScalarRelationFilter, menuWhereInput>
  }

  export type spin_resultOrderByWithRelationInput = {
    id?: SortOrder
    nickname?: SortOrderInput | SortOrder
    stopped_angle?: SortOrderInput | SortOrder
    distance_to_boundary?: SortOrderInput | SortOrder
    rank?: SortOrderInput | SortOrder
    spin_at?: SortOrderInput | SortOrder
    battle_id?: SortOrder
    closest_menu_id?: SortOrder
    battle?: battleOrderByWithRelationInput
    menu?: menuOrderByWithRelationInput
    _relevance?: spin_resultOrderByRelevanceInput
  }

  export type spin_resultWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: spin_resultWhereInput | spin_resultWhereInput[]
    OR?: spin_resultWhereInput[]
    NOT?: spin_resultWhereInput | spin_resultWhereInput[]
    nickname?: StringNullableFilter<"spin_result"> | string | null
    stopped_angle?: FloatNullableFilter<"spin_result"> | number | null
    distance_to_boundary?: FloatNullableFilter<"spin_result"> | number | null
    rank?: IntNullableFilter<"spin_result"> | number | null
    spin_at?: DateTimeNullableFilter<"spin_result"> | Date | string | null
    battle_id?: StringFilter<"spin_result"> | string
    closest_menu_id?: BigIntFilter<"spin_result"> | bigint | number
    battle?: XOR<BattleScalarRelationFilter, battleWhereInput>
    menu?: XOR<MenuScalarRelationFilter, menuWhereInput>
  }, "id">

  export type spin_resultOrderByWithAggregationInput = {
    id?: SortOrder
    nickname?: SortOrderInput | SortOrder
    stopped_angle?: SortOrderInput | SortOrder
    distance_to_boundary?: SortOrderInput | SortOrder
    rank?: SortOrderInput | SortOrder
    spin_at?: SortOrderInput | SortOrder
    battle_id?: SortOrder
    closest_menu_id?: SortOrder
    _count?: spin_resultCountOrderByAggregateInput
    _avg?: spin_resultAvgOrderByAggregateInput
    _max?: spin_resultMaxOrderByAggregateInput
    _min?: spin_resultMinOrderByAggregateInput
    _sum?: spin_resultSumOrderByAggregateInput
  }

  export type spin_resultScalarWhereWithAggregatesInput = {
    AND?: spin_resultScalarWhereWithAggregatesInput | spin_resultScalarWhereWithAggregatesInput[]
    OR?: spin_resultScalarWhereWithAggregatesInput[]
    NOT?: spin_resultScalarWhereWithAggregatesInput | spin_resultScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"spin_result"> | bigint | number
    nickname?: StringNullableWithAggregatesFilter<"spin_result"> | string | null
    stopped_angle?: FloatNullableWithAggregatesFilter<"spin_result"> | number | null
    distance_to_boundary?: FloatNullableWithAggregatesFilter<"spin_result"> | number | null
    rank?: IntNullableWithAggregatesFilter<"spin_result"> | number | null
    spin_at?: DateTimeNullableWithAggregatesFilter<"spin_result"> | Date | string | null
    battle_id?: StringWithAggregatesFilter<"spin_result"> | string
    closest_menu_id?: BigIntWithAggregatesFilter<"spin_result"> | bigint | number
  }

  export type vitaminWhereInput = {
    AND?: vitaminWhereInput | vitaminWhereInput[]
    OR?: vitaminWhereInput[]
    NOT?: vitaminWhereInput | vitaminWhereInput[]
    id?: BigIntFilter<"vitamin"> | bigint | number
    vitamin?: StringNullableFilter<"vitamin"> | string | null
    menu_vitamin?: Menu_vitaminListRelationFilter
  }

  export type vitaminOrderByWithRelationInput = {
    id?: SortOrder
    vitamin?: SortOrderInput | SortOrder
    menu_vitamin?: menu_vitaminOrderByRelationAggregateInput
    _relevance?: vitaminOrderByRelevanceInput
  }

  export type vitaminWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: vitaminWhereInput | vitaminWhereInput[]
    OR?: vitaminWhereInput[]
    NOT?: vitaminWhereInput | vitaminWhereInput[]
    vitamin?: StringNullableFilter<"vitamin"> | string | null
    menu_vitamin?: Menu_vitaminListRelationFilter
  }, "id">

  export type vitaminOrderByWithAggregationInput = {
    id?: SortOrder
    vitamin?: SortOrderInput | SortOrder
    _count?: vitaminCountOrderByAggregateInput
    _avg?: vitaminAvgOrderByAggregateInput
    _max?: vitaminMaxOrderByAggregateInput
    _min?: vitaminMinOrderByAggregateInput
    _sum?: vitaminSumOrderByAggregateInput
  }

  export type vitaminScalarWhereWithAggregatesInput = {
    AND?: vitaminScalarWhereWithAggregatesInput | vitaminScalarWhereWithAggregatesInput[]
    OR?: vitaminScalarWhereWithAggregatesInput[]
    NOT?: vitaminScalarWhereWithAggregatesInput | vitaminScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"vitamin"> | bigint | number
    vitamin?: StringNullableWithAggregatesFilter<"vitamin"> | string | null
  }

  export type allergyWhereInput = {
    AND?: allergyWhereInput | allergyWhereInput[]
    OR?: allergyWhereInput[]
    NOT?: allergyWhereInput | allergyWhereInput[]
    id?: BigIntFilter<"allergy"> | bigint | number
    allergy?: StringNullableFilter<"allergy"> | string | null
    menu_allery?: Menu_alleryListRelationFilter
  }

  export type allergyOrderByWithRelationInput = {
    id?: SortOrder
    allergy?: SortOrderInput | SortOrder
    menu_allery?: menu_alleryOrderByRelationAggregateInput
    _relevance?: allergyOrderByRelevanceInput
  }

  export type allergyWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: allergyWhereInput | allergyWhereInput[]
    OR?: allergyWhereInput[]
    NOT?: allergyWhereInput | allergyWhereInput[]
    allergy?: StringNullableFilter<"allergy"> | string | null
    menu_allery?: Menu_alleryListRelationFilter
  }, "id">

  export type allergyOrderByWithAggregationInput = {
    id?: SortOrder
    allergy?: SortOrderInput | SortOrder
    _count?: allergyCountOrderByAggregateInput
    _avg?: allergyAvgOrderByAggregateInput
    _max?: allergyMaxOrderByAggregateInput
    _min?: allergyMinOrderByAggregateInput
    _sum?: allergySumOrderByAggregateInput
  }

  export type allergyScalarWhereWithAggregatesInput = {
    AND?: allergyScalarWhereWithAggregatesInput | allergyScalarWhereWithAggregatesInput[]
    OR?: allergyScalarWhereWithAggregatesInput[]
    NOT?: allergyScalarWhereWithAggregatesInput | allergyScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"allergy"> | bigint | number
    allergy?: StringNullableWithAggregatesFilter<"allergy"> | string | null
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

  export type menuCreateInput = {
    id?: bigint | number
    name: string
    description?: string | null
    calory?: bigint | number | null
    carbo?: bigint | number | null
    protein?: bigint | number | null
    fat?: bigint | number | null
    sodium?: bigint | number | null
    image_link?: string | null
    battle_menu?: battle_menuCreateNestedManyWithoutMenuInput
    menu_allery?: menu_alleryCreateNestedManyWithoutMenuInput
    menu_tag?: menu_tagCreateNestedManyWithoutMenuInput
    menu_vitamin?: menu_vitaminCreateNestedManyWithoutMenuInput
    mukburim?: mukburimCreateNestedManyWithoutMenuInput
    spin_result?: spin_resultCreateNestedManyWithoutMenuInput
  }

  export type menuUncheckedCreateInput = {
    id?: bigint | number
    name: string
    description?: string | null
    calory?: bigint | number | null
    carbo?: bigint | number | null
    protein?: bigint | number | null
    fat?: bigint | number | null
    sodium?: bigint | number | null
    image_link?: string | null
    battle_menu?: battle_menuUncheckedCreateNestedManyWithoutMenuInput
    menu_allery?: menu_alleryUncheckedCreateNestedManyWithoutMenuInput
    menu_tag?: menu_tagUncheckedCreateNestedManyWithoutMenuInput
    menu_vitamin?: menu_vitaminUncheckedCreateNestedManyWithoutMenuInput
    mukburim?: mukburimUncheckedCreateNestedManyWithoutMenuInput
    spin_result?: spin_resultUncheckedCreateNestedManyWithoutMenuInput
  }

  export type menuUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    calory?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    carbo?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    protein?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    fat?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    sodium?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    image_link?: NullableStringFieldUpdateOperationsInput | string | null
    battle_menu?: battle_menuUpdateManyWithoutMenuNestedInput
    menu_allery?: menu_alleryUpdateManyWithoutMenuNestedInput
    menu_tag?: menu_tagUpdateManyWithoutMenuNestedInput
    menu_vitamin?: menu_vitaminUpdateManyWithoutMenuNestedInput
    mukburim?: mukburimUpdateManyWithoutMenuNestedInput
    spin_result?: spin_resultUpdateManyWithoutMenuNestedInput
  }

  export type menuUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    calory?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    carbo?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    protein?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    fat?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    sodium?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    image_link?: NullableStringFieldUpdateOperationsInput | string | null
    battle_menu?: battle_menuUncheckedUpdateManyWithoutMenuNestedInput
    menu_allery?: menu_alleryUncheckedUpdateManyWithoutMenuNestedInput
    menu_tag?: menu_tagUncheckedUpdateManyWithoutMenuNestedInput
    menu_vitamin?: menu_vitaminUncheckedUpdateManyWithoutMenuNestedInput
    mukburim?: mukburimUncheckedUpdateManyWithoutMenuNestedInput
    spin_result?: spin_resultUncheckedUpdateManyWithoutMenuNestedInput
  }

  export type menuCreateManyInput = {
    id?: bigint | number
    name: string
    description?: string | null
    calory?: bigint | number | null
    carbo?: bigint | number | null
    protein?: bigint | number | null
    fat?: bigint | number | null
    sodium?: bigint | number | null
    image_link?: string | null
  }

  export type menuUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    calory?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    carbo?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    protein?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    fat?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    sodium?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    image_link?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type menuUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    calory?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    carbo?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    protein?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    fat?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    sodium?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    image_link?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type mukburimCreateInput = {
    id: bigint | number
    user_id: bigint | number
    date?: Date | string | null
    menu: menuCreateNestedOneWithoutMukburimInput
  }

  export type mukburimUncheckedCreateInput = {
    id: bigint | number
    menu_id: bigint | number
    user_id: bigint | number
    date?: Date | string | null
  }

  export type mukburimUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    menu?: menuUpdateOneRequiredWithoutMukburimNestedInput
  }

  export type mukburimUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    menu_id?: BigIntFieldUpdateOperationsInput | bigint | number
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type mukburimCreateManyInput = {
    id: bigint | number
    menu_id: bigint | number
    user_id: bigint | number
    date?: Date | string | null
  }

  export type mukburimUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type mukburimUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    menu_id?: BigIntFieldUpdateOperationsInput | bigint | number
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type menu_tagCreateInput = {
    id?: bigint | number
    tag?: string | null
    menu: menuCreateNestedOneWithoutMenu_tagInput
  }

  export type menu_tagUncheckedCreateInput = {
    id?: bigint | number
    menu_id: bigint | number
    tag?: string | null
  }

  export type menu_tagUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    tag?: NullableStringFieldUpdateOperationsInput | string | null
    menu?: menuUpdateOneRequiredWithoutMenu_tagNestedInput
  }

  export type menu_tagUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    menu_id?: BigIntFieldUpdateOperationsInput | bigint | number
    tag?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type menu_tagCreateManyInput = {
    id?: bigint | number
    menu_id: bigint | number
    tag?: string | null
  }

  export type menu_tagUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    tag?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type menu_tagUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    menu_id?: BigIntFieldUpdateOperationsInput | bigint | number
    tag?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type battleCreateInput = {
    id: string
    creater_nickname?: string | null
    status?: string | null
    participant_count?: number | null
    created_at?: Date | string | null
    finished_at?: Date | string | null
    expires_at?: Date | string | null
    battle_menu?: battle_menuCreateNestedManyWithoutBattleInput
    battle_participant?: battle_participantCreateNestedManyWithoutBattleInput
    spin_result?: spin_resultCreateNestedManyWithoutBattleInput
  }

  export type battleUncheckedCreateInput = {
    id: string
    creater_nickname?: string | null
    status?: string | null
    participant_count?: number | null
    created_at?: Date | string | null
    finished_at?: Date | string | null
    expires_at?: Date | string | null
    battle_menu?: battle_menuUncheckedCreateNestedManyWithoutBattleInput
    battle_participant?: battle_participantUncheckedCreateNestedManyWithoutBattleInput
    spin_result?: spin_resultUncheckedCreateNestedManyWithoutBattleInput
  }

  export type battleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    creater_nickname?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    participant_count?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finished_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    battle_menu?: battle_menuUpdateManyWithoutBattleNestedInput
    battle_participant?: battle_participantUpdateManyWithoutBattleNestedInput
    spin_result?: spin_resultUpdateManyWithoutBattleNestedInput
  }

  export type battleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    creater_nickname?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    participant_count?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finished_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    battle_menu?: battle_menuUncheckedUpdateManyWithoutBattleNestedInput
    battle_participant?: battle_participantUncheckedUpdateManyWithoutBattleNestedInput
    spin_result?: spin_resultUncheckedUpdateManyWithoutBattleNestedInput
  }

  export type battleCreateManyInput = {
    id: string
    creater_nickname?: string | null
    status?: string | null
    participant_count?: number | null
    created_at?: Date | string | null
    finished_at?: Date | string | null
    expires_at?: Date | string | null
  }

  export type battleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    creater_nickname?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    participant_count?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finished_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type battleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    creater_nickname?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    participant_count?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finished_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type battle_menuCreateInput = {
    id?: bigint | number
    menu_name?: string | null
    boundary_angle?: number | null
    menu_order?: number | null
    battle: battleCreateNestedOneWithoutBattle_menuInput
    menu: menuCreateNestedOneWithoutBattle_menuInput
  }

  export type battle_menuUncheckedCreateInput = {
    id?: bigint | number
    menu_name?: string | null
    boundary_angle?: number | null
    menu_order?: number | null
    battle_id: string
    menu_id: bigint | number
  }

  export type battle_menuUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    menu_name?: NullableStringFieldUpdateOperationsInput | string | null
    boundary_angle?: NullableFloatFieldUpdateOperationsInput | number | null
    menu_order?: NullableIntFieldUpdateOperationsInput | number | null
    battle?: battleUpdateOneRequiredWithoutBattle_menuNestedInput
    menu?: menuUpdateOneRequiredWithoutBattle_menuNestedInput
  }

  export type battle_menuUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    menu_name?: NullableStringFieldUpdateOperationsInput | string | null
    boundary_angle?: NullableFloatFieldUpdateOperationsInput | number | null
    menu_order?: NullableIntFieldUpdateOperationsInput | number | null
    battle_id?: StringFieldUpdateOperationsInput | string
    menu_id?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type battle_menuCreateManyInput = {
    id?: bigint | number
    menu_name?: string | null
    boundary_angle?: number | null
    menu_order?: number | null
    battle_id: string
    menu_id: bigint | number
  }

  export type battle_menuUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    menu_name?: NullableStringFieldUpdateOperationsInput | string | null
    boundary_angle?: NullableFloatFieldUpdateOperationsInput | number | null
    menu_order?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type battle_menuUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    menu_name?: NullableStringFieldUpdateOperationsInput | string | null
    boundary_angle?: NullableFloatFieldUpdateOperationsInput | number | null
    menu_order?: NullableIntFieldUpdateOperationsInput | number | null
    battle_id?: StringFieldUpdateOperationsInput | string
    menu_id?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type battle_participantCreateInput = {
    user_id: bigint | number
    nickname?: string | null
    is_creater?: number | null
    joined_at?: Date | string | null
    battle: battleCreateNestedOneWithoutBattle_participantInput
  }

  export type battle_participantUncheckedCreateInput = {
    battle_id: string
    user_id: bigint | number
    nickname?: string | null
    is_creater?: number | null
    joined_at?: Date | string | null
  }

  export type battle_participantUpdateInput = {
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    is_creater?: NullableIntFieldUpdateOperationsInput | number | null
    joined_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    battle?: battleUpdateOneRequiredWithoutBattle_participantNestedInput
  }

  export type battle_participantUncheckedUpdateInput = {
    battle_id?: StringFieldUpdateOperationsInput | string
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    is_creater?: NullableIntFieldUpdateOperationsInput | number | null
    joined_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type battle_participantCreateManyInput = {
    battle_id: string
    user_id: bigint | number
    nickname?: string | null
    is_creater?: number | null
    joined_at?: Date | string | null
  }

  export type battle_participantUpdateManyMutationInput = {
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    is_creater?: NullableIntFieldUpdateOperationsInput | number | null
    joined_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type battle_participantUncheckedUpdateManyInput = {
    battle_id?: StringFieldUpdateOperationsInput | string
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    is_creater?: NullableIntFieldUpdateOperationsInput | number | null
    joined_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type menu_alleryCreateInput = {
    allery: allergyCreateNestedOneWithoutMenu_alleryInput
    menu: menuCreateNestedOneWithoutMenu_alleryInput
  }

  export type menu_alleryUncheckedCreateInput = {
    menu_id: bigint | number
    allergy_id: bigint | number
  }

  export type menu_alleryUpdateInput = {
    allery?: allergyUpdateOneRequiredWithoutMenu_alleryNestedInput
    menu?: menuUpdateOneRequiredWithoutMenu_alleryNestedInput
  }

  export type menu_alleryUncheckedUpdateInput = {
    menu_id?: BigIntFieldUpdateOperationsInput | bigint | number
    allergy_id?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type menu_alleryCreateManyInput = {
    menu_id: bigint | number
    allergy_id: bigint | number
  }

  export type menu_alleryUpdateManyMutationInput = {

  }

  export type menu_alleryUncheckedUpdateManyInput = {
    menu_id?: BigIntFieldUpdateOperationsInput | bigint | number
    allergy_id?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type menu_vitaminCreateInput = {
    menu: menuCreateNestedOneWithoutMenu_vitaminInput
    vitamin: vitaminCreateNestedOneWithoutMenu_vitaminInput
  }

  export type menu_vitaminUncheckedCreateInput = {
    menu_id: bigint | number
    vitamin_id: bigint | number
  }

  export type menu_vitaminUpdateInput = {
    menu?: menuUpdateOneRequiredWithoutMenu_vitaminNestedInput
    vitamin?: vitaminUpdateOneRequiredWithoutMenu_vitaminNestedInput
  }

  export type menu_vitaminUncheckedUpdateInput = {
    menu_id?: BigIntFieldUpdateOperationsInput | bigint | number
    vitamin_id?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type menu_vitaminCreateManyInput = {
    menu_id: bigint | number
    vitamin_id: bigint | number
  }

  export type menu_vitaminUpdateManyMutationInput = {

  }

  export type menu_vitaminUncheckedUpdateManyInput = {
    menu_id?: BigIntFieldUpdateOperationsInput | bigint | number
    vitamin_id?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type spin_resultCreateInput = {
    id?: bigint | number
    nickname?: string | null
    stopped_angle?: number | null
    distance_to_boundary?: number | null
    rank?: number | null
    spin_at?: Date | string | null
    battle: battleCreateNestedOneWithoutSpin_resultInput
    menu: menuCreateNestedOneWithoutSpin_resultInput
  }

  export type spin_resultUncheckedCreateInput = {
    id?: bigint | number
    nickname?: string | null
    stopped_angle?: number | null
    distance_to_boundary?: number | null
    rank?: number | null
    spin_at?: Date | string | null
    battle_id: string
    closest_menu_id: bigint | number
  }

  export type spin_resultUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    stopped_angle?: NullableFloatFieldUpdateOperationsInput | number | null
    distance_to_boundary?: NullableFloatFieldUpdateOperationsInput | number | null
    rank?: NullableIntFieldUpdateOperationsInput | number | null
    spin_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    battle?: battleUpdateOneRequiredWithoutSpin_resultNestedInput
    menu?: menuUpdateOneRequiredWithoutSpin_resultNestedInput
  }

  export type spin_resultUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    stopped_angle?: NullableFloatFieldUpdateOperationsInput | number | null
    distance_to_boundary?: NullableFloatFieldUpdateOperationsInput | number | null
    rank?: NullableIntFieldUpdateOperationsInput | number | null
    spin_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    battle_id?: StringFieldUpdateOperationsInput | string
    closest_menu_id?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type spin_resultCreateManyInput = {
    id?: bigint | number
    nickname?: string | null
    stopped_angle?: number | null
    distance_to_boundary?: number | null
    rank?: number | null
    spin_at?: Date | string | null
    battle_id: string
    closest_menu_id: bigint | number
  }

  export type spin_resultUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    stopped_angle?: NullableFloatFieldUpdateOperationsInput | number | null
    distance_to_boundary?: NullableFloatFieldUpdateOperationsInput | number | null
    rank?: NullableIntFieldUpdateOperationsInput | number | null
    spin_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type spin_resultUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    stopped_angle?: NullableFloatFieldUpdateOperationsInput | number | null
    distance_to_boundary?: NullableFloatFieldUpdateOperationsInput | number | null
    rank?: NullableIntFieldUpdateOperationsInput | number | null
    spin_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    battle_id?: StringFieldUpdateOperationsInput | string
    closest_menu_id?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type vitaminCreateInput = {
    id?: bigint | number
    vitamin?: string | null
    menu_vitamin?: menu_vitaminCreateNestedManyWithoutVitaminInput
  }

  export type vitaminUncheckedCreateInput = {
    id?: bigint | number
    vitamin?: string | null
    menu_vitamin?: menu_vitaminUncheckedCreateNestedManyWithoutVitaminInput
  }

  export type vitaminUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    vitamin?: NullableStringFieldUpdateOperationsInput | string | null
    menu_vitamin?: menu_vitaminUpdateManyWithoutVitaminNestedInput
  }

  export type vitaminUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    vitamin?: NullableStringFieldUpdateOperationsInput | string | null
    menu_vitamin?: menu_vitaminUncheckedUpdateManyWithoutVitaminNestedInput
  }

  export type vitaminCreateManyInput = {
    id?: bigint | number
    vitamin?: string | null
  }

  export type vitaminUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    vitamin?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type vitaminUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    vitamin?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type allergyCreateInput = {
    id?: bigint | number
    allergy?: string | null
    menu_allery?: menu_alleryCreateNestedManyWithoutAlleryInput
  }

  export type allergyUncheckedCreateInput = {
    id?: bigint | number
    allergy?: string | null
    menu_allery?: menu_alleryUncheckedCreateNestedManyWithoutAlleryInput
  }

  export type allergyUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    allergy?: NullableStringFieldUpdateOperationsInput | string | null
    menu_allery?: menu_alleryUpdateManyWithoutAlleryNestedInput
  }

  export type allergyUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    allergy?: NullableStringFieldUpdateOperationsInput | string | null
    menu_allery?: menu_alleryUncheckedUpdateManyWithoutAlleryNestedInput
  }

  export type allergyCreateManyInput = {
    id?: bigint | number
    allergy?: string | null
  }

  export type allergyUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    allergy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type allergyUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    allergy?: NullableStringFieldUpdateOperationsInput | string | null
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

  export type BigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | null
    notIn?: bigint[] | number[] | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
  }

  export type Battle_menuListRelationFilter = {
    every?: battle_menuWhereInput
    some?: battle_menuWhereInput
    none?: battle_menuWhereInput
  }

  export type Menu_alleryListRelationFilter = {
    every?: menu_alleryWhereInput
    some?: menu_alleryWhereInput
    none?: menu_alleryWhereInput
  }

  export type Menu_tagListRelationFilter = {
    every?: menu_tagWhereInput
    some?: menu_tagWhereInput
    none?: menu_tagWhereInput
  }

  export type Menu_vitaminListRelationFilter = {
    every?: menu_vitaminWhereInput
    some?: menu_vitaminWhereInput
    none?: menu_vitaminWhereInput
  }

  export type MukburimListRelationFilter = {
    every?: mukburimWhereInput
    some?: mukburimWhereInput
    none?: mukburimWhereInput
  }

  export type Spin_resultListRelationFilter = {
    every?: spin_resultWhereInput
    some?: spin_resultWhereInput
    none?: spin_resultWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type battle_menuOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type menu_alleryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type menu_tagOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type menu_vitaminOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type mukburimOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type spin_resultOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type menuOrderByRelevanceInput = {
    fields: menuOrderByRelevanceFieldEnum | menuOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type menuCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    calory?: SortOrder
    carbo?: SortOrder
    protein?: SortOrder
    fat?: SortOrder
    sodium?: SortOrder
    image_link?: SortOrder
  }

  export type menuAvgOrderByAggregateInput = {
    id?: SortOrder
    calory?: SortOrder
    carbo?: SortOrder
    protein?: SortOrder
    fat?: SortOrder
    sodium?: SortOrder
  }

  export type menuMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    calory?: SortOrder
    carbo?: SortOrder
    protein?: SortOrder
    fat?: SortOrder
    sodium?: SortOrder
    image_link?: SortOrder
  }

  export type menuMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    calory?: SortOrder
    carbo?: SortOrder
    protein?: SortOrder
    fat?: SortOrder
    sodium?: SortOrder
    image_link?: SortOrder
  }

  export type menuSumOrderByAggregateInput = {
    id?: SortOrder
    calory?: SortOrder
    carbo?: SortOrder
    protein?: SortOrder
    fat?: SortOrder
    sodium?: SortOrder
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

  export type BigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | null
    notIn?: bigint[] | number[] | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
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

  export type MenuScalarRelationFilter = {
    is?: menuWhereInput
    isNot?: menuWhereInput
  }

  export type mukburimCountOrderByAggregateInput = {
    id?: SortOrder
    menu_id?: SortOrder
    user_id?: SortOrder
    date?: SortOrder
  }

  export type mukburimAvgOrderByAggregateInput = {
    id?: SortOrder
    menu_id?: SortOrder
    user_id?: SortOrder
  }

  export type mukburimMaxOrderByAggregateInput = {
    id?: SortOrder
    menu_id?: SortOrder
    user_id?: SortOrder
    date?: SortOrder
  }

  export type mukburimMinOrderByAggregateInput = {
    id?: SortOrder
    menu_id?: SortOrder
    user_id?: SortOrder
    date?: SortOrder
  }

  export type mukburimSumOrderByAggregateInput = {
    id?: SortOrder
    menu_id?: SortOrder
    user_id?: SortOrder
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

  export type menu_tagOrderByRelevanceInput = {
    fields: menu_tagOrderByRelevanceFieldEnum | menu_tagOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type menu_tagCountOrderByAggregateInput = {
    id?: SortOrder
    menu_id?: SortOrder
    tag?: SortOrder
  }

  export type menu_tagAvgOrderByAggregateInput = {
    id?: SortOrder
    menu_id?: SortOrder
  }

  export type menu_tagMaxOrderByAggregateInput = {
    id?: SortOrder
    menu_id?: SortOrder
    tag?: SortOrder
  }

  export type menu_tagMinOrderByAggregateInput = {
    id?: SortOrder
    menu_id?: SortOrder
    tag?: SortOrder
  }

  export type menu_tagSumOrderByAggregateInput = {
    id?: SortOrder
    menu_id?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type Battle_participantListRelationFilter = {
    every?: battle_participantWhereInput
    some?: battle_participantWhereInput
    none?: battle_participantWhereInput
  }

  export type battle_participantOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type battleOrderByRelevanceInput = {
    fields: battleOrderByRelevanceFieldEnum | battleOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type battleCountOrderByAggregateInput = {
    id?: SortOrder
    creater_nickname?: SortOrder
    status?: SortOrder
    participant_count?: SortOrder
    created_at?: SortOrder
    finished_at?: SortOrder
    expires_at?: SortOrder
  }

  export type battleAvgOrderByAggregateInput = {
    participant_count?: SortOrder
  }

  export type battleMaxOrderByAggregateInput = {
    id?: SortOrder
    creater_nickname?: SortOrder
    status?: SortOrder
    participant_count?: SortOrder
    created_at?: SortOrder
    finished_at?: SortOrder
    expires_at?: SortOrder
  }

  export type battleMinOrderByAggregateInput = {
    id?: SortOrder
    creater_nickname?: SortOrder
    status?: SortOrder
    participant_count?: SortOrder
    created_at?: SortOrder
    finished_at?: SortOrder
    expires_at?: SortOrder
  }

  export type battleSumOrderByAggregateInput = {
    participant_count?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
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

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type BattleScalarRelationFilter = {
    is?: battleWhereInput
    isNot?: battleWhereInput
  }

  export type battle_menuOrderByRelevanceInput = {
    fields: battle_menuOrderByRelevanceFieldEnum | battle_menuOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type battle_menuCountOrderByAggregateInput = {
    id?: SortOrder
    menu_name?: SortOrder
    boundary_angle?: SortOrder
    menu_order?: SortOrder
    battle_id?: SortOrder
    menu_id?: SortOrder
  }

  export type battle_menuAvgOrderByAggregateInput = {
    id?: SortOrder
    boundary_angle?: SortOrder
    menu_order?: SortOrder
    menu_id?: SortOrder
  }

  export type battle_menuMaxOrderByAggregateInput = {
    id?: SortOrder
    menu_name?: SortOrder
    boundary_angle?: SortOrder
    menu_order?: SortOrder
    battle_id?: SortOrder
    menu_id?: SortOrder
  }

  export type battle_menuMinOrderByAggregateInput = {
    id?: SortOrder
    menu_name?: SortOrder
    boundary_angle?: SortOrder
    menu_order?: SortOrder
    battle_id?: SortOrder
    menu_id?: SortOrder
  }

  export type battle_menuSumOrderByAggregateInput = {
    id?: SortOrder
    boundary_angle?: SortOrder
    menu_order?: SortOrder
    menu_id?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type battle_participantOrderByRelevanceInput = {
    fields: battle_participantOrderByRelevanceFieldEnum | battle_participantOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type battle_participantUser_idBattle_idCompoundUniqueInput = {
    user_id: bigint | number
    battle_id: string
  }

  export type battle_participantCountOrderByAggregateInput = {
    battle_id?: SortOrder
    user_id?: SortOrder
    nickname?: SortOrder
    is_creater?: SortOrder
    joined_at?: SortOrder
  }

  export type battle_participantAvgOrderByAggregateInput = {
    user_id?: SortOrder
    is_creater?: SortOrder
  }

  export type battle_participantMaxOrderByAggregateInput = {
    battle_id?: SortOrder
    user_id?: SortOrder
    nickname?: SortOrder
    is_creater?: SortOrder
    joined_at?: SortOrder
  }

  export type battle_participantMinOrderByAggregateInput = {
    battle_id?: SortOrder
    user_id?: SortOrder
    nickname?: SortOrder
    is_creater?: SortOrder
    joined_at?: SortOrder
  }

  export type battle_participantSumOrderByAggregateInput = {
    user_id?: SortOrder
    is_creater?: SortOrder
  }

  export type AllergyScalarRelationFilter = {
    is?: allergyWhereInput
    isNot?: allergyWhereInput
  }

  export type menu_alleryMenu_idAllergy_idCompoundUniqueInput = {
    menu_id: bigint | number
    allergy_id: bigint | number
  }

  export type menu_alleryCountOrderByAggregateInput = {
    menu_id?: SortOrder
    allergy_id?: SortOrder
  }

  export type menu_alleryAvgOrderByAggregateInput = {
    menu_id?: SortOrder
    allergy_id?: SortOrder
  }

  export type menu_alleryMaxOrderByAggregateInput = {
    menu_id?: SortOrder
    allergy_id?: SortOrder
  }

  export type menu_alleryMinOrderByAggregateInput = {
    menu_id?: SortOrder
    allergy_id?: SortOrder
  }

  export type menu_allerySumOrderByAggregateInput = {
    menu_id?: SortOrder
    allergy_id?: SortOrder
  }

  export type VitaminScalarRelationFilter = {
    is?: vitaminWhereInput
    isNot?: vitaminWhereInput
  }

  export type menu_vitaminMenu_idVitamin_idCompoundUniqueInput = {
    menu_id: bigint | number
    vitamin_id: bigint | number
  }

  export type menu_vitaminCountOrderByAggregateInput = {
    menu_id?: SortOrder
    vitamin_id?: SortOrder
  }

  export type menu_vitaminAvgOrderByAggregateInput = {
    menu_id?: SortOrder
    vitamin_id?: SortOrder
  }

  export type menu_vitaminMaxOrderByAggregateInput = {
    menu_id?: SortOrder
    vitamin_id?: SortOrder
  }

  export type menu_vitaminMinOrderByAggregateInput = {
    menu_id?: SortOrder
    vitamin_id?: SortOrder
  }

  export type menu_vitaminSumOrderByAggregateInput = {
    menu_id?: SortOrder
    vitamin_id?: SortOrder
  }

  export type spin_resultOrderByRelevanceInput = {
    fields: spin_resultOrderByRelevanceFieldEnum | spin_resultOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type spin_resultCountOrderByAggregateInput = {
    id?: SortOrder
    nickname?: SortOrder
    stopped_angle?: SortOrder
    distance_to_boundary?: SortOrder
    rank?: SortOrder
    spin_at?: SortOrder
    battle_id?: SortOrder
    closest_menu_id?: SortOrder
  }

  export type spin_resultAvgOrderByAggregateInput = {
    id?: SortOrder
    stopped_angle?: SortOrder
    distance_to_boundary?: SortOrder
    rank?: SortOrder
    closest_menu_id?: SortOrder
  }

  export type spin_resultMaxOrderByAggregateInput = {
    id?: SortOrder
    nickname?: SortOrder
    stopped_angle?: SortOrder
    distance_to_boundary?: SortOrder
    rank?: SortOrder
    spin_at?: SortOrder
    battle_id?: SortOrder
    closest_menu_id?: SortOrder
  }

  export type spin_resultMinOrderByAggregateInput = {
    id?: SortOrder
    nickname?: SortOrder
    stopped_angle?: SortOrder
    distance_to_boundary?: SortOrder
    rank?: SortOrder
    spin_at?: SortOrder
    battle_id?: SortOrder
    closest_menu_id?: SortOrder
  }

  export type spin_resultSumOrderByAggregateInput = {
    id?: SortOrder
    stopped_angle?: SortOrder
    distance_to_boundary?: SortOrder
    rank?: SortOrder
    closest_menu_id?: SortOrder
  }

  export type vitaminOrderByRelevanceInput = {
    fields: vitaminOrderByRelevanceFieldEnum | vitaminOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type vitaminCountOrderByAggregateInput = {
    id?: SortOrder
    vitamin?: SortOrder
  }

  export type vitaminAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type vitaminMaxOrderByAggregateInput = {
    id?: SortOrder
    vitamin?: SortOrder
  }

  export type vitaminMinOrderByAggregateInput = {
    id?: SortOrder
    vitamin?: SortOrder
  }

  export type vitaminSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type allergyOrderByRelevanceInput = {
    fields: allergyOrderByRelevanceFieldEnum | allergyOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type allergyCountOrderByAggregateInput = {
    id?: SortOrder
    allergy?: SortOrder
  }

  export type allergyAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type allergyMaxOrderByAggregateInput = {
    id?: SortOrder
    allergy?: SortOrder
  }

  export type allergyMinOrderByAggregateInput = {
    id?: SortOrder
    allergy?: SortOrder
  }

  export type allergySumOrderByAggregateInput = {
    id?: SortOrder
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

  export type battle_menuCreateNestedManyWithoutMenuInput = {
    create?: XOR<battle_menuCreateWithoutMenuInput, battle_menuUncheckedCreateWithoutMenuInput> | battle_menuCreateWithoutMenuInput[] | battle_menuUncheckedCreateWithoutMenuInput[]
    connectOrCreate?: battle_menuCreateOrConnectWithoutMenuInput | battle_menuCreateOrConnectWithoutMenuInput[]
    createMany?: battle_menuCreateManyMenuInputEnvelope
    connect?: battle_menuWhereUniqueInput | battle_menuWhereUniqueInput[]
  }

  export type menu_alleryCreateNestedManyWithoutMenuInput = {
    create?: XOR<menu_alleryCreateWithoutMenuInput, menu_alleryUncheckedCreateWithoutMenuInput> | menu_alleryCreateWithoutMenuInput[] | menu_alleryUncheckedCreateWithoutMenuInput[]
    connectOrCreate?: menu_alleryCreateOrConnectWithoutMenuInput | menu_alleryCreateOrConnectWithoutMenuInput[]
    createMany?: menu_alleryCreateManyMenuInputEnvelope
    connect?: menu_alleryWhereUniqueInput | menu_alleryWhereUniqueInput[]
  }

  export type menu_tagCreateNestedManyWithoutMenuInput = {
    create?: XOR<menu_tagCreateWithoutMenuInput, menu_tagUncheckedCreateWithoutMenuInput> | menu_tagCreateWithoutMenuInput[] | menu_tagUncheckedCreateWithoutMenuInput[]
    connectOrCreate?: menu_tagCreateOrConnectWithoutMenuInput | menu_tagCreateOrConnectWithoutMenuInput[]
    createMany?: menu_tagCreateManyMenuInputEnvelope
    connect?: menu_tagWhereUniqueInput | menu_tagWhereUniqueInput[]
  }

  export type menu_vitaminCreateNestedManyWithoutMenuInput = {
    create?: XOR<menu_vitaminCreateWithoutMenuInput, menu_vitaminUncheckedCreateWithoutMenuInput> | menu_vitaminCreateWithoutMenuInput[] | menu_vitaminUncheckedCreateWithoutMenuInput[]
    connectOrCreate?: menu_vitaminCreateOrConnectWithoutMenuInput | menu_vitaminCreateOrConnectWithoutMenuInput[]
    createMany?: menu_vitaminCreateManyMenuInputEnvelope
    connect?: menu_vitaminWhereUniqueInput | menu_vitaminWhereUniqueInput[]
  }

  export type mukburimCreateNestedManyWithoutMenuInput = {
    create?: XOR<mukburimCreateWithoutMenuInput, mukburimUncheckedCreateWithoutMenuInput> | mukburimCreateWithoutMenuInput[] | mukburimUncheckedCreateWithoutMenuInput[]
    connectOrCreate?: mukburimCreateOrConnectWithoutMenuInput | mukburimCreateOrConnectWithoutMenuInput[]
    createMany?: mukburimCreateManyMenuInputEnvelope
    connect?: mukburimWhereUniqueInput | mukburimWhereUniqueInput[]
  }

  export type spin_resultCreateNestedManyWithoutMenuInput = {
    create?: XOR<spin_resultCreateWithoutMenuInput, spin_resultUncheckedCreateWithoutMenuInput> | spin_resultCreateWithoutMenuInput[] | spin_resultUncheckedCreateWithoutMenuInput[]
    connectOrCreate?: spin_resultCreateOrConnectWithoutMenuInput | spin_resultCreateOrConnectWithoutMenuInput[]
    createMany?: spin_resultCreateManyMenuInputEnvelope
    connect?: spin_resultWhereUniqueInput | spin_resultWhereUniqueInput[]
  }

  export type battle_menuUncheckedCreateNestedManyWithoutMenuInput = {
    create?: XOR<battle_menuCreateWithoutMenuInput, battle_menuUncheckedCreateWithoutMenuInput> | battle_menuCreateWithoutMenuInput[] | battle_menuUncheckedCreateWithoutMenuInput[]
    connectOrCreate?: battle_menuCreateOrConnectWithoutMenuInput | battle_menuCreateOrConnectWithoutMenuInput[]
    createMany?: battle_menuCreateManyMenuInputEnvelope
    connect?: battle_menuWhereUniqueInput | battle_menuWhereUniqueInput[]
  }

  export type menu_alleryUncheckedCreateNestedManyWithoutMenuInput = {
    create?: XOR<menu_alleryCreateWithoutMenuInput, menu_alleryUncheckedCreateWithoutMenuInput> | menu_alleryCreateWithoutMenuInput[] | menu_alleryUncheckedCreateWithoutMenuInput[]
    connectOrCreate?: menu_alleryCreateOrConnectWithoutMenuInput | menu_alleryCreateOrConnectWithoutMenuInput[]
    createMany?: menu_alleryCreateManyMenuInputEnvelope
    connect?: menu_alleryWhereUniqueInput | menu_alleryWhereUniqueInput[]
  }

  export type menu_tagUncheckedCreateNestedManyWithoutMenuInput = {
    create?: XOR<menu_tagCreateWithoutMenuInput, menu_tagUncheckedCreateWithoutMenuInput> | menu_tagCreateWithoutMenuInput[] | menu_tagUncheckedCreateWithoutMenuInput[]
    connectOrCreate?: menu_tagCreateOrConnectWithoutMenuInput | menu_tagCreateOrConnectWithoutMenuInput[]
    createMany?: menu_tagCreateManyMenuInputEnvelope
    connect?: menu_tagWhereUniqueInput | menu_tagWhereUniqueInput[]
  }

  export type menu_vitaminUncheckedCreateNestedManyWithoutMenuInput = {
    create?: XOR<menu_vitaminCreateWithoutMenuInput, menu_vitaminUncheckedCreateWithoutMenuInput> | menu_vitaminCreateWithoutMenuInput[] | menu_vitaminUncheckedCreateWithoutMenuInput[]
    connectOrCreate?: menu_vitaminCreateOrConnectWithoutMenuInput | menu_vitaminCreateOrConnectWithoutMenuInput[]
    createMany?: menu_vitaminCreateManyMenuInputEnvelope
    connect?: menu_vitaminWhereUniqueInput | menu_vitaminWhereUniqueInput[]
  }

  export type mukburimUncheckedCreateNestedManyWithoutMenuInput = {
    create?: XOR<mukburimCreateWithoutMenuInput, mukburimUncheckedCreateWithoutMenuInput> | mukburimCreateWithoutMenuInput[] | mukburimUncheckedCreateWithoutMenuInput[]
    connectOrCreate?: mukburimCreateOrConnectWithoutMenuInput | mukburimCreateOrConnectWithoutMenuInput[]
    createMany?: mukburimCreateManyMenuInputEnvelope
    connect?: mukburimWhereUniqueInput | mukburimWhereUniqueInput[]
  }

  export type spin_resultUncheckedCreateNestedManyWithoutMenuInput = {
    create?: XOR<spin_resultCreateWithoutMenuInput, spin_resultUncheckedCreateWithoutMenuInput> | spin_resultCreateWithoutMenuInput[] | spin_resultUncheckedCreateWithoutMenuInput[]
    connectOrCreate?: spin_resultCreateOrConnectWithoutMenuInput | spin_resultCreateOrConnectWithoutMenuInput[]
    createMany?: spin_resultCreateManyMenuInputEnvelope
    connect?: spin_resultWhereUniqueInput | spin_resultWhereUniqueInput[]
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableBigIntFieldUpdateOperationsInput = {
    set?: bigint | number | null
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type battle_menuUpdateManyWithoutMenuNestedInput = {
    create?: XOR<battle_menuCreateWithoutMenuInput, battle_menuUncheckedCreateWithoutMenuInput> | battle_menuCreateWithoutMenuInput[] | battle_menuUncheckedCreateWithoutMenuInput[]
    connectOrCreate?: battle_menuCreateOrConnectWithoutMenuInput | battle_menuCreateOrConnectWithoutMenuInput[]
    upsert?: battle_menuUpsertWithWhereUniqueWithoutMenuInput | battle_menuUpsertWithWhereUniqueWithoutMenuInput[]
    createMany?: battle_menuCreateManyMenuInputEnvelope
    set?: battle_menuWhereUniqueInput | battle_menuWhereUniqueInput[]
    disconnect?: battle_menuWhereUniqueInput | battle_menuWhereUniqueInput[]
    delete?: battle_menuWhereUniqueInput | battle_menuWhereUniqueInput[]
    connect?: battle_menuWhereUniqueInput | battle_menuWhereUniqueInput[]
    update?: battle_menuUpdateWithWhereUniqueWithoutMenuInput | battle_menuUpdateWithWhereUniqueWithoutMenuInput[]
    updateMany?: battle_menuUpdateManyWithWhereWithoutMenuInput | battle_menuUpdateManyWithWhereWithoutMenuInput[]
    deleteMany?: battle_menuScalarWhereInput | battle_menuScalarWhereInput[]
  }

  export type menu_alleryUpdateManyWithoutMenuNestedInput = {
    create?: XOR<menu_alleryCreateWithoutMenuInput, menu_alleryUncheckedCreateWithoutMenuInput> | menu_alleryCreateWithoutMenuInput[] | menu_alleryUncheckedCreateWithoutMenuInput[]
    connectOrCreate?: menu_alleryCreateOrConnectWithoutMenuInput | menu_alleryCreateOrConnectWithoutMenuInput[]
    upsert?: menu_alleryUpsertWithWhereUniqueWithoutMenuInput | menu_alleryUpsertWithWhereUniqueWithoutMenuInput[]
    createMany?: menu_alleryCreateManyMenuInputEnvelope
    set?: menu_alleryWhereUniqueInput | menu_alleryWhereUniqueInput[]
    disconnect?: menu_alleryWhereUniqueInput | menu_alleryWhereUniqueInput[]
    delete?: menu_alleryWhereUniqueInput | menu_alleryWhereUniqueInput[]
    connect?: menu_alleryWhereUniqueInput | menu_alleryWhereUniqueInput[]
    update?: menu_alleryUpdateWithWhereUniqueWithoutMenuInput | menu_alleryUpdateWithWhereUniqueWithoutMenuInput[]
    updateMany?: menu_alleryUpdateManyWithWhereWithoutMenuInput | menu_alleryUpdateManyWithWhereWithoutMenuInput[]
    deleteMany?: menu_alleryScalarWhereInput | menu_alleryScalarWhereInput[]
  }

  export type menu_tagUpdateManyWithoutMenuNestedInput = {
    create?: XOR<menu_tagCreateWithoutMenuInput, menu_tagUncheckedCreateWithoutMenuInput> | menu_tagCreateWithoutMenuInput[] | menu_tagUncheckedCreateWithoutMenuInput[]
    connectOrCreate?: menu_tagCreateOrConnectWithoutMenuInput | menu_tagCreateOrConnectWithoutMenuInput[]
    upsert?: menu_tagUpsertWithWhereUniqueWithoutMenuInput | menu_tagUpsertWithWhereUniqueWithoutMenuInput[]
    createMany?: menu_tagCreateManyMenuInputEnvelope
    set?: menu_tagWhereUniqueInput | menu_tagWhereUniqueInput[]
    disconnect?: menu_tagWhereUniqueInput | menu_tagWhereUniqueInput[]
    delete?: menu_tagWhereUniqueInput | menu_tagWhereUniqueInput[]
    connect?: menu_tagWhereUniqueInput | menu_tagWhereUniqueInput[]
    update?: menu_tagUpdateWithWhereUniqueWithoutMenuInput | menu_tagUpdateWithWhereUniqueWithoutMenuInput[]
    updateMany?: menu_tagUpdateManyWithWhereWithoutMenuInput | menu_tagUpdateManyWithWhereWithoutMenuInput[]
    deleteMany?: menu_tagScalarWhereInput | menu_tagScalarWhereInput[]
  }

  export type menu_vitaminUpdateManyWithoutMenuNestedInput = {
    create?: XOR<menu_vitaminCreateWithoutMenuInput, menu_vitaminUncheckedCreateWithoutMenuInput> | menu_vitaminCreateWithoutMenuInput[] | menu_vitaminUncheckedCreateWithoutMenuInput[]
    connectOrCreate?: menu_vitaminCreateOrConnectWithoutMenuInput | menu_vitaminCreateOrConnectWithoutMenuInput[]
    upsert?: menu_vitaminUpsertWithWhereUniqueWithoutMenuInput | menu_vitaminUpsertWithWhereUniqueWithoutMenuInput[]
    createMany?: menu_vitaminCreateManyMenuInputEnvelope
    set?: menu_vitaminWhereUniqueInput | menu_vitaminWhereUniqueInput[]
    disconnect?: menu_vitaminWhereUniqueInput | menu_vitaminWhereUniqueInput[]
    delete?: menu_vitaminWhereUniqueInput | menu_vitaminWhereUniqueInput[]
    connect?: menu_vitaminWhereUniqueInput | menu_vitaminWhereUniqueInput[]
    update?: menu_vitaminUpdateWithWhereUniqueWithoutMenuInput | menu_vitaminUpdateWithWhereUniqueWithoutMenuInput[]
    updateMany?: menu_vitaminUpdateManyWithWhereWithoutMenuInput | menu_vitaminUpdateManyWithWhereWithoutMenuInput[]
    deleteMany?: menu_vitaminScalarWhereInput | menu_vitaminScalarWhereInput[]
  }

  export type mukburimUpdateManyWithoutMenuNestedInput = {
    create?: XOR<mukburimCreateWithoutMenuInput, mukburimUncheckedCreateWithoutMenuInput> | mukburimCreateWithoutMenuInput[] | mukburimUncheckedCreateWithoutMenuInput[]
    connectOrCreate?: mukburimCreateOrConnectWithoutMenuInput | mukburimCreateOrConnectWithoutMenuInput[]
    upsert?: mukburimUpsertWithWhereUniqueWithoutMenuInput | mukburimUpsertWithWhereUniqueWithoutMenuInput[]
    createMany?: mukburimCreateManyMenuInputEnvelope
    set?: mukburimWhereUniqueInput | mukburimWhereUniqueInput[]
    disconnect?: mukburimWhereUniqueInput | mukburimWhereUniqueInput[]
    delete?: mukburimWhereUniqueInput | mukburimWhereUniqueInput[]
    connect?: mukburimWhereUniqueInput | mukburimWhereUniqueInput[]
    update?: mukburimUpdateWithWhereUniqueWithoutMenuInput | mukburimUpdateWithWhereUniqueWithoutMenuInput[]
    updateMany?: mukburimUpdateManyWithWhereWithoutMenuInput | mukburimUpdateManyWithWhereWithoutMenuInput[]
    deleteMany?: mukburimScalarWhereInput | mukburimScalarWhereInput[]
  }

  export type spin_resultUpdateManyWithoutMenuNestedInput = {
    create?: XOR<spin_resultCreateWithoutMenuInput, spin_resultUncheckedCreateWithoutMenuInput> | spin_resultCreateWithoutMenuInput[] | spin_resultUncheckedCreateWithoutMenuInput[]
    connectOrCreate?: spin_resultCreateOrConnectWithoutMenuInput | spin_resultCreateOrConnectWithoutMenuInput[]
    upsert?: spin_resultUpsertWithWhereUniqueWithoutMenuInput | spin_resultUpsertWithWhereUniqueWithoutMenuInput[]
    createMany?: spin_resultCreateManyMenuInputEnvelope
    set?: spin_resultWhereUniqueInput | spin_resultWhereUniqueInput[]
    disconnect?: spin_resultWhereUniqueInput | spin_resultWhereUniqueInput[]
    delete?: spin_resultWhereUniqueInput | spin_resultWhereUniqueInput[]
    connect?: spin_resultWhereUniqueInput | spin_resultWhereUniqueInput[]
    update?: spin_resultUpdateWithWhereUniqueWithoutMenuInput | spin_resultUpdateWithWhereUniqueWithoutMenuInput[]
    updateMany?: spin_resultUpdateManyWithWhereWithoutMenuInput | spin_resultUpdateManyWithWhereWithoutMenuInput[]
    deleteMany?: spin_resultScalarWhereInput | spin_resultScalarWhereInput[]
  }

  export type battle_menuUncheckedUpdateManyWithoutMenuNestedInput = {
    create?: XOR<battle_menuCreateWithoutMenuInput, battle_menuUncheckedCreateWithoutMenuInput> | battle_menuCreateWithoutMenuInput[] | battle_menuUncheckedCreateWithoutMenuInput[]
    connectOrCreate?: battle_menuCreateOrConnectWithoutMenuInput | battle_menuCreateOrConnectWithoutMenuInput[]
    upsert?: battle_menuUpsertWithWhereUniqueWithoutMenuInput | battle_menuUpsertWithWhereUniqueWithoutMenuInput[]
    createMany?: battle_menuCreateManyMenuInputEnvelope
    set?: battle_menuWhereUniqueInput | battle_menuWhereUniqueInput[]
    disconnect?: battle_menuWhereUniqueInput | battle_menuWhereUniqueInput[]
    delete?: battle_menuWhereUniqueInput | battle_menuWhereUniqueInput[]
    connect?: battle_menuWhereUniqueInput | battle_menuWhereUniqueInput[]
    update?: battle_menuUpdateWithWhereUniqueWithoutMenuInput | battle_menuUpdateWithWhereUniqueWithoutMenuInput[]
    updateMany?: battle_menuUpdateManyWithWhereWithoutMenuInput | battle_menuUpdateManyWithWhereWithoutMenuInput[]
    deleteMany?: battle_menuScalarWhereInput | battle_menuScalarWhereInput[]
  }

  export type menu_alleryUncheckedUpdateManyWithoutMenuNestedInput = {
    create?: XOR<menu_alleryCreateWithoutMenuInput, menu_alleryUncheckedCreateWithoutMenuInput> | menu_alleryCreateWithoutMenuInput[] | menu_alleryUncheckedCreateWithoutMenuInput[]
    connectOrCreate?: menu_alleryCreateOrConnectWithoutMenuInput | menu_alleryCreateOrConnectWithoutMenuInput[]
    upsert?: menu_alleryUpsertWithWhereUniqueWithoutMenuInput | menu_alleryUpsertWithWhereUniqueWithoutMenuInput[]
    createMany?: menu_alleryCreateManyMenuInputEnvelope
    set?: menu_alleryWhereUniqueInput | menu_alleryWhereUniqueInput[]
    disconnect?: menu_alleryWhereUniqueInput | menu_alleryWhereUniqueInput[]
    delete?: menu_alleryWhereUniqueInput | menu_alleryWhereUniqueInput[]
    connect?: menu_alleryWhereUniqueInput | menu_alleryWhereUniqueInput[]
    update?: menu_alleryUpdateWithWhereUniqueWithoutMenuInput | menu_alleryUpdateWithWhereUniqueWithoutMenuInput[]
    updateMany?: menu_alleryUpdateManyWithWhereWithoutMenuInput | menu_alleryUpdateManyWithWhereWithoutMenuInput[]
    deleteMany?: menu_alleryScalarWhereInput | menu_alleryScalarWhereInput[]
  }

  export type menu_tagUncheckedUpdateManyWithoutMenuNestedInput = {
    create?: XOR<menu_tagCreateWithoutMenuInput, menu_tagUncheckedCreateWithoutMenuInput> | menu_tagCreateWithoutMenuInput[] | menu_tagUncheckedCreateWithoutMenuInput[]
    connectOrCreate?: menu_tagCreateOrConnectWithoutMenuInput | menu_tagCreateOrConnectWithoutMenuInput[]
    upsert?: menu_tagUpsertWithWhereUniqueWithoutMenuInput | menu_tagUpsertWithWhereUniqueWithoutMenuInput[]
    createMany?: menu_tagCreateManyMenuInputEnvelope
    set?: menu_tagWhereUniqueInput | menu_tagWhereUniqueInput[]
    disconnect?: menu_tagWhereUniqueInput | menu_tagWhereUniqueInput[]
    delete?: menu_tagWhereUniqueInput | menu_tagWhereUniqueInput[]
    connect?: menu_tagWhereUniqueInput | menu_tagWhereUniqueInput[]
    update?: menu_tagUpdateWithWhereUniqueWithoutMenuInput | menu_tagUpdateWithWhereUniqueWithoutMenuInput[]
    updateMany?: menu_tagUpdateManyWithWhereWithoutMenuInput | menu_tagUpdateManyWithWhereWithoutMenuInput[]
    deleteMany?: menu_tagScalarWhereInput | menu_tagScalarWhereInput[]
  }

  export type menu_vitaminUncheckedUpdateManyWithoutMenuNestedInput = {
    create?: XOR<menu_vitaminCreateWithoutMenuInput, menu_vitaminUncheckedCreateWithoutMenuInput> | menu_vitaminCreateWithoutMenuInput[] | menu_vitaminUncheckedCreateWithoutMenuInput[]
    connectOrCreate?: menu_vitaminCreateOrConnectWithoutMenuInput | menu_vitaminCreateOrConnectWithoutMenuInput[]
    upsert?: menu_vitaminUpsertWithWhereUniqueWithoutMenuInput | menu_vitaminUpsertWithWhereUniqueWithoutMenuInput[]
    createMany?: menu_vitaminCreateManyMenuInputEnvelope
    set?: menu_vitaminWhereUniqueInput | menu_vitaminWhereUniqueInput[]
    disconnect?: menu_vitaminWhereUniqueInput | menu_vitaminWhereUniqueInput[]
    delete?: menu_vitaminWhereUniqueInput | menu_vitaminWhereUniqueInput[]
    connect?: menu_vitaminWhereUniqueInput | menu_vitaminWhereUniqueInput[]
    update?: menu_vitaminUpdateWithWhereUniqueWithoutMenuInput | menu_vitaminUpdateWithWhereUniqueWithoutMenuInput[]
    updateMany?: menu_vitaminUpdateManyWithWhereWithoutMenuInput | menu_vitaminUpdateManyWithWhereWithoutMenuInput[]
    deleteMany?: menu_vitaminScalarWhereInput | menu_vitaminScalarWhereInput[]
  }

  export type mukburimUncheckedUpdateManyWithoutMenuNestedInput = {
    create?: XOR<mukburimCreateWithoutMenuInput, mukburimUncheckedCreateWithoutMenuInput> | mukburimCreateWithoutMenuInput[] | mukburimUncheckedCreateWithoutMenuInput[]
    connectOrCreate?: mukburimCreateOrConnectWithoutMenuInput | mukburimCreateOrConnectWithoutMenuInput[]
    upsert?: mukburimUpsertWithWhereUniqueWithoutMenuInput | mukburimUpsertWithWhereUniqueWithoutMenuInput[]
    createMany?: mukburimCreateManyMenuInputEnvelope
    set?: mukburimWhereUniqueInput | mukburimWhereUniqueInput[]
    disconnect?: mukburimWhereUniqueInput | mukburimWhereUniqueInput[]
    delete?: mukburimWhereUniqueInput | mukburimWhereUniqueInput[]
    connect?: mukburimWhereUniqueInput | mukburimWhereUniqueInput[]
    update?: mukburimUpdateWithWhereUniqueWithoutMenuInput | mukburimUpdateWithWhereUniqueWithoutMenuInput[]
    updateMany?: mukburimUpdateManyWithWhereWithoutMenuInput | mukburimUpdateManyWithWhereWithoutMenuInput[]
    deleteMany?: mukburimScalarWhereInput | mukburimScalarWhereInput[]
  }

  export type spin_resultUncheckedUpdateManyWithoutMenuNestedInput = {
    create?: XOR<spin_resultCreateWithoutMenuInput, spin_resultUncheckedCreateWithoutMenuInput> | spin_resultCreateWithoutMenuInput[] | spin_resultUncheckedCreateWithoutMenuInput[]
    connectOrCreate?: spin_resultCreateOrConnectWithoutMenuInput | spin_resultCreateOrConnectWithoutMenuInput[]
    upsert?: spin_resultUpsertWithWhereUniqueWithoutMenuInput | spin_resultUpsertWithWhereUniqueWithoutMenuInput[]
    createMany?: spin_resultCreateManyMenuInputEnvelope
    set?: spin_resultWhereUniqueInput | spin_resultWhereUniqueInput[]
    disconnect?: spin_resultWhereUniqueInput | spin_resultWhereUniqueInput[]
    delete?: spin_resultWhereUniqueInput | spin_resultWhereUniqueInput[]
    connect?: spin_resultWhereUniqueInput | spin_resultWhereUniqueInput[]
    update?: spin_resultUpdateWithWhereUniqueWithoutMenuInput | spin_resultUpdateWithWhereUniqueWithoutMenuInput[]
    updateMany?: spin_resultUpdateManyWithWhereWithoutMenuInput | spin_resultUpdateManyWithWhereWithoutMenuInput[]
    deleteMany?: spin_resultScalarWhereInput | spin_resultScalarWhereInput[]
  }

  export type menuCreateNestedOneWithoutMukburimInput = {
    create?: XOR<menuCreateWithoutMukburimInput, menuUncheckedCreateWithoutMukburimInput>
    connectOrCreate?: menuCreateOrConnectWithoutMukburimInput
    connect?: menuWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type menuUpdateOneRequiredWithoutMukburimNestedInput = {
    create?: XOR<menuCreateWithoutMukburimInput, menuUncheckedCreateWithoutMukburimInput>
    connectOrCreate?: menuCreateOrConnectWithoutMukburimInput
    upsert?: menuUpsertWithoutMukburimInput
    connect?: menuWhereUniqueInput
    update?: XOR<XOR<menuUpdateToOneWithWhereWithoutMukburimInput, menuUpdateWithoutMukburimInput>, menuUncheckedUpdateWithoutMukburimInput>
  }

  export type menuCreateNestedOneWithoutMenu_tagInput = {
    create?: XOR<menuCreateWithoutMenu_tagInput, menuUncheckedCreateWithoutMenu_tagInput>
    connectOrCreate?: menuCreateOrConnectWithoutMenu_tagInput
    connect?: menuWhereUniqueInput
  }

  export type menuUpdateOneRequiredWithoutMenu_tagNestedInput = {
    create?: XOR<menuCreateWithoutMenu_tagInput, menuUncheckedCreateWithoutMenu_tagInput>
    connectOrCreate?: menuCreateOrConnectWithoutMenu_tagInput
    upsert?: menuUpsertWithoutMenu_tagInput
    connect?: menuWhereUniqueInput
    update?: XOR<XOR<menuUpdateToOneWithWhereWithoutMenu_tagInput, menuUpdateWithoutMenu_tagInput>, menuUncheckedUpdateWithoutMenu_tagInput>
  }

  export type battle_menuCreateNestedManyWithoutBattleInput = {
    create?: XOR<battle_menuCreateWithoutBattleInput, battle_menuUncheckedCreateWithoutBattleInput> | battle_menuCreateWithoutBattleInput[] | battle_menuUncheckedCreateWithoutBattleInput[]
    connectOrCreate?: battle_menuCreateOrConnectWithoutBattleInput | battle_menuCreateOrConnectWithoutBattleInput[]
    createMany?: battle_menuCreateManyBattleInputEnvelope
    connect?: battle_menuWhereUniqueInput | battle_menuWhereUniqueInput[]
  }

  export type battle_participantCreateNestedManyWithoutBattleInput = {
    create?: XOR<battle_participantCreateWithoutBattleInput, battle_participantUncheckedCreateWithoutBattleInput> | battle_participantCreateWithoutBattleInput[] | battle_participantUncheckedCreateWithoutBattleInput[]
    connectOrCreate?: battle_participantCreateOrConnectWithoutBattleInput | battle_participantCreateOrConnectWithoutBattleInput[]
    createMany?: battle_participantCreateManyBattleInputEnvelope
    connect?: battle_participantWhereUniqueInput | battle_participantWhereUniqueInput[]
  }

  export type spin_resultCreateNestedManyWithoutBattleInput = {
    create?: XOR<spin_resultCreateWithoutBattleInput, spin_resultUncheckedCreateWithoutBattleInput> | spin_resultCreateWithoutBattleInput[] | spin_resultUncheckedCreateWithoutBattleInput[]
    connectOrCreate?: spin_resultCreateOrConnectWithoutBattleInput | spin_resultCreateOrConnectWithoutBattleInput[]
    createMany?: spin_resultCreateManyBattleInputEnvelope
    connect?: spin_resultWhereUniqueInput | spin_resultWhereUniqueInput[]
  }

  export type battle_menuUncheckedCreateNestedManyWithoutBattleInput = {
    create?: XOR<battle_menuCreateWithoutBattleInput, battle_menuUncheckedCreateWithoutBattleInput> | battle_menuCreateWithoutBattleInput[] | battle_menuUncheckedCreateWithoutBattleInput[]
    connectOrCreate?: battle_menuCreateOrConnectWithoutBattleInput | battle_menuCreateOrConnectWithoutBattleInput[]
    createMany?: battle_menuCreateManyBattleInputEnvelope
    connect?: battle_menuWhereUniqueInput | battle_menuWhereUniqueInput[]
  }

  export type battle_participantUncheckedCreateNestedManyWithoutBattleInput = {
    create?: XOR<battle_participantCreateWithoutBattleInput, battle_participantUncheckedCreateWithoutBattleInput> | battle_participantCreateWithoutBattleInput[] | battle_participantUncheckedCreateWithoutBattleInput[]
    connectOrCreate?: battle_participantCreateOrConnectWithoutBattleInput | battle_participantCreateOrConnectWithoutBattleInput[]
    createMany?: battle_participantCreateManyBattleInputEnvelope
    connect?: battle_participantWhereUniqueInput | battle_participantWhereUniqueInput[]
  }

  export type spin_resultUncheckedCreateNestedManyWithoutBattleInput = {
    create?: XOR<spin_resultCreateWithoutBattleInput, spin_resultUncheckedCreateWithoutBattleInput> | spin_resultCreateWithoutBattleInput[] | spin_resultUncheckedCreateWithoutBattleInput[]
    connectOrCreate?: spin_resultCreateOrConnectWithoutBattleInput | spin_resultCreateOrConnectWithoutBattleInput[]
    createMany?: spin_resultCreateManyBattleInputEnvelope
    connect?: spin_resultWhereUniqueInput | spin_resultWhereUniqueInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type battle_menuUpdateManyWithoutBattleNestedInput = {
    create?: XOR<battle_menuCreateWithoutBattleInput, battle_menuUncheckedCreateWithoutBattleInput> | battle_menuCreateWithoutBattleInput[] | battle_menuUncheckedCreateWithoutBattleInput[]
    connectOrCreate?: battle_menuCreateOrConnectWithoutBattleInput | battle_menuCreateOrConnectWithoutBattleInput[]
    upsert?: battle_menuUpsertWithWhereUniqueWithoutBattleInput | battle_menuUpsertWithWhereUniqueWithoutBattleInput[]
    createMany?: battle_menuCreateManyBattleInputEnvelope
    set?: battle_menuWhereUniqueInput | battle_menuWhereUniqueInput[]
    disconnect?: battle_menuWhereUniqueInput | battle_menuWhereUniqueInput[]
    delete?: battle_menuWhereUniqueInput | battle_menuWhereUniqueInput[]
    connect?: battle_menuWhereUniqueInput | battle_menuWhereUniqueInput[]
    update?: battle_menuUpdateWithWhereUniqueWithoutBattleInput | battle_menuUpdateWithWhereUniqueWithoutBattleInput[]
    updateMany?: battle_menuUpdateManyWithWhereWithoutBattleInput | battle_menuUpdateManyWithWhereWithoutBattleInput[]
    deleteMany?: battle_menuScalarWhereInput | battle_menuScalarWhereInput[]
  }

  export type battle_participantUpdateManyWithoutBattleNestedInput = {
    create?: XOR<battle_participantCreateWithoutBattleInput, battle_participantUncheckedCreateWithoutBattleInput> | battle_participantCreateWithoutBattleInput[] | battle_participantUncheckedCreateWithoutBattleInput[]
    connectOrCreate?: battle_participantCreateOrConnectWithoutBattleInput | battle_participantCreateOrConnectWithoutBattleInput[]
    upsert?: battle_participantUpsertWithWhereUniqueWithoutBattleInput | battle_participantUpsertWithWhereUniqueWithoutBattleInput[]
    createMany?: battle_participantCreateManyBattleInputEnvelope
    set?: battle_participantWhereUniqueInput | battle_participantWhereUniqueInput[]
    disconnect?: battle_participantWhereUniqueInput | battle_participantWhereUniqueInput[]
    delete?: battle_participantWhereUniqueInput | battle_participantWhereUniqueInput[]
    connect?: battle_participantWhereUniqueInput | battle_participantWhereUniqueInput[]
    update?: battle_participantUpdateWithWhereUniqueWithoutBattleInput | battle_participantUpdateWithWhereUniqueWithoutBattleInput[]
    updateMany?: battle_participantUpdateManyWithWhereWithoutBattleInput | battle_participantUpdateManyWithWhereWithoutBattleInput[]
    deleteMany?: battle_participantScalarWhereInput | battle_participantScalarWhereInput[]
  }

  export type spin_resultUpdateManyWithoutBattleNestedInput = {
    create?: XOR<spin_resultCreateWithoutBattleInput, spin_resultUncheckedCreateWithoutBattleInput> | spin_resultCreateWithoutBattleInput[] | spin_resultUncheckedCreateWithoutBattleInput[]
    connectOrCreate?: spin_resultCreateOrConnectWithoutBattleInput | spin_resultCreateOrConnectWithoutBattleInput[]
    upsert?: spin_resultUpsertWithWhereUniqueWithoutBattleInput | spin_resultUpsertWithWhereUniqueWithoutBattleInput[]
    createMany?: spin_resultCreateManyBattleInputEnvelope
    set?: spin_resultWhereUniqueInput | spin_resultWhereUniqueInput[]
    disconnect?: spin_resultWhereUniqueInput | spin_resultWhereUniqueInput[]
    delete?: spin_resultWhereUniqueInput | spin_resultWhereUniqueInput[]
    connect?: spin_resultWhereUniqueInput | spin_resultWhereUniqueInput[]
    update?: spin_resultUpdateWithWhereUniqueWithoutBattleInput | spin_resultUpdateWithWhereUniqueWithoutBattleInput[]
    updateMany?: spin_resultUpdateManyWithWhereWithoutBattleInput | spin_resultUpdateManyWithWhereWithoutBattleInput[]
    deleteMany?: spin_resultScalarWhereInput | spin_resultScalarWhereInput[]
  }

  export type battle_menuUncheckedUpdateManyWithoutBattleNestedInput = {
    create?: XOR<battle_menuCreateWithoutBattleInput, battle_menuUncheckedCreateWithoutBattleInput> | battle_menuCreateWithoutBattleInput[] | battle_menuUncheckedCreateWithoutBattleInput[]
    connectOrCreate?: battle_menuCreateOrConnectWithoutBattleInput | battle_menuCreateOrConnectWithoutBattleInput[]
    upsert?: battle_menuUpsertWithWhereUniqueWithoutBattleInput | battle_menuUpsertWithWhereUniqueWithoutBattleInput[]
    createMany?: battle_menuCreateManyBattleInputEnvelope
    set?: battle_menuWhereUniqueInput | battle_menuWhereUniqueInput[]
    disconnect?: battle_menuWhereUniqueInput | battle_menuWhereUniqueInput[]
    delete?: battle_menuWhereUniqueInput | battle_menuWhereUniqueInput[]
    connect?: battle_menuWhereUniqueInput | battle_menuWhereUniqueInput[]
    update?: battle_menuUpdateWithWhereUniqueWithoutBattleInput | battle_menuUpdateWithWhereUniqueWithoutBattleInput[]
    updateMany?: battle_menuUpdateManyWithWhereWithoutBattleInput | battle_menuUpdateManyWithWhereWithoutBattleInput[]
    deleteMany?: battle_menuScalarWhereInput | battle_menuScalarWhereInput[]
  }

  export type battle_participantUncheckedUpdateManyWithoutBattleNestedInput = {
    create?: XOR<battle_participantCreateWithoutBattleInput, battle_participantUncheckedCreateWithoutBattleInput> | battle_participantCreateWithoutBattleInput[] | battle_participantUncheckedCreateWithoutBattleInput[]
    connectOrCreate?: battle_participantCreateOrConnectWithoutBattleInput | battle_participantCreateOrConnectWithoutBattleInput[]
    upsert?: battle_participantUpsertWithWhereUniqueWithoutBattleInput | battle_participantUpsertWithWhereUniqueWithoutBattleInput[]
    createMany?: battle_participantCreateManyBattleInputEnvelope
    set?: battle_participantWhereUniqueInput | battle_participantWhereUniqueInput[]
    disconnect?: battle_participantWhereUniqueInput | battle_participantWhereUniqueInput[]
    delete?: battle_participantWhereUniqueInput | battle_participantWhereUniqueInput[]
    connect?: battle_participantWhereUniqueInput | battle_participantWhereUniqueInput[]
    update?: battle_participantUpdateWithWhereUniqueWithoutBattleInput | battle_participantUpdateWithWhereUniqueWithoutBattleInput[]
    updateMany?: battle_participantUpdateManyWithWhereWithoutBattleInput | battle_participantUpdateManyWithWhereWithoutBattleInput[]
    deleteMany?: battle_participantScalarWhereInput | battle_participantScalarWhereInput[]
  }

  export type spin_resultUncheckedUpdateManyWithoutBattleNestedInput = {
    create?: XOR<spin_resultCreateWithoutBattleInput, spin_resultUncheckedCreateWithoutBattleInput> | spin_resultCreateWithoutBattleInput[] | spin_resultUncheckedCreateWithoutBattleInput[]
    connectOrCreate?: spin_resultCreateOrConnectWithoutBattleInput | spin_resultCreateOrConnectWithoutBattleInput[]
    upsert?: spin_resultUpsertWithWhereUniqueWithoutBattleInput | spin_resultUpsertWithWhereUniqueWithoutBattleInput[]
    createMany?: spin_resultCreateManyBattleInputEnvelope
    set?: spin_resultWhereUniqueInput | spin_resultWhereUniqueInput[]
    disconnect?: spin_resultWhereUniqueInput | spin_resultWhereUniqueInput[]
    delete?: spin_resultWhereUniqueInput | spin_resultWhereUniqueInput[]
    connect?: spin_resultWhereUniqueInput | spin_resultWhereUniqueInput[]
    update?: spin_resultUpdateWithWhereUniqueWithoutBattleInput | spin_resultUpdateWithWhereUniqueWithoutBattleInput[]
    updateMany?: spin_resultUpdateManyWithWhereWithoutBattleInput | spin_resultUpdateManyWithWhereWithoutBattleInput[]
    deleteMany?: spin_resultScalarWhereInput | spin_resultScalarWhereInput[]
  }

  export type battleCreateNestedOneWithoutBattle_menuInput = {
    create?: XOR<battleCreateWithoutBattle_menuInput, battleUncheckedCreateWithoutBattle_menuInput>
    connectOrCreate?: battleCreateOrConnectWithoutBattle_menuInput
    connect?: battleWhereUniqueInput
  }

  export type menuCreateNestedOneWithoutBattle_menuInput = {
    create?: XOR<menuCreateWithoutBattle_menuInput, menuUncheckedCreateWithoutBattle_menuInput>
    connectOrCreate?: menuCreateOrConnectWithoutBattle_menuInput
    connect?: menuWhereUniqueInput
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type battleUpdateOneRequiredWithoutBattle_menuNestedInput = {
    create?: XOR<battleCreateWithoutBattle_menuInput, battleUncheckedCreateWithoutBattle_menuInput>
    connectOrCreate?: battleCreateOrConnectWithoutBattle_menuInput
    upsert?: battleUpsertWithoutBattle_menuInput
    connect?: battleWhereUniqueInput
    update?: XOR<XOR<battleUpdateToOneWithWhereWithoutBattle_menuInput, battleUpdateWithoutBattle_menuInput>, battleUncheckedUpdateWithoutBattle_menuInput>
  }

  export type menuUpdateOneRequiredWithoutBattle_menuNestedInput = {
    create?: XOR<menuCreateWithoutBattle_menuInput, menuUncheckedCreateWithoutBattle_menuInput>
    connectOrCreate?: menuCreateOrConnectWithoutBattle_menuInput
    upsert?: menuUpsertWithoutBattle_menuInput
    connect?: menuWhereUniqueInput
    update?: XOR<XOR<menuUpdateToOneWithWhereWithoutBattle_menuInput, menuUpdateWithoutBattle_menuInput>, menuUncheckedUpdateWithoutBattle_menuInput>
  }

  export type battleCreateNestedOneWithoutBattle_participantInput = {
    create?: XOR<battleCreateWithoutBattle_participantInput, battleUncheckedCreateWithoutBattle_participantInput>
    connectOrCreate?: battleCreateOrConnectWithoutBattle_participantInput
    connect?: battleWhereUniqueInput
  }

  export type battleUpdateOneRequiredWithoutBattle_participantNestedInput = {
    create?: XOR<battleCreateWithoutBattle_participantInput, battleUncheckedCreateWithoutBattle_participantInput>
    connectOrCreate?: battleCreateOrConnectWithoutBattle_participantInput
    upsert?: battleUpsertWithoutBattle_participantInput
    connect?: battleWhereUniqueInput
    update?: XOR<XOR<battleUpdateToOneWithWhereWithoutBattle_participantInput, battleUpdateWithoutBattle_participantInput>, battleUncheckedUpdateWithoutBattle_participantInput>
  }

  export type allergyCreateNestedOneWithoutMenu_alleryInput = {
    create?: XOR<allergyCreateWithoutMenu_alleryInput, allergyUncheckedCreateWithoutMenu_alleryInput>
    connectOrCreate?: allergyCreateOrConnectWithoutMenu_alleryInput
    connect?: allergyWhereUniqueInput
  }

  export type menuCreateNestedOneWithoutMenu_alleryInput = {
    create?: XOR<menuCreateWithoutMenu_alleryInput, menuUncheckedCreateWithoutMenu_alleryInput>
    connectOrCreate?: menuCreateOrConnectWithoutMenu_alleryInput
    connect?: menuWhereUniqueInput
  }

  export type allergyUpdateOneRequiredWithoutMenu_alleryNestedInput = {
    create?: XOR<allergyCreateWithoutMenu_alleryInput, allergyUncheckedCreateWithoutMenu_alleryInput>
    connectOrCreate?: allergyCreateOrConnectWithoutMenu_alleryInput
    upsert?: allergyUpsertWithoutMenu_alleryInput
    connect?: allergyWhereUniqueInput
    update?: XOR<XOR<allergyUpdateToOneWithWhereWithoutMenu_alleryInput, allergyUpdateWithoutMenu_alleryInput>, allergyUncheckedUpdateWithoutMenu_alleryInput>
  }

  export type menuUpdateOneRequiredWithoutMenu_alleryNestedInput = {
    create?: XOR<menuCreateWithoutMenu_alleryInput, menuUncheckedCreateWithoutMenu_alleryInput>
    connectOrCreate?: menuCreateOrConnectWithoutMenu_alleryInput
    upsert?: menuUpsertWithoutMenu_alleryInput
    connect?: menuWhereUniqueInput
    update?: XOR<XOR<menuUpdateToOneWithWhereWithoutMenu_alleryInput, menuUpdateWithoutMenu_alleryInput>, menuUncheckedUpdateWithoutMenu_alleryInput>
  }

  export type menuCreateNestedOneWithoutMenu_vitaminInput = {
    create?: XOR<menuCreateWithoutMenu_vitaminInput, menuUncheckedCreateWithoutMenu_vitaminInput>
    connectOrCreate?: menuCreateOrConnectWithoutMenu_vitaminInput
    connect?: menuWhereUniqueInput
  }

  export type vitaminCreateNestedOneWithoutMenu_vitaminInput = {
    create?: XOR<vitaminCreateWithoutMenu_vitaminInput, vitaminUncheckedCreateWithoutMenu_vitaminInput>
    connectOrCreate?: vitaminCreateOrConnectWithoutMenu_vitaminInput
    connect?: vitaminWhereUniqueInput
  }

  export type menuUpdateOneRequiredWithoutMenu_vitaminNestedInput = {
    create?: XOR<menuCreateWithoutMenu_vitaminInput, menuUncheckedCreateWithoutMenu_vitaminInput>
    connectOrCreate?: menuCreateOrConnectWithoutMenu_vitaminInput
    upsert?: menuUpsertWithoutMenu_vitaminInput
    connect?: menuWhereUniqueInput
    update?: XOR<XOR<menuUpdateToOneWithWhereWithoutMenu_vitaminInput, menuUpdateWithoutMenu_vitaminInput>, menuUncheckedUpdateWithoutMenu_vitaminInput>
  }

  export type vitaminUpdateOneRequiredWithoutMenu_vitaminNestedInput = {
    create?: XOR<vitaminCreateWithoutMenu_vitaminInput, vitaminUncheckedCreateWithoutMenu_vitaminInput>
    connectOrCreate?: vitaminCreateOrConnectWithoutMenu_vitaminInput
    upsert?: vitaminUpsertWithoutMenu_vitaminInput
    connect?: vitaminWhereUniqueInput
    update?: XOR<XOR<vitaminUpdateToOneWithWhereWithoutMenu_vitaminInput, vitaminUpdateWithoutMenu_vitaminInput>, vitaminUncheckedUpdateWithoutMenu_vitaminInput>
  }

  export type battleCreateNestedOneWithoutSpin_resultInput = {
    create?: XOR<battleCreateWithoutSpin_resultInput, battleUncheckedCreateWithoutSpin_resultInput>
    connectOrCreate?: battleCreateOrConnectWithoutSpin_resultInput
    connect?: battleWhereUniqueInput
  }

  export type menuCreateNestedOneWithoutSpin_resultInput = {
    create?: XOR<menuCreateWithoutSpin_resultInput, menuUncheckedCreateWithoutSpin_resultInput>
    connectOrCreate?: menuCreateOrConnectWithoutSpin_resultInput
    connect?: menuWhereUniqueInput
  }

  export type battleUpdateOneRequiredWithoutSpin_resultNestedInput = {
    create?: XOR<battleCreateWithoutSpin_resultInput, battleUncheckedCreateWithoutSpin_resultInput>
    connectOrCreate?: battleCreateOrConnectWithoutSpin_resultInput
    upsert?: battleUpsertWithoutSpin_resultInput
    connect?: battleWhereUniqueInput
    update?: XOR<XOR<battleUpdateToOneWithWhereWithoutSpin_resultInput, battleUpdateWithoutSpin_resultInput>, battleUncheckedUpdateWithoutSpin_resultInput>
  }

  export type menuUpdateOneRequiredWithoutSpin_resultNestedInput = {
    create?: XOR<menuCreateWithoutSpin_resultInput, menuUncheckedCreateWithoutSpin_resultInput>
    connectOrCreate?: menuCreateOrConnectWithoutSpin_resultInput
    upsert?: menuUpsertWithoutSpin_resultInput
    connect?: menuWhereUniqueInput
    update?: XOR<XOR<menuUpdateToOneWithWhereWithoutSpin_resultInput, menuUpdateWithoutSpin_resultInput>, menuUncheckedUpdateWithoutSpin_resultInput>
  }

  export type menu_vitaminCreateNestedManyWithoutVitaminInput = {
    create?: XOR<menu_vitaminCreateWithoutVitaminInput, menu_vitaminUncheckedCreateWithoutVitaminInput> | menu_vitaminCreateWithoutVitaminInput[] | menu_vitaminUncheckedCreateWithoutVitaminInput[]
    connectOrCreate?: menu_vitaminCreateOrConnectWithoutVitaminInput | menu_vitaminCreateOrConnectWithoutVitaminInput[]
    createMany?: menu_vitaminCreateManyVitaminInputEnvelope
    connect?: menu_vitaminWhereUniqueInput | menu_vitaminWhereUniqueInput[]
  }

  export type menu_vitaminUncheckedCreateNestedManyWithoutVitaminInput = {
    create?: XOR<menu_vitaminCreateWithoutVitaminInput, menu_vitaminUncheckedCreateWithoutVitaminInput> | menu_vitaminCreateWithoutVitaminInput[] | menu_vitaminUncheckedCreateWithoutVitaminInput[]
    connectOrCreate?: menu_vitaminCreateOrConnectWithoutVitaminInput | menu_vitaminCreateOrConnectWithoutVitaminInput[]
    createMany?: menu_vitaminCreateManyVitaminInputEnvelope
    connect?: menu_vitaminWhereUniqueInput | menu_vitaminWhereUniqueInput[]
  }

  export type menu_vitaminUpdateManyWithoutVitaminNestedInput = {
    create?: XOR<menu_vitaminCreateWithoutVitaminInput, menu_vitaminUncheckedCreateWithoutVitaminInput> | menu_vitaminCreateWithoutVitaminInput[] | menu_vitaminUncheckedCreateWithoutVitaminInput[]
    connectOrCreate?: menu_vitaminCreateOrConnectWithoutVitaminInput | menu_vitaminCreateOrConnectWithoutVitaminInput[]
    upsert?: menu_vitaminUpsertWithWhereUniqueWithoutVitaminInput | menu_vitaminUpsertWithWhereUniqueWithoutVitaminInput[]
    createMany?: menu_vitaminCreateManyVitaminInputEnvelope
    set?: menu_vitaminWhereUniqueInput | menu_vitaminWhereUniqueInput[]
    disconnect?: menu_vitaminWhereUniqueInput | menu_vitaminWhereUniqueInput[]
    delete?: menu_vitaminWhereUniqueInput | menu_vitaminWhereUniqueInput[]
    connect?: menu_vitaminWhereUniqueInput | menu_vitaminWhereUniqueInput[]
    update?: menu_vitaminUpdateWithWhereUniqueWithoutVitaminInput | menu_vitaminUpdateWithWhereUniqueWithoutVitaminInput[]
    updateMany?: menu_vitaminUpdateManyWithWhereWithoutVitaminInput | menu_vitaminUpdateManyWithWhereWithoutVitaminInput[]
    deleteMany?: menu_vitaminScalarWhereInput | menu_vitaminScalarWhereInput[]
  }

  export type menu_vitaminUncheckedUpdateManyWithoutVitaminNestedInput = {
    create?: XOR<menu_vitaminCreateWithoutVitaminInput, menu_vitaminUncheckedCreateWithoutVitaminInput> | menu_vitaminCreateWithoutVitaminInput[] | menu_vitaminUncheckedCreateWithoutVitaminInput[]
    connectOrCreate?: menu_vitaminCreateOrConnectWithoutVitaminInput | menu_vitaminCreateOrConnectWithoutVitaminInput[]
    upsert?: menu_vitaminUpsertWithWhereUniqueWithoutVitaminInput | menu_vitaminUpsertWithWhereUniqueWithoutVitaminInput[]
    createMany?: menu_vitaminCreateManyVitaminInputEnvelope
    set?: menu_vitaminWhereUniqueInput | menu_vitaminWhereUniqueInput[]
    disconnect?: menu_vitaminWhereUniqueInput | menu_vitaminWhereUniqueInput[]
    delete?: menu_vitaminWhereUniqueInput | menu_vitaminWhereUniqueInput[]
    connect?: menu_vitaminWhereUniqueInput | menu_vitaminWhereUniqueInput[]
    update?: menu_vitaminUpdateWithWhereUniqueWithoutVitaminInput | menu_vitaminUpdateWithWhereUniqueWithoutVitaminInput[]
    updateMany?: menu_vitaminUpdateManyWithWhereWithoutVitaminInput | menu_vitaminUpdateManyWithWhereWithoutVitaminInput[]
    deleteMany?: menu_vitaminScalarWhereInput | menu_vitaminScalarWhereInput[]
  }

  export type menu_alleryCreateNestedManyWithoutAlleryInput = {
    create?: XOR<menu_alleryCreateWithoutAlleryInput, menu_alleryUncheckedCreateWithoutAlleryInput> | menu_alleryCreateWithoutAlleryInput[] | menu_alleryUncheckedCreateWithoutAlleryInput[]
    connectOrCreate?: menu_alleryCreateOrConnectWithoutAlleryInput | menu_alleryCreateOrConnectWithoutAlleryInput[]
    createMany?: menu_alleryCreateManyAlleryInputEnvelope
    connect?: menu_alleryWhereUniqueInput | menu_alleryWhereUniqueInput[]
  }

  export type menu_alleryUncheckedCreateNestedManyWithoutAlleryInput = {
    create?: XOR<menu_alleryCreateWithoutAlleryInput, menu_alleryUncheckedCreateWithoutAlleryInput> | menu_alleryCreateWithoutAlleryInput[] | menu_alleryUncheckedCreateWithoutAlleryInput[]
    connectOrCreate?: menu_alleryCreateOrConnectWithoutAlleryInput | menu_alleryCreateOrConnectWithoutAlleryInput[]
    createMany?: menu_alleryCreateManyAlleryInputEnvelope
    connect?: menu_alleryWhereUniqueInput | menu_alleryWhereUniqueInput[]
  }

  export type menu_alleryUpdateManyWithoutAlleryNestedInput = {
    create?: XOR<menu_alleryCreateWithoutAlleryInput, menu_alleryUncheckedCreateWithoutAlleryInput> | menu_alleryCreateWithoutAlleryInput[] | menu_alleryUncheckedCreateWithoutAlleryInput[]
    connectOrCreate?: menu_alleryCreateOrConnectWithoutAlleryInput | menu_alleryCreateOrConnectWithoutAlleryInput[]
    upsert?: menu_alleryUpsertWithWhereUniqueWithoutAlleryInput | menu_alleryUpsertWithWhereUniqueWithoutAlleryInput[]
    createMany?: menu_alleryCreateManyAlleryInputEnvelope
    set?: menu_alleryWhereUniqueInput | menu_alleryWhereUniqueInput[]
    disconnect?: menu_alleryWhereUniqueInput | menu_alleryWhereUniqueInput[]
    delete?: menu_alleryWhereUniqueInput | menu_alleryWhereUniqueInput[]
    connect?: menu_alleryWhereUniqueInput | menu_alleryWhereUniqueInput[]
    update?: menu_alleryUpdateWithWhereUniqueWithoutAlleryInput | menu_alleryUpdateWithWhereUniqueWithoutAlleryInput[]
    updateMany?: menu_alleryUpdateManyWithWhereWithoutAlleryInput | menu_alleryUpdateManyWithWhereWithoutAlleryInput[]
    deleteMany?: menu_alleryScalarWhereInput | menu_alleryScalarWhereInput[]
  }

  export type menu_alleryUncheckedUpdateManyWithoutAlleryNestedInput = {
    create?: XOR<menu_alleryCreateWithoutAlleryInput, menu_alleryUncheckedCreateWithoutAlleryInput> | menu_alleryCreateWithoutAlleryInput[] | menu_alleryUncheckedCreateWithoutAlleryInput[]
    connectOrCreate?: menu_alleryCreateOrConnectWithoutAlleryInput | menu_alleryCreateOrConnectWithoutAlleryInput[]
    upsert?: menu_alleryUpsertWithWhereUniqueWithoutAlleryInput | menu_alleryUpsertWithWhereUniqueWithoutAlleryInput[]
    createMany?: menu_alleryCreateManyAlleryInputEnvelope
    set?: menu_alleryWhereUniqueInput | menu_alleryWhereUniqueInput[]
    disconnect?: menu_alleryWhereUniqueInput | menu_alleryWhereUniqueInput[]
    delete?: menu_alleryWhereUniqueInput | menu_alleryWhereUniqueInput[]
    connect?: menu_alleryWhereUniqueInput | menu_alleryWhereUniqueInput[]
    update?: menu_alleryUpdateWithWhereUniqueWithoutAlleryInput | menu_alleryUpdateWithWhereUniqueWithoutAlleryInput[]
    updateMany?: menu_alleryUpdateManyWithWhereWithoutAlleryInput | menu_alleryUpdateManyWithWhereWithoutAlleryInput[]
    deleteMany?: menu_alleryScalarWhereInput | menu_alleryScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
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

  export type NestedBigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | null
    notIn?: bigint[] | number[] | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
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

  export type NestedBigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | null
    notIn?: bigint[] | number[] | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
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

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
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

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
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

  export type battle_menuCreateWithoutMenuInput = {
    id?: bigint | number
    menu_name?: string | null
    boundary_angle?: number | null
    menu_order?: number | null
    battle: battleCreateNestedOneWithoutBattle_menuInput
  }

  export type battle_menuUncheckedCreateWithoutMenuInput = {
    id?: bigint | number
    menu_name?: string | null
    boundary_angle?: number | null
    menu_order?: number | null
    battle_id: string
  }

  export type battle_menuCreateOrConnectWithoutMenuInput = {
    where: battle_menuWhereUniqueInput
    create: XOR<battle_menuCreateWithoutMenuInput, battle_menuUncheckedCreateWithoutMenuInput>
  }

  export type battle_menuCreateManyMenuInputEnvelope = {
    data: battle_menuCreateManyMenuInput | battle_menuCreateManyMenuInput[]
    skipDuplicates?: boolean
  }

  export type menu_alleryCreateWithoutMenuInput = {
    allery: allergyCreateNestedOneWithoutMenu_alleryInput
  }

  export type menu_alleryUncheckedCreateWithoutMenuInput = {
    allergy_id: bigint | number
  }

  export type menu_alleryCreateOrConnectWithoutMenuInput = {
    where: menu_alleryWhereUniqueInput
    create: XOR<menu_alleryCreateWithoutMenuInput, menu_alleryUncheckedCreateWithoutMenuInput>
  }

  export type menu_alleryCreateManyMenuInputEnvelope = {
    data: menu_alleryCreateManyMenuInput | menu_alleryCreateManyMenuInput[]
    skipDuplicates?: boolean
  }

  export type menu_tagCreateWithoutMenuInput = {
    id?: bigint | number
    tag?: string | null
  }

  export type menu_tagUncheckedCreateWithoutMenuInput = {
    id?: bigint | number
    tag?: string | null
  }

  export type menu_tagCreateOrConnectWithoutMenuInput = {
    where: menu_tagWhereUniqueInput
    create: XOR<menu_tagCreateWithoutMenuInput, menu_tagUncheckedCreateWithoutMenuInput>
  }

  export type menu_tagCreateManyMenuInputEnvelope = {
    data: menu_tagCreateManyMenuInput | menu_tagCreateManyMenuInput[]
    skipDuplicates?: boolean
  }

  export type menu_vitaminCreateWithoutMenuInput = {
    vitamin: vitaminCreateNestedOneWithoutMenu_vitaminInput
  }

  export type menu_vitaminUncheckedCreateWithoutMenuInput = {
    vitamin_id: bigint | number
  }

  export type menu_vitaminCreateOrConnectWithoutMenuInput = {
    where: menu_vitaminWhereUniqueInput
    create: XOR<menu_vitaminCreateWithoutMenuInput, menu_vitaminUncheckedCreateWithoutMenuInput>
  }

  export type menu_vitaminCreateManyMenuInputEnvelope = {
    data: menu_vitaminCreateManyMenuInput | menu_vitaminCreateManyMenuInput[]
    skipDuplicates?: boolean
  }

  export type mukburimCreateWithoutMenuInput = {
    id: bigint | number
    user_id: bigint | number
    date?: Date | string | null
  }

  export type mukburimUncheckedCreateWithoutMenuInput = {
    id: bigint | number
    user_id: bigint | number
    date?: Date | string | null
  }

  export type mukburimCreateOrConnectWithoutMenuInput = {
    where: mukburimWhereUniqueInput
    create: XOR<mukburimCreateWithoutMenuInput, mukburimUncheckedCreateWithoutMenuInput>
  }

  export type mukburimCreateManyMenuInputEnvelope = {
    data: mukburimCreateManyMenuInput | mukburimCreateManyMenuInput[]
    skipDuplicates?: boolean
  }

  export type spin_resultCreateWithoutMenuInput = {
    id?: bigint | number
    nickname?: string | null
    stopped_angle?: number | null
    distance_to_boundary?: number | null
    rank?: number | null
    spin_at?: Date | string | null
    battle: battleCreateNestedOneWithoutSpin_resultInput
  }

  export type spin_resultUncheckedCreateWithoutMenuInput = {
    id?: bigint | number
    nickname?: string | null
    stopped_angle?: number | null
    distance_to_boundary?: number | null
    rank?: number | null
    spin_at?: Date | string | null
    battle_id: string
  }

  export type spin_resultCreateOrConnectWithoutMenuInput = {
    where: spin_resultWhereUniqueInput
    create: XOR<spin_resultCreateWithoutMenuInput, spin_resultUncheckedCreateWithoutMenuInput>
  }

  export type spin_resultCreateManyMenuInputEnvelope = {
    data: spin_resultCreateManyMenuInput | spin_resultCreateManyMenuInput[]
    skipDuplicates?: boolean
  }

  export type battle_menuUpsertWithWhereUniqueWithoutMenuInput = {
    where: battle_menuWhereUniqueInput
    update: XOR<battle_menuUpdateWithoutMenuInput, battle_menuUncheckedUpdateWithoutMenuInput>
    create: XOR<battle_menuCreateWithoutMenuInput, battle_menuUncheckedCreateWithoutMenuInput>
  }

  export type battle_menuUpdateWithWhereUniqueWithoutMenuInput = {
    where: battle_menuWhereUniqueInput
    data: XOR<battle_menuUpdateWithoutMenuInput, battle_menuUncheckedUpdateWithoutMenuInput>
  }

  export type battle_menuUpdateManyWithWhereWithoutMenuInput = {
    where: battle_menuScalarWhereInput
    data: XOR<battle_menuUpdateManyMutationInput, battle_menuUncheckedUpdateManyWithoutMenuInput>
  }

  export type battle_menuScalarWhereInput = {
    AND?: battle_menuScalarWhereInput | battle_menuScalarWhereInput[]
    OR?: battle_menuScalarWhereInput[]
    NOT?: battle_menuScalarWhereInput | battle_menuScalarWhereInput[]
    id?: BigIntFilter<"battle_menu"> | bigint | number
    menu_name?: StringNullableFilter<"battle_menu"> | string | null
    boundary_angle?: FloatNullableFilter<"battle_menu"> | number | null
    menu_order?: IntNullableFilter<"battle_menu"> | number | null
    battle_id?: StringFilter<"battle_menu"> | string
    menu_id?: BigIntFilter<"battle_menu"> | bigint | number
  }

  export type menu_alleryUpsertWithWhereUniqueWithoutMenuInput = {
    where: menu_alleryWhereUniqueInput
    update: XOR<menu_alleryUpdateWithoutMenuInput, menu_alleryUncheckedUpdateWithoutMenuInput>
    create: XOR<menu_alleryCreateWithoutMenuInput, menu_alleryUncheckedCreateWithoutMenuInput>
  }

  export type menu_alleryUpdateWithWhereUniqueWithoutMenuInput = {
    where: menu_alleryWhereUniqueInput
    data: XOR<menu_alleryUpdateWithoutMenuInput, menu_alleryUncheckedUpdateWithoutMenuInput>
  }

  export type menu_alleryUpdateManyWithWhereWithoutMenuInput = {
    where: menu_alleryScalarWhereInput
    data: XOR<menu_alleryUpdateManyMutationInput, menu_alleryUncheckedUpdateManyWithoutMenuInput>
  }

  export type menu_alleryScalarWhereInput = {
    AND?: menu_alleryScalarWhereInput | menu_alleryScalarWhereInput[]
    OR?: menu_alleryScalarWhereInput[]
    NOT?: menu_alleryScalarWhereInput | menu_alleryScalarWhereInput[]
    menu_id?: BigIntFilter<"menu_allery"> | bigint | number
    allergy_id?: BigIntFilter<"menu_allery"> | bigint | number
  }

  export type menu_tagUpsertWithWhereUniqueWithoutMenuInput = {
    where: menu_tagWhereUniqueInput
    update: XOR<menu_tagUpdateWithoutMenuInput, menu_tagUncheckedUpdateWithoutMenuInput>
    create: XOR<menu_tagCreateWithoutMenuInput, menu_tagUncheckedCreateWithoutMenuInput>
  }

  export type menu_tagUpdateWithWhereUniqueWithoutMenuInput = {
    where: menu_tagWhereUniqueInput
    data: XOR<menu_tagUpdateWithoutMenuInput, menu_tagUncheckedUpdateWithoutMenuInput>
  }

  export type menu_tagUpdateManyWithWhereWithoutMenuInput = {
    where: menu_tagScalarWhereInput
    data: XOR<menu_tagUpdateManyMutationInput, menu_tagUncheckedUpdateManyWithoutMenuInput>
  }

  export type menu_tagScalarWhereInput = {
    AND?: menu_tagScalarWhereInput | menu_tagScalarWhereInput[]
    OR?: menu_tagScalarWhereInput[]
    NOT?: menu_tagScalarWhereInput | menu_tagScalarWhereInput[]
    id?: BigIntFilter<"menu_tag"> | bigint | number
    menu_id?: BigIntFilter<"menu_tag"> | bigint | number
    tag?: StringNullableFilter<"menu_tag"> | string | null
  }

  export type menu_vitaminUpsertWithWhereUniqueWithoutMenuInput = {
    where: menu_vitaminWhereUniqueInput
    update: XOR<menu_vitaminUpdateWithoutMenuInput, menu_vitaminUncheckedUpdateWithoutMenuInput>
    create: XOR<menu_vitaminCreateWithoutMenuInput, menu_vitaminUncheckedCreateWithoutMenuInput>
  }

  export type menu_vitaminUpdateWithWhereUniqueWithoutMenuInput = {
    where: menu_vitaminWhereUniqueInput
    data: XOR<menu_vitaminUpdateWithoutMenuInput, menu_vitaminUncheckedUpdateWithoutMenuInput>
  }

  export type menu_vitaminUpdateManyWithWhereWithoutMenuInput = {
    where: menu_vitaminScalarWhereInput
    data: XOR<menu_vitaminUpdateManyMutationInput, menu_vitaminUncheckedUpdateManyWithoutMenuInput>
  }

  export type menu_vitaminScalarWhereInput = {
    AND?: menu_vitaminScalarWhereInput | menu_vitaminScalarWhereInput[]
    OR?: menu_vitaminScalarWhereInput[]
    NOT?: menu_vitaminScalarWhereInput | menu_vitaminScalarWhereInput[]
    menu_id?: BigIntFilter<"menu_vitamin"> | bigint | number
    vitamin_id?: BigIntFilter<"menu_vitamin"> | bigint | number
  }

  export type mukburimUpsertWithWhereUniqueWithoutMenuInput = {
    where: mukburimWhereUniqueInput
    update: XOR<mukburimUpdateWithoutMenuInput, mukburimUncheckedUpdateWithoutMenuInput>
    create: XOR<mukburimCreateWithoutMenuInput, mukburimUncheckedCreateWithoutMenuInput>
  }

  export type mukburimUpdateWithWhereUniqueWithoutMenuInput = {
    where: mukburimWhereUniqueInput
    data: XOR<mukburimUpdateWithoutMenuInput, mukburimUncheckedUpdateWithoutMenuInput>
  }

  export type mukburimUpdateManyWithWhereWithoutMenuInput = {
    where: mukburimScalarWhereInput
    data: XOR<mukburimUpdateManyMutationInput, mukburimUncheckedUpdateManyWithoutMenuInput>
  }

  export type mukburimScalarWhereInput = {
    AND?: mukburimScalarWhereInput | mukburimScalarWhereInput[]
    OR?: mukburimScalarWhereInput[]
    NOT?: mukburimScalarWhereInput | mukburimScalarWhereInput[]
    id?: BigIntFilter<"mukburim"> | bigint | number
    menu_id?: BigIntFilter<"mukburim"> | bigint | number
    user_id?: BigIntFilter<"mukburim"> | bigint | number
    date?: DateTimeNullableFilter<"mukburim"> | Date | string | null
  }

  export type spin_resultUpsertWithWhereUniqueWithoutMenuInput = {
    where: spin_resultWhereUniqueInput
    update: XOR<spin_resultUpdateWithoutMenuInput, spin_resultUncheckedUpdateWithoutMenuInput>
    create: XOR<spin_resultCreateWithoutMenuInput, spin_resultUncheckedCreateWithoutMenuInput>
  }

  export type spin_resultUpdateWithWhereUniqueWithoutMenuInput = {
    where: spin_resultWhereUniqueInput
    data: XOR<spin_resultUpdateWithoutMenuInput, spin_resultUncheckedUpdateWithoutMenuInput>
  }

  export type spin_resultUpdateManyWithWhereWithoutMenuInput = {
    where: spin_resultScalarWhereInput
    data: XOR<spin_resultUpdateManyMutationInput, spin_resultUncheckedUpdateManyWithoutMenuInput>
  }

  export type spin_resultScalarWhereInput = {
    AND?: spin_resultScalarWhereInput | spin_resultScalarWhereInput[]
    OR?: spin_resultScalarWhereInput[]
    NOT?: spin_resultScalarWhereInput | spin_resultScalarWhereInput[]
    id?: BigIntFilter<"spin_result"> | bigint | number
    nickname?: StringNullableFilter<"spin_result"> | string | null
    stopped_angle?: FloatNullableFilter<"spin_result"> | number | null
    distance_to_boundary?: FloatNullableFilter<"spin_result"> | number | null
    rank?: IntNullableFilter<"spin_result"> | number | null
    spin_at?: DateTimeNullableFilter<"spin_result"> | Date | string | null
    battle_id?: StringFilter<"spin_result"> | string
    closest_menu_id?: BigIntFilter<"spin_result"> | bigint | number
  }

  export type menuCreateWithoutMukburimInput = {
    id?: bigint | number
    name: string
    description?: string | null
    calory?: bigint | number | null
    carbo?: bigint | number | null
    protein?: bigint | number | null
    fat?: bigint | number | null
    sodium?: bigint | number | null
    image_link?: string | null
    battle_menu?: battle_menuCreateNestedManyWithoutMenuInput
    menu_allery?: menu_alleryCreateNestedManyWithoutMenuInput
    menu_tag?: menu_tagCreateNestedManyWithoutMenuInput
    menu_vitamin?: menu_vitaminCreateNestedManyWithoutMenuInput
    spin_result?: spin_resultCreateNestedManyWithoutMenuInput
  }

  export type menuUncheckedCreateWithoutMukburimInput = {
    id?: bigint | number
    name: string
    description?: string | null
    calory?: bigint | number | null
    carbo?: bigint | number | null
    protein?: bigint | number | null
    fat?: bigint | number | null
    sodium?: bigint | number | null
    image_link?: string | null
    battle_menu?: battle_menuUncheckedCreateNestedManyWithoutMenuInput
    menu_allery?: menu_alleryUncheckedCreateNestedManyWithoutMenuInput
    menu_tag?: menu_tagUncheckedCreateNestedManyWithoutMenuInput
    menu_vitamin?: menu_vitaminUncheckedCreateNestedManyWithoutMenuInput
    spin_result?: spin_resultUncheckedCreateNestedManyWithoutMenuInput
  }

  export type menuCreateOrConnectWithoutMukburimInput = {
    where: menuWhereUniqueInput
    create: XOR<menuCreateWithoutMukburimInput, menuUncheckedCreateWithoutMukburimInput>
  }

  export type menuUpsertWithoutMukburimInput = {
    update: XOR<menuUpdateWithoutMukburimInput, menuUncheckedUpdateWithoutMukburimInput>
    create: XOR<menuCreateWithoutMukburimInput, menuUncheckedCreateWithoutMukburimInput>
    where?: menuWhereInput
  }

  export type menuUpdateToOneWithWhereWithoutMukburimInput = {
    where?: menuWhereInput
    data: XOR<menuUpdateWithoutMukburimInput, menuUncheckedUpdateWithoutMukburimInput>
  }

  export type menuUpdateWithoutMukburimInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    calory?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    carbo?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    protein?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    fat?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    sodium?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    image_link?: NullableStringFieldUpdateOperationsInput | string | null
    battle_menu?: battle_menuUpdateManyWithoutMenuNestedInput
    menu_allery?: menu_alleryUpdateManyWithoutMenuNestedInput
    menu_tag?: menu_tagUpdateManyWithoutMenuNestedInput
    menu_vitamin?: menu_vitaminUpdateManyWithoutMenuNestedInput
    spin_result?: spin_resultUpdateManyWithoutMenuNestedInput
  }

  export type menuUncheckedUpdateWithoutMukburimInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    calory?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    carbo?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    protein?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    fat?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    sodium?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    image_link?: NullableStringFieldUpdateOperationsInput | string | null
    battle_menu?: battle_menuUncheckedUpdateManyWithoutMenuNestedInput
    menu_allery?: menu_alleryUncheckedUpdateManyWithoutMenuNestedInput
    menu_tag?: menu_tagUncheckedUpdateManyWithoutMenuNestedInput
    menu_vitamin?: menu_vitaminUncheckedUpdateManyWithoutMenuNestedInput
    spin_result?: spin_resultUncheckedUpdateManyWithoutMenuNestedInput
  }

  export type menuCreateWithoutMenu_tagInput = {
    id?: bigint | number
    name: string
    description?: string | null
    calory?: bigint | number | null
    carbo?: bigint | number | null
    protein?: bigint | number | null
    fat?: bigint | number | null
    sodium?: bigint | number | null
    image_link?: string | null
    battle_menu?: battle_menuCreateNestedManyWithoutMenuInput
    menu_allery?: menu_alleryCreateNestedManyWithoutMenuInput
    menu_vitamin?: menu_vitaminCreateNestedManyWithoutMenuInput
    mukburim?: mukburimCreateNestedManyWithoutMenuInput
    spin_result?: spin_resultCreateNestedManyWithoutMenuInput
  }

  export type menuUncheckedCreateWithoutMenu_tagInput = {
    id?: bigint | number
    name: string
    description?: string | null
    calory?: bigint | number | null
    carbo?: bigint | number | null
    protein?: bigint | number | null
    fat?: bigint | number | null
    sodium?: bigint | number | null
    image_link?: string | null
    battle_menu?: battle_menuUncheckedCreateNestedManyWithoutMenuInput
    menu_allery?: menu_alleryUncheckedCreateNestedManyWithoutMenuInput
    menu_vitamin?: menu_vitaminUncheckedCreateNestedManyWithoutMenuInput
    mukburim?: mukburimUncheckedCreateNestedManyWithoutMenuInput
    spin_result?: spin_resultUncheckedCreateNestedManyWithoutMenuInput
  }

  export type menuCreateOrConnectWithoutMenu_tagInput = {
    where: menuWhereUniqueInput
    create: XOR<menuCreateWithoutMenu_tagInput, menuUncheckedCreateWithoutMenu_tagInput>
  }

  export type menuUpsertWithoutMenu_tagInput = {
    update: XOR<menuUpdateWithoutMenu_tagInput, menuUncheckedUpdateWithoutMenu_tagInput>
    create: XOR<menuCreateWithoutMenu_tagInput, menuUncheckedCreateWithoutMenu_tagInput>
    where?: menuWhereInput
  }

  export type menuUpdateToOneWithWhereWithoutMenu_tagInput = {
    where?: menuWhereInput
    data: XOR<menuUpdateWithoutMenu_tagInput, menuUncheckedUpdateWithoutMenu_tagInput>
  }

  export type menuUpdateWithoutMenu_tagInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    calory?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    carbo?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    protein?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    fat?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    sodium?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    image_link?: NullableStringFieldUpdateOperationsInput | string | null
    battle_menu?: battle_menuUpdateManyWithoutMenuNestedInput
    menu_allery?: menu_alleryUpdateManyWithoutMenuNestedInput
    menu_vitamin?: menu_vitaminUpdateManyWithoutMenuNestedInput
    mukburim?: mukburimUpdateManyWithoutMenuNestedInput
    spin_result?: spin_resultUpdateManyWithoutMenuNestedInput
  }

  export type menuUncheckedUpdateWithoutMenu_tagInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    calory?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    carbo?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    protein?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    fat?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    sodium?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    image_link?: NullableStringFieldUpdateOperationsInput | string | null
    battle_menu?: battle_menuUncheckedUpdateManyWithoutMenuNestedInput
    menu_allery?: menu_alleryUncheckedUpdateManyWithoutMenuNestedInput
    menu_vitamin?: menu_vitaminUncheckedUpdateManyWithoutMenuNestedInput
    mukburim?: mukburimUncheckedUpdateManyWithoutMenuNestedInput
    spin_result?: spin_resultUncheckedUpdateManyWithoutMenuNestedInput
  }

  export type battle_menuCreateWithoutBattleInput = {
    id?: bigint | number
    menu_name?: string | null
    boundary_angle?: number | null
    menu_order?: number | null
    menu: menuCreateNestedOneWithoutBattle_menuInput
  }

  export type battle_menuUncheckedCreateWithoutBattleInput = {
    id?: bigint | number
    menu_name?: string | null
    boundary_angle?: number | null
    menu_order?: number | null
    menu_id: bigint | number
  }

  export type battle_menuCreateOrConnectWithoutBattleInput = {
    where: battle_menuWhereUniqueInput
    create: XOR<battle_menuCreateWithoutBattleInput, battle_menuUncheckedCreateWithoutBattleInput>
  }

  export type battle_menuCreateManyBattleInputEnvelope = {
    data: battle_menuCreateManyBattleInput | battle_menuCreateManyBattleInput[]
    skipDuplicates?: boolean
  }

  export type battle_participantCreateWithoutBattleInput = {
    user_id: bigint | number
    nickname?: string | null
    is_creater?: number | null
    joined_at?: Date | string | null
  }

  export type battle_participantUncheckedCreateWithoutBattleInput = {
    user_id: bigint | number
    nickname?: string | null
    is_creater?: number | null
    joined_at?: Date | string | null
  }

  export type battle_participantCreateOrConnectWithoutBattleInput = {
    where: battle_participantWhereUniqueInput
    create: XOR<battle_participantCreateWithoutBattleInput, battle_participantUncheckedCreateWithoutBattleInput>
  }

  export type battle_participantCreateManyBattleInputEnvelope = {
    data: battle_participantCreateManyBattleInput | battle_participantCreateManyBattleInput[]
    skipDuplicates?: boolean
  }

  export type spin_resultCreateWithoutBattleInput = {
    id?: bigint | number
    nickname?: string | null
    stopped_angle?: number | null
    distance_to_boundary?: number | null
    rank?: number | null
    spin_at?: Date | string | null
    menu: menuCreateNestedOneWithoutSpin_resultInput
  }

  export type spin_resultUncheckedCreateWithoutBattleInput = {
    id?: bigint | number
    nickname?: string | null
    stopped_angle?: number | null
    distance_to_boundary?: number | null
    rank?: number | null
    spin_at?: Date | string | null
    closest_menu_id: bigint | number
  }

  export type spin_resultCreateOrConnectWithoutBattleInput = {
    where: spin_resultWhereUniqueInput
    create: XOR<spin_resultCreateWithoutBattleInput, spin_resultUncheckedCreateWithoutBattleInput>
  }

  export type spin_resultCreateManyBattleInputEnvelope = {
    data: spin_resultCreateManyBattleInput | spin_resultCreateManyBattleInput[]
    skipDuplicates?: boolean
  }

  export type battle_menuUpsertWithWhereUniqueWithoutBattleInput = {
    where: battle_menuWhereUniqueInput
    update: XOR<battle_menuUpdateWithoutBattleInput, battle_menuUncheckedUpdateWithoutBattleInput>
    create: XOR<battle_menuCreateWithoutBattleInput, battle_menuUncheckedCreateWithoutBattleInput>
  }

  export type battle_menuUpdateWithWhereUniqueWithoutBattleInput = {
    where: battle_menuWhereUniqueInput
    data: XOR<battle_menuUpdateWithoutBattleInput, battle_menuUncheckedUpdateWithoutBattleInput>
  }

  export type battle_menuUpdateManyWithWhereWithoutBattleInput = {
    where: battle_menuScalarWhereInput
    data: XOR<battle_menuUpdateManyMutationInput, battle_menuUncheckedUpdateManyWithoutBattleInput>
  }

  export type battle_participantUpsertWithWhereUniqueWithoutBattleInput = {
    where: battle_participantWhereUniqueInput
    update: XOR<battle_participantUpdateWithoutBattleInput, battle_participantUncheckedUpdateWithoutBattleInput>
    create: XOR<battle_participantCreateWithoutBattleInput, battle_participantUncheckedCreateWithoutBattleInput>
  }

  export type battle_participantUpdateWithWhereUniqueWithoutBattleInput = {
    where: battle_participantWhereUniqueInput
    data: XOR<battle_participantUpdateWithoutBattleInput, battle_participantUncheckedUpdateWithoutBattleInput>
  }

  export type battle_participantUpdateManyWithWhereWithoutBattleInput = {
    where: battle_participantScalarWhereInput
    data: XOR<battle_participantUpdateManyMutationInput, battle_participantUncheckedUpdateManyWithoutBattleInput>
  }

  export type battle_participantScalarWhereInput = {
    AND?: battle_participantScalarWhereInput | battle_participantScalarWhereInput[]
    OR?: battle_participantScalarWhereInput[]
    NOT?: battle_participantScalarWhereInput | battle_participantScalarWhereInput[]
    battle_id?: StringFilter<"battle_participant"> | string
    user_id?: BigIntFilter<"battle_participant"> | bigint | number
    nickname?: StringNullableFilter<"battle_participant"> | string | null
    is_creater?: IntNullableFilter<"battle_participant"> | number | null
    joined_at?: DateTimeNullableFilter<"battle_participant"> | Date | string | null
  }

  export type spin_resultUpsertWithWhereUniqueWithoutBattleInput = {
    where: spin_resultWhereUniqueInput
    update: XOR<spin_resultUpdateWithoutBattleInput, spin_resultUncheckedUpdateWithoutBattleInput>
    create: XOR<spin_resultCreateWithoutBattleInput, spin_resultUncheckedCreateWithoutBattleInput>
  }

  export type spin_resultUpdateWithWhereUniqueWithoutBattleInput = {
    where: spin_resultWhereUniqueInput
    data: XOR<spin_resultUpdateWithoutBattleInput, spin_resultUncheckedUpdateWithoutBattleInput>
  }

  export type spin_resultUpdateManyWithWhereWithoutBattleInput = {
    where: spin_resultScalarWhereInput
    data: XOR<spin_resultUpdateManyMutationInput, spin_resultUncheckedUpdateManyWithoutBattleInput>
  }

  export type battleCreateWithoutBattle_menuInput = {
    id: string
    creater_nickname?: string | null
    status?: string | null
    participant_count?: number | null
    created_at?: Date | string | null
    finished_at?: Date | string | null
    expires_at?: Date | string | null
    battle_participant?: battle_participantCreateNestedManyWithoutBattleInput
    spin_result?: spin_resultCreateNestedManyWithoutBattleInput
  }

  export type battleUncheckedCreateWithoutBattle_menuInput = {
    id: string
    creater_nickname?: string | null
    status?: string | null
    participant_count?: number | null
    created_at?: Date | string | null
    finished_at?: Date | string | null
    expires_at?: Date | string | null
    battle_participant?: battle_participantUncheckedCreateNestedManyWithoutBattleInput
    spin_result?: spin_resultUncheckedCreateNestedManyWithoutBattleInput
  }

  export type battleCreateOrConnectWithoutBattle_menuInput = {
    where: battleWhereUniqueInput
    create: XOR<battleCreateWithoutBattle_menuInput, battleUncheckedCreateWithoutBattle_menuInput>
  }

  export type menuCreateWithoutBattle_menuInput = {
    id?: bigint | number
    name: string
    description?: string | null
    calory?: bigint | number | null
    carbo?: bigint | number | null
    protein?: bigint | number | null
    fat?: bigint | number | null
    sodium?: bigint | number | null
    image_link?: string | null
    menu_allery?: menu_alleryCreateNestedManyWithoutMenuInput
    menu_tag?: menu_tagCreateNestedManyWithoutMenuInput
    menu_vitamin?: menu_vitaminCreateNestedManyWithoutMenuInput
    mukburim?: mukburimCreateNestedManyWithoutMenuInput
    spin_result?: spin_resultCreateNestedManyWithoutMenuInput
  }

  export type menuUncheckedCreateWithoutBattle_menuInput = {
    id?: bigint | number
    name: string
    description?: string | null
    calory?: bigint | number | null
    carbo?: bigint | number | null
    protein?: bigint | number | null
    fat?: bigint | number | null
    sodium?: bigint | number | null
    image_link?: string | null
    menu_allery?: menu_alleryUncheckedCreateNestedManyWithoutMenuInput
    menu_tag?: menu_tagUncheckedCreateNestedManyWithoutMenuInput
    menu_vitamin?: menu_vitaminUncheckedCreateNestedManyWithoutMenuInput
    mukburim?: mukburimUncheckedCreateNestedManyWithoutMenuInput
    spin_result?: spin_resultUncheckedCreateNestedManyWithoutMenuInput
  }

  export type menuCreateOrConnectWithoutBattle_menuInput = {
    where: menuWhereUniqueInput
    create: XOR<menuCreateWithoutBattle_menuInput, menuUncheckedCreateWithoutBattle_menuInput>
  }

  export type battleUpsertWithoutBattle_menuInput = {
    update: XOR<battleUpdateWithoutBattle_menuInput, battleUncheckedUpdateWithoutBattle_menuInput>
    create: XOR<battleCreateWithoutBattle_menuInput, battleUncheckedCreateWithoutBattle_menuInput>
    where?: battleWhereInput
  }

  export type battleUpdateToOneWithWhereWithoutBattle_menuInput = {
    where?: battleWhereInput
    data: XOR<battleUpdateWithoutBattle_menuInput, battleUncheckedUpdateWithoutBattle_menuInput>
  }

  export type battleUpdateWithoutBattle_menuInput = {
    id?: StringFieldUpdateOperationsInput | string
    creater_nickname?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    participant_count?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finished_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    battle_participant?: battle_participantUpdateManyWithoutBattleNestedInput
    spin_result?: spin_resultUpdateManyWithoutBattleNestedInput
  }

  export type battleUncheckedUpdateWithoutBattle_menuInput = {
    id?: StringFieldUpdateOperationsInput | string
    creater_nickname?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    participant_count?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finished_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    battle_participant?: battle_participantUncheckedUpdateManyWithoutBattleNestedInput
    spin_result?: spin_resultUncheckedUpdateManyWithoutBattleNestedInput
  }

  export type menuUpsertWithoutBattle_menuInput = {
    update: XOR<menuUpdateWithoutBattle_menuInput, menuUncheckedUpdateWithoutBattle_menuInput>
    create: XOR<menuCreateWithoutBattle_menuInput, menuUncheckedCreateWithoutBattle_menuInput>
    where?: menuWhereInput
  }

  export type menuUpdateToOneWithWhereWithoutBattle_menuInput = {
    where?: menuWhereInput
    data: XOR<menuUpdateWithoutBattle_menuInput, menuUncheckedUpdateWithoutBattle_menuInput>
  }

  export type menuUpdateWithoutBattle_menuInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    calory?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    carbo?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    protein?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    fat?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    sodium?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    image_link?: NullableStringFieldUpdateOperationsInput | string | null
    menu_allery?: menu_alleryUpdateManyWithoutMenuNestedInput
    menu_tag?: menu_tagUpdateManyWithoutMenuNestedInput
    menu_vitamin?: menu_vitaminUpdateManyWithoutMenuNestedInput
    mukburim?: mukburimUpdateManyWithoutMenuNestedInput
    spin_result?: spin_resultUpdateManyWithoutMenuNestedInput
  }

  export type menuUncheckedUpdateWithoutBattle_menuInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    calory?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    carbo?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    protein?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    fat?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    sodium?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    image_link?: NullableStringFieldUpdateOperationsInput | string | null
    menu_allery?: menu_alleryUncheckedUpdateManyWithoutMenuNestedInput
    menu_tag?: menu_tagUncheckedUpdateManyWithoutMenuNestedInput
    menu_vitamin?: menu_vitaminUncheckedUpdateManyWithoutMenuNestedInput
    mukburim?: mukburimUncheckedUpdateManyWithoutMenuNestedInput
    spin_result?: spin_resultUncheckedUpdateManyWithoutMenuNestedInput
  }

  export type battleCreateWithoutBattle_participantInput = {
    id: string
    creater_nickname?: string | null
    status?: string | null
    participant_count?: number | null
    created_at?: Date | string | null
    finished_at?: Date | string | null
    expires_at?: Date | string | null
    battle_menu?: battle_menuCreateNestedManyWithoutBattleInput
    spin_result?: spin_resultCreateNestedManyWithoutBattleInput
  }

  export type battleUncheckedCreateWithoutBattle_participantInput = {
    id: string
    creater_nickname?: string | null
    status?: string | null
    participant_count?: number | null
    created_at?: Date | string | null
    finished_at?: Date | string | null
    expires_at?: Date | string | null
    battle_menu?: battle_menuUncheckedCreateNestedManyWithoutBattleInput
    spin_result?: spin_resultUncheckedCreateNestedManyWithoutBattleInput
  }

  export type battleCreateOrConnectWithoutBattle_participantInput = {
    where: battleWhereUniqueInput
    create: XOR<battleCreateWithoutBattle_participantInput, battleUncheckedCreateWithoutBattle_participantInput>
  }

  export type battleUpsertWithoutBattle_participantInput = {
    update: XOR<battleUpdateWithoutBattle_participantInput, battleUncheckedUpdateWithoutBattle_participantInput>
    create: XOR<battleCreateWithoutBattle_participantInput, battleUncheckedCreateWithoutBattle_participantInput>
    where?: battleWhereInput
  }

  export type battleUpdateToOneWithWhereWithoutBattle_participantInput = {
    where?: battleWhereInput
    data: XOR<battleUpdateWithoutBattle_participantInput, battleUncheckedUpdateWithoutBattle_participantInput>
  }

  export type battleUpdateWithoutBattle_participantInput = {
    id?: StringFieldUpdateOperationsInput | string
    creater_nickname?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    participant_count?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finished_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    battle_menu?: battle_menuUpdateManyWithoutBattleNestedInput
    spin_result?: spin_resultUpdateManyWithoutBattleNestedInput
  }

  export type battleUncheckedUpdateWithoutBattle_participantInput = {
    id?: StringFieldUpdateOperationsInput | string
    creater_nickname?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    participant_count?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finished_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    battle_menu?: battle_menuUncheckedUpdateManyWithoutBattleNestedInput
    spin_result?: spin_resultUncheckedUpdateManyWithoutBattleNestedInput
  }

  export type allergyCreateWithoutMenu_alleryInput = {
    id?: bigint | number
    allergy?: string | null
  }

  export type allergyUncheckedCreateWithoutMenu_alleryInput = {
    id?: bigint | number
    allergy?: string | null
  }

  export type allergyCreateOrConnectWithoutMenu_alleryInput = {
    where: allergyWhereUniqueInput
    create: XOR<allergyCreateWithoutMenu_alleryInput, allergyUncheckedCreateWithoutMenu_alleryInput>
  }

  export type menuCreateWithoutMenu_alleryInput = {
    id?: bigint | number
    name: string
    description?: string | null
    calory?: bigint | number | null
    carbo?: bigint | number | null
    protein?: bigint | number | null
    fat?: bigint | number | null
    sodium?: bigint | number | null
    image_link?: string | null
    battle_menu?: battle_menuCreateNestedManyWithoutMenuInput
    menu_tag?: menu_tagCreateNestedManyWithoutMenuInput
    menu_vitamin?: menu_vitaminCreateNestedManyWithoutMenuInput
    mukburim?: mukburimCreateNestedManyWithoutMenuInput
    spin_result?: spin_resultCreateNestedManyWithoutMenuInput
  }

  export type menuUncheckedCreateWithoutMenu_alleryInput = {
    id?: bigint | number
    name: string
    description?: string | null
    calory?: bigint | number | null
    carbo?: bigint | number | null
    protein?: bigint | number | null
    fat?: bigint | number | null
    sodium?: bigint | number | null
    image_link?: string | null
    battle_menu?: battle_menuUncheckedCreateNestedManyWithoutMenuInput
    menu_tag?: menu_tagUncheckedCreateNestedManyWithoutMenuInput
    menu_vitamin?: menu_vitaminUncheckedCreateNestedManyWithoutMenuInput
    mukburim?: mukburimUncheckedCreateNestedManyWithoutMenuInput
    spin_result?: spin_resultUncheckedCreateNestedManyWithoutMenuInput
  }

  export type menuCreateOrConnectWithoutMenu_alleryInput = {
    where: menuWhereUniqueInput
    create: XOR<menuCreateWithoutMenu_alleryInput, menuUncheckedCreateWithoutMenu_alleryInput>
  }

  export type allergyUpsertWithoutMenu_alleryInput = {
    update: XOR<allergyUpdateWithoutMenu_alleryInput, allergyUncheckedUpdateWithoutMenu_alleryInput>
    create: XOR<allergyCreateWithoutMenu_alleryInput, allergyUncheckedCreateWithoutMenu_alleryInput>
    where?: allergyWhereInput
  }

  export type allergyUpdateToOneWithWhereWithoutMenu_alleryInput = {
    where?: allergyWhereInput
    data: XOR<allergyUpdateWithoutMenu_alleryInput, allergyUncheckedUpdateWithoutMenu_alleryInput>
  }

  export type allergyUpdateWithoutMenu_alleryInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    allergy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type allergyUncheckedUpdateWithoutMenu_alleryInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    allergy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type menuUpsertWithoutMenu_alleryInput = {
    update: XOR<menuUpdateWithoutMenu_alleryInput, menuUncheckedUpdateWithoutMenu_alleryInput>
    create: XOR<menuCreateWithoutMenu_alleryInput, menuUncheckedCreateWithoutMenu_alleryInput>
    where?: menuWhereInput
  }

  export type menuUpdateToOneWithWhereWithoutMenu_alleryInput = {
    where?: menuWhereInput
    data: XOR<menuUpdateWithoutMenu_alleryInput, menuUncheckedUpdateWithoutMenu_alleryInput>
  }

  export type menuUpdateWithoutMenu_alleryInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    calory?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    carbo?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    protein?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    fat?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    sodium?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    image_link?: NullableStringFieldUpdateOperationsInput | string | null
    battle_menu?: battle_menuUpdateManyWithoutMenuNestedInput
    menu_tag?: menu_tagUpdateManyWithoutMenuNestedInput
    menu_vitamin?: menu_vitaminUpdateManyWithoutMenuNestedInput
    mukburim?: mukburimUpdateManyWithoutMenuNestedInput
    spin_result?: spin_resultUpdateManyWithoutMenuNestedInput
  }

  export type menuUncheckedUpdateWithoutMenu_alleryInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    calory?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    carbo?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    protein?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    fat?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    sodium?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    image_link?: NullableStringFieldUpdateOperationsInput | string | null
    battle_menu?: battle_menuUncheckedUpdateManyWithoutMenuNestedInput
    menu_tag?: menu_tagUncheckedUpdateManyWithoutMenuNestedInput
    menu_vitamin?: menu_vitaminUncheckedUpdateManyWithoutMenuNestedInput
    mukburim?: mukburimUncheckedUpdateManyWithoutMenuNestedInput
    spin_result?: spin_resultUncheckedUpdateManyWithoutMenuNestedInput
  }

  export type menuCreateWithoutMenu_vitaminInput = {
    id?: bigint | number
    name: string
    description?: string | null
    calory?: bigint | number | null
    carbo?: bigint | number | null
    protein?: bigint | number | null
    fat?: bigint | number | null
    sodium?: bigint | number | null
    image_link?: string | null
    battle_menu?: battle_menuCreateNestedManyWithoutMenuInput
    menu_allery?: menu_alleryCreateNestedManyWithoutMenuInput
    menu_tag?: menu_tagCreateNestedManyWithoutMenuInput
    mukburim?: mukburimCreateNestedManyWithoutMenuInput
    spin_result?: spin_resultCreateNestedManyWithoutMenuInput
  }

  export type menuUncheckedCreateWithoutMenu_vitaminInput = {
    id?: bigint | number
    name: string
    description?: string | null
    calory?: bigint | number | null
    carbo?: bigint | number | null
    protein?: bigint | number | null
    fat?: bigint | number | null
    sodium?: bigint | number | null
    image_link?: string | null
    battle_menu?: battle_menuUncheckedCreateNestedManyWithoutMenuInput
    menu_allery?: menu_alleryUncheckedCreateNestedManyWithoutMenuInput
    menu_tag?: menu_tagUncheckedCreateNestedManyWithoutMenuInput
    mukburim?: mukburimUncheckedCreateNestedManyWithoutMenuInput
    spin_result?: spin_resultUncheckedCreateNestedManyWithoutMenuInput
  }

  export type menuCreateOrConnectWithoutMenu_vitaminInput = {
    where: menuWhereUniqueInput
    create: XOR<menuCreateWithoutMenu_vitaminInput, menuUncheckedCreateWithoutMenu_vitaminInput>
  }

  export type vitaminCreateWithoutMenu_vitaminInput = {
    id?: bigint | number
    vitamin?: string | null
  }

  export type vitaminUncheckedCreateWithoutMenu_vitaminInput = {
    id?: bigint | number
    vitamin?: string | null
  }

  export type vitaminCreateOrConnectWithoutMenu_vitaminInput = {
    where: vitaminWhereUniqueInput
    create: XOR<vitaminCreateWithoutMenu_vitaminInput, vitaminUncheckedCreateWithoutMenu_vitaminInput>
  }

  export type menuUpsertWithoutMenu_vitaminInput = {
    update: XOR<menuUpdateWithoutMenu_vitaminInput, menuUncheckedUpdateWithoutMenu_vitaminInput>
    create: XOR<menuCreateWithoutMenu_vitaminInput, menuUncheckedCreateWithoutMenu_vitaminInput>
    where?: menuWhereInput
  }

  export type menuUpdateToOneWithWhereWithoutMenu_vitaminInput = {
    where?: menuWhereInput
    data: XOR<menuUpdateWithoutMenu_vitaminInput, menuUncheckedUpdateWithoutMenu_vitaminInput>
  }

  export type menuUpdateWithoutMenu_vitaminInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    calory?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    carbo?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    protein?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    fat?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    sodium?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    image_link?: NullableStringFieldUpdateOperationsInput | string | null
    battle_menu?: battle_menuUpdateManyWithoutMenuNestedInput
    menu_allery?: menu_alleryUpdateManyWithoutMenuNestedInput
    menu_tag?: menu_tagUpdateManyWithoutMenuNestedInput
    mukburim?: mukburimUpdateManyWithoutMenuNestedInput
    spin_result?: spin_resultUpdateManyWithoutMenuNestedInput
  }

  export type menuUncheckedUpdateWithoutMenu_vitaminInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    calory?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    carbo?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    protein?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    fat?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    sodium?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    image_link?: NullableStringFieldUpdateOperationsInput | string | null
    battle_menu?: battle_menuUncheckedUpdateManyWithoutMenuNestedInput
    menu_allery?: menu_alleryUncheckedUpdateManyWithoutMenuNestedInput
    menu_tag?: menu_tagUncheckedUpdateManyWithoutMenuNestedInput
    mukburim?: mukburimUncheckedUpdateManyWithoutMenuNestedInput
    spin_result?: spin_resultUncheckedUpdateManyWithoutMenuNestedInput
  }

  export type vitaminUpsertWithoutMenu_vitaminInput = {
    update: XOR<vitaminUpdateWithoutMenu_vitaminInput, vitaminUncheckedUpdateWithoutMenu_vitaminInput>
    create: XOR<vitaminCreateWithoutMenu_vitaminInput, vitaminUncheckedCreateWithoutMenu_vitaminInput>
    where?: vitaminWhereInput
  }

  export type vitaminUpdateToOneWithWhereWithoutMenu_vitaminInput = {
    where?: vitaminWhereInput
    data: XOR<vitaminUpdateWithoutMenu_vitaminInput, vitaminUncheckedUpdateWithoutMenu_vitaminInput>
  }

  export type vitaminUpdateWithoutMenu_vitaminInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    vitamin?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type vitaminUncheckedUpdateWithoutMenu_vitaminInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    vitamin?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type battleCreateWithoutSpin_resultInput = {
    id: string
    creater_nickname?: string | null
    status?: string | null
    participant_count?: number | null
    created_at?: Date | string | null
    finished_at?: Date | string | null
    expires_at?: Date | string | null
    battle_menu?: battle_menuCreateNestedManyWithoutBattleInput
    battle_participant?: battle_participantCreateNestedManyWithoutBattleInput
  }

  export type battleUncheckedCreateWithoutSpin_resultInput = {
    id: string
    creater_nickname?: string | null
    status?: string | null
    participant_count?: number | null
    created_at?: Date | string | null
    finished_at?: Date | string | null
    expires_at?: Date | string | null
    battle_menu?: battle_menuUncheckedCreateNestedManyWithoutBattleInput
    battle_participant?: battle_participantUncheckedCreateNestedManyWithoutBattleInput
  }

  export type battleCreateOrConnectWithoutSpin_resultInput = {
    where: battleWhereUniqueInput
    create: XOR<battleCreateWithoutSpin_resultInput, battleUncheckedCreateWithoutSpin_resultInput>
  }

  export type menuCreateWithoutSpin_resultInput = {
    id?: bigint | number
    name: string
    description?: string | null
    calory?: bigint | number | null
    carbo?: bigint | number | null
    protein?: bigint | number | null
    fat?: bigint | number | null
    sodium?: bigint | number | null
    image_link?: string | null
    battle_menu?: battle_menuCreateNestedManyWithoutMenuInput
    menu_allery?: menu_alleryCreateNestedManyWithoutMenuInput
    menu_tag?: menu_tagCreateNestedManyWithoutMenuInput
    menu_vitamin?: menu_vitaminCreateNestedManyWithoutMenuInput
    mukburim?: mukburimCreateNestedManyWithoutMenuInput
  }

  export type menuUncheckedCreateWithoutSpin_resultInput = {
    id?: bigint | number
    name: string
    description?: string | null
    calory?: bigint | number | null
    carbo?: bigint | number | null
    protein?: bigint | number | null
    fat?: bigint | number | null
    sodium?: bigint | number | null
    image_link?: string | null
    battle_menu?: battle_menuUncheckedCreateNestedManyWithoutMenuInput
    menu_allery?: menu_alleryUncheckedCreateNestedManyWithoutMenuInput
    menu_tag?: menu_tagUncheckedCreateNestedManyWithoutMenuInput
    menu_vitamin?: menu_vitaminUncheckedCreateNestedManyWithoutMenuInput
    mukburim?: mukburimUncheckedCreateNestedManyWithoutMenuInput
  }

  export type menuCreateOrConnectWithoutSpin_resultInput = {
    where: menuWhereUniqueInput
    create: XOR<menuCreateWithoutSpin_resultInput, menuUncheckedCreateWithoutSpin_resultInput>
  }

  export type battleUpsertWithoutSpin_resultInput = {
    update: XOR<battleUpdateWithoutSpin_resultInput, battleUncheckedUpdateWithoutSpin_resultInput>
    create: XOR<battleCreateWithoutSpin_resultInput, battleUncheckedCreateWithoutSpin_resultInput>
    where?: battleWhereInput
  }

  export type battleUpdateToOneWithWhereWithoutSpin_resultInput = {
    where?: battleWhereInput
    data: XOR<battleUpdateWithoutSpin_resultInput, battleUncheckedUpdateWithoutSpin_resultInput>
  }

  export type battleUpdateWithoutSpin_resultInput = {
    id?: StringFieldUpdateOperationsInput | string
    creater_nickname?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    participant_count?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finished_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    battle_menu?: battle_menuUpdateManyWithoutBattleNestedInput
    battle_participant?: battle_participantUpdateManyWithoutBattleNestedInput
  }

  export type battleUncheckedUpdateWithoutSpin_resultInput = {
    id?: StringFieldUpdateOperationsInput | string
    creater_nickname?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    participant_count?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finished_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    battle_menu?: battle_menuUncheckedUpdateManyWithoutBattleNestedInput
    battle_participant?: battle_participantUncheckedUpdateManyWithoutBattleNestedInput
  }

  export type menuUpsertWithoutSpin_resultInput = {
    update: XOR<menuUpdateWithoutSpin_resultInput, menuUncheckedUpdateWithoutSpin_resultInput>
    create: XOR<menuCreateWithoutSpin_resultInput, menuUncheckedCreateWithoutSpin_resultInput>
    where?: menuWhereInput
  }

  export type menuUpdateToOneWithWhereWithoutSpin_resultInput = {
    where?: menuWhereInput
    data: XOR<menuUpdateWithoutSpin_resultInput, menuUncheckedUpdateWithoutSpin_resultInput>
  }

  export type menuUpdateWithoutSpin_resultInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    calory?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    carbo?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    protein?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    fat?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    sodium?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    image_link?: NullableStringFieldUpdateOperationsInput | string | null
    battle_menu?: battle_menuUpdateManyWithoutMenuNestedInput
    menu_allery?: menu_alleryUpdateManyWithoutMenuNestedInput
    menu_tag?: menu_tagUpdateManyWithoutMenuNestedInput
    menu_vitamin?: menu_vitaminUpdateManyWithoutMenuNestedInput
    mukburim?: mukburimUpdateManyWithoutMenuNestedInput
  }

  export type menuUncheckedUpdateWithoutSpin_resultInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    calory?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    carbo?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    protein?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    fat?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    sodium?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    image_link?: NullableStringFieldUpdateOperationsInput | string | null
    battle_menu?: battle_menuUncheckedUpdateManyWithoutMenuNestedInput
    menu_allery?: menu_alleryUncheckedUpdateManyWithoutMenuNestedInput
    menu_tag?: menu_tagUncheckedUpdateManyWithoutMenuNestedInput
    menu_vitamin?: menu_vitaminUncheckedUpdateManyWithoutMenuNestedInput
    mukburim?: mukburimUncheckedUpdateManyWithoutMenuNestedInput
  }

  export type menu_vitaminCreateWithoutVitaminInput = {
    menu: menuCreateNestedOneWithoutMenu_vitaminInput
  }

  export type menu_vitaminUncheckedCreateWithoutVitaminInput = {
    menu_id: bigint | number
  }

  export type menu_vitaminCreateOrConnectWithoutVitaminInput = {
    where: menu_vitaminWhereUniqueInput
    create: XOR<menu_vitaminCreateWithoutVitaminInput, menu_vitaminUncheckedCreateWithoutVitaminInput>
  }

  export type menu_vitaminCreateManyVitaminInputEnvelope = {
    data: menu_vitaminCreateManyVitaminInput | menu_vitaminCreateManyVitaminInput[]
    skipDuplicates?: boolean
  }

  export type menu_vitaminUpsertWithWhereUniqueWithoutVitaminInput = {
    where: menu_vitaminWhereUniqueInput
    update: XOR<menu_vitaminUpdateWithoutVitaminInput, menu_vitaminUncheckedUpdateWithoutVitaminInput>
    create: XOR<menu_vitaminCreateWithoutVitaminInput, menu_vitaminUncheckedCreateWithoutVitaminInput>
  }

  export type menu_vitaminUpdateWithWhereUniqueWithoutVitaminInput = {
    where: menu_vitaminWhereUniqueInput
    data: XOR<menu_vitaminUpdateWithoutVitaminInput, menu_vitaminUncheckedUpdateWithoutVitaminInput>
  }

  export type menu_vitaminUpdateManyWithWhereWithoutVitaminInput = {
    where: menu_vitaminScalarWhereInput
    data: XOR<menu_vitaminUpdateManyMutationInput, menu_vitaminUncheckedUpdateManyWithoutVitaminInput>
  }

  export type menu_alleryCreateWithoutAlleryInput = {
    menu: menuCreateNestedOneWithoutMenu_alleryInput
  }

  export type menu_alleryUncheckedCreateWithoutAlleryInput = {
    menu_id: bigint | number
  }

  export type menu_alleryCreateOrConnectWithoutAlleryInput = {
    where: menu_alleryWhereUniqueInput
    create: XOR<menu_alleryCreateWithoutAlleryInput, menu_alleryUncheckedCreateWithoutAlleryInput>
  }

  export type menu_alleryCreateManyAlleryInputEnvelope = {
    data: menu_alleryCreateManyAlleryInput | menu_alleryCreateManyAlleryInput[]
    skipDuplicates?: boolean
  }

  export type menu_alleryUpsertWithWhereUniqueWithoutAlleryInput = {
    where: menu_alleryWhereUniqueInput
    update: XOR<menu_alleryUpdateWithoutAlleryInput, menu_alleryUncheckedUpdateWithoutAlleryInput>
    create: XOR<menu_alleryCreateWithoutAlleryInput, menu_alleryUncheckedCreateWithoutAlleryInput>
  }

  export type menu_alleryUpdateWithWhereUniqueWithoutAlleryInput = {
    where: menu_alleryWhereUniqueInput
    data: XOR<menu_alleryUpdateWithoutAlleryInput, menu_alleryUncheckedUpdateWithoutAlleryInput>
  }

  export type menu_alleryUpdateManyWithWhereWithoutAlleryInput = {
    where: menu_alleryScalarWhereInput
    data: XOR<menu_alleryUpdateManyMutationInput, menu_alleryUncheckedUpdateManyWithoutAlleryInput>
  }

  export type battle_menuCreateManyMenuInput = {
    id?: bigint | number
    menu_name?: string | null
    boundary_angle?: number | null
    menu_order?: number | null
    battle_id: string
  }

  export type menu_alleryCreateManyMenuInput = {
    allergy_id: bigint | number
  }

  export type menu_tagCreateManyMenuInput = {
    id?: bigint | number
    tag?: string | null
  }

  export type menu_vitaminCreateManyMenuInput = {
    vitamin_id: bigint | number
  }

  export type mukburimCreateManyMenuInput = {
    id: bigint | number
    user_id: bigint | number
    date?: Date | string | null
  }

  export type spin_resultCreateManyMenuInput = {
    id?: bigint | number
    nickname?: string | null
    stopped_angle?: number | null
    distance_to_boundary?: number | null
    rank?: number | null
    spin_at?: Date | string | null
    battle_id: string
  }

  export type battle_menuUpdateWithoutMenuInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    menu_name?: NullableStringFieldUpdateOperationsInput | string | null
    boundary_angle?: NullableFloatFieldUpdateOperationsInput | number | null
    menu_order?: NullableIntFieldUpdateOperationsInput | number | null
    battle?: battleUpdateOneRequiredWithoutBattle_menuNestedInput
  }

  export type battle_menuUncheckedUpdateWithoutMenuInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    menu_name?: NullableStringFieldUpdateOperationsInput | string | null
    boundary_angle?: NullableFloatFieldUpdateOperationsInput | number | null
    menu_order?: NullableIntFieldUpdateOperationsInput | number | null
    battle_id?: StringFieldUpdateOperationsInput | string
  }

  export type battle_menuUncheckedUpdateManyWithoutMenuInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    menu_name?: NullableStringFieldUpdateOperationsInput | string | null
    boundary_angle?: NullableFloatFieldUpdateOperationsInput | number | null
    menu_order?: NullableIntFieldUpdateOperationsInput | number | null
    battle_id?: StringFieldUpdateOperationsInput | string
  }

  export type menu_alleryUpdateWithoutMenuInput = {
    allery?: allergyUpdateOneRequiredWithoutMenu_alleryNestedInput
  }

  export type menu_alleryUncheckedUpdateWithoutMenuInput = {
    allergy_id?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type menu_alleryUncheckedUpdateManyWithoutMenuInput = {
    allergy_id?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type menu_tagUpdateWithoutMenuInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    tag?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type menu_tagUncheckedUpdateWithoutMenuInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    tag?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type menu_tagUncheckedUpdateManyWithoutMenuInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    tag?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type menu_vitaminUpdateWithoutMenuInput = {
    vitamin?: vitaminUpdateOneRequiredWithoutMenu_vitaminNestedInput
  }

  export type menu_vitaminUncheckedUpdateWithoutMenuInput = {
    vitamin_id?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type menu_vitaminUncheckedUpdateManyWithoutMenuInput = {
    vitamin_id?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type mukburimUpdateWithoutMenuInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type mukburimUncheckedUpdateWithoutMenuInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type mukburimUncheckedUpdateManyWithoutMenuInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type spin_resultUpdateWithoutMenuInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    stopped_angle?: NullableFloatFieldUpdateOperationsInput | number | null
    distance_to_boundary?: NullableFloatFieldUpdateOperationsInput | number | null
    rank?: NullableIntFieldUpdateOperationsInput | number | null
    spin_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    battle?: battleUpdateOneRequiredWithoutSpin_resultNestedInput
  }

  export type spin_resultUncheckedUpdateWithoutMenuInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    stopped_angle?: NullableFloatFieldUpdateOperationsInput | number | null
    distance_to_boundary?: NullableFloatFieldUpdateOperationsInput | number | null
    rank?: NullableIntFieldUpdateOperationsInput | number | null
    spin_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    battle_id?: StringFieldUpdateOperationsInput | string
  }

  export type spin_resultUncheckedUpdateManyWithoutMenuInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    stopped_angle?: NullableFloatFieldUpdateOperationsInput | number | null
    distance_to_boundary?: NullableFloatFieldUpdateOperationsInput | number | null
    rank?: NullableIntFieldUpdateOperationsInput | number | null
    spin_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    battle_id?: StringFieldUpdateOperationsInput | string
  }

  export type battle_menuCreateManyBattleInput = {
    id?: bigint | number
    menu_name?: string | null
    boundary_angle?: number | null
    menu_order?: number | null
    menu_id: bigint | number
  }

  export type battle_participantCreateManyBattleInput = {
    user_id: bigint | number
    nickname?: string | null
    is_creater?: number | null
    joined_at?: Date | string | null
  }

  export type spin_resultCreateManyBattleInput = {
    id?: bigint | number
    nickname?: string | null
    stopped_angle?: number | null
    distance_to_boundary?: number | null
    rank?: number | null
    spin_at?: Date | string | null
    closest_menu_id: bigint | number
  }

  export type battle_menuUpdateWithoutBattleInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    menu_name?: NullableStringFieldUpdateOperationsInput | string | null
    boundary_angle?: NullableFloatFieldUpdateOperationsInput | number | null
    menu_order?: NullableIntFieldUpdateOperationsInput | number | null
    menu?: menuUpdateOneRequiredWithoutBattle_menuNestedInput
  }

  export type battle_menuUncheckedUpdateWithoutBattleInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    menu_name?: NullableStringFieldUpdateOperationsInput | string | null
    boundary_angle?: NullableFloatFieldUpdateOperationsInput | number | null
    menu_order?: NullableIntFieldUpdateOperationsInput | number | null
    menu_id?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type battle_menuUncheckedUpdateManyWithoutBattleInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    menu_name?: NullableStringFieldUpdateOperationsInput | string | null
    boundary_angle?: NullableFloatFieldUpdateOperationsInput | number | null
    menu_order?: NullableIntFieldUpdateOperationsInput | number | null
    menu_id?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type battle_participantUpdateWithoutBattleInput = {
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    is_creater?: NullableIntFieldUpdateOperationsInput | number | null
    joined_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type battle_participantUncheckedUpdateWithoutBattleInput = {
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    is_creater?: NullableIntFieldUpdateOperationsInput | number | null
    joined_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type battle_participantUncheckedUpdateManyWithoutBattleInput = {
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    is_creater?: NullableIntFieldUpdateOperationsInput | number | null
    joined_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type spin_resultUpdateWithoutBattleInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    stopped_angle?: NullableFloatFieldUpdateOperationsInput | number | null
    distance_to_boundary?: NullableFloatFieldUpdateOperationsInput | number | null
    rank?: NullableIntFieldUpdateOperationsInput | number | null
    spin_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    menu?: menuUpdateOneRequiredWithoutSpin_resultNestedInput
  }

  export type spin_resultUncheckedUpdateWithoutBattleInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    stopped_angle?: NullableFloatFieldUpdateOperationsInput | number | null
    distance_to_boundary?: NullableFloatFieldUpdateOperationsInput | number | null
    rank?: NullableIntFieldUpdateOperationsInput | number | null
    spin_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    closest_menu_id?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type spin_resultUncheckedUpdateManyWithoutBattleInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    stopped_angle?: NullableFloatFieldUpdateOperationsInput | number | null
    distance_to_boundary?: NullableFloatFieldUpdateOperationsInput | number | null
    rank?: NullableIntFieldUpdateOperationsInput | number | null
    spin_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    closest_menu_id?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type menu_vitaminCreateManyVitaminInput = {
    menu_id: bigint | number
  }

  export type menu_vitaminUpdateWithoutVitaminInput = {
    menu?: menuUpdateOneRequiredWithoutMenu_vitaminNestedInput
  }

  export type menu_vitaminUncheckedUpdateWithoutVitaminInput = {
    menu_id?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type menu_vitaminUncheckedUpdateManyWithoutVitaminInput = {
    menu_id?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type menu_alleryCreateManyAlleryInput = {
    menu_id: bigint | number
  }

  export type menu_alleryUpdateWithoutAlleryInput = {
    menu?: menuUpdateOneRequiredWithoutMenu_alleryNestedInput
  }

  export type menu_alleryUncheckedUpdateWithoutAlleryInput = {
    menu_id?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type menu_alleryUncheckedUpdateManyWithoutAlleryInput = {
    menu_id?: BigIntFieldUpdateOperationsInput | bigint | number
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