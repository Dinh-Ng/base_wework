# react-native-code-base

React Native boilerplate

## Tech Stack

| Library          | Category         | Version | Description                                    |
| ---------------- | ---------------- | ------- | ---------------------------------------------- |
| React Native     | Mobile Framework | v0.70   | The best cross-platform mobile framework       |
| React            | UI Framework     | v18     | The most popular UI framework in the world     |
| TypeScript       | Language         | v4      | Static typechecking                            |
| React Navigation | Navigation       | v6      | Performant and consistent navigation framework |
| RN Reanimated    | Animations       | v2      | Beautiful and performant animations            |
| AsyncStorage     | Persistence      | v1      | State persistence                              |
| Flipper          | Debugger         |         | Native debugging                               |
| Hermes           | JS engine        |         | Fine-tuned JS engine for RN                    |
| Jest             | Test Runner      | v26     | Standard test runner for JS apps               |

// TODO: Add data-dns
| date-fns | Date library | v2 | Excellent date library |

## Add new screen

1. Create new folder in screens folder with the name of the screen name
2. Add 2 file: index.tsx and styles.ts in this new folder
3. If screen have many component: Create "components" folder to add component file to this

## Folder structures

```
.buckconfig
.eslintrc.js
.gitignore
.prettierrc.js
.ruby-version
.watchmanconfig
Gemfile
README.md
__tests__
   └── App-test.tsx
app.json
babel.config.js
index.js
metro.config.js
package.json
src
├── assets
├── components
├── models
├── navigation
│   ├── config
│   │   ├── appRoutes.ts
│   │   ├── options.ts
│   │   └── transition.ts
│   ├── navigator
│   │   ├── AuthNavigator.tsx
│   │   ├── RootNavigator.tsx
│   │   └── UnAuthNavigator.tsx
│   └── navigationServices.ts
├── screens
├── services
│   └── api
└── stores
    ├── sagas
    │   └── rootSaga.ts
    ├── slices
    │   └── userSlice.ts
    └── index.ts
tsconfig.json
```
