#!/bin/bash

ROOT=src/components/

if [ -d $ROOT ]
then
  echo "Enter component name: "
  read component

  if [ -d $ROOT/$component ]
  then
    echo "The component already exists"
    exit
  fi

  mkdir $ROOT/$component
  touch $ROOT/$component/index.js
  touch $ROOT/$component/$component.js
  touch $ROOT/$component/$component.styles.js

cat <<EOF > $ROOT/$component/index.js
import $component from './$component';
import styles from './$component.styles';

export { $component, styles };

EOF

cat <<EOF > $ROOT/$component/$component.styles.js
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {

  },
});

EOF

cat <<EOF > $ROOT/$component/$component.js
import React, { Component } from 'react';
import { Text, View } from 'react-native';
import s from './$component.styles';

const $component = ({  }) => {
  return (
    <View style={s.container}>
      <Text> $component component </Text>
    </View>
  );
}

export default $component;

EOF

else
  echo $ROOT
  echo "Directory doesn't exist"
fi