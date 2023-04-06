import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection } from "@aws-amplify/datastore";





type EagerUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly address?: string | null;
  readonly sub?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly address?: string | null;
  readonly sub?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type User = LazyLoading extends LazyLoadingDisabled ? EagerUser : LazyUser

export declare const User: (new (init: ModelInit<User>) => User) & {
  copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}

type EagerUntitledModel = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UntitledModel, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUntitledModel = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UntitledModel, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type UntitledModel = LazyLoading extends LazyLoadingDisabled ? EagerUntitledModel : LazyUntitledModel

export declare const UntitledModel: (new (init: ModelInit<UntitledModel>) => UntitledModel) & {
  copyOf(source: UntitledModel, mutator: (draft: MutableModel<UntitledModel>) => MutableModel<UntitledModel> | void): UntitledModel;
}

type EagerPlayerSeason = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<PlayerSeason, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly numberOfGoals?: number | null;
  readonly numberOfAssists?: number | null;
  readonly seasonID: string;
  readonly playerID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyPlayerSeason = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<PlayerSeason, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly numberOfGoals?: number | null;
  readonly numberOfAssists?: number | null;
  readonly seasonID: string;
  readonly playerID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type PlayerSeason = LazyLoading extends LazyLoadingDisabled ? EagerPlayerSeason : LazyPlayerSeason

export declare const PlayerSeason: (new (init: ModelInit<PlayerSeason>) => PlayerSeason) & {
  copyOf(source: PlayerSeason, mutator: (draft: MutableModel<PlayerSeason>) => MutableModel<PlayerSeason> | void): PlayerSeason;
}

type EagerSeason = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Season, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Year?: string | null;
  readonly PlayerSeasons?: (PlayerSeason | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazySeason = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Season, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Year?: string | null;
  readonly PlayerSeasons: AsyncCollection<PlayerSeason>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Season = LazyLoading extends LazyLoadingDisabled ? EagerSeason : LazySeason

export declare const Season: (new (init: ModelInit<Season>) => Season) & {
  copyOf(source: Season, mutator: (draft: MutableModel<Season>) => MutableModel<Season> | void): Season;
}

type EagerPlayer = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Player, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly season?: string | null;
  readonly numberOfGoals?: number | null;
  readonly numberOfAssist?: number | null;
  readonly adminSub?: string | null;
  readonly PlayerSeasons?: (PlayerSeason | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyPlayer = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Player, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly season?: string | null;
  readonly numberOfGoals?: number | null;
  readonly numberOfAssist?: number | null;
  readonly adminSub?: string | null;
  readonly PlayerSeasons: AsyncCollection<PlayerSeason>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Player = LazyLoading extends LazyLoadingDisabled ? EagerPlayer : LazyPlayer

export declare const Player: (new (init: ModelInit<Player>) => Player) & {
  copyOf(source: Player, mutator: (draft: MutableModel<Player>) => MutableModel<Player> | void): Player;
}