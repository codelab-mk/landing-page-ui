import Image from "next/image";
import Link from "next/link";

export const Team1 = () => {
  const team: {
    id: number;
    name: string;
    designation: string;
    image: string;
    social: { id: number; icon: string; url: string }[];
  }[] = [
    {
      id: 1,
      name: "Laura Martinez",
      designation: "Digital Marketer",
      image: "/assets/images/team/team-1/1.png",
      social: [
        {
          id: 1,
          icon: "/assets/images/icons/icon-white-facebook.svg",
          url: "https://www.facebook.com/profile.php?id=61555618741877",
        },
        {
          id: 2,
          icon: "/assets/images/icons/icon-white-twitter.svg",
          url: "https://www.twitter.com/",
        },
        {
          id: 3,
          icon: "/assets/images/icons/icon-white-dribbble.svg",
          url: "https://www.dribbble.com/",
        },
        {
          id: 4,
          icon: "/assets/images/icons/icon-white-instagram.svg",
          url: "https://www.instagram.com/codelab_mk/",
        },
      ],
    },
    {
      id: 2,
      name: "Jennifer Brown",
      designation: "Graphic Designer",
      image: "/assets/images/team/team-1/2.png",
      social: [
        {
          id: 1,
          icon: "/assets/images/icons/icon-white-facebook.svg",
          url: "https://www.facebook.com/profile.php?id=61555618741877",
        },
        {
          id: 2,
          icon: "/assets/images/icons/icon-white-twitter.svg",
          url: "https://www.twitter.com/",
        },
        {
          id: 3,
          icon: "/assets/images/icons/icon-white-dribbble.svg",
          url: "https://www.dribbble.com/",
        },
        {
          id: 4,
          icon: "/assets/images/icons/icon-white-instagram.svg",
          url: "https://www.instagram.com/codelab_mk/",
        },
      ],
    },
    {
      id: 3,
      name: "Michael Anderson",
      designation: "Web Developer",
      image: "/assets/images/team/team-1/3.png",
      social: [
        {
          id: 1,
          icon: "/assets/images/icons/icon-white-facebook.svg",
          url: "https://www.facebook.com/profile.php?id=61555618741877",
        },
        {
          id: 2,
          icon: "/assets/images/icons/icon-white-twitter.svg",
          url: "https://www.twitter.com/",
        },
        {
          id: 3,
          icon: "/assets/images/icons/icon-white-dribbble.svg",
          url: "https://www.dribbble.com/",
        },
        {
          id: 4,
          icon: "/assets/images/icons/icon-white-instagram.svg",
          url: "https://www.instagram.com/codelab_mk/",
        },
      ],
    },
  ];
  return (
    <section className="ed-team position-relative section-gap">
      <div className="container ed-container">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-8 col-12">
            <div className="ed-section-head text-center">
              <span className="ed-section-head__sm-title">OUR INSTRUCTOR</span>
              <h3 className="ed-section-head__title ed-split-text left">Our Top Class &amp; Expert Instructors</h3>
            </div>
          </div>
        </div>
        <div className="row">
          {/* Single Team */}
          {team.map((team) => (
            <TeamItem team={team} key={team.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

const TeamItem = ({ team }: { team: any }) => {
  return (
    <div className="col-lg-4 col-md-6 col-12">
      <div className="ed-team__card wow fadeInUp" data-wow-duration="1s">
        <div className="ed-team__cover">
          <div className="ed-team__img">
            <Image width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} src={team.image} alt="team-img" />
          </div>
          <ul className="ed-team__social">
            {team.social.map((social: any) => (
              <li key={social.id}>
                <a href={social.url} target="_blank">
                  <Image width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} src={social.icon} alt={social.id} />
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="ed-team__info">
          <p className="ed-team__designation">{team.designation}</p>
          <Link className="ed-team__name" href="/instructor-details">
            {team.name}
          </Link>
        </div>
      </div>
    </div>
  );
};
