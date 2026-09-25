import jsonfile from "jsonfile";
import moment from "moment";
import simpleGit from "simple-git";
import random from "random";

const path = "./data.json";

const messages = [
  "update",
  "fix bug",
  "add feature",
  "refactor code",
  "improve performance",
  "update docs",
  "minor tweak",
  "cleanup",
  "wip",
  "patch",
];

const randomMessage = () => messages[random.int(0, messages.length - 1)];

const makeCommits = (n) => {
  if (n === 0) return simpleGit().push();

  const x = random.int(0, 54);
  const y = random.int(0, 6);
  const date = moment().subtract(1, "y").add(1, "d").add(x, "w").add(y, "d").format();

  const data = { date: date };
  const msg = randomMessage();
  console.log(msg, date);

  jsonfile.writeFile(path, data, () => {
    simpleGit()
      .add([path])
      .commit(msg, { "--date": date }, makeCommits.bind(this, --n));
  });
};

makeCommits(1000);