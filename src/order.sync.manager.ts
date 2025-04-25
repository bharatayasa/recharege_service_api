import {
    consumeUserData, 
    consumeUsersDataUpdate, 
    consumeResetPassword
} from './routes/comsume_user/consumer.pod.user';

import {
    syncDisclaimerData
} from './routes/consumeDisclaimer/consume.disclaimer';

import {
    consumeUpdateQuestionMatrix, 
    consumeInsertQuestionMatrix
} from './routes/consume_matrix/consumer.matrix';

import {
    fetchInitialGroupeData, 
    consumeGroupData
} from './routes/consume_group/consumer.group'

import {
    fetchInitialVersionData,
    consumeVersionData
} from './routes/consume_version/consumer.version'

import {
    fetchInitialPodData,
} from './routes/consume.pod/consumer.pod'

import {
    consumePodSetting, 
    consumeUpdatePodSetting
} from './routes/consume_pod_settimg/consumer.pod.setting'

const runFetchFunctionsInOrder = async () => {
    console.log("🔄 Starting data synchronization...");

    await fetchInitialVersionData()
    await fetchInitialGroupeData()
    await fetchInitialPodData()

    console.log("🎉 All Starting data synchronization executed successfully in order.");
};

const runFunctionsInOrder = async () => {
    try {
        await consumeUserData()
        await consumeUsersDataUpdate()
        await consumeResetPassword()
        await syncDisclaimerData()
        await consumeUpdateQuestionMatrix()
        await consumeInsertQuestionMatrix() 
        await consumeGroupData()
        await consumePodSetting()
        await consumeUpdatePodSetting()

        console.log('All functions executed successfully in order');
    } catch (error) {
        console.error('Error occurred while executing functions:', error);
    }
};

export {
    runFunctionsInOrder, 
    runFetchFunctionsInOrder
}
