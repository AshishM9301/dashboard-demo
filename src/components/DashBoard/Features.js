import React from "react";
import Avatar from "react-avatar";

function Features() {
  var multiAvatar = [
    { id: 1, name: "A B" },
    { id: 2, name: "AB C" },
    { id: 3, name: "ABC D" },
    { id: 4, name: "Abcd D" },
  ];

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }

  console.log(getRandomInt(0, 10));

  var colors = [
    "gray",
    "indigo",
    "light-blue",
    "blue",
    "green",
    "rose",
    "amber",
  ];

  var colorRandomiser = () => {
    return `--blue-${colors[getRandomInt(0, 7)]}-900`;
  };

  console.log(colorRandomiser());

  return (
    <div className="mt-8 flex">
      <Avatar
        color={Avatar.getRandomColor("sitebase", ["red", "green", "blue"])}
        name="Foo Bar"
        className="rounded-full"
        size="2rem"
      />
      <div className="flex relative -ml-8">
        {multiAvatar.map((avatar) => (
          <Avatar
            name={avatar.name}
            className="rounded-full absolute"
            style={{
              left: `${avatar.id * 16}px`,
              backGroundColor: colorRandomiser(),
            }}
            size="2rem"
          />
        ))}
      </div>
    </div>
  );
}

export default Features;
