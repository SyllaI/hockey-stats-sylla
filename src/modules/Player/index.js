import { useState, useEffect } from "react";
import { Card, Table, Button, message } from "antd";
import { useNavigate } from "react-router-dom";
import { DataStore } from "aws-amplify";
import { Player } from "../../models";

const Players = () => {
  const [players, setPlayers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    DataStore.query(Player).then(setPlayers);
  }, []);

  const handleDelete = async (id) => {
    try {
      await DataStore.delete(Player, id);
      setPlayers(players.filter((player) => player.id !== id));
      message.success("Player deleted successfully!");
    } catch (error) {
      message.error("Failed to delete player.");
    }
  };

  const tableColumns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Season",
      dataIndex: "season",
      key: "season",
    },
    {
      title: "Goals",
      dataIndex: "numberOfGoals",
      key: "numberOfGoals",
    },
    {
      title: "Assists",
      dataIndex: "numberOfAssist",
      key: "numberOfAssists",
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <Button danger onClick={() => handleDelete(record.id)}>
          Delete
        </Button>
      ),
    },
  ];

  return (
    <Card title="Players" style={styles.page}>
      <Table
        dataSource={players}
        columns={tableColumns}
        rowKey="id"
        onRow={(player) => ({
          onClick: () => navigate(`player/${player.id}`),
        })}
      />
    </Card>
  );
};

const styles = {
  page: {
    margin: 20,
  },
};

export default Players;