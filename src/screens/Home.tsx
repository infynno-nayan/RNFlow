import React from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

function Section({children, title}: any): React.JSX.Element {
  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>{title}</Text>
      <Text style={styles.sectionDescription}>{children}</Text>
    </View>
  );
}

const Home = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.child}>
        <Section title="Welcome to React Native">
          We have integrate <Text style={styles.highlight}>CI/CD Pipeline</Text>{' '}
          workflows with github and sync build upload on google play console.
          {'\n'}The app is built using React Native CLI...
        </Section>
        <Section title="Requirement">
          Google cloud console{'\n'}Google play console
        </Section>
        <Section title="Third Party Library">Husky{'\n'}Fastlane</Section>
        <Section title="Github">
          Created a github action workflow to build and upload the app to google
          play console. The workflow is triggered on push to the main branch.
        </Section>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  child: {
    paddingHorizontal: 10,
    paddingBottom: 20,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
    color: Colors.dark,
  },
});

export default Home;
