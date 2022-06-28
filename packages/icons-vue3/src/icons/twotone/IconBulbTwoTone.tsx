// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import BulbTwotoneSvg from 'gupo-icons-base/es/asn/BulbTwotone';

export interface BulbTwotoneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconBulbTwotone: BulbTwotoneIconType = (props, context) => <Icon name='BulbTwotone' {...{ ...props, ...context.attrs }} icon={BulbTwotoneSvg} />;

IconBulbTwotone.displayName = 'IconBulbTwotone';
IconBulbTwotone.theme = 'twotone';
IconBulbTwotone.originName = 'bulb';

export default IconBulbTwotone;
