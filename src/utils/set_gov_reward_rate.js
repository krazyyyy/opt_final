import { AppActions } from '../constants/constants.js';
const { types } = require('@algo-builder/web');
const { OptAppID, tryExecuteTx } = require('./common.js');

// export async function setGovernanceRewardRate(
//     web,
//     adminAddr,
//     network,
//     rewardRateNumber,
//     rewardRateDecimals
// ) {
//     console.log("Reward rate no. ", rewardRateNumber);
//     console.log("Reward rate decimals. ", rewardRateDecimals);

//     // Sets the reward rate(apy) for the current governance period
//     const txParams = {
//         type: types.TransactionType.CallApp,
//         sign: types.SignType.SecretKey,
//         fromAccountAddr: adminAddr,
//         appID: OptAppID(network),
//         payFlags: { totalFee: 1000 },
//         appArgs: [
//             AppActions.SET_GOV_REWARD_RATE,
//             `int:${rewardRateNumber}`,
//             `int:${rewardRateDecimals}`
//         ]
//     };

//     await tryExecuteTx(web, txParams);
// }


export async function setGovernanceRewardRate(
    adminAddr,
    network,
    rewardRateNumber,
    rewardRateDecimals
) {
    const url = "http://127.0.0.1:5000/blockchain/set_governance_reward_rate";
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            admin_wallet: adminAddr,
            // reward_rate_number: rewardRateNumber,
            // reward_rate_decimals: rewardRateDecimals
        })
    };
    
    try {
        const response = await fetch(url, requestOptions);
        const result = await response.text();
        return result;
    } catch (error) {
        console.log('error', error);
    }
}
