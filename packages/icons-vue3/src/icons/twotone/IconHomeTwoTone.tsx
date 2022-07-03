// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import HomeTwotoneSvg from 'icons-base/es/asn/HomeTwotone';

export interface HomeTwotoneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconHomeTwotone: HomeTwotoneIconType = (props, context) => <Icon name='HomeTwotone' {...{ ...props, ...context.attrs }} icon={HomeTwotoneSvg} />;

IconHomeTwotone.displayName = 'IconHomeTwotone';
IconHomeTwotone.theme = 'twotone';
IconHomeTwotone.originName = 'home';

export default IconHomeTwotone;
