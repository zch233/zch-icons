// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import AppstoreAddOutlinedSvg from 'icons-base/es/asn/AppstoreAddOutlined';

export interface AppstoreAddOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconAppstoreAddOutlined: AppstoreAddOutlinedIconType = (props, context) => (
    <Icon name='AppstoreAddOutlined' {...{ ...props, ...context.attrs }} icon={AppstoreAddOutlinedSvg} />
);

IconAppstoreAddOutlined.displayName = 'IconAppstoreAddOutlined';
IconAppstoreAddOutlined.theme = 'outlined';
IconAppstoreAddOutlined.originName = 'appstore-add';

export default IconAppstoreAddOutlined;
