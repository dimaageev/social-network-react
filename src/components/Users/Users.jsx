import React from "react";
import s from "./Users.module.css";

const Users = (props) => {
  if (props.users.length === 0) {
    props.setUsers([
      {
        id: 1,
        photoUrl:
          "https://pbs.twimg.com/profile_images/1335501660869767168/6LUdPLjl.jpg",
        followed: false,
        fullName: "Dima Ageev",
        status: "ყველა ნაშა ყლეზე მკიდია!",
        location: { city: "Tbilisi", country: "Georgia" },
      },
      {
        id: 2,
        photoUrl:
          "https://i.pinimg.com/400x300/b8/27/21/b827219a3983aa7d6fe5eb3da8a216ff.jpg",
        followed: true,
        fullName: "Mari Engureli",
        status: "რეპეტიციაზე ვინ მოდიხართ ხვალ?",
        location: { city: "Jvari", country: "Georgia" },
      },
      {
        id: 3,
        photoUrl:
          "https://media-exp1.licdn.com/dms/image/C4E03AQHGpoBG1rzh9Q/profile-displayphoto-shrink_100_100/0/1566341138179?e=1631145600&v=beta&t=ABDKvf1DV5m7Rei8tNAGIeC-xfSSaffhYg7XKLqKmHs",
        followed: true,
        fullName: "Temo Smoev",
        status: "ხვალ სვანეთში ხო არ მიდიხართ ვინმე ჩემები???",
        location: { city: "Den Bosch", country: "Netherlands" },
      },
      {
        id: 4,
        photoUrl: "https://www.advantour.com/img/georgia/didiani.jpg",
        followed: true,
        fullName: "Levan Pipia",
        status: "ჩქიმ სამარგალო <3 ",
        location: { city: "Zugdidi", country: "Georgia" },
      },
    ]);
  }

  return (
    <div>
      {props.users.map((u) => (
        <div key={u.id}>
          <span>
            <div>
              <img src={u.photoUrl} className={s.userPhoto} />
            </div>
            <div>
              {u.followed ? (
                <button
                  onClick={() => {
                    props.unfollow(u.id);
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  onClick={() => {
                    props.follow(u.id);
                  }}
                >
                  Follow
                </button>
              )}
            </div>
          </span>
          <span>
            <span>
              <div>{u.fullName}</div>
              <div>{u.status}</div>
            </span>
            <span>
              <div>{u.location.city}</div>
              <div>{u.location.country}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Users;
