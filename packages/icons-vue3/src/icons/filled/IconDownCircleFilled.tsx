// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import DownCircleFilledSvg from 'icon-base/es/asn/DownCircleFilled';

export interface DownCircleFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconDownCircleFilled: DownCircleFilledIconType = (props, context) => (
    <Icon name='DownCircleFilled' {...{ ...props, ...context.attrs }} icon={DownCircleFilledSvg} />
);

IconDownCircleFilled.displayName = 'IconDownCircleFilled';

export default IconDownCircleFilled;
