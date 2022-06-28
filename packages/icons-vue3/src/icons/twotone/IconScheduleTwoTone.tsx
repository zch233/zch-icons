// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import ScheduleTwotoneSvg from 'gupo-icons-base/es/asn/ScheduleTwotone';

export interface ScheduleTwotoneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconScheduleTwotone: ScheduleTwotoneIconType = (props, context) => (
    <Icon name='ScheduleTwotone' {...{ ...props, ...context.attrs }} icon={ScheduleTwotoneSvg} />
);

IconScheduleTwotone.displayName = 'IconScheduleTwotone';
IconScheduleTwotone.theme = 'twotone';
IconScheduleTwotone.originName = 'schedule';

export default IconScheduleTwotone;
