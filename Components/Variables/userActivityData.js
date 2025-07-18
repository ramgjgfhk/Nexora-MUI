export const analyticsData = {
  yearly: {
    active_user: {
      count: 120000,
      percentage: "-9",
      chartData: [
        10000, 10500, 11000, 11200, 12000, 13000, 12500, 13500, 14000, 14500,
        15000, 15300,
      ],
    },
    new_user: {
      count: 45000,
      percentage: "8",
      chartData: [
        3000, 3200, 3300, 3400, 3600, 3800, 4000, 4200, 4400, 4600, 4700, 4900,
      ],
    },
    duration: {
      count: "5m 20s",
      percentage: "3",
      chartData: [310, 300, 295, 320, 330, 315, 305, 300, 310, 305, 295, 290], // seconds
    },
    sent: {
      count: 2400000,
      percentage: "14",
      chartData: [
        180000, 185000, 190000, 200000, 210000, 215000, 220000, 230000, 240000,
        245000, 250000, 260000,
      ],
    },
    converted: {
      count: 10200,
      percentage: "5",
      chartData: [700, 750, 780, 800, 820, 850, 870, 900, 920, 950, 980, 1000],
    },
  },
  monthly: {
    active_user: {
      count: 15300,
      percentage: "4",
      chartData: [
        1200, 1250, 1300, 1280, 1350, 1400, 1420, 1450, 1470, 1500, 1520, 1530,
      ],
    },
    new_user: {
      count: 5200,
      percentage: "6",
      chartData: [400, 420, 430, 410, 450, 470, 480, 500, 510, 520, 530, 540],
    },
    duration: {
      count: "4m 55s",
      percentage: "2",
      chartData: [295, 300, 310, 305, 300, 295, 300, 305, 310, 308, 307, 306],
    },
    sent: {
      count: 312000,
      percentage: "3",
      chartData: [
        24000, 24500, 25000, 25500, 26000, 26500, 27000, 27500, 28000, 28500,
        29000, 29500,
      ],
    },
    converted: {
      count: 1400,
      percentage: "4",
      chartData: [100, 110, 115, 120, 125, 130, 135, 140, 145, 150, 155, 160],
    },
  },
  weekly: {
    active_user: {
      count: 520,
      percentage: "1",
      chartData: [
        60, 65, 70, 75, 80, 85, 90, 95, 85, 80, 75, 70, 65, 60, 55, 50, 60, 70,
        80, 85, 90, 95, 100, 105,
      ],
    },
    new_user: {
      count: 150,
      percentage: "2",
      chartData: [
        10, 12, 13, 15, 14, 16, 18, 17, 16, 15, 14, 13, 12, 11, 13, 14, 15, 16,
        18, 19, 20, 18, 16, 15,
      ],
    },
    duration: {
      count: "5m 10s",
      percentage: "1",
      chartData: [
        310, 300, 305, 308, 306, 300, 299, 298, 300, 305, 310, 312, 313, 314,
        310, 305, 300, 295, 290, 285, 280, 275, 270, 265,
      ],
    },
    sent: {
      count: 9200,
      percentage: "1",
      chartData: [
        600, 620, 630, 640, 650, 660, 670, 680, 700, 720, 740, 760, 780, 800,
        820, 830, 840, 850, 860, 870, 880, 890, 900, 910,
      ],
    },
    converted: {
      count: 45,
      percentage: "0",
      chartData: [
        2, 2, 3, 2, 3, 2, 3, 2, 3, 3, 4, 4, 4, 4, 3, 3, 3, 4, 4, 4, 3, 3, 3, 2,
      ],
    },
  },
  hourly: {
    active_user: {
      count: 43,
      percentage: "3",
      chartData: [2, 3, 4, 5, 6, 7, 6, 5, 4, 3, 4, 5],
    },
    new_user: {
      count: 12,
      percentage: "5",
      chartData: [1, 1, 1, 2, 2, 2, 1, 1, 1, 1, 1, 1],
    },
    duration: {
      count: "4m 48s",
      percentage: "2",
      chartData: [280, 290, 285, 275, 270, 265, 270, 275, 280, 285, 290, 295],
    },
    sent: {
      count: 780,
      percentage: "1",
      chartData: [50, 55, 60, 65, 70, 75, 70, 65, 60, 55, 50, 45],
    },
    converted: {
      count: 5,
      percentage: "0",
      chartData: [0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0],
    },
  },
  today: {
    active_user: {
      count: 520,
      percentage: "1",
      chartData: [
        60, 65, 70, 75, 80, 85, 90, 95, 85, 80, 75, 70, 65, 60, 55, 50, 60, 70,
        80, 85, 90, 95, 100, 105,
      ], // hourly
    },
    new_user: {
      count: 150,
      percentage: "2",
      chartData: [
        10, 12, 13, 15, 14, 16, 18, 17, 16, 15, 14, 13, 12, 11, 13, 14, 15, 16,
        18, 19, 20, 18, 16, 15,
      ], // hourly  
    },
    duration: {
      count: "5m 10s",
      percentage: "1",
      chartData: [
        310, 300, 305, 308, 306, 300, 299, 298, 300, 305, 310, 312, 313, 314,
        310, 305, 300, 295, 290, 285, 280, 275, 270, 265,
      ], // seconds
    },
    sent: {
      count: 9200,
      percentage: "1",
      chartData: [
        600, 620, 630, 640, 650, 660, 670, 680, 700, 720, 740, 760, 780, 800,
        820, 830, 840, 850, 860, 870, 880, 890, 900, 910,
      ], // hourly
    },
    converted: {
      count: 45,
      percentage: "0",
      chartData: [
        2, 2, 3, 2, 3, 2, 3, 2, 3, 3, 4, 4, 4, 4, 3, 3, 3, 4, 4, 4, 3, 3, 3, 2,
      ], // hourly
    },
  },
};
