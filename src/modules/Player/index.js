import React, { useState, useEffect } from "react";
import { Card, Table, Input } from "antd";
import { useNavigate } from "react-router-dom";
import { DataStore } from "aws-amplify";
import { Player } from "../../models";

const Players = () => {
  const [players, setPlayers] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [seasonSearchValue, setSeasonSearchValue] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    DataStore.query(Player).then(setPlayers);
  }, []);

  const handleSearch = (value) => {
    setSearchValue(value);
  };

  const handleSeasonSearch = (value) => {
    setSeasonSearchValue(value);
  };

  const filteredPlayers = players.filter(
    (player) =>
      player.name.toLowerCase().includes(searchValue.toLowerCase()) &&
      player.season.toLowerCase().includes(seasonSearchValue.toLowerCase())
  );

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
      title: "Team",
      dataIndex: "team",
      key: "team",
    },
  ];

  return (
    <Card title="Players" style={styles.page}>
      <Input.Search
        placeholder="Search by name"
        value={searchValue}
        onChange={(e) => handleSearch(e.target.value)}
        style={styles.searchInput}
      />
      <Input.Search
        placeholder="Search by season"
        value={seasonSearchValue}
        onChange={(e) => handleSeasonSearch(e.target.value)}
        style={styles.searchInput}
      />
      <Table
        dataSource={filteredPlayers}
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
  searchInput: {
    marginBottom: 16,
  },
};

export default Players;
