const forkobun = [1, 2, 3];
for (let i = 0; i < forkobun.length; i++) {
  console.log(forkobun[i]);
}
let whilekobun = 2;
while (whilekobun <= 4) {
  console.log(whilekobun);
  whilekobun++;
}

const ifkobun = "C";

if (ifkobun === "A") {
  console.log("Aです");
} else if (ifkobun === "B") {
  console.log("Bです");
} else {
  console.log("その他です");
}

const switchkobun = "C";
switch (switchkobun) {
  case "A":
    console.log("A");
    break;
  case "B":
    console.log("B");
    break;
  default:
    console.log("その他です");
    break;
}

try {
  throw new Error("例外発生");
} catch (error) {
  console.log(error.message);
}
