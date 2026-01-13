
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
 * Model battles
 * 
 */
export type battles = $Result.DefaultSelection<Prisma.$battlesPayload>
/**
 * Model battle_participants
 * 
 */
export type battle_participants = $Result.DefaultSelection<Prisma.$battle_participantsPayload>
/**
 * Model battle_menus
 * 
 */
export type battle_menus = $Result.DefaultSelection<Prisma.$battle_menusPayload>
/**
 * Model spin_results
 * 
 */
export type spin_results = $Result.DefaultSelection<Prisma.$spin_resultsPayload>
/**
 * Model sessions
 * 
 */
export type sessions = $Result.DefaultSelection<Prisma.$sessionsPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const battles_status: {
  waiting: 'waiting',
  active: 'active',
  finished: 'finished'
};

export type battles_status = (typeof battles_status)[keyof typeof battles_status]

}

export type battles_status = $Enums.battles_status

export const battles_status: typeof $Enums.battles_status

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
   * `prisma.battles`: Exposes CRUD operations for the **battles** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Battles
    * const battles = await prisma.battles.findMany()
    * ```
    */
  get battles(): Prisma.battlesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.battle_participants`: Exposes CRUD operations for the **battle_participants** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Battle_participants
    * const battle_participants = await prisma.battle_participants.findMany()
    * ```
    */
  get battle_participants(): Prisma.battle_participantsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.battle_menus`: Exposes CRUD operations for the **battle_menus** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Battle_menus
    * const battle_menus = await prisma.battle_menus.findMany()
    * ```
    */
  get battle_menus(): Prisma.battle_menusDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.spin_results`: Exposes CRUD operations for the **spin_results** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Spin_results
    * const spin_results = await prisma.spin_results.findMany()
    * ```
    */
  get spin_results(): Prisma.spin_resultsDelegate<ExtArgs, ClientOptions>;

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
    menu_allery: 'menu_allery',
    menu_vitamin: 'menu_vitamin',
    vitamin: 'vitamin',
    allergy: 'allergy',
    battles: 'battles',
    battle_participants: 'battle_participants',
    battle_menus: 'battle_menus',
    spin_results: 'spin_results',
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
      modelProps: "menu" | "mukburim" | "menu_tag" | "menu_allery" | "menu_vitamin" | "vitamin" | "allergy" | "battles" | "battle_participants" | "battle_menus" | "spin_results" | "sessions"
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
      battles: {
        payload: Prisma.$battlesPayload<ExtArgs>
        fields: Prisma.battlesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.battlesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$battlesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.battlesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$battlesPayload>
          }
          findFirst: {
            args: Prisma.battlesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$battlesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.battlesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$battlesPayload>
          }
          findMany: {
            args: Prisma.battlesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$battlesPayload>[]
          }
          create: {
            args: Prisma.battlesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$battlesPayload>
          }
          createMany: {
            args: Prisma.battlesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.battlesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$battlesPayload>
          }
          update: {
            args: Prisma.battlesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$battlesPayload>
          }
          deleteMany: {
            args: Prisma.battlesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.battlesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.battlesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$battlesPayload>
          }
          aggregate: {
            args: Prisma.BattlesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBattles>
          }
          groupBy: {
            args: Prisma.battlesGroupByArgs<ExtArgs>
            result: $Utils.Optional<BattlesGroupByOutputType>[]
          }
          count: {
            args: Prisma.battlesCountArgs<ExtArgs>
            result: $Utils.Optional<BattlesCountAggregateOutputType> | number
          }
        }
      }
      battle_participants: {
        payload: Prisma.$battle_participantsPayload<ExtArgs>
        fields: Prisma.battle_participantsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.battle_participantsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$battle_participantsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.battle_participantsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$battle_participantsPayload>
          }
          findFirst: {
            args: Prisma.battle_participantsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$battle_participantsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.battle_participantsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$battle_participantsPayload>
          }
          findMany: {
            args: Prisma.battle_participantsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$battle_participantsPayload>[]
          }
          create: {
            args: Prisma.battle_participantsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$battle_participantsPayload>
          }
          createMany: {
            args: Prisma.battle_participantsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.battle_participantsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$battle_participantsPayload>
          }
          update: {
            args: Prisma.battle_participantsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$battle_participantsPayload>
          }
          deleteMany: {
            args: Prisma.battle_participantsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.battle_participantsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.battle_participantsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$battle_participantsPayload>
          }
          aggregate: {
            args: Prisma.Battle_participantsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBattle_participants>
          }
          groupBy: {
            args: Prisma.battle_participantsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Battle_participantsGroupByOutputType>[]
          }
          count: {
            args: Prisma.battle_participantsCountArgs<ExtArgs>
            result: $Utils.Optional<Battle_participantsCountAggregateOutputType> | number
          }
        }
      }
      battle_menus: {
        payload: Prisma.$battle_menusPayload<ExtArgs>
        fields: Prisma.battle_menusFieldRefs
        operations: {
          findUnique: {
            args: Prisma.battle_menusFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$battle_menusPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.battle_menusFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$battle_menusPayload>
          }
          findFirst: {
            args: Prisma.battle_menusFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$battle_menusPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.battle_menusFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$battle_menusPayload>
          }
          findMany: {
            args: Prisma.battle_menusFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$battle_menusPayload>[]
          }
          create: {
            args: Prisma.battle_menusCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$battle_menusPayload>
          }
          createMany: {
            args: Prisma.battle_menusCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.battle_menusDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$battle_menusPayload>
          }
          update: {
            args: Prisma.battle_menusUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$battle_menusPayload>
          }
          deleteMany: {
            args: Prisma.battle_menusDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.battle_menusUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.battle_menusUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$battle_menusPayload>
          }
          aggregate: {
            args: Prisma.Battle_menusAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBattle_menus>
          }
          groupBy: {
            args: Prisma.battle_menusGroupByArgs<ExtArgs>
            result: $Utils.Optional<Battle_menusGroupByOutputType>[]
          }
          count: {
            args: Prisma.battle_menusCountArgs<ExtArgs>
            result: $Utils.Optional<Battle_menusCountAggregateOutputType> | number
          }
        }
      }
      spin_results: {
        payload: Prisma.$spin_resultsPayload<ExtArgs>
        fields: Prisma.spin_resultsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.spin_resultsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$spin_resultsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.spin_resultsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$spin_resultsPayload>
          }
          findFirst: {
            args: Prisma.spin_resultsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$spin_resultsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.spin_resultsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$spin_resultsPayload>
          }
          findMany: {
            args: Prisma.spin_resultsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$spin_resultsPayload>[]
          }
          create: {
            args: Prisma.spin_resultsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$spin_resultsPayload>
          }
          createMany: {
            args: Prisma.spin_resultsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.spin_resultsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$spin_resultsPayload>
          }
          update: {
            args: Prisma.spin_resultsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$spin_resultsPayload>
          }
          deleteMany: {
            args: Prisma.spin_resultsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.spin_resultsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.spin_resultsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$spin_resultsPayload>
          }
          aggregate: {
            args: Prisma.Spin_resultsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSpin_results>
          }
          groupBy: {
            args: Prisma.spin_resultsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Spin_resultsGroupByOutputType>[]
          }
          count: {
            args: Prisma.spin_resultsCountArgs<ExtArgs>
            result: $Utils.Optional<Spin_resultsCountAggregateOutputType> | number
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
    menu_allery?: menu_alleryOmit
    menu_vitamin?: menu_vitaminOmit
    vitamin?: vitaminOmit
    allergy?: allergyOmit
    battles?: battlesOmit
    battle_participants?: battle_participantsOmit
    battle_menus?: battle_menusOmit
    spin_results?: spin_resultsOmit
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
    battle_menus: number
    menu_allery: number
    menu_tag: number
    menu_vitamin: number
    mukburim: number
    spin_results: number
  }

  export type MenuCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    battle_menus?: boolean | MenuCountOutputTypeCountBattle_menusArgs
    menu_allery?: boolean | MenuCountOutputTypeCountMenu_alleryArgs
    menu_tag?: boolean | MenuCountOutputTypeCountMenu_tagArgs
    menu_vitamin?: boolean | MenuCountOutputTypeCountMenu_vitaminArgs
    mukburim?: boolean | MenuCountOutputTypeCountMukburimArgs
    spin_results?: boolean | MenuCountOutputTypeCountSpin_resultsArgs
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
  export type MenuCountOutputTypeCountBattle_menusArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: battle_menusWhereInput
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
  export type MenuCountOutputTypeCountSpin_resultsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: spin_resultsWhereInput
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
   * Count Type BattlesCountOutputType
   */

  export type BattlesCountOutputType = {
    battle_participants: number
    battle_menus: number
    spin_results: number
  }

  export type BattlesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    battle_participants?: boolean | BattlesCountOutputTypeCountBattle_participantsArgs
    battle_menus?: boolean | BattlesCountOutputTypeCountBattle_menusArgs
    spin_results?: boolean | BattlesCountOutputTypeCountSpin_resultsArgs
  }

  // Custom InputTypes
  /**
   * BattlesCountOutputType without action
   */
  export type BattlesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BattlesCountOutputType
     */
    select?: BattlesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BattlesCountOutputType without action
   */
  export type BattlesCountOutputTypeCountBattle_participantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: battle_participantsWhereInput
  }

  /**
   * BattlesCountOutputType without action
   */
  export type BattlesCountOutputTypeCountBattle_menusArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: battle_menusWhereInput
  }

  /**
   * BattlesCountOutputType without action
   */
  export type BattlesCountOutputTypeCountSpin_resultsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: spin_resultsWhereInput
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
    battle_menus?: boolean | menu$battle_menusArgs<ExtArgs>
    menu_allery?: boolean | menu$menu_alleryArgs<ExtArgs>
    menu_tag?: boolean | menu$menu_tagArgs<ExtArgs>
    menu_vitamin?: boolean | menu$menu_vitaminArgs<ExtArgs>
    mukburim?: boolean | menu$mukburimArgs<ExtArgs>
    spin_results?: boolean | menu$spin_resultsArgs<ExtArgs>
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
    battle_menus?: boolean | menu$battle_menusArgs<ExtArgs>
    menu_allery?: boolean | menu$menu_alleryArgs<ExtArgs>
    menu_tag?: boolean | menu$menu_tagArgs<ExtArgs>
    menu_vitamin?: boolean | menu$menu_vitaminArgs<ExtArgs>
    mukburim?: boolean | menu$mukburimArgs<ExtArgs>
    spin_results?: boolean | menu$spin_resultsArgs<ExtArgs>
    _count?: boolean | MenuCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $menuPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "menu"
    objects: {
      battle_menus: Prisma.$battle_menusPayload<ExtArgs>[]
      menu_allery: Prisma.$menu_alleryPayload<ExtArgs>[]
      menu_tag: Prisma.$menu_tagPayload<ExtArgs>[]
      menu_vitamin: Prisma.$menu_vitaminPayload<ExtArgs>[]
      mukburim: Prisma.$mukburimPayload<ExtArgs>[]
      spin_results: Prisma.$spin_resultsPayload<ExtArgs>[]
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
    battle_menus<T extends menu$battle_menusArgs<ExtArgs> = {}>(args?: Subset<T, menu$battle_menusArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$battle_menusPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    menu_allery<T extends menu$menu_alleryArgs<ExtArgs> = {}>(args?: Subset<T, menu$menu_alleryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$menu_alleryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    menu_tag<T extends menu$menu_tagArgs<ExtArgs> = {}>(args?: Subset<T, menu$menu_tagArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$menu_tagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    menu_vitamin<T extends menu$menu_vitaminArgs<ExtArgs> = {}>(args?: Subset<T, menu$menu_vitaminArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$menu_vitaminPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    mukburim<T extends menu$mukburimArgs<ExtArgs> = {}>(args?: Subset<T, menu$mukburimArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$mukburimPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    spin_results<T extends menu$spin_resultsArgs<ExtArgs> = {}>(args?: Subset<T, menu$spin_resultsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$spin_resultsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * menu.battle_menus
   */
  export type menu$battle_menusArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the battle_menus
     */
    select?: battle_menusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the battle_menus
     */
    omit?: battle_menusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: battle_menusInclude<ExtArgs> | null
    where?: battle_menusWhereInput
    orderBy?: battle_menusOrderByWithRelationInput | battle_menusOrderByWithRelationInput[]
    cursor?: battle_menusWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Battle_menusScalarFieldEnum | Battle_menusScalarFieldEnum[]
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
   * menu.spin_results
   */
  export type menu$spin_resultsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the spin_results
     */
    select?: spin_resultsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the spin_results
     */
    omit?: spin_resultsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: spin_resultsInclude<ExtArgs> | null
    where?: spin_resultsWhereInput
    orderBy?: spin_resultsOrderByWithRelationInput | spin_resultsOrderByWithRelationInput[]
    cursor?: spin_resultsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Spin_resultsScalarFieldEnum | Spin_resultsScalarFieldEnum[]
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
    allergy?: boolean | allergyDefaultArgs<ExtArgs>
    menu?: boolean | menuDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["menu_allery"]>



  export type menu_allerySelectScalar = {
    menu_id?: boolean
    allergy_id?: boolean
  }

  export type menu_alleryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"menu_id" | "allergy_id", ExtArgs["result"]["menu_allery"]>
  export type menu_alleryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    allergy?: boolean | allergyDefaultArgs<ExtArgs>
    menu?: boolean | menuDefaultArgs<ExtArgs>
  }

  export type $menu_alleryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "menu_allery"
    objects: {
      allergy: Prisma.$allergyPayload<ExtArgs>
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
    allergy<T extends allergyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, allergyDefaultArgs<ExtArgs>>): Prisma__allergyClient<$Result.GetResult<Prisma.$allergyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Model battles
   */

  export type AggregateBattles = {
    _count: BattlesCountAggregateOutputType | null
    _avg: BattlesAvgAggregateOutputType | null
    _sum: BattlesSumAggregateOutputType | null
    _min: BattlesMinAggregateOutputType | null
    _max: BattlesMaxAggregateOutputType | null
  }

  export type BattlesAvgAggregateOutputType = {
    participant_count: number | null
  }

  export type BattlesSumAggregateOutputType = {
    participant_count: number | null
  }

  export type BattlesMinAggregateOutputType = {
    battle_id: string | null
    creator_nickname: string | null
    status: $Enums.battles_status | null
    participant_count: number | null
    created_at: Date | null
    finished_at: Date | null
    expires_at: Date | null
  }

  export type BattlesMaxAggregateOutputType = {
    battle_id: string | null
    creator_nickname: string | null
    status: $Enums.battles_status | null
    participant_count: number | null
    created_at: Date | null
    finished_at: Date | null
    expires_at: Date | null
  }

  export type BattlesCountAggregateOutputType = {
    battle_id: number
    creator_nickname: number
    status: number
    participant_count: number
    created_at: number
    finished_at: number
    expires_at: number
    _all: number
  }


  export type BattlesAvgAggregateInputType = {
    participant_count?: true
  }

  export type BattlesSumAggregateInputType = {
    participant_count?: true
  }

  export type BattlesMinAggregateInputType = {
    battle_id?: true
    creator_nickname?: true
    status?: true
    participant_count?: true
    created_at?: true
    finished_at?: true
    expires_at?: true
  }

  export type BattlesMaxAggregateInputType = {
    battle_id?: true
    creator_nickname?: true
    status?: true
    participant_count?: true
    created_at?: true
    finished_at?: true
    expires_at?: true
  }

  export type BattlesCountAggregateInputType = {
    battle_id?: true
    creator_nickname?: true
    status?: true
    participant_count?: true
    created_at?: true
    finished_at?: true
    expires_at?: true
    _all?: true
  }

  export type BattlesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which battles to aggregate.
     */
    where?: battlesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of battles to fetch.
     */
    orderBy?: battlesOrderByWithRelationInput | battlesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: battlesWhereUniqueInput
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
    _count?: true | BattlesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BattlesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BattlesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BattlesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BattlesMaxAggregateInputType
  }

  export type GetBattlesAggregateType<T extends BattlesAggregateArgs> = {
        [P in keyof T & keyof AggregateBattles]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBattles[P]>
      : GetScalarType<T[P], AggregateBattles[P]>
  }




  export type battlesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: battlesWhereInput
    orderBy?: battlesOrderByWithAggregationInput | battlesOrderByWithAggregationInput[]
    by: BattlesScalarFieldEnum[] | BattlesScalarFieldEnum
    having?: battlesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BattlesCountAggregateInputType | true
    _avg?: BattlesAvgAggregateInputType
    _sum?: BattlesSumAggregateInputType
    _min?: BattlesMinAggregateInputType
    _max?: BattlesMaxAggregateInputType
  }

  export type BattlesGroupByOutputType = {
    battle_id: string
    creator_nickname: string
    status: $Enums.battles_status
    participant_count: number
    created_at: Date
    finished_at: Date | null
    expires_at: Date
    _count: BattlesCountAggregateOutputType | null
    _avg: BattlesAvgAggregateOutputType | null
    _sum: BattlesSumAggregateOutputType | null
    _min: BattlesMinAggregateOutputType | null
    _max: BattlesMaxAggregateOutputType | null
  }

  type GetBattlesGroupByPayload<T extends battlesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BattlesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BattlesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BattlesGroupByOutputType[P]>
            : GetScalarType<T[P], BattlesGroupByOutputType[P]>
        }
      >
    >


  export type battlesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    battle_id?: boolean
    creator_nickname?: boolean
    status?: boolean
    participant_count?: boolean
    created_at?: boolean
    finished_at?: boolean
    expires_at?: boolean
    battle_participants?: boolean | battles$battle_participantsArgs<ExtArgs>
    battle_menus?: boolean | battles$battle_menusArgs<ExtArgs>
    spin_results?: boolean | battles$spin_resultsArgs<ExtArgs>
    _count?: boolean | BattlesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["battles"]>



  export type battlesSelectScalar = {
    battle_id?: boolean
    creator_nickname?: boolean
    status?: boolean
    participant_count?: boolean
    created_at?: boolean
    finished_at?: boolean
    expires_at?: boolean
  }

  export type battlesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"battle_id" | "creator_nickname" | "status" | "participant_count" | "created_at" | "finished_at" | "expires_at", ExtArgs["result"]["battles"]>
  export type battlesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    battle_participants?: boolean | battles$battle_participantsArgs<ExtArgs>
    battle_menus?: boolean | battles$battle_menusArgs<ExtArgs>
    spin_results?: boolean | battles$spin_resultsArgs<ExtArgs>
    _count?: boolean | BattlesCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $battlesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "battles"
    objects: {
      battle_participants: Prisma.$battle_participantsPayload<ExtArgs>[]
      battle_menus: Prisma.$battle_menusPayload<ExtArgs>[]
      spin_results: Prisma.$spin_resultsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      battle_id: string
      creator_nickname: string
      status: $Enums.battles_status
      participant_count: number
      created_at: Date
      finished_at: Date | null
      expires_at: Date
    }, ExtArgs["result"]["battles"]>
    composites: {}
  }

  type battlesGetPayload<S extends boolean | null | undefined | battlesDefaultArgs> = $Result.GetResult<Prisma.$battlesPayload, S>

  type battlesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<battlesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BattlesCountAggregateInputType | true
    }

  export interface battlesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['battles'], meta: { name: 'battles' } }
    /**
     * Find zero or one Battles that matches the filter.
     * @param {battlesFindUniqueArgs} args - Arguments to find a Battles
     * @example
     * // Get one Battles
     * const battles = await prisma.battles.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends battlesFindUniqueArgs>(args: SelectSubset<T, battlesFindUniqueArgs<ExtArgs>>): Prisma__battlesClient<$Result.GetResult<Prisma.$battlesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Battles that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {battlesFindUniqueOrThrowArgs} args - Arguments to find a Battles
     * @example
     * // Get one Battles
     * const battles = await prisma.battles.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends battlesFindUniqueOrThrowArgs>(args: SelectSubset<T, battlesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__battlesClient<$Result.GetResult<Prisma.$battlesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Battles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {battlesFindFirstArgs} args - Arguments to find a Battles
     * @example
     * // Get one Battles
     * const battles = await prisma.battles.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends battlesFindFirstArgs>(args?: SelectSubset<T, battlesFindFirstArgs<ExtArgs>>): Prisma__battlesClient<$Result.GetResult<Prisma.$battlesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Battles that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {battlesFindFirstOrThrowArgs} args - Arguments to find a Battles
     * @example
     * // Get one Battles
     * const battles = await prisma.battles.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends battlesFindFirstOrThrowArgs>(args?: SelectSubset<T, battlesFindFirstOrThrowArgs<ExtArgs>>): Prisma__battlesClient<$Result.GetResult<Prisma.$battlesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Battles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {battlesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Battles
     * const battles = await prisma.battles.findMany()
     * 
     * // Get first 10 Battles
     * const battles = await prisma.battles.findMany({ take: 10 })
     * 
     * // Only select the `battle_id`
     * const battlesWithBattle_idOnly = await prisma.battles.findMany({ select: { battle_id: true } })
     * 
     */
    findMany<T extends battlesFindManyArgs>(args?: SelectSubset<T, battlesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$battlesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Battles.
     * @param {battlesCreateArgs} args - Arguments to create a Battles.
     * @example
     * // Create one Battles
     * const Battles = await prisma.battles.create({
     *   data: {
     *     // ... data to create a Battles
     *   }
     * })
     * 
     */
    create<T extends battlesCreateArgs>(args: SelectSubset<T, battlesCreateArgs<ExtArgs>>): Prisma__battlesClient<$Result.GetResult<Prisma.$battlesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Battles.
     * @param {battlesCreateManyArgs} args - Arguments to create many Battles.
     * @example
     * // Create many Battles
     * const battles = await prisma.battles.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends battlesCreateManyArgs>(args?: SelectSubset<T, battlesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Battles.
     * @param {battlesDeleteArgs} args - Arguments to delete one Battles.
     * @example
     * // Delete one Battles
     * const Battles = await prisma.battles.delete({
     *   where: {
     *     // ... filter to delete one Battles
     *   }
     * })
     * 
     */
    delete<T extends battlesDeleteArgs>(args: SelectSubset<T, battlesDeleteArgs<ExtArgs>>): Prisma__battlesClient<$Result.GetResult<Prisma.$battlesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Battles.
     * @param {battlesUpdateArgs} args - Arguments to update one Battles.
     * @example
     * // Update one Battles
     * const battles = await prisma.battles.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends battlesUpdateArgs>(args: SelectSubset<T, battlesUpdateArgs<ExtArgs>>): Prisma__battlesClient<$Result.GetResult<Prisma.$battlesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Battles.
     * @param {battlesDeleteManyArgs} args - Arguments to filter Battles to delete.
     * @example
     * // Delete a few Battles
     * const { count } = await prisma.battles.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends battlesDeleteManyArgs>(args?: SelectSubset<T, battlesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Battles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {battlesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Battles
     * const battles = await prisma.battles.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends battlesUpdateManyArgs>(args: SelectSubset<T, battlesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Battles.
     * @param {battlesUpsertArgs} args - Arguments to update or create a Battles.
     * @example
     * // Update or create a Battles
     * const battles = await prisma.battles.upsert({
     *   create: {
     *     // ... data to create a Battles
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Battles we want to update
     *   }
     * })
     */
    upsert<T extends battlesUpsertArgs>(args: SelectSubset<T, battlesUpsertArgs<ExtArgs>>): Prisma__battlesClient<$Result.GetResult<Prisma.$battlesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Battles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {battlesCountArgs} args - Arguments to filter Battles to count.
     * @example
     * // Count the number of Battles
     * const count = await prisma.battles.count({
     *   where: {
     *     // ... the filter for the Battles we want to count
     *   }
     * })
    **/
    count<T extends battlesCountArgs>(
      args?: Subset<T, battlesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BattlesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Battles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BattlesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BattlesAggregateArgs>(args: Subset<T, BattlesAggregateArgs>): Prisma.PrismaPromise<GetBattlesAggregateType<T>>

    /**
     * Group by Battles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {battlesGroupByArgs} args - Group by arguments.
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
      T extends battlesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: battlesGroupByArgs['orderBy'] }
        : { orderBy?: battlesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, battlesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBattlesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the battles model
   */
  readonly fields: battlesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for battles.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__battlesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    battle_participants<T extends battles$battle_participantsArgs<ExtArgs> = {}>(args?: Subset<T, battles$battle_participantsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$battle_participantsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    battle_menus<T extends battles$battle_menusArgs<ExtArgs> = {}>(args?: Subset<T, battles$battle_menusArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$battle_menusPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    spin_results<T extends battles$spin_resultsArgs<ExtArgs> = {}>(args?: Subset<T, battles$spin_resultsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$spin_resultsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the battles model
   */
  interface battlesFieldRefs {
    readonly battle_id: FieldRef<"battles", 'String'>
    readonly creator_nickname: FieldRef<"battles", 'String'>
    readonly status: FieldRef<"battles", 'battles_status'>
    readonly participant_count: FieldRef<"battles", 'Int'>
    readonly created_at: FieldRef<"battles", 'DateTime'>
    readonly finished_at: FieldRef<"battles", 'DateTime'>
    readonly expires_at: FieldRef<"battles", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * battles findUnique
   */
  export type battlesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the battles
     */
    select?: battlesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the battles
     */
    omit?: battlesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: battlesInclude<ExtArgs> | null
    /**
     * Filter, which battles to fetch.
     */
    where: battlesWhereUniqueInput
  }

  /**
   * battles findUniqueOrThrow
   */
  export type battlesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the battles
     */
    select?: battlesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the battles
     */
    omit?: battlesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: battlesInclude<ExtArgs> | null
    /**
     * Filter, which battles to fetch.
     */
    where: battlesWhereUniqueInput
  }

  /**
   * battles findFirst
   */
  export type battlesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the battles
     */
    select?: battlesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the battles
     */
    omit?: battlesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: battlesInclude<ExtArgs> | null
    /**
     * Filter, which battles to fetch.
     */
    where?: battlesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of battles to fetch.
     */
    orderBy?: battlesOrderByWithRelationInput | battlesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for battles.
     */
    cursor?: battlesWhereUniqueInput
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
    distinct?: BattlesScalarFieldEnum | BattlesScalarFieldEnum[]
  }

  /**
   * battles findFirstOrThrow
   */
  export type battlesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the battles
     */
    select?: battlesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the battles
     */
    omit?: battlesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: battlesInclude<ExtArgs> | null
    /**
     * Filter, which battles to fetch.
     */
    where?: battlesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of battles to fetch.
     */
    orderBy?: battlesOrderByWithRelationInput | battlesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for battles.
     */
    cursor?: battlesWhereUniqueInput
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
    distinct?: BattlesScalarFieldEnum | BattlesScalarFieldEnum[]
  }

  /**
   * battles findMany
   */
  export type battlesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the battles
     */
    select?: battlesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the battles
     */
    omit?: battlesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: battlesInclude<ExtArgs> | null
    /**
     * Filter, which battles to fetch.
     */
    where?: battlesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of battles to fetch.
     */
    orderBy?: battlesOrderByWithRelationInput | battlesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing battles.
     */
    cursor?: battlesWhereUniqueInput
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
    distinct?: BattlesScalarFieldEnum | BattlesScalarFieldEnum[]
  }

  /**
   * battles create
   */
  export type battlesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the battles
     */
    select?: battlesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the battles
     */
    omit?: battlesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: battlesInclude<ExtArgs> | null
    /**
     * The data needed to create a battles.
     */
    data: XOR<battlesCreateInput, battlesUncheckedCreateInput>
  }

  /**
   * battles createMany
   */
  export type battlesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many battles.
     */
    data: battlesCreateManyInput | battlesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * battles update
   */
  export type battlesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the battles
     */
    select?: battlesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the battles
     */
    omit?: battlesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: battlesInclude<ExtArgs> | null
    /**
     * The data needed to update a battles.
     */
    data: XOR<battlesUpdateInput, battlesUncheckedUpdateInput>
    /**
     * Choose, which battles to update.
     */
    where: battlesWhereUniqueInput
  }

  /**
   * battles updateMany
   */
  export type battlesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update battles.
     */
    data: XOR<battlesUpdateManyMutationInput, battlesUncheckedUpdateManyInput>
    /**
     * Filter which battles to update
     */
    where?: battlesWhereInput
    /**
     * Limit how many battles to update.
     */
    limit?: number
  }

  /**
   * battles upsert
   */
  export type battlesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the battles
     */
    select?: battlesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the battles
     */
    omit?: battlesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: battlesInclude<ExtArgs> | null
    /**
     * The filter to search for the battles to update in case it exists.
     */
    where: battlesWhereUniqueInput
    /**
     * In case the battles found by the `where` argument doesn't exist, create a new battles with this data.
     */
    create: XOR<battlesCreateInput, battlesUncheckedCreateInput>
    /**
     * In case the battles was found with the provided `where` argument, update it with this data.
     */
    update: XOR<battlesUpdateInput, battlesUncheckedUpdateInput>
  }

  /**
   * battles delete
   */
  export type battlesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the battles
     */
    select?: battlesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the battles
     */
    omit?: battlesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: battlesInclude<ExtArgs> | null
    /**
     * Filter which battles to delete.
     */
    where: battlesWhereUniqueInput
  }

  /**
   * battles deleteMany
   */
  export type battlesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which battles to delete
     */
    where?: battlesWhereInput
    /**
     * Limit how many battles to delete.
     */
    limit?: number
  }

  /**
   * battles.battle_participants
   */
  export type battles$battle_participantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the battle_participants
     */
    select?: battle_participantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the battle_participants
     */
    omit?: battle_participantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: battle_participantsInclude<ExtArgs> | null
    where?: battle_participantsWhereInput
    orderBy?: battle_participantsOrderByWithRelationInput | battle_participantsOrderByWithRelationInput[]
    cursor?: battle_participantsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Battle_participantsScalarFieldEnum | Battle_participantsScalarFieldEnum[]
  }

  /**
   * battles.battle_menus
   */
  export type battles$battle_menusArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the battle_menus
     */
    select?: battle_menusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the battle_menus
     */
    omit?: battle_menusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: battle_menusInclude<ExtArgs> | null
    where?: battle_menusWhereInput
    orderBy?: battle_menusOrderByWithRelationInput | battle_menusOrderByWithRelationInput[]
    cursor?: battle_menusWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Battle_menusScalarFieldEnum | Battle_menusScalarFieldEnum[]
  }

  /**
   * battles.spin_results
   */
  export type battles$spin_resultsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the spin_results
     */
    select?: spin_resultsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the spin_results
     */
    omit?: spin_resultsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: spin_resultsInclude<ExtArgs> | null
    where?: spin_resultsWhereInput
    orderBy?: spin_resultsOrderByWithRelationInput | spin_resultsOrderByWithRelationInput[]
    cursor?: spin_resultsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Spin_resultsScalarFieldEnum | Spin_resultsScalarFieldEnum[]
  }

  /**
   * battles without action
   */
  export type battlesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the battles
     */
    select?: battlesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the battles
     */
    omit?: battlesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: battlesInclude<ExtArgs> | null
  }


  /**
   * Model battle_participants
   */

  export type AggregateBattle_participants = {
    _count: Battle_participantsCountAggregateOutputType | null
    _avg: Battle_participantsAvgAggregateOutputType | null
    _sum: Battle_participantsSumAggregateOutputType | null
    _min: Battle_participantsMinAggregateOutputType | null
    _max: Battle_participantsMaxAggregateOutputType | null
  }

  export type Battle_participantsAvgAggregateOutputType = {
    id: number | null
  }

  export type Battle_participantsSumAggregateOutputType = {
    id: bigint | null
  }

  export type Battle_participantsMinAggregateOutputType = {
    id: bigint | null
    battle_id: string | null
    nickname: string | null
    is_creator: boolean | null
    joined_at: Date | null
  }

  export type Battle_participantsMaxAggregateOutputType = {
    id: bigint | null
    battle_id: string | null
    nickname: string | null
    is_creator: boolean | null
    joined_at: Date | null
  }

  export type Battle_participantsCountAggregateOutputType = {
    id: number
    battle_id: number
    nickname: number
    is_creator: number
    joined_at: number
    _all: number
  }


  export type Battle_participantsAvgAggregateInputType = {
    id?: true
  }

  export type Battle_participantsSumAggregateInputType = {
    id?: true
  }

  export type Battle_participantsMinAggregateInputType = {
    id?: true
    battle_id?: true
    nickname?: true
    is_creator?: true
    joined_at?: true
  }

  export type Battle_participantsMaxAggregateInputType = {
    id?: true
    battle_id?: true
    nickname?: true
    is_creator?: true
    joined_at?: true
  }

  export type Battle_participantsCountAggregateInputType = {
    id?: true
    battle_id?: true
    nickname?: true
    is_creator?: true
    joined_at?: true
    _all?: true
  }

  export type Battle_participantsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which battle_participants to aggregate.
     */
    where?: battle_participantsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of battle_participants to fetch.
     */
    orderBy?: battle_participantsOrderByWithRelationInput | battle_participantsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: battle_participantsWhereUniqueInput
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
    _count?: true | Battle_participantsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Battle_participantsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Battle_participantsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Battle_participantsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Battle_participantsMaxAggregateInputType
  }

  export type GetBattle_participantsAggregateType<T extends Battle_participantsAggregateArgs> = {
        [P in keyof T & keyof AggregateBattle_participants]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBattle_participants[P]>
      : GetScalarType<T[P], AggregateBattle_participants[P]>
  }




  export type battle_participantsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: battle_participantsWhereInput
    orderBy?: battle_participantsOrderByWithAggregationInput | battle_participantsOrderByWithAggregationInput[]
    by: Battle_participantsScalarFieldEnum[] | Battle_participantsScalarFieldEnum
    having?: battle_participantsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Battle_participantsCountAggregateInputType | true
    _avg?: Battle_participantsAvgAggregateInputType
    _sum?: Battle_participantsSumAggregateInputType
    _min?: Battle_participantsMinAggregateInputType
    _max?: Battle_participantsMaxAggregateInputType
  }

  export type Battle_participantsGroupByOutputType = {
    id: bigint
    battle_id: string
    nickname: string
    is_creator: boolean
    joined_at: Date
    _count: Battle_participantsCountAggregateOutputType | null
    _avg: Battle_participantsAvgAggregateOutputType | null
    _sum: Battle_participantsSumAggregateOutputType | null
    _min: Battle_participantsMinAggregateOutputType | null
    _max: Battle_participantsMaxAggregateOutputType | null
  }

  type GetBattle_participantsGroupByPayload<T extends battle_participantsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Battle_participantsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Battle_participantsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Battle_participantsGroupByOutputType[P]>
            : GetScalarType<T[P], Battle_participantsGroupByOutputType[P]>
        }
      >
    >


  export type battle_participantsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    battle_id?: boolean
    nickname?: boolean
    is_creator?: boolean
    joined_at?: boolean
    battles?: boolean | battlesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["battle_participants"]>



  export type battle_participantsSelectScalar = {
    id?: boolean
    battle_id?: boolean
    nickname?: boolean
    is_creator?: boolean
    joined_at?: boolean
  }

  export type battle_participantsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "battle_id" | "nickname" | "is_creator" | "joined_at", ExtArgs["result"]["battle_participants"]>
  export type battle_participantsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    battles?: boolean | battlesDefaultArgs<ExtArgs>
  }

  export type $battle_participantsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "battle_participants"
    objects: {
      battles: Prisma.$battlesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      battle_id: string
      nickname: string
      is_creator: boolean
      joined_at: Date
    }, ExtArgs["result"]["battle_participants"]>
    composites: {}
  }

  type battle_participantsGetPayload<S extends boolean | null | undefined | battle_participantsDefaultArgs> = $Result.GetResult<Prisma.$battle_participantsPayload, S>

  type battle_participantsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<battle_participantsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Battle_participantsCountAggregateInputType | true
    }

  export interface battle_participantsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['battle_participants'], meta: { name: 'battle_participants' } }
    /**
     * Find zero or one Battle_participants that matches the filter.
     * @param {battle_participantsFindUniqueArgs} args - Arguments to find a Battle_participants
     * @example
     * // Get one Battle_participants
     * const battle_participants = await prisma.battle_participants.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends battle_participantsFindUniqueArgs>(args: SelectSubset<T, battle_participantsFindUniqueArgs<ExtArgs>>): Prisma__battle_participantsClient<$Result.GetResult<Prisma.$battle_participantsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Battle_participants that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {battle_participantsFindUniqueOrThrowArgs} args - Arguments to find a Battle_participants
     * @example
     * // Get one Battle_participants
     * const battle_participants = await prisma.battle_participants.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends battle_participantsFindUniqueOrThrowArgs>(args: SelectSubset<T, battle_participantsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__battle_participantsClient<$Result.GetResult<Prisma.$battle_participantsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Battle_participants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {battle_participantsFindFirstArgs} args - Arguments to find a Battle_participants
     * @example
     * // Get one Battle_participants
     * const battle_participants = await prisma.battle_participants.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends battle_participantsFindFirstArgs>(args?: SelectSubset<T, battle_participantsFindFirstArgs<ExtArgs>>): Prisma__battle_participantsClient<$Result.GetResult<Prisma.$battle_participantsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Battle_participants that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {battle_participantsFindFirstOrThrowArgs} args - Arguments to find a Battle_participants
     * @example
     * // Get one Battle_participants
     * const battle_participants = await prisma.battle_participants.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends battle_participantsFindFirstOrThrowArgs>(args?: SelectSubset<T, battle_participantsFindFirstOrThrowArgs<ExtArgs>>): Prisma__battle_participantsClient<$Result.GetResult<Prisma.$battle_participantsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Battle_participants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {battle_participantsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Battle_participants
     * const battle_participants = await prisma.battle_participants.findMany()
     * 
     * // Get first 10 Battle_participants
     * const battle_participants = await prisma.battle_participants.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const battle_participantsWithIdOnly = await prisma.battle_participants.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends battle_participantsFindManyArgs>(args?: SelectSubset<T, battle_participantsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$battle_participantsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Battle_participants.
     * @param {battle_participantsCreateArgs} args - Arguments to create a Battle_participants.
     * @example
     * // Create one Battle_participants
     * const Battle_participants = await prisma.battle_participants.create({
     *   data: {
     *     // ... data to create a Battle_participants
     *   }
     * })
     * 
     */
    create<T extends battle_participantsCreateArgs>(args: SelectSubset<T, battle_participantsCreateArgs<ExtArgs>>): Prisma__battle_participantsClient<$Result.GetResult<Prisma.$battle_participantsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Battle_participants.
     * @param {battle_participantsCreateManyArgs} args - Arguments to create many Battle_participants.
     * @example
     * // Create many Battle_participants
     * const battle_participants = await prisma.battle_participants.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends battle_participantsCreateManyArgs>(args?: SelectSubset<T, battle_participantsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Battle_participants.
     * @param {battle_participantsDeleteArgs} args - Arguments to delete one Battle_participants.
     * @example
     * // Delete one Battle_participants
     * const Battle_participants = await prisma.battle_participants.delete({
     *   where: {
     *     // ... filter to delete one Battle_participants
     *   }
     * })
     * 
     */
    delete<T extends battle_participantsDeleteArgs>(args: SelectSubset<T, battle_participantsDeleteArgs<ExtArgs>>): Prisma__battle_participantsClient<$Result.GetResult<Prisma.$battle_participantsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Battle_participants.
     * @param {battle_participantsUpdateArgs} args - Arguments to update one Battle_participants.
     * @example
     * // Update one Battle_participants
     * const battle_participants = await prisma.battle_participants.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends battle_participantsUpdateArgs>(args: SelectSubset<T, battle_participantsUpdateArgs<ExtArgs>>): Prisma__battle_participantsClient<$Result.GetResult<Prisma.$battle_participantsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Battle_participants.
     * @param {battle_participantsDeleteManyArgs} args - Arguments to filter Battle_participants to delete.
     * @example
     * // Delete a few Battle_participants
     * const { count } = await prisma.battle_participants.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends battle_participantsDeleteManyArgs>(args?: SelectSubset<T, battle_participantsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Battle_participants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {battle_participantsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Battle_participants
     * const battle_participants = await prisma.battle_participants.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends battle_participantsUpdateManyArgs>(args: SelectSubset<T, battle_participantsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Battle_participants.
     * @param {battle_participantsUpsertArgs} args - Arguments to update or create a Battle_participants.
     * @example
     * // Update or create a Battle_participants
     * const battle_participants = await prisma.battle_participants.upsert({
     *   create: {
     *     // ... data to create a Battle_participants
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Battle_participants we want to update
     *   }
     * })
     */
    upsert<T extends battle_participantsUpsertArgs>(args: SelectSubset<T, battle_participantsUpsertArgs<ExtArgs>>): Prisma__battle_participantsClient<$Result.GetResult<Prisma.$battle_participantsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Battle_participants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {battle_participantsCountArgs} args - Arguments to filter Battle_participants to count.
     * @example
     * // Count the number of Battle_participants
     * const count = await prisma.battle_participants.count({
     *   where: {
     *     // ... the filter for the Battle_participants we want to count
     *   }
     * })
    **/
    count<T extends battle_participantsCountArgs>(
      args?: Subset<T, battle_participantsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Battle_participantsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Battle_participants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Battle_participantsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Battle_participantsAggregateArgs>(args: Subset<T, Battle_participantsAggregateArgs>): Prisma.PrismaPromise<GetBattle_participantsAggregateType<T>>

    /**
     * Group by Battle_participants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {battle_participantsGroupByArgs} args - Group by arguments.
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
      T extends battle_participantsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: battle_participantsGroupByArgs['orderBy'] }
        : { orderBy?: battle_participantsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, battle_participantsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBattle_participantsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the battle_participants model
   */
  readonly fields: battle_participantsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for battle_participants.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__battle_participantsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    battles<T extends battlesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, battlesDefaultArgs<ExtArgs>>): Prisma__battlesClient<$Result.GetResult<Prisma.$battlesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the battle_participants model
   */
  interface battle_participantsFieldRefs {
    readonly id: FieldRef<"battle_participants", 'BigInt'>
    readonly battle_id: FieldRef<"battle_participants", 'String'>
    readonly nickname: FieldRef<"battle_participants", 'String'>
    readonly is_creator: FieldRef<"battle_participants", 'Boolean'>
    readonly joined_at: FieldRef<"battle_participants", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * battle_participants findUnique
   */
  export type battle_participantsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the battle_participants
     */
    select?: battle_participantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the battle_participants
     */
    omit?: battle_participantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: battle_participantsInclude<ExtArgs> | null
    /**
     * Filter, which battle_participants to fetch.
     */
    where: battle_participantsWhereUniqueInput
  }

  /**
   * battle_participants findUniqueOrThrow
   */
  export type battle_participantsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the battle_participants
     */
    select?: battle_participantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the battle_participants
     */
    omit?: battle_participantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: battle_participantsInclude<ExtArgs> | null
    /**
     * Filter, which battle_participants to fetch.
     */
    where: battle_participantsWhereUniqueInput
  }

  /**
   * battle_participants findFirst
   */
  export type battle_participantsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the battle_participants
     */
    select?: battle_participantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the battle_participants
     */
    omit?: battle_participantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: battle_participantsInclude<ExtArgs> | null
    /**
     * Filter, which battle_participants to fetch.
     */
    where?: battle_participantsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of battle_participants to fetch.
     */
    orderBy?: battle_participantsOrderByWithRelationInput | battle_participantsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for battle_participants.
     */
    cursor?: battle_participantsWhereUniqueInput
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
    distinct?: Battle_participantsScalarFieldEnum | Battle_participantsScalarFieldEnum[]
  }

  /**
   * battle_participants findFirstOrThrow
   */
  export type battle_participantsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the battle_participants
     */
    select?: battle_participantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the battle_participants
     */
    omit?: battle_participantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: battle_participantsInclude<ExtArgs> | null
    /**
     * Filter, which battle_participants to fetch.
     */
    where?: battle_participantsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of battle_participants to fetch.
     */
    orderBy?: battle_participantsOrderByWithRelationInput | battle_participantsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for battle_participants.
     */
    cursor?: battle_participantsWhereUniqueInput
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
    distinct?: Battle_participantsScalarFieldEnum | Battle_participantsScalarFieldEnum[]
  }

  /**
   * battle_participants findMany
   */
  export type battle_participantsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the battle_participants
     */
    select?: battle_participantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the battle_participants
     */
    omit?: battle_participantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: battle_participantsInclude<ExtArgs> | null
    /**
     * Filter, which battle_participants to fetch.
     */
    where?: battle_participantsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of battle_participants to fetch.
     */
    orderBy?: battle_participantsOrderByWithRelationInput | battle_participantsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing battle_participants.
     */
    cursor?: battle_participantsWhereUniqueInput
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
    distinct?: Battle_participantsScalarFieldEnum | Battle_participantsScalarFieldEnum[]
  }

  /**
   * battle_participants create
   */
  export type battle_participantsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the battle_participants
     */
    select?: battle_participantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the battle_participants
     */
    omit?: battle_participantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: battle_participantsInclude<ExtArgs> | null
    /**
     * The data needed to create a battle_participants.
     */
    data: XOR<battle_participantsCreateInput, battle_participantsUncheckedCreateInput>
  }

  /**
   * battle_participants createMany
   */
  export type battle_participantsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many battle_participants.
     */
    data: battle_participantsCreateManyInput | battle_participantsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * battle_participants update
   */
  export type battle_participantsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the battle_participants
     */
    select?: battle_participantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the battle_participants
     */
    omit?: battle_participantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: battle_participantsInclude<ExtArgs> | null
    /**
     * The data needed to update a battle_participants.
     */
    data: XOR<battle_participantsUpdateInput, battle_participantsUncheckedUpdateInput>
    /**
     * Choose, which battle_participants to update.
     */
    where: battle_participantsWhereUniqueInput
  }

  /**
   * battle_participants updateMany
   */
  export type battle_participantsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update battle_participants.
     */
    data: XOR<battle_participantsUpdateManyMutationInput, battle_participantsUncheckedUpdateManyInput>
    /**
     * Filter which battle_participants to update
     */
    where?: battle_participantsWhereInput
    /**
     * Limit how many battle_participants to update.
     */
    limit?: number
  }

  /**
   * battle_participants upsert
   */
  export type battle_participantsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the battle_participants
     */
    select?: battle_participantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the battle_participants
     */
    omit?: battle_participantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: battle_participantsInclude<ExtArgs> | null
    /**
     * The filter to search for the battle_participants to update in case it exists.
     */
    where: battle_participantsWhereUniqueInput
    /**
     * In case the battle_participants found by the `where` argument doesn't exist, create a new battle_participants with this data.
     */
    create: XOR<battle_participantsCreateInput, battle_participantsUncheckedCreateInput>
    /**
     * In case the battle_participants was found with the provided `where` argument, update it with this data.
     */
    update: XOR<battle_participantsUpdateInput, battle_participantsUncheckedUpdateInput>
  }

  /**
   * battle_participants delete
   */
  export type battle_participantsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the battle_participants
     */
    select?: battle_participantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the battle_participants
     */
    omit?: battle_participantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: battle_participantsInclude<ExtArgs> | null
    /**
     * Filter which battle_participants to delete.
     */
    where: battle_participantsWhereUniqueInput
  }

  /**
   * battle_participants deleteMany
   */
  export type battle_participantsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which battle_participants to delete
     */
    where?: battle_participantsWhereInput
    /**
     * Limit how many battle_participants to delete.
     */
    limit?: number
  }

  /**
   * battle_participants without action
   */
  export type battle_participantsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the battle_participants
     */
    select?: battle_participantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the battle_participants
     */
    omit?: battle_participantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: battle_participantsInclude<ExtArgs> | null
  }


  /**
   * Model battle_menus
   */

  export type AggregateBattle_menus = {
    _count: Battle_menusCountAggregateOutputType | null
    _avg: Battle_menusAvgAggregateOutputType | null
    _sum: Battle_menusSumAggregateOutputType | null
    _min: Battle_menusMinAggregateOutputType | null
    _max: Battle_menusMaxAggregateOutputType | null
  }

  export type Battle_menusAvgAggregateOutputType = {
    id: number | null
    menu_id: number | null
    boundary_angle: Decimal | null
    menu_order: number | null
  }

  export type Battle_menusSumAggregateOutputType = {
    id: bigint | null
    menu_id: bigint | null
    boundary_angle: Decimal | null
    menu_order: number | null
  }

  export type Battle_menusMinAggregateOutputType = {
    id: bigint | null
    battle_id: string | null
    menu_id: bigint | null
    menu_name: string | null
    boundary_angle: Decimal | null
    menu_order: number | null
  }

  export type Battle_menusMaxAggregateOutputType = {
    id: bigint | null
    battle_id: string | null
    menu_id: bigint | null
    menu_name: string | null
    boundary_angle: Decimal | null
    menu_order: number | null
  }

  export type Battle_menusCountAggregateOutputType = {
    id: number
    battle_id: number
    menu_id: number
    menu_name: number
    boundary_angle: number
    menu_order: number
    _all: number
  }


  export type Battle_menusAvgAggregateInputType = {
    id?: true
    menu_id?: true
    boundary_angle?: true
    menu_order?: true
  }

  export type Battle_menusSumAggregateInputType = {
    id?: true
    menu_id?: true
    boundary_angle?: true
    menu_order?: true
  }

  export type Battle_menusMinAggregateInputType = {
    id?: true
    battle_id?: true
    menu_id?: true
    menu_name?: true
    boundary_angle?: true
    menu_order?: true
  }

  export type Battle_menusMaxAggregateInputType = {
    id?: true
    battle_id?: true
    menu_id?: true
    menu_name?: true
    boundary_angle?: true
    menu_order?: true
  }

  export type Battle_menusCountAggregateInputType = {
    id?: true
    battle_id?: true
    menu_id?: true
    menu_name?: true
    boundary_angle?: true
    menu_order?: true
    _all?: true
  }

  export type Battle_menusAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which battle_menus to aggregate.
     */
    where?: battle_menusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of battle_menus to fetch.
     */
    orderBy?: battle_menusOrderByWithRelationInput | battle_menusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: battle_menusWhereUniqueInput
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
    _count?: true | Battle_menusCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Battle_menusAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Battle_menusSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Battle_menusMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Battle_menusMaxAggregateInputType
  }

  export type GetBattle_menusAggregateType<T extends Battle_menusAggregateArgs> = {
        [P in keyof T & keyof AggregateBattle_menus]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBattle_menus[P]>
      : GetScalarType<T[P], AggregateBattle_menus[P]>
  }




  export type battle_menusGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: battle_menusWhereInput
    orderBy?: battle_menusOrderByWithAggregationInput | battle_menusOrderByWithAggregationInput[]
    by: Battle_menusScalarFieldEnum[] | Battle_menusScalarFieldEnum
    having?: battle_menusScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Battle_menusCountAggregateInputType | true
    _avg?: Battle_menusAvgAggregateInputType
    _sum?: Battle_menusSumAggregateInputType
    _min?: Battle_menusMinAggregateInputType
    _max?: Battle_menusMaxAggregateInputType
  }

  export type Battle_menusGroupByOutputType = {
    id: bigint
    battle_id: string
    menu_id: bigint
    menu_name: string
    boundary_angle: Decimal
    menu_order: number
    _count: Battle_menusCountAggregateOutputType | null
    _avg: Battle_menusAvgAggregateOutputType | null
    _sum: Battle_menusSumAggregateOutputType | null
    _min: Battle_menusMinAggregateOutputType | null
    _max: Battle_menusMaxAggregateOutputType | null
  }

  type GetBattle_menusGroupByPayload<T extends battle_menusGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Battle_menusGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Battle_menusGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Battle_menusGroupByOutputType[P]>
            : GetScalarType<T[P], Battle_menusGroupByOutputType[P]>
        }
      >
    >


  export type battle_menusSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    battle_id?: boolean
    menu_id?: boolean
    menu_name?: boolean
    boundary_angle?: boolean
    menu_order?: boolean
    battles?: boolean | battlesDefaultArgs<ExtArgs>
    menu?: boolean | menuDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["battle_menus"]>



  export type battle_menusSelectScalar = {
    id?: boolean
    battle_id?: boolean
    menu_id?: boolean
    menu_name?: boolean
    boundary_angle?: boolean
    menu_order?: boolean
  }

  export type battle_menusOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "battle_id" | "menu_id" | "menu_name" | "boundary_angle" | "menu_order", ExtArgs["result"]["battle_menus"]>
  export type battle_menusInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    battles?: boolean | battlesDefaultArgs<ExtArgs>
    menu?: boolean | menuDefaultArgs<ExtArgs>
  }

  export type $battle_menusPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "battle_menus"
    objects: {
      battles: Prisma.$battlesPayload<ExtArgs>
      menu: Prisma.$menuPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      battle_id: string
      menu_id: bigint
      menu_name: string
      boundary_angle: Prisma.Decimal
      menu_order: number
    }, ExtArgs["result"]["battle_menus"]>
    composites: {}
  }

  type battle_menusGetPayload<S extends boolean | null | undefined | battle_menusDefaultArgs> = $Result.GetResult<Prisma.$battle_menusPayload, S>

  type battle_menusCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<battle_menusFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Battle_menusCountAggregateInputType | true
    }

  export interface battle_menusDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['battle_menus'], meta: { name: 'battle_menus' } }
    /**
     * Find zero or one Battle_menus that matches the filter.
     * @param {battle_menusFindUniqueArgs} args - Arguments to find a Battle_menus
     * @example
     * // Get one Battle_menus
     * const battle_menus = await prisma.battle_menus.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends battle_menusFindUniqueArgs>(args: SelectSubset<T, battle_menusFindUniqueArgs<ExtArgs>>): Prisma__battle_menusClient<$Result.GetResult<Prisma.$battle_menusPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Battle_menus that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {battle_menusFindUniqueOrThrowArgs} args - Arguments to find a Battle_menus
     * @example
     * // Get one Battle_menus
     * const battle_menus = await prisma.battle_menus.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends battle_menusFindUniqueOrThrowArgs>(args: SelectSubset<T, battle_menusFindUniqueOrThrowArgs<ExtArgs>>): Prisma__battle_menusClient<$Result.GetResult<Prisma.$battle_menusPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Battle_menus that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {battle_menusFindFirstArgs} args - Arguments to find a Battle_menus
     * @example
     * // Get one Battle_menus
     * const battle_menus = await prisma.battle_menus.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends battle_menusFindFirstArgs>(args?: SelectSubset<T, battle_menusFindFirstArgs<ExtArgs>>): Prisma__battle_menusClient<$Result.GetResult<Prisma.$battle_menusPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Battle_menus that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {battle_menusFindFirstOrThrowArgs} args - Arguments to find a Battle_menus
     * @example
     * // Get one Battle_menus
     * const battle_menus = await prisma.battle_menus.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends battle_menusFindFirstOrThrowArgs>(args?: SelectSubset<T, battle_menusFindFirstOrThrowArgs<ExtArgs>>): Prisma__battle_menusClient<$Result.GetResult<Prisma.$battle_menusPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Battle_menus that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {battle_menusFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Battle_menus
     * const battle_menus = await prisma.battle_menus.findMany()
     * 
     * // Get first 10 Battle_menus
     * const battle_menus = await prisma.battle_menus.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const battle_menusWithIdOnly = await prisma.battle_menus.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends battle_menusFindManyArgs>(args?: SelectSubset<T, battle_menusFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$battle_menusPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Battle_menus.
     * @param {battle_menusCreateArgs} args - Arguments to create a Battle_menus.
     * @example
     * // Create one Battle_menus
     * const Battle_menus = await prisma.battle_menus.create({
     *   data: {
     *     // ... data to create a Battle_menus
     *   }
     * })
     * 
     */
    create<T extends battle_menusCreateArgs>(args: SelectSubset<T, battle_menusCreateArgs<ExtArgs>>): Prisma__battle_menusClient<$Result.GetResult<Prisma.$battle_menusPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Battle_menus.
     * @param {battle_menusCreateManyArgs} args - Arguments to create many Battle_menus.
     * @example
     * // Create many Battle_menus
     * const battle_menus = await prisma.battle_menus.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends battle_menusCreateManyArgs>(args?: SelectSubset<T, battle_menusCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Battle_menus.
     * @param {battle_menusDeleteArgs} args - Arguments to delete one Battle_menus.
     * @example
     * // Delete one Battle_menus
     * const Battle_menus = await prisma.battle_menus.delete({
     *   where: {
     *     // ... filter to delete one Battle_menus
     *   }
     * })
     * 
     */
    delete<T extends battle_menusDeleteArgs>(args: SelectSubset<T, battle_menusDeleteArgs<ExtArgs>>): Prisma__battle_menusClient<$Result.GetResult<Prisma.$battle_menusPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Battle_menus.
     * @param {battle_menusUpdateArgs} args - Arguments to update one Battle_menus.
     * @example
     * // Update one Battle_menus
     * const battle_menus = await prisma.battle_menus.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends battle_menusUpdateArgs>(args: SelectSubset<T, battle_menusUpdateArgs<ExtArgs>>): Prisma__battle_menusClient<$Result.GetResult<Prisma.$battle_menusPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Battle_menus.
     * @param {battle_menusDeleteManyArgs} args - Arguments to filter Battle_menus to delete.
     * @example
     * // Delete a few Battle_menus
     * const { count } = await prisma.battle_menus.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends battle_menusDeleteManyArgs>(args?: SelectSubset<T, battle_menusDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Battle_menus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {battle_menusUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Battle_menus
     * const battle_menus = await prisma.battle_menus.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends battle_menusUpdateManyArgs>(args: SelectSubset<T, battle_menusUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Battle_menus.
     * @param {battle_menusUpsertArgs} args - Arguments to update or create a Battle_menus.
     * @example
     * // Update or create a Battle_menus
     * const battle_menus = await prisma.battle_menus.upsert({
     *   create: {
     *     // ... data to create a Battle_menus
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Battle_menus we want to update
     *   }
     * })
     */
    upsert<T extends battle_menusUpsertArgs>(args: SelectSubset<T, battle_menusUpsertArgs<ExtArgs>>): Prisma__battle_menusClient<$Result.GetResult<Prisma.$battle_menusPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Battle_menus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {battle_menusCountArgs} args - Arguments to filter Battle_menus to count.
     * @example
     * // Count the number of Battle_menus
     * const count = await prisma.battle_menus.count({
     *   where: {
     *     // ... the filter for the Battle_menus we want to count
     *   }
     * })
    **/
    count<T extends battle_menusCountArgs>(
      args?: Subset<T, battle_menusCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Battle_menusCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Battle_menus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Battle_menusAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Battle_menusAggregateArgs>(args: Subset<T, Battle_menusAggregateArgs>): Prisma.PrismaPromise<GetBattle_menusAggregateType<T>>

    /**
     * Group by Battle_menus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {battle_menusGroupByArgs} args - Group by arguments.
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
      T extends battle_menusGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: battle_menusGroupByArgs['orderBy'] }
        : { orderBy?: battle_menusGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, battle_menusGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBattle_menusGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the battle_menus model
   */
  readonly fields: battle_menusFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for battle_menus.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__battle_menusClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    battles<T extends battlesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, battlesDefaultArgs<ExtArgs>>): Prisma__battlesClient<$Result.GetResult<Prisma.$battlesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the battle_menus model
   */
  interface battle_menusFieldRefs {
    readonly id: FieldRef<"battle_menus", 'BigInt'>
    readonly battle_id: FieldRef<"battle_menus", 'String'>
    readonly menu_id: FieldRef<"battle_menus", 'BigInt'>
    readonly menu_name: FieldRef<"battle_menus", 'String'>
    readonly boundary_angle: FieldRef<"battle_menus", 'Decimal'>
    readonly menu_order: FieldRef<"battle_menus", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * battle_menus findUnique
   */
  export type battle_menusFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the battle_menus
     */
    select?: battle_menusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the battle_menus
     */
    omit?: battle_menusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: battle_menusInclude<ExtArgs> | null
    /**
     * Filter, which battle_menus to fetch.
     */
    where: battle_menusWhereUniqueInput
  }

  /**
   * battle_menus findUniqueOrThrow
   */
  export type battle_menusFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the battle_menus
     */
    select?: battle_menusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the battle_menus
     */
    omit?: battle_menusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: battle_menusInclude<ExtArgs> | null
    /**
     * Filter, which battle_menus to fetch.
     */
    where: battle_menusWhereUniqueInput
  }

  /**
   * battle_menus findFirst
   */
  export type battle_menusFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the battle_menus
     */
    select?: battle_menusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the battle_menus
     */
    omit?: battle_menusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: battle_menusInclude<ExtArgs> | null
    /**
     * Filter, which battle_menus to fetch.
     */
    where?: battle_menusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of battle_menus to fetch.
     */
    orderBy?: battle_menusOrderByWithRelationInput | battle_menusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for battle_menus.
     */
    cursor?: battle_menusWhereUniqueInput
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
    distinct?: Battle_menusScalarFieldEnum | Battle_menusScalarFieldEnum[]
  }

  /**
   * battle_menus findFirstOrThrow
   */
  export type battle_menusFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the battle_menus
     */
    select?: battle_menusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the battle_menus
     */
    omit?: battle_menusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: battle_menusInclude<ExtArgs> | null
    /**
     * Filter, which battle_menus to fetch.
     */
    where?: battle_menusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of battle_menus to fetch.
     */
    orderBy?: battle_menusOrderByWithRelationInput | battle_menusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for battle_menus.
     */
    cursor?: battle_menusWhereUniqueInput
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
    distinct?: Battle_menusScalarFieldEnum | Battle_menusScalarFieldEnum[]
  }

  /**
   * battle_menus findMany
   */
  export type battle_menusFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the battle_menus
     */
    select?: battle_menusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the battle_menus
     */
    omit?: battle_menusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: battle_menusInclude<ExtArgs> | null
    /**
     * Filter, which battle_menus to fetch.
     */
    where?: battle_menusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of battle_menus to fetch.
     */
    orderBy?: battle_menusOrderByWithRelationInput | battle_menusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing battle_menus.
     */
    cursor?: battle_menusWhereUniqueInput
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
    distinct?: Battle_menusScalarFieldEnum | Battle_menusScalarFieldEnum[]
  }

  /**
   * battle_menus create
   */
  export type battle_menusCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the battle_menus
     */
    select?: battle_menusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the battle_menus
     */
    omit?: battle_menusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: battle_menusInclude<ExtArgs> | null
    /**
     * The data needed to create a battle_menus.
     */
    data: XOR<battle_menusCreateInput, battle_menusUncheckedCreateInput>
  }

  /**
   * battle_menus createMany
   */
  export type battle_menusCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many battle_menus.
     */
    data: battle_menusCreateManyInput | battle_menusCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * battle_menus update
   */
  export type battle_menusUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the battle_menus
     */
    select?: battle_menusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the battle_menus
     */
    omit?: battle_menusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: battle_menusInclude<ExtArgs> | null
    /**
     * The data needed to update a battle_menus.
     */
    data: XOR<battle_menusUpdateInput, battle_menusUncheckedUpdateInput>
    /**
     * Choose, which battle_menus to update.
     */
    where: battle_menusWhereUniqueInput
  }

  /**
   * battle_menus updateMany
   */
  export type battle_menusUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update battle_menus.
     */
    data: XOR<battle_menusUpdateManyMutationInput, battle_menusUncheckedUpdateManyInput>
    /**
     * Filter which battle_menus to update
     */
    where?: battle_menusWhereInput
    /**
     * Limit how many battle_menus to update.
     */
    limit?: number
  }

  /**
   * battle_menus upsert
   */
  export type battle_menusUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the battle_menus
     */
    select?: battle_menusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the battle_menus
     */
    omit?: battle_menusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: battle_menusInclude<ExtArgs> | null
    /**
     * The filter to search for the battle_menus to update in case it exists.
     */
    where: battle_menusWhereUniqueInput
    /**
     * In case the battle_menus found by the `where` argument doesn't exist, create a new battle_menus with this data.
     */
    create: XOR<battle_menusCreateInput, battle_menusUncheckedCreateInput>
    /**
     * In case the battle_menus was found with the provided `where` argument, update it with this data.
     */
    update: XOR<battle_menusUpdateInput, battle_menusUncheckedUpdateInput>
  }

  /**
   * battle_menus delete
   */
  export type battle_menusDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the battle_menus
     */
    select?: battle_menusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the battle_menus
     */
    omit?: battle_menusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: battle_menusInclude<ExtArgs> | null
    /**
     * Filter which battle_menus to delete.
     */
    where: battle_menusWhereUniqueInput
  }

  /**
   * battle_menus deleteMany
   */
  export type battle_menusDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which battle_menus to delete
     */
    where?: battle_menusWhereInput
    /**
     * Limit how many battle_menus to delete.
     */
    limit?: number
  }

  /**
   * battle_menus without action
   */
  export type battle_menusDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the battle_menus
     */
    select?: battle_menusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the battle_menus
     */
    omit?: battle_menusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: battle_menusInclude<ExtArgs> | null
  }


  /**
   * Model spin_results
   */

  export type AggregateSpin_results = {
    _count: Spin_resultsCountAggregateOutputType | null
    _avg: Spin_resultsAvgAggregateOutputType | null
    _sum: Spin_resultsSumAggregateOutputType | null
    _min: Spin_resultsMinAggregateOutputType | null
    _max: Spin_resultsMaxAggregateOutputType | null
  }

  export type Spin_resultsAvgAggregateOutputType = {
    id: number | null
    stopped_angle: Decimal | null
    closest_menu_id: number | null
    distance_to_boundary: Decimal | null
    rank: number | null
  }

  export type Spin_resultsSumAggregateOutputType = {
    id: bigint | null
    stopped_angle: Decimal | null
    closest_menu_id: bigint | null
    distance_to_boundary: Decimal | null
    rank: number | null
  }

  export type Spin_resultsMinAggregateOutputType = {
    id: bigint | null
    battle_id: string | null
    nickname: string | null
    stopped_angle: Decimal | null
    closest_menu_id: bigint | null
    closest_menu_name: string | null
    distance_to_boundary: Decimal | null
    rank: number | null
    spun_at: Date | null
  }

  export type Spin_resultsMaxAggregateOutputType = {
    id: bigint | null
    battle_id: string | null
    nickname: string | null
    stopped_angle: Decimal | null
    closest_menu_id: bigint | null
    closest_menu_name: string | null
    distance_to_boundary: Decimal | null
    rank: number | null
    spun_at: Date | null
  }

  export type Spin_resultsCountAggregateOutputType = {
    id: number
    battle_id: number
    nickname: number
    stopped_angle: number
    closest_menu_id: number
    closest_menu_name: number
    distance_to_boundary: number
    rank: number
    spun_at: number
    _all: number
  }


  export type Spin_resultsAvgAggregateInputType = {
    id?: true
    stopped_angle?: true
    closest_menu_id?: true
    distance_to_boundary?: true
    rank?: true
  }

  export type Spin_resultsSumAggregateInputType = {
    id?: true
    stopped_angle?: true
    closest_menu_id?: true
    distance_to_boundary?: true
    rank?: true
  }

  export type Spin_resultsMinAggregateInputType = {
    id?: true
    battle_id?: true
    nickname?: true
    stopped_angle?: true
    closest_menu_id?: true
    closest_menu_name?: true
    distance_to_boundary?: true
    rank?: true
    spun_at?: true
  }

  export type Spin_resultsMaxAggregateInputType = {
    id?: true
    battle_id?: true
    nickname?: true
    stopped_angle?: true
    closest_menu_id?: true
    closest_menu_name?: true
    distance_to_boundary?: true
    rank?: true
    spun_at?: true
  }

  export type Spin_resultsCountAggregateInputType = {
    id?: true
    battle_id?: true
    nickname?: true
    stopped_angle?: true
    closest_menu_id?: true
    closest_menu_name?: true
    distance_to_boundary?: true
    rank?: true
    spun_at?: true
    _all?: true
  }

  export type Spin_resultsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which spin_results to aggregate.
     */
    where?: spin_resultsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of spin_results to fetch.
     */
    orderBy?: spin_resultsOrderByWithRelationInput | spin_resultsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: spin_resultsWhereUniqueInput
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
    _count?: true | Spin_resultsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Spin_resultsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Spin_resultsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Spin_resultsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Spin_resultsMaxAggregateInputType
  }

  export type GetSpin_resultsAggregateType<T extends Spin_resultsAggregateArgs> = {
        [P in keyof T & keyof AggregateSpin_results]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSpin_results[P]>
      : GetScalarType<T[P], AggregateSpin_results[P]>
  }




  export type spin_resultsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: spin_resultsWhereInput
    orderBy?: spin_resultsOrderByWithAggregationInput | spin_resultsOrderByWithAggregationInput[]
    by: Spin_resultsScalarFieldEnum[] | Spin_resultsScalarFieldEnum
    having?: spin_resultsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Spin_resultsCountAggregateInputType | true
    _avg?: Spin_resultsAvgAggregateInputType
    _sum?: Spin_resultsSumAggregateInputType
    _min?: Spin_resultsMinAggregateInputType
    _max?: Spin_resultsMaxAggregateInputType
  }

  export type Spin_resultsGroupByOutputType = {
    id: bigint
    battle_id: string
    nickname: string
    stopped_angle: Decimal
    closest_menu_id: bigint
    closest_menu_name: string
    distance_to_boundary: Decimal
    rank: number
    spun_at: Date
    _count: Spin_resultsCountAggregateOutputType | null
    _avg: Spin_resultsAvgAggregateOutputType | null
    _sum: Spin_resultsSumAggregateOutputType | null
    _min: Spin_resultsMinAggregateOutputType | null
    _max: Spin_resultsMaxAggregateOutputType | null
  }

  type GetSpin_resultsGroupByPayload<T extends spin_resultsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Spin_resultsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Spin_resultsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Spin_resultsGroupByOutputType[P]>
            : GetScalarType<T[P], Spin_resultsGroupByOutputType[P]>
        }
      >
    >


  export type spin_resultsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    battle_id?: boolean
    nickname?: boolean
    stopped_angle?: boolean
    closest_menu_id?: boolean
    closest_menu_name?: boolean
    distance_to_boundary?: boolean
    rank?: boolean
    spun_at?: boolean
    battles?: boolean | battlesDefaultArgs<ExtArgs>
    menu?: boolean | menuDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["spin_results"]>



  export type spin_resultsSelectScalar = {
    id?: boolean
    battle_id?: boolean
    nickname?: boolean
    stopped_angle?: boolean
    closest_menu_id?: boolean
    closest_menu_name?: boolean
    distance_to_boundary?: boolean
    rank?: boolean
    spun_at?: boolean
  }

  export type spin_resultsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "battle_id" | "nickname" | "stopped_angle" | "closest_menu_id" | "closest_menu_name" | "distance_to_boundary" | "rank" | "spun_at", ExtArgs["result"]["spin_results"]>
  export type spin_resultsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    battles?: boolean | battlesDefaultArgs<ExtArgs>
    menu?: boolean | menuDefaultArgs<ExtArgs>
  }

  export type $spin_resultsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "spin_results"
    objects: {
      battles: Prisma.$battlesPayload<ExtArgs>
      menu: Prisma.$menuPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      battle_id: string
      nickname: string
      stopped_angle: Prisma.Decimal
      closest_menu_id: bigint
      closest_menu_name: string
      distance_to_boundary: Prisma.Decimal
      rank: number
      spun_at: Date
    }, ExtArgs["result"]["spin_results"]>
    composites: {}
  }

  type spin_resultsGetPayload<S extends boolean | null | undefined | spin_resultsDefaultArgs> = $Result.GetResult<Prisma.$spin_resultsPayload, S>

  type spin_resultsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<spin_resultsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Spin_resultsCountAggregateInputType | true
    }

  export interface spin_resultsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['spin_results'], meta: { name: 'spin_results' } }
    /**
     * Find zero or one Spin_results that matches the filter.
     * @param {spin_resultsFindUniqueArgs} args - Arguments to find a Spin_results
     * @example
     * // Get one Spin_results
     * const spin_results = await prisma.spin_results.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends spin_resultsFindUniqueArgs>(args: SelectSubset<T, spin_resultsFindUniqueArgs<ExtArgs>>): Prisma__spin_resultsClient<$Result.GetResult<Prisma.$spin_resultsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Spin_results that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {spin_resultsFindUniqueOrThrowArgs} args - Arguments to find a Spin_results
     * @example
     * // Get one Spin_results
     * const spin_results = await prisma.spin_results.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends spin_resultsFindUniqueOrThrowArgs>(args: SelectSubset<T, spin_resultsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__spin_resultsClient<$Result.GetResult<Prisma.$spin_resultsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Spin_results that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {spin_resultsFindFirstArgs} args - Arguments to find a Spin_results
     * @example
     * // Get one Spin_results
     * const spin_results = await prisma.spin_results.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends spin_resultsFindFirstArgs>(args?: SelectSubset<T, spin_resultsFindFirstArgs<ExtArgs>>): Prisma__spin_resultsClient<$Result.GetResult<Prisma.$spin_resultsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Spin_results that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {spin_resultsFindFirstOrThrowArgs} args - Arguments to find a Spin_results
     * @example
     * // Get one Spin_results
     * const spin_results = await prisma.spin_results.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends spin_resultsFindFirstOrThrowArgs>(args?: SelectSubset<T, spin_resultsFindFirstOrThrowArgs<ExtArgs>>): Prisma__spin_resultsClient<$Result.GetResult<Prisma.$spin_resultsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Spin_results that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {spin_resultsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Spin_results
     * const spin_results = await prisma.spin_results.findMany()
     * 
     * // Get first 10 Spin_results
     * const spin_results = await prisma.spin_results.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const spin_resultsWithIdOnly = await prisma.spin_results.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends spin_resultsFindManyArgs>(args?: SelectSubset<T, spin_resultsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$spin_resultsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Spin_results.
     * @param {spin_resultsCreateArgs} args - Arguments to create a Spin_results.
     * @example
     * // Create one Spin_results
     * const Spin_results = await prisma.spin_results.create({
     *   data: {
     *     // ... data to create a Spin_results
     *   }
     * })
     * 
     */
    create<T extends spin_resultsCreateArgs>(args: SelectSubset<T, spin_resultsCreateArgs<ExtArgs>>): Prisma__spin_resultsClient<$Result.GetResult<Prisma.$spin_resultsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Spin_results.
     * @param {spin_resultsCreateManyArgs} args - Arguments to create many Spin_results.
     * @example
     * // Create many Spin_results
     * const spin_results = await prisma.spin_results.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends spin_resultsCreateManyArgs>(args?: SelectSubset<T, spin_resultsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Spin_results.
     * @param {spin_resultsDeleteArgs} args - Arguments to delete one Spin_results.
     * @example
     * // Delete one Spin_results
     * const Spin_results = await prisma.spin_results.delete({
     *   where: {
     *     // ... filter to delete one Spin_results
     *   }
     * })
     * 
     */
    delete<T extends spin_resultsDeleteArgs>(args: SelectSubset<T, spin_resultsDeleteArgs<ExtArgs>>): Prisma__spin_resultsClient<$Result.GetResult<Prisma.$spin_resultsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Spin_results.
     * @param {spin_resultsUpdateArgs} args - Arguments to update one Spin_results.
     * @example
     * // Update one Spin_results
     * const spin_results = await prisma.spin_results.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends spin_resultsUpdateArgs>(args: SelectSubset<T, spin_resultsUpdateArgs<ExtArgs>>): Prisma__spin_resultsClient<$Result.GetResult<Prisma.$spin_resultsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Spin_results.
     * @param {spin_resultsDeleteManyArgs} args - Arguments to filter Spin_results to delete.
     * @example
     * // Delete a few Spin_results
     * const { count } = await prisma.spin_results.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends spin_resultsDeleteManyArgs>(args?: SelectSubset<T, spin_resultsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Spin_results.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {spin_resultsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Spin_results
     * const spin_results = await prisma.spin_results.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends spin_resultsUpdateManyArgs>(args: SelectSubset<T, spin_resultsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Spin_results.
     * @param {spin_resultsUpsertArgs} args - Arguments to update or create a Spin_results.
     * @example
     * // Update or create a Spin_results
     * const spin_results = await prisma.spin_results.upsert({
     *   create: {
     *     // ... data to create a Spin_results
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Spin_results we want to update
     *   }
     * })
     */
    upsert<T extends spin_resultsUpsertArgs>(args: SelectSubset<T, spin_resultsUpsertArgs<ExtArgs>>): Prisma__spin_resultsClient<$Result.GetResult<Prisma.$spin_resultsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Spin_results.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {spin_resultsCountArgs} args - Arguments to filter Spin_results to count.
     * @example
     * // Count the number of Spin_results
     * const count = await prisma.spin_results.count({
     *   where: {
     *     // ... the filter for the Spin_results we want to count
     *   }
     * })
    **/
    count<T extends spin_resultsCountArgs>(
      args?: Subset<T, spin_resultsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Spin_resultsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Spin_results.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Spin_resultsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Spin_resultsAggregateArgs>(args: Subset<T, Spin_resultsAggregateArgs>): Prisma.PrismaPromise<GetSpin_resultsAggregateType<T>>

    /**
     * Group by Spin_results.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {spin_resultsGroupByArgs} args - Group by arguments.
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
      T extends spin_resultsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: spin_resultsGroupByArgs['orderBy'] }
        : { orderBy?: spin_resultsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, spin_resultsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSpin_resultsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the spin_results model
   */
  readonly fields: spin_resultsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for spin_results.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__spin_resultsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    battles<T extends battlesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, battlesDefaultArgs<ExtArgs>>): Prisma__battlesClient<$Result.GetResult<Prisma.$battlesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the spin_results model
   */
  interface spin_resultsFieldRefs {
    readonly id: FieldRef<"spin_results", 'BigInt'>
    readonly battle_id: FieldRef<"spin_results", 'String'>
    readonly nickname: FieldRef<"spin_results", 'String'>
    readonly stopped_angle: FieldRef<"spin_results", 'Decimal'>
    readonly closest_menu_id: FieldRef<"spin_results", 'BigInt'>
    readonly closest_menu_name: FieldRef<"spin_results", 'String'>
    readonly distance_to_boundary: FieldRef<"spin_results", 'Decimal'>
    readonly rank: FieldRef<"spin_results", 'Int'>
    readonly spun_at: FieldRef<"spin_results", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * spin_results findUnique
   */
  export type spin_resultsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the spin_results
     */
    select?: spin_resultsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the spin_results
     */
    omit?: spin_resultsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: spin_resultsInclude<ExtArgs> | null
    /**
     * Filter, which spin_results to fetch.
     */
    where: spin_resultsWhereUniqueInput
  }

  /**
   * spin_results findUniqueOrThrow
   */
  export type spin_resultsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the spin_results
     */
    select?: spin_resultsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the spin_results
     */
    omit?: spin_resultsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: spin_resultsInclude<ExtArgs> | null
    /**
     * Filter, which spin_results to fetch.
     */
    where: spin_resultsWhereUniqueInput
  }

  /**
   * spin_results findFirst
   */
  export type spin_resultsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the spin_results
     */
    select?: spin_resultsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the spin_results
     */
    omit?: spin_resultsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: spin_resultsInclude<ExtArgs> | null
    /**
     * Filter, which spin_results to fetch.
     */
    where?: spin_resultsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of spin_results to fetch.
     */
    orderBy?: spin_resultsOrderByWithRelationInput | spin_resultsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for spin_results.
     */
    cursor?: spin_resultsWhereUniqueInput
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
    distinct?: Spin_resultsScalarFieldEnum | Spin_resultsScalarFieldEnum[]
  }

  /**
   * spin_results findFirstOrThrow
   */
  export type spin_resultsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the spin_results
     */
    select?: spin_resultsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the spin_results
     */
    omit?: spin_resultsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: spin_resultsInclude<ExtArgs> | null
    /**
     * Filter, which spin_results to fetch.
     */
    where?: spin_resultsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of spin_results to fetch.
     */
    orderBy?: spin_resultsOrderByWithRelationInput | spin_resultsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for spin_results.
     */
    cursor?: spin_resultsWhereUniqueInput
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
    distinct?: Spin_resultsScalarFieldEnum | Spin_resultsScalarFieldEnum[]
  }

  /**
   * spin_results findMany
   */
  export type spin_resultsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the spin_results
     */
    select?: spin_resultsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the spin_results
     */
    omit?: spin_resultsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: spin_resultsInclude<ExtArgs> | null
    /**
     * Filter, which spin_results to fetch.
     */
    where?: spin_resultsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of spin_results to fetch.
     */
    orderBy?: spin_resultsOrderByWithRelationInput | spin_resultsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing spin_results.
     */
    cursor?: spin_resultsWhereUniqueInput
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
    distinct?: Spin_resultsScalarFieldEnum | Spin_resultsScalarFieldEnum[]
  }

  /**
   * spin_results create
   */
  export type spin_resultsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the spin_results
     */
    select?: spin_resultsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the spin_results
     */
    omit?: spin_resultsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: spin_resultsInclude<ExtArgs> | null
    /**
     * The data needed to create a spin_results.
     */
    data: XOR<spin_resultsCreateInput, spin_resultsUncheckedCreateInput>
  }

  /**
   * spin_results createMany
   */
  export type spin_resultsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many spin_results.
     */
    data: spin_resultsCreateManyInput | spin_resultsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * spin_results update
   */
  export type spin_resultsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the spin_results
     */
    select?: spin_resultsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the spin_results
     */
    omit?: spin_resultsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: spin_resultsInclude<ExtArgs> | null
    /**
     * The data needed to update a spin_results.
     */
    data: XOR<spin_resultsUpdateInput, spin_resultsUncheckedUpdateInput>
    /**
     * Choose, which spin_results to update.
     */
    where: spin_resultsWhereUniqueInput
  }

  /**
   * spin_results updateMany
   */
  export type spin_resultsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update spin_results.
     */
    data: XOR<spin_resultsUpdateManyMutationInput, spin_resultsUncheckedUpdateManyInput>
    /**
     * Filter which spin_results to update
     */
    where?: spin_resultsWhereInput
    /**
     * Limit how many spin_results to update.
     */
    limit?: number
  }

  /**
   * spin_results upsert
   */
  export type spin_resultsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the spin_results
     */
    select?: spin_resultsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the spin_results
     */
    omit?: spin_resultsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: spin_resultsInclude<ExtArgs> | null
    /**
     * The filter to search for the spin_results to update in case it exists.
     */
    where: spin_resultsWhereUniqueInput
    /**
     * In case the spin_results found by the `where` argument doesn't exist, create a new spin_results with this data.
     */
    create: XOR<spin_resultsCreateInput, spin_resultsUncheckedCreateInput>
    /**
     * In case the spin_results was found with the provided `where` argument, update it with this data.
     */
    update: XOR<spin_resultsUpdateInput, spin_resultsUncheckedUpdateInput>
  }

  /**
   * spin_results delete
   */
  export type spin_resultsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the spin_results
     */
    select?: spin_resultsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the spin_results
     */
    omit?: spin_resultsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: spin_resultsInclude<ExtArgs> | null
    /**
     * Filter which spin_results to delete.
     */
    where: spin_resultsWhereUniqueInput
  }

  /**
   * spin_results deleteMany
   */
  export type spin_resultsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which spin_results to delete
     */
    where?: spin_resultsWhereInput
    /**
     * Limit how many spin_results to delete.
     */
    limit?: number
  }

  /**
   * spin_results without action
   */
  export type spin_resultsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the spin_results
     */
    select?: spin_resultsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the spin_results
     */
    omit?: spin_resultsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: spin_resultsInclude<ExtArgs> | null
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


  export const BattlesScalarFieldEnum: {
    battle_id: 'battle_id',
    creator_nickname: 'creator_nickname',
    status: 'status',
    participant_count: 'participant_count',
    created_at: 'created_at',
    finished_at: 'finished_at',
    expires_at: 'expires_at'
  };

  export type BattlesScalarFieldEnum = (typeof BattlesScalarFieldEnum)[keyof typeof BattlesScalarFieldEnum]


  export const Battle_participantsScalarFieldEnum: {
    id: 'id',
    battle_id: 'battle_id',
    nickname: 'nickname',
    is_creator: 'is_creator',
    joined_at: 'joined_at'
  };

  export type Battle_participantsScalarFieldEnum = (typeof Battle_participantsScalarFieldEnum)[keyof typeof Battle_participantsScalarFieldEnum]


  export const Battle_menusScalarFieldEnum: {
    id: 'id',
    battle_id: 'battle_id',
    menu_id: 'menu_id',
    menu_name: 'menu_name',
    boundary_angle: 'boundary_angle',
    menu_order: 'menu_order'
  };

  export type Battle_menusScalarFieldEnum = (typeof Battle_menusScalarFieldEnum)[keyof typeof Battle_menusScalarFieldEnum]


  export const Spin_resultsScalarFieldEnum: {
    id: 'id',
    battle_id: 'battle_id',
    nickname: 'nickname',
    stopped_angle: 'stopped_angle',
    closest_menu_id: 'closest_menu_id',
    closest_menu_name: 'closest_menu_name',
    distance_to_boundary: 'distance_to_boundary',
    rank: 'rank',
    spun_at: 'spun_at'
  };

  export type Spin_resultsScalarFieldEnum = (typeof Spin_resultsScalarFieldEnum)[keyof typeof Spin_resultsScalarFieldEnum]


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


  export const vitaminOrderByRelevanceFieldEnum: {
    vitamin: 'vitamin'
  };

  export type vitaminOrderByRelevanceFieldEnum = (typeof vitaminOrderByRelevanceFieldEnum)[keyof typeof vitaminOrderByRelevanceFieldEnum]


  export const allergyOrderByRelevanceFieldEnum: {
    allergy: 'allergy'
  };

  export type allergyOrderByRelevanceFieldEnum = (typeof allergyOrderByRelevanceFieldEnum)[keyof typeof allergyOrderByRelevanceFieldEnum]


  export const battlesOrderByRelevanceFieldEnum: {
    battle_id: 'battle_id',
    creator_nickname: 'creator_nickname'
  };

  export type battlesOrderByRelevanceFieldEnum = (typeof battlesOrderByRelevanceFieldEnum)[keyof typeof battlesOrderByRelevanceFieldEnum]


  export const battle_participantsOrderByRelevanceFieldEnum: {
    battle_id: 'battle_id',
    nickname: 'nickname'
  };

  export type battle_participantsOrderByRelevanceFieldEnum = (typeof battle_participantsOrderByRelevanceFieldEnum)[keyof typeof battle_participantsOrderByRelevanceFieldEnum]


  export const battle_menusOrderByRelevanceFieldEnum: {
    battle_id: 'battle_id',
    menu_name: 'menu_name'
  };

  export type battle_menusOrderByRelevanceFieldEnum = (typeof battle_menusOrderByRelevanceFieldEnum)[keyof typeof battle_menusOrderByRelevanceFieldEnum]


  export const spin_resultsOrderByRelevanceFieldEnum: {
    battle_id: 'battle_id',
    nickname: 'nickname',
    closest_menu_name: 'closest_menu_name'
  };

  export type spin_resultsOrderByRelevanceFieldEnum = (typeof spin_resultsOrderByRelevanceFieldEnum)[keyof typeof spin_resultsOrderByRelevanceFieldEnum]


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
   * Reference to a field of type 'battles_status'
   */
  export type Enumbattles_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'battles_status'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


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
    battle_menus?: Battle_menusListRelationFilter
    menu_allery?: Menu_alleryListRelationFilter
    menu_tag?: Menu_tagListRelationFilter
    menu_vitamin?: Menu_vitaminListRelationFilter
    mukburim?: MukburimListRelationFilter
    spin_results?: Spin_resultsListRelationFilter
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
    battle_menus?: battle_menusOrderByRelationAggregateInput
    menu_allery?: menu_alleryOrderByRelationAggregateInput
    menu_tag?: menu_tagOrderByRelationAggregateInput
    menu_vitamin?: menu_vitaminOrderByRelationAggregateInput
    mukburim?: mukburimOrderByRelationAggregateInput
    spin_results?: spin_resultsOrderByRelationAggregateInput
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
    battle_menus?: Battle_menusListRelationFilter
    menu_allery?: Menu_alleryListRelationFilter
    menu_tag?: Menu_tagListRelationFilter
    menu_vitamin?: Menu_vitaminListRelationFilter
    mukburim?: MukburimListRelationFilter
    spin_results?: Spin_resultsListRelationFilter
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

  export type menu_alleryWhereInput = {
    AND?: menu_alleryWhereInput | menu_alleryWhereInput[]
    OR?: menu_alleryWhereInput[]
    NOT?: menu_alleryWhereInput | menu_alleryWhereInput[]
    menu_id?: BigIntFilter<"menu_allery"> | bigint | number
    allergy_id?: BigIntFilter<"menu_allery"> | bigint | number
    allergy?: XOR<AllergyScalarRelationFilter, allergyWhereInput>
    menu?: XOR<MenuScalarRelationFilter, menuWhereInput>
  }

  export type menu_alleryOrderByWithRelationInput = {
    menu_id?: SortOrder
    allergy_id?: SortOrder
    allergy?: allergyOrderByWithRelationInput
    menu?: menuOrderByWithRelationInput
  }

  export type menu_alleryWhereUniqueInput = Prisma.AtLeast<{
    menu_id_allergy_id?: menu_alleryMenu_idAllergy_idCompoundUniqueInput
    AND?: menu_alleryWhereInput | menu_alleryWhereInput[]
    OR?: menu_alleryWhereInput[]
    NOT?: menu_alleryWhereInput | menu_alleryWhereInput[]
    menu_id?: BigIntFilter<"menu_allery"> | bigint | number
    allergy_id?: BigIntFilter<"menu_allery"> | bigint | number
    allergy?: XOR<AllergyScalarRelationFilter, allergyWhereInput>
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

  export type battlesWhereInput = {
    AND?: battlesWhereInput | battlesWhereInput[]
    OR?: battlesWhereInput[]
    NOT?: battlesWhereInput | battlesWhereInput[]
    battle_id?: StringFilter<"battles"> | string
    creator_nickname?: StringFilter<"battles"> | string
    status?: Enumbattles_statusFilter<"battles"> | $Enums.battles_status
    participant_count?: IntFilter<"battles"> | number
    created_at?: DateTimeFilter<"battles"> | Date | string
    finished_at?: DateTimeNullableFilter<"battles"> | Date | string | null
    expires_at?: DateTimeFilter<"battles"> | Date | string
    battle_participants?: Battle_participantsListRelationFilter
    battle_menus?: Battle_menusListRelationFilter
    spin_results?: Spin_resultsListRelationFilter
  }

  export type battlesOrderByWithRelationInput = {
    battle_id?: SortOrder
    creator_nickname?: SortOrder
    status?: SortOrder
    participant_count?: SortOrder
    created_at?: SortOrder
    finished_at?: SortOrderInput | SortOrder
    expires_at?: SortOrder
    battle_participants?: battle_participantsOrderByRelationAggregateInput
    battle_menus?: battle_menusOrderByRelationAggregateInput
    spin_results?: spin_resultsOrderByRelationAggregateInput
    _relevance?: battlesOrderByRelevanceInput
  }

  export type battlesWhereUniqueInput = Prisma.AtLeast<{
    battle_id?: string
    AND?: battlesWhereInput | battlesWhereInput[]
    OR?: battlesWhereInput[]
    NOT?: battlesWhereInput | battlesWhereInput[]
    creator_nickname?: StringFilter<"battles"> | string
    status?: Enumbattles_statusFilter<"battles"> | $Enums.battles_status
    participant_count?: IntFilter<"battles"> | number
    created_at?: DateTimeFilter<"battles"> | Date | string
    finished_at?: DateTimeNullableFilter<"battles"> | Date | string | null
    expires_at?: DateTimeFilter<"battles"> | Date | string
    battle_participants?: Battle_participantsListRelationFilter
    battle_menus?: Battle_menusListRelationFilter
    spin_results?: Spin_resultsListRelationFilter
  }, "battle_id">

  export type battlesOrderByWithAggregationInput = {
    battle_id?: SortOrder
    creator_nickname?: SortOrder
    status?: SortOrder
    participant_count?: SortOrder
    created_at?: SortOrder
    finished_at?: SortOrderInput | SortOrder
    expires_at?: SortOrder
    _count?: battlesCountOrderByAggregateInput
    _avg?: battlesAvgOrderByAggregateInput
    _max?: battlesMaxOrderByAggregateInput
    _min?: battlesMinOrderByAggregateInput
    _sum?: battlesSumOrderByAggregateInput
  }

  export type battlesScalarWhereWithAggregatesInput = {
    AND?: battlesScalarWhereWithAggregatesInput | battlesScalarWhereWithAggregatesInput[]
    OR?: battlesScalarWhereWithAggregatesInput[]
    NOT?: battlesScalarWhereWithAggregatesInput | battlesScalarWhereWithAggregatesInput[]
    battle_id?: StringWithAggregatesFilter<"battles"> | string
    creator_nickname?: StringWithAggregatesFilter<"battles"> | string
    status?: Enumbattles_statusWithAggregatesFilter<"battles"> | $Enums.battles_status
    participant_count?: IntWithAggregatesFilter<"battles"> | number
    created_at?: DateTimeWithAggregatesFilter<"battles"> | Date | string
    finished_at?: DateTimeNullableWithAggregatesFilter<"battles"> | Date | string | null
    expires_at?: DateTimeWithAggregatesFilter<"battles"> | Date | string
  }

  export type battle_participantsWhereInput = {
    AND?: battle_participantsWhereInput | battle_participantsWhereInput[]
    OR?: battle_participantsWhereInput[]
    NOT?: battle_participantsWhereInput | battle_participantsWhereInput[]
    id?: BigIntFilter<"battle_participants"> | bigint | number
    battle_id?: StringFilter<"battle_participants"> | string
    nickname?: StringFilter<"battle_participants"> | string
    is_creator?: BoolFilter<"battle_participants"> | boolean
    joined_at?: DateTimeFilter<"battle_participants"> | Date | string
    battles?: XOR<BattlesScalarRelationFilter, battlesWhereInput>
  }

  export type battle_participantsOrderByWithRelationInput = {
    id?: SortOrder
    battle_id?: SortOrder
    nickname?: SortOrder
    is_creator?: SortOrder
    joined_at?: SortOrder
    battles?: battlesOrderByWithRelationInput
    _relevance?: battle_participantsOrderByRelevanceInput
  }

  export type battle_participantsWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    battle_id_nickname?: battle_participantsBattle_idNicknameCompoundUniqueInput
    AND?: battle_participantsWhereInput | battle_participantsWhereInput[]
    OR?: battle_participantsWhereInput[]
    NOT?: battle_participantsWhereInput | battle_participantsWhereInput[]
    battle_id?: StringFilter<"battle_participants"> | string
    nickname?: StringFilter<"battle_participants"> | string
    is_creator?: BoolFilter<"battle_participants"> | boolean
    joined_at?: DateTimeFilter<"battle_participants"> | Date | string
    battles?: XOR<BattlesScalarRelationFilter, battlesWhereInput>
  }, "id" | "battle_id_nickname">

  export type battle_participantsOrderByWithAggregationInput = {
    id?: SortOrder
    battle_id?: SortOrder
    nickname?: SortOrder
    is_creator?: SortOrder
    joined_at?: SortOrder
    _count?: battle_participantsCountOrderByAggregateInput
    _avg?: battle_participantsAvgOrderByAggregateInput
    _max?: battle_participantsMaxOrderByAggregateInput
    _min?: battle_participantsMinOrderByAggregateInput
    _sum?: battle_participantsSumOrderByAggregateInput
  }

  export type battle_participantsScalarWhereWithAggregatesInput = {
    AND?: battle_participantsScalarWhereWithAggregatesInput | battle_participantsScalarWhereWithAggregatesInput[]
    OR?: battle_participantsScalarWhereWithAggregatesInput[]
    NOT?: battle_participantsScalarWhereWithAggregatesInput | battle_participantsScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"battle_participants"> | bigint | number
    battle_id?: StringWithAggregatesFilter<"battle_participants"> | string
    nickname?: StringWithAggregatesFilter<"battle_participants"> | string
    is_creator?: BoolWithAggregatesFilter<"battle_participants"> | boolean
    joined_at?: DateTimeWithAggregatesFilter<"battle_participants"> | Date | string
  }

  export type battle_menusWhereInput = {
    AND?: battle_menusWhereInput | battle_menusWhereInput[]
    OR?: battle_menusWhereInput[]
    NOT?: battle_menusWhereInput | battle_menusWhereInput[]
    id?: BigIntFilter<"battle_menus"> | bigint | number
    battle_id?: StringFilter<"battle_menus"> | string
    menu_id?: BigIntFilter<"battle_menus"> | bigint | number
    menu_name?: StringFilter<"battle_menus"> | string
    boundary_angle?: DecimalFilter<"battle_menus"> | Decimal | DecimalJsLike | number | string
    menu_order?: IntFilter<"battle_menus"> | number
    battles?: XOR<BattlesScalarRelationFilter, battlesWhereInput>
    menu?: XOR<MenuScalarRelationFilter, menuWhereInput>
  }

  export type battle_menusOrderByWithRelationInput = {
    id?: SortOrder
    battle_id?: SortOrder
    menu_id?: SortOrder
    menu_name?: SortOrder
    boundary_angle?: SortOrder
    menu_order?: SortOrder
    battles?: battlesOrderByWithRelationInput
    menu?: menuOrderByWithRelationInput
    _relevance?: battle_menusOrderByRelevanceInput
  }

  export type battle_menusWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    battle_id_menu_id?: battle_menusBattle_idMenu_idCompoundUniqueInput
    AND?: battle_menusWhereInput | battle_menusWhereInput[]
    OR?: battle_menusWhereInput[]
    NOT?: battle_menusWhereInput | battle_menusWhereInput[]
    battle_id?: StringFilter<"battle_menus"> | string
    menu_id?: BigIntFilter<"battle_menus"> | bigint | number
    menu_name?: StringFilter<"battle_menus"> | string
    boundary_angle?: DecimalFilter<"battle_menus"> | Decimal | DecimalJsLike | number | string
    menu_order?: IntFilter<"battle_menus"> | number
    battles?: XOR<BattlesScalarRelationFilter, battlesWhereInput>
    menu?: XOR<MenuScalarRelationFilter, menuWhereInput>
  }, "id" | "battle_id_menu_id">

  export type battle_menusOrderByWithAggregationInput = {
    id?: SortOrder
    battle_id?: SortOrder
    menu_id?: SortOrder
    menu_name?: SortOrder
    boundary_angle?: SortOrder
    menu_order?: SortOrder
    _count?: battle_menusCountOrderByAggregateInput
    _avg?: battle_menusAvgOrderByAggregateInput
    _max?: battle_menusMaxOrderByAggregateInput
    _min?: battle_menusMinOrderByAggregateInput
    _sum?: battle_menusSumOrderByAggregateInput
  }

  export type battle_menusScalarWhereWithAggregatesInput = {
    AND?: battle_menusScalarWhereWithAggregatesInput | battle_menusScalarWhereWithAggregatesInput[]
    OR?: battle_menusScalarWhereWithAggregatesInput[]
    NOT?: battle_menusScalarWhereWithAggregatesInput | battle_menusScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"battle_menus"> | bigint | number
    battle_id?: StringWithAggregatesFilter<"battle_menus"> | string
    menu_id?: BigIntWithAggregatesFilter<"battle_menus"> | bigint | number
    menu_name?: StringWithAggregatesFilter<"battle_menus"> | string
    boundary_angle?: DecimalWithAggregatesFilter<"battle_menus"> | Decimal | DecimalJsLike | number | string
    menu_order?: IntWithAggregatesFilter<"battle_menus"> | number
  }

  export type spin_resultsWhereInput = {
    AND?: spin_resultsWhereInput | spin_resultsWhereInput[]
    OR?: spin_resultsWhereInput[]
    NOT?: spin_resultsWhereInput | spin_resultsWhereInput[]
    id?: BigIntFilter<"spin_results"> | bigint | number
    battle_id?: StringFilter<"spin_results"> | string
    nickname?: StringFilter<"spin_results"> | string
    stopped_angle?: DecimalFilter<"spin_results"> | Decimal | DecimalJsLike | number | string
    closest_menu_id?: BigIntFilter<"spin_results"> | bigint | number
    closest_menu_name?: StringFilter<"spin_results"> | string
    distance_to_boundary?: DecimalFilter<"spin_results"> | Decimal | DecimalJsLike | number | string
    rank?: IntFilter<"spin_results"> | number
    spun_at?: DateTimeFilter<"spin_results"> | Date | string
    battles?: XOR<BattlesScalarRelationFilter, battlesWhereInput>
    menu?: XOR<MenuScalarRelationFilter, menuWhereInput>
  }

  export type spin_resultsOrderByWithRelationInput = {
    id?: SortOrder
    battle_id?: SortOrder
    nickname?: SortOrder
    stopped_angle?: SortOrder
    closest_menu_id?: SortOrder
    closest_menu_name?: SortOrder
    distance_to_boundary?: SortOrder
    rank?: SortOrder
    spun_at?: SortOrder
    battles?: battlesOrderByWithRelationInput
    menu?: menuOrderByWithRelationInput
    _relevance?: spin_resultsOrderByRelevanceInput
  }

  export type spin_resultsWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    battle_id_nickname?: spin_resultsBattle_idNicknameCompoundUniqueInput
    AND?: spin_resultsWhereInput | spin_resultsWhereInput[]
    OR?: spin_resultsWhereInput[]
    NOT?: spin_resultsWhereInput | spin_resultsWhereInput[]
    battle_id?: StringFilter<"spin_results"> | string
    nickname?: StringFilter<"spin_results"> | string
    stopped_angle?: DecimalFilter<"spin_results"> | Decimal | DecimalJsLike | number | string
    closest_menu_id?: BigIntFilter<"spin_results"> | bigint | number
    closest_menu_name?: StringFilter<"spin_results"> | string
    distance_to_boundary?: DecimalFilter<"spin_results"> | Decimal | DecimalJsLike | number | string
    rank?: IntFilter<"spin_results"> | number
    spun_at?: DateTimeFilter<"spin_results"> | Date | string
    battles?: XOR<BattlesScalarRelationFilter, battlesWhereInput>
    menu?: XOR<MenuScalarRelationFilter, menuWhereInput>
  }, "id" | "battle_id_nickname">

  export type spin_resultsOrderByWithAggregationInput = {
    id?: SortOrder
    battle_id?: SortOrder
    nickname?: SortOrder
    stopped_angle?: SortOrder
    closest_menu_id?: SortOrder
    closest_menu_name?: SortOrder
    distance_to_boundary?: SortOrder
    rank?: SortOrder
    spun_at?: SortOrder
    _count?: spin_resultsCountOrderByAggregateInput
    _avg?: spin_resultsAvgOrderByAggregateInput
    _max?: spin_resultsMaxOrderByAggregateInput
    _min?: spin_resultsMinOrderByAggregateInput
    _sum?: spin_resultsSumOrderByAggregateInput
  }

  export type spin_resultsScalarWhereWithAggregatesInput = {
    AND?: spin_resultsScalarWhereWithAggregatesInput | spin_resultsScalarWhereWithAggregatesInput[]
    OR?: spin_resultsScalarWhereWithAggregatesInput[]
    NOT?: spin_resultsScalarWhereWithAggregatesInput | spin_resultsScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"spin_results"> | bigint | number
    battle_id?: StringWithAggregatesFilter<"spin_results"> | string
    nickname?: StringWithAggregatesFilter<"spin_results"> | string
    stopped_angle?: DecimalWithAggregatesFilter<"spin_results"> | Decimal | DecimalJsLike | number | string
    closest_menu_id?: BigIntWithAggregatesFilter<"spin_results"> | bigint | number
    closest_menu_name?: StringWithAggregatesFilter<"spin_results"> | string
    distance_to_boundary?: DecimalWithAggregatesFilter<"spin_results"> | Decimal | DecimalJsLike | number | string
    rank?: IntWithAggregatesFilter<"spin_results"> | number
    spun_at?: DateTimeWithAggregatesFilter<"spin_results"> | Date | string
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
    battle_menus?: battle_menusCreateNestedManyWithoutMenuInput
    menu_allery?: menu_alleryCreateNestedManyWithoutMenuInput
    menu_tag?: menu_tagCreateNestedManyWithoutMenuInput
    menu_vitamin?: menu_vitaminCreateNestedManyWithoutMenuInput
    mukburim?: mukburimCreateNestedManyWithoutMenuInput
    spin_results?: spin_resultsCreateNestedManyWithoutMenuInput
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
    battle_menus?: battle_menusUncheckedCreateNestedManyWithoutMenuInput
    menu_allery?: menu_alleryUncheckedCreateNestedManyWithoutMenuInput
    menu_tag?: menu_tagUncheckedCreateNestedManyWithoutMenuInput
    menu_vitamin?: menu_vitaminUncheckedCreateNestedManyWithoutMenuInput
    mukburim?: mukburimUncheckedCreateNestedManyWithoutMenuInput
    spin_results?: spin_resultsUncheckedCreateNestedManyWithoutMenuInput
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
    battle_menus?: battle_menusUpdateManyWithoutMenuNestedInput
    menu_allery?: menu_alleryUpdateManyWithoutMenuNestedInput
    menu_tag?: menu_tagUpdateManyWithoutMenuNestedInput
    menu_vitamin?: menu_vitaminUpdateManyWithoutMenuNestedInput
    mukburim?: mukburimUpdateManyWithoutMenuNestedInput
    spin_results?: spin_resultsUpdateManyWithoutMenuNestedInput
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
    battle_menus?: battle_menusUncheckedUpdateManyWithoutMenuNestedInput
    menu_allery?: menu_alleryUncheckedUpdateManyWithoutMenuNestedInput
    menu_tag?: menu_tagUncheckedUpdateManyWithoutMenuNestedInput
    menu_vitamin?: menu_vitaminUncheckedUpdateManyWithoutMenuNestedInput
    mukburim?: mukburimUncheckedUpdateManyWithoutMenuNestedInput
    spin_results?: spin_resultsUncheckedUpdateManyWithoutMenuNestedInput
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

  export type menu_alleryCreateInput = {
    allergy: allergyCreateNestedOneWithoutMenu_alleryInput
    menu: menuCreateNestedOneWithoutMenu_alleryInput
  }

  export type menu_alleryUncheckedCreateInput = {
    menu_id: bigint | number
    allergy_id: bigint | number
  }

  export type menu_alleryUpdateInput = {
    allergy?: allergyUpdateOneRequiredWithoutMenu_alleryNestedInput
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
    menu_allery?: menu_alleryCreateNestedManyWithoutAllergyInput
  }

  export type allergyUncheckedCreateInput = {
    id?: bigint | number
    allergy?: string | null
    menu_allery?: menu_alleryUncheckedCreateNestedManyWithoutAllergyInput
  }

  export type allergyUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    allergy?: NullableStringFieldUpdateOperationsInput | string | null
    menu_allery?: menu_alleryUpdateManyWithoutAllergyNestedInput
  }

  export type allergyUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    allergy?: NullableStringFieldUpdateOperationsInput | string | null
    menu_allery?: menu_alleryUncheckedUpdateManyWithoutAllergyNestedInput
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

  export type battlesCreateInput = {
    battle_id: string
    creator_nickname: string
    status?: $Enums.battles_status
    participant_count?: number
    created_at?: Date | string
    finished_at?: Date | string | null
    expires_at: Date | string
    battle_participants?: battle_participantsCreateNestedManyWithoutBattlesInput
    battle_menus?: battle_menusCreateNestedManyWithoutBattlesInput
    spin_results?: spin_resultsCreateNestedManyWithoutBattlesInput
  }

  export type battlesUncheckedCreateInput = {
    battle_id: string
    creator_nickname: string
    status?: $Enums.battles_status
    participant_count?: number
    created_at?: Date | string
    finished_at?: Date | string | null
    expires_at: Date | string
    battle_participants?: battle_participantsUncheckedCreateNestedManyWithoutBattlesInput
    battle_menus?: battle_menusUncheckedCreateNestedManyWithoutBattlesInput
    spin_results?: spin_resultsUncheckedCreateNestedManyWithoutBattlesInput
  }

  export type battlesUpdateInput = {
    battle_id?: StringFieldUpdateOperationsInput | string
    creator_nickname?: StringFieldUpdateOperationsInput | string
    status?: Enumbattles_statusFieldUpdateOperationsInput | $Enums.battles_status
    participant_count?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    finished_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    battle_participants?: battle_participantsUpdateManyWithoutBattlesNestedInput
    battle_menus?: battle_menusUpdateManyWithoutBattlesNestedInput
    spin_results?: spin_resultsUpdateManyWithoutBattlesNestedInput
  }

  export type battlesUncheckedUpdateInput = {
    battle_id?: StringFieldUpdateOperationsInput | string
    creator_nickname?: StringFieldUpdateOperationsInput | string
    status?: Enumbattles_statusFieldUpdateOperationsInput | $Enums.battles_status
    participant_count?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    finished_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    battle_participants?: battle_participantsUncheckedUpdateManyWithoutBattlesNestedInput
    battle_menus?: battle_menusUncheckedUpdateManyWithoutBattlesNestedInput
    spin_results?: spin_resultsUncheckedUpdateManyWithoutBattlesNestedInput
  }

  export type battlesCreateManyInput = {
    battle_id: string
    creator_nickname: string
    status?: $Enums.battles_status
    participant_count?: number
    created_at?: Date | string
    finished_at?: Date | string | null
    expires_at: Date | string
  }

  export type battlesUpdateManyMutationInput = {
    battle_id?: StringFieldUpdateOperationsInput | string
    creator_nickname?: StringFieldUpdateOperationsInput | string
    status?: Enumbattles_statusFieldUpdateOperationsInput | $Enums.battles_status
    participant_count?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    finished_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type battlesUncheckedUpdateManyInput = {
    battle_id?: StringFieldUpdateOperationsInput | string
    creator_nickname?: StringFieldUpdateOperationsInput | string
    status?: Enumbattles_statusFieldUpdateOperationsInput | $Enums.battles_status
    participant_count?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    finished_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type battle_participantsCreateInput = {
    id?: bigint | number
    nickname: string
    is_creator?: boolean
    joined_at?: Date | string
    battles: battlesCreateNestedOneWithoutBattle_participantsInput
  }

  export type battle_participantsUncheckedCreateInput = {
    id?: bigint | number
    battle_id: string
    nickname: string
    is_creator?: boolean
    joined_at?: Date | string
  }

  export type battle_participantsUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    nickname?: StringFieldUpdateOperationsInput | string
    is_creator?: BoolFieldUpdateOperationsInput | boolean
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
    battles?: battlesUpdateOneRequiredWithoutBattle_participantsNestedInput
  }

  export type battle_participantsUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    battle_id?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    is_creator?: BoolFieldUpdateOperationsInput | boolean
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type battle_participantsCreateManyInput = {
    id?: bigint | number
    battle_id: string
    nickname: string
    is_creator?: boolean
    joined_at?: Date | string
  }

  export type battle_participantsUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    nickname?: StringFieldUpdateOperationsInput | string
    is_creator?: BoolFieldUpdateOperationsInput | boolean
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type battle_participantsUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    battle_id?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    is_creator?: BoolFieldUpdateOperationsInput | boolean
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type battle_menusCreateInput = {
    id?: bigint | number
    menu_name: string
    boundary_angle: Decimal | DecimalJsLike | number | string
    menu_order: number
    battles: battlesCreateNestedOneWithoutBattle_menusInput
    menu: menuCreateNestedOneWithoutBattle_menusInput
  }

  export type battle_menusUncheckedCreateInput = {
    id?: bigint | number
    battle_id: string
    menu_id: bigint | number
    menu_name: string
    boundary_angle: Decimal | DecimalJsLike | number | string
    menu_order: number
  }

  export type battle_menusUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    menu_name?: StringFieldUpdateOperationsInput | string
    boundary_angle?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    menu_order?: IntFieldUpdateOperationsInput | number
    battles?: battlesUpdateOneRequiredWithoutBattle_menusNestedInput
    menu?: menuUpdateOneRequiredWithoutBattle_menusNestedInput
  }

  export type battle_menusUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    battle_id?: StringFieldUpdateOperationsInput | string
    menu_id?: BigIntFieldUpdateOperationsInput | bigint | number
    menu_name?: StringFieldUpdateOperationsInput | string
    boundary_angle?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    menu_order?: IntFieldUpdateOperationsInput | number
  }

  export type battle_menusCreateManyInput = {
    id?: bigint | number
    battle_id: string
    menu_id: bigint | number
    menu_name: string
    boundary_angle: Decimal | DecimalJsLike | number | string
    menu_order: number
  }

  export type battle_menusUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    menu_name?: StringFieldUpdateOperationsInput | string
    boundary_angle?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    menu_order?: IntFieldUpdateOperationsInput | number
  }

  export type battle_menusUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    battle_id?: StringFieldUpdateOperationsInput | string
    menu_id?: BigIntFieldUpdateOperationsInput | bigint | number
    menu_name?: StringFieldUpdateOperationsInput | string
    boundary_angle?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    menu_order?: IntFieldUpdateOperationsInput | number
  }

  export type spin_resultsCreateInput = {
    id?: bigint | number
    nickname: string
    stopped_angle: Decimal | DecimalJsLike | number | string
    closest_menu_name: string
    distance_to_boundary: Decimal | DecimalJsLike | number | string
    rank: number
    spun_at?: Date | string
    battles: battlesCreateNestedOneWithoutSpin_resultsInput
    menu: menuCreateNestedOneWithoutSpin_resultsInput
  }

  export type spin_resultsUncheckedCreateInput = {
    id?: bigint | number
    battle_id: string
    nickname: string
    stopped_angle: Decimal | DecimalJsLike | number | string
    closest_menu_id: bigint | number
    closest_menu_name: string
    distance_to_boundary: Decimal | DecimalJsLike | number | string
    rank: number
    spun_at?: Date | string
  }

  export type spin_resultsUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    nickname?: StringFieldUpdateOperationsInput | string
    stopped_angle?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    closest_menu_name?: StringFieldUpdateOperationsInput | string
    distance_to_boundary?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    rank?: IntFieldUpdateOperationsInput | number
    spun_at?: DateTimeFieldUpdateOperationsInput | Date | string
    battles?: battlesUpdateOneRequiredWithoutSpin_resultsNestedInput
    menu?: menuUpdateOneRequiredWithoutSpin_resultsNestedInput
  }

  export type spin_resultsUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    battle_id?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    stopped_angle?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    closest_menu_id?: BigIntFieldUpdateOperationsInput | bigint | number
    closest_menu_name?: StringFieldUpdateOperationsInput | string
    distance_to_boundary?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    rank?: IntFieldUpdateOperationsInput | number
    spun_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type spin_resultsCreateManyInput = {
    id?: bigint | number
    battle_id: string
    nickname: string
    stopped_angle: Decimal | DecimalJsLike | number | string
    closest_menu_id: bigint | number
    closest_menu_name: string
    distance_to_boundary: Decimal | DecimalJsLike | number | string
    rank: number
    spun_at?: Date | string
  }

  export type spin_resultsUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    nickname?: StringFieldUpdateOperationsInput | string
    stopped_angle?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    closest_menu_name?: StringFieldUpdateOperationsInput | string
    distance_to_boundary?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    rank?: IntFieldUpdateOperationsInput | number
    spun_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type spin_resultsUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    battle_id?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    stopped_angle?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    closest_menu_id?: BigIntFieldUpdateOperationsInput | bigint | number
    closest_menu_name?: StringFieldUpdateOperationsInput | string
    distance_to_boundary?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    rank?: IntFieldUpdateOperationsInput | number
    spun_at?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type Battle_menusListRelationFilter = {
    every?: battle_menusWhereInput
    some?: battle_menusWhereInput
    none?: battle_menusWhereInput
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

  export type Spin_resultsListRelationFilter = {
    every?: spin_resultsWhereInput
    some?: spin_resultsWhereInput
    none?: spin_resultsWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type battle_menusOrderByRelationAggregateInput = {
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

  export type spin_resultsOrderByRelationAggregateInput = {
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

  export type Enumbattles_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.battles_status | Enumbattles_statusFieldRefInput<$PrismaModel>
    in?: $Enums.battles_status[]
    notIn?: $Enums.battles_status[]
    not?: NestedEnumbattles_statusFilter<$PrismaModel> | $Enums.battles_status
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

  export type Battle_participantsListRelationFilter = {
    every?: battle_participantsWhereInput
    some?: battle_participantsWhereInput
    none?: battle_participantsWhereInput
  }

  export type battle_participantsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type battlesOrderByRelevanceInput = {
    fields: battlesOrderByRelevanceFieldEnum | battlesOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type battlesCountOrderByAggregateInput = {
    battle_id?: SortOrder
    creator_nickname?: SortOrder
    status?: SortOrder
    participant_count?: SortOrder
    created_at?: SortOrder
    finished_at?: SortOrder
    expires_at?: SortOrder
  }

  export type battlesAvgOrderByAggregateInput = {
    participant_count?: SortOrder
  }

  export type battlesMaxOrderByAggregateInput = {
    battle_id?: SortOrder
    creator_nickname?: SortOrder
    status?: SortOrder
    participant_count?: SortOrder
    created_at?: SortOrder
    finished_at?: SortOrder
    expires_at?: SortOrder
  }

  export type battlesMinOrderByAggregateInput = {
    battle_id?: SortOrder
    creator_nickname?: SortOrder
    status?: SortOrder
    participant_count?: SortOrder
    created_at?: SortOrder
    finished_at?: SortOrder
    expires_at?: SortOrder
  }

  export type battlesSumOrderByAggregateInput = {
    participant_count?: SortOrder
  }

  export type Enumbattles_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.battles_status | Enumbattles_statusFieldRefInput<$PrismaModel>
    in?: $Enums.battles_status[]
    notIn?: $Enums.battles_status[]
    not?: NestedEnumbattles_statusWithAggregatesFilter<$PrismaModel> | $Enums.battles_status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumbattles_statusFilter<$PrismaModel>
    _max?: NestedEnumbattles_statusFilter<$PrismaModel>
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type BattlesScalarRelationFilter = {
    is?: battlesWhereInput
    isNot?: battlesWhereInput
  }

  export type battle_participantsOrderByRelevanceInput = {
    fields: battle_participantsOrderByRelevanceFieldEnum | battle_participantsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type battle_participantsBattle_idNicknameCompoundUniqueInput = {
    battle_id: string
    nickname: string
  }

  export type battle_participantsCountOrderByAggregateInput = {
    id?: SortOrder
    battle_id?: SortOrder
    nickname?: SortOrder
    is_creator?: SortOrder
    joined_at?: SortOrder
  }

  export type battle_participantsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type battle_participantsMaxOrderByAggregateInput = {
    id?: SortOrder
    battle_id?: SortOrder
    nickname?: SortOrder
    is_creator?: SortOrder
    joined_at?: SortOrder
  }

  export type battle_participantsMinOrderByAggregateInput = {
    id?: SortOrder
    battle_id?: SortOrder
    nickname?: SortOrder
    is_creator?: SortOrder
    joined_at?: SortOrder
  }

  export type battle_participantsSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type battle_menusOrderByRelevanceInput = {
    fields: battle_menusOrderByRelevanceFieldEnum | battle_menusOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type battle_menusBattle_idMenu_idCompoundUniqueInput = {
    battle_id: string
    menu_id: bigint | number
  }

  export type battle_menusCountOrderByAggregateInput = {
    id?: SortOrder
    battle_id?: SortOrder
    menu_id?: SortOrder
    menu_name?: SortOrder
    boundary_angle?: SortOrder
    menu_order?: SortOrder
  }

  export type battle_menusAvgOrderByAggregateInput = {
    id?: SortOrder
    menu_id?: SortOrder
    boundary_angle?: SortOrder
    menu_order?: SortOrder
  }

  export type battle_menusMaxOrderByAggregateInput = {
    id?: SortOrder
    battle_id?: SortOrder
    menu_id?: SortOrder
    menu_name?: SortOrder
    boundary_angle?: SortOrder
    menu_order?: SortOrder
  }

  export type battle_menusMinOrderByAggregateInput = {
    id?: SortOrder
    battle_id?: SortOrder
    menu_id?: SortOrder
    menu_name?: SortOrder
    boundary_angle?: SortOrder
    menu_order?: SortOrder
  }

  export type battle_menusSumOrderByAggregateInput = {
    id?: SortOrder
    menu_id?: SortOrder
    boundary_angle?: SortOrder
    menu_order?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type spin_resultsOrderByRelevanceInput = {
    fields: spin_resultsOrderByRelevanceFieldEnum | spin_resultsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type spin_resultsBattle_idNicknameCompoundUniqueInput = {
    battle_id: string
    nickname: string
  }

  export type spin_resultsCountOrderByAggregateInput = {
    id?: SortOrder
    battle_id?: SortOrder
    nickname?: SortOrder
    stopped_angle?: SortOrder
    closest_menu_id?: SortOrder
    closest_menu_name?: SortOrder
    distance_to_boundary?: SortOrder
    rank?: SortOrder
    spun_at?: SortOrder
  }

  export type spin_resultsAvgOrderByAggregateInput = {
    id?: SortOrder
    stopped_angle?: SortOrder
    closest_menu_id?: SortOrder
    distance_to_boundary?: SortOrder
    rank?: SortOrder
  }

  export type spin_resultsMaxOrderByAggregateInput = {
    id?: SortOrder
    battle_id?: SortOrder
    nickname?: SortOrder
    stopped_angle?: SortOrder
    closest_menu_id?: SortOrder
    closest_menu_name?: SortOrder
    distance_to_boundary?: SortOrder
    rank?: SortOrder
    spun_at?: SortOrder
  }

  export type spin_resultsMinOrderByAggregateInput = {
    id?: SortOrder
    battle_id?: SortOrder
    nickname?: SortOrder
    stopped_angle?: SortOrder
    closest_menu_id?: SortOrder
    closest_menu_name?: SortOrder
    distance_to_boundary?: SortOrder
    rank?: SortOrder
    spun_at?: SortOrder
  }

  export type spin_resultsSumOrderByAggregateInput = {
    id?: SortOrder
    stopped_angle?: SortOrder
    closest_menu_id?: SortOrder
    distance_to_boundary?: SortOrder
    rank?: SortOrder
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

  export type battle_menusCreateNestedManyWithoutMenuInput = {
    create?: XOR<battle_menusCreateWithoutMenuInput, battle_menusUncheckedCreateWithoutMenuInput> | battle_menusCreateWithoutMenuInput[] | battle_menusUncheckedCreateWithoutMenuInput[]
    connectOrCreate?: battle_menusCreateOrConnectWithoutMenuInput | battle_menusCreateOrConnectWithoutMenuInput[]
    createMany?: battle_menusCreateManyMenuInputEnvelope
    connect?: battle_menusWhereUniqueInput | battle_menusWhereUniqueInput[]
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

  export type spin_resultsCreateNestedManyWithoutMenuInput = {
    create?: XOR<spin_resultsCreateWithoutMenuInput, spin_resultsUncheckedCreateWithoutMenuInput> | spin_resultsCreateWithoutMenuInput[] | spin_resultsUncheckedCreateWithoutMenuInput[]
    connectOrCreate?: spin_resultsCreateOrConnectWithoutMenuInput | spin_resultsCreateOrConnectWithoutMenuInput[]
    createMany?: spin_resultsCreateManyMenuInputEnvelope
    connect?: spin_resultsWhereUniqueInput | spin_resultsWhereUniqueInput[]
  }

  export type battle_menusUncheckedCreateNestedManyWithoutMenuInput = {
    create?: XOR<battle_menusCreateWithoutMenuInput, battle_menusUncheckedCreateWithoutMenuInput> | battle_menusCreateWithoutMenuInput[] | battle_menusUncheckedCreateWithoutMenuInput[]
    connectOrCreate?: battle_menusCreateOrConnectWithoutMenuInput | battle_menusCreateOrConnectWithoutMenuInput[]
    createMany?: battle_menusCreateManyMenuInputEnvelope
    connect?: battle_menusWhereUniqueInput | battle_menusWhereUniqueInput[]
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

  export type spin_resultsUncheckedCreateNestedManyWithoutMenuInput = {
    create?: XOR<spin_resultsCreateWithoutMenuInput, spin_resultsUncheckedCreateWithoutMenuInput> | spin_resultsCreateWithoutMenuInput[] | spin_resultsUncheckedCreateWithoutMenuInput[]
    connectOrCreate?: spin_resultsCreateOrConnectWithoutMenuInput | spin_resultsCreateOrConnectWithoutMenuInput[]
    createMany?: spin_resultsCreateManyMenuInputEnvelope
    connect?: spin_resultsWhereUniqueInput | spin_resultsWhereUniqueInput[]
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

  export type battle_menusUpdateManyWithoutMenuNestedInput = {
    create?: XOR<battle_menusCreateWithoutMenuInput, battle_menusUncheckedCreateWithoutMenuInput> | battle_menusCreateWithoutMenuInput[] | battle_menusUncheckedCreateWithoutMenuInput[]
    connectOrCreate?: battle_menusCreateOrConnectWithoutMenuInput | battle_menusCreateOrConnectWithoutMenuInput[]
    upsert?: battle_menusUpsertWithWhereUniqueWithoutMenuInput | battle_menusUpsertWithWhereUniqueWithoutMenuInput[]
    createMany?: battle_menusCreateManyMenuInputEnvelope
    set?: battle_menusWhereUniqueInput | battle_menusWhereUniqueInput[]
    disconnect?: battle_menusWhereUniqueInput | battle_menusWhereUniqueInput[]
    delete?: battle_menusWhereUniqueInput | battle_menusWhereUniqueInput[]
    connect?: battle_menusWhereUniqueInput | battle_menusWhereUniqueInput[]
    update?: battle_menusUpdateWithWhereUniqueWithoutMenuInput | battle_menusUpdateWithWhereUniqueWithoutMenuInput[]
    updateMany?: battle_menusUpdateManyWithWhereWithoutMenuInput | battle_menusUpdateManyWithWhereWithoutMenuInput[]
    deleteMany?: battle_menusScalarWhereInput | battle_menusScalarWhereInput[]
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

  export type spin_resultsUpdateManyWithoutMenuNestedInput = {
    create?: XOR<spin_resultsCreateWithoutMenuInput, spin_resultsUncheckedCreateWithoutMenuInput> | spin_resultsCreateWithoutMenuInput[] | spin_resultsUncheckedCreateWithoutMenuInput[]
    connectOrCreate?: spin_resultsCreateOrConnectWithoutMenuInput | spin_resultsCreateOrConnectWithoutMenuInput[]
    upsert?: spin_resultsUpsertWithWhereUniqueWithoutMenuInput | spin_resultsUpsertWithWhereUniqueWithoutMenuInput[]
    createMany?: spin_resultsCreateManyMenuInputEnvelope
    set?: spin_resultsWhereUniqueInput | spin_resultsWhereUniqueInput[]
    disconnect?: spin_resultsWhereUniqueInput | spin_resultsWhereUniqueInput[]
    delete?: spin_resultsWhereUniqueInput | spin_resultsWhereUniqueInput[]
    connect?: spin_resultsWhereUniqueInput | spin_resultsWhereUniqueInput[]
    update?: spin_resultsUpdateWithWhereUniqueWithoutMenuInput | spin_resultsUpdateWithWhereUniqueWithoutMenuInput[]
    updateMany?: spin_resultsUpdateManyWithWhereWithoutMenuInput | spin_resultsUpdateManyWithWhereWithoutMenuInput[]
    deleteMany?: spin_resultsScalarWhereInput | spin_resultsScalarWhereInput[]
  }

  export type battle_menusUncheckedUpdateManyWithoutMenuNestedInput = {
    create?: XOR<battle_menusCreateWithoutMenuInput, battle_menusUncheckedCreateWithoutMenuInput> | battle_menusCreateWithoutMenuInput[] | battle_menusUncheckedCreateWithoutMenuInput[]
    connectOrCreate?: battle_menusCreateOrConnectWithoutMenuInput | battle_menusCreateOrConnectWithoutMenuInput[]
    upsert?: battle_menusUpsertWithWhereUniqueWithoutMenuInput | battle_menusUpsertWithWhereUniqueWithoutMenuInput[]
    createMany?: battle_menusCreateManyMenuInputEnvelope
    set?: battle_menusWhereUniqueInput | battle_menusWhereUniqueInput[]
    disconnect?: battle_menusWhereUniqueInput | battle_menusWhereUniqueInput[]
    delete?: battle_menusWhereUniqueInput | battle_menusWhereUniqueInput[]
    connect?: battle_menusWhereUniqueInput | battle_menusWhereUniqueInput[]
    update?: battle_menusUpdateWithWhereUniqueWithoutMenuInput | battle_menusUpdateWithWhereUniqueWithoutMenuInput[]
    updateMany?: battle_menusUpdateManyWithWhereWithoutMenuInput | battle_menusUpdateManyWithWhereWithoutMenuInput[]
    deleteMany?: battle_menusScalarWhereInput | battle_menusScalarWhereInput[]
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

  export type spin_resultsUncheckedUpdateManyWithoutMenuNestedInput = {
    create?: XOR<spin_resultsCreateWithoutMenuInput, spin_resultsUncheckedCreateWithoutMenuInput> | spin_resultsCreateWithoutMenuInput[] | spin_resultsUncheckedCreateWithoutMenuInput[]
    connectOrCreate?: spin_resultsCreateOrConnectWithoutMenuInput | spin_resultsCreateOrConnectWithoutMenuInput[]
    upsert?: spin_resultsUpsertWithWhereUniqueWithoutMenuInput | spin_resultsUpsertWithWhereUniqueWithoutMenuInput[]
    createMany?: spin_resultsCreateManyMenuInputEnvelope
    set?: spin_resultsWhereUniqueInput | spin_resultsWhereUniqueInput[]
    disconnect?: spin_resultsWhereUniqueInput | spin_resultsWhereUniqueInput[]
    delete?: spin_resultsWhereUniqueInput | spin_resultsWhereUniqueInput[]
    connect?: spin_resultsWhereUniqueInput | spin_resultsWhereUniqueInput[]
    update?: spin_resultsUpdateWithWhereUniqueWithoutMenuInput | spin_resultsUpdateWithWhereUniqueWithoutMenuInput[]
    updateMany?: spin_resultsUpdateManyWithWhereWithoutMenuInput | spin_resultsUpdateManyWithWhereWithoutMenuInput[]
    deleteMany?: spin_resultsScalarWhereInput | spin_resultsScalarWhereInput[]
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

  export type menu_alleryCreateNestedManyWithoutAllergyInput = {
    create?: XOR<menu_alleryCreateWithoutAllergyInput, menu_alleryUncheckedCreateWithoutAllergyInput> | menu_alleryCreateWithoutAllergyInput[] | menu_alleryUncheckedCreateWithoutAllergyInput[]
    connectOrCreate?: menu_alleryCreateOrConnectWithoutAllergyInput | menu_alleryCreateOrConnectWithoutAllergyInput[]
    createMany?: menu_alleryCreateManyAllergyInputEnvelope
    connect?: menu_alleryWhereUniqueInput | menu_alleryWhereUniqueInput[]
  }

  export type menu_alleryUncheckedCreateNestedManyWithoutAllergyInput = {
    create?: XOR<menu_alleryCreateWithoutAllergyInput, menu_alleryUncheckedCreateWithoutAllergyInput> | menu_alleryCreateWithoutAllergyInput[] | menu_alleryUncheckedCreateWithoutAllergyInput[]
    connectOrCreate?: menu_alleryCreateOrConnectWithoutAllergyInput | menu_alleryCreateOrConnectWithoutAllergyInput[]
    createMany?: menu_alleryCreateManyAllergyInputEnvelope
    connect?: menu_alleryWhereUniqueInput | menu_alleryWhereUniqueInput[]
  }

  export type menu_alleryUpdateManyWithoutAllergyNestedInput = {
    create?: XOR<menu_alleryCreateWithoutAllergyInput, menu_alleryUncheckedCreateWithoutAllergyInput> | menu_alleryCreateWithoutAllergyInput[] | menu_alleryUncheckedCreateWithoutAllergyInput[]
    connectOrCreate?: menu_alleryCreateOrConnectWithoutAllergyInput | menu_alleryCreateOrConnectWithoutAllergyInput[]
    upsert?: menu_alleryUpsertWithWhereUniqueWithoutAllergyInput | menu_alleryUpsertWithWhereUniqueWithoutAllergyInput[]
    createMany?: menu_alleryCreateManyAllergyInputEnvelope
    set?: menu_alleryWhereUniqueInput | menu_alleryWhereUniqueInput[]
    disconnect?: menu_alleryWhereUniqueInput | menu_alleryWhereUniqueInput[]
    delete?: menu_alleryWhereUniqueInput | menu_alleryWhereUniqueInput[]
    connect?: menu_alleryWhereUniqueInput | menu_alleryWhereUniqueInput[]
    update?: menu_alleryUpdateWithWhereUniqueWithoutAllergyInput | menu_alleryUpdateWithWhereUniqueWithoutAllergyInput[]
    updateMany?: menu_alleryUpdateManyWithWhereWithoutAllergyInput | menu_alleryUpdateManyWithWhereWithoutAllergyInput[]
    deleteMany?: menu_alleryScalarWhereInput | menu_alleryScalarWhereInput[]
  }

  export type menu_alleryUncheckedUpdateManyWithoutAllergyNestedInput = {
    create?: XOR<menu_alleryCreateWithoutAllergyInput, menu_alleryUncheckedCreateWithoutAllergyInput> | menu_alleryCreateWithoutAllergyInput[] | menu_alleryUncheckedCreateWithoutAllergyInput[]
    connectOrCreate?: menu_alleryCreateOrConnectWithoutAllergyInput | menu_alleryCreateOrConnectWithoutAllergyInput[]
    upsert?: menu_alleryUpsertWithWhereUniqueWithoutAllergyInput | menu_alleryUpsertWithWhereUniqueWithoutAllergyInput[]
    createMany?: menu_alleryCreateManyAllergyInputEnvelope
    set?: menu_alleryWhereUniqueInput | menu_alleryWhereUniqueInput[]
    disconnect?: menu_alleryWhereUniqueInput | menu_alleryWhereUniqueInput[]
    delete?: menu_alleryWhereUniqueInput | menu_alleryWhereUniqueInput[]
    connect?: menu_alleryWhereUniqueInput | menu_alleryWhereUniqueInput[]
    update?: menu_alleryUpdateWithWhereUniqueWithoutAllergyInput | menu_alleryUpdateWithWhereUniqueWithoutAllergyInput[]
    updateMany?: menu_alleryUpdateManyWithWhereWithoutAllergyInput | menu_alleryUpdateManyWithWhereWithoutAllergyInput[]
    deleteMany?: menu_alleryScalarWhereInput | menu_alleryScalarWhereInput[]
  }

  export type battle_participantsCreateNestedManyWithoutBattlesInput = {
    create?: XOR<battle_participantsCreateWithoutBattlesInput, battle_participantsUncheckedCreateWithoutBattlesInput> | battle_participantsCreateWithoutBattlesInput[] | battle_participantsUncheckedCreateWithoutBattlesInput[]
    connectOrCreate?: battle_participantsCreateOrConnectWithoutBattlesInput | battle_participantsCreateOrConnectWithoutBattlesInput[]
    createMany?: battle_participantsCreateManyBattlesInputEnvelope
    connect?: battle_participantsWhereUniqueInput | battle_participantsWhereUniqueInput[]
  }

  export type battle_menusCreateNestedManyWithoutBattlesInput = {
    create?: XOR<battle_menusCreateWithoutBattlesInput, battle_menusUncheckedCreateWithoutBattlesInput> | battle_menusCreateWithoutBattlesInput[] | battle_menusUncheckedCreateWithoutBattlesInput[]
    connectOrCreate?: battle_menusCreateOrConnectWithoutBattlesInput | battle_menusCreateOrConnectWithoutBattlesInput[]
    createMany?: battle_menusCreateManyBattlesInputEnvelope
    connect?: battle_menusWhereUniqueInput | battle_menusWhereUniqueInput[]
  }

  export type spin_resultsCreateNestedManyWithoutBattlesInput = {
    create?: XOR<spin_resultsCreateWithoutBattlesInput, spin_resultsUncheckedCreateWithoutBattlesInput> | spin_resultsCreateWithoutBattlesInput[] | spin_resultsUncheckedCreateWithoutBattlesInput[]
    connectOrCreate?: spin_resultsCreateOrConnectWithoutBattlesInput | spin_resultsCreateOrConnectWithoutBattlesInput[]
    createMany?: spin_resultsCreateManyBattlesInputEnvelope
    connect?: spin_resultsWhereUniqueInput | spin_resultsWhereUniqueInput[]
  }

  export type battle_participantsUncheckedCreateNestedManyWithoutBattlesInput = {
    create?: XOR<battle_participantsCreateWithoutBattlesInput, battle_participantsUncheckedCreateWithoutBattlesInput> | battle_participantsCreateWithoutBattlesInput[] | battle_participantsUncheckedCreateWithoutBattlesInput[]
    connectOrCreate?: battle_participantsCreateOrConnectWithoutBattlesInput | battle_participantsCreateOrConnectWithoutBattlesInput[]
    createMany?: battle_participantsCreateManyBattlesInputEnvelope
    connect?: battle_participantsWhereUniqueInput | battle_participantsWhereUniqueInput[]
  }

  export type battle_menusUncheckedCreateNestedManyWithoutBattlesInput = {
    create?: XOR<battle_menusCreateWithoutBattlesInput, battle_menusUncheckedCreateWithoutBattlesInput> | battle_menusCreateWithoutBattlesInput[] | battle_menusUncheckedCreateWithoutBattlesInput[]
    connectOrCreate?: battle_menusCreateOrConnectWithoutBattlesInput | battle_menusCreateOrConnectWithoutBattlesInput[]
    createMany?: battle_menusCreateManyBattlesInputEnvelope
    connect?: battle_menusWhereUniqueInput | battle_menusWhereUniqueInput[]
  }

  export type spin_resultsUncheckedCreateNestedManyWithoutBattlesInput = {
    create?: XOR<spin_resultsCreateWithoutBattlesInput, spin_resultsUncheckedCreateWithoutBattlesInput> | spin_resultsCreateWithoutBattlesInput[] | spin_resultsUncheckedCreateWithoutBattlesInput[]
    connectOrCreate?: spin_resultsCreateOrConnectWithoutBattlesInput | spin_resultsCreateOrConnectWithoutBattlesInput[]
    createMany?: spin_resultsCreateManyBattlesInputEnvelope
    connect?: spin_resultsWhereUniqueInput | spin_resultsWhereUniqueInput[]
  }

  export type Enumbattles_statusFieldUpdateOperationsInput = {
    set?: $Enums.battles_status
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type battle_participantsUpdateManyWithoutBattlesNestedInput = {
    create?: XOR<battle_participantsCreateWithoutBattlesInput, battle_participantsUncheckedCreateWithoutBattlesInput> | battle_participantsCreateWithoutBattlesInput[] | battle_participantsUncheckedCreateWithoutBattlesInput[]
    connectOrCreate?: battle_participantsCreateOrConnectWithoutBattlesInput | battle_participantsCreateOrConnectWithoutBattlesInput[]
    upsert?: battle_participantsUpsertWithWhereUniqueWithoutBattlesInput | battle_participantsUpsertWithWhereUniqueWithoutBattlesInput[]
    createMany?: battle_participantsCreateManyBattlesInputEnvelope
    set?: battle_participantsWhereUniqueInput | battle_participantsWhereUniqueInput[]
    disconnect?: battle_participantsWhereUniqueInput | battle_participantsWhereUniqueInput[]
    delete?: battle_participantsWhereUniqueInput | battle_participantsWhereUniqueInput[]
    connect?: battle_participantsWhereUniqueInput | battle_participantsWhereUniqueInput[]
    update?: battle_participantsUpdateWithWhereUniqueWithoutBattlesInput | battle_participantsUpdateWithWhereUniqueWithoutBattlesInput[]
    updateMany?: battle_participantsUpdateManyWithWhereWithoutBattlesInput | battle_participantsUpdateManyWithWhereWithoutBattlesInput[]
    deleteMany?: battle_participantsScalarWhereInput | battle_participantsScalarWhereInput[]
  }

  export type battle_menusUpdateManyWithoutBattlesNestedInput = {
    create?: XOR<battle_menusCreateWithoutBattlesInput, battle_menusUncheckedCreateWithoutBattlesInput> | battle_menusCreateWithoutBattlesInput[] | battle_menusUncheckedCreateWithoutBattlesInput[]
    connectOrCreate?: battle_menusCreateOrConnectWithoutBattlesInput | battle_menusCreateOrConnectWithoutBattlesInput[]
    upsert?: battle_menusUpsertWithWhereUniqueWithoutBattlesInput | battle_menusUpsertWithWhereUniqueWithoutBattlesInput[]
    createMany?: battle_menusCreateManyBattlesInputEnvelope
    set?: battle_menusWhereUniqueInput | battle_menusWhereUniqueInput[]
    disconnect?: battle_menusWhereUniqueInput | battle_menusWhereUniqueInput[]
    delete?: battle_menusWhereUniqueInput | battle_menusWhereUniqueInput[]
    connect?: battle_menusWhereUniqueInput | battle_menusWhereUniqueInput[]
    update?: battle_menusUpdateWithWhereUniqueWithoutBattlesInput | battle_menusUpdateWithWhereUniqueWithoutBattlesInput[]
    updateMany?: battle_menusUpdateManyWithWhereWithoutBattlesInput | battle_menusUpdateManyWithWhereWithoutBattlesInput[]
    deleteMany?: battle_menusScalarWhereInput | battle_menusScalarWhereInput[]
  }

  export type spin_resultsUpdateManyWithoutBattlesNestedInput = {
    create?: XOR<spin_resultsCreateWithoutBattlesInput, spin_resultsUncheckedCreateWithoutBattlesInput> | spin_resultsCreateWithoutBattlesInput[] | spin_resultsUncheckedCreateWithoutBattlesInput[]
    connectOrCreate?: spin_resultsCreateOrConnectWithoutBattlesInput | spin_resultsCreateOrConnectWithoutBattlesInput[]
    upsert?: spin_resultsUpsertWithWhereUniqueWithoutBattlesInput | spin_resultsUpsertWithWhereUniqueWithoutBattlesInput[]
    createMany?: spin_resultsCreateManyBattlesInputEnvelope
    set?: spin_resultsWhereUniqueInput | spin_resultsWhereUniqueInput[]
    disconnect?: spin_resultsWhereUniqueInput | spin_resultsWhereUniqueInput[]
    delete?: spin_resultsWhereUniqueInput | spin_resultsWhereUniqueInput[]
    connect?: spin_resultsWhereUniqueInput | spin_resultsWhereUniqueInput[]
    update?: spin_resultsUpdateWithWhereUniqueWithoutBattlesInput | spin_resultsUpdateWithWhereUniqueWithoutBattlesInput[]
    updateMany?: spin_resultsUpdateManyWithWhereWithoutBattlesInput | spin_resultsUpdateManyWithWhereWithoutBattlesInput[]
    deleteMany?: spin_resultsScalarWhereInput | spin_resultsScalarWhereInput[]
  }

  export type battle_participantsUncheckedUpdateManyWithoutBattlesNestedInput = {
    create?: XOR<battle_participantsCreateWithoutBattlesInput, battle_participantsUncheckedCreateWithoutBattlesInput> | battle_participantsCreateWithoutBattlesInput[] | battle_participantsUncheckedCreateWithoutBattlesInput[]
    connectOrCreate?: battle_participantsCreateOrConnectWithoutBattlesInput | battle_participantsCreateOrConnectWithoutBattlesInput[]
    upsert?: battle_participantsUpsertWithWhereUniqueWithoutBattlesInput | battle_participantsUpsertWithWhereUniqueWithoutBattlesInput[]
    createMany?: battle_participantsCreateManyBattlesInputEnvelope
    set?: battle_participantsWhereUniqueInput | battle_participantsWhereUniqueInput[]
    disconnect?: battle_participantsWhereUniqueInput | battle_participantsWhereUniqueInput[]
    delete?: battle_participantsWhereUniqueInput | battle_participantsWhereUniqueInput[]
    connect?: battle_participantsWhereUniqueInput | battle_participantsWhereUniqueInput[]
    update?: battle_participantsUpdateWithWhereUniqueWithoutBattlesInput | battle_participantsUpdateWithWhereUniqueWithoutBattlesInput[]
    updateMany?: battle_participantsUpdateManyWithWhereWithoutBattlesInput | battle_participantsUpdateManyWithWhereWithoutBattlesInput[]
    deleteMany?: battle_participantsScalarWhereInput | battle_participantsScalarWhereInput[]
  }

  export type battle_menusUncheckedUpdateManyWithoutBattlesNestedInput = {
    create?: XOR<battle_menusCreateWithoutBattlesInput, battle_menusUncheckedCreateWithoutBattlesInput> | battle_menusCreateWithoutBattlesInput[] | battle_menusUncheckedCreateWithoutBattlesInput[]
    connectOrCreate?: battle_menusCreateOrConnectWithoutBattlesInput | battle_menusCreateOrConnectWithoutBattlesInput[]
    upsert?: battle_menusUpsertWithWhereUniqueWithoutBattlesInput | battle_menusUpsertWithWhereUniqueWithoutBattlesInput[]
    createMany?: battle_menusCreateManyBattlesInputEnvelope
    set?: battle_menusWhereUniqueInput | battle_menusWhereUniqueInput[]
    disconnect?: battle_menusWhereUniqueInput | battle_menusWhereUniqueInput[]
    delete?: battle_menusWhereUniqueInput | battle_menusWhereUniqueInput[]
    connect?: battle_menusWhereUniqueInput | battle_menusWhereUniqueInput[]
    update?: battle_menusUpdateWithWhereUniqueWithoutBattlesInput | battle_menusUpdateWithWhereUniqueWithoutBattlesInput[]
    updateMany?: battle_menusUpdateManyWithWhereWithoutBattlesInput | battle_menusUpdateManyWithWhereWithoutBattlesInput[]
    deleteMany?: battle_menusScalarWhereInput | battle_menusScalarWhereInput[]
  }

  export type spin_resultsUncheckedUpdateManyWithoutBattlesNestedInput = {
    create?: XOR<spin_resultsCreateWithoutBattlesInput, spin_resultsUncheckedCreateWithoutBattlesInput> | spin_resultsCreateWithoutBattlesInput[] | spin_resultsUncheckedCreateWithoutBattlesInput[]
    connectOrCreate?: spin_resultsCreateOrConnectWithoutBattlesInput | spin_resultsCreateOrConnectWithoutBattlesInput[]
    upsert?: spin_resultsUpsertWithWhereUniqueWithoutBattlesInput | spin_resultsUpsertWithWhereUniqueWithoutBattlesInput[]
    createMany?: spin_resultsCreateManyBattlesInputEnvelope
    set?: spin_resultsWhereUniqueInput | spin_resultsWhereUniqueInput[]
    disconnect?: spin_resultsWhereUniqueInput | spin_resultsWhereUniqueInput[]
    delete?: spin_resultsWhereUniqueInput | spin_resultsWhereUniqueInput[]
    connect?: spin_resultsWhereUniqueInput | spin_resultsWhereUniqueInput[]
    update?: spin_resultsUpdateWithWhereUniqueWithoutBattlesInput | spin_resultsUpdateWithWhereUniqueWithoutBattlesInput[]
    updateMany?: spin_resultsUpdateManyWithWhereWithoutBattlesInput | spin_resultsUpdateManyWithWhereWithoutBattlesInput[]
    deleteMany?: spin_resultsScalarWhereInput | spin_resultsScalarWhereInput[]
  }

  export type battlesCreateNestedOneWithoutBattle_participantsInput = {
    create?: XOR<battlesCreateWithoutBattle_participantsInput, battlesUncheckedCreateWithoutBattle_participantsInput>
    connectOrCreate?: battlesCreateOrConnectWithoutBattle_participantsInput
    connect?: battlesWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type battlesUpdateOneRequiredWithoutBattle_participantsNestedInput = {
    create?: XOR<battlesCreateWithoutBattle_participantsInput, battlesUncheckedCreateWithoutBattle_participantsInput>
    connectOrCreate?: battlesCreateOrConnectWithoutBattle_participantsInput
    upsert?: battlesUpsertWithoutBattle_participantsInput
    connect?: battlesWhereUniqueInput
    update?: XOR<XOR<battlesUpdateToOneWithWhereWithoutBattle_participantsInput, battlesUpdateWithoutBattle_participantsInput>, battlesUncheckedUpdateWithoutBattle_participantsInput>
  }

  export type battlesCreateNestedOneWithoutBattle_menusInput = {
    create?: XOR<battlesCreateWithoutBattle_menusInput, battlesUncheckedCreateWithoutBattle_menusInput>
    connectOrCreate?: battlesCreateOrConnectWithoutBattle_menusInput
    connect?: battlesWhereUniqueInput
  }

  export type menuCreateNestedOneWithoutBattle_menusInput = {
    create?: XOR<menuCreateWithoutBattle_menusInput, menuUncheckedCreateWithoutBattle_menusInput>
    connectOrCreate?: menuCreateOrConnectWithoutBattle_menusInput
    connect?: menuWhereUniqueInput
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type battlesUpdateOneRequiredWithoutBattle_menusNestedInput = {
    create?: XOR<battlesCreateWithoutBattle_menusInput, battlesUncheckedCreateWithoutBattle_menusInput>
    connectOrCreate?: battlesCreateOrConnectWithoutBattle_menusInput
    upsert?: battlesUpsertWithoutBattle_menusInput
    connect?: battlesWhereUniqueInput
    update?: XOR<XOR<battlesUpdateToOneWithWhereWithoutBattle_menusInput, battlesUpdateWithoutBattle_menusInput>, battlesUncheckedUpdateWithoutBattle_menusInput>
  }

  export type menuUpdateOneRequiredWithoutBattle_menusNestedInput = {
    create?: XOR<menuCreateWithoutBattle_menusInput, menuUncheckedCreateWithoutBattle_menusInput>
    connectOrCreate?: menuCreateOrConnectWithoutBattle_menusInput
    upsert?: menuUpsertWithoutBattle_menusInput
    connect?: menuWhereUniqueInput
    update?: XOR<XOR<menuUpdateToOneWithWhereWithoutBattle_menusInput, menuUpdateWithoutBattle_menusInput>, menuUncheckedUpdateWithoutBattle_menusInput>
  }

  export type battlesCreateNestedOneWithoutSpin_resultsInput = {
    create?: XOR<battlesCreateWithoutSpin_resultsInput, battlesUncheckedCreateWithoutSpin_resultsInput>
    connectOrCreate?: battlesCreateOrConnectWithoutSpin_resultsInput
    connect?: battlesWhereUniqueInput
  }

  export type menuCreateNestedOneWithoutSpin_resultsInput = {
    create?: XOR<menuCreateWithoutSpin_resultsInput, menuUncheckedCreateWithoutSpin_resultsInput>
    connectOrCreate?: menuCreateOrConnectWithoutSpin_resultsInput
    connect?: menuWhereUniqueInput
  }

  export type battlesUpdateOneRequiredWithoutSpin_resultsNestedInput = {
    create?: XOR<battlesCreateWithoutSpin_resultsInput, battlesUncheckedCreateWithoutSpin_resultsInput>
    connectOrCreate?: battlesCreateOrConnectWithoutSpin_resultsInput
    upsert?: battlesUpsertWithoutSpin_resultsInput
    connect?: battlesWhereUniqueInput
    update?: XOR<XOR<battlesUpdateToOneWithWhereWithoutSpin_resultsInput, battlesUpdateWithoutSpin_resultsInput>, battlesUncheckedUpdateWithoutSpin_resultsInput>
  }

  export type menuUpdateOneRequiredWithoutSpin_resultsNestedInput = {
    create?: XOR<menuCreateWithoutSpin_resultsInput, menuUncheckedCreateWithoutSpin_resultsInput>
    connectOrCreate?: menuCreateOrConnectWithoutSpin_resultsInput
    upsert?: menuUpsertWithoutSpin_resultsInput
    connect?: menuWhereUniqueInput
    update?: XOR<XOR<menuUpdateToOneWithWhereWithoutSpin_resultsInput, menuUpdateWithoutSpin_resultsInput>, menuUncheckedUpdateWithoutSpin_resultsInput>
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

  export type NestedEnumbattles_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.battles_status | Enumbattles_statusFieldRefInput<$PrismaModel>
    in?: $Enums.battles_status[]
    notIn?: $Enums.battles_status[]
    not?: NestedEnumbattles_statusFilter<$PrismaModel> | $Enums.battles_status
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

  export type NestedEnumbattles_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.battles_status | Enumbattles_statusFieldRefInput<$PrismaModel>
    in?: $Enums.battles_status[]
    notIn?: $Enums.battles_status[]
    not?: NestedEnumbattles_statusWithAggregatesFilter<$PrismaModel> | $Enums.battles_status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumbattles_statusFilter<$PrismaModel>
    _max?: NestedEnumbattles_statusFilter<$PrismaModel>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type battle_menusCreateWithoutMenuInput = {
    id?: bigint | number
    menu_name: string
    boundary_angle: Decimal | DecimalJsLike | number | string
    menu_order: number
    battles: battlesCreateNestedOneWithoutBattle_menusInput
  }

  export type battle_menusUncheckedCreateWithoutMenuInput = {
    id?: bigint | number
    battle_id: string
    menu_name: string
    boundary_angle: Decimal | DecimalJsLike | number | string
    menu_order: number
  }

  export type battle_menusCreateOrConnectWithoutMenuInput = {
    where: battle_menusWhereUniqueInput
    create: XOR<battle_menusCreateWithoutMenuInput, battle_menusUncheckedCreateWithoutMenuInput>
  }

  export type battle_menusCreateManyMenuInputEnvelope = {
    data: battle_menusCreateManyMenuInput | battle_menusCreateManyMenuInput[]
    skipDuplicates?: boolean
  }

  export type menu_alleryCreateWithoutMenuInput = {
    allergy: allergyCreateNestedOneWithoutMenu_alleryInput
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

  export type spin_resultsCreateWithoutMenuInput = {
    id?: bigint | number
    nickname: string
    stopped_angle: Decimal | DecimalJsLike | number | string
    closest_menu_name: string
    distance_to_boundary: Decimal | DecimalJsLike | number | string
    rank: number
    spun_at?: Date | string
    battles: battlesCreateNestedOneWithoutSpin_resultsInput
  }

  export type spin_resultsUncheckedCreateWithoutMenuInput = {
    id?: bigint | number
    battle_id: string
    nickname: string
    stopped_angle: Decimal | DecimalJsLike | number | string
    closest_menu_name: string
    distance_to_boundary: Decimal | DecimalJsLike | number | string
    rank: number
    spun_at?: Date | string
  }

  export type spin_resultsCreateOrConnectWithoutMenuInput = {
    where: spin_resultsWhereUniqueInput
    create: XOR<spin_resultsCreateWithoutMenuInput, spin_resultsUncheckedCreateWithoutMenuInput>
  }

  export type spin_resultsCreateManyMenuInputEnvelope = {
    data: spin_resultsCreateManyMenuInput | spin_resultsCreateManyMenuInput[]
    skipDuplicates?: boolean
  }

  export type battle_menusUpsertWithWhereUniqueWithoutMenuInput = {
    where: battle_menusWhereUniqueInput
    update: XOR<battle_menusUpdateWithoutMenuInput, battle_menusUncheckedUpdateWithoutMenuInput>
    create: XOR<battle_menusCreateWithoutMenuInput, battle_menusUncheckedCreateWithoutMenuInput>
  }

  export type battle_menusUpdateWithWhereUniqueWithoutMenuInput = {
    where: battle_menusWhereUniqueInput
    data: XOR<battle_menusUpdateWithoutMenuInput, battle_menusUncheckedUpdateWithoutMenuInput>
  }

  export type battle_menusUpdateManyWithWhereWithoutMenuInput = {
    where: battle_menusScalarWhereInput
    data: XOR<battle_menusUpdateManyMutationInput, battle_menusUncheckedUpdateManyWithoutMenuInput>
  }

  export type battle_menusScalarWhereInput = {
    AND?: battle_menusScalarWhereInput | battle_menusScalarWhereInput[]
    OR?: battle_menusScalarWhereInput[]
    NOT?: battle_menusScalarWhereInput | battle_menusScalarWhereInput[]
    id?: BigIntFilter<"battle_menus"> | bigint | number
    battle_id?: StringFilter<"battle_menus"> | string
    menu_id?: BigIntFilter<"battle_menus"> | bigint | number
    menu_name?: StringFilter<"battle_menus"> | string
    boundary_angle?: DecimalFilter<"battle_menus"> | Decimal | DecimalJsLike | number | string
    menu_order?: IntFilter<"battle_menus"> | number
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

  export type spin_resultsUpsertWithWhereUniqueWithoutMenuInput = {
    where: spin_resultsWhereUniqueInput
    update: XOR<spin_resultsUpdateWithoutMenuInput, spin_resultsUncheckedUpdateWithoutMenuInput>
    create: XOR<spin_resultsCreateWithoutMenuInput, spin_resultsUncheckedCreateWithoutMenuInput>
  }

  export type spin_resultsUpdateWithWhereUniqueWithoutMenuInput = {
    where: spin_resultsWhereUniqueInput
    data: XOR<spin_resultsUpdateWithoutMenuInput, spin_resultsUncheckedUpdateWithoutMenuInput>
  }

  export type spin_resultsUpdateManyWithWhereWithoutMenuInput = {
    where: spin_resultsScalarWhereInput
    data: XOR<spin_resultsUpdateManyMutationInput, spin_resultsUncheckedUpdateManyWithoutMenuInput>
  }

  export type spin_resultsScalarWhereInput = {
    AND?: spin_resultsScalarWhereInput | spin_resultsScalarWhereInput[]
    OR?: spin_resultsScalarWhereInput[]
    NOT?: spin_resultsScalarWhereInput | spin_resultsScalarWhereInput[]
    id?: BigIntFilter<"spin_results"> | bigint | number
    battle_id?: StringFilter<"spin_results"> | string
    nickname?: StringFilter<"spin_results"> | string
    stopped_angle?: DecimalFilter<"spin_results"> | Decimal | DecimalJsLike | number | string
    closest_menu_id?: BigIntFilter<"spin_results"> | bigint | number
    closest_menu_name?: StringFilter<"spin_results"> | string
    distance_to_boundary?: DecimalFilter<"spin_results"> | Decimal | DecimalJsLike | number | string
    rank?: IntFilter<"spin_results"> | number
    spun_at?: DateTimeFilter<"spin_results"> | Date | string
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
    battle_menus?: battle_menusCreateNestedManyWithoutMenuInput
    menu_allery?: menu_alleryCreateNestedManyWithoutMenuInput
    menu_tag?: menu_tagCreateNestedManyWithoutMenuInput
    menu_vitamin?: menu_vitaminCreateNestedManyWithoutMenuInput
    spin_results?: spin_resultsCreateNestedManyWithoutMenuInput
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
    battle_menus?: battle_menusUncheckedCreateNestedManyWithoutMenuInput
    menu_allery?: menu_alleryUncheckedCreateNestedManyWithoutMenuInput
    menu_tag?: menu_tagUncheckedCreateNestedManyWithoutMenuInput
    menu_vitamin?: menu_vitaminUncheckedCreateNestedManyWithoutMenuInput
    spin_results?: spin_resultsUncheckedCreateNestedManyWithoutMenuInput
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
    battle_menus?: battle_menusUpdateManyWithoutMenuNestedInput
    menu_allery?: menu_alleryUpdateManyWithoutMenuNestedInput
    menu_tag?: menu_tagUpdateManyWithoutMenuNestedInput
    menu_vitamin?: menu_vitaminUpdateManyWithoutMenuNestedInput
    spin_results?: spin_resultsUpdateManyWithoutMenuNestedInput
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
    battle_menus?: battle_menusUncheckedUpdateManyWithoutMenuNestedInput
    menu_allery?: menu_alleryUncheckedUpdateManyWithoutMenuNestedInput
    menu_tag?: menu_tagUncheckedUpdateManyWithoutMenuNestedInput
    menu_vitamin?: menu_vitaminUncheckedUpdateManyWithoutMenuNestedInput
    spin_results?: spin_resultsUncheckedUpdateManyWithoutMenuNestedInput
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
    battle_menus?: battle_menusCreateNestedManyWithoutMenuInput
    menu_allery?: menu_alleryCreateNestedManyWithoutMenuInput
    menu_vitamin?: menu_vitaminCreateNestedManyWithoutMenuInput
    mukburim?: mukburimCreateNestedManyWithoutMenuInput
    spin_results?: spin_resultsCreateNestedManyWithoutMenuInput
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
    battle_menus?: battle_menusUncheckedCreateNestedManyWithoutMenuInput
    menu_allery?: menu_alleryUncheckedCreateNestedManyWithoutMenuInput
    menu_vitamin?: menu_vitaminUncheckedCreateNestedManyWithoutMenuInput
    mukburim?: mukburimUncheckedCreateNestedManyWithoutMenuInput
    spin_results?: spin_resultsUncheckedCreateNestedManyWithoutMenuInput
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
    battle_menus?: battle_menusUpdateManyWithoutMenuNestedInput
    menu_allery?: menu_alleryUpdateManyWithoutMenuNestedInput
    menu_vitamin?: menu_vitaminUpdateManyWithoutMenuNestedInput
    mukburim?: mukburimUpdateManyWithoutMenuNestedInput
    spin_results?: spin_resultsUpdateManyWithoutMenuNestedInput
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
    battle_menus?: battle_menusUncheckedUpdateManyWithoutMenuNestedInput
    menu_allery?: menu_alleryUncheckedUpdateManyWithoutMenuNestedInput
    menu_vitamin?: menu_vitaminUncheckedUpdateManyWithoutMenuNestedInput
    mukburim?: mukburimUncheckedUpdateManyWithoutMenuNestedInput
    spin_results?: spin_resultsUncheckedUpdateManyWithoutMenuNestedInput
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
    battle_menus?: battle_menusCreateNestedManyWithoutMenuInput
    menu_tag?: menu_tagCreateNestedManyWithoutMenuInput
    menu_vitamin?: menu_vitaminCreateNestedManyWithoutMenuInput
    mukburim?: mukburimCreateNestedManyWithoutMenuInput
    spin_results?: spin_resultsCreateNestedManyWithoutMenuInput
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
    battle_menus?: battle_menusUncheckedCreateNestedManyWithoutMenuInput
    menu_tag?: menu_tagUncheckedCreateNestedManyWithoutMenuInput
    menu_vitamin?: menu_vitaminUncheckedCreateNestedManyWithoutMenuInput
    mukburim?: mukburimUncheckedCreateNestedManyWithoutMenuInput
    spin_results?: spin_resultsUncheckedCreateNestedManyWithoutMenuInput
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
    battle_menus?: battle_menusUpdateManyWithoutMenuNestedInput
    menu_tag?: menu_tagUpdateManyWithoutMenuNestedInput
    menu_vitamin?: menu_vitaminUpdateManyWithoutMenuNestedInput
    mukburim?: mukburimUpdateManyWithoutMenuNestedInput
    spin_results?: spin_resultsUpdateManyWithoutMenuNestedInput
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
    battle_menus?: battle_menusUncheckedUpdateManyWithoutMenuNestedInput
    menu_tag?: menu_tagUncheckedUpdateManyWithoutMenuNestedInput
    menu_vitamin?: menu_vitaminUncheckedUpdateManyWithoutMenuNestedInput
    mukburim?: mukburimUncheckedUpdateManyWithoutMenuNestedInput
    spin_results?: spin_resultsUncheckedUpdateManyWithoutMenuNestedInput
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
    battle_menus?: battle_menusCreateNestedManyWithoutMenuInput
    menu_allery?: menu_alleryCreateNestedManyWithoutMenuInput
    menu_tag?: menu_tagCreateNestedManyWithoutMenuInput
    mukburim?: mukburimCreateNestedManyWithoutMenuInput
    spin_results?: spin_resultsCreateNestedManyWithoutMenuInput
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
    battle_menus?: battle_menusUncheckedCreateNestedManyWithoutMenuInput
    menu_allery?: menu_alleryUncheckedCreateNestedManyWithoutMenuInput
    menu_tag?: menu_tagUncheckedCreateNestedManyWithoutMenuInput
    mukburim?: mukburimUncheckedCreateNestedManyWithoutMenuInput
    spin_results?: spin_resultsUncheckedCreateNestedManyWithoutMenuInput
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
    battle_menus?: battle_menusUpdateManyWithoutMenuNestedInput
    menu_allery?: menu_alleryUpdateManyWithoutMenuNestedInput
    menu_tag?: menu_tagUpdateManyWithoutMenuNestedInput
    mukburim?: mukburimUpdateManyWithoutMenuNestedInput
    spin_results?: spin_resultsUpdateManyWithoutMenuNestedInput
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
    battle_menus?: battle_menusUncheckedUpdateManyWithoutMenuNestedInput
    menu_allery?: menu_alleryUncheckedUpdateManyWithoutMenuNestedInput
    menu_tag?: menu_tagUncheckedUpdateManyWithoutMenuNestedInput
    mukburim?: mukburimUncheckedUpdateManyWithoutMenuNestedInput
    spin_results?: spin_resultsUncheckedUpdateManyWithoutMenuNestedInput
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

  export type menu_alleryCreateWithoutAllergyInput = {
    menu: menuCreateNestedOneWithoutMenu_alleryInput
  }

  export type menu_alleryUncheckedCreateWithoutAllergyInput = {
    menu_id: bigint | number
  }

  export type menu_alleryCreateOrConnectWithoutAllergyInput = {
    where: menu_alleryWhereUniqueInput
    create: XOR<menu_alleryCreateWithoutAllergyInput, menu_alleryUncheckedCreateWithoutAllergyInput>
  }

  export type menu_alleryCreateManyAllergyInputEnvelope = {
    data: menu_alleryCreateManyAllergyInput | menu_alleryCreateManyAllergyInput[]
    skipDuplicates?: boolean
  }

  export type menu_alleryUpsertWithWhereUniqueWithoutAllergyInput = {
    where: menu_alleryWhereUniqueInput
    update: XOR<menu_alleryUpdateWithoutAllergyInput, menu_alleryUncheckedUpdateWithoutAllergyInput>
    create: XOR<menu_alleryCreateWithoutAllergyInput, menu_alleryUncheckedCreateWithoutAllergyInput>
  }

  export type menu_alleryUpdateWithWhereUniqueWithoutAllergyInput = {
    where: menu_alleryWhereUniqueInput
    data: XOR<menu_alleryUpdateWithoutAllergyInput, menu_alleryUncheckedUpdateWithoutAllergyInput>
  }

  export type menu_alleryUpdateManyWithWhereWithoutAllergyInput = {
    where: menu_alleryScalarWhereInput
    data: XOR<menu_alleryUpdateManyMutationInput, menu_alleryUncheckedUpdateManyWithoutAllergyInput>
  }

  export type battle_participantsCreateWithoutBattlesInput = {
    id?: bigint | number
    nickname: string
    is_creator?: boolean
    joined_at?: Date | string
  }

  export type battle_participantsUncheckedCreateWithoutBattlesInput = {
    id?: bigint | number
    nickname: string
    is_creator?: boolean
    joined_at?: Date | string
  }

  export type battle_participantsCreateOrConnectWithoutBattlesInput = {
    where: battle_participantsWhereUniqueInput
    create: XOR<battle_participantsCreateWithoutBattlesInput, battle_participantsUncheckedCreateWithoutBattlesInput>
  }

  export type battle_participantsCreateManyBattlesInputEnvelope = {
    data: battle_participantsCreateManyBattlesInput | battle_participantsCreateManyBattlesInput[]
    skipDuplicates?: boolean
  }

  export type battle_menusCreateWithoutBattlesInput = {
    id?: bigint | number
    menu_name: string
    boundary_angle: Decimal | DecimalJsLike | number | string
    menu_order: number
    menu: menuCreateNestedOneWithoutBattle_menusInput
  }

  export type battle_menusUncheckedCreateWithoutBattlesInput = {
    id?: bigint | number
    menu_id: bigint | number
    menu_name: string
    boundary_angle: Decimal | DecimalJsLike | number | string
    menu_order: number
  }

  export type battle_menusCreateOrConnectWithoutBattlesInput = {
    where: battle_menusWhereUniqueInput
    create: XOR<battle_menusCreateWithoutBattlesInput, battle_menusUncheckedCreateWithoutBattlesInput>
  }

  export type battle_menusCreateManyBattlesInputEnvelope = {
    data: battle_menusCreateManyBattlesInput | battle_menusCreateManyBattlesInput[]
    skipDuplicates?: boolean
  }

  export type spin_resultsCreateWithoutBattlesInput = {
    id?: bigint | number
    nickname: string
    stopped_angle: Decimal | DecimalJsLike | number | string
    closest_menu_name: string
    distance_to_boundary: Decimal | DecimalJsLike | number | string
    rank: number
    spun_at?: Date | string
    menu: menuCreateNestedOneWithoutSpin_resultsInput
  }

  export type spin_resultsUncheckedCreateWithoutBattlesInput = {
    id?: bigint | number
    nickname: string
    stopped_angle: Decimal | DecimalJsLike | number | string
    closest_menu_id: bigint | number
    closest_menu_name: string
    distance_to_boundary: Decimal | DecimalJsLike | number | string
    rank: number
    spun_at?: Date | string
  }

  export type spin_resultsCreateOrConnectWithoutBattlesInput = {
    where: spin_resultsWhereUniqueInput
    create: XOR<spin_resultsCreateWithoutBattlesInput, spin_resultsUncheckedCreateWithoutBattlesInput>
  }

  export type spin_resultsCreateManyBattlesInputEnvelope = {
    data: spin_resultsCreateManyBattlesInput | spin_resultsCreateManyBattlesInput[]
    skipDuplicates?: boolean
  }

  export type battle_participantsUpsertWithWhereUniqueWithoutBattlesInput = {
    where: battle_participantsWhereUniqueInput
    update: XOR<battle_participantsUpdateWithoutBattlesInput, battle_participantsUncheckedUpdateWithoutBattlesInput>
    create: XOR<battle_participantsCreateWithoutBattlesInput, battle_participantsUncheckedCreateWithoutBattlesInput>
  }

  export type battle_participantsUpdateWithWhereUniqueWithoutBattlesInput = {
    where: battle_participantsWhereUniqueInput
    data: XOR<battle_participantsUpdateWithoutBattlesInput, battle_participantsUncheckedUpdateWithoutBattlesInput>
  }

  export type battle_participantsUpdateManyWithWhereWithoutBattlesInput = {
    where: battle_participantsScalarWhereInput
    data: XOR<battle_participantsUpdateManyMutationInput, battle_participantsUncheckedUpdateManyWithoutBattlesInput>
  }

  export type battle_participantsScalarWhereInput = {
    AND?: battle_participantsScalarWhereInput | battle_participantsScalarWhereInput[]
    OR?: battle_participantsScalarWhereInput[]
    NOT?: battle_participantsScalarWhereInput | battle_participantsScalarWhereInput[]
    id?: BigIntFilter<"battle_participants"> | bigint | number
    battle_id?: StringFilter<"battle_participants"> | string
    nickname?: StringFilter<"battle_participants"> | string
    is_creator?: BoolFilter<"battle_participants"> | boolean
    joined_at?: DateTimeFilter<"battle_participants"> | Date | string
  }

  export type battle_menusUpsertWithWhereUniqueWithoutBattlesInput = {
    where: battle_menusWhereUniqueInput
    update: XOR<battle_menusUpdateWithoutBattlesInput, battle_menusUncheckedUpdateWithoutBattlesInput>
    create: XOR<battle_menusCreateWithoutBattlesInput, battle_menusUncheckedCreateWithoutBattlesInput>
  }

  export type battle_menusUpdateWithWhereUniqueWithoutBattlesInput = {
    where: battle_menusWhereUniqueInput
    data: XOR<battle_menusUpdateWithoutBattlesInput, battle_menusUncheckedUpdateWithoutBattlesInput>
  }

  export type battle_menusUpdateManyWithWhereWithoutBattlesInput = {
    where: battle_menusScalarWhereInput
    data: XOR<battle_menusUpdateManyMutationInput, battle_menusUncheckedUpdateManyWithoutBattlesInput>
  }

  export type spin_resultsUpsertWithWhereUniqueWithoutBattlesInput = {
    where: spin_resultsWhereUniqueInput
    update: XOR<spin_resultsUpdateWithoutBattlesInput, spin_resultsUncheckedUpdateWithoutBattlesInput>
    create: XOR<spin_resultsCreateWithoutBattlesInput, spin_resultsUncheckedCreateWithoutBattlesInput>
  }

  export type spin_resultsUpdateWithWhereUniqueWithoutBattlesInput = {
    where: spin_resultsWhereUniqueInput
    data: XOR<spin_resultsUpdateWithoutBattlesInput, spin_resultsUncheckedUpdateWithoutBattlesInput>
  }

  export type spin_resultsUpdateManyWithWhereWithoutBattlesInput = {
    where: spin_resultsScalarWhereInput
    data: XOR<spin_resultsUpdateManyMutationInput, spin_resultsUncheckedUpdateManyWithoutBattlesInput>
  }

  export type battlesCreateWithoutBattle_participantsInput = {
    battle_id: string
    creator_nickname: string
    status?: $Enums.battles_status
    participant_count?: number
    created_at?: Date | string
    finished_at?: Date | string | null
    expires_at: Date | string
    battle_menus?: battle_menusCreateNestedManyWithoutBattlesInput
    spin_results?: spin_resultsCreateNestedManyWithoutBattlesInput
  }

  export type battlesUncheckedCreateWithoutBattle_participantsInput = {
    battle_id: string
    creator_nickname: string
    status?: $Enums.battles_status
    participant_count?: number
    created_at?: Date | string
    finished_at?: Date | string | null
    expires_at: Date | string
    battle_menus?: battle_menusUncheckedCreateNestedManyWithoutBattlesInput
    spin_results?: spin_resultsUncheckedCreateNestedManyWithoutBattlesInput
  }

  export type battlesCreateOrConnectWithoutBattle_participantsInput = {
    where: battlesWhereUniqueInput
    create: XOR<battlesCreateWithoutBattle_participantsInput, battlesUncheckedCreateWithoutBattle_participantsInput>
  }

  export type battlesUpsertWithoutBattle_participantsInput = {
    update: XOR<battlesUpdateWithoutBattle_participantsInput, battlesUncheckedUpdateWithoutBattle_participantsInput>
    create: XOR<battlesCreateWithoutBattle_participantsInput, battlesUncheckedCreateWithoutBattle_participantsInput>
    where?: battlesWhereInput
  }

  export type battlesUpdateToOneWithWhereWithoutBattle_participantsInput = {
    where?: battlesWhereInput
    data: XOR<battlesUpdateWithoutBattle_participantsInput, battlesUncheckedUpdateWithoutBattle_participantsInput>
  }

  export type battlesUpdateWithoutBattle_participantsInput = {
    battle_id?: StringFieldUpdateOperationsInput | string
    creator_nickname?: StringFieldUpdateOperationsInput | string
    status?: Enumbattles_statusFieldUpdateOperationsInput | $Enums.battles_status
    participant_count?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    finished_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    battle_menus?: battle_menusUpdateManyWithoutBattlesNestedInput
    spin_results?: spin_resultsUpdateManyWithoutBattlesNestedInput
  }

  export type battlesUncheckedUpdateWithoutBattle_participantsInput = {
    battle_id?: StringFieldUpdateOperationsInput | string
    creator_nickname?: StringFieldUpdateOperationsInput | string
    status?: Enumbattles_statusFieldUpdateOperationsInput | $Enums.battles_status
    participant_count?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    finished_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    battle_menus?: battle_menusUncheckedUpdateManyWithoutBattlesNestedInput
    spin_results?: spin_resultsUncheckedUpdateManyWithoutBattlesNestedInput
  }

  export type battlesCreateWithoutBattle_menusInput = {
    battle_id: string
    creator_nickname: string
    status?: $Enums.battles_status
    participant_count?: number
    created_at?: Date | string
    finished_at?: Date | string | null
    expires_at: Date | string
    battle_participants?: battle_participantsCreateNestedManyWithoutBattlesInput
    spin_results?: spin_resultsCreateNestedManyWithoutBattlesInput
  }

  export type battlesUncheckedCreateWithoutBattle_menusInput = {
    battle_id: string
    creator_nickname: string
    status?: $Enums.battles_status
    participant_count?: number
    created_at?: Date | string
    finished_at?: Date | string | null
    expires_at: Date | string
    battle_participants?: battle_participantsUncheckedCreateNestedManyWithoutBattlesInput
    spin_results?: spin_resultsUncheckedCreateNestedManyWithoutBattlesInput
  }

  export type battlesCreateOrConnectWithoutBattle_menusInput = {
    where: battlesWhereUniqueInput
    create: XOR<battlesCreateWithoutBattle_menusInput, battlesUncheckedCreateWithoutBattle_menusInput>
  }

  export type menuCreateWithoutBattle_menusInput = {
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
    spin_results?: spin_resultsCreateNestedManyWithoutMenuInput
  }

  export type menuUncheckedCreateWithoutBattle_menusInput = {
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
    spin_results?: spin_resultsUncheckedCreateNestedManyWithoutMenuInput
  }

  export type menuCreateOrConnectWithoutBattle_menusInput = {
    where: menuWhereUniqueInput
    create: XOR<menuCreateWithoutBattle_menusInput, menuUncheckedCreateWithoutBattle_menusInput>
  }

  export type battlesUpsertWithoutBattle_menusInput = {
    update: XOR<battlesUpdateWithoutBattle_menusInput, battlesUncheckedUpdateWithoutBattle_menusInput>
    create: XOR<battlesCreateWithoutBattle_menusInput, battlesUncheckedCreateWithoutBattle_menusInput>
    where?: battlesWhereInput
  }

  export type battlesUpdateToOneWithWhereWithoutBattle_menusInput = {
    where?: battlesWhereInput
    data: XOR<battlesUpdateWithoutBattle_menusInput, battlesUncheckedUpdateWithoutBattle_menusInput>
  }

  export type battlesUpdateWithoutBattle_menusInput = {
    battle_id?: StringFieldUpdateOperationsInput | string
    creator_nickname?: StringFieldUpdateOperationsInput | string
    status?: Enumbattles_statusFieldUpdateOperationsInput | $Enums.battles_status
    participant_count?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    finished_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    battle_participants?: battle_participantsUpdateManyWithoutBattlesNestedInput
    spin_results?: spin_resultsUpdateManyWithoutBattlesNestedInput
  }

  export type battlesUncheckedUpdateWithoutBattle_menusInput = {
    battle_id?: StringFieldUpdateOperationsInput | string
    creator_nickname?: StringFieldUpdateOperationsInput | string
    status?: Enumbattles_statusFieldUpdateOperationsInput | $Enums.battles_status
    participant_count?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    finished_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    battle_participants?: battle_participantsUncheckedUpdateManyWithoutBattlesNestedInput
    spin_results?: spin_resultsUncheckedUpdateManyWithoutBattlesNestedInput
  }

  export type menuUpsertWithoutBattle_menusInput = {
    update: XOR<menuUpdateWithoutBattle_menusInput, menuUncheckedUpdateWithoutBattle_menusInput>
    create: XOR<menuCreateWithoutBattle_menusInput, menuUncheckedCreateWithoutBattle_menusInput>
    where?: menuWhereInput
  }

  export type menuUpdateToOneWithWhereWithoutBattle_menusInput = {
    where?: menuWhereInput
    data: XOR<menuUpdateWithoutBattle_menusInput, menuUncheckedUpdateWithoutBattle_menusInput>
  }

  export type menuUpdateWithoutBattle_menusInput = {
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
    spin_results?: spin_resultsUpdateManyWithoutMenuNestedInput
  }

  export type menuUncheckedUpdateWithoutBattle_menusInput = {
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
    spin_results?: spin_resultsUncheckedUpdateManyWithoutMenuNestedInput
  }

  export type battlesCreateWithoutSpin_resultsInput = {
    battle_id: string
    creator_nickname: string
    status?: $Enums.battles_status
    participant_count?: number
    created_at?: Date | string
    finished_at?: Date | string | null
    expires_at: Date | string
    battle_participants?: battle_participantsCreateNestedManyWithoutBattlesInput
    battle_menus?: battle_menusCreateNestedManyWithoutBattlesInput
  }

  export type battlesUncheckedCreateWithoutSpin_resultsInput = {
    battle_id: string
    creator_nickname: string
    status?: $Enums.battles_status
    participant_count?: number
    created_at?: Date | string
    finished_at?: Date | string | null
    expires_at: Date | string
    battle_participants?: battle_participantsUncheckedCreateNestedManyWithoutBattlesInput
    battle_menus?: battle_menusUncheckedCreateNestedManyWithoutBattlesInput
  }

  export type battlesCreateOrConnectWithoutSpin_resultsInput = {
    where: battlesWhereUniqueInput
    create: XOR<battlesCreateWithoutSpin_resultsInput, battlesUncheckedCreateWithoutSpin_resultsInput>
  }

  export type menuCreateWithoutSpin_resultsInput = {
    id?: bigint | number
    name: string
    description?: string | null
    calory?: bigint | number | null
    carbo?: bigint | number | null
    protein?: bigint | number | null
    fat?: bigint | number | null
    sodium?: bigint | number | null
    image_link?: string | null
    battle_menus?: battle_menusCreateNestedManyWithoutMenuInput
    menu_allery?: menu_alleryCreateNestedManyWithoutMenuInput
    menu_tag?: menu_tagCreateNestedManyWithoutMenuInput
    menu_vitamin?: menu_vitaminCreateNestedManyWithoutMenuInput
    mukburim?: mukburimCreateNestedManyWithoutMenuInput
  }

  export type menuUncheckedCreateWithoutSpin_resultsInput = {
    id?: bigint | number
    name: string
    description?: string | null
    calory?: bigint | number | null
    carbo?: bigint | number | null
    protein?: bigint | number | null
    fat?: bigint | number | null
    sodium?: bigint | number | null
    image_link?: string | null
    battle_menus?: battle_menusUncheckedCreateNestedManyWithoutMenuInput
    menu_allery?: menu_alleryUncheckedCreateNestedManyWithoutMenuInput
    menu_tag?: menu_tagUncheckedCreateNestedManyWithoutMenuInput
    menu_vitamin?: menu_vitaminUncheckedCreateNestedManyWithoutMenuInput
    mukburim?: mukburimUncheckedCreateNestedManyWithoutMenuInput
  }

  export type menuCreateOrConnectWithoutSpin_resultsInput = {
    where: menuWhereUniqueInput
    create: XOR<menuCreateWithoutSpin_resultsInput, menuUncheckedCreateWithoutSpin_resultsInput>
  }

  export type battlesUpsertWithoutSpin_resultsInput = {
    update: XOR<battlesUpdateWithoutSpin_resultsInput, battlesUncheckedUpdateWithoutSpin_resultsInput>
    create: XOR<battlesCreateWithoutSpin_resultsInput, battlesUncheckedCreateWithoutSpin_resultsInput>
    where?: battlesWhereInput
  }

  export type battlesUpdateToOneWithWhereWithoutSpin_resultsInput = {
    where?: battlesWhereInput
    data: XOR<battlesUpdateWithoutSpin_resultsInput, battlesUncheckedUpdateWithoutSpin_resultsInput>
  }

  export type battlesUpdateWithoutSpin_resultsInput = {
    battle_id?: StringFieldUpdateOperationsInput | string
    creator_nickname?: StringFieldUpdateOperationsInput | string
    status?: Enumbattles_statusFieldUpdateOperationsInput | $Enums.battles_status
    participant_count?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    finished_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    battle_participants?: battle_participantsUpdateManyWithoutBattlesNestedInput
    battle_menus?: battle_menusUpdateManyWithoutBattlesNestedInput
  }

  export type battlesUncheckedUpdateWithoutSpin_resultsInput = {
    battle_id?: StringFieldUpdateOperationsInput | string
    creator_nickname?: StringFieldUpdateOperationsInput | string
    status?: Enumbattles_statusFieldUpdateOperationsInput | $Enums.battles_status
    participant_count?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    finished_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    battle_participants?: battle_participantsUncheckedUpdateManyWithoutBattlesNestedInput
    battle_menus?: battle_menusUncheckedUpdateManyWithoutBattlesNestedInput
  }

  export type menuUpsertWithoutSpin_resultsInput = {
    update: XOR<menuUpdateWithoutSpin_resultsInput, menuUncheckedUpdateWithoutSpin_resultsInput>
    create: XOR<menuCreateWithoutSpin_resultsInput, menuUncheckedCreateWithoutSpin_resultsInput>
    where?: menuWhereInput
  }

  export type menuUpdateToOneWithWhereWithoutSpin_resultsInput = {
    where?: menuWhereInput
    data: XOR<menuUpdateWithoutSpin_resultsInput, menuUncheckedUpdateWithoutSpin_resultsInput>
  }

  export type menuUpdateWithoutSpin_resultsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    calory?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    carbo?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    protein?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    fat?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    sodium?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    image_link?: NullableStringFieldUpdateOperationsInput | string | null
    battle_menus?: battle_menusUpdateManyWithoutMenuNestedInput
    menu_allery?: menu_alleryUpdateManyWithoutMenuNestedInput
    menu_tag?: menu_tagUpdateManyWithoutMenuNestedInput
    menu_vitamin?: menu_vitaminUpdateManyWithoutMenuNestedInput
    mukburim?: mukburimUpdateManyWithoutMenuNestedInput
  }

  export type menuUncheckedUpdateWithoutSpin_resultsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    calory?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    carbo?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    protein?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    fat?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    sodium?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    image_link?: NullableStringFieldUpdateOperationsInput | string | null
    battle_menus?: battle_menusUncheckedUpdateManyWithoutMenuNestedInput
    menu_allery?: menu_alleryUncheckedUpdateManyWithoutMenuNestedInput
    menu_tag?: menu_tagUncheckedUpdateManyWithoutMenuNestedInput
    menu_vitamin?: menu_vitaminUncheckedUpdateManyWithoutMenuNestedInput
    mukburim?: mukburimUncheckedUpdateManyWithoutMenuNestedInput
  }

  export type battle_menusCreateManyMenuInput = {
    id?: bigint | number
    battle_id: string
    menu_name: string
    boundary_angle: Decimal | DecimalJsLike | number | string
    menu_order: number
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

  export type spin_resultsCreateManyMenuInput = {
    id?: bigint | number
    battle_id: string
    nickname: string
    stopped_angle: Decimal | DecimalJsLike | number | string
    closest_menu_name: string
    distance_to_boundary: Decimal | DecimalJsLike | number | string
    rank: number
    spun_at?: Date | string
  }

  export type battle_menusUpdateWithoutMenuInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    menu_name?: StringFieldUpdateOperationsInput | string
    boundary_angle?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    menu_order?: IntFieldUpdateOperationsInput | number
    battles?: battlesUpdateOneRequiredWithoutBattle_menusNestedInput
  }

  export type battle_menusUncheckedUpdateWithoutMenuInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    battle_id?: StringFieldUpdateOperationsInput | string
    menu_name?: StringFieldUpdateOperationsInput | string
    boundary_angle?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    menu_order?: IntFieldUpdateOperationsInput | number
  }

  export type battle_menusUncheckedUpdateManyWithoutMenuInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    battle_id?: StringFieldUpdateOperationsInput | string
    menu_name?: StringFieldUpdateOperationsInput | string
    boundary_angle?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    menu_order?: IntFieldUpdateOperationsInput | number
  }

  export type menu_alleryUpdateWithoutMenuInput = {
    allergy?: allergyUpdateOneRequiredWithoutMenu_alleryNestedInput
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

  export type spin_resultsUpdateWithoutMenuInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    nickname?: StringFieldUpdateOperationsInput | string
    stopped_angle?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    closest_menu_name?: StringFieldUpdateOperationsInput | string
    distance_to_boundary?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    rank?: IntFieldUpdateOperationsInput | number
    spun_at?: DateTimeFieldUpdateOperationsInput | Date | string
    battles?: battlesUpdateOneRequiredWithoutSpin_resultsNestedInput
  }

  export type spin_resultsUncheckedUpdateWithoutMenuInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    battle_id?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    stopped_angle?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    closest_menu_name?: StringFieldUpdateOperationsInput | string
    distance_to_boundary?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    rank?: IntFieldUpdateOperationsInput | number
    spun_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type spin_resultsUncheckedUpdateManyWithoutMenuInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    battle_id?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    stopped_angle?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    closest_menu_name?: StringFieldUpdateOperationsInput | string
    distance_to_boundary?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    rank?: IntFieldUpdateOperationsInput | number
    spun_at?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type menu_alleryCreateManyAllergyInput = {
    menu_id: bigint | number
  }

  export type menu_alleryUpdateWithoutAllergyInput = {
    menu?: menuUpdateOneRequiredWithoutMenu_alleryNestedInput
  }

  export type menu_alleryUncheckedUpdateWithoutAllergyInput = {
    menu_id?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type menu_alleryUncheckedUpdateManyWithoutAllergyInput = {
    menu_id?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type battle_participantsCreateManyBattlesInput = {
    id?: bigint | number
    nickname: string
    is_creator?: boolean
    joined_at?: Date | string
  }

  export type battle_menusCreateManyBattlesInput = {
    id?: bigint | number
    menu_id: bigint | number
    menu_name: string
    boundary_angle: Decimal | DecimalJsLike | number | string
    menu_order: number
  }

  export type spin_resultsCreateManyBattlesInput = {
    id?: bigint | number
    nickname: string
    stopped_angle: Decimal | DecimalJsLike | number | string
    closest_menu_id: bigint | number
    closest_menu_name: string
    distance_to_boundary: Decimal | DecimalJsLike | number | string
    rank: number
    spun_at?: Date | string
  }

  export type battle_participantsUpdateWithoutBattlesInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    nickname?: StringFieldUpdateOperationsInput | string
    is_creator?: BoolFieldUpdateOperationsInput | boolean
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type battle_participantsUncheckedUpdateWithoutBattlesInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    nickname?: StringFieldUpdateOperationsInput | string
    is_creator?: BoolFieldUpdateOperationsInput | boolean
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type battle_participantsUncheckedUpdateManyWithoutBattlesInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    nickname?: StringFieldUpdateOperationsInput | string
    is_creator?: BoolFieldUpdateOperationsInput | boolean
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type battle_menusUpdateWithoutBattlesInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    menu_name?: StringFieldUpdateOperationsInput | string
    boundary_angle?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    menu_order?: IntFieldUpdateOperationsInput | number
    menu?: menuUpdateOneRequiredWithoutBattle_menusNestedInput
  }

  export type battle_menusUncheckedUpdateWithoutBattlesInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    menu_id?: BigIntFieldUpdateOperationsInput | bigint | number
    menu_name?: StringFieldUpdateOperationsInput | string
    boundary_angle?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    menu_order?: IntFieldUpdateOperationsInput | number
  }

  export type battle_menusUncheckedUpdateManyWithoutBattlesInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    menu_id?: BigIntFieldUpdateOperationsInput | bigint | number
    menu_name?: StringFieldUpdateOperationsInput | string
    boundary_angle?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    menu_order?: IntFieldUpdateOperationsInput | number
  }

  export type spin_resultsUpdateWithoutBattlesInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    nickname?: StringFieldUpdateOperationsInput | string
    stopped_angle?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    closest_menu_name?: StringFieldUpdateOperationsInput | string
    distance_to_boundary?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    rank?: IntFieldUpdateOperationsInput | number
    spun_at?: DateTimeFieldUpdateOperationsInput | Date | string
    menu?: menuUpdateOneRequiredWithoutSpin_resultsNestedInput
  }

  export type spin_resultsUncheckedUpdateWithoutBattlesInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    nickname?: StringFieldUpdateOperationsInput | string
    stopped_angle?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    closest_menu_id?: BigIntFieldUpdateOperationsInput | bigint | number
    closest_menu_name?: StringFieldUpdateOperationsInput | string
    distance_to_boundary?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    rank?: IntFieldUpdateOperationsInput | number
    spun_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type spin_resultsUncheckedUpdateManyWithoutBattlesInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    nickname?: StringFieldUpdateOperationsInput | string
    stopped_angle?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    closest_menu_id?: BigIntFieldUpdateOperationsInput | bigint | number
    closest_menu_name?: StringFieldUpdateOperationsInput | string
    distance_to_boundary?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    rank?: IntFieldUpdateOperationsInput | number
    spun_at?: DateTimeFieldUpdateOperationsInput | Date | string
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