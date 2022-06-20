// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import PoundCircleFilledSvg from 'icon-base/es/asn/PoundCircleFilled';

export interface PoundCircleFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconPoundCircleFilled: PoundCircleFilledIconType = (props, context) => (
    <Icon name='PoundCircleFilled' {...{ ...props, ...context.attrs }} icon={PoundCircleFilledSvg} />
);

IconPoundCircleFilled.displayName = 'IconPoundCircleFilled';

export default IconPoundCircleFilled;
