// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import AppstoreTwotoneSvg from 'gupo-icons-base/es/asn/AppstoreTwotone';

export interface AppstoreTwotoneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconAppstoreTwotone: AppstoreTwotoneIconType = (props, context) => (
    <Icon name='AppstoreTwotone' {...{ ...props, ...context.attrs }} icon={AppstoreTwotoneSvg} />
);

IconAppstoreTwotone.displayName = 'IconAppstoreTwotone';
IconAppstoreTwotone.theme = 'twotone';
IconAppstoreTwotone.originName = 'appstore';

export default IconAppstoreTwotone;
