// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import DownCircleFilledSvg from 'icons-base/es/asn/DownCircleFilled';

export interface DownCircleFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconDownCircleFilled: DownCircleFilledIconType = (props, context) => (
    <Icon name='DownCircleFilled' {...{ ...props, ...context.attrs }} icon={DownCircleFilledSvg} />
);

IconDownCircleFilled.displayName = 'IconDownCircleFilled';
IconDownCircleFilled.theme = 'filled';
IconDownCircleFilled.originName = 'down-circle';

export default IconDownCircleFilled;
