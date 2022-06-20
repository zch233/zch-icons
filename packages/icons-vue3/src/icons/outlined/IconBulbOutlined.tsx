// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import BulbOutlinedSvg from 'icon-base/es/asn/BulbOutlined';

export interface BulbOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconBulbOutlined: BulbOutlinedIconType = (props, context) => <Icon name='BulbOutlined' {...{ ...props, ...context.attrs }} icon={BulbOutlinedSvg} />;

IconBulbOutlined.displayName = 'IconBulbOutlined';

export default IconBulbOutlined;
