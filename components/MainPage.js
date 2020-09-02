import React, { useState, useEffect, useRef } from "react";
import { Dimensions } from "react-native";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
  TextInput,
  Button,
} from "react-native";

const MainPage = ({ navigation, route }) => {
  const demo = [
    // {
    //   id: 1,
    //   name: "Buy beer",
    // },
    // {
    //   id: 2,
    //   name: "Drink beer",
    // },
    // {
    //   id: 3,
    //   name: "Enjoy your fucking life",
    // },
  ];

  const taskInput = useRef(null);

  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState(demo);
  const [edit, setEdit] = useState(false);
  const [taskId, setTaskId] = useState("");

  return (
    <>
      <View
        style={{
          paddingTop: 25,
          paddingBottom: 20,
          borderBottomWidth: 1
        }}
      >
        <Text style={styles.title}>Welcome {route.params.userName}</Text>
        <Text
          style={{
            textAlign: "center",
            fontSize: 17,
            marginTop: 10,
            marginBottom: 10,
          }}
        >
          List of yours uncompleted tasks
        </Text>
      </View>
      {tasks.length === 0 ? <View style={{flex: 1, paddingTop: 15}}><Text style={{textAlign: 'center', fontSize: 20}}>Create first task with form below</Text></View> : 
      <FlatList
        style={styles.container}
        keyExtractor={(item, index) => index.toString()}
        data={tasks}
        renderItem={(task) => {
          return (
            <View
              style={{
                padding: 5,
              }}
            >
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  borderWidth: 1,
                  borderRadius: 7,
                  borderColor: "gray",
                  padding: 15,
                }}
              >
                <Text>{task.item.name}</Text>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <TouchableOpacity
                    style={{
                      marginRight: 10,
                    }}
                    onPress={() => {
                      setTask(task.item.name);
                      setTaskId(task.item.id);
                      setEdit(true);
                      taskInput.current.focus();
                    }}
                  >
                    <Image
                      style={{
                        width: 30,
                        height: 30,
                      }}
                      source={require("../drawable/edit64.png")}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => {
                      setTasks((prevTasks) => {
                        return prevTasks.filter(
                          (prevTask) => prevTask.id !== task.item.id
                        );
                      });
                    }}
                  >
                    <Image
                      style={{
                        width: 30,
                        height: 30,
                      }}
                      source={require("../drawable/delete64.png")}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          );
        }}
      />
      }
      <View
        style={{
          alignSelf: "stretch",
          display: "flex",
          justifyContent: "center",
          padding: 20,
        }}
      >
        <TextInput
          ref={taskInput}
          placeholder="Enter task"
          style={{
            marginBottom: 10,
            borderBottomWidth: 1,
            padding: 5,
          }}
          selectTextOnFocus
          value={task}
          onChangeText={setTask}
        />
        <Button
          title={edit ? "Edit task" : "Create task"}
          onPress={() => {
            if (edit) {
              const updated = tasks.find((prevTask) => prevTask.id === taskId);
              const index = tasks.findIndex((task) => task.id === updated.id);
              updated.name = task;
              const updatedTasks = [...tasks];
              updatedTasks[index] = updated;
              setTasks([...updatedTasks]);
              setTask("");
              taskInput.current.blur();
              setEdit(false);
            } else {
              setTasks([
                ...tasks,
                {
                  id: Math.random(),
                  name: task,
                },
              ]);
              taskInput.current.blur();
              setTask("");
            }
          }}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
  },
  title: {
    fontSize: 20,
    textAlign: "center",
  },
  taskList: {
    alignSelf: "stretch",
    display: "flex",
    flexDirection: "column",
    padding: 15,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default MainPage;
