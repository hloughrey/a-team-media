const baseFeatures = [
    {
        order: 3,
        feature: 'Guest arrival'
    },
    {
        order: 4,
        feature: 'Ceremony'
    },
    {
        order: 5,
        feature: 'Guests candid shots'
    },
    {
        order: 6,
        feature: 'Speeches'
    },
    {
        order: 10,
        feature: '3-5 minute highlights'
    },
    {
        order: 11,
        feature: 'Documentary Edit (between 60 and 120 mins)'
    }
];

const cuttingCake = [
    {
        order: 7,
        feature: 'Cutting of the cake'
    }
];

const firstDance = [
    {
        order: 8,
        feature: 'First Dance + up to first 3 dances'
    }
];

const multipleDVD = [
    {
        order: 12,
        feature:
            '2 x DVD or mix of DVD + Blu-ray + Full HD USB Media in Premium presentation case'
    }
];

const singleDVD = [
    {
        order: 12,
        feature: '1 x DVD + Blu-ray in movie style case  + Full HD USB'
    }
];

const goldPackage = [
    ...baseFeatures,
    ...cuttingCake,
    ...multipleDVD,
    ...firstDance,
    {
        order: 1,
        feature: '£1500'
    },
    {
        order: 2,
        feature: 'Bride or Groom Preparation (at 1 venue*)'
    },

    {
        order: 9,
        feature:
            'Guest Interviews (great fun if guests allow) at venue till 10pm'
    }
];

const silverPackage = [
    ...baseFeatures,
    ...cuttingCake,
    ...multipleDVD,
    ...firstDance,
    {
        order: 1,
        feature: '£1200'
    }
];

const bronzePackage = [
    ...baseFeatures,
    ...cuttingCake,
    ...singleDVD,
    {
        order: 1,
        feature: '£950'
    },
    {
        order: 8,
        feature: 'First Dance'
    }
];

const pewterPackage = [
    ...baseFeatures,
    ...singleDVD,
    {
        order: 1,
        feature: '£750'
    }
];

export { goldPackage, silverPackage, bronzePackage, pewterPackage };
