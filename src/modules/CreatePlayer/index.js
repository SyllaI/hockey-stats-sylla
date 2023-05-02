import { Card, Form, Input, Button, message } from "antd";
import { useEffect, useState } from "react";
import { DataStore } from "aws-amplify";
import { Player } from "../../models";
import { usePlayerContext } from "../../context/PlayerContext";

const CreatePlayer = () => {
  const [name, setName] = useState("");
  const [season, setSeason] = useState("");
  const [numberOfGoals, setNumOfGoals] = useState(0);
  const [numberOfAssist, setNumOfAssists] = useState(0);
  const [team, setTeam] = useState("");



  const { setPlayer, player } = usePlayerContext();

  useEffect(() => {
    if (!player) {
      return;
    }
    setName(player.name);
    setSeason(player.season);
    setNumOfGoals(player.numberOfGoals);
    setNumOfAssists(player.numberOfAssist);
    setTeam(player.team);
  }, [player]);

  const onFinish = async () => {
    if (!name) {
      message.error("Name required!");
      return;
    }
    if (!season) {
      message.error("Season required!");
      return;
    }
    if (!numberOfGoals) {
      message.error("Number of goals required!");
      return;
    }
    if (!numberOfAssist) {
      message.error("Number of assists required!");
      return;
    }
    if (!team) {
      message.error("Name of team required!");
      return;
    }
    if (!player) {
      await createNewPlayer();
    } 
  };

  const createNewPlayer = async () => {
    const newPlayer = new Player({
      name,
      season,
      numberOfGoals,
      numberOfAssist,
      team,
    });
    await DataStore.save(newPlayer);
    setPlayer(newPlayer);
    message.success("Player created!");
  };

  return (
    <Card title={player ? "Update Player" : "Create New Player"} style={styles.page}>
      <Form layout="vertical" onFinish={onFinish}>
        <Form.Item label={"Name"} required>
          <Input
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Item>
        <Form.Item label={"Season"} required>
          <Input
            placeholder="Enter season"
            value={season}
            onChange={(e) => setSeason(e.target.value)}
          />
        </Form.Item>
        <Form.Item label={"Goals"} required>
          <Input
            placeholder="Enter number of goals"
            type="number"
            value={numberOfGoals}
            onChange={(e) => setNumOfGoals(Number(e.target.value))}
          />
        </Form.Item>
        <Form.Item label={"Assists"} required>
          <Input
            placeholder="Enter number of assists"
            type="number"
            value={numberOfAssist}
            onChange={(e) => setNumOfAssists(Number(e.target.value))}
          />
        </Form.Item>
        <Form.Item label={"Team"} required>
          <Input
            placeholder="Enter name of team"
            value={team}
            onChange={(e) => setTeam(e.target.value)}
          />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            {player ? "Update" : "Create"}
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

const styles = {
  page: {
    margin: 20,
  },
};

export default CreatePlayer;

