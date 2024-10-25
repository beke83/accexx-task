import {
  Image,
  StyleSheet,
  Platform,
  SafeAreaView,
  Text,
  View,
  ScrollView,
  ScrollViewBase,
  Pressable,
} from "react-native";
import { useEffect } from "react";
import { Link, router, useNavigation } from "expo-router";
import { StatusBar } from "expo-status-bar";
import Header from "@/components/home/Header";
import Adverts from "@/components/home/Adverts";
import Group from "@/components/group/Group";
import GroupContent from "@/components/group/GroupContent";

export default function Home() {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, []);

  return (
    <View>
      <View style={styles.headerContainer}>
        <Header />
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ position: "relative" }}
      >
        <View style={styles.container}>
          <View style={styles.quickLinks}>
            <View style={styles.quickLinks_items}>
              <Image source={require("@/assets/images/marketplace.png")} />
              <Text style={styles.quicklinks_name}>Market Place</Text>
            </View>
            <View style={styles.quickLinks_items}>
              <Image source={require("@/assets/images/utility.png")} />
              <Text style={styles.quicklinks_name}>Utilities</Text>
            </View>
            <View style={styles.quickLinks_items}>
              <Image source={require("@/assets/images/events.png")} />
              <Text style={styles.quicklinks_name}>Events</Text>
            </View>
            <View style={styles.quickLinks_items}>
              <Image source={require("@/assets/images/more.png")} />
              <Text style={styles.quicklinks_name}>More</Text>
            </View>
          </View>

          <View style={{ marginTop: 30 }}>
            <Text
              style={{
                color: "#202D37",
                fontFamily: "NohemiBold",
                fontWeight: "500",
                fontSize: 16,
              }}
            >
              Adverts
            </Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={styles.advertContainer}>
                <Adverts color={"#FF7043"} />
                <Adverts color={"#075E39"} />
              </View>
            </ScrollView>
          </View>
          
        </View>
        <Pressable
            onPress={() => router.push('/location')}
            style={{ position: "absolute", right: 30, bottom: 200, zIndex: 999 }}
          >
            <View>
              <Image source={require("@/assets/images/add-group.png")} />
            </View>
          </Pressable>
        <GroupContent />

        {/* <Link style={{ fontFamily: 'NohemiRegular' }} href='/onboarding'>
                    <View>
                        <Text style={styles.text}>Click to go to onboarding screen</Text>
                    </View>
                </Link>
                <Link style={{ fontFamily: 'NohemiRegular' }} href='/auth/login'>
                    <View>
                        <Text style={styles.text}>Click to go to Login screen</Text>
                    </View>
                </Link>
                <Link style={{ fontFamily: 'NohemiRegular' }} href='/auth/verify'>
                    <View>
                        <Text style={styles.text}>Click to go to verify screen</Text>
                    </View>
                </Link>
                <Link style={{ fontFamily: 'NohemiRegular' }} href='/auth/verification-success'>
                    <View>
                        <Text style={styles.text}>Click to go to verify success</Text>
                    </View>
                </Link>
                <Link style={{ fontFamily: 'NohemiRegular' }} href='/location'>
                    <View>
                        <Text style={styles.text}>Click to go to location success</Text>
                    </View>
                </Link> */}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
  },
  headerContainer: {
    paddingHorizontal: 16,
    paddingTop: Platform.OS === "ios" ? 60 : 40,
    paddingBottom: 10,
  },
  text: {
    fontSize: 20,
    marginTop: 50,
  },
  quickLinks: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
  },
  quickLinks_items: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    color: "#98A2B3",
  },
  quicklinks_name: {
    fontSize: 11,
    color: "#98A2B3",
    marginTop: 3,
    fontWeight: "500",
  },
  advertContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 15,
  },
  center: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    // marginTop: 20,
  },
});
