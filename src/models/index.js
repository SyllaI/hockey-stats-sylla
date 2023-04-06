// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { User, UntitledModel, PlayerSeason, Season, Player } = initSchema(schema);

export {
  User,
  UntitledModel,
  PlayerSeason,
  Season,
  Player
};