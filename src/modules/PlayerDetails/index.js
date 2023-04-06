import { Card, Descriptions, Divider } from 'antd';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { DataStore } from 'aws-amplify';
import { Player } from '../../models';

const PlayerDetails = () => {
  const { playerID } = useParams();
  const [player, setPlayer] = useState(null);

  useEffect(() => {
    DataStore.query(Player, playerID).then(setPlayer);
  }, [playerID]);

  const totalPoints = player?.numberOfGoals + player?.numberOfAssist;

  return (
    <Card title={`Player id ${playerID}`} style={styles.page}>
      {player ? (
        <Descriptions bordered column={{ lg: 1, md: 1, sm: 1 }}>
          <Descriptions.Item label='Name'>{player.name}</Descriptions.Item>
          <Descriptions.Item label='Goals'>{player.numberOfGoals}</Descriptions.Item>
          <Descriptions.Item label='Assists'>{player.numberOfAssist}</Descriptions.Item>
          <Descriptions.Item label='Total points'>{totalPoints}</Descriptions.Item>
        </Descriptions>
      ) : (
        <div>Loading...</div>
      )}
      <Divider />
    </Card>
  );
};

const styles = {
  page: {
    margin: 20,
  },
};

export default PlayerDetails;
