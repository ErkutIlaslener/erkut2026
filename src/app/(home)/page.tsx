import { HydrateClient } from "@/trpc/server";
import { HomeView } from "@/modules/home/ui/views/home-view";

const photos = [
  "https://res.cloudinary.com/dulj6p1jb/image/upload/v1753433560/0000079853-719_enmfsq.jpg",
  "https://res.cloudinary.com/dulj6p1jb/image/upload/v1753433556/0000082692-189_v8t1qm.jpg",
  "https://res.cloudinary.com/dulj6p1jb/image/upload/v1753433556/0000079853-716_wqnogr.jpg",
  "https://res.cloudinary.com/dulj6p1jb/image/upload/v1753433554/0000079853-715_wik2xj.jpg",
  "https://res.cloudinary.com/dulj6p1jb/image/upload/v1753433551/0000079853-718_r67z2c.jpg",
  "https://res.cloudinary.com/dulj6p1jb/image/upload/v1753433550/0000079853-725_pl0hco.jpg",
  "https://res.cloudinary.com/dulj6p1jb/image/upload/v1753433540/0000079853-717_oyoep5.jpg",
  "https://res.cloudinary.com/dulj6p1jb/image/upload/v1753432556/0000079853-724_hyrrmd.jpg",
  "https://res.cloudinary.com/dulj6p1jb/image/upload/v1753432088/IMG_9570_mzknud.jpg",
  "https://res.cloudinary.com/dulj6p1jb/image/upload/v1753432086/9_16_kkhmi7.jpg",
  "https://res.cloudinary.com/dulj6p1jb/image/upload/v1753432082/9_14_duoixa.jpg",
  "https://res.cloudinary.com/dulj6p1jb/image/upload/v1753432081/IMG_5087_t1buff.jpg",
  "https://res.cloudinary.com/dulj6p1jb/image/upload/v1753432078/IMG_9541_ocuusb.jpg",
  "https://res.cloudinary.com/dulj6p1jb/image/upload/v1753432078/IMG_9566_ckoyrd.jpg",
  "https://res.cloudinary.com/dulj6p1jb/image/upload/v1753432058/IMG_9527_owoy4e.jpg",
  "https://res.cloudinary.com/dulj6p1jb/image/upload/v1753432057/IMG_9523_zfhouw.jpg",
  "https://res.cloudinary.com/dulj6p1jb/image/upload/v1753432056/IMG_5119_bebk8r.jpg",
  "https://res.cloudinary.com/dulj6p1jb/image/upload/v1753432050/ERK01641_kopya_dltm6w.jpg",
  "https://res.cloudinary.com/dulj6p1jb/image/upload/v1753432043/0000079853-730_x3tfak.jpg",
  "https://res.cloudinary.com/dulj6p1jb/image/upload/v1753432034/0000079853-731_cx5fyd.jpg",
  "https://res.cloudinary.com/dulj6p1jb/image/upload/v1753432033/IMG_5191_lz3iy3.jpg",
  "https://res.cloudinary.com/dulj6p1jb/image/upload/v1753432027/IMG_5442_byidk8.jpg",
  "https://res.cloudinary.com/dulj6p1jb/image/upload/v1753432023/IMG_7338_u09rjz.jpg",
];

const Page = () => {
  return (
    <HydrateClient>
      <HomeView photos={photos} />
    </HydrateClient>
  );
};

export default Page;
