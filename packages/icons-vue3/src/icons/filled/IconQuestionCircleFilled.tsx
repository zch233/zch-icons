// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import QuestionCircleFilledSvg from 'icons-base/es/asn/QuestionCircleFilled';

export interface QuestionCircleFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconQuestionCircleFilled: QuestionCircleFilledIconType = (props, context) => (
    <Icon name='QuestionCircleFilled' {...{ ...props, ...context.attrs }} icon={QuestionCircleFilledSvg} />
);

IconQuestionCircleFilled.displayName = 'IconQuestionCircleFilled';
IconQuestionCircleFilled.theme = 'filled';
IconQuestionCircleFilled.originName = 'question-circle';

export default IconQuestionCircleFilled;
