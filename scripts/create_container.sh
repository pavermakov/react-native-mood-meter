#!/bin/bash

ROOT=src/containers/

if [ -d $ROOT ]
then
  echo "Enter container name: "
  read container

  if [ -d $ROOT/$container ]
  then
    echo "The container already exists"
    exit
  fi

  mkdir $ROOT/$container
  touch $ROOT/$container/index.js
  touch $ROOT/$container/$container.js
  touch $ROOT/$container/$container.styles.js

cat <<EOF > $ROOT/$container/index.js
import $container from './$container';
import styles from './$container.styles';

export { $container, styles };

EOF

cat <<EOF > $ROOT/$container/$container.styles.js
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {

  },
});

EOF

cat <<EOF > $ROOT/$container/$container.js
import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { StoreContext } from '../../store';
import s from './$container.styles';

class $container extends Component {
  render() {
    return (
      <View style={s.container}>
        <Text> $container container </Text>
      </View>
    );
  }
}

export default $container;

EOF

else
  echo $ROOT
  echo "Directory doesn't exist"
fi