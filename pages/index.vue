<template>
  <v-container>
    <v-app-bar app clipped-right flat dark height="100" class="profile-app-bar">
      <image-profile :image="member.picture"></image-profile>
      <v-toolbar-title class="title white--text pl-0">
        <div class="profile-title">
          <h2 class="text-white">
            {{ member.firstName }} {{ member.lastName }}
          </h2>
          <p class="text-white">
            <v-icon small>mdi mdi mdi-map-marker</v-icon> {{ member.city }}
            {{ member.country }}
          </p>
        </div>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-app-bar-nav-icon
        color="white"
        @click.stop="drawer = !drawer"
      ></v-app-bar-nav-icon>
    </v-app-bar>

    <v-navigation-drawer app clipped right v-model="drawer">
      <v-list>
        <v-list-item
          v-for="(value, name) in member"
          :key="name"
          link
          v-show="name != 'picture'"
        >
          <v-list-item-content>
            <v-list-item-title
              ><small>
                <v-icon small class="mb-1">{{ itemIcon(name) }}</v-icon>
                {{ $t(name) }}</small
              ></v-list-item-title
            >
            <v-list-item-title>{{ value }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <v-form ref="form" v-model="valid" v-on:submit.prevent="update">
        <h2 class="v-heading text-h4 text-sm-h4 mb-3 mt-6">
          {{ $t("membershipeTitle") }}
        </h2>
        <div data-v-786c28b4="" class="pb-3 pt-1">
          <p>
            {{ $t("membershipeDescription") }}
          </p>
        </div>
        <v-row>
          <v-col cols="12" xl="8" lg="12" md="12" sm="12">
            <v-card class="card pl-6 pr-6 pt-4 pb-12" outlined flat>
              <v-row>
                <v-col cols="12" md="12">
                  <v-text-field
                    :label="$t('lastName')"
                    v-model="member.lastName"
                    class="mandatory"
                    required
                    :rules="requiredRules"
                  ></v-text-field>
                </v-col>

                <v-col cols="12" md="12">
                  <v-text-field
                    :label="$t('firstName')"
                    v-model="member.firstName"
                    class="mandatory"
                    required
                    :rules="requiredRules"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="12">
                  <v-text-field
                    :label="$t('street')"
                    v-model="member.street"
                    class="mandatory"
                    required
                    :rules="requiredRules"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                  <v-text-field
                    :label="$t('zipCode')"
                    v-model="member.zipCode"
                    class="mandatory"
                    required
                    :rules="requiredRules"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                  <v-text-field
                    :label="$t('city')"
                    v-model="member.city"
                    class="mandatory"
                    required
                    :rules="requiredRules"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                  <v-text-field
                    :label="$t('country')"
                    v-model="member.country"
                    hide-details
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" xl="8" lg="12" md="12" sm="12">
            <v-btn
              color="red darken-2"
              large
              dark
              class="float-right disabled-look-not-working"
              :disabled="!valid"
              type="submit"
            >
              {{ $t("save") }}
            </v-btn>
            <v-btn color="red" text large class="float-right">
              {{ $t("cancel") }}
            </v-btn>
          </v-col>
        </v-row>
      </v-form>
    </v-main>
  </v-container>
</template>

<script>
import vueDataProxy from "vue-data-proxy";
import * as memberProxy from "~/proxy/member-proxy";

import ImagePofile from "~/components/image-profile";

export default {
  layout: "empty",
  components: { ImagePofile },
  data() {
    return {
      drawer: true,
      requiredRules: [(v) => !!v || this.$t("reuiredField")],
      valid: true,
    };
  },

  mounted() {
    this.$store.dispatch("memberStore/loadMember", this.$axios);
  },

  computed: {
    ...vueDataProxy({
      member: {
        fetch() {
          return this.$store.state.memberStore.member;
        },
        commit(member) {
          this.$store.dispatch("memberStore/updateMember", member);
        },
      },
    }),
  },

  methods: {
    update() {
      memberProxy
        .update(this.$axios, this.$store, this.member)
        .then((response) => {
          alert("success");
        })
        .catch((error) => {
          alert(error);
        });
    },
    itemIcon(itemName) {
      switch (itemName) {
        case "firstName":
          return "mdi mdi-account";
        case "lastName":
          return "mdi mdi mdi-account";
        case "street":
          return "mdi mdi-home-map-marker";
        case "zipCode":
          return "mdi mdi-map-marker";
        case "city":
          return "mdi mdi-city-variant-outline";
        case "country":
          return "mdi mdi-map-marker";

        default:
          return "";
      }
    },
  },
};
</script>




