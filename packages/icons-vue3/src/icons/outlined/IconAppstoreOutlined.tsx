// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import AppstoreOutlinedSvg from 'gupo-icons-base/es/asn/AppstoreOutlined';

export interface AppstoreOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconAppstoreOutlined: AppstoreOutlinedIconType = (props, context) => (
    <Icon name='AppstoreOutlined' {...{ ...props, ...context.attrs }} icon={AppstoreOutlinedSvg} />
);

IconAppstoreOutlined.displayName = 'IconAppstoreOutlined';
IconAppstoreOutlined.theme = 'outlined';
IconAppstoreOutlined.originName = 'appstore';

export default IconAppstoreOutlined;
