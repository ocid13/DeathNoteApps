const getInitialData = () => [
    {
      id: 1,
      title: "Madara",
      body: "Madara Uchiha (うちはマダラ, Uchiha Madara) adalah seorang pemimpin legendaris dari klan Uchiha. Ia mendirikan Konohagakure bersama saingannya, Hashirama Senju, dengan tujuan awal untuk era perdamaian. Ketika keduanya tidak bisa setuju bagaimana untuk mencapai perdamaian itu, mereka bertarung untuk menguasai desa, sebuah konflik yang menyebabkan kematian Madara. Dia menulis ulang kematianya dan bersembunyi untuk mengakhiri konflik dunia. Tidak dapat menyelesaikan rencana itu selama kehidupannya, ia mempercayakan pengetahuan dan rencananya pada Obito Uchiha tak lama sebelum kematiannya.",
      archived: false,
      createdAt: "2022-11-04",
    },
    {
      id: 2,
      title: "Obito",
      body: "Obito Uchiha (うちはオビト, Uchiha Obito) adalah anggota klan Uchiha dari Konohagakure. Dia diyakini telah meninggal selama Perang Dunia Shinobi Ketiga, satu-satunya warisan yang masih ada adalah Sharingan yang dia berikan kepada rekan setimnya, Kakashi Hatake. Sebenarnya, Obito diselamatkan dari kematian dan dilatih oleh Madara Uchiha, namun kejadian perang tersebut membuat Obito kecewa dengan kenyataan, dan dia mewarisi rencana Madara untuk menciptakan dunia yang ideal. Beroperasi di bawah nama Tobi (トビ, Tobi) dan Madara Uchiha sendiri, Obito dengan halus mengambil alih kendali Akatsuki, menggunakan mereka sebagai alat untuk memuluskan tujuannya, hingga akhirnya mengungkap identitasnya ke publik dan memulai Perang Dunia Shinobi Keempat. Namun, menjelang akhir perang, Obito tersadarkan hatinya dan, sebagai penebusan, mengorbankan hidupnya untuk menyelamatkan dunia yang telah ia coba hancurkan.",
      archived: false,
      createdAt: "2022-11-04",
    },
    {
      id: 3,
      title: "Itachi",
      body: "Itachi Uchiha (団扇 鼬, Uchiha Itachi) adalah seorang anak ajaib klan Uchiha dari Konohagakure. Ia menjadi seorang penjahat internasional setelah membunuh seluruh klan, dan hanya menyelamatkan adiknya, Sasuke. Dia kemudian bergabung dengan organisasi kriminal internasional yang dikenal sebagai Akatsuki, dengan aktivitas yang juga membawa dia pada konflik dengan Ninja Konoha — termasuk Sasuke — yang berusaha untuk membalas dendam klan mereka. Setelah kematiannya, motif Itachi yang ternyata lebih rumit daripada apa yang tampak akhirnya terungkap dan bahwa tindakannya itu hanya demi kepentingan saudara dan desanya, dan menjadi shinobi yang setia kepada Konohagakure sampai akhir.",
      archived: false,
      createdAt: "2022-11-04",
    },
    {
      id: 4,
      title: "Nagato",
      body: "Nagato (長門, Nagato) adalah seorang pemimpin organisasi Akatsuki dari Amegakure. Setelah menjadi yatim piatu karena perang, Nagato membantu membentuk kelompok Akatsuki dengan tujuan mengakhiri perang dengan jalan kedamaian. Namun, sahabatnya yang juga pemimpin kelompok, Yahiko terbunuh karena menyebarkan jalan perdamaian, sehingga membuat Nagato kehilangan harapan. Dia menetapkan dirinya sebagai Pain (ペイン, Pein) dengan menggunakan jutsu Enam Jalan Pain> Bersama dengan Konan, ia mulai memimpin Akatsuki yang baru, yang akan menggunakan cara kekerasan untuk mencapai tujuan mereka.",
      archived: false,
      createdAt: "2022-11-04",
    },
    {
      id: 5,
      title: "Sasuke",
      body: "Sasuke Uchiha (団扇 佐助, Uchiha Sasuke) adalah salah satu anggota terakhir klan Uchiha yang masih bertahan dari Konohagakure. Setelah kakaknya, Itachi, membantai klan mereka, Sasuke berusaha mewujudkan misinya dalam rangka untuk membalas dendam dengan membunuh Itachi. Dia dimasukkan ke Tim 7 saat menjadi seorang ninja dan, melalui persaingan dengan rival dan sahabatnya, Naruto Uzumaki, Sasuke mulai mengembangkan keahliannya. Tidak puas dengan kemajuannya, ia pergi dari Konoha sehingga ia bisa memperoleh kekuatan yang dibutuhkan untuk membalas dendam. Tahun-tahunnya untuk membalas dendam menjadi semakin berat, tidak masuk akal dan mengasingkan dia dari orang lain, sehingga membuatnya menjadi penjahat internasional. Setelah membuktikan dirinya sebagai penolong dalam mengakhiri Perang Dunia Shinobi Keempat dan dengan senang hati dibebaskan oleh Naruto, Sasuke memutuskan untuk kembali ke Konoha dan mengabdikan hidupnya untuk membantu melindungi desa serta penduduknya.",
      archived: false,
      createdAt: "2022-11-04",
    },
  ];
  
  const showFormattedDate = (date) => {
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return new Date(date).toLocaleDateString("id-ID", options);
  };
  
  export { getInitialData, showFormattedDate };
  