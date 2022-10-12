// Expected Result :
// [
//   { name: 'Rian Nugraha', school_name: 'PLMK-JKT' },
//   { name: 'Ari Santoso', school_name: 'GRSR-JKT' },
//   { name: 'Rahman Sunggara', school_name: 'GELM-JKT' },
// ]
// Direction :
// Return a formatted array for students of specific school using id of school.

const source = [
  {
    id: "1",
    data: {
      first_name: "Rian",
      last_name: "Nugraha",
    },
    school: {
      id: "1",
      data: "PLMK-JKT",
    },
  },
  {
    id: "2",
    full_name: "Ari Santoso",
    school: {
      id: "1",
      short_name: "GRSR",
      data: "JKT",
    },
  },
  {
    id: "3",
    data: {
      first_name: "Rahman",
      last_name: "Sunggara",
    },
    school: {
      id: "1",
      short_name: "GELM",
      data: "JKT",
    },
  },
  {
    id: "4",
    data: {
      first_name: "Rian",
      last_name: "Nugraha",
    },
    school: {
      id: "2",
      data: "PLMK-BDG",
    },
  },
];

function result(rawData) {
  return rawData.map((studentRecord) => {
    var school_name
    if(studentRecord.school.short_name != null){
      school_name = [
          studentRecord?.school?.short_name,
          studentRecord?.school?.data,
        ].join("-")      
    }else if(studentRecord.school.short_name == null || undefined){
      school_name = studentRecord?.school?.data     
    }

    if (studentRecord.data != null) {
      return {
        name: [
          studentRecord?.data?.first_name,
          studentRecord?.data?.last_name,
        ].join(" "),                
        school_name
      };
    } else if (studentRecord.full_name != null) {
      return {
        name: studentRecord?.full_name,
        school_name
      };
    }
  });
}

console.log(result(source));