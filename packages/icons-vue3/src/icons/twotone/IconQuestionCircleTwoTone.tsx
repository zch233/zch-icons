// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import QuestionCircleTwotoneSvg from 'gupo-icons-base/es/asn/QuestionCircleTwotone';

export interface QuestionCircleTwotoneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconQuestionCircleTwotone: QuestionCircleTwotoneIconType = (props, context) => (
    <Icon name='QuestionCircleTwotone' {...{ ...props, ...context.attrs }} icon={QuestionCircleTwotoneSvg} />
);

IconQuestionCircleTwotone.displayName = 'IconQuestionCircleTwotone';
IconQuestionCircleTwotone.theme = 'twotone';
IconQuestionCircleTwotone.originName = 'question-circle';

export default IconQuestionCircleTwotone;
