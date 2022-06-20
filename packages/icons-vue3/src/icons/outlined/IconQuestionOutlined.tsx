// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import QuestionOutlinedSvg from 'icon-base/es/asn/QuestionOutlined';

export interface QuestionOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconQuestionOutlined: QuestionOutlinedIconType = (props, context) => (
    <Icon name='QuestionOutlined' {...{ ...props, ...context.attrs }} icon={QuestionOutlinedSvg} />
);

IconQuestionOutlined.displayName = 'IconQuestionOutlined';

export default IconQuestionOutlined;
