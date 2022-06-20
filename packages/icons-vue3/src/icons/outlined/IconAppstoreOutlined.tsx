// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import AppstoreOutlinedSvg from 'icon-base/es/asn/AppstoreOutlined';

export interface AppstoreOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconAppstoreOutlined: AppstoreOutlinedIconType = (props, context) => (
    <Icon name='AppstoreOutlined' {...{ ...props, ...context.attrs }} icon={AppstoreOutlinedSvg} />
);

IconAppstoreOutlined.displayName = 'IconAppstoreOutlined';

export default IconAppstoreOutlined;
