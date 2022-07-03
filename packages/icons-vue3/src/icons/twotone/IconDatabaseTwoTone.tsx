// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import DatabaseTwotoneSvg from 'icons-base/es/asn/DatabaseTwotone';

export interface DatabaseTwotoneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconDatabaseTwotone: DatabaseTwotoneIconType = (props, context) => (
    <Icon name='DatabaseTwotone' {...{ ...props, ...context.attrs }} icon={DatabaseTwotoneSvg} />
);

IconDatabaseTwotone.displayName = 'IconDatabaseTwotone';
IconDatabaseTwotone.theme = 'twotone';
IconDatabaseTwotone.originName = 'database';

export default IconDatabaseTwotone;
