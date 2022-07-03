// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import DatabaseOutlinedSvg from 'icons-base/es/asn/DatabaseOutlined';

export interface DatabaseOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconDatabaseOutlined: DatabaseOutlinedIconType = (props, context) => (
    <Icon name='DatabaseOutlined' {...{ ...props, ...context.attrs }} icon={DatabaseOutlinedSvg} />
);

IconDatabaseOutlined.displayName = 'IconDatabaseOutlined';
IconDatabaseOutlined.theme = 'outlined';
IconDatabaseOutlined.originName = 'database';

export default IconDatabaseOutlined;
