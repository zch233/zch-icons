// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import AppstoreAddOutlinedSvg from 'icon-base/es/asn/AppstoreAddOutlined';

export interface AppstoreAddOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconAppstoreAddOutlined: AppstoreAddOutlinedIconType = (props, context) => (
    <Icon name='AppstoreAddOutlined' {...{ ...props, ...context.attrs }} icon={AppstoreAddOutlinedSvg} />
);

IconAppstoreAddOutlined.displayName = 'IconAppstoreAddOutlined';

export default IconAppstoreAddOutlined;
