// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import UpCircleFilledSvg from 'gupo-icons-base/es/asn/UpCircleFilled';

export interface UpCircleFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconUpCircleFilled: UpCircleFilledIconType = (props, context) => (
    <Icon name='UpCircleFilled' {...{ ...props, ...context.attrs }} icon={UpCircleFilledSvg} />
);

IconUpCircleFilled.displayName = 'IconUpCircleFilled';
IconUpCircleFilled.theme = 'filled';
IconUpCircleFilled.originName = 'up-circle';

export default IconUpCircleFilled;
