import React, { useEffect, useState } from 'react';
import { Card, Descriptions, Divider, Button, message, Input } from 'antd';
import { useParams, useNavigate } from 'react-router-dom';
import { DataStore } from 'aws-amplify';
import { Player } from '../../models';

const PlayerDetails = () => {
  const { playerID } = useParams();
  const navigate = useNavigate();
  const [player, setPlayer] = useState(null);
  const [goals, setGoals] = useState('');
  const [assists, setAssists] = useState('');

  useEffect(() => {
    DataStore.query(Player, playerID).then(setPlayer);
  }, [playerID]);

  const totalPoints = player?.numberOfGoals + player?.numberOfAssist;

  const handleDelete = async () => {
    try {
      await DataStore.delete(Player, playerID);
      message.success('Player deleted successfully');
      navigate('/players'); // redirect to Players page after successful deletion
    } catch (error) {
      message.error('Failed to delete player');
    }
  };

  const handleUpdateStats = async () => {
    try {
      await DataStore.save(
        Player.copyOf(player, (updated) => {
          updated.numberOfGoals = parseInt(goals);
          updated.numberOfAssist = parseInt(assists);
        })
      );
      message.success('Player stats updated successfully');
      window.location.reload(); // reload the page after successful update
    } catch (error) {
      message.error('Failed to update player stats');
    }
  };
  
  

  
  

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
      <Input
        placeholder='Goals'
        value={goals}
        onChange={(e) => setGoals(e.target.value)}
        style={{ marginRight: 10 }}
      />
      <Input
        placeholder='Assists'
        value={assists}
        onChange={(e) => setAssists(e.target.value)}
        style={{ marginRight: 10 }}
      />
      <Button onClick={handleUpdateStats} style={{ marginRight: 10 }}>
        Update stats
      </Button>
      <Button onClick={handleDelete} danger>
        Delete
      </Button>
    </Card>
  );
};

const styles = {
  page: {
    margin: 20,
  },
};

export default PlayerDetails
