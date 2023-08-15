#/bin/bash

YUM_CMD=$(which yum)
projectName="$1"
sed -i '' 's/yarn codecov/yarn test/g' package.json
sed -i '' "s/react-native-typescript-template/$projectName/g" package.json
if [[ $# -ge 1 ]]
then
    rm -rf .git CODE_OF_CONDUCT.md CONTRIBUTING.md LICENSE README.md
    yarn
    yarn rename $projectName
    cd ios && rm -rf Pods && pod install
else
    echo USAGE
    echo "	$0 <ProjectName>"
fi